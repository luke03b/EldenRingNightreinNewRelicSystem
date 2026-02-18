# Mapping degli Effetti delle Reliquie / Relic Effects Mapping

Questo documento fornisce un mapping degli effetti delle reliquie con le loro traduzioni italiane e descrizioni letterali.

## Effetti Normali (Buff)

### Statistiche Base / Base Stats

| ID Effetto | Nome Inglese | Traduzione Italiana | Descrizione Letterale |
|------------|--------------|---------------------|----------------------|
| atk_boost | Attack Boost | Aumento Attacco | Incrementa il potere d'attacco del personaggio |
| def_boost | Defense Boost | Aumento Difesa | Incrementa la difesa del personaggio |
| hp_regen | HP Regeneration | Rigenerazione HP | Rigenera punti vita nel tempo |
| mov_speed | Movement Speed | Velocità Movimento | Aumenta la velocità di movimento |
| magic_res | Magic Resistance | Resistenza Magia | Riduce i danni da attacchi magici |
| stamina_boost | Stamina Boost | Aumento Stamina | Incrementa la stamina massima |
| fire_res | Fire Resistance | Riduzione Danni Fuoco | Riduce i danni da attacchi di fuoco |
| crit_boost | Critical Boost | Potenziamento Critico | Aumenta il danno critico |
| atk_range | Attack Range | Aumento Range Attacco | Incrementa la portata degli attacchi |
| fp_recovery | FP Recovery | Recupero FP | Rigenera punti focus nel tempo |

## Effetti Notturni (Buff)

### Potenziamenti Notturni / Night Enhancements

| ID Effetto | Nome Inglese | Traduzione Italiana | Descrizione Letterale |
|------------|--------------|---------------------|----------------------|
| night_atk | Night Attack | Attacco Notturno | Incrementa l'attacco durante la notte |
| night_def | Night Defense | Difesa Notturna | Incrementa la difesa durante la notte |
| dark_power | Dark Power | Potenziamento Oscuro | Aumenta il potere degli attacchi oscuri |
| night_regen | Night Regeneration | Rigenerazione Notturna | Rigenera HP durante la notte |
| shadow_speed | Shadow Speed | Velocità nell'Ombra | Aumenta la velocità nell'oscurità |
| night_crit | Night Critical | Critico Notturno | Potenzia i critici durante la notte |
| dark_res | Dark Resistance | Resistenza Oscura | Riduce i danni oscuri |
| night_stamina | Night Stamina | Stamina Notturna | Aumenta la stamina durante la notte |
| night_fp | Night FP | Recupero FP Notturno | Recupera FP durante la notte |
| moon_blessing | Moon Blessing | Benedizione Lunare | Benedizione che fornisce vari bonus |

## Effetti Notturni (Debuff)

### Penalità Notturne / Night Penalties

| ID Effetto | Nome Inglese | Traduzione Italiana | Descrizione Letterale |
|------------|--------------|---------------------|----------------------|
| hp_reduction | HP Reduction | Riduzione HP Massimi | Riduce i punti vita massimi |
| def_reduction | Defense Reduction | Riduzione Difesa | Riduce la difesa del personaggio |
| fp_consumption | FP Consumption | Consumo FP Aumentato | Aumenta il consumo di punti focus |
| stamina_drain | Stamina Drain | Perdita Stamina Rapida | Aumenta il consumo di stamina |
| fire_vuln | Fire Vulnerability | Vulnerabilità al Fuoco | Aumenta i danni subiti dal fuoco |
| mov_penalty | Movement Penalty | Penalità Movimento | Riduce la velocità di movimento |
| vision_reduction | Vision Reduction | Riduzione Visuale | Riduce il campo visivo |
| temp_curse | Temporary Curse | Maledizione Temporanea | Maledizione che infligge varie penalità |

## Livelli di Effetto / Effect Levels

Gli effetti possono avere diversi livelli di potenza:

- **Step 1**: Effetto base / Basic effect
- **Step 2**: Effetto medio / Medium effect  
- **Step 3**: Effetto massimo / Maximum effect

### Esempi di Progressione / Progression Examples

**Aumento Attacco / Attack Boost:**
- Step 1: +5% Attacco
- Step 2: +10% Attacco
- Step 3: +15% Attacco

**Attacco Notturno / Night Attack:**
- Step 1: +10% Attacco Notturno
- Step 2: +20% Attacco Notturno
- Step 3: +30% Attacco Notturno

## Note di Implementazione / Implementation Notes

Questo mapping può essere utilizzato per:
1. Tradurre l'interfaccia in italiano / Translate the interface to Italian
2. Fornire descrizioni dettagliate agli utenti / Provide detailed descriptions to users
3. Documentare il sistema di effetti / Document the effect system
4. Supportare future localizzazioni / Support future localizations

## Riferimenti / References

I dati provengono da:
- `/data/effetti_normali_buff.json` - Effetti normali positivi
- `/data/effetti_notte_buff.json` - Effetti notturni positivi
- `/data/effetti_notte_debuff.json` - Effetti notturni negativi
- `/src/resources/effects.ts` - Definizioni effetti nel codice
