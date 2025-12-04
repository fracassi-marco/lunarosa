import Link from 'next/link';

const services = [
  {
    title: 'Arte Terapia',
    description: 'Esplora il tuo mondo interiore attraverso l\'espressione artistica. Un percorso di guarigione che utilizza l\'arte come ponte verso la consapevolezza di sé.',
    icon: '🎨',
    image: '/images/arte-terapia3.jpg',
    link: '/arteterapia',
  },
  {
    title: 'Venere degli Elementi',
    description: 'Riconnettiti con i quattro elementi sacri - Terra, Acqua, Fuoco e Aria - per risvegliare la tua energia femminile e ritrovare equilibrio e armonia.',
    icon: '🌙',
    image: '/images/venere-elementi2.jpg',
    link: '/venere-degli-elementi',
  },
  {
    title: 'Scuola di Sciamanesimo',
    description: 'Immergiti nelle antiche pratiche sciamaniche, impara i rituali sacri e connettiti con gli spiriti guida per un viaggio di trasformazione profonda.',
    icon: '✨',
    image: '/images/sciamanesimo2.jpg',
    link: null,
  },
  {
    title: 'Percorso da Definire',
    description: 'Presto sveleremo un nuovo percorso di crescita spirituale dedicato alle donne che cercano connessione e saggezza ancestrale.',
    icon: '🌺',
    image: '/images/servizio-4.jpg',
    link: null,
  },
];

export default function Services() {
  return (
    <section id="servizi" className="py-20 bg-gradient-to-b from-indigo-950 to-purple-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-rose-200 mb-4">
          I Nostri Servizi
        </h2>
        <p className="text-center text-rose-300/80 mb-16 max-w-2xl mx-auto">
          Percorsi sacri di risveglio e trasformazione
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const CardContent = (
              <div
                className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-rose-500/20 
                         transition-all duration-500 hover:scale-105 cursor-pointer"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 
                           group-hover:scale-110"
                  style={{ backgroundImage: `url('${service.image}')` }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/95 via-purple-900/70 to-transparent"></div>

                {/* Content */}
                <div className="relative p-8 min-h-[400px] flex flex-col justify-end">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-rose-100 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-rose-200/90 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  {service.link && (
                    <span className="text-rose-300 font-medium inline-flex items-center group-hover:text-rose-200 transition-colors">
                      Scopri di più →
                    </span>
                  )}
                </div>
              </div>
            );

            return (
              <div key={index}>
                {service.link ? (
                  <Link href={service.link}>
                    {CardContent}
                  </Link>
                ) : (
                  CardContent
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
