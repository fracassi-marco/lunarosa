'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ScuolaSciamanesimo() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center pt-16"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2127')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-indigo-900/70 to-purple-950"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rose-100 mb-6">
            Scuola di Sciamanesimo
          </h1>
          <p className="text-lg md:text-xl text-rose-100/90 leading-relaxed">
            Un percorso di trasformazione profonda e riconnessione con il tuo potere interiore
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-gradient-to-b from-purple-950 to-indigo-950">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Introduzione */}
          <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-2xl p-8 md:p-10 backdrop-blur-sm border border-rose-500/20">
            <h2 className="text-3xl md:text-4xl font-bold text-rose-200 mb-6">
              Un percorso di Sciamanesimo: un'esperienza trasformativa
            </h2>
            <div className="space-y-4 text-base md:text-lg text-rose-100/95 leading-relaxed">
              <p>
                Un corso di Sciamanesimo è un cammino profondo e arricchente: offre strumenti per riconnetterti al corpo, 
                al tuo potere interiore e alla natura che vive dentro e fuori di te. Favorisce il benessere emotivo, 
                sviluppa l'intuito e apre nuovi spazi di percezione e consapevolezza.
              </p>
              <p>
                È un'opportunità per imparare ad ascoltare la Madre Terra, entrare in relazione con gli elementi naturali 
                e armonizzare i cicli corporei, promuovendo equilibrio tra razionalità e intuizione, tra corpo, mente e spirito.
              </p>
            </div>
          </div>

          {/* Percorso Femminile */}
          <div className="bg-gradient-to-br from-rose-900/40 to-purple-900/40 rounded-2xl p-8 md:p-10 backdrop-blur-sm border border-rose-400/30">
            <h3 className="text-2xl md:text-3xl font-bold text-rose-200 mb-6">
              Il percorso di sciamanesimo femminile
            </h3>
            <div className="space-y-4 text-base md:text-lg text-rose-100/95 leading-relaxed">
              <p>
                Un cammino dedicato al femminile aiuta a sciogliere blocchi emotivi e tensioni, riattivando l'energia vitale 
                e risvegliando la creatività sopita.
              </p>
              <p>
                È un invito a ritrovarti, a risentire il tuo ritmo naturale, a riconoscere la tua forza innata.
              </p>
            </div>
          </div>

          {/* A chi si rivolge */}
          <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 md:p-10 backdrop-blur-sm border border-rose-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-rose-200 mb-6 text-center">
              A chi si rivolge
            </h3>
            <p className="text-lg md:text-xl text-rose-200/90 mb-6 text-center italic">
              Ti risuona uno di questi punti?
            </p>
            <ul className="space-y-4 text-base md:text-lg text-rose-100/95">
              <li className="flex items-start">
                <span className="text-rose-300 mr-3 mt-1 flex-shrink-0 text-xl">✦</span>
                <span>Senti il bisogno di immergerti nella Natura e comprenderne i cicli?</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-300 mr-3 mt-1 flex-shrink-0 text-xl">✦</span>
                <span>Avverti capacità percettive e sensoriali più sviluppate e vuoi imparare a integrarle nella tua vita?</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-300 mr-3 mt-1 flex-shrink-0 text-xl">✦</span>
                <span>Vuoi scoprire come amare in modo Sacro?</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-300 mr-3 mt-1 flex-shrink-0 text-xl">✦</span>
                <span>Ti affascina il potere degli Alberi e desideri portarlo nella quotidianità?</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-300 mr-3 mt-1 flex-shrink-0 text-xl">✦</span>
                <span>Ti chiedi chi sei oggi, davvero?</span>
              </li>
            </ul>
          </div>

          {/* Cosa troverai */}
          <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-2xl p-8 md:p-10 backdrop-blur-sm border border-rose-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-rose-200 mb-8 text-center">
              Cosa troverai nel percorso
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Item 1 */}
              <div className="bg-gradient-to-br from-purple-800/30 to-indigo-800/30 rounded-xl p-6 border border-rose-500/20">
                <h4 className="text-xl font-bold text-rose-200 mb-3">🌳 Ogam</h4>
                <p className="text-rose-100/90">
                  La frequenza del potere degli alberi: connessione, saggezza e divinazione.
                </p>
              </div>

              {/* Item 2 */}
              <div className="bg-gradient-to-br from-purple-800/30 to-indigo-800/30 rounded-xl p-6 border border-rose-500/20">
                <h4 className="text-xl font-bold text-rose-200 mb-3">🌙 Sacro Femminile e Divino Maschile</h4>
                <p className="text-rose-100/90">
                  Unione sacra ed energia incarnata.
                </p>
              </div>

              {/* Item 3 */}
              <div className="bg-gradient-to-br from-purple-800/30 to-indigo-800/30 rounded-xl p-6 border border-rose-500/20">
                <h4 className="text-xl font-bold text-rose-200 mb-3">👁️ Visione e Tradizioni</h4>
                <p className="text-rose-100/90">
                  Radici native e autoctone.
                </p>
              </div>

              {/* Item 4 */}
              <div className="bg-gradient-to-br from-purple-800/30 to-indigo-800/30 rounded-xl p-6 border border-rose-500/20">
                <h4 className="text-xl font-bold text-rose-200 mb-3">✨ Pratiche Sciamaniche</h4>
                <p className="text-rose-100/90">
                  Rituali, cure femminili e lavoro energetico.
                </p>
              </div>

              {/* Item 5 */}
              <div className="bg-gradient-to-br from-purple-800/30 to-indigo-800/30 rounded-xl p-6 border border-rose-500/20">
                <h4 className="text-xl font-bold text-rose-200 mb-3">💃 Danza Sacra</h4>
                <p className="text-rose-100/90">
                  Movimento, ascolto, libertà.
                </p>
              </div>

              {/* Item 6 */}
              <div className="bg-gradient-to-br from-purple-800/30 to-indigo-800/30 rounded-xl p-6 border border-rose-500/20">
                <h4 className="text-xl font-bold text-rose-200 mb-3">🔥 Strumenti di Potere</h4>
                <p className="text-rose-100/90">
                  Tamburo, bastone, fuoco, acqua ed elementi.
                </p>
              </div>
            </div>
          </div>

          {/* Citazione Finale */}
          <div className="text-center py-8">
            <p className="text-2xl md:text-3xl text-rose-200 font-light italic leading-relaxed">
              Un viaggio verso te stessa.<br />
              Un risveglio del tuo potere.<br />
              Un ritorno alla Madre Terra.
            </p>
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
            Siamo qui per accompagnarti nel tuo viaggio sciamanico
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
