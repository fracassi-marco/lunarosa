'use client';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2070')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 via-indigo-900/60 to-rose-900/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-rose-100 mb-6 animate-fade-in">
          Luna Rosa Academy
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-rose-200 mb-8 font-light">
          Un viaggio di risveglio spirituale e trasformazione
        </p>
        <p className="text-base md:text-lg text-rose-200/90 max-w-2xl mx-auto leading-relaxed">
          Benvenuta nel sacro spazio della Luna Rosa Academy, dove due anime dedicate 
          ti guidano attraverso antiche pratiche sciamaniche, arte terapia e la saggezza 
          degli elementi per riconnettere con la tua essenza femminile.
        </p>
        <button
          onClick={() => document.getElementById('servizi')?.scrollIntoView({ behavior: 'smooth' })}
          className="mt-8 px-8 py-3 bg-rose-500/80 hover:bg-rose-600 text-white rounded-full 
                   transition-all duration-300 hover:scale-105 backdrop-blur-sm"
        >
          Scopri i nostri percorsi
        </button>
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
