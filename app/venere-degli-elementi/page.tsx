'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function VenereDegliElementi() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center pt-16"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1532798442725-41036acc7489?q=80&w=2074')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-beige-200/80 via-beige-300/70 to-beige-800"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bordeaux-900 mb-6">
            Spazio al Femminile
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-bordeaux-700 mb-8 font-light">
            Venere degli Elementi
          </h2>
          <p className="text-lg md:text-xl text-bordeaux-900/90 leading-relaxed">
            Percorsi di sorellanza, crescita personale e risveglio dell'energia femminile
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-gradient-to-b from-beige-800 to-beige-700">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduzione */}
          <div className="bg-gradient-to-br from-beige-200/50 to-beige-300/50 rounded-2xl p-8 md:p-10 backdrop-blur-sm border border-bordeaux-400/20">
            <p className="text-lg md:text-xl text-bordeaux-900 leading-relaxed mb-6">
              Spazio al Femminile è un luogo dedicato alle donne che desiderano ritrovare la propria autenticità, 
              ascoltare la voce del cuore e riconnettersi ai ritmi profondi della loro natura.
            </p>
            <p className="text-lg md:text-xl text-bordeaux-900 leading-relaxed">
              Un ambiente protetto e accogliente dove la condivisione diventa cura, l'ascolto diventa forza 
              e la sorellanza diventa trasformazione.
            </p>
          </div>

          {/* Gli Elementi */}
          <div className="bg-gradient-to-br from-beige-200/50 to-beige-300/50 rounded-2xl p-8 md:p-10 backdrop-blur-sm border border-bordeaux-400/20">
            <h3 className="text-2xl md:text-3xl font-bold text-bordeaux-700 mb-6">
              Il Percorso
            </h3>
            <p className="text-base md:text-lg text-bordeaux-900/95 leading-relaxed mb-4">
              Gli incontri si ispirano a pratiche ancestrali, meditazioni, rituali con gli Elementi – 
              <span className="font-semibold text-bordeaux-700"> Terra, Acqua, Aria, Fuoco, Etere</span> – e attività creative 
              come mandala, colori, cristalli ed espressione corporea.
            </p>
            <p className="text-base md:text-lg text-bordeaux-900/95 leading-relaxed">
              Ogni esperienza è pensata per risvegliare l'intuizione, riattivare il potere personale e ritrovare 
              benessere, armonia e presenza.
            </p>
          </div>

          {/* Il Cerchio Rosa */}
          <div className="bg-gradient-to-br from-bordeaux-200/40 to-beige-200/40 rounded-2xl p-8 md:p-10 backdrop-blur-sm border border-rose-400/30">
            <h3 className="text-2xl md:text-3xl font-bold text-bordeaux-700 mb-6">
              Il Cerchio Rosa delle Donne
            </h3>
            <p className="text-base md:text-lg text-bordeaux-900/95 leading-relaxed mb-4">
              Il Cerchio Rosa delle Donne è uno spazio di Parola e Ascolto in cui raccontarsi, sentirsi viste e sostenute, 
              liberare emozioni e recuperare fiducia.
            </p>
            <p className="text-base md:text-lg text-bordeaux-900/95 leading-relaxed">
              Un viaggio condiviso che aiuta a lasciare andare i ruoli e le aspettative, per tornare a essere 
              te stessa in modo autentico e completo.
            </p>
          </div>

          {/* Perché Partecipare */}
          <div className="bg-gradient-to-br from-beige-300/50 to-beige-200/50 rounded-2xl p-8 md:p-10 backdrop-blur-sm border border-bordeaux-400/20">
            <h3 className="text-2xl md:text-3xl font-bold text-bordeaux-700 mb-6 text-center">
              Perché partecipare
            </h3>
            <ul className="space-y-4 text-base md:text-lg text-bordeaux-900/95">
              <li className="flex items-start">
                <span className="text-bordeaux-600 mr-3 mt-1 flex-shrink-0 text-xl">✦</span>
                <span>Per <span className="font-semibold">riConoscere</span> ciò che è davvero giusto per te</span>
              </li>
              <li className="flex items-start">
                <span className="text-bordeaux-600 mr-3 mt-1 flex-shrink-0 text-xl">✦</span>
                <span>Per <span className="font-semibold">riTrovare</span> desideri, istinti e bisogni profondi</span>
              </li>
              <li className="flex items-start">
                <span className="text-bordeaux-600 mr-3 mt-1 flex-shrink-0 text-xl">✦</span>
                <span>Per <span className="font-semibold">riAppropriarti</span> della tua energia femminile</span>
              </li>
              <li className="flex items-start">
                <span className="text-bordeaux-600 mr-3 mt-1 flex-shrink-0 text-xl">✦</span>
                <span>Per recuperare autostima, gioia, creatività e leggerezza</span>
              </li>
              <li className="flex items-start">
                <span className="text-bordeaux-600 mr-3 mt-1 flex-shrink-0 text-xl">✦</span>
                <span>Per migliorare le relazioni e ritrovare armonia con te stessa e gli altri</span>
              </li>
            </ul>
          </div>

          {/* Citazione Finale */}
          <div className="text-center py-8">
            <p className="text-2xl md:text-3xl text-bordeaux-700 font-light italic leading-relaxed">
              Un cerchio di donne.<br />
              Un viaggio nel cuore.<br />
              Un ritorno a te.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-beige-700 to-beige-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-bordeaux-700 mb-4">
            Contattaci
          </h2>
          <p className="text-center text-bordeaux-600/80 mb-16 max-w-2xl mx-auto">
            Siamo qui per accompagnarti nel tuo viaggio di trasformazione
          </p>

          <div className="max-w-4xl mx-auto bg-gradient-to-br from-beige-200/50 to-beige-300/50 
                        rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-bordeaux-400/20 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* WhatsApp */}
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-8 bg-gradient-to-br from-green-600/20 to-green-700/20 
                         rounded-xl border border-green-500/30 hover:border-green-400/60 
                         transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  💬
                </div>
                <h3 className="text-2xl font-bold text-bordeaux-900 mb-2">WhatsApp</h3>
                <p className="text-bordeaux-700/80 text-center mb-4">
                  Scrivici direttamente su WhatsApp per informazioni immediate
                </p>
                <span className="text-bordeaux-600 group-hover:text-bordeaux-700 transition-colors">
                  Invia messaggio →
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@lunarosaacademy.it"
                className="group flex flex-col items-center p-8 bg-gradient-to-br from-bordeaux-500/20 to-bordeaux-600/20 
                         rounded-xl border border-bordeaux-400/30 hover:border-bordeaux-500/60 
                         transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-bordeaux-400/20"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  ✉️
                </div>
                <h3 className="text-2xl font-bold text-bordeaux-900 mb-2">Email</h3>
                <p className="text-bordeaux-700/80 text-center mb-4">
                  Inviaci una email per domande dettagliate o per iscriverti ai nostri corsi
                </p>
                <span className="text-bordeaux-600 group-hover:text-bordeaux-700 transition-colors break-all">
                  info@lunarosaacademy.it
                </span>
              </a>
            </div>

            {/* Additional Info */}
            <div className="mt-12 text-center">
              <p className="text-bordeaux-700/90 leading-relaxed max-w-2xl mx-auto">
                Saremo felici di rispondere a tutte le tue domande e di guidarti nella scelta 
                del percorso più adatto al tuo cammino spirituale. Ti aspettiamo! 🌙
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}