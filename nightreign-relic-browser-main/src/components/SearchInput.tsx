import { Box, Chip, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { type Dispatch, type SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { type Effect } from "../resources/effects";
import {
  colorFilterOptions,
  type ColorFilterOption,
} from "../utils/ColorFilterOptions";
import { EffectsAutocomplete } from "./EffectsAutocomplete";
import { RelicColorChip } from "./RelicColorChip";

interface SearchInputProps {
  onSearchChange: (searchTerm: string) => void;
  selectedColor: ColorFilterOption;
  onColorChange: (colorFilter: ColorFilterOption) => void;
  availableEffects: Effect[];
  filterSell: boolean;
  onFilterSellChange: Dispatch<SetStateAction<boolean>>;
  selectedEffects?: Effect[];
  onEffectSelect?: (effect: Effect) => void;
  onEffectRemove?: (effect: Effect) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  onSearchChange,
  selectedColor,
  onColorChange,
  availableEffects,
  filterSell,
  onFilterSellChange,
  selectedEffects = [],
  onEffectSelect,
  onEffectRemove,
}) => {
  const { t } = useTranslation();

  return (
    <Stack spacing={2}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
          py: 2,
        }}
      >
        <EffectsAutocomplete
          onSearchChange={onSearchChange}
          onChange={onEffectSelect}
          availableEffects={availableEffects}
          placeholder="Search relics by name or effect..."
          clearOnSelect={!!onEffectSelect}
        />

        <ToggleButtonGroup
          exclusive
          aria-label="Relic Color Filter"
          value={selectedColor}
          onChange={(_, newColor) => {
            if (newColor !== null) {
              onColorChange(newColor);
            }
          }}
        >
          {colorFilterOptions.map((option) => (
            <ToggleButton
              key={option.color}
              value={option}
              sx={{ textTransform: "none" }}
            >
              <RelicColorChip color={option.color} type={option.type} />
            </ToggleButton>
          ))}
        </ToggleButtonGroup>

        <ToggleButton
          value="check"
          selected={filterSell}
          onChange={() => onFilterSellChange((prevSelected) => !prevSelected)}
        >
          <Chip label="SELL" size="small" />
        </ToggleButton>
      </Box>

      {selectedEffects.length > 0 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 1,
            pb: 1,
          }}
        >
          {selectedEffects.map((effect) => (
            <Chip
              key={effect.key}
              label={t(`effects.${effect.key}`)}
              onDelete={onEffectRemove ? () => onEffectRemove(effect) : undefined}
              color="primary"
              variant="outlined"
            />
          ))}
        </Box>
      )}
    </Stack>
  );
};
