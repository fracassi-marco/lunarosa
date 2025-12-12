# LUNA ROSA ACADEMY

Un sito web mobile-first per LUNA ROSA ACADEMY, dedicato a due operatrici olistiche che fondano un'accademia per donne.

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

### Immagini
Tutte le immagini sono ora salvate localmente in `public/images/`:
- `hero-bg.jpg` - Sfondo hero section
- `arte-terapia.jpg` - Servizio Arte Terapia
- `venere-elementi.jpg` - Servizio Venere degli Elementi
- `sciamanesimo.jpg` - Servizio Scuola di Sciamanesimo
- `servizio-4.jpg` - Quarto servizio da definire
- `isabella-rosi.jpg` - Foto fondatrice Isabella
- `simona.jpg` - Foto fondatrice Simona

Per sostituire le immagini, salva i nuovi file con gli stessi nomi in `public/images/`.

### Fondatrici
Modifica nome, ruolo e descrizione in `app/components/Founders.tsx`.

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

### Cloudflare Pages con Wrangler (Consigliato)

```bash
# Installa Wrangler globalmente (una sola volta)
npm install -g wrangler

# Build del progetto
npm run build

# Deploy su Cloudflare Pages
wrangler pages deploy out --project-name=lunarosa

# Al primo deploy, Wrangler aprirà il browser per l'autenticazione OAuth
# Autorizza l'accesso al tuo account Cloudflare

# Deploy successivi (più veloci)
npm run build && wrangler pages deploy out --project-name=lunarosa
```

Il sito sarà disponibile su `https://lunarosa.pages.dev` o sul dominio personalizzato configurato.

**Vantaggi Cloudflare Pages:**
- Deploy automatici via Git (opzionale)
- CDN globale gratuito
- SSL automatico
- Performance ottimali
- Build illimitati

### Cloudflare Pages via Dashboard

1. Vai su [dash.cloudflare.com](https://dash.cloudflare.com)
2. Seleziona **Workers & Pages** → **Create Application** → **Pages**
3. Collega il repository GitHub
4. Configura:
   - **Build command:** `npm run build`
   - **Deploy command:** `:` (lascia vuoto o metti un comando dummy)
   - **Build output directory:** `out`
5. Deploy automatico ad ogni push su `main`

### Vercel

```bash
npm i -g vercel
vercel
```

### Altre piattaforme
Il sito è completamente statico (cartella `out/`) e può essere deployato su qualsiasi hosting statico (Netlify, GitHub Pages, AWS S3, ecc.).

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

- Tutte le immagini sono salvate localmente in `public/images/`
- Il sito è ottimizzato per dispositivi mobili prima di desktop
- Smooth scroll per la navigazione interna
- WhatsApp e Email sono completamente funzionali una volta configurati
- Pagina dedicata per "Venere degli Elementi" disponibile su `/venere-degli-elementi`

---

Fatto con 💜 per il risveglio femminile
