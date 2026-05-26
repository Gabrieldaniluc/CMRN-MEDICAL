import Image from "next/image";

import {
  Stethoscope,
  ClipboardList,
  Brain,
  Activity,
  ShieldPlus,
  Hand,
  PersonStanding,
  Dumbbell,
  Accessibility,
  HeartPulse
} from "lucide-react";

const services = [
  [Stethoscope, "CONSULTAȚII", "Consultații de medicină fizică și reabilitare medicală"],
  [ClipboardList, "EVALUARE", "Evaluare și diagnostic funcțional"],
  [Accessibility, "COLOANĂ VERTEBRALĂ", "Tratamentul afecțiunilor coloanei vertebrale"],
  [Brain, "RECUPERARE NEUROLOGICĂ", "Recuperare neurologică"],
  [Activity, "RECUPERARE POSTTRAUMATICĂ", "Recuperare posttraumatică"],
  [HeartPulse, "RECUPERARE POSTOPERATORIE", "Recuperare postoperatorie"],
  [Dumbbell, "KINETOTERAPIE PERSONALIZATĂ", "Kinetoterapie personalizată"],
  [Activity, "FIZIOTERAPIE ȘI ELECTROTERAPIE", "Fizioterapie și electroterapie"],
  [Hand, "TERAPIE MANUALĂ", "Terapie manuală"],
  [PersonStanding, "PROGRAME", "Programe pentru redobândirea mobilității"],
  [ShieldPlus, "CONTRACT CU CNAS", "Servicii medicale în contract cu CNAS"],
];

const doctors = [
  ["Dr. Daniluc-Popovici Ilinca", "Medicină fizică de reabilitare"],
  ["Dr. Popovici Emilia", "Reumatologie și medicină fizică de reabilitare"],
  ["Dr. Diac Georgeta", "Medicină fizică de reabilitare și medicină sportivă"],
];

function MedicalIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-16 w-16 text-[#079b96]" fill="none" stroke="currentColor" strokeWidth="3">
      <circle cx="32" cy="32" r="24" />
      <path d="M32 18v28M18 32h28" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#06233f]">
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-12 py-4">
          <div className="flex items-center gap-4">
            <Image src="/logo.jpg" alt="Logo" width={58} height={58} />
            <div className="text-[18px] font-black leading-[1.1] text-[#079b96]">
              CENTRUL MEDICAL<br />RECUPERARE NICOLINA
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-16 text-[15px] font-black">
            <a href="#servicii">SERVICII</a>
            <a href="#despre">DESPRE NOI</a>
            <a href="#doctori">DOCTORI</a>
            <a href="#contact">CONTACT</a>
            <a
  href="https://www.google.com/maps/place/Strada+Hatman+%C8%98endrea+2,+700613+Ia%C8%99i/@47.1514019,27.5685444,17z/data=!3m1!4b1!4m6!3m5!1s0x40cafb0bc460a71b:0x309f27f0d7b90bac!8m2!3d47.1514493!4d27.5711735!16s%2Fg%2F11bw3zmysv?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
  target="_blank"
>
  LOCALIZARE
</a>
          </nav>

          <button className="rounded-full bg-[#079b96] px-7 py-3 font-black text-white shadow-lg">
            PROGRAMEAZĂ-TE
          </button>
        </div>
      </header>

      <section className="relative h-[520px] md:h-[650px] overflow-hidden">
        <Image
          src="/hero.png"
          alt="Recuperare medicală"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />

        <div className="absolute left-[7%] top-[22%] max-w-3xl">
          <h1 className="text-[38px] md:text-[64px] font-black leading-[1.05] tracking-tight text-[#079b96]">
            CENTRUL MEDICAL<br />RECUPERARE NICOLINA
          </h1>

          <div className="my-8 h-1 w-24 bg-[#079b96]" />

          <p className="max-w-xl text-[17px] md:text-[22px] leading-8 md:leading-9 text-[#12324d]">
            Recuperare medicală, fizioterapie și servicii moderne pentru
            sănătatea și mobilitatea ta.
          </p>
        </div>
      </section>
<section id="despre" className="bg-white px-8 py-20">
  <div className="mx-auto max-w-7xl">

    <h2 className="text-center text-4xl font-black text-[#079b96]">
      DESPRE NOI
    </h2>

    <div className="mx-auto mt-3 mb-10 h-1 w-16 bg-[#079b96]" />

    <div className="rounded-3xl bg-[#f7ffff] p-10 shadow-sm border border-teal-100">

      <p className="text-[20px] leading-10 text-[#12324d]">
Centrul Medical Recuperare Nicolina oferă servicii moderne de recuperare medicală,
fizioterapie, kinetoterapie și reabilitare funcțională, într-un spațiu dedicat
sănătății, mobilității și calității vieții pacienților noștri.

<br /><br />

Prin experiența echipei medicale și utilizarea unor metode moderne de evaluare
și tratament, centrul nostru urmărește recuperarea eficientă a afecțiunilor
neurologice, postoperatorii, posttraumatice și ale coloanei vertebrale,
adaptând fiecare plan terapeutic în funcție de nevoile individuale ale pacientului.

<br /><br />

Echipa medicală este formată din specialiști în medicină fizică de reabilitare,
reumatologie și medicină sportivă, având ca obiectiv restabilirea mobilității,
reducerea durerii și reintegrarea pacientului într-un stil de viață activ și echilibrat.

<br /><br />

În cadrul centrului sunt disponibile servicii de consultații medicale,
evaluare funcțională, fizioterapie, electroterapie, terapie manuală,
kinetoterapie personalizată și programe complete de recuperare,
inclusiv servicii medicale în contract cu CNAS.
      </p>

    </div>

  </div>
</section>
      <section id="servicii" className="bg-[#f7ffff] px-8 py-16">
        <h2 className="text-center text-4xl font-black text-[#079b96]">SERVICII</h2>
        <div className="mx-auto mt-3 mb-10 h-1 w-16 bg-[#079b96]" />

        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-6">
          {services.map(([Icon, title, text]: any) => (
            <div key={String(title)} className="w-[260px] rounded-3xl border border-teal-100 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#e9fbf9]">
                <Icon size={42} strokeWidth={2.2} className="text-[#079b96]" />
              </div>
              <h3 className="font-black text-[#079b96]">{String(title)}</h3>
              <p className="mt-3 text-sm leading-6">{String(text)}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="doctori" className="px-8 py-16">
        <h2 className="text-center text-4xl font-black text-[#079b96]">DOCTORI</h2>
        <div className="mx-auto mt-3 mb-10 h-1 w-16 bg-[#079b96]" />

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {doctors.map(([name, spec]) => (
            <div key={name} className="flex items-center gap-6 rounded-3xl border border-teal-100 bg-white p-8 shadow-sm">
              <div className="h-24 w-24 rounded-full bg-[#c9f8f1]" />
              <div>
                <h3 className="font-black text-[#079b96]">{name}</h3>
                <p className="mt-2 leading-7">{spec}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-8 pb-16">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#e9fbf9] p-10">
          <h2 className="text-center text-4xl font-black text-[#079b96]">CONTACT</h2>
          <div className="mx-auto mt-3 mb-10 h-1 w-16 bg-[#079b96]" />

          <div className="grid gap-8 md:grid-cols-4">
            <div><b>ADRESĂ</b><br />Strada Hatman Șendrea, nr. 2, Iași</div>
            <div><b>TELEFON</b><br />0232.224.282</div>
            <div><b>EMAIL</b><br />contact@cmrn.ro</div>
            <div><b>PROGRAM</b><br />Luni – Vineri<br />07:00 – 19:00</div>
          </div>
        </div>
      </section>

      <footer className="bg-[#079b96] py-7 text-center text-white">
        © 2026 Centrul Medical Recuperare Nicolina. Toate drepturile rezervate.
      </footer>
    </main>
  );
}