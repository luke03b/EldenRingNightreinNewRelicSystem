# ⚔️ Elden Ring Nightreign: The True Relic System

Un'applicazione web statica per gestire il sistema di crafting delle reliquie di **Elden Ring Nightreign**, secondo un regolamento personalizzato.

## 🎮 Descrizione

The True Relic System è pensato per **3 giocatori** che possono accedere dal proprio dispositivo. Non esiste un backend: il sito lavora con un file JSON (`reliquie.json`) che funge da database, caricato e scaricato dall'utente.

## 🚀 Come Usare

### Hosting su GitHub Pages
1. Carica tutti i file in una repository GitHub
2. Attiva GitHub Pages dalle impostazioni della repository
3. Il sito sarà accessibile all'indirizzo fornito da GitHub Pages

### Uso Locale
1. Serve i file con un server HTTP locale (necessario per il caricamento dei file JSON degli effetti)
2. Ad esempio: `python3 -m http.server 8000` nella cartella del progetto
3. Apri `http://localhost:8000` nel browser

### Primo Avvio
1. Apri il sito
2. Nella sezione **Home**, clicca su "Crea database" e inserisci i nomi dei 3 giocatori
3. Oppure carica un file `reliquie.json` esistente

### Flusso Tipico
1. Carica il database (`reliquie.json`)
2. Vai in **Inventario** per gestire le reliquie
3. Usa le sezioni **Fusione** per fondere reliquie (wizard a 5 step)
4. Gestisci i **Token** cromatici e di creazione
5. Consulta il **Registro Fusioni** per lo storico
6. **Esporta** il file aggiornato e condividilo con gli altri giocatori

## 📂 Struttura File

```
/
├── index.html                      ← Applicazione SPA completa
├── data/
│   ├── effetti_normali_buff.json   ← Pool buff per reliquie normali
│   ├── effetti_notte_buff.json     ← Pool buff per reliquie della notte
│   └── effetti_notte_debuff.json   ← Pool debuff per reliquie della notte
└── README.md                       ← Questo file
```

## 🏛️ Sezioni dell'Applicazione

1. **🏠 Home** — Carica/crea database, esporta dati
2. **📦 Inventario** — Lista reliquie con filtri, aggiunta e modifica
3. **⚔️ Fusione Normali** — Wizard fusione per reliquie normali
4. **🌙 Fusione Notte** — Wizard fusione per reliquie della notte
5. **🎫 Token** — Gestione gettoni cromatici e di creazione
6. **📜 Registro** — Storico fusioni con esportazione CSV
7. **⚙️ Impostazioni** — Gestione giocatori e reset database

## 📋 Regole Principali

### Reliquie
- **Grado 1**: 1 effetto, NON utilizzabile come materiale di fusione
- **Grado 2**: 2 effetti
- **Grado 3**: 3 effetti
- **Grandezze**: Piccola, Media, Grande
- **Colori**: Rosso, Blu, Giallo, Verde
- **Tipologie**: Normale (solo buff), Notte (buff + debuff)

### Fusione
- Minimo 2 reliquie
- Stesso grado (G2 o G3), stessa grandezza, stessa tipologia
- Colore risultante: sorteggio ponderato
- Effetti: sorteggiati dal pool unione dei materiali
- Test di degradazione con probabilità calcolata

### Token
- **Gettone Cromatico**: cambia il colore di una reliquia (1 ogni 1000 punti)
- **Gettone Creazione**: crea una reliquia da zero (al raggiungimento di nuove profondità)

## ✏️ Personalizzazione Effetti

I file nella cartella `data/` possono essere modificati liberamente senza toccare il codice del sito. Ogni effetto ha:
- `id`: identificativo univoco
- `nome`: nome visualizzato
- `stepMax`: numero massimo di livelli
- `descrizioneStep`: array con la descrizione di ogni livello

## 🛠️ Tecnologie

- HTML5 + CSS3 + JavaScript vanilla
- Nessun framework, nessun bundler
- Google Fonts (Rajdhani)
- Compatibile con GitHub Pages

## 📜 Versione

Regolamento: **v1.0**
Applicazione: **v1.0**
