import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, FileText, Layers, Monitor, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    num: '01',
    title: 'Identite de marque',
    description: 'Logo, palette, typographie, guide de style et declinaisons pour une presence coherente sur tous les supports.',
    icon: <Layers size={22} />,
  },
  {
    num: '02',
    title: 'Edition & infographie',
    description: 'Rapports, menus, catalogues et visuels narratifs qui organisent l information avec clarte et elegance.',
    icon: <FileText size={22} />,
  },
  {
    num: '03',
    title: 'Design digital',
    description: 'Visuels reseaux sociaux, presentations et supports web alignes avec votre langage de marque.',
    icon: <Monitor size={22} />,
  },
  {
    num: '04',
    title: 'Print & packaging',
    description: 'Flyers, cartes, brochures, etiquettes et packaging prepares avec precision pour l impression.',
    icon: <Printer size={22} />,
  },
];

const process = [
  { num: 'I', title: 'Brief', desc: 'Nous cadrons l objectif, les formats, le public et les contraintes techniques.' },
  { num: 'II', title: 'Direction', desc: 'Nous proposons une piste visuelle claire avant de produire les pieces finales.' },
  { num: 'III', title: 'Composition', desc: 'Nous mettons en page, hierarchisons et affinons chaque detail.' },
  { num: 'IV', title: 'Livraison', desc: 'Nous exportons les fichiers propres pour impression, publication ou partage.' },
];

const plans = [
  { name: 'Essentiel', price: 'Sur devis', features: ['Brief rapide', '1 support principal', '2 revisions', 'Fichiers numeriques'] },
  { name: 'Editorial', price: 'Sur devis', features: ['Direction artistique', 'Suite de supports', '4 revisions', 'Preparation impression'], highlight: true },
  { name: 'Studio', price: 'Sur mesure', features: ['Identite complete', 'Catalogue de formats', 'Suivi prioritaire', 'Accompagnement continu'] },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

export default function Services() {
  return (
    <div className="brand-animated-bg bg-white text-brand-800 w-full overflow-hidden">
      <section className="px-6 pb-16 pt-32 sm:px-8 lg:pt-40">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <motion.div initial="hidden" animate="visible" variants={reveal}>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-brand-800">Services</p>
            <h1 className="font-serif text-6xl leading-[0.95] md:text-8xl">Une imprimerie pensee comme un atelier editorial.</h1>
          </motion.div>
          <motion.p initial="hidden" animate="visible" variants={reveal} className="max-w-2xl border-l border-brand-800/30 pl-6 text-xl leading-8 text-brand-800">
            Nous transformons vos besoins de communication en supports structures, lisibles et prets a circuler: du premier brief au fichier final.
          </motion.p>
        </div>
      </section>

      <section className="border-y border-brand-800/20 bg-white px-6 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.num}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={reveal}
              transition={{ delay: index * 0.06 }}
              className="rounded-lg border border-brand-800/20 bg-white p-7 shadow-soft"
            >
              <div className="mb-12 flex items-center justify-between">
                <span className="font-serif text-5xl text-white">{service.num}</span>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-800 shadow-sm">{service.icon}</div>
              </div>
              <h2 className="mb-4 font-serif text-4xl leading-tight">{service.title}</h2>
              <p className="max-w-xl leading-7 text-brand-800">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="mb-12 border-b border-brand-800/20 pb-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-brand-800">Processus</p>
            <h2 className="font-serif text-5xl leading-tight md:text-6xl">Du brief a la livraison</h2>
          </motion.div>
          <div className="grid gap-0 border-y border-brand-800/20 md:grid-cols-4">
            {process.map((step, index) => (
              <motion.div
                key={step.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={reveal}
                transition={{ delay: index * 0.08 }}
                className="border-b border-brand-800/20 py-8 md:border-b-0 md:border-r md:px-6 last:md:border-r-0"
              >
                <p className="mb-8 font-serif text-4xl text-brand-800">{step.num}</p>
                <h3 className="mb-3 text-sm font-black uppercase tracking-[0.22em]">{step.title}</h3>
                <p className="leading-7 text-brand-800">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-800 px-6 py-24 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-brand-300">Formules</p>
            <h2 className="font-serif text-5xl leading-tight md:text-6xl">Choisir le bon niveau d accompagnement</h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={reveal}
                transition={{ delay: index * 0.08 }}
                className={`rounded-lg border p-7 ${plan.highlight ? 'border-brand-300 bg-white text-brand-800' : 'border-white/15 bg-white/5 text-white'}`}
              >
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.28em] text-brand-300">{plan.highlight ? 'Recommande' : 'Option'}</p>
                <h3 className="font-serif text-4xl">{plan.name}</h3>
                <p className={`mt-2 text-sm font-bold ${plan.highlight ? 'text-brand-800' : 'text-brand-200'}`}>{plan.price}</p>
                <ul className="my-8 space-y-4">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex gap-3 text-sm leading-6">
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/map" className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold ${plan.highlight ? 'bg-brand-800 text-white hover:bg-brand-800' : 'bg-white text-brand-800 hover:bg-brand-50'}`}>
                  Demander un devis <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
