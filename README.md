# Luna Rosa Academy

Un sito web mobile-first per Luna Rosa Academy, dedicato a due operatrici olistiche che fondano un'accademia per donne.

## 🌙 Caratteristiche

- **Design Mobile-First**: Completamente responsivo con hamburger menu per dispositivi mobili
- **Generazione Statica**: Next.js configurato per generare pagine statiche (`output: 'export'`)
- **Colori Enigmatici**: Palette di colori dolci e mistici (viola, rosa, indaco)
- **Immagini Evocative**: Immagini sciamaniche da Unsplash
- **Sezioni del Sito**:
  - Hero section con immagine di background sciamanica
  - 4 servizi (Arte Terapia, Venere degli Elementi, Scuola di Sciamanesimo, Da Definire)
  - Presentazione delle 2 fondatrici
  - Sezione contatti (WhatsApp + Email)
  - Footer completo

## 🚀 Sviluppo

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

## 📦 Build Statico

Per generare il sito statico:

```bash
# Genera le pagine statiche
npm run build

# Testa il build in locale
npx serve out
```

I file statici saranno generati nella cartella `out/`.

## 🎨 Personalizzazione

### Immagini delle Fondatrici
Sostituisci le immagini placeholder in `app/components/Founders.tsx`:
- Nome, ruolo e descrizione delle fondatrici
- URL delle immagini (attualmente usa Unsplash)

### Informazioni di Contatto
Modifica in `app/components/Contact.tsx`:
- `whatsappNumber`: Inserisci il numero WhatsApp (formato internazionale senza +)
- `email`: Inserisci l'email dell'academy

### Quarto Servizio
Aggiorna il quarto servizio in `app/components/Services.tsx` quando sarà definito.

### Colori e Stile
I colori principali possono essere modificati in:
- `app/globals.css`: Variabili CSS root
- Componenti: Classi Tailwind (bg-purple-900, text-rose-200, etc.)

## 🌐 Deploy

### Vercel (Consigliato)
```bash
npm i -g vercel
vercel
```

### GitHub Pages / Netlify
Dopo il build, carica il contenuto della cartella `out/`.

### Altre piattaforme
Il sito è completamente statico e può essere deployato su qualsiasi hosting statico.

## 📁 Struttura

```
lunarosa/
├── app/
│   ├── components/
│   │   ├── Header.tsx      # Navigazione con hamburger menu
│   │   ├── Hero.tsx        # Sezione hero con background
│   │   ├── Services.tsx    # 4 servizi
│   │   ├── Founders.tsx    # 2 fondatrici
│   │   ├── Contact.tsx     # WhatsApp + Email
│   │   └── Footer.tsx      # Footer
│   ├── globals.css         # Stili globali
│   ├── layout.tsx          # Layout principale
│   └── page.tsx            # Home page
├── public/                 # File statici
└── next.config.ts          # Configurazione Next.js
```

## 🛠 Tecnologie

- **Next.js 16** con App Router
- **TypeScript**
- **Tailwind CSS** v4
- **React 19**

## 📝 Note

- Le immagini usano Unsplash per il placeholder - sostituiscile con immagini reali
- Il sito è ottimizzato per dispositivi mobili prima di desktop
- Tutti i link sono smooth scroll all'interno della pagina
- WhatsApp e Email sono completamente funzionali una volta configurati

---

Fatto con 💜 per il risveglio femminile
