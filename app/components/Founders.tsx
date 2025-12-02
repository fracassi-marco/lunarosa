const founders = [
  {
    name: 'Nome Fondatrice 1',
    role: 'Operatrice Olistica & Sciamana',
    description: 'Con oltre 15 anni di esperienza nel campo delle pratiche sciamaniche e dell\'arte terapia, guida le donne verso un profondo risveglio spirituale. La sua missione è creare uno spazio sacro dove ogni donna possa riscoprire la propria forza interiore.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070',
  },
  {
    name: 'Nome Fondatrice 2',
    role: 'Operatrice Olistica & Guaritrice',
    description: 'Specializzata nella connessione con gli elementi e nelle pratiche di guarigione energetica, accompagna le donne in un viaggio di trasformazione attraverso rituali ancestrali e moderna consapevolezza. La sua dedizione è aiutare ogni donna a brillare della propria luce.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070',
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
                <p className="text-rose-200/90 leading-relaxed">
                  {founder.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
