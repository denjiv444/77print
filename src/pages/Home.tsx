import { Link } from 'react-router-dom';
import { motion, type Variants, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, BookOpen, FileText, Layers, PenLine, Printer, Quote } from 'lucide-react';
import { companyEmail, companyMailUrl, companyPhoneDisplay, companyPhoneHref } from '../lib/contact';

const features = [
  {
    eyebrow: '01 / Identite',
    title: 'Direction de marque',
    text: 'Logo, charte, systeme typographique et langage visuel pour rendre votre entreprise immediate et credible.',
    icon: <Layers size={20} />,
  },
  {
    eyebrow: '02 / Editorial',
    title: 'Supports narratifs',
    text: 'Catalogues, menus, rapports, flyers et documents commerciaux concus comme de vrais objets de lecture.',
    icon: <FileText size={20} />,
  },
  {
    eyebrow: '03 / Impression',
    title: 'Production print',
    text: 'Finitions, formats et preparation technique pour livrer des supports propres, precis et prets a imprimer.',
    icon: <Printer size={20} />,
  },
];

const dispatches = [
  {
    title: 'Une identité visuelle qui reflète votre niveau d\'exigence.',
    meta: 'Design system / Print',
    img: '/CarteVisite.jpeg',
  },
  {
    title: 'Les données deviennent utiles quand leur hiérarchie devient visible.',
    meta: 'Infographie / Rapport',
    img: '/UVCnss.jpeg',
  },
  {
    title: 'Un bon packaging travaille avant même que le produit soit ouvert.',
    meta: 'Packaging / Marque',
    img: '/Alpro.jpeg',
  },
];

export default function Home() {
  const reduceMotion = useReducedMotion();
  const reveal: Variants = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <div className="brand-animated-bg bg-white text-brand-800 w-full overflow-hidden">
      <section className="relative min-h-screen px-6 pb-16 pt-32 sm:px-8 lg:pt-40">
        <div className="absolute inset-x-0 top-0 h-px bg-brand-800/10" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <motion.div initial="hidden" animate="visible" variants={reveal} className="max-w-3xl">
            {/* Banner text removed per request */}
            <h1 className="font-serif text-6xl font-semibold leading-[0.95] tracking-normal text-brand-800 sm:text-7xl lg:text-8xl">
              Des supports imprimes avec une voix, une cadence, une presence.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-brand-800">
              77print construit des identites, catalogues, infographies et pieces imprimees comme des editions soignees: lisibles, elegantes, utiles, et assez distinctes pour rester en memoire.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/map"
                className="inline-flex items-center gap-3 rounded-full bg-brand-800 px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-brand-800"
              >
                Demarrer un brief
                <ArrowUpRight size={17} />
              </Link>
              <a href={companyPhoneHref} className="text-sm font-bold text-brand-800 underline decoration-brand-800 underline-offset-8 hover:text-brand-800">
                {companyPhoneDisplay}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 40 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="relative"
          >
            <div className="grid grid-cols-[0.8fr_1.2fr] gap-4">
              <div className="pt-24">
                <div className="aspect-[3/4] overflow-hidden rounded-lg border border-brand-800/20 bg-white shadow-soft">
                  <img src="/ProjetPortfolio.jpeg" alt="77print visual work" className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-[4/5] overflow-hidden rounded-lg border border-brand-800/20 bg-white shadow-soft">
                  <img src="/Bache.jpeg" alt="Editorial print layout" className="h-full w-full object-cover" />
                </div>
                <p className="border-l border-brand-800/30 pl-4 text-sm leading-6 text-brand-800">
                  Chaque page, chaque pli, chaque contraste est traite comme un choix editorial.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-brand-800/20 bg-white px-6 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-120px' }} variants={reveal}>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-brand-800">Le manifeste</p>
            <h2 className="font-serif text-4xl leading-tight text-brand-800 md:text-6xl">
              Le design ne doit pas crier pour etre remarque.
            </h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-120px' }} variants={reveal} className="columns-1 gap-12 text-lg leading-8 text-brand-800 md:columns-2">
            <p className="drop-cap">
              Nous travaillons les marques comme un journal travaille son edition: un titre clair, une hierarchie lisible, une matiere visuelle precise et un rythme qui guide naturellement le regard.
            </p>
            <p className="mt-6 md:mt-0">
              Cette approche permet de creer des pieces commerciales qui ont de la tenue: menus, catalogues, packaging, rapports, cartes, signaletique et contenus digitaux gardent la meme coherence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="mb-12 flex flex-col justify-between gap-6 border-b border-brand-800/20 pb-8 md:flex-row md:items-end">
            <div>

              <h2 className="font-serif text-5xl leading-tight md:text-6xl">Ce que nous composons</h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-800 hover:text-brand-800">
              Voir les services <ArrowUpRight size={16} />
            </Link>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={reveal}
                transition={{ delay: index * 0.08 }}
                className="rounded-lg border border-brand-800/20 bg-white p-7 shadow-soft"
              >
                <div className="mb-10 flex items-center justify-between text-brand-800">
                  <span className="text-xs font-bold uppercase tracking-[0.28em]">{feature.eyebrow}</span>
                  {feature.icon}
                </div>
                <h3 className="mb-4 font-serif text-3xl leading-tight">{feature.title}</h3>
                <p className="leading-7 text-brand-800">{feature.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-800 px-6 py-24 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-brand-300">Carnet de travaux</p>
            <h2 className="font-serif text-5xl leading-tight md:text-6xl">Notes visuelles pour marques exigeantes</h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {dispatches.map((item, index) => (
              <motion.article
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={reveal}
                transition={{ delay: index * 0.08 }}
                className={index === 1 ? 'lg:pt-16' : ''}
              >
                <div className="mb-6 aspect-[4/5] overflow-hidden rounded-lg bg-brand-800">
                  <img src={item.img} alt={item.meta} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-brand-300">{item.meta}</p>
                <h3 className="font-serif text-3xl leading-tight">{item.title}</h3>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="mx-auto grid max-w-7xl gap-10 border-y border-brand-800/20 py-16 lg:grid-cols-[0.7fr_1.3fr] lg:items-center"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-brand-800 shadow-soft">
            <Quote size={30} />
          </div>
          <div>
            <blockquote className="font-serif text-4xl leading-tight text-brand-800 md:text-6xl">
              Un projet bien imprime commence toujours par un brief bien ecrit.
            </blockquote>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link to="/map" className="inline-flex items-center gap-3 rounded-full bg-brand-800 px-7 py-4 text-sm font-bold text-white hover:bg-brand-800">
                Remplir le brief client
                <PenLine size={17} />
              </Link>
              <a href={companyMailUrl} className="text-sm font-bold text-brand-800 underline decoration-brand-800 underline-offset-8">
                {companyEmail}
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
