// RelicParser.js
// Simplified Relic Parser for Elden Ring Nightreign save files

class RelicParser {
  /**
   * Reads a little-endian integer from bytes
   */
  static readIntLE(bytes) {
    let result = 0;
    for (let i = 0; i < bytes.length; i++) {
      result |= bytes[i] << (8 * i);
    }
    return result;
  }

  /**
   * Finds the offset of a hex pattern in data
   */
  static findHexOffset(data, hexPattern, offset = 0) {
    try {
      const pattern = hexPattern.replace(/\s+/g, "").toLowerCase();
      const patternBytes = new Uint8Array(
        pattern.match(/.{2}/g)?.map((byte) => parseInt(byte, 16)) || []
      );

      const start = Math.max(0, Math.min(offset, data.length));
      for (let i = start; i <= data.length - patternBytes.length; i++) {
        let match = true;
        for (let j = 0; j < patternBytes.length; j++) {
          if (data[i + j] !== patternBytes[j]) {
            match = false;
            break;
          }
        }
        if (match) {
          return i;
        }
      }
      return null;
    } catch (error) {
      console.error("Failed to find hex pattern:", error);
      return null;
    }
  }

  /**
   * Parses relics from save data
   */
  static parseRelics(currentEntry, patternOffsetStart, patternOffsetEnd) {
    const foundSlots = [];
    const currentEntryOffset = currentEntry.slice(
      patternOffsetStart,
      patternOffsetEnd
    );

    const getSlotSize = (b4) => {
      switch (b4) {
        case 0xc0:
          return 80;
        case 0x90:
          return 16;
        case 0x80:
          return 80;
        default:
          return null;
      }
    };

    const validB3Values = new Set([0x80, 0x83, 0x81, 0x82, 0x84, 0x85]);
    const validB4Values = new Set([0x80, 0x90, 0xc0]);

    // Find alignment point
    const isValidSlotStart = (pos) => {
      if (pos + 4 > currentEntryOffset.length) {
        return { valid: false, slotSize: null };
      }

      const b3 = currentEntryOffset[pos + 2];
      const b4 = currentEntryOffset[pos + 3];

      if (validB3Values.has(b3) && validB4Values.has(b4)) {
        const slotSize = getSlotSize(b4);
        if (slotSize && pos + slotSize <= currentEntryOffset.length) {
          return { valid: true, slotSize };
        }
      }
      return { valid: false, slotSize: null };
    };

    // Find the first valid slot
    let startOffset = null;
    for (let i = 0; i < currentEntryOffset.length - 8; i++) {
      const { valid, slotSize: firstSlotSize } = isValidSlotStart(i);
      if (valid && firstSlotSize) {
        const nextPos = i + firstSlotSize;
        const { valid: validNext } = isValidSlotStart(nextPos);

        const isEmptyNext =
          nextPos + 8 <= currentEntryOffset.length &&
          currentEntryOffset
            .slice(nextPos, nextPos + 8)
            .every((byte, idx) => (idx < 4 ? byte === 0x00 : byte === 0xff));

        if (validNext || isEmptyNext) {
          startOffset = i;
          break;
        }
      }
    }

    if (startOffset === null) {
      return [];
    }

    // Process all slots
    let i = startOffset;
    while (i < currentEntryOffset.length - 4) {
      if (i + 4 <= currentEntryOffset.length) {
        const b3 = currentEntryOffset[i + 2];
        const b4 = currentEntryOffset[i + 3];

        if (validB3Values.has(b3) && validB4Values.has(b4)) {
          const slotSize = getSlotSize(b4);

          if (slotSize && i + slotSize <= currentEntryOffset.length) {
            if (b4 === 0xc0) {
              const slotData = currentEntryOffset.slice(i, i + slotSize);
              const idBytes = slotData.slice(0, 4);
              const id = this.readIntLE(idBytes);

              // Extract item ID (bytes 4-6)
              const itemIdBytes = slotData.slice(4, 7);
              const itemId = this.readIntLE(itemIdBytes);

              // Extract effect IDs
              const effectKeys = [
                slotData.slice(16, 20),
                slotData.slice(20, 24),
                slotData.slice(24, 28),
                slotData.slice(28, 32),
              ].map((bytes) => this.readIntLE(bytes));

              const debuffKeys = [
                slotData.slice(56, 60),
                slotData.slice(60, 64),
                slotData.slice(64, 68),
                slotData.slice(68, 72),
              ].map((bytes) => this.readIntLE(bytes));

              const effects = effectKeys
                .filter((id) => id !== -1)
                .map((effectKey, index) => {
                  const debuffKey = debuffKeys[index];
                  if (debuffKey !== -1) {
                    return { buff: effectKey, debuff: debuffKey };
                  }
                  return { buff: effectKey };
                });

              foundSlots.push({
                id,
                itemId,
                effects,
                idBytes,
              });
            }

            i += slotSize;
            continue;
          }
        }
      }

      // Check for empty slots
      if (i + 8 <= currentEntryOffset.length) {
        const emptyPattern = currentEntryOffset.slice(i, i + 8);
        const isEmptySlot =
          emptyPattern.slice(0, 4).every((b) => b === 0x00) &&
          emptyPattern.slice(4, 8).every((b) => b === 0xff);

        if (isEmptySlot) {
          i += 8;
          continue;
        }
      }

      i += 1;
    }

    return foundSlots;
  }

