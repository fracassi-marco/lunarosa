'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

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
        <div className="absolute inset-0 bg-gradient-to-b from-beige-100/80 via-beige-200/70 to-beige-50"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bordeaux-900 mb-6">
            Scuola di Sciamanesimo
          </h1>
          <p className="text-lg md:text-xl text-bordeaux-900/90 leading-relaxed">
            Un percorso di trasformazione profonda e riconnessione con il tuo potere interiore
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-gradient-to-b from-beige-50 to-beige-100">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Introduzione */}
          <div className="bg-gradient-to-br from-beige-100/50 to-beige-200/50 rounded-2xl p-8 md:p-10 backdrop-blur-sm border border-bordeaux-400/20">
            <h2 className="text-3xl md:text-4xl font-bold text-bordeaux-700 mb-6">
              Un percorso di Sciamanesimo: un'esperienza trasformativa
            </h2>
            <div className="space-y-4 text-base md:text-lg text-bordeaux-900/95 leading-relaxed">
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
          <div className="bg-gradient-to-br from-bordeaux-100/40 to-beige-100/40 rounded-2xl p-8 md:p-10 backdrop-blur-sm border border-bordeaux-400/30">
            <h3 className="text-2xl md:text-3xl font-bold text-bordeaux-700 mb-6">
              Il percorso di sciamanesimo femminile
            </h3>
            <div className="space-y-4 text-base md:text-lg text-bordeaux-900/95 leading-relaxed">
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
          <div className="bg-gradient-to-br from-beige-200/50 to-beige-100/50 rounded-2xl p-8 md:p-10 backdrop-blur-sm border border-bordeaux-400/20">
            <h3 className="text-2xl md:text-3xl font-bold text-bordeaux-700 mb-6 text-center">
              A chi si rivolge
            </h3>
            <p className="text-lg md:text-xl text-bordeaux-700/90 mb-6 text-center italic">
              Ti risuona uno di questi punti?
            </p>
            <ul className="space-y-4 text-base md:text-lg text-bordeaux-900/95">
              <li className="flex items-start">
                <span className="text-bordeaux-600 mr-3 mt-1 flex-shrink-0 text-xl">✦</span>
                <span>Senti il bisogno di immergerti nella Natura e comprenderne i cicli?</span>
              </li>
              <li className="flex items-start">
                <span className="text-bordeaux-600 mr-3 mt-1 flex-shrink-0 text-xl">✦</span>
                <span>Avverti capacità percettive e sensoriali più sviluppate e vuoi imparare a integrarle nella tua vita?</span>
              </li>
              <li className="flex items-start">
                <span className="text-bordeaux-600 mr-3 mt-1 flex-shrink-0 text-xl">✦</span>
                <span>Vuoi scoprire come amare in modo Sacro?</span>
              </li>
              <li className="flex items-start">
                <span className="text-bordeaux-600 mr-3 mt-1 flex-shrink-0 text-xl">✦</span>
                <span>Ti affascina il potere degli Alberi e desideri portarlo nella quotidianità?</span>
              </li>
              <li className="flex items-start">
                <span className="text-bordeaux-600 mr-3 mt-1 flex-shrink-0 text-xl">✦</span>
                <span>Ti chiedi chi sei oggi, davvero?</span>
              </li>
            </ul>
          </div>

          {/* Cosa troverai */}
          <div className="bg-gradient-to-br from-beige-100/50 to-beige-200/50 rounded-2xl p-8 md:p-10 backdrop-blur-sm border border-bordeaux-400/20">
            <h3 className="text-2xl md:text-3xl font-bold text-bordeaux-700 mb-8 text-center">
              Cosa troverai nel percorso
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Item 1 */}
              <div className="bg-gradient-to-br from-beige-200/30 to-indigo-800/30 rounded-xl p-6 border border-bordeaux-400/20">
                <h4 className="text-xl font-bold text-bordeaux-700 mb-3">🌳 Ogam</h4>
                <p className="text-bordeaux-900/90">
                  La frequenza del potere degli alberi: connessione, saggezza e divinazione.
                </p>
              </div>

              {/* Item 2 */}
              <div className="bg-gradient-to-br from-beige-200/30 to-indigo-800/30 rounded-xl p-6 border border-bordeaux-400/20">
                <h4 className="text-xl font-bold text-bordeaux-700 mb-3">🌙 Sacro Femminile e Divino Maschile</h4>
                <p className="text-bordeaux-900/90">
                  Unione sacra ed energia incarnata.
                </p>
              </div>

              {/* Item 3 */}
              <div className="bg-gradient-to-br from-beige-200/30 to-indigo-800/30 rounded-xl p-6 border border-bordeaux-400/20">
                <h4 className="text-xl font-bold text-bordeaux-700 mb-3">👁️ Visione e Tradizioni</h4>
                <p className="text-bordeaux-900/90">
                  Radici native e autoctone.
                </p>
              </div>

              {/* Item 4 */}
              <div className="bg-gradient-to-br from-beige-200/30 to-indigo-800/30 rounded-xl p-6 border border-bordeaux-400/20">
                <h4 className="text-xl font-bold text-bordeaux-700 mb-3">✨ Pratiche Sciamaniche</h4>
                <p className="text-bordeaux-900/90">
                  Rituali, cure femminili e lavoro energetico.
                </p>
              </div>

              {/* Item 5 */}
              <div className="bg-gradient-to-br from-beige-200/30 to-indigo-800/30 rounded-xl p-6 border border-bordeaux-400/20">
                <h4 className="text-xl font-bold text-bordeaux-700 mb-3">💃 Danza Sacra</h4>
                <p className="text-bordeaux-900/90">
                  Movimento, ascolto, libertà.
                </p>
              </div>

              {/* Item 6 */}
              <div className="bg-gradient-to-br from-beige-200/30 to-indigo-800/30 rounded-xl p-6 border border-bordeaux-400/20">
                <h4 className="text-xl font-bold text-bordeaux-700 mb-3">🔥 Strumenti di Potere</h4>
                <p className="text-bordeaux-900/90">
                  Tamburo, bastone, fuoco, acqua ed elementi.
                </p>
              </div>
            </div>
          </div>

          {/* Citazione Finale */}
          <div className="text-center py-8">
            <p className="text-2xl md:text-3xl text-bordeaux-700 font-light italic leading-relaxed">
              Un viaggio verso te stessa.<br />
              Un risveglio del tuo potere.<br />
              Un ritorno alla Madre Terra.
            </p>
          </div>
        </div>
      </section>

      <Contact />

      <Footer />
    </div>
  );
}
