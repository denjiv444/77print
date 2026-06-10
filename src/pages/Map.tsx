import { motion, type Variants, useReducedMotion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { type ChangeEvent, type FormEvent, useMemo, useState } from 'react';
import {
  companyEmail,
  companyMailUrl,
  companyMapEmbedUrl,
  companyMapUrl,
  companyPhoneDisplay,
  companyPhoneHref,
  companyWhatsAppUrl,
  companyWhatsAppDisplay,
} from '../lib/contact';

const contactPoints = [
  { label: 'Email principal', value: companyEmail, href: companyMailUrl, icon: <Mail size={20} /> },
  { label: 'Appel direct', value: companyPhoneDisplay, href: companyPhoneHref, icon: <Phone size={20} /> },
  { label: 'WhatsApp', value: companyWhatsAppDisplay, href: companyWhatsAppUrl, icon: <Send size={20} /> },
  { label: 'Localisation', value: '77 print, Casablanca, Maroc', href: companyMapUrl, icon: <MapPin size={20} /> },
  { label: 'Horaires', value: 'Lun - Ven, 9h - 19h', icon: <Clock size={20} /> },
];

const initialForm = {
  name: '',
  company: '',
  phone: '',
  email: '',
  projectType: '',
  budget: '',
  deadline: '',
  quantity: '',
  delivery: '',
  message: '',
};

type BriefForm = typeof initialForm;

function buildBriefMessage(form: BriefForm) {
  return [
    'Bonjour 77print, je souhaite demarrer un projet.',
    '',
    '--- Informations client ---',
    `Nom: ${form.name || 'Non precise'}`,
    `Entreprise: ${form.company || 'Non precisee'}`,
    `Telephone: ${form.phone || 'Non precise'}`,
    `Email: ${form.email || 'Non precise'}`,
    '',
    '--- Projet ---',
    `Type de projet: ${form.projectType || 'Non precise'}`,
    `Budget estime: ${form.budget || 'Non precise'}`,
    `Delai souhaite: ${form.deadline || 'Non precise'}`,
    `Quantite / formats: ${form.quantity || 'Non precise'}`,
    `Livraison: ${form.delivery || 'Non precisee'}`,
    '',
    '--- Message ---',
    form.message || 'Non precise',
  ].join('\n');
}

export default function MapPage() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);
  const reduceMotion = useReducedMotion();
  const compiledMessage = useMemo(() => buildBriefMessage(form), [form]);

  const reveal: Variants = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setSent(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(compiledMessage);
    const url = `${companyWhatsAppUrl}?text=${text}`;
    setSent(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="brand-animated-bg bg-white text-brand-800 w-full overflow-hidden">
      <section className="px-6 pb-16 pt-32 sm:px-8 lg:pt-40">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div initial="hidden" animate="visible" variants={reveal}>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-brand-800">Contact & brief</p>
            <h1 className="font-serif text-6xl leading-[0.95] tracking-normal md:text-8xl">
              Un brief clair, une reponse precise.
            </h1>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={reveal} className="border-l border-brand-800/30 pl-6">
            <p className="max-w-2xl text-xl leading-8 text-brand-800">
              Remplissez les informations essentielles. Le formulaire assemble votre demande en message structure et l'ouvre dans un email adresse a 77print.
            </p>
            <a href={companyPhoneHref} className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand-800 px-7 py-4 text-sm font-bold text-white hover:bg-brand-800">
              <Phone size={17} />
              {companyPhoneDisplay}
            </a>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-brand-800/20 bg-white px-6 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contactPoints.map((pt, index) => {
            const content = (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={reveal}
                transition={{ delay: index * 0.04 }}
                className="h-full rounded-lg border border-brand-800/20 bg-white p-5 shadow-soft"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-800 shadow-sm">
                  {pt.icon}
                </div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-brand-800">{pt.label}</p>
                <p className="text-sm font-bold leading-6 text-brand-800">{pt.value}</p>
              </motion.div>
            );

            return pt.href ? (
              <a key={pt.label} href={pt.href} target={pt.href.startsWith('http') ? '_blank' : undefined} rel={pt.href.startsWith('http') ? 'noreferrer' : undefined}>
                {content}
              </a>
            ) : (
              <div key={pt.label}>{content}</div>
            );
          })}
        </div>
      </section>

      <section className="px-6 py-12 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="mx-auto grid max-w-7xl gap-6 rounded-lg border border-brand-800 bg-brand-800 p-8 text-white md:grid-cols-[1.2fr_0.8fr] md:items-center"
        >
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em]">Secteur appel</p>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">Besoin d'une reponse rapide ? Appelez directement.</h2>
          </div>
          <a
            href={companyPhoneHref}
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white bg-white px-7 py-4 text-lg font-black text-brand-800 transition-transform hover:scale-[1.02]"
          >
            <Phone size={20} />
            {companyPhoneDisplay}
          </a>
        </motion.div>
      </section>

      <section className="px-6 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.form initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} onSubmit={handleSubmit} className="rounded-lg border border-brand-800/20 bg-white p-6 shadow-soft sm:p-8">
            <div className="mb-8 flex items-start justify-between gap-6 border-b border-brand-800/20 pb-8">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-brand-800">Brief client</p>
                <h2 className="font-serif text-4xl leading-tight">Informations du projet</h2>
              </div>
              <Send className="mt-2 text-brand-800" size={24} />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nom complet" name="name" value={form.name} onChange={handleChange} required placeholder="Votre nom" />
              <Field label="Entreprise" name="company" value={form.company} onChange={handleChange} placeholder="Nom de l'entreprise" />
              <Field label="Telephone" name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="0520145384" />
              <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="vous@example.com" />
              <SelectField label="Type de projet" name="projectType" value={form.projectType} onChange={handleChange} required options={['Identite visuelle', 'Cartes / Flyers', 'Catalogue / Menu', 'Packaging', 'Infographie', 'Autre']} />
              <SelectField label="Budget estime" name="budget" value={form.budget} onChange={handleChange} options={['Moins de 1 000 MAD', '1 000 - 3 000 MAD', '3 000 - 7 000 MAD', '7 000 MAD et plus', 'A definir']} />
              <Field label="Delai souhaite" name="deadline" value={form.deadline} onChange={handleChange} placeholder="Ex: cette semaine" />
              <Field label="Quantite / formats" name="quantity" value={form.quantity} onChange={handleChange} placeholder="Ex: 500 flyers A5" />
              <SelectField label="Livraison" name="delivery" value={form.delivery} onChange={handleChange} options={['Fichiers uniquement', 'Impression + retrait', 'Impression + livraison', 'A confirmer']} />
              <div className="sm:col-span-2">
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.22em] text-brand-800">Message</label>
                <textarea
                  name="message"
                  rows={7}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Objectif, style souhaite, couleurs, references, contraintes techniques..."
                  className="w-full rounded-lg border border-brand-800/30 bg-white px-4 py-4 text-brand-800 placeholder-brand-800 outline-none transition-colors focus:border-brand-700"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-brand-800/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-6 text-brand-800">
                  Le message sera ouvert dans WhatsApp pour envoi direct.
                </p>
                <button type="submit" className="inline-flex items-center justify-center gap-3 rounded-full bg-brand-800 px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-brand-800">
                  Envoyer par WhatsApp
                  <Send size={17} />
                </button>
            </div>
            {sent && (
              <p className="mt-5 rounded-lg bg-brand-50 px-4 py-3 text-sm font-bold text-brand-900">
                WhatsApp s'est ouvert avec le brief complet pret a envoyer.
              </p>
            )}
          </motion.form>

          <motion.aside initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="space-y-6">
            <div className="rounded-lg border border-brand-800/20 bg-brand-800 p-6 text-white shadow-soft">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-brand-300">Message compile</p>
              <pre className="max-h-[420px] overflow-auto whitespace-pre-wrap rounded-lg bg-white/5 p-5 text-sm leading-6 text-white">
                {compiledMessage}
              </pre>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-brand-800/20 bg-white shadow-soft">
              <iframe
                title="Localisation 77 print"
                src={companyMapEmbedUrl}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/90 p-4 shadow-soft backdrop-blur">
                <p className="font-serif text-xl text-brand-800">77print Studio</p>
                <a href={companyMapUrl} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-800">
                  <MapPin size={14} />
                  Ouvrir dans Google Maps
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>
    </div>
  );
}

type FieldProps = {
  label: string;
  name: keyof BriefForm;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
};

function Field({ label, name, value, onChange, type = 'text', required, placeholder }: FieldProps) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-[0.22em] text-brand-800">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-brand-800/30 bg-white px-4 py-4 text-brand-800 placeholder-brand-800 outline-none transition-colors focus:border-brand-700"
      />
    </div>
  );
}

type SelectFieldProps = {
  label: string;
  name: keyof BriefForm;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  required?: boolean;
};

function SelectField({ label, name, value, onChange, options, required }: SelectFieldProps) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-[0.22em] text-brand-800">{label}</label>
      <select
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-brand-800/30 bg-white px-4 py-4 text-brand-800 outline-none transition-colors focus:border-brand-700"
      >
        <option value="">Selectionner</option>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
