import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight, Award, Sparkles, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
  { title: 'Clarte', desc: 'Chaque support doit se comprendre vite et se lire longtemps.', icon: <Target size={22} /> },
  { title: 'Ecoute', desc: 'Nous traduisons vos contraintes en decisions visuelles utiles.', icon: <Users size={22} /> },
  { title: 'Rythme', desc: 'La mise en page guide le regard comme une bonne edition.', icon: <Sparkles size={22} /> },
  { title: 'Precision', desc: 'Fichiers, marges, formats et finitions sont verifies avant livraison.', icon: <Award size={22} /> },
];

const projects = [
  {
    title: 'Voge Morocco',
    cat: 'Branding / Stationery',
    year: '2024',
    copy: 'Conception et impression de supports de marque pour la concession Voge.',
    img: '/voge.jpeg',
  },
  {
    title: 'Benelli Express',
    cat: 'Publicité / Signalétique',
    year: '2024',
    copy: 'Supports publicitaires grand format et signalétique pour Benelli Morocco.',
    img: '/BenelliPub.jpeg',
  },
  {
    title: 'Reanda International',
    cat: 'Corporate / Édition',
    year: '2023',
    copy: 'Rapports annuels et documents institutionnels pour le cabinet Reanda.',
    img: '/Reanda.jpeg',
  },
  {
    title: 'Alpro Packaging',
    cat: 'Packaging / Export',
    year: '2024',
    copy: 'Solution complète de packaging pour la gamme Alpro.',
    img: '/Alpro.jpeg',
  },
  {
    title: 'Charikaty',
    cat: 'Packaging / Branding',
    year: '2024',
    copy: 'Design et impression d\'emballages personnalisés pour Charikaty.',
    img: '/charikaty.jpeg',
  },
  {
    title: 'Moto Performances',
    cat: 'Signalétique / Print',
    year: '2023',
    copy: 'Habillage et supports de communication pour Moto Performances.',
    img: '/MotoPerformances.jpeg',
  },
  {
    title: 'UV Design',
    cat: 'Objets publicitaires',
    year: '2023',
    copy: 'Personnalisation d\'objets publicitaires avec marquage UV de haute précision.',
    img: '/UVDesignStylo.jpeg',
  },
  {
    title: 'Benelli Enseigne',
    cat: 'Signalétique / Extérieur',
    year: '2024',
    copy: 'Conception et pose d\'enseignes pour les points de vente Benelli.',
    img: '/Benelli.jpeg',
  },
  {
    title: 'Voge Morocco Board',
    cat: 'Signalétique / Intérieur',
    year: '2024',
    copy: 'Supports de communication et habillage mural pour showroom.',
    img: '/VogeBoard.jpeg',
  },
  {
    title: 'Réception Reanda',
    cat: 'Signalétique / Design',
    year: '2024',
    copy: 'Conception et installation du logo en relief pour l\'espace accueil de Reanda Morocco.',
    img: '/ReandaBureau.jpeg',
  },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

export default function Agency() {
  return (
    <div className="brand-animated-bg bg-white text-brand-800 w-full overflow-hidden">
      <section className="px-6 pb-16 pt-32 sm:px-8 lg:pt-40">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <motion.div initial="hidden" animate="visible" variants={reveal}>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-brand-800">Portfolio</p>
            <h1 className="font-serif text-6xl leading-[0.95] md:text-8xl">Des pieces imprimees qui ressemblent a leur ambition.</h1>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={reveal} className="space-y-8 border-l border-brand-800/30 pl-6">
            <p className="max-w-2xl text-xl leading-8 text-brand-800">
              Notre travail relie direction artistique, edition et production pour donner a chaque marque un systeme visuel solide et exploitable.
            </p>
            <Link to="/map" className="inline-flex items-center gap-3 rounded-full bg-brand-800 px-7 py-4 text-sm font-bold text-white hover:bg-brand-800">
              Travailler avec nous
              <ArrowUpRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-brand-800/20 bg-white px-6 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.article
              key={value.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
              transition={{ delay: index * 0.05 }}
              className="rounded-lg border border-brand-800/20 bg-white p-6 shadow-soft"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-800 shadow-sm">{value.icon}</div>
              <h2 className="mb-3 font-serif text-3xl">{value.title}</h2>
              <p className="leading-7 text-brand-800">{value.desc}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="mb-12 border-b border-brand-800/20 pb-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-brand-800">Selection</p>
            <h2 className="font-serif text-5xl leading-tight md:text-6xl">Travaux recents</h2>
          </motion.div>

          <div className="columns-1 gap-8 space-y-8 md:columns-2 lg:columns-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={reveal}
                transition={{ delay: index * 0.05 }}
                className="group relative mb-8 break-inside-avoid overflow-hidden rounded-2xl border border-brand-800/10 bg-white shadow-soft transition-all duration-500 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Glassmorphism Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brand-900/95 via-brand-900/40 to-transparent p-8 opacity-0 backdrop-blur-[2px] transition-all duration-500 group-hover:opacity-100">
                    <div className="translate-y-8 transition-transform duration-500 group-hover:translate-y-0">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="h-px w-8 bg-brand-300/50" />
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-200">
                          {project.cat}
                        </p>
                      </div>
                      <h3 className="mb-4 font-serif text-4xl text-white">{project.title}</h3>
                      <p className="mb-8 text-sm leading-relaxed text-brand-50/80">
                        {project.copy}
                      </p>
                      <Link
                        to="/map"
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-[10px] font-black uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-brand-900"
                      >
                        Cas d'étude <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Minimal Label for mobile/non-hover */}
                <div className="border-t border-brand-800/5 p-6 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-brand-400">{project.cat}</p>
                      <h3 className="font-serif text-2xl text-brand-800">{project.title}</h3>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-800/10 text-brand-800">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-800 px-6 py-20 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          {[
            { val: '128+', label: 'projets livres' },
            { val: '74', label: 'clients accompagnes' },
            { val: '98%', label: 'briefs valides sans friction' },
          ].map(item => (
            <div key={item.label}>
              <p className="font-serif text-6xl text-brand-300 md:text-7xl">{item.val}</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.28em] text-white">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
