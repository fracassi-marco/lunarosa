'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Arteterapia() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center pt-16"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2080')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-indigo-900/70 to-purple-950"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rose-100 mb-6">
            Arteterapia
          </h1>
          <p className="text-lg md:text-xl text-rose-100/90 leading-relaxed">
            Un viaggio creativo di espressione, guarigione e trasformazione
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-gradient-to-b from-purple-950 to-indigo-950">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Contenuto Generale */}
          <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-2xl p-8 md:p-10 backdrop-blur-sm border border-rose-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-rose-200 mb-6">
              Contenuto Generale:
            </h3>
            <div 
              className="text-base md:text-lg text-rose-100/95 leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{
                __html: `Tecniche Artistiche di Base<br/>
Sensoriali Libere<br/>
Ad Acqua e Plastiche<br/>
Acquerello, tempera, stic ad olio🍁🍂🌿🌷<br/>
Plastica🌼🔥<br/>
<br/>
Dripping<br/>
Bodypainting<br/>
A Corpo Libero🌈🔥<br/>
<br/>
Disegno Onirico<br/>
Disegno Interiore<br/>
Su stimolo musicale🍃🌹<br/>
<br/>
Arte Sacra<br/>
Con Elementi di Danzaterapia🪷<br/>
<br/>
ArteNatura🍄🌹🌼<br/>
<br/>
ArteDonna🌙🌸<br/>
<br/>
ArteBimbi🌟<br/>
<br/>
FavolaGuarigione✨💖<br/>
<br/>
LibroPortale<br/>
Costruito da Ognuno nel Percorso☀️<br/>
<br/>
Nota:<br/>
I Materiali sono di ogni persona, fanno parte della Cerca personale del Percorso🥰`
              }}
            />
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-indigo-950 to-purple-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-rose-200 mb-4">
            Contattaci
          </h2>
          <p className="text-center text-rose-300/80 mb-16 max-w-2xl mx-auto">
            Siamo qui per accompagnarti nel tuo viaggio creativo
          </p>

          <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-900/50 to-indigo-900/50 
                        rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-rose-500/20 shadow-2xl">
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
                <h3 className="text-2xl font-bold text-rose-100 mb-2">WhatsApp</h3>
                <p className="text-rose-200/80 text-center mb-4">
                  Scrivici direttamente su WhatsApp per informazioni immediate
                </p>
                <span className="text-rose-300 group-hover:text-rose-200 transition-colors">
                  Invia messaggio →
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@lunarosaacademy.it"
                className="group flex flex-col items-center p-8 bg-gradient-to-br from-rose-600/20 to-rose-700/20 
                         rounded-xl border border-rose-500/30 hover:border-rose-400/60 
                         transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-rose-500/20"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  ✉️
                </div>
                <h3 className="text-2xl font-bold text-rose-100 mb-2">Email</h3>
                <p className="text-rose-200/80 text-center mb-4">
                  Inviaci una email per domande dettagliate o per iscriverti ai nostri corsi
                </p>
                <span className="text-rose-300 group-hover:text-rose-200 transition-colors break-all">
                  info@lunarosaacademy.it
                </span>
              </a>
            </div>

            {/* Additional Info */}
            <div className="mt-12 text-center">
              <p className="text-rose-200/90 leading-relaxed max-w-2xl mx-auto">
                Saremo felici di rispondere a tutte le tue domande e di guidarti nella scelta 
                del percorso più adatto al tuo cammino creativo. Ti aspettiamo! 🌙
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
