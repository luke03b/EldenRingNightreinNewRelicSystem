// i18n.js - Internationalization system for Elden Ring Nightreign
// Supports Italian (it) and English (en)

const i18n = (() => {
  // Default language
  let currentLanguage = localStorage.getItem('language') || 'it';

  // Translation resources
  const translations = {
    it: {
      // UI labels
      ui: {
        languageLabel: 'Lingua',
        home: 'Home',
        inventory: 'Inventario',
        fusionNormal: 'Fusione Normali',
        fusionNight: 'Fusione Notte',
        tokens: 'Token',
        registry: 'Registro',
        settings: 'Impostazioni',
        loading: 'Caricamento...',
        save: 'Salva',
        cancel: 'Annulla',
        delete: 'Elimina',
        edit: 'Modifica',
        add: 'Aggiungi',
        export: 'Esporta',
        import: 'Importa',
        unknownRelic: 'Reliquia Sconosciuta'
      },
      // Color names
      colors: {
        Red: 'Rosso',
        Blue: 'Blu',
        Yellow: 'Giallo',
        Green: 'Verde',
        Any: 'Qualsiasi'
      },
      // Relic item names
      items: {
        besmirchedFrame: 'Cornice Sbrindellata',
        blackClawNecklace: 'Collana dell\'Artiglio Nero',
        bladeOfNightFragment: 'Frammento di Lama della Notte',
        blessedFlowers: 'Fiori Benedetti',
        blessedIronCoin: 'Moneta di Ferro Benedetta',
        boneLikeStone: 'Pietra Simile a un Osso',
        crackedSealingWax: 'Ceralacca Screpolata',
        crackedWitchsBrooch: 'Spilla della Strega Crepata',
        crownMedal: 'Medaglia della Corona',
        darkNightOfTheBaron: 'Notte Oscura del Barone',
        darkNightOfTheBeast: 'Notte Oscura della Bestia',
        darkNightOfTheChampion: 'Notte Oscura del Campione',
        darkNightOfTheDemon: 'Notte Oscura del Demone',
        darkNightOfTheFathom: 'Notte Oscura dell\'Abisso',
        darkNightOfTheMiasma: 'Notte Oscura del Miasma',
        darkNightOfTheWise: 'Notte Oscura del Saggio',
        delicateBurningScene: 'Scena Ardente Delicata',
        delicateDrizzlyScene: 'Scena Piovigginosa Delicata',
        delicateLuminousScene: 'Scena Luminosa Delicata',
        delicateTranquilScene: 'Scena Tranquilla Delicata',
        edgeOfOrder: 'Orlo dell\'Ordine',
        fellOmenFetish: 'Feticcio del Malaugurio Tremendo',
        fineArrowhead: 'Punta di Freccia Fine',
        goldenDew: 'Rugiada Dorata',
        goldenShell: 'Conchiglia Dorata',
        goldenSprout: 'Germoglio Dorato',
        grandBurningScene: 'Scena Ardente Grandiosa',
        grandDrizzlyScene: 'Scena Piovigginosa Grandiosa',
        grandLuminousScene: 'Scena Luminosa Grandiosa',
        grandTranquilScene: 'Scena Tranquilla Grandiosa',
        largeScenicFlatstone: 'Grande Pietra Piatta Scenografica',
        nightOfTheBaron: 'Notte del Barone',
        nightOfTheBeast: 'Notte della Bestia',
        nightOfTheChampion: 'Notte del Campione',
        nightOfTheDemon: 'Notte del Demone',
        nightOfTheFathom: 'Notte dell\'Abisso',
        nightOfTheLord: 'Notte del Signore',
        nightOfTheMiasma: 'Notte del Miasma',
        nightOfTheWise: 'Notte del Saggio',
        nightShard: 'Scheggia della Notte',
        oldPocketwatch: 'Vecchio Orologio da Tasca',
        oldPortrait: 'Vecchio Ritratto',
        polishedBurningScene: 'Scena Ardente Lucida',
        polishedDrizzlyScene: 'Scena Piovigginosa Lucida',
        polishedLuminousScene: 'Scena Luminosa Lucida',
        polishedTranquilScene: 'Scena Tranquilla Lucida',
        scenicFlatstone: 'Pietra Piatta Scenografica',
        silverTear: 'Lacrima d\'Argento',
        slateWhetstone: 'Cote di Ardesia',
        smallMakeupBrush: 'Piccolo Pennello da Trucco',
        sovereignSigil: 'Sigillo Sovrano',
        stoneStake: 'Palo di Pietra',
        theWyldersEarring: 'Orecchino del Selvaggio',
        thirdVolume: 'Terzo Volume',
        tornBraidedCord: 'Cordone Intrecciato Strappato',
        vestigeOfNight: 'Vestigio della Notte',
        witchsBrooch: 'Spilla della Strega',
        deepDelicateBurningScene: 'Scena Ardente Delicata Profonda',
        deepPolishedBurningScene: 'Scena Ardente Lucida Profonda',
        deepGrandBurningScene: 'Scena Ardente Grandiosa Profonda',
        deepDelicateDrizzlyScene: 'Scena Piovigginosa Delicata Profonda',
        deepPolishedDrizzlyScene: 'Scena Piovigginosa Lucida Profonda',
        deepGrandDrizzlyScene: 'Scena Piovigginosa Grandiosa Profonda',
        deepDelicateLuminousScene: 'Scena Luminosa Delicata Profonda',
        deepPolishedLuminousScene: 'Scena Luminosa Lucida Profonda',
        deepGrandLuminousScene: 'Scena Luminosa Grandiosa Profonda',
        deepDelicateTranquilScene: 'Scena Tranquilla Delicata Profonda',
        deepPolishedTranquilScene: 'Scena Tranquilla Lucida Profonda',
        deepGrandTranquilScene: 'Scena Tranquilla Grandiosa Profonda',
        theWillOfTheBalancers: 'La Volontà dei Bilanciatori',
        theNightOfDregs: 'La Notte delle Fecce',
        cleansingTear: 'Lacrima Purificatrice',
        noteMyDearSuccessor: 'Nota, Mio Caro Successore',
        theWillOfTheBalance: 'La Volontà dell\'Equilibrio',
        leatherMonocleCase: 'Custodia di Cuoio per Monocolo',
        glassNecklace: 'Collana di Vetro'
      }
    },
    en: {
      // UI labels
      ui: {
        languageLabel: 'Language',
        home: 'Home',
        inventory: 'Inventory',
        fusionNormal: 'Normal Fusion',
        fusionNight: 'Night Fusion',
        tokens: 'Tokens',
        registry: 'Registry',
        settings: 'Settings',
        loading: 'Loading...',
        save: 'Save',
        cancel: 'Cancel',
        delete: 'Delete',
        edit: 'Edit',
        add: 'Add',
        export: 'Export',
        import: 'Import',
        unknownRelic: 'Unknown Relic'
      },
      // Color names
      colors: {
        Red: 'Red',
        Blue: 'Blue',
        Yellow: 'Yellow',
        Green: 'Green',
        Any: 'Any'
      },
      // Relic item names
      items: {
        besmirchedFrame: 'Besmirched Frame',
        blackClawNecklace: 'Black Claw Necklace',
        bladeOfNightFragment: 'Blade of Night Fragment',
        blessedFlowers: 'Blessed Flowers',
        blessedIronCoin: 'Blessed Iron Coin',
        boneLikeStone: 'Bone-Like Stone',
        crackedSealingWax: 'Cracked Sealing Wax',
        crackedWitchsBrooch: 'Cracked Witch\'s Brooch',
        crownMedal: 'Crown Medal',
        darkNightOfTheBaron: 'Dark Night of the Baron',
        darkNightOfTheBeast: 'Dark Night of the Beast',
        darkNightOfTheChampion: 'Dark Night of the Champion',
        darkNightOfTheDemon: 'Dark Night of the Demon',
        darkNightOfTheFathom: 'Dark Night of the Fathom',
        darkNightOfTheMiasma: 'Dark Night of the Miasma',
        darkNightOfTheWise: 'Dark Night of the Wise',
        delicateBurningScene: 'Delicate Burning Scene',
        delicateDrizzlyScene: 'Delicate Drizzly Scene',
        delicateLuminousScene: 'Delicate Luminous Scene',
        delicateTranquilScene: 'Delicate Tranquil Scene',
        edgeOfOrder: 'Edge of Order',
        fellOmenFetish: 'Fell Omen Fetish',
        fineArrowhead: 'Fine Arrowhead',
        goldenDew: 'Golden Dew',
        goldenShell: 'Golden Shell',
        goldenSprout: 'Golden Sprout',
        grandBurningScene: 'Grand Burning Scene',
        grandDrizzlyScene: 'Grand Drizzly Scene',
        grandLuminousScene: 'Grand Luminous Scene',
        grandTranquilScene: 'Grand Tranquil Scene',
        largeScenicFlatstone: 'Large Scenic Flatstone',
        nightOfTheBaron: 'Night of the Baron',
        nightOfTheBeast: 'Night of the Beast',
        nightOfTheChampion: 'Night of the Champion',
        nightOfTheDemon: 'Night of the Demon',
        nightOfTheFathom: 'Night of the Fathom',
        nightOfTheLord: 'Night of the Lord',
        nightOfTheMiasma: 'Night of the Miasma',
        nightOfTheWise: 'Night of the Wise',
        nightShard: 'Night Shard',
        oldPocketwatch: 'Old Pocketwatch',
        oldPortrait: 'Old Portrait',
        polishedBurningScene: 'Polished Burning Scene',
        polishedDrizzlyScene: 'Polished Drizzly Scene',
        polishedLuminousScene: 'Polished Luminous Scene',
        polishedTranquilScene: 'Polished Tranquil Scene',
        scenicFlatstone: 'Scenic Flatstone',
        silverTear: 'Silver Tear',
        slateWhetstone: 'Slate Whetstone',
        smallMakeupBrush: 'Small Makeup Brush',
        sovereignSigil: 'Sovereign Sigil',
        stoneStake: 'Stone Stake',
        theWyldersEarring: 'The Wylder\'s Earring',
        thirdVolume: 'Third Volume',
        tornBraidedCord: 'Torn Braided Cord',
        vestigeOfNight: 'Vestige of Night',
        witchsBrooch: 'Witch\'s Brooch',
        deepDelicateBurningScene: 'Deep Delicate Burning Scene',
        deepPolishedBurningScene: 'Deep Polished Burning Scene',
        deepGrandBurningScene: 'Deep Grand Burning Scene',
        deepDelicateDrizzlyScene: 'Deep Delicate Drizzly Scene',
        deepPolishedDrizzlyScene: 'Deep Polished Drizzly Scene',
        deepGrandDrizzlyScene: 'Deep Grand Drizzly Scene',
        deepDelicateLuminousScene: 'Deep Delicate Luminous Scene',
        deepPolishedLuminousScene: 'Deep Polished Luminous Scene',
        deepGrandLuminousScene: 'Deep Grand Luminous Scene',
        deepDelicateTranquilScene: 'Deep Delicate Tranquil Scene',
        deepPolishedTranquilScene: 'Deep Polished Tranquil Scene',
        deepGrandTranquilScene: 'Deep Grand Tranquil Scene',
        theWillOfTheBalancers: 'The Will of the Balancers',
        theNightOfDregs: 'The Night of Dregs',
        cleansingTear: 'Cleansing Tear',
        noteMyDearSuccessor: 'Nota: Mio Caro Successore',
        theWillOfTheBalance: 'The Will of the Balance',
        leatherMonocleCase: 'Leather Monocle Case',
        glassNecklace: 'Glass Necklace'
      }
    }
  };

  return {
    /**
     * Get current language
     */
    getLanguage: () => currentLanguage,

    /**
     * Set language and persist to localStorage
     */
    setLanguage: (lang) => {
      if (translations[lang]) {
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        // Trigger custom event for language change
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
        return true;
      }
      return false;
    },

    /**
     * Get translation for a key
     * @param {string} key - Translation key (e.g., 'ui.home', 'items.nightShard')
     * @param {string} fallback - Fallback text if translation not found
     */
    t: (key, fallback = '') => {
      const keys = key.split('.');
      let value = translations[currentLanguage];
      
      for (const k of keys) {
        if (value && value[k] !== undefined) {
          value = value[k];
        } else {
          return fallback || key;
        }
      }
      
      return value;
    },

    /**
     * Get all available languages
     */
    getAvailableLanguages: () => {
      return [
        { code: 'it', name: 'Italiano' },
        { code: 'en', name: 'English' }
      ];
    },

    /**
     * Get translation for item name by key
     */
    getItemName: (itemKey) => {
      return translations[currentLanguage].items[itemKey] || itemKey;
    },

    /**
     * Get translation for color
     */
    getColorName: (colorKey) => {
      return translations[currentLanguage].colors[colorKey] || colorKey;
    }
  };
})();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = i18n;
}
