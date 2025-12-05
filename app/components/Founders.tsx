const founders = [
  {
    name: 'Isabella Rosi',
    role: 'Educatrice & Facilitatrice NatureTherapy®',
    description: 'Mission:<br/>RiPortare Donne, uomini e famiglie a ritrovare Armonia ed equilibrio interiore per stare bene con sé stessi e gli altri.<br/>RiTrovare la padronanza di sé attraverso la connessione con la natura e la sua ciclicità,<br/>Natura maestra, Natura palestra di crescita personale.<br/><br/>Cammino:<br/>Educatore Naturale in cammino sulla via dello Sciamanesimo Femminile<br/><br/>Aiuto:<br/>Sostegno alla genitorialità, lavoro come educatrice d\' infanzia da trent\'anni.<br/>Sono Custode di cerchi di Donne<br/><br/>Formazione:<br/>Insegnate di scuola dell\'infanzia®️<br/>Educatrice d\'infanzia®️<br/>Educatore Naturale©️<br/>Educatore esperienziale in Natura©️<br/>Custode e Facilitatrice di cerchi di Donne ©️<br/>Facilitatrice Sciamanica©️<br/><br/>Pratico Cristalloterapia, Reiki, Mandala terapia è Cromoterapia.<br/>Operatore discipline BioNaturali©️<br/>Trattamenti energetici e terapie Egizio Essene<br/><br/>Facilitatrice NatureTherapy©️<br/><br/><br/>Opero:<br/>Co-fondatrice di  un associazione<br/>Dal 2009/2020 Associazione Crescendo Saperi alternativi -<br/>Dro (TN)<br/>Co-fondatrice di Awen 2020 e dell\' associazione Yin Tai Awen -<br/>e del Centro di formazione<br/>Awen Centro Discipline Olistiche<br/>Arco di (TN)<br/>Co-creatrice di Luna Rosa Academy con Simona Pancaldi Borghi 2025',
    quote: 'La Natura ti mette di fronte a chi sei a chi Vuoi essere e poi ti mostra chi puoi diventare.',
    image: '/images/isabella-rosi.jpg',
  },
  {
    name: 'Simona Pancaldi Borghi',
    role: 'Donna Ponte - Operatrice Olistica in Sciamanesimo Femminile',
    description: 'Missione:<br/>Risveglio Donne e Bimbi attraverso la Riconnessione alla Natura e l\'Arte Sacra riportando La Sapienza Antica Autoctona e lo Spirito nella Materia<br/><br/>Cammino:<br/>Cammino la Sapienza Celtica Druidica Ogam delle Nostre Terre, il Tamburo Celtico e apro alla Sapienza Nativa, in Sacerdozio<br/><br/>Aiuto:<br/>Donne e Bimbi attraverso Percorsi di Gruppo e Singoli Portando il Cerchio come Pratica di Trasmissione della Vita<br/><br/>Formazione:<br/>Maestra D\'Arte Visiva e Ceramica Magistrale<br/>Esperta in Illustrazione per i Bimbi©®<br/>Operatore Attore nel Teatro delle Terapie©®<br/>Operatrice Arte Danza Teatro Terapia con Metodo Pedagogico©®<br/><br/>Master PNL©®<br/>Master Ipnosi Regressiva e Ricostruttiva©®<br/><br/>Conoscitrice della Radioestesia Sciamanica©<br/>Accompagnatrice Ogam Celtico©®<br/>Operatrice Olistica in Sciamanesimo Femminile©®<br/>Custode del Grembo©®<br/><br/>Creatrice del Metodo Artistico Pedagogico Spirituale: "Arte Natura per la Riconnessione della Persona©®"<br/><br/>Autrice:<br/>Creatrice di Favole con<br/>Opere di Teatro di Ricerca©®<br/>Opere Picturebooks Portale per Bimbi©®<br/><br/>Opero:<br/>Collaborando con<br/>Scuole, Associazioni, Cooperative, Comuni, Centri Olistici, Palestre, istituzioni Pubbliche e Private<br/><br/>CoFondatrice della Luna Rosa Academy con Isabella Rosi<br/><br/>Di Me:<br/>Ho ancora Tanto da Camminare per Le Donne e i Bimbi a Servizio',
    quote: 'Ho ancora Tanto da Camminare per Le Donne e i Bimbi a Servizio',
    image: '/images/simona.jpg',
  },
];

export default function Founders() {
  return (
    <section id="fondatrici" className="py-20 bg-gradient-to-b from-beige-800 to-beige-700">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-bordeaux-700 mb-4">
          Le Fondatrici
        </h2>
        <p className="text-center text-bordeaux-600/80 mb-16 max-w-2xl mx-auto">
          Due anime dedicate al servizio della femminilità sacra
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-beige-200/50 to-beige-300/50 rounded-2xl 
                       overflow-hidden shadow-2xl backdrop-blur-sm border border-bordeaux-400/20
                       hover:border-bordeaux-400/40 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center hover:scale-110 
                           transition-transform duration-500"
                  style={{ backgroundImage: `url('${founder.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-beige-200 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-bordeaux-900 mb-2">
                  {founder.name}
                </h3>
                <p className="text-bordeaux-600 italic mb-4">{founder.role}</p>
                <div className="text-bordeaux-700/90 leading-relaxed mb-4"
                     dangerouslySetInnerHTML={{ __html: founder.description }}
                />
                {founder.quote && (
                  <p className="text-bordeaux-600 italic text-center mt-6 pt-6 border-t border-bordeaux-400/30">
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