  /**
   * Extracts character names from BND4 entry
   */
  static getNames(bnd4Entry) {
    const namesEntry = bnd4Entry.cleanData;
    const names = [];
    let searchOffset = 0;

    for (let i = 0; i < 10; i++) {
      const patternOffset = this.findHexOffset(
        namesEntry,
        "27 00 00 46 41 43 45",
        searchOffset
      );
      if (patternOffset === null) {
        break;
      }

      searchOffset = patternOffset + 7;
      const nameOffset = patternOffset - 51;
      const nameTerminatorOffset = this.findHexOffset(
        namesEntry,
        "00 00",
        nameOffset
      );
      if (nameTerminatorOffset === null) {
        break;
      }

      const nameBytes = namesEntry.slice(nameOffset, nameTerminatorOffset + 1);
      names.push(nameBytes);
    }

    return names;
  }

  /**
   * Main function to parse a character slot and extract relics
   */
  static parseCharacterSlot(nameBytes, currentEntry) {
    const decoder = new TextDecoder("utf-16le");
    const name = decoder.decode(nameBytes);

    // Convert name bytes to hex pattern
    const hexPattern = Array.from(nameBytes)
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    // Find pattern boundaries
    const fixedPatternOffset = this.findHexOffset(
      currentEntry.cleanData,
      hexPattern
    );

    if (fixedPatternOffset === null) {
      return { name, relics: [] };
    }

    // Find the end pattern
    const hexPatternEnd = "ffffffff";
    const searchStartPosition = fixedPatternOffset + 1000;

    if (searchStartPosition >= currentEntry.cleanData.length) {
      return { name, relics: [] };
    }

    const fixedPatternOffsetEnd = this.findHexOffset(
      currentEntry.cleanData,
      hexPatternEnd,
      searchStartPosition
    );

    if (fixedPatternOffsetEnd === null) {
      return { name, relics: [] };
    }

    // Parse relics
    const relics = this.parseRelics(
      currentEntry.cleanData,
      32,
      fixedPatternOffset - 100
    );

    return { name, relics };
  }

  /**
   * Get color name from item ID (simplified mapping)
   */
  static getItemColor(itemId) {
    // This is a simplified color mapping
    // Red items: 11xxx, Blue items: 10xxx, Yellow items: 13xxx/15xxx, Green items: 14xxx/17xxx/18xxx
    const idStr = itemId.toString();
    if (idStr.startsWith("11")) return "Rosso";
    if (idStr.startsWith("10")) return "Blu";
    if (idStr.startsWith("13") || idStr.startsWith("15")) return "Giallo";
    if (idStr.startsWith("14") || idStr.startsWith("17") || idStr.startsWith("18")) return "Verde";
    
    // Random color if unknown
    return ["Rosso", "Blu", "Giallo", "Verde"][Math.floor(Math.random() * 4)];
  }

  /**
   * Get relic grade from effect count
   */
  static getRelicGrade(effectCount) {
    if (effectCount === 1) return 1;
    if (effectCount === 2) return 2;
    if (effectCount === 3) return 3;
    return 2; // Default
  }

  /**
   * Get relic size from grade
   */
  static getRelicSize(grade) {
    const sizeMap = { 1: "Piccola", 2: "Media", 3: "Grande" };
    return sizeMap[grade] || "Media";
  }
}

// Export for use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = RelicParser;
}
