'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-purple-900 to-purple-950 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <h3 className="text-2xl font-bold text-rose-200 mb-4">🌙 Luna Rosa Academy</h3>
            <p className="text-rose-300/80 leading-relaxed">
              Un viaggio di risveglio spirituale e trasformazione attraverso pratiche sciamaniche 
              e arte terapia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-rose-200 mb-4">Link Rapidi</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-rose-300/80 hover:text-rose-200 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('servizi')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-rose-300/80 hover:text-rose-200 transition-colors"
                >
                  Servizi
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('fondatrici')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-rose-300/80 hover:text-rose-200 transition-colors"
                >
                  Fondatrici
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-rose-300/80 hover:text-rose-200 transition-colors"
                >
                  Contatti
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-rose-200 mb-4">Contatti</h4>
            <ul className="space-y-2 text-rose-300/80">
              <li>📧 info@lunarosaacademy.it</li>
              <li>💬 WhatsApp disponibile</li>
              <li>🌙 Seguici nel tuo viaggio spirituale</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-rose-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-rose-300/60 text-sm">
            <p>&copy; {currentYear} Luna Rosa Academy. Tutti i diritti riservati.</p>
            <p className="mt-2 md:mt-0">
              Fatto con 💜 per il risveglio femminile
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
