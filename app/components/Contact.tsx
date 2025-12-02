export default function Contact() {
  const whatsappNumber = '1234567890'; // Sostituire con il numero reale
  const email = 'info@lunarosaacademy.it'; // Sostituire con l'email reale

  return (
    <section id="contatti" className="py-20 bg-gradient-to-b from-indigo-950 to-purple-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-rose-200 mb-4">
          Contattaci
        </h2>
        <p className="text-center text-rose-300/80 mb-16 max-w-2xl mx-auto">
          Siamo qui per accompagnarti nel tuo viaggio di trasformazione
        </p>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-900/50 to-indigo-900/50 
                      rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-rose-500/20 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${whatsappNumber}`}
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
              href={`mailto:${email}`}
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
                {email}
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
  );
}
