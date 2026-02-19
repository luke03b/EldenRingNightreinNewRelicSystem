// nightfarers.js
// Nightfarer enum for effect system
// Converted from nightreign-relic-browser-main/src/utils/Nightfarers.ts

(function() {
  "use strict";

  // Nightfarer enum - character classes in Elden Ring Nightreign
  const Nightfarer = {
    Wylder: 0,
    Guardian: 1,
    Ironeye: 2,
    Duchess: 3,
    Raider: 4,
    Revenant: 5,
    Recluse: 6,
    Executor: 7,
    Scholar: 8,
    Undertaker: 9,
  };
  Object.freeze(Nightfarer);

  // Export to window
  window.Nightfarer = Nightfarer;

  // Utility function to check if a value is a valid Nightfarer
  window.isNightfarer = function(value) {
    return typeof value === "number" && value >= 0 && value <= 9;
  };

  console.log("Nightfarer enum loaded successfully");
})();
