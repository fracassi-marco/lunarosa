'use client';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 via-indigo-900/60 to-rose-900/70"></div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-5xl mx-auto py-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-rose-100 mb-8 animate-fade-in text-center">
          🌙 Luna Rosa Academy
        </h1>
        
        <div className="space-y-6 text-rose-100">
          <p className="text-lg md:text-xl leading-relaxed">
            Uno Spazio dedicato alle donne che desiderano riscoprire la propria forza interiore, 
            coltivare autenticità e vivere in armonia con se stesse, con gli altri in connessione con la Natura.
          </p>

          <div className="bg-purple-900/40 backdrop-blur-sm rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-rose-200 mb-4">
              Luna Rosa Academy è uno spazio protetto dove puoi:
            </h2>
            <ul className="space-y-3 text-base md:text-lg text-rose-100/95">
              <li className="flex items-start">
                <span className="text-rose-300 mr-3 mt-1 flex-shrink-0">✦</span>
                <span>Risvegliare la tua voce e il tuo potere personale</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-300 mr-3 mt-1 flex-shrink-0">✦</span>
                <span>Coltivare autostima, amore per te stessa e gioia di vivere</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-300 mr-3 mt-1 flex-shrink-0">✦</span>
                <span>Connetterti con il corpo, il cuore e gli elementi della natura</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-300 mr-3 mt-1 flex-shrink-0">✦</span>
                <span>Esprimere creatività e spiritualità attraverso rituali, meditazioni e pratiche consapevoli</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-300 mr-3 mt-1 flex-shrink-0">✦</span>
                <span>Vivere la sorellanza e la sacralità del femminile</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-300 mr-3 mt-1 flex-shrink-0">✦</span>
                <span>Percorrere la via dello Sciamanesimo femminile, in connessione agli elementi, il tamburo e le ritualità celtiche</span>
              </li>
            </ul>
          </div>

          <p className="text-base md:text-lg leading-relaxed">
            Attraverso cerchi di donne, pratiche rituali, meditazioni guidate, movimenti corporei e lavori di gruppo, 
            ogni donna ha l'opportunità di ritrovare il proprio spazio interiore, nutrire anima, corpo e cuore e 
            riscoprire la propria essenza autentica.
          </p>

          <p className="text-base md:text-lg leading-relaxed italic">
            Un luogo dove sentirsi accolte, ascoltate e supportate nel proprio cammino di connessione con il 
            Sacro Femminile e la saggezza ancestrale dello Sciamanesimo.
          </p>
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => document.getElementById('servizi')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-rose-500/80 hover:bg-rose-600 text-white rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm text-lg font-medium"
          >
            Scopri i nostri percorsi
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-rose-200"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
