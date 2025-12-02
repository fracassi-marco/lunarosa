const services = [
  {
    title: 'Arte Terapia',
    description: 'Esplora il tuo mondo interiore attraverso l\'espressione artistica. Un percorso di guarigione che utilizza l\'arte come ponte verso la consapevolezza di sé.',
    icon: '🎨',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071',
  },
  {
    title: 'Venere degli Elementi',
    description: 'Riconnettiti con i quattro elementi sacri - Terra, Acqua, Fuoco e Aria - per risvegliare la tua energia femminile e ritrovare equilibrio e armonia.',
    icon: '🌙',
    image: 'https://images.unsplash.com/photo-1532798442725-41036acc7489?q=80&w=2074',
  },
  {
    title: 'Scuola di Sciamanesimo',
    description: 'Immergiti nelle antiche pratiche sciamaniche, impara i rituali sacri e connettiti con gli spiriti guida per un viaggio di trasformazione profonda.',
    icon: '✨',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070',
  },
  {
    title: 'Percorso da Definire',
    description: 'Presto sveleremo un nuovo percorso di crescita spirituale dedicato alle donne che cercano connessione e saggezza ancestrale.',
    icon: '🌺',
    image: 'https://images.unsplash.com/photo-1499810631641-541e76d678a2?q=80&w=2070',
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
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-rose-500/20 
                       transition-all duration-500 hover:scale-105"
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
                <p className="text-rose-200/90 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
