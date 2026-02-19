# Quick Reference - Converted JavaScript Files

## Load Order

```html
<!-- 1. Load Nightfarer dependency (must be defined first) -->
<script>
  window.Nightfarer = { /* ... */ };
</script>

<!-- 2. Load effectKeys.js -->
<script src="js/resources/effectKeys.js"></script>

<!-- 3. Load effects.js -->
<script src="js/resources/effects.js"></script>
```

## Available Globals

### EffectKey (from effectKeys.js)
```javascript
EffectKey.duchessBecomeStealthyAfterCritFromBehind  // 0
EffectKey.attacksInflictBloodLoss                    // 73
EffectKey.LENGTH                                      // 850
// ... 851 total keys
```

### EffectGroup (from effects.js)
```javascript
EffectGroup.arcane                    // 0
EffectGroup.attacksInflictBloodLoss   // 1
EffectGroup.vigor                     // 29
// ... 67 total groups
```

### EffectType (from effects.js)
```javascript
EffectType.Buff    // 0
EffectType.Debuff  // 1
```

### effectsArray (from effects.js)
```javascript
// Array of 850 effect objects
effectsArray[0]
// {
//   key: 0,  // EffectKey value
//   nightfarer: 3,  // Nightfarer.Duchess
//   stacks: false
// }
```

### effects (from effects.js)
```javascript
// Map of effect IDs to effect objects (1,117 entries)
const effect = effects.get(7031800);
// Returns effect object
```

## Utility Functions

### isEffectKey(input)
```javascript
isEffectKey(0)  // true
isEffectKey(999)  // false
```

### isEffect(input)
```javascript
const effect = effectsArray[0];
isEffect(effect)  // true
isEffect({})  // false
```

### isSameStartingBonus(effect1, effect2)
```javascript
isSameStartingBonus(effect1, effect2)  // boolean
// Checks if both effects have same startingBonus property
```

### isSameGroup(effect1, effect2)
```javascript
isSameGroup(effect1, effect2)  // boolean
// Checks if both effects belong to same EffectGroup
```

### isSameGroupAndEqualOrBetter(effect1, effect2)
```javascript
isSameGroupAndEqualOrBetter(effect1, effect2)  // boolean
// Checks if effects are in same group and effect1.level <= effect2.level
```

### isMaxLevel(effect)
```javascript
isMaxLevel(effect)  // boolean
// Checks if effect is at maximum level in its group
```

## Example Usage

```javascript
// Find all effects with a specific key
const bloodLossEffects = effectsArray.filter(
  e => e.key === EffectKey.attacksInflictBloodLoss
);

// Get effect by ID
const effect = effects.get(7031800);
if (effect) {
  console.log('Effect key:', effect.key);
  console.log('Nightfarer:', effect.nightfarer);
}

// Check if two effects are in the same group
const effect1 = effectsArray[0];
const effect2 = effectsArray[1];
if (isSameGroup(effect1, effect2)) {
  console.log('Effects are in the same group');
}

// Check effect level
if (isMaxLevel(effect1)) {
  console.log('Effect is at maximum level');
}

// Find effects by group
const arcaneEffects = effectsArray.filter(
  e => e.group === EffectGroup.arcane
);
```

## Effect Object Structure

```javascript
{
  key: Number,              // EffectKey value
  nightfarer?: Number,      // Nightfarer value (optional)
  stacks?: Boolean,         // Can stack? (optional)
  type?: Number,            // EffectType value (optional)
  group?: Number,           // EffectGroup value (optional)
  level?: Number,           // Level within group (optional)
  startingBonus?: Number    // StartingBonus value (optional)
}
```

Note: The `ids` property is deleted during initialization (used to populate effects Map).
