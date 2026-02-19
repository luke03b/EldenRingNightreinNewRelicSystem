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
      },
      // Relic effects
      effects: {

        'duchessBecomeStealthyAfterCritFromBehind':
          "[Duchess] Become difficult to spot and silence footsteps after landing critical from behind",
        'duchessCharacterSkillInflictsSleep':
          "[Duchess] Character Skill inflicts sleep upon enemies",
        'duchessDaggerChainAttackReprises':
          "[Duchess] Dagger chain attack reprises event upon nearby enemies",
        'duchessDefeatingEnemiesWhileArtActiveUpsAttack':
          "[Duchess] Defeating enemies while Art is active ups attack power",
        'duchessDurationOfUltimateArtExtended':
          "[Duchess] Duration of Ultimate Art extended",
        'duchessImprovedCharacterSkillAttackPower':
          "[Duchess] Improved Character Skill Attack Power",
        'executorAttackPowerUpWhileUltimateArtActive':
          "[Executor] Attack power up while Ultimate Art is active",
        'executorCharacterSkillBoostsAttackButDrainsHP':
          "[Executor] Character Skill Boosts Attack but Attacking Drains HP",
        'executorImprovesEffectButLowersResistance':
          "[Executor] Improves effect of ability but lowers resistance to status ailments",
        'executorRoaringRestoresHPWhileArtActive':
          "[Executor] Roaring restores HP while Art is active",
        'executorUnlockingCursedSwordRestoresHP':
          "[Executor] While Character Skill is active, unlocking use of cursed sword restores HP",
        'guardianBecomeTargetOfEnemyAggression':
          "[Guardian] Become the target of enemy aggression when ability is activated",
        'guardianCharacterSkillInflictsHolyDamage':
          "[Guardian] Character Skill inflicts Holy damage",
        'guardianCreatesWhirlwindWhenChargingHalberd':
          "[Guardian] Creates whirlwind when charging halberd attacks",
        'guardianDamageNegationForAlliesImproved':
          "[Guardian] Damage negation for allies improved when using Ultimate Art",
        'guardianImprovedCharacterSkillRange':
          "[Guardian] Improved Character Skill range",
        'guardianIncreasedDurationForCharacterSkill':
          "[Guardian] Increased duration for Character Skill",
        'guardianSuccessfulGuardsSendOutShockwaves':
          "[Guardian] Successful guards send out shockwaves while ability is active",
        'guardianRestoresAlliesHPWhenCharacterSkillUsed':
          "[Guardian] Restores allies' HP when Character Skill is used",
        'guardianSlowlyRestoresNearbyAlliesHP':
          "[Guardian] Slowly restores nearby allies' HP while Art is active",
        'ironeyeAdditionalCharacterSkillUse':
          "[Ironeye] +1 additional Character Skill use",
        'ironeyeArtChargeActivationAddsPoisonEffect':
          "[Ironeye] Art Charge Activation Adds Poison Effect",
        'ironeyeBoostsThrustingCounterattacksAfterArt':
          "[Ironeye] Boosts thrusting counterattacks after executing Art",
        'ironeyeExtendsDurationOfWeakPoint':
          "[Ironeye] Extends duration of weak point",
        'raiderCharacterSkillDamageUp':
          "[Raider] Character Skill damage up, damage negation impaired during use",
        'raiderDamageTakenWhileUsingCharacterSkillImprovesAttack':
          "[Raider] Damage taken while using Character Skill improves attack power and stamina",
        'raiderDurationOfUltimateArtExtended':
          "[Raider] Duration of Ultimate Art extended",
        'raiderPermanentlyIncreaseAttackPower':
          "[Raider] Permanently increase attack power when performing Character Skill's final attack",
        'recluseActivatingUltimateArtRaisesMaxHP':
          "[Recluse] Activating Ultimate Art raises Max HP",
        'recluseCollecting4AffinityResiduesImprovesAffinityAttackPower':
          "[Recluse] Collecting 4 Affinity Residues Improves Affinity Attack Power",
        'recluseCollectingAffinityResidueActivatesTerraMagica':
          "[Recluse] Collecting affinity residue activates Terra Magica",
        'recluseExtendsDurationOfBloodSigils':
          "[Recluse] Extends duration of blood sigils",
        'recluseSufferBloodLossAndIncreaseAttackPower':
          "[Recluse] Suffer blood loss and increase attack power upon Art activation",
        'revenantAbilityActivationChanceIncreased':
          "[Revenant] Ability activation chance increased",
        'revenantExpendOwnHPToFullyHealNearbyAllies':
          "[Revenant] Expend own HP to fully heal nearby allies when activating Art",
        'revenantPowerUpWhileFightingAlongsideFamily':
          "[Revenant] Power up while fighting alongside family",
        'revenantStrengthensFamilyAndAlliesWhenUltimateArtActivated':
          "[Revenant] Strengthens family and allies when Ultimate Art is activated",
        'revenantTriggerGhostflameExplosionDuringUltimateArtActivation':
          "[Revenant] Trigger ghostflame explosion during Ultimate Art activation",
        'runes60kAtStart30kOnDeath':
          "[Runes] 60k at start, 30k on death",
        'wylderAdditionalCharacterSkillUse':
          "[Wylder] +1 additional Character Skill use",
        'wylderArtActivationSpreadsFireInArea':
          "[Wylder] Art activation spreads fire in area",
        'wylderArtGaugeGreatlyFilledWhenAbilityActivated':
          "[Wylder] Art gauge greatly filled when ability is activated",
        'wylderCharacterSkillInflictsBloodLoss':
          "[Wylder] Character Skill inflicts Blood Loss",
        'wylderStandardAttacksEnhancedWithFieryFollowUpsWhenUsingCharacterSkill':
          "[Wylder] Standard attacks enhanced with fiery follow-ups when using Character Skill (greatsword only)",
        'wylderImpairedDamageNegationImprovedAttackPowerStaminaAfterArtActivation':
          "[Wylder] Impaired damage negation, improved attack power & stamina after Art activation",
        'wylderImprovedAttackPowerWhenAbilityActivated':
          "[Wylder] Improved attack power when ability is activated",
        'wylderImprovedAttackPowerWhenCharacterSkillActivated':
          "[Wylder] Improved attack power when Character Skill is activated",
        'wylderReducedCooldownTimeForCharacterSkill':
          "[Wylder] Reduced cooldown time for Character Skill",
        'acidMistUponChargedThrust': "Acid Mist upon Charged Thrust",
        'addFireToWeapon': "Add Fire to Weapon",
        'addHolyToWeapon': "Add Holy to Weapon",
        'addLightningToWeapon': "Add Lightning to Weapon",
        'addMagicToWeapon': "Add Magic to Weapon",
        'arcanePlus1': "Arcane +1",
        'arcanePlus2': "Arcane +2",
        'arcanePlus3': "Arcane +3",
        'armamentDealsFireDamagePlus1AtStartOfExpedition':
          "Armament deals fire damage +1 at start of expedition",
        'artGaugeChargedFromSuccessfulGuarding':
          "Art gauge charged from successful guarding",
        'artGaugeFillsModeratelyUponCriticalHit':
          "Art gauge fills moderately upon critical hit",
        'attackBoostDragons': "Attack Boost [Dragons]",
        'attackBoostLifeformsBornOfFallingStars':
          "Attack Boost [Lifeforms Born of Falling Stars]",
        'attackBoostThoseWhoLiveInDeath':
          "Attack Boost [Those Who Live in Death]",
        'attackBoostFromNearbyAllies':
          "Attack Boost from Nearby Allies",
        'attackPowerIncreasesAfterUsingGreaseItems':
          "Attack power increases after using grease items",
        'attackPowerPermanentlyIncreasedForEachEvergaolPrisonerDefeated':
          "Attack power permanently increased for each evergaol prisoner defeated",
        'attackPowerUpAfterDefeatingANightInvader':
          "Attack power up after defeating a Night Invader",
        'attackPowerUpWhenFacingFrostbiteAfflictedEnemy':
          "Attack power up when facing frostbite-afflicted enemy",
        'attackPowerUpWhenFacingPoisonAfflictedEnemy':
          "Attack power up when facing poison-afflicted enemy",
        'attackPowerUpWhenFacingScarletRotAfflictedEnemy':
          "Attack power up when facing scarlet rot-afflicted enemy",
        'attackPowerUpWhenFacingSleepAfflictedEnemy':
          "Attack power up when facing sleep-afflicted enemy",
        'attackUpWhenWieldingTwoArmaments':
          "Attack Up when Wielding Two Armaments",
        'attacksCreateMagicBurstsVersusSleepingEnemies':
          "Attacks Create Magic Bursts Versus Sleeping Enemies",
        'attacksInflictBloodLoss': "Attacks Inflict Blood Loss",
        'attacksInflictBloodLossPlus1':
          "Attacks Inflict Blood Loss +1",
        'attacksInflictBloodLossPlus2':
          "Attacks Inflict Blood Loss +2",
        'attacksInflictDeathBlight': "Attacks Inflict Death Blight",
        'attacksInflictFrost': "Attacks Inflict Frost",
        'attacksInflictFrostPlus1': "Attacks Inflict Frost +1",
        'attacksInflictFrostPlus2': "Attacks Inflict Frost +2",
        'attacksInflictFrostPlus3': "Attacks Inflict Frost +3",
        'attacksInflictMadness': "Attacks Inflict Madness",
        'attacksInflictPoison': "Attacks Inflict Poison",
        'attacksInflictPoisonPlus1': "Attacks Inflict Poison +1",
        'attacksInflictPoisonPlus2': "Attacks Inflict Poison +2",
        'attacksInflictRot': "Attacks Inflict Rot",
        'attacksInflictScarletRot': "Attacks Inflict Scarlet Rot",
        'attacksInflictScarletRotPlus1':
          "Attacks Inflict Scarlet Rot +1",
        'attacksInflictScarletRotPlus2':
          "Attacks Inflict Scarlet Rot +2",
        'attacksInflictSleep': "Attacks Inflict Sleep",
        'attacksInflictSleepPlus1': "Attacks Inflict Sleep +1",
        'attacksInflictSleepPlus2': "Attacks Inflict Sleep +2",
        'attacksInflictSleepPlus3': "Attacks Inflict Sleep +3",
        'bewitchingBranchesInPossessionAtStartOfExpedition':
          "Bewitching Branches in possession at start of expedition",
        'blackFlamesUponChargedSlash':
          "Black Flames upon Charged Slash",
        'bloodLossCritThornsOfPunishment':
          "Blood Loss Crit: Thorns of Punishment",
        'bloodLossInVicinityIncreasesAttackPower':
          "Blood Loss in Vicinity Increases Attack Power",
        'bloodLossIncreasesAttackPower':
          "Blood Loss Increases Attack Power",
        'bloodfliesUponPrecisionAiming':
          "Bloodflies upon Precision Aiming",
        'boostsAttackPowerOfAddedAffinityAttacks':
          "Boosts Attack Power of Added Affinity Attacks",
        'brokenStanceActivatesEndure':
          "Broken Stance Activates Endure",
        'changedStrongAttacks': "Changed Strong Attacks",
        'changesCompatibleArmamentsSkillToBloodBladeAtStartOfExpedition':
          "Changes compatible armament's skill to Blood Blade at start of expedition",
        'changesCompatibleArmamentsSkillToChillingMistAtStartOfExpedition':
          "Changes compatible armament's skill to Chilling Mist at start of expedition",
        'changesCompatibleArmamentsSkillToDeterminationAtStartOfExpedition':
          "Changes compatible armament's skill to Determination at start of expedition",
        'changesCompatibleArmamentsSkillToEndureAtStartOfExpedition':
          "Changes compatible armament's skill to Endure at start of expedition",
        'changesCompatibleArmamentsSkillToEruptionAtStartOfExpedition':
          "Changes compatible armament's skill to Eruption at start of expedition",
        'changesCompatibleArmamentsSkillToFlamingStrikeAtStartOfExpedition':
          "Changes compatible armament's skill to Flaming Strike at start of expedition",
        'changesCompatibleArmamentsSkillToGlintbladePhalanxAtStartOfExpedition':
          "Changes compatible armament's skill to Glintblade Phalanx at start of expedition",
        'changesCompatibleArmamentsSkillToGravitasAtStartOfExpedition':
          "Changes compatible armament's skill to Gravitas at start of expedition",
        'changesCompatibleArmamentsSkillToHoarfrostStompAtStartOfExpedition':
          "Changes compatible armament's skill to Hoarfrost Stomp at start of expedition",
        'changesCompatibleArmamentsSkillToLightningSlashAtStartOfExpedition':
          "Changes compatible armament's skill to Lightning Slash at start of expedition",
        'changesCompatibleArmamentsSkillToPoisonMothFlightAtStartOfExpedition':
          "Changes compatible armament's skill to Poison Moth Flight at start of expedition",
        'changesCompatibleArmamentsSkillToPoisonousMistAtStartOfExpedition':
          "Changes compatible armament's skill to Poisonous Mist at start of expedition",
        'changesCompatibleArmamentsSkillToPrayerfulStrikeAtStartOfExpedition':
          "Changes compatible armament's skill to Prayerful Strike at start of expedition",
        'changesCompatibleArmamentsSkillToQuickstepAtStartOfExpedition':
          "Changes compatible armament's skill to Quickstep at start of expedition",
        'changesCompatibleArmamentsSkillToRainOfArrowsAtStartOfExpedition':
          "Changes compatible armament's skill to Rain of Arrows at start of expedition",
        'changesCompatibleArmamentsSkillToSacredBladeAtStartOfExpedition':
          "Changes compatible armament's skill to Sacred Blade at start of expedition",
        'changesCompatibleArmamentsSkillToSeppukuAtStartOfExpedition':
          "Changes compatible armament's skill to Seppuku at start of expedition",
        'changesCompatibleArmamentsSkillToStormStompAtStartOfExpedition':
          "Changes compatible armament's skill to Storm Stomp at start of expedition",
        'changesCompatibleArmamentsSkillToThunderboltAtStartOfExpedition':
          "Changes compatible armament's skill to Thunderbolt at start of expedition",
        'changesCompatibleArmamentsSkillToWhiteShadowsLureAtStartOfExpedition':
          "Changes compatible armament's skill to White Shadow's Lure at start of expedition",
        'characterSkillCooldownReduction':
          "Character Skill Cooldown Reduction",
        'characterSkillCooldownReductionPlus1':
          "Character Skill Cooldown Reduction +1",
        'characterSkillCooldownReductionPlus2':
          "Character Skill Cooldown Reduction +2",
        'characterSkillCooldownReductionPlus3':
          "Character Skill Cooldown Reduction +3",
        'chargedThrustInvokesSleepMist':
          "Charged Thrust Invokes Sleep Mist",
        'colossalArmamentsCoatedInRockWhenPerformingChargedAttacks':
          "Colossal armaments are coated in rock when performing charged attacks",
        'communionGrantsAntiDragonEffect':
          "Communion Grants Anti-Dragon Effect",
        'consecutiveGuardsHardenSkin':
          "Consecutive Guards Harden Skin",
        'continuousHpRecovery': "Continuous HP Recovery",
        'createsHolyGroundAtLowHP': "Creates Holy Ground at Low HP",
        'criticalHitAddsLightningEffect':
          "Critical Hit Adds Lightning Effect",
        'criticalHitBoostsStaminaRecoverySpeed':
          "Critical Hit Boosts Stamina Recovery Speed",
        'criticalHitCreatesSleepMist':
          "Critical Hit Creates Sleep Mist",
        'criticalHitFPRestoration': "Critical Hit FP Restoration",
        'criticalHitHPRestoration': "Critical Hit HP Restoration",
        'criticalHitsBoostAttackPower':
          "Critical Hits Boost Attack Power",
        'criticalHitsDealHugeDamageOnPoisonedEnemies':
          "Critical hits deal huge damage on poisoned enemies",
        'criticalHitsEarnRunes': "Critical Hits Earn Runes",
        'criticalHitsInflictBloodLoss':
          "Critical Hits Inflict Blood Loss",
        'crystalDartsInPossessionAtStartOfExpedition':
          "Crystal Darts in possession at start of expedition",
        'crystalShardsUponMagicCriticalHit':
          "Crystal Shards upon Magic Critical Hit",
        'damageBoostedAfterCriticalHit':
          "Damage Boosted after Critical Hit",
        'darknessConcealsCasterWhileWalking':
          "Darkness Conceals Caster While Walking",
        'deathCritHitCallsDeathLightning':
          "Death Crit. Hit Calls Death Lightning",
        'defeatingEnemiesFillsMoreOfTheArtGauge':
          "Defeating enemies fills more of the Art gauge",
        'defeatingEnemiesNearTotemStelaRestoresHP':
          "Defeating enemies near Totem Stela restores HP",
        'defeatingEnemiesRestoresFP': "Defeating Enemies Restores FP",
        'defeatingEnemiesRestoresHP': "Defeating Enemies Restores HP",
        'defeatingEnemiesRestoresHPForAlliesButNotForSelf':
          "Defeating enemies restores HP for allies but not for self",
        'defeatingGroupCallsVengefulSpirits':
          "Defeating Group Calls Vengeful Spirits",
        'defeatingGroupFiresGoldenShockwave':
          "Defeating Group Fires Golden Shockwave",
        'defeatingGroupReleasesMistOfCharm':
          "Defeating Group Releases Mist of Charm",
        'defeatingGroupReleasesMistOfFrost':
          "Defeating Group Releases Mist of Frost",
        'defeatingGroupSummonsWraiths':
          "Defeating Group Summons Wraiths",
        'defeatingGroupUnleashesLightning':
          "Defeating Group Unleashes Lightning",
        'dexterityPlus1': "Dexterity +1",
        'dexterityPlus2': "Dexterity +2",
        'dexterityPlus3': "Dexterity +3",
        'dmgNegationUpWhileCastingSpells':
          "Dmg Negation Up While Casting Spells",
        'dmgNegationUpWhileChargingAttacks':
          "Dmg Negation Up while Charging Attacks",
        'drawEnemyAttentionWhileGuarding':
          "Draw enemy attention while guarding",
        'endurancePlus1': "Endurance +1",
        'endurancePlus2': "Endurance +2",
        'endurancePlus3': "Endurance +3",
        'extendedSpellDuration': "Extended Spell Duration",
        'failingToCastSorceryRestoresFP':
          "Failing to Cast Sorcery Restores FP",
        'faithPlus1': "Faith +1",
        'faithPlus2': "Faith +2",
        'faithPlus3': "Faith +3",
        'fireAttackFollowsChargeAttacks':
          "Fire Attack Follows Charge Attacks",
        'fireAttackPowerUp': "Fire Attack Power Up",
        'fireAttackPowerUpPlus1': "Fire Attack Power Up +1",
        'fireAttackPowerUpPlus2': "Fire Attack Power Up +2",
        'fireCriticalHitGrantsMaxStaminaBoost':
          "Fire Critical Hit Grants Max Stamina Boost",
        'fireDamageNegationUp': "Fire Damage Negation Up",
        'fireGreaseInPossessionAtStartOfExpedition':
          "Fire Grease in possession at start of expedition",
        'firePotsInPossessionAtStartOfExpedition':
          "Fire Pots in possession at start of expedition",
        'flameOfFrenzyWhileWalking': "Flame of Frenzy While Walking",
        'flaskAlsoHealsAllies': "Flask Also Heals Allies",
        'flaskHealingAlsoRestoresFP':
          "Flask Healing Also Restores FP",
        'fpRecoveryFromSuccessfulGuarding':
          "FP Recovery From Successful Guarding",
        'fpRestorationUponAttacks': "FP Restoration upon Attacks",
        'fpRestorationUponAxeAttacks':
          "FP Restoration upon Axe Attacks",
        'fpRestorationUponBowAttacks':
          "FP Restoration upon Bow Attacks",
        'fpRestorationUponClawAttacks':
          "FP Restoration upon Claw Attacks",
        'fpRestorationUponColossalSwordAttacks':
          "FP Restoration upon Colossal Sword Attacks",
        'fpRestorationUponColossalWeaponAttacks':
          "FP Restoration upon Colossal Weapon Attacks",
        'fpRestorationUponCurvedGreatswordAttacks':
          "FP Restoration upon Curved Greatsword Attacks",
        'fpRestorationUponCurvedSwordAttacks':
          "FP Restoration upon Curved Sword Attacks",
        'fpRestorationUponDaggerAttacks':
          "FP Restoration upon Dagger Attacks",
        'fpRestorationUponFistAttacks':
          "FP Restoration upon Fist Attacks",
        'fpRestorationUponFlailAttacks':
          "FP Restoration upon Flail Attacks",
        'fpRestorationUponGreatHammerAttacks':
          "FP Restoration upon Great Hammer Attacks",
        'fpRestorationUponGreatSpearAttacks':
          "FP Restoration upon Great Spear Attacks",
        'fpRestorationUponGreataxeAttacks':
          "FP Restoration upon Greataxe Attacks",
        'fpRestorationUponGreatswordAttacks':
          "FP Restoration upon Greatsword Attacks",
        'fpRestorationUponHalberdAttacks':
          "FP Restoration upon Halberd Attacks",
        'fpRestorationUponHammerAttacks':
          "FP Restoration upon Hammer Attacks",
        'fpRestorationUponHeavyThrustingSwordAttacks':
          "FP Restoration upon Heavy Thrusting Sword Attacks",
        'fpRestorationUponKatanaAttacks':
          "FP Restoration upon Katana Attacks",
        'fpRestorationUponPikeAttacks':
          "FP Restoration upon Pike Attacks",
        'fpRestorationUponReaperAttacks':
          "FP Restoration upon Reaper Attacks",
        'fpRestorationUponSpearAttacks':
          "FP Restoration upon Spear Attacks",
        'fpRestorationUponStraightSwordAttacks':
          "FP Restoration upon Straight Sword Attacks",
        'fpRestorationUponSuccessiveAttacks':
          "FP Restoration upon Successive Attacks",
        'fpRestorationUponThrustingSwordAttacks':
          "FP Restoration upon Thrusting Sword Attacks",
        'fpRestorationUponTwinbladeAttacks':
          "FP Restoration upon Twinblade Attacks",
        'fpRestorationUponWhipAttacks':
          "FP Restoration upon Whip Attacks",
        'frostbiteIncreasesAttackPower':
          "Frostbite Increases Attack Power",
        'frostbiteProducesAMistOfFrost':
          "Frostbite Produces a Mist of Frost",
        'gestureCrossedLegsBuildsUpMadness':
          "Gesture Crossed Legs Builds Up Madness",
        'glintstoneScrapsInPossessionAtStartOfExpedition':
          "Glintstone Scraps in possession at start of expedition",
        'gradualRestorationByFlask': "Gradual Restoration by Flask",
        'gravityStoneChunksInPossessionAtStartOfExpedition':
          "Gravity Stone Chunks in possession at start of expedition",
        'guardCounterIsGivenABoostBasedOnCurrentHP':
          "Guard counter is given a boost based on current HP",
        'guardCountersActivateHolyAttacks':
          "Guard Counters Activate Holy Attacks",
        'guardCountersCastLightPillar':
          "Guard Counters Cast Light Pillar",
        'guardCountersLaunchSummoningAttack':
          "Guard Counters Launch Summoning Attack",
        'guardingUpsAttackAndCastingSpeeds':
          "Guarding Ups Attack & Casting Speeds",
        'holyAttackFollowsChargeAttacks':
          "Holy Attack Follows Charge Attacks",
        'holyAttackPowerUp': "Holy Attack Power Up",
        'holyAttackPowerUpPlus1': "Holy Attack Power Up +1",
        'holyAttackPowerUpPlus2': "Holy Attack Power Up +2",
        'holyDamageNegationUp': "Holy Damage Negation Up",
        'holyGreaseInPossessionAtStartOfExpedition':
          "Holy Grease in possession at start of expedition",
        'holyShockwaveUponChargedStrike':
          "Holy Shockwave upon Charged Strike",
        'holyWaterPotsInPossessionAtStartOfExpedition':
          "Holy Water Pots in possession at start of expedition",
        'hpRecoveryFromSuccessfulGuarding':
          "HP Recovery from Successful Guarding",
        'hpRecoveryFromSuccessfulGuardingPlus':
          "HP Recovery From Successful Guarding",
        'hpRestorationUponAttacks': "HP Restoration upon Attacks",
        'hpRestorationUponAxeAttacks':
          "HP Restoration upon Axe Attacks",
        'hpRestorationUponBowAttacks':
          "HP Restoration upon Bow Attacks",
        'hpRestorationUponClawAttacks':
          "HP Restoration upon Claw Attacks",
        'hpRestorationUponColossalSwordAttacks':
          "HP Restoration upon Colossal Sword Attacks",
        'hpRestorationUponColossalWeaponAttacks':
          "HP Restoration upon Colossal Weapon Attacks",
        'hpRestorationUponCurvedGreatswordAttacks':
          "HP Restoration upon Curved Greatsword Attacks",
        'hpRestorationUponCurvedSwordAttacks':
          "HP Restoration upon Curved Sword Attacks",
        'hpRestorationUponDaggerAttacks':
          "HP Restoration upon Dagger Attacks",
        'hpRestorationUponFistAttacks':
          "HP Restoration upon Fist Attacks",
        'hpRestorationUponFlailAttacks':
          "HP Restoration upon Flail Attacks",
        'hpRestorationUponGreatHammerAttacks':
          "HP Restoration upon Great Hammer Attacks",
        'hpRestorationUponGreatSpearAttacks':
          "HP Restoration upon Great Spear Attacks",
        'hpRestorationUponGreataxeAttacks':
          "HP Restoration upon Greataxe Attacks",
        'hpRestorationUponGreatswordAttacks':
          "HP Restoration upon Greatsword Attacks",
        'hpRestorationUponHalberdAttacks':
          "HP Restoration upon Halberd Attacks",
        'hpRestorationUponHammerAttacks':
          "HP Restoration upon Hammer Attacks",
        'hpRestorationUponHeavyThrustingSwordAttacks':
          "HP Restoration upon Heavy Thrusting Sword Attacks",
        'hpRestorationUponKatanaAttacks':
          "HP Restoration upon Katana Attacks",
        'hpRestorationUponPikeAttacks':
          "HP Restoration upon Pike Attacks",
        'hpRestorationUponReaperAttacks':
          "HP Restoration upon Reaper Attacks",
        'hpRestorationUponSpearAttacks':
          "HP Restoration upon Spear Attacks",
        'hpRestorationUponStraightSwordAttacks':
          "HP Restoration upon Straight Sword Attacks",
        'hpRestorationUponSuccessiveAttacks':
          "HP Restoration upon Successive Attacks",
        'hpRestorationUponThrustingCounterattack':
          "HP Restoration upon Thrusting Counterattack",
        'hpRestorationUponThrustingSwordAttacks':
          "HP Restoration upon Thrusting Sword Attacks",
        'hpRestorationUponTwinbladeAttacks':
          "HP Restoration upon Twinblade Attacks",
        'hpRestorationUponWhipAttacks':
          "HP Restoration upon Whip Attacks",
        'hpRestorationWithHeadShots':
          "HP Restoration with Head Shots",
        'hpRestoredWhenUsingMedicinalBolusesEtc':
          "HP restored when using medicinal boluses, etc.",
        'hugeRuneDiscountForShopPurchasesWhileOnExpedition':
          "Huge rune discount for shop purchases while on expedition",
        'iceStormSurgeSprint': "Ice Storm Surge Sprint",
        'iceStormUponChargedSlash': "Ice Storm upon Charged Slash",
        'iceStormUponCriticalHitWithFrost':
          "Ice Storm upon Critical Hit with Frost",
        'impairedDamageNegation': "Impaired Damage Negation",
        'impairedPhysicalDamageNegation':
          "Impaired Physical Damage Negation",
        'improvedAttackPowerAtFullHP':
          "Improved Attack Power at Full HP",
        'improvedAttackPowerAtLowHP':
          "Improved Attack Power at Low HP",
        'improvedAttackPowerWhenTwoHanding':
          "Improved Attack Power when Two-Handing",
        'improvedAttackPowerWith3PlusAxesEquipped':
          "Improved Attack Power with 3+ Axes Equipped",
        'improvedAttackPowerWith3PlusBowsEquipped':
          "Improved Attack Power with 3+ Bows Equipped",
        'improvedAttackPowerWith3PlusClawsEquipped':
          "Improved Attack Power with 3+ Claws Equipped",
        'improvedAttackPowerWith3PlusColossalSwordsEquipped':
          "Improved Attack Power with 3+ Colossal Swords Equipped",
        'improvedAttackPowerWith3PlusColossalWeaponsEquipped':
          "Improved Attack Power with 3+ Colossal Weapons Equipped",
        'improvedAttackPowerWith3PlusCurvedGreatswordsEquipped':
          "Improved Attack Power with 3+ Curved Greatswords Equipped",
        'improvedAttackPowerWith3PlusCurvedSwordsEquipped':
          "Improved Attack Power with 3+ Curved Swords Equipped",
        'improvedAttackPowerWith3PlusDaggersEquipped':
          "Improved Attack Power with 3+ Daggers Equipped",
        'improvedAttackPowerWith3PlusFistsEquipped':
          "Improved Attack Power with 3+ Fists Equipped",
        'improvedAttackPowerWith3PlusFlailsEquipped':
          "Improved Attack Power with 3+ Flails Equipped",
        'improvedAttackPowerWith3PlusGreatHammersEquipped':
          "Improved Attack Power with 3+ Great Hammers Equipped",
        'improvedAttackPowerWith3PlusGreatSpearsEquipped':
          "Improved Attack Power with 3+ Great Spears Equipped",
        'improvedAttackPowerWith3PlusGreataxesEquipped':
          "Improved Attack Power with 3+ Greataxes Equipped",
        'improvedAttackPowerWith3PlusGreatswordsEquipped':
          "Improved Attack Power with 3+ Greatswords Equipped",
        'improvedAttackPowerWith3PlusHalberdsEquipped':
          "Improved Attack Power with 3+ Halberds Equipped",
        'improvedAttackPowerWith3PlusHammersEquipped':
          "Improved Attack Power with 3+ Hammers Equipped",
        'improvedAttackPowerWith3PlusHeavyThrustingSwordsEquipped':
          "Improved Attack Power with 3+ Heavy Thrusting Swords Equipped",
        'improvedAttackPowerWith3PlusKatanaEquipped':
          "Improved Attack Power with 3+ Katana Equipped",
        'improvedAttackPowerWith3PlusReapersEquipped':
          "Improved Attack Power with 3+ Reapers Equipped",
        'improvedAttackPowerWith3PlusSpearsEquipped':
          "Improved Attack Power with 3+ Spears Equipped",
        'improvedAttackPowerWith3PlusStraightSwordsEquipped':
          "Improved Attack Power with 3+ Straight Swords Equipped",
        'improvedAttackPowerWith3PlusThrustingSwordsEquipped':
          "Improved Attack Power with 3+ Thrusting Swords Equipped",
        'improvedAttackPowerWith3PlusTwinbladesEquipped':
          "Improved Attack Power with 3+ Twinblades Equipped",
        'improvedAttackPowerWith3PlusWhipsEquipped':
          "Improved Attack Power with 3+ Whips Equipped",
        'improvedAxeAttackPower': "Improved Axe Attack Power",
        'improvedBestialIncantations':
          "Improved Bestial Incantations",
        'improvedBloodLossAndFrostResistance':
          "Improved Blood Loss & Frost Resistance",
        'improvedBloodLossResistance':
          "Improved Blood Loss Resistance",
        'improvedBowAttackPower': "Improved Bow Attack Power",
        'improvedCarianSwordSorcery': "Improved Carian Sword Sorcery",
        'improvedChainAttackFinishers':
          "Improved Chain Attack Finishers",
        'improvedChargeAttacks': "Improved Charge Attacks",
        'improvedChargedIncantation': "Improved Charged Incantation",
        'improvedChargedSkillAttackPower':
          "Improved Charged Skill Attack Power",
        'improvedChargedSorceries': "Improved Charged Sorceries",
        'improvedChargedSpellsAndSkills':
          "Improved Charged Spells & Skills",
        'improvedClawAttackPower': "Improved Claw Attack Power",
        'improvedColossalSwordAttackPower':
          "Improved Colossal Sword Attack Power",
        'improvedColossalWeaponAttackPower':
          "Improved Colossal Weapon Attack Power",
        'improvedCriticalHits': "Improved Critical Hits",
        'improvedCriticalHitsPlus1': "Improved Critical Hits +1",
        'improvedCrystalianSorcery': "Improved Crystalian Sorcery",
        'improvedCurvedGreatswordAttackPower':
          "Improved Curved Greatsword Attack Power",
        'improvedCurvedSwordAttackPower':
          "Improved Curved Sword Attack Power",
        'improvedDaggerAttackPower': "Improved Dagger Attack Power",
        'improvedDamageNegationAtFullHP':
          "Improved Damage Negation at Full HP",
        'improvedDamageNegationAtLowHP':
          "Improved Damage Negation at Low HP",
        'improvedDeathBlightResistance':
          "Improved Death Blight Resistance",
        'improvedDexterity': "Improved Dexterity",
        'improvedDodging': "Improved Dodging",
        'improvedDragonCommunionIncantations':
          "Improved Dragon Communion Incantations",
        'improvedDragonCultIncantations':
          "Improved Dragon Cult Incantations",
        'improvedFireAttackPower': "Improved Fire Attack Power",
        'improvedFireDamageNegation': "Improved Fire Damage Negation",
        'improvedFistAttackPower': "Improved Fist Attack Power",
        'improvedFlailAttackPower': "Improved Flail Attack Power",
        'improvedFrenziedFlameIncantations':
          "Improved Frenzied Flame Incantations",
        'improvedFrostResistance': "Improved Frost Resistance",
        'improvedFundamentalistIncantations':
          "Improved Fundamentalist Incantations",
        'improvedGiantsFlameIncantations':
          "Improved Giants' Flame Incantations",
        'improvedGlintbladeSorcery': "Improved Glintblade Sorcery",
        'improvedGodslayerIncantations':
          "Improved Godslayer Incantations",
        'improvedGravitySorcery': "Improved Gravity Sorcery",
        'improvedGreatHammerAttackPower':
          "Improved Great Hammer Attack Power",
        'improvedGreatSpearAttackPower':
          "Improved Great Spear Attack Power",
        'improvedGreataxeAttackPower':
          "Improved Greataxe Attack Power",
        'improvedGreatswordAttackPower':
          "Improved Greatsword Attack Power",
        'improvedGuardBreaking': "Improved Guard Breaking",
        'improvedGuardCounters': "Improved Guard Counters",
        'improvedGuardingAbility': "Improved Guarding Ability",
        'improvedGuardingAbilityPlus1':
          "Improved Guarding Ability +1",
        'improvedGuardingAbilityPlus2':
          "Improved Guarding Ability +2",
        'improvedHalberdAttackPower': "Improved Halberd Attack Power",
        'improvedHammerAttackPower': "Improved Hammer Attack Power",
        'improvedHeavyThrustingSwordAttackPower':
          "Improved Heavy Thrusting Sword Attack Power",
        'improvedHolyAttackPower': "Improved Holy Attack Power",
        'improvedHolyDamageNegation': "Improved Holy Damage Negation",
        'improvedIncantations': "Improved Incantations",
        'improvedInitialStandardAttack':
          "Improved Initial Standard Attack",
        'improvedInvisibilitySorcery':
          "Improved Invisibility Sorcery",
        'improvedItemDiscovery': "Improved Item Discovery",
        'improvedJumpAttacks': "Improved Jump Attacks",
        'improvedKatanaAttackPower': "Improved Katana Attack Power",
        'improvedLightningAttackPower':
          "Improved Lightning Attack Power",
        'improvedLightningDamageNegation':
          "Improved Lightning Damage Negation",
        'improvedMadnessResistance': "Improved Madness Resistance",
        'improvedMagicAttackPower': "Improved Magic Attack Power",
        'improvedMagicDamageNegation':
          "Improved Magic Damage Negation",
        'improvedNightSorcery': "Improved Night Sorcery",
        'improvedNonPhysicalAttackPower':
          "Improved Non-Physical Attack Power",
        'improvedNonPhysicalDamageNegation':
          "Improved Non-Physical Damage Negation",
        'improvedPerfumingArts': "Improved Perfuming Arts",
        'improvedPhysicalAttackPower':
          "Improved Physical Attack Power",
        'improvedPhysicalDamageNegation':
          "Improved Physical Damage Negation",
        'improvedPikeAttackPower': "Improved Pike Attack Power",
        'improvedPoise': "Improved Poise",
        'improvedPoiseDamageNegationWhenKnockedBackByDamage':
          "Improved Poise & Damage Negation When Knocked Back by Damage",
        'improvedPoiseNearTotemStela':
          "Improved Poise Near Totem Stela",
        'improvedPoisonRotResistance':
          "Improved Poison & Rot Resistance",
        'improvedPoisonResistance': "Improved Poison Resistance",
        'improvedRangedWeaponAttacks':
          "Improved Ranged Weapon Attacks",
        'improvedReaperAttackPower': "Improved Reaper Attack Power",
        'improvedRoarAndBreathAttacks':
          "Improved Roar & Breath Attacks",
        'improvedRotResistance': "Improved Rot Resistance",
        'improvedSkillAttackPower': "Improved Skill Attack Power",
        'improvedSleepMadnessResistance':
          "Improved Sleep & Madness Resistance",
        'improvedSleepResistance': "Improved Sleep Resistance",
        'improvedSorceries': "Improved Sorceries",
        'improvedSpearAttackPower': "Improved Spear Attack Power",
        'improvedSpellCastingSpeed': "Improved Spell Casting Speed",
        'improvedStaminaRecovery': "Improved Stamina Recovery",
        'improvedStaminaRecoveryPlus1':
          "Improved stamina recovery +1",
        'improvedStanceBreaking': "Improved Stance-Breaking",
        'improvedStanceBreakingWhenTwoHanding':
          "Improved Stance-Breaking when Two-Handing",
        'improvedStanceBreakingWhenWieldingTwoArmaments':
          "Improved Stance-Breaking when Wielding Two Armaments",
        'improvedStanceBreakingWithHeadShots':
          "Improved Stance-Breaking with Head Shots",
        'improvedStonediggerSorcery': "Improved Stonedigger Sorcery",
        'improvedStraightSwordAttackPower':
          "Improved Straight Sword Attack Power",
        'improvedThornSorcery': "Improved Thorn Sorcery",
        'improvedThrowingKnifeDamage':
          "Improved Throwing Knife Damage",
        'improvedThrowingPotDamage': "Improved Throwing Pot Damage",
        'improvedThrowingPots': "Improved Throwing Pots",
        'improvedGlintstoneAndGravityStoneDamage':
          "Improved Glintstone and Gravity Stone Damage",
        'improvedThrustingCounterattack':
          "Improved Thrusting Counterattack",
        'improvedThrustingSwordAttackPower':
          "Improved Thrusting Sword Attack Power",
        'improvedTwinbladeAttackPower':
          "Improved Twinblade Attack Power",
        'improvedWhipAttackPower': "Improved Whip Attack Power",
        'increasedMaximumFP': "Increased Maximum FP",
        'increasedMaximumHP': "Increased Maximum HP",
        'increasedMaximumStamina': "Increased Maximum Stamina",
        'increasedRuneAcquisitionForSelfAndAllies':
          "Increased rune acquisition for self and allies",
        'intelligencePlus1': "Intelligence +1",
        'intelligencePlus2': "Intelligence +2",
        'intelligencePlus3': "Intelligence +3",
        'itemsConferEffectToAllNearbyAllies':
          "Items confer effect to all nearby allies",
        'jumpingConjuresMagicProjectiles':
          "Jumping Conjures Magic Projectiles",
        'lessLikelyToBeTargeted': "Less Likely to Be Targeted",
        'lightningAttackPowerUp': "Lightning Attack Power Up",
        'lightningAttackPowerUpPlus1': "Lightning Attack Power Up +1",
        'lightningAttackPowerUpPlus2': "Lightning Attack Power Up +2",
        'lightningCriticalHitImbuesArmament':
          "Lightning Critical Hit Imbues Armament",
        'lightningDamageNegationUp': "Lightning Damage Negation Up",
        'lightningFollowsChargeAttacks':
          "Lightning Follows Charge Attacks",
        'lightningGreaseInPossessionAtStartOfExpedition':
          "Lightning Grease in possession at start of expedition",
        'lightningPotsInPossessionAtStartOfExpedition':
          "Lightning Pots in possession at start of expedition",
        'lightningUponChargedThrust': "Lightning upon Charged Thrust",
        'lightningUponDodging': "Lightning upon Dodging",
        'lightningUponPrecisionAiming':
          "Lightning upon Precision Aiming",
        'lowHpCritHitFullyRestoresHP':
          "Low HP Crit. Hit Fully Restores HP",
        'luringEnemiesUponChargedStrike':
          "Luring Enemies upon Charged Strike",
        'madnessContinuallyRecoversFP':
          "Madness Continually Recovers FP",
        'madnessCritHitFiresFrenziedFlame':
          "Madness Crit. Hit Fires Frenzied Flame",
        'madnessIncreasesAttackPower':
          "Madness Increases Attack Power",
        'madnessProducesAFlameOfFrenzy':
          "Madness Produces a Flame of Frenzy",
        'magicAttackFollowsChargeAttacks':
          "Magic Attack Follows Charge Attacks",
        'magicAttackPowerUp': "Magic Attack Power Up",
        'magicAttackPowerUpPlus1': "Magic Attack Power Up +1",
        'magicAttackPowerUpPlus2': "Magic Attack Power Up +2",
        'magicBubblesUponChargedStrike':
          "Magic Bubbles upon Charged Strike",
        'magicDamageNegationUp': "Magic Damage Negation Up",
        'magicGreaseInPossessionAtStartOfExpedition':
          "Magic Grease in possession at start of expedition",
        'magicPotsInPossessionAtStartOfExpedition':
          "Magic Pots in possession at start of expedition",
        'magmaSurgeSprint': "Magma Surge Sprint",
        'magmaUponChargedStrike': "Magma upon Charged Strike",
        'magmaUponDefeatingMultipleEnemies':
          "Magma upon Defeating Multiple Enemies",
        'magmaUponFireCriticalHit': "Magma upon Fire Critical Hit",
        'manyPeriodicalGlintblades': "Many Periodical Glintblades",
        'maxFpPermanentlyIncreasedAfterReleasingSorcerersRiseMechanism':
          "Max FP permanently increased after releasing Sorcerer's Rise mechanism",
        'maxFpUpWith3PlusSacredSealsEquipped':
          "Max FP Up with 3+ Sacred Seals Equipped",
        'maxFpUpWith3PlusStavesEquipped':
          "Max FP Up with 3+ Staves Equipped",
        'maxHpUpWith3PlusGreatshieldsEquipped':
          "Max HP Up with 3+ Greatshields Equipped",
        'maxHpUpWith3PlusMediumShieldsEquipped':
          "Max HP Up with 3+ Medium Shields Equipped",
        'maxHpUpWith3PlusSmallShieldsEquipped':
          "Max HP Up with 3+ Small Shields Equipped",
        'maximumHpDown': "Maximum HP Down",
        'mindPlus1': "Mind +1",
        'mindPlus2': "Mind +2",
        'mindPlus3': "Mind +3",
        'moreRunesFromDefeatedEnemies':
          "More Runes From Defeated Enemies",
        'multiplePeriodicalGlintblades':
          "Multiple Periodical Glintblades",
        'nearbyFrostbiteConcealsSelf':
          "Nearby Frostbite Conceals Self",
        'noRuneLossOrLevelDownUponDeath':
          "No Rune Loss or Level Down Upon Death",
        'parriesActivateGoldenRetaliation':
          "Parries Activate Golden Retaliation",
        'partialHpRestorationUponPostDamageAttacks':
          "Partial HP Restoration upon Post-Damage Attacks",
        'performingConsecutiveSuccessfulGuardsImprovesGuardAbilityAndDeflectsBigAttacks':
          "Performing consecutive successful guards improves guard ability and deflects big attacks",
        'periodicalGiantGlintblades': "Periodical Giant Glintblades",
        'pestThreadsUponChargedThrust':
          "Pest Threads upon Charged Thrust",
        'phantomAttackUponChargedSlash':
          "Phantom Attack upon Charged Slash",
        'phantomAttackUponChargedStrike':
          "Phantom Attack upon Charged Strike",
        'phantomAttackUponChargedThrust':
          "Phantom Attack upon Charged Thrust",
        'physicalAttackUp': "Physical Attack Up",
        'physicalAttackUpPlus1': "Physical Attack Up +1",
        'physicalAttackUpPlus2': "Physical Attack Up +2",
        'physicalAttackUpPlus3': "Physical Attack Up +3",
        'poisePlus1': "Poise +1",
        'poisePlus2': "Poise +2",
        'poisePlus3': "Poise +3",
        'poisonAndRotImprovesAttackPower':
          "Poison & Rot Improves Attack Power",
        'poisonAndRotInVicinityIncreasesAttackPower':
          "Poison & Rot in Vicinity Increases Attack Power",
        'poisonIncreasesAttackPower': "Poison Increases Attack Power",
        'poisonMistUponChargedThrust':
          "Poison Mist upon Charged Thrust",
        'poisonMistUponPoisonCriticalHit':
          "Poison Mist upon Poison Critical Hit",
        'poisonMistUponPrecisionAiming':
          "Poison Mist upon Precision Aiming",
        'poisonProducesAMistOfPoison':
          "Poison Produces a Mist of Poison",
        'poisonboneDartsInPossessionAtStartOfExpedition':
          "Poisonbone Darts in possession at start of expedition",
        'powerOfDarkMoon': "Power of Dark Moon",
        'powerOfDespair': "Power of Despair",
        'powerOfDestinedDeath': "Power of Destined Death",
        'powerOfDestruction': "Power of Destruction",
        'powerOfFullMoon': "Power of Full Moon",
        'powerOfHouseMarais': "Power of House Marais",
        'powerOfNightAndFlame': "Power of Night and Flame",
        'powerOfTheAncestralSpirit': "Power of the Ancestral Spirit",
        'powerOfTheBlasphemous': "Power of the Blasphemous",
        'powerOfTheBloodLord': "Power of the Blood Lord",
        'powerOfTheDragonlord': "Power of the Dragonlord",
        'powerOfTheFirstLord': "Power of the First Lord",
        'powerOfTheFlyingDragon': "Power of the Flying Dragon",
        'powerOfTheGeneral': "Power of the General",
        'powerOfTheGiant': "Power of the Giant",
        'powerOfTheGoldenLineage': "Power of the Golden Lineage",
        'powerOfTheGoldenOrder': "Power of the Golden Order",
        'powerOfTheGreatAncientDragon':
          "Power of the Great Ancient Dragon",
        'powerOfTheGreaterWill': "Power of the Greater Will",
        'powerOfTheLightlessVoid': "Power of the Lightless Void",
        'powerOfTheOmenKing': "Power of the Omen King",
        'powerOfTheQueen': "Power of the Queen",
        'powerOfTheStarscourge': "Power of the Starscourge",
        'powerOfTheUndefeated': "Power of the Undefeated",
        'powerOfVengeance': "Power of Vengeance",
        'projectileDamageDropOffReduced':
          "Projectile Damage Drop-Off Reduced",
        'projectileDamageDropOffReducedPlus1':
          "Projectile damage drop-off reduced +1",
        'projectilesLaunchedUponAttacks':
          "Projectiles Launched upon Attacks",
        'projectilesUponChargedStrike':
          "Projectiles upon Charged Strike",
        'raisedStaminaRecoveryForNearbyAlliesButNotForSelf':
          "Raised stamina recovery for nearby allies, but not for self",
        'raisesMaximumFpPlus1': "Raises maximum FP +1",
        'raisesNonPhysicalDamageNegationPlus1':
          "Raises non-physical damage negation +1",
        'raisesPhysicalAttackPowerPlus1':
          "Raises physical attack power +1",
        'raisesPhysicalDamageNegationPlus1':
          "Raises physical damage negation +1",
        'raisesResistanceToAllAilments':
          "Raises resistance to all ailments",
        'raisesSorceryIncantationPotency':
          "Raises sorcery/incantation potency",
        'reducedSkillFpCost': "Reduced Skill FP Cost",
        'reducedSpellFpCost': "Reduced Spell FP Cost",
        'reducedStaminaConsumption': "Reduced Stamina Consumption",
        'ringOfLightUponChargedSlash':
          "Ring of Light upon Charged Slash",
        'roaringFlamesUponChargedSlash':
          "Roaring Flames upon Charged Slash",
        'rotCriticalHitFiresPestThreads':
          "Rot Critical Hit Fires Pest Threads",
        'rotMistUponPrecisionAiming':
          "Rot Mist upon Precision Aiming",
        'rotProducesAMistOfScarletRot':
          "Rot Produces a Mist of Scarlet Rot",
        'runeDiscountForShopPurchasesWhileOnExpedition':
          "Rune discount for shop purchases while on expedition",
        'sacredOrderUponHolyCriticalHit':
          "Sacred Order upon Holy Critical Hit",
        'savageFlamesRoarWhileWalking':
          "Savage Flames Roar While Walking",
        'shieldGreaseInPossessionAtStartOfExpedition':
          "Shield Grease in possession at start of expedition",
        'shieldingCreatesHolyGround': "Shielding Creates Holy Ground",
        'shieldingImprovesDamageNegation':
          "Shielding Improves Damage Negation",
        'shieldingInvokesIndomitableVow':
          "Shielding Invokes Indomitable Vow",
        'shockwaveProducedFromSuccessfulGuarding':
          "Shockwave Produced From Successful Guarding",
        'shockwaveUponChargedStrike': "Shockwave upon Charged Strike",
        'skillActivationImprovesPoise':
          "Skill Activation Improves Poise",
        'sleepIncreasesAttackPower': "Sleep Increases Attack Power",
        'sleepProducesAMistOfSleep': "Sleep Produces a Mist of Sleep",
        'slowlyRestoreHpForSelfAndNearbyAlliesWhenHpIsLow':
          "Slowly restore HP for self and nearby allies when HP is low",
        'smallPouchInPossessionAtStartOfExpedition':
          "Small Pouch in possession at start of expedition",
        'staminaRecoveryUponLandingAttacks':
          "Stamina Recovery upon Landing Attacks",
        'staminaRecoveryUponLandingAttacksPlus1':
          "Stamina Recovery upon Landing Attacks +1",
        'starlightShardsInPossessionAtStartOfExpedition':
          "Starlight Shards in possession at start of expedition",
        'startingArmamentDealsFireDamage':
          "Starting armament deals fire damage",
        'startingArmamentDealsHolyDamage':
          "Starting armament deals holy damage",
        'startingArmamentDealsLightningDamage':
          "Starting armament deals lightning damage",
        'startingArmamentDealsMagicDamage':
          "Starting armament deals magic damage",
        'startingArmamentInflictsBloodLoss':
          "Starting armament inflicts blood loss",
        'startingArmamentInflictsFrost':
          "Starting armament inflicts frost",
        'startingArmamentInflictsPoison':
          "Starting armament inflicts poison",
        'startingArmamentInflictsScarletRot':
          "Starting armament inflicts scarlet rot",
        'stoneswordKeyInPossessionAtStartOfExpedition':
          "Stonesword Key in possession at start of expedition",
        'stormOfRedLightningWhileWalking':
          "Storm of Red Lightning While Walking",
        'strengthPlus1': "Strength +1",
        'strengthPlus2': "Strength +2",
        'strengthPlus3': "Strength +3",
        'strongAttackCreatesWideWaveOfHeat':
          "Strong Attack Creates Wide Wave of Heat",
        'strongAttacksImprovePoise': "Strong Attacks Improve Poise",
        'strongJumpAttacksCreateShockwave':
          "Strong Jump Attacks Create Shockwave",
        'successfulGuardingUpsDmgNegation':
          "Successful Guarding Ups Dmg Negation",
        'successfulGuardingUpsPoise': "Successful Guarding Ups Poise",
        'successiveAttackHpRestoration':
          "Successive Attack HP Restoration",
        'successiveAttacksBoostAttackPower':
          "Successive Attacks Boost Attack Power",
        'successiveAttacksNegateDamage':
          "Successive Attacks Negate Damage",
        'suddenEnemyDeathUponAttacks':
          "Sudden Enemy Death upon Attacks",
        'surgeSprintLandingsSplitEarth':
          "Surge Sprint Landings Split Earth",
        'switchingWeaponsAddsAnAffinityAttack':
          "Switching Weapons Adds an Affinity Attack",
        'switchingWeaponsBoostsAttackPower':
          "Switching Weapons Boosts Attack Power",
        'takingAttacksImprovesAttackPower':
          "Taking attacks improves attack power",
        'takingDamageBoostsDamageNegation':
          "Taking Damage Boosts Damage Negation",
        'takingDamageRestoresFp': "Taking Damage Restores FP",
        'theDuchessGrief': "The Duchess' Grief",
        'theExecutorsGrief': "The Executor's Grief",
        'theGuardiansGrief': "The Guardian's Grief",
        'theIroneyesGrief': "The Ironeye's Grief",
        'theRaidersGrief': "The Raider's Grief",
        'theReclusesGrief': "The Recluse's Grief",
        'theRevenantsGrief': "The Revenant's Grief",
        'theWyldersGrief': "The Wylder's Grief",
        'throwingDaggersInPossessionAtStartOfExpedition':
          "Throwing Daggers in possession at start of expedition",
        'treasureMarkedUponMap': "Treasure marked upon map",
        'ultimateArtAutoChargePlus1': "Ultimate Art Auto Charge +1",
        'ultimateArtAutoChargePlus2': "Ultimate Art Auto Charge +2",
        'ultimateArtAutoChargePlus3': "Ultimate Art Auto Charge +3",
        'ultimateArtGaugeChargeSpeedUp':
          "Ultimate Art Gauge Charge Speed Up",
        'viciousStarRainPoursWhileWalking':
          "Vicious Star Rain Pours While Walking",
        'vigorPlus1': "Vigor +1",
        'vigorPlus2': "Vigor +2",
        'vigorPlus3': "Vigor +3",
        'wraithCallingBellInPossessionAtStartOfExpedition':
          "Wraith Calling Bell in possession at start of expedition",
        'wraithsWhileWalking': "Wraiths While Walking",
        'continuousHPLoss': "Continuous HP Loss",
        'characterSkillCooldownReductionPlus4':
          "Character Skill Cooldown Reduction +4",
        'characterSkillCooldownReductionPlus5':
          "Character Skill Cooldown Reduction +5",
        'ultimateArtAutoChargePlus4': "Ultimate Art Auto Charge +4",
        'ultimateArtAutoChargePlus5': "Ultimate Art Auto Charge +5",
        'poisePlus4': "Poise +4",
        'poisePlus5': "Poise +5",
        'physicalAttackUpPlus4': "Physical Attack Up +4",
        'magicAttackPowerUpPlus3': "Magic Attack Power Up +3",
        'magicAttackPowerUpPlus4': "Magic Attack Power Up +4",
        'fireAttackPowerUpPlus3': "Fire Attack Power Up +3",
        'fireAttackPowerUpPlus4': "Fire Attack Power Up +4",
        'lightningAttackPowerUpPlus3': "Lightning Attack Power Up +3",
        'lightningAttackPowerUpPlus4': "Lightning Attack Power Up +4",
        'holyAttackPowerUpPlus3': "Holy Attack Power Up +3",
        'holyAttackPowerUpPlus4': "Holy Attack Power Up +4",
        'improvedMagicDamageNegationPlus1':
          "Improved Magic Damage Negation +1",
        'improvedMagicDamageNegationPlus2':
          "Improved Magic Damage Negation +2",
        'improvedFireDamageNegationPlus1':
          "Improved Fire Damage Negation +1",
        'improvedFireDamageNegationPlus2':
          "Improved Fire Damage Negation +2",
        'improvedLightningDamageNegationPlus1':
          "Improved Lightning Damage Negation +1",
        'improvedLightningDamageNegationPlus2':
          "Improved Lightning Damage Negation +2",
        'improvedHolyDamageNegationPlus1':
          "Improved Holy Damage Negation +1",
        'improvedHolyDamageNegationPlus2':
          "Improved Holy Damage Negation +2",
        'improvedPoisonResistancePlus1':
          "Improved Poison Resistance +1",
        'improvedPoisonResistancePlus2':
          "Improved Poison Resistance +2",
        'improvedBloodLossResistancePlus1':
          "Improved Blood Loss Resistance +1",
        'improvedBloodLossResistancePlus2':
          "Improved Blood Loss Resistance +2",
        'improvedSleepResistancePlus1':
          "Improved Sleep Resistance +1",
        'improvedSleepResistancePlus2':
          "Improved Sleep Resistance +2",
        'improvedDeathBlightResistancePlus1':
          "Improved Death Blight Resistance +1",
        'improvedDeathBlightResistancePlus2':
          "Improved Death Blight Resistance +2",
        'improvedRotResistancePlus1': "Improved Rot Resistance +1",
        'improvedRotResistancePlus2': "Improved Rot Resistance +2",
        'improvedFrostResistancePlus1':
          "Improved Frost Resistance +1",
        'improvedFrostResistancePlus2':
          "Improved Frost Resistance +2",
        'improvedMadnessResistancePlus1':
          "Improved Madness Resistance +1",
        'improvedMadnessResistancePlus2':
          "Improved Madness Resistance +2",
        'partialHPRestorationUponPostDamageAttacksPlus1':
          "Partial HP Restoration upon Post-Damage Attacks +1",
        'partialHPRestorationUponPostDamageAttacksPlus2':
          "Partial HP Restoration upon Post-Damage Attacks +2",
        'hpRestoredWhenUsingMedicinalBolusesEtcPlus1':
          "HP restored when using medicinal boluses, etc. +1",
        'hpRestoredWhenUsingMedicinalBolusesEtcPlus2':
          "HP restored when using medicinal boluses, etc. +2",
        'artGaugeChargedFromSuccessfulGuardingPlus1':
          "Art gauge charged from successful guarding +1",
        'artGaugeChargedFromSuccessfulGuardingPlus2':
          "Art gauge charged from successful guarding +2",
        'artGaugeFillsModeratelyUponCriticalHitPlus1':
          "Art gauge fills moderately upon critical hit +1",
        'artGaugeFillsModeratelyUponCriticalHitPlus2':
          "Art gauge fills moderately upon critical hit +2",
        'physicalAttackPowerIncreasesAfterUsingGreaseItemsPlus1':
          "Physical attack power increases after using grease items +1",
        'physicalAttackPowerIncreasesAfterUsingGreaseItemsPlus2':
          "Physical attack power increases after using grease items +2",
        'criticalHitBoostsStaminaRecoverySpeedPlus1':
          "Critical Hit Boosts Stamina Recovery Speed +1",
        'improvedGuardCountersPlus1': "Improved Guard Counters +1",
        'improvedGuardCountersPlus2': "Improved Guard Counters +2",
        'improvedThrowingPotDamagePlus1':
          "Improved Throwing Pot Damage +1",
        'improvedThrowingPotDamagePlus2':
          "Improved Throwing Pot Damage +2",
        'improvedThrowingKnifeDamagePlus1':
          "Improved Throwing Knife Damage +1",
        'improvedThrowingKnifeDamagePlus2':
          "Improved Throwing Knife Damage +2",
        'improvedGlintstoneAndGravityStoneDamagePlus1':
          "Improved Glintstone and Gravity Stone Damage +1",
        'improvedGlintstoneAndGravityStoneDamagePlus2':
          "Improved Glintstone and Gravity Stone Damage +2",
        'improvedRoarAndBreathAttacksPlus1':
          "Improved Roar & Breath Attacks +1",
        'improvedRoarAndBreathAttacksPlus2':
          "Improved Roar & Breath Attacks +2",
        'improvedPerfumingArtsPlus1': "Improved Perfuming Arts +1",
        'improvedPerfumingArtsPlus2': "Improved Perfuming Arts +2",
        'maxHPIncreasedForEachGreatEnemyDefeatedAtAGreatChurch':
          "Max HP increased for each great enemy defeated at a Great Church.",
        'runesAndItemDiscoveryIncreasedForEachGreatEnemyDefeatedAtAFort':
          "Runes and Item Discovery increased for each great enemy defeated at a Fort",
        'arcaneIncreasedForEachGreatEnemyDefeatedAtARuin':
          "Arcane increased for each great enemy defeated at a Ruin",
        'maxStaminaIncreasedForEachGreatEnemyDefeatedAtAGreatEncampment':
          "Max stamina increased for each great enemy defeated at a Great Encampment",
        'defeatingEnemiesFillsMoreOfTheArtGaugePlus1':
          "Defeating enemies fills more of the Art gauge +1",
        'defeatingEnemiesFillsMoreOfTheArtGaugePlus2':
          "Defeating enemies fills more of the Art gauge +2",
        'hpRestorationUponThrustingCounterattackPlus1':
          "HP Restoration upon Thrusting Counterattack +1",
        'hpRestorationUponThrustingCounterattackPlus2':
          "HP Restoration upon Thrusting Counterattack +2",
        'attackPowerUpWhenFacingPoisonAfflictedEnemyPlus1':
          "Attack power up when facing poison-afflicted enemy +1",
        'attackPowerUpWhenFacingPoisonAfflictedEnemyPlus2':
          "Attack power up when facing poison-afflicted enemy +2",
        'attackPowerUpWhenFacingScarletRotAfflictedEnemyPlus1':
          "Attack power up when facing scarlet rot-afflicted enemy +1",
        'attackPowerUpWhenFacingScarletRotAfflictedEnemyPlus2':
          "Attack power up when facing scarlet rot-afflicted enemy +2",
        'attackPowerUpWhenFacingFrostbiteAfflictedEnemyPlus1':
          "Attack power up when facing frostbite-afflicted enemy +1",
        'attackPowerUpWhenFacingFrostbiteAfflictedEnemyPlus2':
          "Attack power up when facing frostbite-afflicted enemy +2",
        'guardianCharacterSkillBoostsDamageNegationOfNearbyAllies':
          "[Guardian] Character Skill Boosts Damage Negation of Nearby Allies",
        'ironeyeCharacterSkillInflictsHeavyPoisonDamageOnPoisonedEnemies':
          "[Ironeye] Character Skill Inflicts Heavy Poison Damage on Poisoned Enemies",
        'duchessUseCharacterSkillForBriefInvulnerability':
          "[Duchess] Use Character Skill for Brief Invulnerability",
        'raiderHitWithCharacterSkillToReduceEnemyAttackPower':
          "[Raider] Hit With Character Skill to Reduce Enemy Attack Power",
        'revenantIncreasedMaxFPUponAbilityActivation':
          "[Revenant] Increased Max FP upon Ability Activation",
        'recluseCollectAffinityResiduesToNegateAffinity':
          "[Recluse] Collect Affinity Residues to Negate Affinity",
        'executorSlowlyRestoreHPUponAbilityActivation':
          "[Executor] Slowly Restore HP upon Ability Activation",
        'sleepInVicinityImprovesAttackPower':
          "Sleep in Vicinity Improves Attack Power",
        'sleepInVicinityImprovesAttackPowerPlus1':
          "Sleep in Vicinity Improves Attack Power +1",
        'sleepInVicinityImprovesAttackPowerPlus2':
          "Sleep in Vicinity Improves Attack Power +2",
        'madnessInVicinityImprovesAttackPower':
          "Madness in Vicinity Improves Attack Power",
        'madnessInVicinityImprovesAttackPowerPlus1':
          "Madness in Vicinity Improves Attack Power +1",
        'madnessInVicinityImprovesAttackPowerPlus2':
          "Madness in Vicinity Improves Attack Power +2",
        'reducedFPConsumption': "Reduced FP Consumption",
        'reducedFPConsumptionPlus1': "Reduced FP Consumption +1",
        'reducedFPConsumptionPlus2': "Reduced FP Consumption +2",
        'improvedAffinityAttackPower':
          "Improved Affinity Attack Power",
        'improvedAffinityAttackPowerPlus1':
          "Improved Affinity Attack Power +1",
        'improvedAffinityAttackPowerPlus2':
          "Improved Affinity Attack Power +2",
        'improvedPhysicalDamageNegationPlus1':
          "Improved Physical Damage Negation +1",
        'improvedPhysicalDamageNegationPlus2':
          "Improved Physical Damage Negation +2",
        'improvedAffinityDamageNegation':
          "Improved Affinity Damage Negation",
        'improvedAffinityDamageNegationPlus1':
          "Improved Affinity Damage Negation +1",
        'improvedAffinityDamageNegationPlus2':
          "Improved Affinity Damage Negation +2",
        'improvedSorceriesPlus1': "Improved Sorceries +1",
        'improvedSorceriesPlus2': "Improved Sorceries +2",
        'improvedIncantationsPlus1': "Improved Incantations +1",
        'improvedIncantationsPlus2': "Improved Incantations +2",
        'improvedFlaskHPRestoration': "Improved Flask HP Restoration",
        'crimsonspillCrystalTearInPossessionAtStartOfExpedition':
          "Crimsonspill Crystal Tear in possession at start of expedition",
        'crimsonCrystalTearInPossessionAtStartOfExpedition':
          "Crimson Crystal Tear in possession at start of expedition",
        'ceruleanCrystalTearInPossessionAtStartOfExpedition':
          "Cerulean Crystal Tear in possession at start of expedition",
        'speckledHardtearInPossessionAtStartOfExpedition':
          "Speckled Hardtear in possession at start of expedition",
        'crimsonBubbletearInPossessionAtStartOfExpedition':
          "Crimson Bubbletear in possession at start of expedition",
        'opalineBubbletearInPossessionAtStartOfExpedition':
          "Opaline Bubbletear in possession at start of expedition",
        'crimsonburstCrystalTearInPossessionAtStartOfExpedition':
          "Crimsonburst Crystal Tear in possession at start of expedition",
        'greenburstCrystalTearInPossessionAtStartOfExpedition':
          "Greenburst Crystal Tear in possession at start of expedition",
        'opalineHardtearInPossessionAtStartOfExpedition':
          "Opaline Hardtear in possession at start of expedition",
        'thornyCrackedTearInPossessionAtStartOfExpedition':
          "Thorny Cracked Tear in possession at start of expedition",
        'spikedCrackedTearInPossessionAtStartOfExpedition':
          "Spiked Cracked Tear in possession at start of expedition",
        'windyCrystalTearInPossessionAtStartOfExpedition':
          "Windy Crystal Tear in possession at start of expedition",
        'rupturedCrystalTearInPossessionAtStartOfExpedition':
          "Ruptured Crystal Tear in possession at start of expedition",
        'leadenHardtearInPossessionAtStartOfExpedition':
          "Leaden Hardtear in possession at start of expedition",
        'twiggyCrackedTearInPossessionAtStartOfExpedition':
          "Twiggy Cracked Tear in possession at start of expedition",
        'crimsonwhorlBubbletearInPossessionAtStartOfExpedition':
          "Crimsonwhorl Bubbletear in possession at start of expedition",
        'ceruleanHiddenTearInPossessionAtStartOfExpedition':
          "Cerulean Hidden Tear in possession at start of expedition",
        'stonebarbCrackedTearInPossessionAtStartOfExpedition':
          "Stonebarb Cracked Tear in possession at start of expedition",
        'flameShroudingCrackedTearInPossessionAtStartOfExpedition':
          "Flame-Shrouding Cracked Tear in possession at start of expedition",
        'magicShroudingCrackedTearInPossessionAtStartOfExpedition':
          "Magic-Shrouding Cracked Tear in possession at start of expedition",
        'lightningShroudingCrackedTearInPossessionAtStartOfExpedition':
          "Lightning-Shrouding Cracked Tear in possession at start of expedition",
        'holyShroudingCrackedTearInPossessionAtStartOfExpedition':
          "Holy-Shrouding Cracked Tear in possession at start of expedition",
        'upliftingAromaticInPossessionAtStartOfExpedition':
          "Uplifting Aromatic in possession at start of expedition",
        'sparkAromaticInPossessionAtStartOfExpedition':
          "Spark Aromatic in possession at start of expedition",
        'ironjarAromaticInPossessionAtStartOfExpedition':
          "Ironjar Aromatic in possession at start of expedition",
        'bloodboilAromaticInPossessionAtStartOfExpedition':
          "Bloodboil Aromatic in possession at start of expedition",
        'poisonSpraymistInPossessionAtStartOfExpedition':
          "Poison Spraymist in possession at start of expedition",
        'acidSpraymistInPossessionAtStartOfExpedition':
          "Acid Spraymist in possession at start of expedition",
        'dormantPowerHelpsDiscoverDaggers':
          "Dormant Power Helps Discover Daggers",
        'dormantPowerHelpsDiscoverStraightSwords':
          "Dormant Power Helps Discover Straight Swords",
        'dormantPowerHelpsDiscoverGreatswords':
          "Dormant Power Helps Discover Greatswords",
        'dormantPowerHelpsDiscoverColossalSwords':
          "Dormant Power Helps Discover Colossal Swords",
        'dormantPowerHelpsDiscoverCurvedSwords':
          "Dormant Power Helps Discover Curved Swords",
        'dormantPowerHelpsDiscoverCurvedGreatswords':
          "Dormant Power Helps Discover Curved Greatswords",
        'dormantPowerHelpsDiscoverKatana':
          "Dormant Power Helps Discover Katana",
        'dormantPowerHelpsDiscoverTwinblades':
          "Dormant Power Helps Discover Twinblades",
        'dormantPowerHelpsDiscoverThrustingSwords':
          "Dormant Power Helps Discover Thrusting Swords",
        'dormantPowerHelpsDiscoverHeavyThrustingSwords':
          "Dormant Power Helps Discover Heavy Thrusting Swords",
        'dormantPowerHelpsDiscoverAxes':
          "Dormant Power Helps Discover Axes",
        'dormantPowerHelpsDiscoverGreataxes':
          "Dormant Power Helps Discover Greataxes",
        'dormantPowerHelpsDiscoverHammers':
          "Dormant Power Helps Discover Hammers",
        'dormantPowerHelpsDiscoverGreatHammers':
          "Dormant Power Helps Discover Great Hammers",
        'dormantPowerHelpsDiscoverFlails':
          "Dormant Power Helps Discover Flails",
        'dormantPowerHelpsDiscoverSpears':
          "Dormant Power Helps Discover Spears",
        'dormantPowerHelpsDiscoverGreatSpears':
          "Dormant Power Helps Discover Great Spears",
        'dormantPowerHelpsDiscoverHalberds':
          "Dormant Power Helps Discover Halberds",
        'dormantPowerHelpsDiscoverReapers':
          "Dormant Power Helps Discover Reapers",
        'dormantPowerHelpsDiscoverFists':
          "Dormant Power Helps Discover Fists",
        'dormantPowerHelpsDiscoverClaws':
          "Dormant Power Helps Discover Claws",
        'dormantPowerHelpsDiscoverWhips':
          "Dormant Power Helps Discover Whips",
        'dormantPowerHelpsDiscoverColossalWeapons':
          "Dormant Power Helps Discover Colossal Weapons",
        'dormantPowerHelpsDiscoverBows':
          "Dormant Power Helps Discover Bows",
        'dormantPowerHelpsDiscoverGreatbows':
          "Dormant Power Helps Discover Greatbows",
        'dormantPowerHelpsDiscoverCrossbows':
          "Dormant Power Helps Discover Crossbows",
        'dormantPowerHelpsDiscoverBallistas':
          "Dormant Power Helps Discover Ballistas",
        'dormantPowerHelpsDiscoverSmallShields':
          "Dormant Power Helps Discover Small Shields",
        'dormantPowerHelpsDiscoverMediumShields':
          "Dormant Power Helps Discover Medium Shields",
        'dormantPowerHelpsDiscoverGreatshields':
          "Dormant Power Helps Discover Greatshields",
        'dormantPowerHelpsDiscoverStaves':
          "Dormant Power Helps Discover Staves",
        'dormantPowerHelpsDiscoverSacredSeals':
          "Dormant Power Helps Discover Sacred Seals",
        'dormantPowerHelpsDiscoverTorches':
          "Dormant Power Helps Discover Torches",
        'wylderImprovedMindReducedVigor':
          "[Wylder] Improved Mind, Reduced Vigor",
        'wylderImprovedIntelligenceAndFaithReducedStrengthAndDexterity':
          "[Wylder] Improved Intelligence and Faith, Reduced Strength and Dexterity",
        'guardianImprovedStrengthAndDexterityReducedVigor':
          "[Guardian] Improved Strength and Dexterity, Reduced Vigor",
        'guardianImprovedMindAndFaithReducedVigor':
          "[Guardian] Improved Mind and Faith, Reduced Vigor",
        'ironeyeImprovedArcaneReducedDexterity':
          "[Ironeye] Improved Arcane, Reduced Dexterity",
        'ironeyeImprovedVigorAndStrengthReducedDexterity':
          "[Ironeye] Improved Vigor and Strength, Reduced Dexterity",
        'duchessImprovedVigorAndStrengthReducedMind':
          "[Duchess] Improved Vigor and Strength, Reduced Mind",
        'duchessImprovedMindAndFaithReducedIntelligence':
          "[Duchess] Improved Mind and Faith, Reduced Intelligence",
        'raiderImprovedMindAndIntelligenceReducedVigorAndEndurance':
          "[Raider] Improved Mind and Intelligence, Reduced Vigor and Endurance",
        'raiderImprovedArcaneReducedVigor':
          "[Raider] Improved Arcane, Reduced Vigor",
        'revenantImprovedVigorAndEnduranceReducedMind':
          "[Revenant] Improved Vigor and Endurance, Reduced Mind",
        'revenantImprovedStrengthReducedFaith':
          "[Revenant] Improved Strength, Reduced Faith",
        'recluseImprovedVigorEnduranceAndDexterityReducedIntelligenceAndFaith':
          "[Recluse] Improved Vigor, Endurance, and Dexterity, Reduced Intelligence and Faith",
        'recluseImprovedIntelligenceAndFaithReducedMind':
          "[Recluse] Improved Intelligence and Faith, Reduced Mind",
        'executorImprovedVigorAndEnduranceReducedArcane':
          "[Executor] Improved Vigor and Endurance, Reduced Arcane",
        'executorImprovedDexterityAndArcaneReducedVigor':
          "[Executor] Improved Dexterity and Arcane, Reduced Vigor",
        'reducedVigor': "Reduced Vigor",
        'reducedEndurance': "Reduced Endurance",
        'takingDamageCausesPoisonBuildup':
          "Taking Damage Causes Poison Buildup",
        'takingDamageCausesRotBuildup':
          "Taking Damage Causes Rot Buildup",
        'takingDamageCausesFrostBuildup':
          "Taking Damage Causes Frost Buildup",
        'takingDamageCausesBloodLossBuildup':
          "Taking Damage Causes Blood Loss Buildup",
        'takingDamageCausesMadnessBuildup':
          "Taking Damage Causes Madness Buildup",
        'takingDamageCausesSleepBuildup':
          "Taking Damage Causes Sleep Buildup",
        'takingDamageCausesDeathBuildup':
          "Taking Damage Causes Death Buildup",
        'reducedStrengthAndIntelligence':
          "Reduced Strength and Intelligence",
        'reducedDexterityAndFaith': "Reduced Dexterity and Faith",
        'reducedIntelligenceAndDexterity':
          "Reduced Intelligence and Dexterity",
        'reducedFaithAndStrength': "Reduced Faith and Strength",
        'reducedVigorAndArcane': "Reduced Vigor and Arcane",
        'reducedRuneAcquisition': "Reduced Rune Acquisition",
        'reducedFlaskHPRestoration': "Reduced Flask HP Restoration",
        'ultimateArtChargingImpaired':
          "Ultimate Art Charging Impaired",
        'impairedAffinityDamageNegation':
          "Impaired Affinity Damage Negation",
        'allResistancesDown': "All Resistances Down",
        'surgeSprintingDrainsMoreStamina':
          "Surge Sprinting Drains More Stamina",
        'increasedDrainOnStaminaForEvasion':
          "Increased Drain on Stamina for Evasion",
        'moreDamageTakenAfterEvasion':
          "More Damage Taken After Evasion",
        'repeatedEvasionsLowerDamageNegation':
          "Repeated Evasions Lower Damage Negation",
        'reducedDamageNegationForFlaskUsages':
          "Reduced Damage Negation for Flask Usages",
        'sleepBuildupForFlaskUsages':
          "Sleep Buildup for Flask Usages",
        'madnessBuildupForFlaskUsages':
          "Madness Buildup for Flask Usages",
        'lowerAttackWhenBelowMaxHP': "Lower Attack When Below Max HP",
        'poisonBuildupWhenBelowMaxHP':
          "Poison Buildup When Below Max HP",
        'rotBuildupWhenBelowMaxHP': "Rot Buildup When Below Max HP",
        'maxHPReducesAttackPower': "Max HP Reduces Attack Power",
        'nearDeathSpillsFlask': "Near Death Spills Flask",
        'nearDeathReducesMaxHP': "Near Death Reduces Max HP",
        'improvedGreatbowAttackPower':
          "Improved Greatbow Attack Power",
        'improvedCrossbowAttackPower':
          "Improved Crossbow Attack Power",
        'improvedBallistaAttackPower':
          "Improved Ballista Attack Power",
        'hpRestorationUponGreatbowAttacks':
          "HP Restoration upon Greatbow Attacks",
        'hpRestorationUponCrossbowAttacks':
          "HP Restoration upon Crossbow Attacks",
        'hpRestorationUponBallistaAttacks':
          "HP Restoration upon Ballista Attacks",
        'fpRestorationUponGreatbowAttacks':
          "FP Restoration upon Greatbow Attacks",
        'fpRestorationUponCrossbowAttacks':
          "FP Restoration upon Crossbow Attacks",
        'fpRestorationUponBallistaAttacks':
          "FP Restoration upon Ballista Attacks",
        'reducedMaximumHP': "Reduced Maximum HP",
        'reducedMaximumFP': "Reduced Maximum FP",
        'reducedMaximumStamina': "Reduced Maximum Stamina",
        'nightsTideDamageIncreased': "Night's Tide Damage Increased",
        'damageIncreasedByNightsEncroachment':
          "Damage Increased by Night's Encroachment",
        'slowerArtGaugeWhenBelowMaxHP':
          "Slower Art Gauge When Below Max HP",
        'lowerStaminaImpairsDmgNegation':
          "Lower Stamina Impairs Dmg Negation",
        'attacksImpairedOnOccasion': "Attacks Impaired on Occasion",
        'ailmentsCauseIncreasedDamage':
          "Ailments Cause Increased Damage",
        'nearDeathReducesArtGauge': "Near Death Reduces Art Gauge",
        'allResistancesUp': "All Resistances Up",
        'improvedSorceriesAndIncantations':
          "Improved Sorceries & Incantations",
        'increasedSorceryAndIncantationDuration':
          "Increased Sorcery & Incantation Duration",
        'scholarAlliesTargetedByCharacterSkillGainBoostedAttack':
          "[Scholar] Allies Targeted by Character Skill gain boosted attack",
        'scholarReducedFpConsumptionWhenUsingCharacterSkillOnSelf':
          "[Scholar] Reduced FP consumption when using Character Skill on self",
        'undertakerExecutingArtReadiesCharacterSkill':
          "[Undertaker] Executing Art readies Character Skill",
        'greenspillCrystalTearInPossessionAtStartOfExpedition':
          "Greenspill Crystal Tear in possession at start of expedition",
        'scholarImprovedMindReducedVigor':
          "[Scholar] Improved Mind, Reduced Vigor",
        'scholarImprovedEnduranceAndDexterityReducedIntelligenceAndArcane':
          "[Scholar] Improved Endurance and Dexterity, Reduced Intelligence and Arcane",
        'undertakerImprovedDexterityReducedVigorAndFaith':
          "[Undertaker] Improved Dexterity, Reduced Vigor and Faith",
        'undertakerImprovedMindAndFaithReducedStrength':
          "[Undertaker] Improved Mind and Faith, Reduced Strength",
        'continuousFpRecovery': "Continuous FP Recovery",
        'improvedMeleeAttackPower': "Improved Melee Attack Power",
        'scholarPreventSlowingOfCharacterSkillProgress':
          "[Scholar] Prevent slowing of Character Skill Progress",
        'scholarContinuousDamageInflictedOnTargetsThreadedByUltimateArt':
          "[Scholar] Continuous damage inflicted on targets threaded by Ultimate Art",
        'scholarEarnRunesForEachAdditionalSpecimenAcquiredWithCharacterSkill':
          "[Scholar] Earn runes for each additional specimen acquired with Character Skill",
        'undertakerActivatingUltimateArtIncreasesAttackPower':
          "[Undertaker] Activating Ultimate Art increases attack power",
        'undertakerAttackPowerIncreasedByLandingTheFinalBlowOfAChainAttack':
          "[Undertaker] Attack power increased by landing the final blow of a chain attack",
        'undertakerPhysicalAttacksBoostedWhileAssistEffectFromIncantationIsActiveForSelf':
          "[Undertaker] Physical attacks boosted while assist effect from incantation is active for self",
        'undertakerContactWithAlliesRestoresTheirHpWhileUltimateArtIsActivated':
          "[Undertaker] Contact with allies restores their HP while Ultimate Art is activated",
        'statusAilmentGaugesSlowlyIncreaseAttackPower':
          "Status Ailment Gauges Slowly Increase Attack Power",
        'occasionallyNullifyAttacksWhenDamageNegationsIsLowered':
          "Occasionally Nullify Attacks When Damage Negation is Lowered",
        'attacksInflictRotWhenDamageIsTaken':
          "Attacks Inflict Rot when Damage is Taken",
        'rotInVicinityCausesContinuousHpRecovery':
          "Rot in Vicinity Causes Continuous HP Recovery",
        'changesCompatibleArmamentsSorceryToMagicGlintbladeAtStartOfExpedition':
          "Changes compatible armament's sorcery to Magic Glintblade at start of expedition",
        'changesCompatibleArmamentsSorceryToCarianGreatswordAtStartOfExpedition':
          "Changes compatible armament's sorcery to Carian Greatsword at start of expedition",
        'changesCompatibleArmamentsSorceryToNightShardAtStartOfExpedition':
          "Changes compatible armament's sorcery to Night Shard at start of expedition",
        'changesCompatibleArmamentsSorceryToMagmaShotAtStartOfExpedition':
          "Changes compatible armament's sorcery to Magma Shot at start of expedition",
        'changesCompatibleArmamentsSorceryToBriarsOfPunishmentAtStartOfExpedition':
          "Changes compatible armament's sorcery to Briars of Punishment at start of expedition",
        'changesCompatibleArmamentsIncantationToWrathOfGoldAtStartOfExpedition':
          "Changes compatible armament's incantation to Wrath of Gold at start of expedition",
        'changesCompatibleArmamentsIncantationToLightningSpearAtStartOfExpedition':
          "Changes compatible armament's incantation to Lightning Spear at start of expedition",
        'changesCompatibleArmamentsIncantationToOFlameAtStartOfExpedition':
          "Changes compatible armament's incantation to O, Flame! at start of expedition",
        'changesCompatibleArmamentsIncantationToBeastClawAtStartOfExpedition':
          "Changes compatible armament's incantation to Beast Claw at start of expedition",
        'changesCompatibleArmamentsIncantationToDragonfireAtStartOfExpedition':
          "Changes compatible armament's incantation to Dragonfire at start of expedition",
        'allResistanceUp': "All Resistance Up",
        'runeOfTheStrong': "Rune of the Strong"
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
        noteMyDearSuccessor: 'Note, My Dear Successor',
        theWillOfTheBalance: 'The Will of the Balance',
        leatherMonocleCase: 'Leather Monocle Case',
        glassNecklace: 'Glass Necklace'
      },
      // Relic effects
      effects: {

        'duchessBecomeStealthyAfterCritFromBehind':
          "[Duchess] Become difficult to spot and silence footsteps after landing critical from behind",
        'duchessCharacterSkillInflictsSleep':
          "[Duchess] Character Skill inflicts sleep upon enemies",
        'duchessDaggerChainAttackReprises':
          "[Duchess] Dagger chain attack reprises event upon nearby enemies",
        'duchessDefeatingEnemiesWhileArtActiveUpsAttack':
          "[Duchess] Defeating enemies while Art is active ups attack power",
        'duchessDurationOfUltimateArtExtended':
          "[Duchess] Duration of Ultimate Art extended",
        'duchessImprovedCharacterSkillAttackPower':
          "[Duchess] Improved Character Skill Attack Power",
        'executorAttackPowerUpWhileUltimateArtActive':
          "[Executor] Attack power up while Ultimate Art is active",
        'executorCharacterSkillBoostsAttackButDrainsHP':
          "[Executor] Character Skill Boosts Attack but Attacking Drains HP",
        'executorImprovesEffectButLowersResistance':
          "[Executor] Improves effect of ability but lowers resistance to status ailments",
        'executorRoaringRestoresHPWhileArtActive':
          "[Executor] Roaring restores HP while Art is active",
        'executorUnlockingCursedSwordRestoresHP':
          "[Executor] While Character Skill is active, unlocking use of cursed sword restores HP",
        'guardianBecomeTargetOfEnemyAggression':
          "[Guardian] Become the target of enemy aggression when ability is activated",
        'guardianCharacterSkillInflictsHolyDamage':
          "[Guardian] Character Skill inflicts Holy damage",
        'guardianCreatesWhirlwindWhenChargingHalberd':
          "[Guardian] Creates whirlwind when charging halberd attacks",
        'guardianDamageNegationForAlliesImproved':
          "[Guardian] Damage negation for allies improved when using Ultimate Art",
        'guardianImprovedCharacterSkillRange':
          "[Guardian] Improved Character Skill range",
        'guardianIncreasedDurationForCharacterSkill':
          "[Guardian] Increased duration for Character Skill",
        'guardianSuccessfulGuardsSendOutShockwaves':
          "[Guardian] Successful guards send out shockwaves while ability is active",
        'guardianRestoresAlliesHPWhenCharacterSkillUsed':
          "[Guardian] Restores allies' HP when Character Skill is used",
        'guardianSlowlyRestoresNearbyAlliesHP':
          "[Guardian] Slowly restores nearby allies' HP while Art is active",
        'ironeyeAdditionalCharacterSkillUse':
          "[Ironeye] +1 additional Character Skill use",
        'ironeyeArtChargeActivationAddsPoisonEffect':
          "[Ironeye] Art Charge Activation Adds Poison Effect",
        'ironeyeBoostsThrustingCounterattacksAfterArt':
          "[Ironeye] Boosts thrusting counterattacks after executing Art",
        'ironeyeExtendsDurationOfWeakPoint':
          "[Ironeye] Extends duration of weak point",
        'raiderCharacterSkillDamageUp':
          "[Raider] Character Skill damage up, damage negation impaired during use",
        'raiderDamageTakenWhileUsingCharacterSkillImprovesAttack':
          "[Raider] Damage taken while using Character Skill improves attack power and stamina",
        'raiderDurationOfUltimateArtExtended':
          "[Raider] Duration of Ultimate Art extended",
        'raiderPermanentlyIncreaseAttackPower':
          "[Raider] Permanently increase attack power when performing Character Skill's final attack",
        'recluseActivatingUltimateArtRaisesMaxHP':
          "[Recluse] Activating Ultimate Art raises Max HP",
        'recluseCollecting4AffinityResiduesImprovesAffinityAttackPower':
          "[Recluse] Collecting 4 Affinity Residues Improves Affinity Attack Power",
        'recluseCollectingAffinityResidueActivatesTerraMagica':
          "[Recluse] Collecting affinity residue activates Terra Magica",
        'recluseExtendsDurationOfBloodSigils':
          "[Recluse] Extends duration of blood sigils",
        'recluseSufferBloodLossAndIncreaseAttackPower':
          "[Recluse] Suffer blood loss and increase attack power upon Art activation",
        'revenantAbilityActivationChanceIncreased':
          "[Revenant] Ability activation chance increased",
        'revenantExpendOwnHPToFullyHealNearbyAllies':
          "[Revenant] Expend own HP to fully heal nearby allies when activating Art",
        'revenantPowerUpWhileFightingAlongsideFamily':
          "[Revenant] Power up while fighting alongside family",
        'revenantStrengthensFamilyAndAlliesWhenUltimateArtActivated':
          "[Revenant] Strengthens family and allies when Ultimate Art is activated",
        'revenantTriggerGhostflameExplosionDuringUltimateArtActivation':
          "[Revenant] Trigger ghostflame explosion during Ultimate Art activation",
        'runes60kAtStart30kOnDeath':
          "[Runes] 60k at start, 30k on death",
        'wylderAdditionalCharacterSkillUse':
          "[Wylder] +1 additional Character Skill use",
        'wylderArtActivationSpreadsFireInArea':
          "[Wylder] Art activation spreads fire in area",
        'wylderArtGaugeGreatlyFilledWhenAbilityActivated':
          "[Wylder] Art gauge greatly filled when ability is activated",
        'wylderCharacterSkillInflictsBloodLoss':
          "[Wylder] Character Skill inflicts Blood Loss",
        'wylderStandardAttacksEnhancedWithFieryFollowUpsWhenUsingCharacterSkill':
          "[Wylder] Standard attacks enhanced with fiery follow-ups when using Character Skill (greatsword only)",
        'wylderImpairedDamageNegationImprovedAttackPowerStaminaAfterArtActivation':
          "[Wylder] Impaired damage negation, improved attack power & stamina after Art activation",
        'wylderImprovedAttackPowerWhenAbilityActivated':
          "[Wylder] Improved attack power when ability is activated",
        'wylderImprovedAttackPowerWhenCharacterSkillActivated':
          "[Wylder] Improved attack power when Character Skill is activated",
        'wylderReducedCooldownTimeForCharacterSkill':
          "[Wylder] Reduced cooldown time for Character Skill",
        'acidMistUponChargedThrust': "Acid Mist upon Charged Thrust",
        'addFireToWeapon': "Add Fire to Weapon",
        'addHolyToWeapon': "Add Holy to Weapon",
        'addLightningToWeapon': "Add Lightning to Weapon",
        'addMagicToWeapon': "Add Magic to Weapon",
        'arcanePlus1': "Arcane +1",
        'arcanePlus2': "Arcane +2",
        'arcanePlus3': "Arcane +3",
        'armamentDealsFireDamagePlus1AtStartOfExpedition':
          "Armament deals fire damage +1 at start of expedition",
        'artGaugeChargedFromSuccessfulGuarding':
          "Art gauge charged from successful guarding",
        'artGaugeFillsModeratelyUponCriticalHit':
          "Art gauge fills moderately upon critical hit",
        'attackBoostDragons': "Attack Boost [Dragons]",
        'attackBoostLifeformsBornOfFallingStars':
          "Attack Boost [Lifeforms Born of Falling Stars]",
        'attackBoostThoseWhoLiveInDeath':
          "Attack Boost [Those Who Live in Death]",
        'attackBoostFromNearbyAllies':
          "Attack Boost from Nearby Allies",
        'attackPowerIncreasesAfterUsingGreaseItems':
          "Attack power increases after using grease items",
        'attackPowerPermanentlyIncreasedForEachEvergaolPrisonerDefeated':
          "Attack power permanently increased for each evergaol prisoner defeated",
        'attackPowerUpAfterDefeatingANightInvader':
          "Attack power up after defeating a Night Invader",
        'attackPowerUpWhenFacingFrostbiteAfflictedEnemy':
          "Attack power up when facing frostbite-afflicted enemy",
        'attackPowerUpWhenFacingPoisonAfflictedEnemy':
          "Attack power up when facing poison-afflicted enemy",
        'attackPowerUpWhenFacingScarletRotAfflictedEnemy':
          "Attack power up when facing scarlet rot-afflicted enemy",
        'attackPowerUpWhenFacingSleepAfflictedEnemy':
          "Attack power up when facing sleep-afflicted enemy",
        'attackUpWhenWieldingTwoArmaments':
          "Attack Up when Wielding Two Armaments",
        'attacksCreateMagicBurstsVersusSleepingEnemies':
          "Attacks Create Magic Bursts Versus Sleeping Enemies",
        'attacksInflictBloodLoss': "Attacks Inflict Blood Loss",
        'attacksInflictBloodLossPlus1':
          "Attacks Inflict Blood Loss +1",
        'attacksInflictBloodLossPlus2':
          "Attacks Inflict Blood Loss +2",
        'attacksInflictDeathBlight': "Attacks Inflict Death Blight",
        'attacksInflictFrost': "Attacks Inflict Frost",
        'attacksInflictFrostPlus1': "Attacks Inflict Frost +1",
        'attacksInflictFrostPlus2': "Attacks Inflict Frost +2",
        'attacksInflictFrostPlus3': "Attacks Inflict Frost +3",
        'attacksInflictMadness': "Attacks Inflict Madness",
        'attacksInflictPoison': "Attacks Inflict Poison",
        'attacksInflictPoisonPlus1': "Attacks Inflict Poison +1",
        'attacksInflictPoisonPlus2': "Attacks Inflict Poison +2",
        'attacksInflictRot': "Attacks Inflict Rot",
        'attacksInflictScarletRot': "Attacks Inflict Scarlet Rot",
        'attacksInflictScarletRotPlus1':
          "Attacks Inflict Scarlet Rot +1",
        'attacksInflictScarletRotPlus2':
          "Attacks Inflict Scarlet Rot +2",
        'attacksInflictSleep': "Attacks Inflict Sleep",
        'attacksInflictSleepPlus1': "Attacks Inflict Sleep +1",
        'attacksInflictSleepPlus2': "Attacks Inflict Sleep +2",
        'attacksInflictSleepPlus3': "Attacks Inflict Sleep +3",
        'bewitchingBranchesInPossessionAtStartOfExpedition':
          "Bewitching Branches in possession at start of expedition",
        'blackFlamesUponChargedSlash':
          "Black Flames upon Charged Slash",
        'bloodLossCritThornsOfPunishment':
          "Blood Loss Crit: Thorns of Punishment",
        'bloodLossInVicinityIncreasesAttackPower':
          "Blood Loss in Vicinity Increases Attack Power",
        'bloodLossIncreasesAttackPower':
          "Blood Loss Increases Attack Power",
        'bloodfliesUponPrecisionAiming':
          "Bloodflies upon Precision Aiming",
        'boostsAttackPowerOfAddedAffinityAttacks':
          "Boosts Attack Power of Added Affinity Attacks",
        'brokenStanceActivatesEndure':
          "Broken Stance Activates Endure",
        'changedStrongAttacks': "Changed Strong Attacks",
        'changesCompatibleArmamentsSkillToBloodBladeAtStartOfExpedition':
          "Changes compatible armament's skill to Blood Blade at start of expedition",
        'changesCompatibleArmamentsSkillToChillingMistAtStartOfExpedition':
          "Changes compatible armament's skill to Chilling Mist at start of expedition",
        'changesCompatibleArmamentsSkillToDeterminationAtStartOfExpedition':
          "Changes compatible armament's skill to Determination at start of expedition",
        'changesCompatibleArmamentsSkillToEndureAtStartOfExpedition':
          "Changes compatible armament's skill to Endure at start of expedition",
        'changesCompatibleArmamentsSkillToEruptionAtStartOfExpedition':
          "Changes compatible armament's skill to Eruption at start of expedition",
        'changesCompatibleArmamentsSkillToFlamingStrikeAtStartOfExpedition':
          "Changes compatible armament's skill to Flaming Strike at start of expedition",
        'changesCompatibleArmamentsSkillToGlintbladePhalanxAtStartOfExpedition':
          "Changes compatible armament's skill to Glintblade Phalanx at start of expedition",
        'changesCompatibleArmamentsSkillToGravitasAtStartOfExpedition':
          "Changes compatible armament's skill to Gravitas at start of expedition",
        'changesCompatibleArmamentsSkillToHoarfrostStompAtStartOfExpedition':
          "Changes compatible armament's skill to Hoarfrost Stomp at start of expedition",
        'changesCompatibleArmamentsSkillToLightningSlashAtStartOfExpedition':
          "Changes compatible armament's skill to Lightning Slash at start of expedition",
        'changesCompatibleArmamentsSkillToPoisonMothFlightAtStartOfExpedition':
          "Changes compatible armament's skill to Poison Moth Flight at start of expedition",
        'changesCompatibleArmamentsSkillToPoisonousMistAtStartOfExpedition':
          "Changes compatible armament's skill to Poisonous Mist at start of expedition",
        'changesCompatibleArmamentsSkillToPrayerfulStrikeAtStartOfExpedition':
          "Changes compatible armament's skill to Prayerful Strike at start of expedition",
        'changesCompatibleArmamentsSkillToQuickstepAtStartOfExpedition':
          "Changes compatible armament's skill to Quickstep at start of expedition",
        'changesCompatibleArmamentsSkillToRainOfArrowsAtStartOfExpedition':
          "Changes compatible armament's skill to Rain of Arrows at start of expedition",
        'changesCompatibleArmamentsSkillToSacredBladeAtStartOfExpedition':
          "Changes compatible armament's skill to Sacred Blade at start of expedition",
        'changesCompatibleArmamentsSkillToSeppukuAtStartOfExpedition':
          "Changes compatible armament's skill to Seppuku at start of expedition",
        'changesCompatibleArmamentsSkillToStormStompAtStartOfExpedition':
          "Changes compatible armament's skill to Storm Stomp at start of expedition",
        'changesCompatibleArmamentsSkillToThunderboltAtStartOfExpedition':
          "Changes compatible armament's skill to Thunderbolt at start of expedition",
        'changesCompatibleArmamentsSkillToWhiteShadowsLureAtStartOfExpedition':
          "Changes compatible armament's skill to White Shadow's Lure at start of expedition",
        'characterSkillCooldownReduction':
          "Character Skill Cooldown Reduction",
        'characterSkillCooldownReductionPlus1':
          "Character Skill Cooldown Reduction +1",
        'characterSkillCooldownReductionPlus2':
          "Character Skill Cooldown Reduction +2",
        'characterSkillCooldownReductionPlus3':
          "Character Skill Cooldown Reduction +3",
        'chargedThrustInvokesSleepMist':
          "Charged Thrust Invokes Sleep Mist",
        'colossalArmamentsCoatedInRockWhenPerformingChargedAttacks':
          "Colossal armaments are coated in rock when performing charged attacks",
        'communionGrantsAntiDragonEffect':
          "Communion Grants Anti-Dragon Effect",
        'consecutiveGuardsHardenSkin':
          "Consecutive Guards Harden Skin",
        'continuousHpRecovery': "Continuous HP Recovery",
        'createsHolyGroundAtLowHP': "Creates Holy Ground at Low HP",
        'criticalHitAddsLightningEffect':
          "Critical Hit Adds Lightning Effect",
        'criticalHitBoostsStaminaRecoverySpeed':
          "Critical Hit Boosts Stamina Recovery Speed",
        'criticalHitCreatesSleepMist':
          "Critical Hit Creates Sleep Mist",
        'criticalHitFPRestoration': "Critical Hit FP Restoration",
        'criticalHitHPRestoration': "Critical Hit HP Restoration",
        'criticalHitsBoostAttackPower':
          "Critical Hits Boost Attack Power",
        'criticalHitsDealHugeDamageOnPoisonedEnemies':
          "Critical hits deal huge damage on poisoned enemies",
        'criticalHitsEarnRunes': "Critical Hits Earn Runes",
        'criticalHitsInflictBloodLoss':
          "Critical Hits Inflict Blood Loss",
        'crystalDartsInPossessionAtStartOfExpedition':
          "Crystal Darts in possession at start of expedition",
        'crystalShardsUponMagicCriticalHit':
          "Crystal Shards upon Magic Critical Hit",
        'damageBoostedAfterCriticalHit':
          "Damage Boosted after Critical Hit",
        'darknessConcealsCasterWhileWalking':
          "Darkness Conceals Caster While Walking",
        'deathCritHitCallsDeathLightning':
          "Death Crit. Hit Calls Death Lightning",
        'defeatingEnemiesFillsMoreOfTheArtGauge':
          "Defeating enemies fills more of the Art gauge",
        'defeatingEnemiesNearTotemStelaRestoresHP':
          "Defeating enemies near Totem Stela restores HP",
        'defeatingEnemiesRestoresFP': "Defeating Enemies Restores FP",
        'defeatingEnemiesRestoresHP': "Defeating Enemies Restores HP",
        'defeatingEnemiesRestoresHPForAlliesButNotForSelf':
          "Defeating enemies restores HP for allies but not for self",
        'defeatingGroupCallsVengefulSpirits':
          "Defeating Group Calls Vengeful Spirits",
        'defeatingGroupFiresGoldenShockwave':
          "Defeating Group Fires Golden Shockwave",
        'defeatingGroupReleasesMistOfCharm':
          "Defeating Group Releases Mist of Charm",
        'defeatingGroupReleasesMistOfFrost':
          "Defeating Group Releases Mist of Frost",
        'defeatingGroupSummonsWraiths':
          "Defeating Group Summons Wraiths",
        'defeatingGroupUnleashesLightning':
          "Defeating Group Unleashes Lightning",
        'dexterityPlus1': "Dexterity +1",
        'dexterityPlus2': "Dexterity +2",
        'dexterityPlus3': "Dexterity +3",
        'dmgNegationUpWhileCastingSpells':
          "Dmg Negation Up While Casting Spells",
        'dmgNegationUpWhileChargingAttacks':
          "Dmg Negation Up while Charging Attacks",
        'drawEnemyAttentionWhileGuarding':
          "Draw enemy attention while guarding",
        'endurancePlus1': "Endurance +1",
        'endurancePlus2': "Endurance +2",
        'endurancePlus3': "Endurance +3",
        'extendedSpellDuration': "Extended Spell Duration",
        'failingToCastSorceryRestoresFP':
          "Failing to Cast Sorcery Restores FP",
        'faithPlus1': "Faith +1",
        'faithPlus2': "Faith +2",
        'faithPlus3': "Faith +3",
        'fireAttackFollowsChargeAttacks':
          "Fire Attack Follows Charge Attacks",
        'fireAttackPowerUp': "Fire Attack Power Up",
        'fireAttackPowerUpPlus1': "Fire Attack Power Up +1",
        'fireAttackPowerUpPlus2': "Fire Attack Power Up +2",
        'fireCriticalHitGrantsMaxStaminaBoost':
          "Fire Critical Hit Grants Max Stamina Boost",
        'fireDamageNegationUp': "Fire Damage Negation Up",
        'fireGreaseInPossessionAtStartOfExpedition':
          "Fire Grease in possession at start of expedition",
        'firePotsInPossessionAtStartOfExpedition':
          "Fire Pots in possession at start of expedition",
        'flameOfFrenzyWhileWalking': "Flame of Frenzy While Walking",
        'flaskAlsoHealsAllies': "Flask Also Heals Allies",
        'flaskHealingAlsoRestoresFP':
          "Flask Healing Also Restores FP",
        'fpRecoveryFromSuccessfulGuarding':
          "FP Recovery From Successful Guarding",
        'fpRestorationUponAttacks': "FP Restoration upon Attacks",
        'fpRestorationUponAxeAttacks':
          "FP Restoration upon Axe Attacks",
        'fpRestorationUponBowAttacks':
          "FP Restoration upon Bow Attacks",
        'fpRestorationUponClawAttacks':
          "FP Restoration upon Claw Attacks",
        'fpRestorationUponColossalSwordAttacks':
          "FP Restoration upon Colossal Sword Attacks",
        'fpRestorationUponColossalWeaponAttacks':
          "FP Restoration upon Colossal Weapon Attacks",
        'fpRestorationUponCurvedGreatswordAttacks':
          "FP Restoration upon Curved Greatsword Attacks",
        'fpRestorationUponCurvedSwordAttacks':
          "FP Restoration upon Curved Sword Attacks",
        'fpRestorationUponDaggerAttacks':
          "FP Restoration upon Dagger Attacks",
        'fpRestorationUponFistAttacks':
          "FP Restoration upon Fist Attacks",
        'fpRestorationUponFlailAttacks':
          "FP Restoration upon Flail Attacks",
        'fpRestorationUponGreatHammerAttacks':
          "FP Restoration upon Great Hammer Attacks",
        'fpRestorationUponGreatSpearAttacks':
          "FP Restoration upon Great Spear Attacks",
        'fpRestorationUponGreataxeAttacks':
          "FP Restoration upon Greataxe Attacks",
        'fpRestorationUponGreatswordAttacks':
          "FP Restoration upon Greatsword Attacks",
        'fpRestorationUponHalberdAttacks':
          "FP Restoration upon Halberd Attacks",
        'fpRestorationUponHammerAttacks':
          "FP Restoration upon Hammer Attacks",
        'fpRestorationUponHeavyThrustingSwordAttacks':
          "FP Restoration upon Heavy Thrusting Sword Attacks",
        'fpRestorationUponKatanaAttacks':
          "FP Restoration upon Katana Attacks",
        'fpRestorationUponPikeAttacks':
          "FP Restoration upon Pike Attacks",
        'fpRestorationUponReaperAttacks':
          "FP Restoration upon Reaper Attacks",
        'fpRestorationUponSpearAttacks':
          "FP Restoration upon Spear Attacks",
        'fpRestorationUponStraightSwordAttacks':
          "FP Restoration upon Straight Sword Attacks",
        'fpRestorationUponSuccessiveAttacks':
          "FP Restoration upon Successive Attacks",
        'fpRestorationUponThrustingSwordAttacks':
          "FP Restoration upon Thrusting Sword Attacks",
        'fpRestorationUponTwinbladeAttacks':
          "FP Restoration upon Twinblade Attacks",
        'fpRestorationUponWhipAttacks':
          "FP Restoration upon Whip Attacks",
        'frostbiteIncreasesAttackPower':
          "Frostbite Increases Attack Power",
        'frostbiteProducesAMistOfFrost':
          "Frostbite Produces a Mist of Frost",
        'gestureCrossedLegsBuildsUpMadness':
          "Gesture Crossed Legs Builds Up Madness",
        'glintstoneScrapsInPossessionAtStartOfExpedition':
          "Glintstone Scraps in possession at start of expedition",
        'gradualRestorationByFlask': "Gradual Restoration by Flask",
        'gravityStoneChunksInPossessionAtStartOfExpedition':
          "Gravity Stone Chunks in possession at start of expedition",
        'guardCounterIsGivenABoostBasedOnCurrentHP':
          "Guard counter is given a boost based on current HP",
        'guardCountersActivateHolyAttacks':
          "Guard Counters Activate Holy Attacks",
        'guardCountersCastLightPillar':
          "Guard Counters Cast Light Pillar",
        'guardCountersLaunchSummoningAttack':
          "Guard Counters Launch Summoning Attack",
        'guardingUpsAttackAndCastingSpeeds':
          "Guarding Ups Attack & Casting Speeds",
        'holyAttackFollowsChargeAttacks':
          "Holy Attack Follows Charge Attacks",
        'holyAttackPowerUp': "Holy Attack Power Up",
        'holyAttackPowerUpPlus1': "Holy Attack Power Up +1",
        'holyAttackPowerUpPlus2': "Holy Attack Power Up +2",
        'holyDamageNegationUp': "Holy Damage Negation Up",
        'holyGreaseInPossessionAtStartOfExpedition':
          "Holy Grease in possession at start of expedition",
        'holyShockwaveUponChargedStrike':
          "Holy Shockwave upon Charged Strike",
        'holyWaterPotsInPossessionAtStartOfExpedition':
          "Holy Water Pots in possession at start of expedition",
        'hpRecoveryFromSuccessfulGuarding':
          "HP Recovery from Successful Guarding",
        'hpRecoveryFromSuccessfulGuardingPlus':
          "HP Recovery From Successful Guarding",
        'hpRestorationUponAttacks': "HP Restoration upon Attacks",
        'hpRestorationUponAxeAttacks':
          "HP Restoration upon Axe Attacks",
        'hpRestorationUponBowAttacks':
          "HP Restoration upon Bow Attacks",
        'hpRestorationUponClawAttacks':
          "HP Restoration upon Claw Attacks",
        'hpRestorationUponColossalSwordAttacks':
          "HP Restoration upon Colossal Sword Attacks",
        'hpRestorationUponColossalWeaponAttacks':
          "HP Restoration upon Colossal Weapon Attacks",
        'hpRestorationUponCurvedGreatswordAttacks':
          "HP Restoration upon Curved Greatsword Attacks",
        'hpRestorationUponCurvedSwordAttacks':
          "HP Restoration upon Curved Sword Attacks",
        'hpRestorationUponDaggerAttacks':
          "HP Restoration upon Dagger Attacks",
        'hpRestorationUponFistAttacks':
          "HP Restoration upon Fist Attacks",
        'hpRestorationUponFlailAttacks':
          "HP Restoration upon Flail Attacks",
        'hpRestorationUponGreatHammerAttacks':
          "HP Restoration upon Great Hammer Attacks",
        'hpRestorationUponGreatSpearAttacks':
          "HP Restoration upon Great Spear Attacks",
        'hpRestorationUponGreataxeAttacks':
          "HP Restoration upon Greataxe Attacks",
        'hpRestorationUponGreatswordAttacks':
          "HP Restoration upon Greatsword Attacks",
        'hpRestorationUponHalberdAttacks':
          "HP Restoration upon Halberd Attacks",
        'hpRestorationUponHammerAttacks':
          "HP Restoration upon Hammer Attacks",
        'hpRestorationUponHeavyThrustingSwordAttacks':
          "HP Restoration upon Heavy Thrusting Sword Attacks",
        'hpRestorationUponKatanaAttacks':
          "HP Restoration upon Katana Attacks",
        'hpRestorationUponPikeAttacks':
          "HP Restoration upon Pike Attacks",
        'hpRestorationUponReaperAttacks':
          "HP Restoration upon Reaper Attacks",
        'hpRestorationUponSpearAttacks':
          "HP Restoration upon Spear Attacks",
        'hpRestorationUponStraightSwordAttacks':
          "HP Restoration upon Straight Sword Attacks",
        'hpRestorationUponSuccessiveAttacks':
          "HP Restoration upon Successive Attacks",
        'hpRestorationUponThrustingCounterattack':
          "HP Restoration upon Thrusting Counterattack",
        'hpRestorationUponThrustingSwordAttacks':
          "HP Restoration upon Thrusting Sword Attacks",
        'hpRestorationUponTwinbladeAttacks':
          "HP Restoration upon Twinblade Attacks",
        'hpRestorationUponWhipAttacks':
          "HP Restoration upon Whip Attacks",
        'hpRestorationWithHeadShots':
          "HP Restoration with Head Shots",
        'hpRestoredWhenUsingMedicinalBolusesEtc':
          "HP restored when using medicinal boluses, etc.",
        'hugeRuneDiscountForShopPurchasesWhileOnExpedition':
          "Huge rune discount for shop purchases while on expedition",
        'iceStormSurgeSprint': "Ice Storm Surge Sprint",
        'iceStormUponChargedSlash': "Ice Storm upon Charged Slash",
        'iceStormUponCriticalHitWithFrost':
          "Ice Storm upon Critical Hit with Frost",
        'impairedDamageNegation': "Impaired Damage Negation",
        'impairedPhysicalDamageNegation':
          "Impaired Physical Damage Negation",
        'improvedAttackPowerAtFullHP':
          "Improved Attack Power at Full HP",
        'improvedAttackPowerAtLowHP':
          "Improved Attack Power at Low HP",
        'improvedAttackPowerWhenTwoHanding':
          "Improved Attack Power when Two-Handing",
        'improvedAttackPowerWith3PlusAxesEquipped':
          "Improved Attack Power with 3+ Axes Equipped",
        'improvedAttackPowerWith3PlusBowsEquipped':
          "Improved Attack Power with 3+ Bows Equipped",
        'improvedAttackPowerWith3PlusClawsEquipped':
          "Improved Attack Power with 3+ Claws Equipped",
        'improvedAttackPowerWith3PlusColossalSwordsEquipped':
          "Improved Attack Power with 3+ Colossal Swords Equipped",
        'improvedAttackPowerWith3PlusColossalWeaponsEquipped':
          "Improved Attack Power with 3+ Colossal Weapons Equipped",
        'improvedAttackPowerWith3PlusCurvedGreatswordsEquipped':
          "Improved Attack Power with 3+ Curved Greatswords Equipped",
        'improvedAttackPowerWith3PlusCurvedSwordsEquipped':
          "Improved Attack Power with 3+ Curved Swords Equipped",
        'improvedAttackPowerWith3PlusDaggersEquipped':
          "Improved Attack Power with 3+ Daggers Equipped",
        'improvedAttackPowerWith3PlusFistsEquipped':
          "Improved Attack Power with 3+ Fists Equipped",
        'improvedAttackPowerWith3PlusFlailsEquipped':
          "Improved Attack Power with 3+ Flails Equipped",
        'improvedAttackPowerWith3PlusGreatHammersEquipped':
          "Improved Attack Power with 3+ Great Hammers Equipped",
        'improvedAttackPowerWith3PlusGreatSpearsEquipped':
          "Improved Attack Power with 3+ Great Spears Equipped",
        'improvedAttackPowerWith3PlusGreataxesEquipped':
          "Improved Attack Power with 3+ Greataxes Equipped",
        'improvedAttackPowerWith3PlusGreatswordsEquipped':
          "Improved Attack Power with 3+ Greatswords Equipped",
        'improvedAttackPowerWith3PlusHalberdsEquipped':
          "Improved Attack Power with 3+ Halberds Equipped",
        'improvedAttackPowerWith3PlusHammersEquipped':
          "Improved Attack Power with 3+ Hammers Equipped",
        'improvedAttackPowerWith3PlusHeavyThrustingSwordsEquipped':
          "Improved Attack Power with 3+ Heavy Thrusting Swords Equipped",
        'improvedAttackPowerWith3PlusKatanaEquipped':
          "Improved Attack Power with 3+ Katana Equipped",
        'improvedAttackPowerWith3PlusReapersEquipped':
          "Improved Attack Power with 3+ Reapers Equipped",
        'improvedAttackPowerWith3PlusSpearsEquipped':
          "Improved Attack Power with 3+ Spears Equipped",
        'improvedAttackPowerWith3PlusStraightSwordsEquipped':
          "Improved Attack Power with 3+ Straight Swords Equipped",
        'improvedAttackPowerWith3PlusThrustingSwordsEquipped':
          "Improved Attack Power with 3+ Thrusting Swords Equipped",
        'improvedAttackPowerWith3PlusTwinbladesEquipped':
          "Improved Attack Power with 3+ Twinblades Equipped",
        'improvedAttackPowerWith3PlusWhipsEquipped':
          "Improved Attack Power with 3+ Whips Equipped",
        'improvedAxeAttackPower': "Improved Axe Attack Power",
        'improvedBestialIncantations':
          "Improved Bestial Incantations",
        'improvedBloodLossAndFrostResistance':
          "Improved Blood Loss & Frost Resistance",
        'improvedBloodLossResistance':
          "Improved Blood Loss Resistance",
        'improvedBowAttackPower': "Improved Bow Attack Power",
        'improvedCarianSwordSorcery': "Improved Carian Sword Sorcery",
        'improvedChainAttackFinishers':
          "Improved Chain Attack Finishers",
        'improvedChargeAttacks': "Improved Charge Attacks",
        'improvedChargedIncantation': "Improved Charged Incantation",
        'improvedChargedSkillAttackPower':
          "Improved Charged Skill Attack Power",
        'improvedChargedSorceries': "Improved Charged Sorceries",
        'improvedChargedSpellsAndSkills':
          "Improved Charged Spells & Skills",
        'improvedClawAttackPower': "Improved Claw Attack Power",
        'improvedColossalSwordAttackPower':
          "Improved Colossal Sword Attack Power",
        'improvedColossalWeaponAttackPower':
          "Improved Colossal Weapon Attack Power",
        'improvedCriticalHits': "Improved Critical Hits",
        'improvedCriticalHitsPlus1': "Improved Critical Hits +1",
        'improvedCrystalianSorcery': "Improved Crystalian Sorcery",
        'improvedCurvedGreatswordAttackPower':
          "Improved Curved Greatsword Attack Power",
        'improvedCurvedSwordAttackPower':
          "Improved Curved Sword Attack Power",
        'improvedDaggerAttackPower': "Improved Dagger Attack Power",
        'improvedDamageNegationAtFullHP':
          "Improved Damage Negation at Full HP",
        'improvedDamageNegationAtLowHP':
          "Improved Damage Negation at Low HP",
        'improvedDeathBlightResistance':
          "Improved Death Blight Resistance",
        'improvedDexterity': "Improved Dexterity",
        'improvedDodging': "Improved Dodging",
        'improvedDragonCommunionIncantations':
          "Improved Dragon Communion Incantations",
        'improvedDragonCultIncantations':
          "Improved Dragon Cult Incantations",
        'improvedFireAttackPower': "Improved Fire Attack Power",
        'improvedFireDamageNegation': "Improved Fire Damage Negation",
        'improvedFistAttackPower': "Improved Fist Attack Power",
        'improvedFlailAttackPower': "Improved Flail Attack Power",
        'improvedFrenziedFlameIncantations':
          "Improved Frenzied Flame Incantations",
        'improvedFrostResistance': "Improved Frost Resistance",
        'improvedFundamentalistIncantations':
          "Improved Fundamentalist Incantations",
        'improvedGiantsFlameIncantations':
          "Improved Giants' Flame Incantations",
        'improvedGlintbladeSorcery': "Improved Glintblade Sorcery",
        'improvedGodslayerIncantations':
          "Improved Godslayer Incantations",
        'improvedGravitySorcery': "Improved Gravity Sorcery",
        'improvedGreatHammerAttackPower':
          "Improved Great Hammer Attack Power",
        'improvedGreatSpearAttackPower':
          "Improved Great Spear Attack Power",
        'improvedGreataxeAttackPower':
          "Improved Greataxe Attack Power",
        'improvedGreatswordAttackPower':
          "Improved Greatsword Attack Power",
        'improvedGuardBreaking': "Improved Guard Breaking",
        'improvedGuardCounters': "Improved Guard Counters",
        'improvedGuardingAbility': "Improved Guarding Ability",
        'improvedGuardingAbilityPlus1':
          "Improved Guarding Ability +1",
        'improvedGuardingAbilityPlus2':
          "Improved Guarding Ability +2",
        'improvedHalberdAttackPower': "Improved Halberd Attack Power",
        'improvedHammerAttackPower': "Improved Hammer Attack Power",
        'improvedHeavyThrustingSwordAttackPower':
          "Improved Heavy Thrusting Sword Attack Power",
        'improvedHolyAttackPower': "Improved Holy Attack Power",
        'improvedHolyDamageNegation': "Improved Holy Damage Negation",
        'improvedIncantations': "Improved Incantations",
        'improvedInitialStandardAttack':
          "Improved Initial Standard Attack",
        'improvedInvisibilitySorcery':
          "Improved Invisibility Sorcery",
        'improvedItemDiscovery': "Improved Item Discovery",
        'improvedJumpAttacks': "Improved Jump Attacks",
        'improvedKatanaAttackPower': "Improved Katana Attack Power",
        'improvedLightningAttackPower':
          "Improved Lightning Attack Power",
        'improvedLightningDamageNegation':
          "Improved Lightning Damage Negation",
        'improvedMadnessResistance': "Improved Madness Resistance",
        'improvedMagicAttackPower': "Improved Magic Attack Power",
        'improvedMagicDamageNegation':
          "Improved Magic Damage Negation",
        'improvedNightSorcery': "Improved Night Sorcery",
        'improvedNonPhysicalAttackPower':
          "Improved Non-Physical Attack Power",
        'improvedNonPhysicalDamageNegation':
          "Improved Non-Physical Damage Negation",
        'improvedPerfumingArts': "Improved Perfuming Arts",
        'improvedPhysicalAttackPower':
          "Improved Physical Attack Power",
        'improvedPhysicalDamageNegation':
          "Improved Physical Damage Negation",
        'improvedPikeAttackPower': "Improved Pike Attack Power",
        'improvedPoise': "Improved Poise",
        'improvedPoiseDamageNegationWhenKnockedBackByDamage':
          "Improved Poise & Damage Negation When Knocked Back by Damage",
        'improvedPoiseNearTotemStela':
          "Improved Poise Near Totem Stela",
        'improvedPoisonRotResistance':
          "Improved Poison & Rot Resistance",
        'improvedPoisonResistance': "Improved Poison Resistance",
        'improvedRangedWeaponAttacks':
          "Improved Ranged Weapon Attacks",
        'improvedReaperAttackPower': "Improved Reaper Attack Power",
        'improvedRoarAndBreathAttacks':
          "Improved Roar & Breath Attacks",
        'improvedRotResistance': "Improved Rot Resistance",
        'improvedSkillAttackPower': "Improved Skill Attack Power",
        'improvedSleepMadnessResistance':
          "Improved Sleep & Madness Resistance",
        'improvedSleepResistance': "Improved Sleep Resistance",
        'improvedSorceries': "Improved Sorceries",
        'improvedSpearAttackPower': "Improved Spear Attack Power",
        'improvedSpellCastingSpeed': "Improved Spell Casting Speed",
        'improvedStaminaRecovery': "Improved Stamina Recovery",
        'improvedStaminaRecoveryPlus1':
          "Improved stamina recovery +1",
        'improvedStanceBreaking': "Improved Stance-Breaking",
        'improvedStanceBreakingWhenTwoHanding':
          "Improved Stance-Breaking when Two-Handing",
        'improvedStanceBreakingWhenWieldingTwoArmaments':
          "Improved Stance-Breaking when Wielding Two Armaments",
        'improvedStanceBreakingWithHeadShots':
          "Improved Stance-Breaking with Head Shots",
        'improvedStonediggerSorcery': "Improved Stonedigger Sorcery",
        'improvedStraightSwordAttackPower':
          "Improved Straight Sword Attack Power",
        'improvedThornSorcery': "Improved Thorn Sorcery",
        'improvedThrowingKnifeDamage':
          "Improved Throwing Knife Damage",
        'improvedThrowingPotDamage': "Improved Throwing Pot Damage",
        'improvedThrowingPots': "Improved Throwing Pots",
        'improvedGlintstoneAndGravityStoneDamage':
          "Improved Glintstone and Gravity Stone Damage",
        'improvedThrustingCounterattack':
          "Improved Thrusting Counterattack",
        'improvedThrustingSwordAttackPower':
          "Improved Thrusting Sword Attack Power",
        'improvedTwinbladeAttackPower':
          "Improved Twinblade Attack Power",
        'improvedWhipAttackPower': "Improved Whip Attack Power",
        'increasedMaximumFP': "Increased Maximum FP",
        'increasedMaximumHP': "Increased Maximum HP",
        'increasedMaximumStamina': "Increased Maximum Stamina",
        'increasedRuneAcquisitionForSelfAndAllies':
          "Increased rune acquisition for self and allies",
        'intelligencePlus1': "Intelligence +1",
        'intelligencePlus2': "Intelligence +2",
        'intelligencePlus3': "Intelligence +3",
        'itemsConferEffectToAllNearbyAllies':
          "Items confer effect to all nearby allies",
        'jumpingConjuresMagicProjectiles':
          "Jumping Conjures Magic Projectiles",
        'lessLikelyToBeTargeted': "Less Likely to Be Targeted",
        'lightningAttackPowerUp': "Lightning Attack Power Up",
        'lightningAttackPowerUpPlus1': "Lightning Attack Power Up +1",
        'lightningAttackPowerUpPlus2': "Lightning Attack Power Up +2",
        'lightningCriticalHitImbuesArmament':
          "Lightning Critical Hit Imbues Armament",
        'lightningDamageNegationUp': "Lightning Damage Negation Up",
        'lightningFollowsChargeAttacks':
          "Lightning Follows Charge Attacks",
        'lightningGreaseInPossessionAtStartOfExpedition':
          "Lightning Grease in possession at start of expedition",
        'lightningPotsInPossessionAtStartOfExpedition':
          "Lightning Pots in possession at start of expedition",
        'lightningUponChargedThrust': "Lightning upon Charged Thrust",
        'lightningUponDodging': "Lightning upon Dodging",
        'lightningUponPrecisionAiming':
          "Lightning upon Precision Aiming",
        'lowHpCritHitFullyRestoresHP':
          "Low HP Crit. Hit Fully Restores HP",
        'luringEnemiesUponChargedStrike':
          "Luring Enemies upon Charged Strike",
        'madnessContinuallyRecoversFP':
          "Madness Continually Recovers FP",
        'madnessCritHitFiresFrenziedFlame':
          "Madness Crit. Hit Fires Frenzied Flame",
        'madnessIncreasesAttackPower':
          "Madness Increases Attack Power",
        'madnessProducesAFlameOfFrenzy':
          "Madness Produces a Flame of Frenzy",
        'magicAttackFollowsChargeAttacks':
          "Magic Attack Follows Charge Attacks",
        'magicAttackPowerUp': "Magic Attack Power Up",
        'magicAttackPowerUpPlus1': "Magic Attack Power Up +1",
        'magicAttackPowerUpPlus2': "Magic Attack Power Up +2",
        'magicBubblesUponChargedStrike':
          "Magic Bubbles upon Charged Strike",
        'magicDamageNegationUp': "Magic Damage Negation Up",
        'magicGreaseInPossessionAtStartOfExpedition':
          "Magic Grease in possession at start of expedition",
        'magicPotsInPossessionAtStartOfExpedition':
          "Magic Pots in possession at start of expedition",
        'magmaSurgeSprint': "Magma Surge Sprint",
        'magmaUponChargedStrike': "Magma upon Charged Strike",
        'magmaUponDefeatingMultipleEnemies':
          "Magma upon Defeating Multiple Enemies",
        'magmaUponFireCriticalHit': "Magma upon Fire Critical Hit",
        'manyPeriodicalGlintblades': "Many Periodical Glintblades",
        'maxFpPermanentlyIncreasedAfterReleasingSorcerersRiseMechanism':
          "Max FP permanently increased after releasing Sorcerer's Rise mechanism",
        'maxFpUpWith3PlusSacredSealsEquipped':
          "Max FP Up with 3+ Sacred Seals Equipped",
        'maxFpUpWith3PlusStavesEquipped':
          "Max FP Up with 3+ Staves Equipped",
        'maxHpUpWith3PlusGreatshieldsEquipped':
          "Max HP Up with 3+ Greatshields Equipped",
        'maxHpUpWith3PlusMediumShieldsEquipped':
          "Max HP Up with 3+ Medium Shields Equipped",
        'maxHpUpWith3PlusSmallShieldsEquipped':
          "Max HP Up with 3+ Small Shields Equipped",
        'maximumHpDown': "Maximum HP Down",
        'mindPlus1': "Mind +1",
        'mindPlus2': "Mind +2",
        'mindPlus3': "Mind +3",
        'moreRunesFromDefeatedEnemies':
          "More Runes From Defeated Enemies",
        'multiplePeriodicalGlintblades':
          "Multiple Periodical Glintblades",
        'nearbyFrostbiteConcealsSelf':
          "Nearby Frostbite Conceals Self",
        'noRuneLossOrLevelDownUponDeath':
          "No Rune Loss or Level Down Upon Death",
        'parriesActivateGoldenRetaliation':
          "Parries Activate Golden Retaliation",
        'partialHpRestorationUponPostDamageAttacks':
          "Partial HP Restoration upon Post-Damage Attacks",
        'performingConsecutiveSuccessfulGuardsImprovesGuardAbilityAndDeflectsBigAttacks':
          "Performing consecutive successful guards improves guard ability and deflects big attacks",
        'periodicalGiantGlintblades': "Periodical Giant Glintblades",
        'pestThreadsUponChargedThrust':
          "Pest Threads upon Charged Thrust",
        'phantomAttackUponChargedSlash':
          "Phantom Attack upon Charged Slash",
        'phantomAttackUponChargedStrike':
          "Phantom Attack upon Charged Strike",
        'phantomAttackUponChargedThrust':
          "Phantom Attack upon Charged Thrust",
        'physicalAttackUp': "Physical Attack Up",
        'physicalAttackUpPlus1': "Physical Attack Up +1",
        'physicalAttackUpPlus2': "Physical Attack Up +2",
        'physicalAttackUpPlus3': "Physical Attack Up +3",
        'poisePlus1': "Poise +1",
        'poisePlus2': "Poise +2",
        'poisePlus3': "Poise +3",
        'poisonAndRotImprovesAttackPower':
          "Poison & Rot Improves Attack Power",
        'poisonAndRotInVicinityIncreasesAttackPower':
          "Poison & Rot in Vicinity Increases Attack Power",
        'poisonIncreasesAttackPower': "Poison Increases Attack Power",
        'poisonMistUponChargedThrust':
          "Poison Mist upon Charged Thrust",
        'poisonMistUponPoisonCriticalHit':
          "Poison Mist upon Poison Critical Hit",
        'poisonMistUponPrecisionAiming':
          "Poison Mist upon Precision Aiming",
        'poisonProducesAMistOfPoison':
          "Poison Produces a Mist of Poison",
        'poisonboneDartsInPossessionAtStartOfExpedition':
          "Poisonbone Darts in possession at start of expedition",
        'powerOfDarkMoon': "Power of Dark Moon",
        'powerOfDespair': "Power of Despair",
        'powerOfDestinedDeath': "Power of Destined Death",
        'powerOfDestruction': "Power of Destruction",
        'powerOfFullMoon': "Power of Full Moon",
        'powerOfHouseMarais': "Power of House Marais",
        'powerOfNightAndFlame': "Power of Night and Flame",
        'powerOfTheAncestralSpirit': "Power of the Ancestral Spirit",
        'powerOfTheBlasphemous': "Power of the Blasphemous",
        'powerOfTheBloodLord': "Power of the Blood Lord",
        'powerOfTheDragonlord': "Power of the Dragonlord",
        'powerOfTheFirstLord': "Power of the First Lord",
        'powerOfTheFlyingDragon': "Power of the Flying Dragon",
        'powerOfTheGeneral': "Power of the General",
        'powerOfTheGiant': "Power of the Giant",
        'powerOfTheGoldenLineage': "Power of the Golden Lineage",
        'powerOfTheGoldenOrder': "Power of the Golden Order",
        'powerOfTheGreatAncientDragon':
          "Power of the Great Ancient Dragon",
        'powerOfTheGreaterWill': "Power of the Greater Will",
        'powerOfTheLightlessVoid': "Power of the Lightless Void",
        'powerOfTheOmenKing': "Power of the Omen King",
        'powerOfTheQueen': "Power of the Queen",
        'powerOfTheStarscourge': "Power of the Starscourge",
        'powerOfTheUndefeated': "Power of the Undefeated",
        'powerOfVengeance': "Power of Vengeance",
        'projectileDamageDropOffReduced':
          "Projectile Damage Drop-Off Reduced",
        'projectileDamageDropOffReducedPlus1':
          "Projectile damage drop-off reduced +1",
        'projectilesLaunchedUponAttacks':
          "Projectiles Launched upon Attacks",
        'projectilesUponChargedStrike':
          "Projectiles upon Charged Strike",
        'raisedStaminaRecoveryForNearbyAlliesButNotForSelf':
          "Raised stamina recovery for nearby allies, but not for self",
        'raisesMaximumFpPlus1': "Raises maximum FP +1",
        'raisesNonPhysicalDamageNegationPlus1':
          "Raises non-physical damage negation +1",
        'raisesPhysicalAttackPowerPlus1':
          "Raises physical attack power +1",
        'raisesPhysicalDamageNegationPlus1':
          "Raises physical damage negation +1",
        'raisesResistanceToAllAilments':
          "Raises resistance to all ailments",
        'raisesSorceryIncantationPotency':
          "Raises sorcery/incantation potency",
        'reducedSkillFpCost': "Reduced Skill FP Cost",
        'reducedSpellFpCost': "Reduced Spell FP Cost",
        'reducedStaminaConsumption': "Reduced Stamina Consumption",
        'ringOfLightUponChargedSlash':
          "Ring of Light upon Charged Slash",
        'roaringFlamesUponChargedSlash':
          "Roaring Flames upon Charged Slash",
        'rotCriticalHitFiresPestThreads':
          "Rot Critical Hit Fires Pest Threads",
        'rotMistUponPrecisionAiming':
          "Rot Mist upon Precision Aiming",
        'rotProducesAMistOfScarletRot':
          "Rot Produces a Mist of Scarlet Rot",
        'runeDiscountForShopPurchasesWhileOnExpedition':
          "Rune discount for shop purchases while on expedition",
        'sacredOrderUponHolyCriticalHit':
          "Sacred Order upon Holy Critical Hit",
        'savageFlamesRoarWhileWalking':
          "Savage Flames Roar While Walking",
        'shieldGreaseInPossessionAtStartOfExpedition':
          "Shield Grease in possession at start of expedition",
        'shieldingCreatesHolyGround': "Shielding Creates Holy Ground",
        'shieldingImprovesDamageNegation':
          "Shielding Improves Damage Negation",
        'shieldingInvokesIndomitableVow':
          "Shielding Invokes Indomitable Vow",
        'shockwaveProducedFromSuccessfulGuarding':
          "Shockwave Produced From Successful Guarding",
        'shockwaveUponChargedStrike': "Shockwave upon Charged Strike",
        'skillActivationImprovesPoise':
          "Skill Activation Improves Poise",
        'sleepIncreasesAttackPower': "Sleep Increases Attack Power",
        'sleepProducesAMistOfSleep': "Sleep Produces a Mist of Sleep",
        'slowlyRestoreHpForSelfAndNearbyAlliesWhenHpIsLow':
          "Slowly restore HP for self and nearby allies when HP is low",
        'smallPouchInPossessionAtStartOfExpedition':
          "Small Pouch in possession at start of expedition",
        'staminaRecoveryUponLandingAttacks':
          "Stamina Recovery upon Landing Attacks",
        'staminaRecoveryUponLandingAttacksPlus1':
          "Stamina Recovery upon Landing Attacks +1",
        'starlightShardsInPossessionAtStartOfExpedition':
          "Starlight Shards in possession at start of expedition",
        'startingArmamentDealsFireDamage':
          "Starting armament deals fire damage",
        'startingArmamentDealsHolyDamage':
          "Starting armament deals holy damage",
        'startingArmamentDealsLightningDamage':
          "Starting armament deals lightning damage",
        'startingArmamentDealsMagicDamage':
          "Starting armament deals magic damage",
        'startingArmamentInflictsBloodLoss':
          "Starting armament inflicts blood loss",
        'startingArmamentInflictsFrost':
          "Starting armament inflicts frost",
        'startingArmamentInflictsPoison':
          "Starting armament inflicts poison",
        'startingArmamentInflictsScarletRot':
          "Starting armament inflicts scarlet rot",
        'stoneswordKeyInPossessionAtStartOfExpedition':
          "Stonesword Key in possession at start of expedition",
        'stormOfRedLightningWhileWalking':
          "Storm of Red Lightning While Walking",
        'strengthPlus1': "Strength +1",
        'strengthPlus2': "Strength +2",
        'strengthPlus3': "Strength +3",
        'strongAttackCreatesWideWaveOfHeat':
          "Strong Attack Creates Wide Wave of Heat",
        'strongAttacksImprovePoise': "Strong Attacks Improve Poise",
        'strongJumpAttacksCreateShockwave':
          "Strong Jump Attacks Create Shockwave",
        'successfulGuardingUpsDmgNegation':
          "Successful Guarding Ups Dmg Negation",
        'successfulGuardingUpsPoise': "Successful Guarding Ups Poise",
        'successiveAttackHpRestoration':
          "Successive Attack HP Restoration",
        'successiveAttacksBoostAttackPower':
          "Successive Attacks Boost Attack Power",
        'successiveAttacksNegateDamage':
          "Successive Attacks Negate Damage",
        'suddenEnemyDeathUponAttacks':
          "Sudden Enemy Death upon Attacks",
        'surgeSprintLandingsSplitEarth':
          "Surge Sprint Landings Split Earth",
        'switchingWeaponsAddsAnAffinityAttack':
          "Switching Weapons Adds an Affinity Attack",
        'switchingWeaponsBoostsAttackPower':
          "Switching Weapons Boosts Attack Power",
        'takingAttacksImprovesAttackPower':
          "Taking attacks improves attack power",
        'takingDamageBoostsDamageNegation':
          "Taking Damage Boosts Damage Negation",
        'takingDamageRestoresFp': "Taking Damage Restores FP",
        'theDuchessGrief': "The Duchess' Grief",
        'theExecutorsGrief': "The Executor's Grief",
        'theGuardiansGrief': "The Guardian's Grief",
        'theIroneyesGrief': "The Ironeye's Grief",
        'theRaidersGrief': "The Raider's Grief",
        'theReclusesGrief': "The Recluse's Grief",
        'theRevenantsGrief': "The Revenant's Grief",
        'theWyldersGrief': "The Wylder's Grief",
        'throwingDaggersInPossessionAtStartOfExpedition':
          "Throwing Daggers in possession at start of expedition",
        'treasureMarkedUponMap': "Treasure marked upon map",
        'ultimateArtAutoChargePlus1': "Ultimate Art Auto Charge +1",
        'ultimateArtAutoChargePlus2': "Ultimate Art Auto Charge +2",
        'ultimateArtAutoChargePlus3': "Ultimate Art Auto Charge +3",
        'ultimateArtGaugeChargeSpeedUp':
          "Ultimate Art Gauge Charge Speed Up",
        'viciousStarRainPoursWhileWalking':
          "Vicious Star Rain Pours While Walking",
        'vigorPlus1': "Vigor +1",
        'vigorPlus2': "Vigor +2",
        'vigorPlus3': "Vigor +3",
        'wraithCallingBellInPossessionAtStartOfExpedition':
          "Wraith Calling Bell in possession at start of expedition",
        'wraithsWhileWalking': "Wraiths While Walking",
        'continuousHPLoss': "Continuous HP Loss",
        'characterSkillCooldownReductionPlus4':
          "Character Skill Cooldown Reduction +4",
        'characterSkillCooldownReductionPlus5':
          "Character Skill Cooldown Reduction +5",
        'ultimateArtAutoChargePlus4': "Ultimate Art Auto Charge +4",
        'ultimateArtAutoChargePlus5': "Ultimate Art Auto Charge +5",
        'poisePlus4': "Poise +4",
        'poisePlus5': "Poise +5",
        'physicalAttackUpPlus4': "Physical Attack Up +4",
        'magicAttackPowerUpPlus3': "Magic Attack Power Up +3",
        'magicAttackPowerUpPlus4': "Magic Attack Power Up +4",
        'fireAttackPowerUpPlus3': "Fire Attack Power Up +3",
        'fireAttackPowerUpPlus4': "Fire Attack Power Up +4",
        'lightningAttackPowerUpPlus3': "Lightning Attack Power Up +3",
        'lightningAttackPowerUpPlus4': "Lightning Attack Power Up +4",
        'holyAttackPowerUpPlus3': "Holy Attack Power Up +3",
        'holyAttackPowerUpPlus4': "Holy Attack Power Up +4",
        'improvedMagicDamageNegationPlus1':
          "Improved Magic Damage Negation +1",
        'improvedMagicDamageNegationPlus2':
          "Improved Magic Damage Negation +2",
        'improvedFireDamageNegationPlus1':
          "Improved Fire Damage Negation +1",
        'improvedFireDamageNegationPlus2':
          "Improved Fire Damage Negation +2",
        'improvedLightningDamageNegationPlus1':
          "Improved Lightning Damage Negation +1",
        'improvedLightningDamageNegationPlus2':
          "Improved Lightning Damage Negation +2",
        'improvedHolyDamageNegationPlus1':
          "Improved Holy Damage Negation +1",
        'improvedHolyDamageNegationPlus2':
          "Improved Holy Damage Negation +2",
        'improvedPoisonResistancePlus1':
          "Improved Poison Resistance +1",
        'improvedPoisonResistancePlus2':
          "Improved Poison Resistance +2",
        'improvedBloodLossResistancePlus1':
          "Improved Blood Loss Resistance +1",
        'improvedBloodLossResistancePlus2':
          "Improved Blood Loss Resistance +2",
        'improvedSleepResistancePlus1':
          "Improved Sleep Resistance +1",
        'improvedSleepResistancePlus2':
          "Improved Sleep Resistance +2",
        'improvedDeathBlightResistancePlus1':
          "Improved Death Blight Resistance +1",
        'improvedDeathBlightResistancePlus2':
          "Improved Death Blight Resistance +2",
        'improvedRotResistancePlus1': "Improved Rot Resistance +1",
        'improvedRotResistancePlus2': "Improved Rot Resistance +2",
        'improvedFrostResistancePlus1':
          "Improved Frost Resistance +1",
        'improvedFrostResistancePlus2':
          "Improved Frost Resistance +2",
        'improvedMadnessResistancePlus1':
          "Improved Madness Resistance +1",
        'improvedMadnessResistancePlus2':
          "Improved Madness Resistance +2",
        'partialHPRestorationUponPostDamageAttacksPlus1':
          "Partial HP Restoration upon Post-Damage Attacks +1",
        'partialHPRestorationUponPostDamageAttacksPlus2':
          "Partial HP Restoration upon Post-Damage Attacks +2",
        'hpRestoredWhenUsingMedicinalBolusesEtcPlus1':
          "HP restored when using medicinal boluses, etc. +1",
        'hpRestoredWhenUsingMedicinalBolusesEtcPlus2':
          "HP restored when using medicinal boluses, etc. +2",
        'artGaugeChargedFromSuccessfulGuardingPlus1':
          "Art gauge charged from successful guarding +1",
        'artGaugeChargedFromSuccessfulGuardingPlus2':
          "Art gauge charged from successful guarding +2",
        'artGaugeFillsModeratelyUponCriticalHitPlus1':
          "Art gauge fills moderately upon critical hit +1",
        'artGaugeFillsModeratelyUponCriticalHitPlus2':
          "Art gauge fills moderately upon critical hit +2",
        'physicalAttackPowerIncreasesAfterUsingGreaseItemsPlus1':
          "Physical attack power increases after using grease items +1",
        'physicalAttackPowerIncreasesAfterUsingGreaseItemsPlus2':
          "Physical attack power increases after using grease items +2",
        'criticalHitBoostsStaminaRecoverySpeedPlus1':
          "Critical Hit Boosts Stamina Recovery Speed +1",
        'improvedGuardCountersPlus1': "Improved Guard Counters +1",
        'improvedGuardCountersPlus2': "Improved Guard Counters +2",
        'improvedThrowingPotDamagePlus1':
          "Improved Throwing Pot Damage +1",
        'improvedThrowingPotDamagePlus2':
          "Improved Throwing Pot Damage +2",
        'improvedThrowingKnifeDamagePlus1':
          "Improved Throwing Knife Damage +1",
        'improvedThrowingKnifeDamagePlus2':
          "Improved Throwing Knife Damage +2",
        'improvedGlintstoneAndGravityStoneDamagePlus1':
          "Improved Glintstone and Gravity Stone Damage +1",
        'improvedGlintstoneAndGravityStoneDamagePlus2':
          "Improved Glintstone and Gravity Stone Damage +2",
        'improvedRoarAndBreathAttacksPlus1':
          "Improved Roar & Breath Attacks +1",
        'improvedRoarAndBreathAttacksPlus2':
          "Improved Roar & Breath Attacks +2",
        'improvedPerfumingArtsPlus1': "Improved Perfuming Arts +1",
        'improvedPerfumingArtsPlus2': "Improved Perfuming Arts +2",
        'maxHPIncreasedForEachGreatEnemyDefeatedAtAGreatChurch':
          "Max HP increased for each great enemy defeated at a Great Church.",
        'runesAndItemDiscoveryIncreasedForEachGreatEnemyDefeatedAtAFort':
          "Runes and Item Discovery increased for each great enemy defeated at a Fort",
        'arcaneIncreasedForEachGreatEnemyDefeatedAtARuin':
          "Arcane increased for each great enemy defeated at a Ruin",
        'maxStaminaIncreasedForEachGreatEnemyDefeatedAtAGreatEncampment':
          "Max stamina increased for each great enemy defeated at a Great Encampment",
        'defeatingEnemiesFillsMoreOfTheArtGaugePlus1':
          "Defeating enemies fills more of the Art gauge +1",
        'defeatingEnemiesFillsMoreOfTheArtGaugePlus2':
          "Defeating enemies fills more of the Art gauge +2",
        'hpRestorationUponThrustingCounterattackPlus1':
          "HP Restoration upon Thrusting Counterattack +1",
        'hpRestorationUponThrustingCounterattackPlus2':
          "HP Restoration upon Thrusting Counterattack +2",
        'attackPowerUpWhenFacingPoisonAfflictedEnemyPlus1':
          "Attack power up when facing poison-afflicted enemy +1",
        'attackPowerUpWhenFacingPoisonAfflictedEnemyPlus2':
          "Attack power up when facing poison-afflicted enemy +2",
        'attackPowerUpWhenFacingScarletRotAfflictedEnemyPlus1':
          "Attack power up when facing scarlet rot-afflicted enemy +1",
        'attackPowerUpWhenFacingScarletRotAfflictedEnemyPlus2':
          "Attack power up when facing scarlet rot-afflicted enemy +2",
        'attackPowerUpWhenFacingFrostbiteAfflictedEnemyPlus1':
          "Attack power up when facing frostbite-afflicted enemy +1",
        'attackPowerUpWhenFacingFrostbiteAfflictedEnemyPlus2':
          "Attack power up when facing frostbite-afflicted enemy +2",
        'guardianCharacterSkillBoostsDamageNegationOfNearbyAllies':
          "[Guardian] Character Skill Boosts Damage Negation of Nearby Allies",
        'ironeyeCharacterSkillInflictsHeavyPoisonDamageOnPoisonedEnemies':
          "[Ironeye] Character Skill Inflicts Heavy Poison Damage on Poisoned Enemies",
        'duchessUseCharacterSkillForBriefInvulnerability':
          "[Duchess] Use Character Skill for Brief Invulnerability",
        'raiderHitWithCharacterSkillToReduceEnemyAttackPower':
          "[Raider] Hit With Character Skill to Reduce Enemy Attack Power",
        'revenantIncreasedMaxFPUponAbilityActivation':
          "[Revenant] Increased Max FP upon Ability Activation",
        'recluseCollectAffinityResiduesToNegateAffinity':
          "[Recluse] Collect Affinity Residues to Negate Affinity",
        'executorSlowlyRestoreHPUponAbilityActivation':
          "[Executor] Slowly Restore HP upon Ability Activation",
        'sleepInVicinityImprovesAttackPower':
          "Sleep in Vicinity Improves Attack Power",
        'sleepInVicinityImprovesAttackPowerPlus1':
          "Sleep in Vicinity Improves Attack Power +1",
        'sleepInVicinityImprovesAttackPowerPlus2':
          "Sleep in Vicinity Improves Attack Power +2",
        'madnessInVicinityImprovesAttackPower':
          "Madness in Vicinity Improves Attack Power",
        'madnessInVicinityImprovesAttackPowerPlus1':
          "Madness in Vicinity Improves Attack Power +1",
        'madnessInVicinityImprovesAttackPowerPlus2':
          "Madness in Vicinity Improves Attack Power +2",
        'reducedFPConsumption': "Reduced FP Consumption",
        'reducedFPConsumptionPlus1': "Reduced FP Consumption +1",
        'reducedFPConsumptionPlus2': "Reduced FP Consumption +2",
        'improvedAffinityAttackPower':
          "Improved Affinity Attack Power",
        'improvedAffinityAttackPowerPlus1':
          "Improved Affinity Attack Power +1",
        'improvedAffinityAttackPowerPlus2':
          "Improved Affinity Attack Power +2",
        'improvedPhysicalDamageNegationPlus1':
          "Improved Physical Damage Negation +1",
        'improvedPhysicalDamageNegationPlus2':
          "Improved Physical Damage Negation +2",
        'improvedAffinityDamageNegation':
          "Improved Affinity Damage Negation",
        'improvedAffinityDamageNegationPlus1':
          "Improved Affinity Damage Negation +1",
        'improvedAffinityDamageNegationPlus2':
          "Improved Affinity Damage Negation +2",
        'improvedSorceriesPlus1': "Improved Sorceries +1",
        'improvedSorceriesPlus2': "Improved Sorceries +2",
        'improvedIncantationsPlus1': "Improved Incantations +1",
        'improvedIncantationsPlus2': "Improved Incantations +2",
        'improvedFlaskHPRestoration': "Improved Flask HP Restoration",
        'crimsonspillCrystalTearInPossessionAtStartOfExpedition':
          "Crimsonspill Crystal Tear in possession at start of expedition",
        'crimsonCrystalTearInPossessionAtStartOfExpedition':
          "Crimson Crystal Tear in possession at start of expedition",
        'ceruleanCrystalTearInPossessionAtStartOfExpedition':
          "Cerulean Crystal Tear in possession at start of expedition",
        'speckledHardtearInPossessionAtStartOfExpedition':
          "Speckled Hardtear in possession at start of expedition",
        'crimsonBubbletearInPossessionAtStartOfExpedition':
          "Crimson Bubbletear in possession at start of expedition",
        'opalineBubbletearInPossessionAtStartOfExpedition':
          "Opaline Bubbletear in possession at start of expedition",
        'crimsonburstCrystalTearInPossessionAtStartOfExpedition':
          "Crimsonburst Crystal Tear in possession at start of expedition",
        'greenburstCrystalTearInPossessionAtStartOfExpedition':
          "Greenburst Crystal Tear in possession at start of expedition",
        'opalineHardtearInPossessionAtStartOfExpedition':
          "Opaline Hardtear in possession at start of expedition",
        'thornyCrackedTearInPossessionAtStartOfExpedition':
          "Thorny Cracked Tear in possession at start of expedition",
        'spikedCrackedTearInPossessionAtStartOfExpedition':
          "Spiked Cracked Tear in possession at start of expedition",
        'windyCrystalTearInPossessionAtStartOfExpedition':
          "Windy Crystal Tear in possession at start of expedition",
        'rupturedCrystalTearInPossessionAtStartOfExpedition':
          "Ruptured Crystal Tear in possession at start of expedition",
        'leadenHardtearInPossessionAtStartOfExpedition':
          "Leaden Hardtear in possession at start of expedition",
        'twiggyCrackedTearInPossessionAtStartOfExpedition':
          "Twiggy Cracked Tear in possession at start of expedition",
        'crimsonwhorlBubbletearInPossessionAtStartOfExpedition':
          "Crimsonwhorl Bubbletear in possession at start of expedition",
        'ceruleanHiddenTearInPossessionAtStartOfExpedition':
          "Cerulean Hidden Tear in possession at start of expedition",
        'stonebarbCrackedTearInPossessionAtStartOfExpedition':
          "Stonebarb Cracked Tear in possession at start of expedition",
        'flameShroudingCrackedTearInPossessionAtStartOfExpedition':
          "Flame-Shrouding Cracked Tear in possession at start of expedition",
        'magicShroudingCrackedTearInPossessionAtStartOfExpedition':
          "Magic-Shrouding Cracked Tear in possession at start of expedition",
        'lightningShroudingCrackedTearInPossessionAtStartOfExpedition':
          "Lightning-Shrouding Cracked Tear in possession at start of expedition",
        'holyShroudingCrackedTearInPossessionAtStartOfExpedition':
          "Holy-Shrouding Cracked Tear in possession at start of expedition",
        'upliftingAromaticInPossessionAtStartOfExpedition':
          "Uplifting Aromatic in possession at start of expedition",
        'sparkAromaticInPossessionAtStartOfExpedition':
          "Spark Aromatic in possession at start of expedition",
        'ironjarAromaticInPossessionAtStartOfExpedition':
          "Ironjar Aromatic in possession at start of expedition",
        'bloodboilAromaticInPossessionAtStartOfExpedition':
          "Bloodboil Aromatic in possession at start of expedition",
        'poisonSpraymistInPossessionAtStartOfExpedition':
          "Poison Spraymist in possession at start of expedition",
        'acidSpraymistInPossessionAtStartOfExpedition':
          "Acid Spraymist in possession at start of expedition",
        'dormantPowerHelpsDiscoverDaggers':
          "Dormant Power Helps Discover Daggers",
        'dormantPowerHelpsDiscoverStraightSwords':
          "Dormant Power Helps Discover Straight Swords",
        'dormantPowerHelpsDiscoverGreatswords':
          "Dormant Power Helps Discover Greatswords",
        'dormantPowerHelpsDiscoverColossalSwords':
          "Dormant Power Helps Discover Colossal Swords",
        'dormantPowerHelpsDiscoverCurvedSwords':
          "Dormant Power Helps Discover Curved Swords",
        'dormantPowerHelpsDiscoverCurvedGreatswords':
          "Dormant Power Helps Discover Curved Greatswords",
        'dormantPowerHelpsDiscoverKatana':
          "Dormant Power Helps Discover Katana",
        'dormantPowerHelpsDiscoverTwinblades':
          "Dormant Power Helps Discover Twinblades",
        'dormantPowerHelpsDiscoverThrustingSwords':
          "Dormant Power Helps Discover Thrusting Swords",
        'dormantPowerHelpsDiscoverHeavyThrustingSwords':
          "Dormant Power Helps Discover Heavy Thrusting Swords",
        'dormantPowerHelpsDiscoverAxes':
          "Dormant Power Helps Discover Axes",
        'dormantPowerHelpsDiscoverGreataxes':
          "Dormant Power Helps Discover Greataxes",
        'dormantPowerHelpsDiscoverHammers':
          "Dormant Power Helps Discover Hammers",
        'dormantPowerHelpsDiscoverGreatHammers':
          "Dormant Power Helps Discover Great Hammers",
        'dormantPowerHelpsDiscoverFlails':
          "Dormant Power Helps Discover Flails",
        'dormantPowerHelpsDiscoverSpears':
          "Dormant Power Helps Discover Spears",
        'dormantPowerHelpsDiscoverGreatSpears':
          "Dormant Power Helps Discover Great Spears",
        'dormantPowerHelpsDiscoverHalberds':
          "Dormant Power Helps Discover Halberds",
        'dormantPowerHelpsDiscoverReapers':
          "Dormant Power Helps Discover Reapers",
        'dormantPowerHelpsDiscoverFists':
          "Dormant Power Helps Discover Fists",
        'dormantPowerHelpsDiscoverClaws':
          "Dormant Power Helps Discover Claws",
        'dormantPowerHelpsDiscoverWhips':
          "Dormant Power Helps Discover Whips",
        'dormantPowerHelpsDiscoverColossalWeapons':
          "Dormant Power Helps Discover Colossal Weapons",
        'dormantPowerHelpsDiscoverBows':
          "Dormant Power Helps Discover Bows",
        'dormantPowerHelpsDiscoverGreatbows':
          "Dormant Power Helps Discover Greatbows",
        'dormantPowerHelpsDiscoverCrossbows':
          "Dormant Power Helps Discover Crossbows",
        'dormantPowerHelpsDiscoverBallistas':
          "Dormant Power Helps Discover Ballistas",
        'dormantPowerHelpsDiscoverSmallShields':
          "Dormant Power Helps Discover Small Shields",
        'dormantPowerHelpsDiscoverMediumShields':
          "Dormant Power Helps Discover Medium Shields",
        'dormantPowerHelpsDiscoverGreatshields':
          "Dormant Power Helps Discover Greatshields",
        'dormantPowerHelpsDiscoverStaves':
          "Dormant Power Helps Discover Staves",
        'dormantPowerHelpsDiscoverSacredSeals':
          "Dormant Power Helps Discover Sacred Seals",
        'dormantPowerHelpsDiscoverTorches':
          "Dormant Power Helps Discover Torches",
        'wylderImprovedMindReducedVigor':
          "[Wylder] Improved Mind, Reduced Vigor",
        'wylderImprovedIntelligenceAndFaithReducedStrengthAndDexterity':
          "[Wylder] Improved Intelligence and Faith, Reduced Strength and Dexterity",
        'guardianImprovedStrengthAndDexterityReducedVigor':
          "[Guardian] Improved Strength and Dexterity, Reduced Vigor",
        'guardianImprovedMindAndFaithReducedVigor':
          "[Guardian] Improved Mind and Faith, Reduced Vigor",
        'ironeyeImprovedArcaneReducedDexterity':
          "[Ironeye] Improved Arcane, Reduced Dexterity",
        'ironeyeImprovedVigorAndStrengthReducedDexterity':
          "[Ironeye] Improved Vigor and Strength, Reduced Dexterity",
        'duchessImprovedVigorAndStrengthReducedMind':
          "[Duchess] Improved Vigor and Strength, Reduced Mind",
        'duchessImprovedMindAndFaithReducedIntelligence':
          "[Duchess] Improved Mind and Faith, Reduced Intelligence",
        'raiderImprovedMindAndIntelligenceReducedVigorAndEndurance':
          "[Raider] Improved Mind and Intelligence, Reduced Vigor and Endurance",
        'raiderImprovedArcaneReducedVigor':
          "[Raider] Improved Arcane, Reduced Vigor",
        'revenantImprovedVigorAndEnduranceReducedMind':
          "[Revenant] Improved Vigor and Endurance, Reduced Mind",
        'revenantImprovedStrengthReducedFaith':
          "[Revenant] Improved Strength, Reduced Faith",
        'recluseImprovedVigorEnduranceAndDexterityReducedIntelligenceAndFaith':
          "[Recluse] Improved Vigor, Endurance, and Dexterity, Reduced Intelligence and Faith",
        'recluseImprovedIntelligenceAndFaithReducedMind':
          "[Recluse] Improved Intelligence and Faith, Reduced Mind",
        'executorImprovedVigorAndEnduranceReducedArcane':
          "[Executor] Improved Vigor and Endurance, Reduced Arcane",
        'executorImprovedDexterityAndArcaneReducedVigor':
          "[Executor] Improved Dexterity and Arcane, Reduced Vigor",
        'reducedVigor': "Reduced Vigor",
        'reducedEndurance': "Reduced Endurance",
        'takingDamageCausesPoisonBuildup':
          "Taking Damage Causes Poison Buildup",
        'takingDamageCausesRotBuildup':
          "Taking Damage Causes Rot Buildup",
        'takingDamageCausesFrostBuildup':
          "Taking Damage Causes Frost Buildup",
        'takingDamageCausesBloodLossBuildup':
          "Taking Damage Causes Blood Loss Buildup",
        'takingDamageCausesMadnessBuildup':
          "Taking Damage Causes Madness Buildup",
        'takingDamageCausesSleepBuildup':
          "Taking Damage Causes Sleep Buildup",
        'takingDamageCausesDeathBuildup':
          "Taking Damage Causes Death Buildup",
        'reducedStrengthAndIntelligence':
          "Reduced Strength and Intelligence",
        'reducedDexterityAndFaith': "Reduced Dexterity and Faith",
        'reducedIntelligenceAndDexterity':
          "Reduced Intelligence and Dexterity",
        'reducedFaithAndStrength': "Reduced Faith and Strength",
        'reducedVigorAndArcane': "Reduced Vigor and Arcane",
        'reducedRuneAcquisition': "Reduced Rune Acquisition",
        'reducedFlaskHPRestoration': "Reduced Flask HP Restoration",
        'ultimateArtChargingImpaired':
          "Ultimate Art Charging Impaired",
        'impairedAffinityDamageNegation':
          "Impaired Affinity Damage Negation",
        'allResistancesDown': "All Resistances Down",
        'surgeSprintingDrainsMoreStamina':
          "Surge Sprinting Drains More Stamina",
        'increasedDrainOnStaminaForEvasion':
          "Increased Drain on Stamina for Evasion",
        'moreDamageTakenAfterEvasion':
          "More Damage Taken After Evasion",
        'repeatedEvasionsLowerDamageNegation':
          "Repeated Evasions Lower Damage Negation",
        'reducedDamageNegationForFlaskUsages':
          "Reduced Damage Negation for Flask Usages",
        'sleepBuildupForFlaskUsages':
          "Sleep Buildup for Flask Usages",
        'madnessBuildupForFlaskUsages':
          "Madness Buildup for Flask Usages",
        'lowerAttackWhenBelowMaxHP': "Lower Attack When Below Max HP",
        'poisonBuildupWhenBelowMaxHP':
          "Poison Buildup When Below Max HP",
        'rotBuildupWhenBelowMaxHP': "Rot Buildup When Below Max HP",
        'maxHPReducesAttackPower': "Max HP Reduces Attack Power",
        'nearDeathSpillsFlask': "Near Death Spills Flask",
        'nearDeathReducesMaxHP': "Near Death Reduces Max HP",
        'improvedGreatbowAttackPower':
          "Improved Greatbow Attack Power",
        'improvedCrossbowAttackPower':
          "Improved Crossbow Attack Power",
        'improvedBallistaAttackPower':
          "Improved Ballista Attack Power",
        'hpRestorationUponGreatbowAttacks':
          "HP Restoration upon Greatbow Attacks",
        'hpRestorationUponCrossbowAttacks':
          "HP Restoration upon Crossbow Attacks",
        'hpRestorationUponBallistaAttacks':
          "HP Restoration upon Ballista Attacks",
        'fpRestorationUponGreatbowAttacks':
          "FP Restoration upon Greatbow Attacks",
        'fpRestorationUponCrossbowAttacks':
          "FP Restoration upon Crossbow Attacks",
        'fpRestorationUponBallistaAttacks':
          "FP Restoration upon Ballista Attacks",
        'reducedMaximumHP': "Reduced Maximum HP",
        'reducedMaximumFP': "Reduced Maximum FP",
        'reducedMaximumStamina': "Reduced Maximum Stamina",
        'nightsTideDamageIncreased': "Night's Tide Damage Increased",
        'damageIncreasedByNightsEncroachment':
          "Damage Increased by Night's Encroachment",
        'slowerArtGaugeWhenBelowMaxHP':
          "Slower Art Gauge When Below Max HP",
        'lowerStaminaImpairsDmgNegation':
          "Lower Stamina Impairs Dmg Negation",
        'attacksImpairedOnOccasion': "Attacks Impaired on Occasion",
        'ailmentsCauseIncreasedDamage':
          "Ailments Cause Increased Damage",
        'nearDeathReducesArtGauge': "Near Death Reduces Art Gauge",
        'allResistancesUp': "All Resistances Up",
        'improvedSorceriesAndIncantations':
          "Improved Sorceries & Incantations",
        'increasedSorceryAndIncantationDuration':
          "Increased Sorcery & Incantation Duration",
        'scholarAlliesTargetedByCharacterSkillGainBoostedAttack':
          "[Scholar] Allies Targeted by Character Skill gain boosted attack",
        'scholarReducedFpConsumptionWhenUsingCharacterSkillOnSelf':
          "[Scholar] Reduced FP consumption when using Character Skill on self",
        'undertakerExecutingArtReadiesCharacterSkill':
          "[Undertaker] Executing Art readies Character Skill",
        'greenspillCrystalTearInPossessionAtStartOfExpedition':
          "Greenspill Crystal Tear in possession at start of expedition",
        'scholarImprovedMindReducedVigor':
          "[Scholar] Improved Mind, Reduced Vigor",
        'scholarImprovedEnduranceAndDexterityReducedIntelligenceAndArcane':
          "[Scholar] Improved Endurance and Dexterity, Reduced Intelligence and Arcane",
        'undertakerImprovedDexterityReducedVigorAndFaith':
          "[Undertaker] Improved Dexterity, Reduced Vigor and Faith",
        'undertakerImprovedMindAndFaithReducedStrength':
          "[Undertaker] Improved Mind and Faith, Reduced Strength",
        'continuousFpRecovery': "Continuous FP Recovery",
        'improvedMeleeAttackPower': "Improved Melee Attack Power",
        'scholarPreventSlowingOfCharacterSkillProgress':
          "[Scholar] Prevent slowing of Character Skill Progress",
        'scholarContinuousDamageInflictedOnTargetsThreadedByUltimateArt':
          "[Scholar] Continuous damage inflicted on targets threaded by Ultimate Art",
        'scholarEarnRunesForEachAdditionalSpecimenAcquiredWithCharacterSkill':
          "[Scholar] Earn runes for each additional specimen acquired with Character Skill",
        'undertakerActivatingUltimateArtIncreasesAttackPower':
          "[Undertaker] Activating Ultimate Art increases attack power",
        'undertakerAttackPowerIncreasedByLandingTheFinalBlowOfAChainAttack':
          "[Undertaker] Attack power increased by landing the final blow of a chain attack",
        'undertakerPhysicalAttacksBoostedWhileAssistEffectFromIncantationIsActiveForSelf':
          "[Undertaker] Physical attacks boosted while assist effect from incantation is active for self",
        'undertakerContactWithAlliesRestoresTheirHpWhileUltimateArtIsActivated':
          "[Undertaker] Contact with allies restores their HP while Ultimate Art is activated",
        'statusAilmentGaugesSlowlyIncreaseAttackPower':
          "Status Ailment Gauges Slowly Increase Attack Power",
        'occasionallyNullifyAttacksWhenDamageNegationsIsLowered':
          "Occasionally Nullify Attacks When Damage Negation is Lowered",
        'attacksInflictRotWhenDamageIsTaken':
          "Attacks Inflict Rot when Damage is Taken",
        'rotInVicinityCausesContinuousHpRecovery':
          "Rot in Vicinity Causes Continuous HP Recovery",
        'changesCompatibleArmamentsSorceryToMagicGlintbladeAtStartOfExpedition':
          "Changes compatible armament's sorcery to Magic Glintblade at start of expedition",
        'changesCompatibleArmamentsSorceryToCarianGreatswordAtStartOfExpedition':
          "Changes compatible armament's sorcery to Carian Greatsword at start of expedition",
        'changesCompatibleArmamentsSorceryToNightShardAtStartOfExpedition':
          "Changes compatible armament's sorcery to Night Shard at start of expedition",
        'changesCompatibleArmamentsSorceryToMagmaShotAtStartOfExpedition':
          "Changes compatible armament's sorcery to Magma Shot at start of expedition",
        'changesCompatibleArmamentsSorceryToBriarsOfPunishmentAtStartOfExpedition':
          "Changes compatible armament's sorcery to Briars of Punishment at start of expedition",
        'changesCompatibleArmamentsIncantationToWrathOfGoldAtStartOfExpedition':
          "Changes compatible armament's incantation to Wrath of Gold at start of expedition",
        'changesCompatibleArmamentsIncantationToLightningSpearAtStartOfExpedition':
          "Changes compatible armament's incantation to Lightning Spear at start of expedition",
        'changesCompatibleArmamentsIncantationToOFlameAtStartOfExpedition':
          "Changes compatible armament's incantation to O, Flame! at start of expedition",
        'changesCompatibleArmamentsIncantationToBeastClawAtStartOfExpedition':
          "Changes compatible armament's incantation to Beast Claw at start of expedition",
        'changesCompatibleArmamentsIncantationToDragonfireAtStartOfExpedition':
          "Changes compatible armament's incantation to Dragonfire at start of expedition",
        'allResistanceUp': "All Resistance Up",
        'runeOfTheStrong': "Rune of the Strong"
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
    },

    /**
     * Get translation for effect name by effect ID
     * @param {number} effectId - The effect ID number
     * @returns {string} The translated effect name, or the effect key if not found
     */
    getEffectName: (effectId) => {
      // Check if effects map is available (from effects.js)
      if (typeof window !== 'undefined' && window.effects && window.getEffectKeyName) {
        const effect = window.effects.get(effectId);
        if (effect && effect.key !== undefined) {
          // Get the key name from the numeric enum value
          const keyName = window.getEffectKeyName(effect.key);
          if (keyName) {
            return translations[currentLanguage].effects[keyName] || keyName;
          }
        }
      }
      return `Effect ${effectId}`;
    }
  };
})();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = i18n;
}
