const founders = [
  {
    name: 'Isabella Rosi',
    role: 'Educatrice & Facilitatrice NatureTherapy®',
    description: 'Mission:<br/>RiPortare Donne, uomini e famiglie a ritrovare Armonia ed equilibrio interiore per stare bene con sé stessi e gli altri.<br/>RiTrovare la padronanza di sé attraverso la connessione con la natura e la sua ciclicità,<br/>Natura maestra, Natura palestra di crescita personale.<br/><br/>Cammino:<br/>Educatore Naturale in cammino sulla via dello Sciamanesimo Femminile<br/><br/>Aiuto:<br/>Sostegno alla genitorialità, lavoro come educatrice d\' infanzia da trent\'anni.<br/>Sono Custode di cerchi di Donne<br/><br/>Formazione:<br/>Insegnate di scuola dell\'infanzia®️<br/>Educatrice d\'infanzia®️<br/>Educatore Naturale©️<br/>Educatore esperienziale in Natura©️<br/>Custode e Facilitatrice di cerchi di Donne ©️<br/>Facilitatrice Sciamanica©️<br/><br/>Pratico Cristalloterapia, Reiki, Mandala terapia è Cromoterapia.<br/>Operatore discipline BioNaturali©️<br/>Trattamenti energetici e terapie Egizio Essene<br/><br/>Facilitatrice NatureTherapy©️<br/><br/><br/>Opero:<br/>Co-fondatrice di  un associazione<br/>Dal 2009/2020 Associazione Crescendo Saperi alternativi -<br/>Dro (TN)<br/>Co-fondatrice di Awen 2020 e dell\' associazione Yin Tai Awen -<br/>e del Centro di formazione<br/>Awen Centro Discipline Olistiche<br/>Arco di (TN)<br/>Co-creatrice di LUNA ROSA ACADEMY con Simona Pancaldi Borghi 2025',
    quote: 'La Natura ti mette di fronte a chi sei a chi Vuoi essere e poi ti mostra chi puoi diventare.',
    image: '/images/isabella-rosi.jpg',
    socialLinks: [
      { platform: 'facebook', url: 'https://www.facebook.com/share/1FrMAMRLxq/' },
      { platform: 'facebook', url: 'https://www.facebook.com/share/1BuEpdniS4/' },
      { platform: 'email', url: 'mailto:naturabella.rosi@gmail.com' }
    ]
  },
  {
    name: 'Simona Pancaldi Borghi',
    role: 'Donna Ponte - Operatrice Olistica in Sciamanesimo Femminile',
    description: 'Missione:<br/>Risveglio Donne e Bimbi attraverso la Riconnessione alla Natura e l\'Arte Sacra riportando La Sapienza Antica Autoctona e lo Spirito nella Materia<br/><br/>Cammino:<br/>Cammino la Sapienza Celtica Druidica Ogam delle Nostre Terre, il Tamburo Celtico e apro alla Sapienza Nativa, in Sacerdozio<br/><br/>Aiuto:<br/>Donne e Bimbi attraverso Percorsi di Gruppo e Singoli Portando il Cerchio come Pratica di Trasmissione della Vita<br/><br/>Formazione:<br/>Maestra D\'Arte Visiva e Ceramica Magistrale<br/>Esperta in Illustrazione per i Bimbi©®<br/>Operatore Attore nel Teatro delle Terapie©®<br/>Operatrice Arte Danza Teatro Terapia con Metodo Pedagogico©®<br/><br/>Master PNL©®<br/>Master Ipnosi Regressiva e Ricostruttiva©®<br/><br/>Conoscitrice della Radioestesia Sciamanica©<br/>Accompagnatrice Ogam Celtico©®<br/>Operatrice Olistica in Sciamanesimo Femminile©®<br/>Custode del Grembo©®<br/><br/>Creatrice del Metodo Artistico Pedagogico Spirituale: "Arte Natura per la Riconnessione della Persona©®"<br/><br/>Autrice:<br/>Creatrice di Favole con<br/>Opere di Teatro di Ricerca©®<br/>Opere Picturebooks Portale per Bimbi©®<br/><br/>Opero:<br/>Collaborando con<br/>Scuole, Associazioni, Cooperative, Comuni, Centri Olistici, Palestre, istituzioni Pubbliche e Private<br/><br/>CoFondatrice della LUNA ROSA ACADEMY con Isabella Rosi<br/><br/>Di Me:<br/>Ho ancora Tanto da Camminare per Le Donne e i Bimbi a Servizio',
    quote: 'Ho ancora Tanto da Camminare per Le Donne e i Bimbi a Servizio',
    image: '/images/simona.jpg',
  },
];

export default function Founders() {
  return (
    <section id="fondatrici" className="py-20 bg-gradient-to-b from-beige-100 to-beige-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-bordeaux-800 mb-4">
          Le Fondatrici
        </h2>
        <p className="text-center text-bordeaux-600 mb-16 max-w-2xl mx-auto">
          Due anime dedicate al servizio della femminilità sacra
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-beige-50 to-beige-100 rounded-2xl 
                       overflow-hidden shadow-2xl backdrop-blur-sm border border-bordeaux-200
                       hover:border-bordeaux-400 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center hover:scale-110 
                           transition-transform duration-500"
                  style={{ backgroundImage: `url('${founder.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-beige-700 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-bordeaux-900 mb-2">
                  {founder.name}
                </h3>
                <p className="text-bordeaux-700 italic mb-4">{founder.role}</p>
                <div className="text-bordeaux-800 leading-relaxed mb-4"
                     dangerouslySetInnerHTML={{ __html: founder.description }}
                />
                {founder.socialLinks && (
                  <div className="flex gap-3 mb-4">
                    {founder.socialLinks.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-bordeaux-600 hover:bg-bordeaux-700 text-white transition-colors"
                        aria-label={link.platform === 'email' ? 'Email' : `Facebook link ${i + 1}`}
                      >
                        {link.platform === 'email' ? (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        )}
                      </a>
                    ))}
                  </div>
                )}
                {founder.quote && (
                  <p className="text-bordeaux-700 italic text-center mt-6 pt-6 border-t border-bordeaux-300">
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
