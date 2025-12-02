const founders = [
  {
    name: 'Isabella Rosi',
    role: 'Educatrice & Facilitatrice NatureTherapy®',
    description: 'Sono Isabella Rosi, educatrice d\'infanzia da trent\'anni, facilitatrice di Cerchi di Donne©️ e operatrice di Discipline BioNaturali. Ho creato La Natura Emozionale per offrire uno spazio autentico di crescita, ascolto e trasformazione, nato dal mio essere donna, mamma ed educatrice naturale. Accompagno donne, adulti, famiglie e bambini in esperienze emozionali in Natura, dove il bosco diventa un luogo di cura, consapevolezza e riconnessione con sé stessi. Il mio approccio integra educazione naturale, esperienza in ambiente selvatico, comunicazione in cerchio e pratiche sciamaniche femminili. Come facilitatrice NatureTherapy®️, guido le persone a ritrovare spontaneità, presenza e libertà espressiva attraverso il contatto con la Natura e con la propria interiorità. Creo percorsi e incontri in armonia con la ciclicità naturale e le stagioni, per favorire equilibrio, radicamento e benessere emozionale.',
    quote: 'La Natura ti mette di fronte a chi sei a chi Vuoi essere e poi ti mostra chi puoi diventare.',
    image: '/images/isabella-rosi.jpg',
  },
  {
    name: 'Simona Pancaldi Borghi',
    role: 'Donna Ponte - Operatrice Olistica in Sciamanesimo Femminile',
    description: 'Dedico il mio cammino al risveglio di donne e bambini attraverso la riconnessione alla Natura e l\'Arte Sacra, riportando la Sapienza Antica Autoctona e lo Spirito nella Materia. Cammino la Sapienza Celtica Druidica Ogam delle nostre terre, il Tamburo Celtico e apro alla Sapienza Nativa, in Sacerdozio. Accompagno donne e bambini attraverso percorsi di gruppo e individuali, portando il Cerchio come pratica di trasmissione della vita. Sono Maestra d\'Arte Visiva e Ceramica Magistrale, Esperta in Illustrazione per i Bimbi, Operatrice Arte Danza Teatro Terapia, Master in PNL e Ipnosi Regressiva, Accompagnatrice Ogam Celtico e Custode del Grembo. Creatrice del Metodo Artistico Pedagogico Spirituale "Arte Natura per la Riconnessione della Persona" e autrice di favole e opere teatrali per bambini.',
    quote: 'Ho ancora tanto da camminare per le donne e i bambini, a servizio',
    image: '/images/simona.jpg',
  },
];

export default function Founders() {
  return (
    <section id="fondatrici" className="py-20 bg-gradient-to-b from-purple-950 to-indigo-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-rose-200 mb-4">
          Le Fondatrici
        </h2>
        <p className="text-center text-rose-300/80 mb-16 max-w-2xl mx-auto">
          Due anime dedicate al servizio della femminilità sacra
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-2xl 
                       overflow-hidden shadow-2xl backdrop-blur-sm border border-rose-500/20
                       hover:border-rose-500/40 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center hover:scale-110 
                           transition-transform duration-500"
                  style={{ backgroundImage: `url('${founder.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-rose-100 mb-2">
                  {founder.name}
                </h3>
                <p className="text-rose-300 italic mb-4">{founder.role}</p>
                <p className="text-rose-200/90 leading-relaxed mb-4">
                  {founder.description}
                </p>
                {founder.quote && (
                  <p className="text-rose-300 italic text-center mt-6 pt-6 border-t border-rose-500/30">
                    "{founder.quote}"
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
