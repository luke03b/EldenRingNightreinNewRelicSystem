# TypeScript to JavaScript Conversion

This directory contains browser-compatible JavaScript files converted from TypeScript sources.

## Files

- **effectKeys.js** - Converted from `nightreign-relic-browser-main/src/resources/effectKeys.ts`
  - 851 effect key constants
  - Exported as frozen object `window.EffectKey`
  
- **effects.js** - Converted from `nightreign-relic-browser-main/src/resources/effects.ts`
  - Enums: `EffectGroup` (67 members), `EffectType` (2 members), `StartingBonus` (2 members)
  - Effect data array with 850 effects
  - Effects Map with 1,117 effect IDs
  - Utility functions for effect operations

## Conversion Details

The TypeScript files were converted to browser-compatible JavaScript with the following transformations:

1. **Const Enums** → Frozen Objects
   - `const enum EffectKey` → `const EffectKey = { ... }; Object.freeze(EffectKey);`
   - Each enum member assigned a numeric value starting from 0

2. **Type Annotations Removed**
   - All TypeScript type annotations removed (`: Type`, `: boolean`, etc.)
   - Type guards converted to regular boolean returns

3. **Interfaces Removed**
   - TypeScript interfaces (`EffectArrayElement`, `EffectWithGroupArrayElement`, `Effect`) removed
   - Object structures preserved without type definitions

4. **Module System**
   - Uses IIFE (Immediately Invoked Function Expression) pattern
   - All exports attached to `window` object for global access
   - Dependencies checked at runtime

## Usage

Load the files in order (after loading dependencies):

```html
<!-- Load Nightfarer first (dependency) -->
<script src="path/to/Nightfarer.js"></script>

<!-- Load effectKeys.js -->
<script src="js/resources/effectKeys.js"></script>

<!-- Load effects.js -->
<script src="js/resources/effects.js"></script>

<script>
  // Access the converted modules
  console.log(EffectKey.LENGTH);  // 850
  console.log(effectsArray.length);  // 850
  console.log(effects.size);  // 1117
  
  // Use utility functions
  const effect1 = effectsArray[0];
  const effect2 = effectsArray[1];
  console.log(isSameGroup(effect1, effect2));
</script>
```

## Dependencies

`effects.js` requires:
- `window.EffectKey` (from effectKeys.js)
- `window.Nightfarer` (must be defined before loading effects.js)

## Exports

### From effectKeys.js
- `window.EffectKey` - Frozen object with 851 effect key constants

### From effects.js
- `window.EffectGroup` - Frozen object with 67 effect group constants
- `window.EffectType` - Frozen object with 2 effect type constants
- `window.effectsArray` - Array of 850 effect objects
- `window.effects` - Map of effect IDs to effect objects (1,117 entries)
- `window.isEffectKey(input)` - Check if input is a valid effect key
- `window.isEffect(input)` - Check if input is an effect object
- `window.isSameStartingBonus(effect1, effect2)` - Compare starting bonuses
- `window.isSameGroup(effect1, effect2)` - Check if effects are in same group
- `window.isSameGroupAndEqualOrBetter(effect1, effect2)` - Compare effect levels
- `window.isMaxLevel(effect)` - Check if effect is at maximum level

## Testing

A test file is provided at `/test_converted_js.html` to verify the conversion.

Open it in a browser to run basic validation tests.

## Original Files

The original TypeScript files remain unchanged at:
- `nightreign-relic-browser-main/src/resources/effectKeys.ts` (853 lines)
- `nightreign-relic-browser-main/src/resources/effects.ts` (4,820 lines)
