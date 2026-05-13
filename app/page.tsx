const problemPoints = [
  {
    title: "Skilled labor bottleneck",
    body: "Training reliable sharpeners takes time, and quality varies by operator.",
  },
  {
    title: "Repetitive knife volume",
    body: "Standard dull knives create predictable workload that still demands manual attention.",
  },
  {
    title: "Inconsistent turnaround",
    body: "Businesses need sharp tools back quickly, especially in high-volume environments.",
  },
  {
    title: "Geometry drift",
    body: "Poor sharpening can remove too much material or gradually change the edge.",
  },
];

const capabilities = [
  {
    label: "Inspection",
    title: "Vision-guided inspection",
    body: "Maps the blade edge before sharpening instead of relying only on manual setup.",
  },
  {
    label: "Control",
    title: "Controlled edge restoration",
    body: "Restores each edge through measured contact: the right pressure, angle, and number of passes for the knife in front of it.",
  },
  {
    label: "Motion",
    title: "Repeatable sharpening motion",
    body: "Robotic motion keeps the edge at its intended angle, turning sharpening from a hand-held approximation into a controlled return to proper geometry.",
  },
  {
    label: "Scope",
    title: "Standard-knife first scope",
    body: "Initial development focuses on undamaged, double-bevel kitchen knives where automation can deliver clear workflow value.",
  },
];

const values = [
  "Increase throughput on common knives",
  "Reduce dependence on low-level manual sharpening labor",
  "Improve consistency across repeated jobs",
  "Free experienced sharpeners for complex and higher-margin work",
  "Help kitchens and shops shorten tool-maintenance turnaround",
];

const customers = [
  {
    code: "SHOP",
    title: "Sharpening shops",
    body: "Move standard knives through a repeatable process and increase daily capacity.",
  },
  {
    code: "KITCHEN",
    title: "Restaurants and professional kitchens",
    body: "Keep prep tools sharp without waiting on outside sharpening cycles.",
  },
  {
    code: "BUTCHER",
    title: "Butcher shops",
    body: "Support frequent edge maintenance in high-use cutting environments.",
  },
  {
    code: "SERVICE",
    title: "Knife-service operators",
    body: "Improve consistency across recurring sharpening volume.",
  },
];

const developmentPriorities = [
  "Reliable edge detection",
  "Repeatable sharpening geometry",
  "Controlled pressure and motion",
  "Safe enclosed operation",
  "Shop-ready workflow integration",
  "Low operator attention",
];

const team = [
  {
    name: "Hunter Lin",
    role: "Founder, Noera Technologies",
    body: "Industrial engineering background, previous experience with Vantage Machine Tools, and years of hands-on study in knives, sharpening systems, and edge performance.",
  },
  {
    name: "Nico Kokonas",
    role: "Lead Engineer, Noera Technologies",
    body: "Senior software engineer with experience across automation, systems architecture, security, embedded/hardware-adjacent systems, and satellite imaging.",
  },
];

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-[#b49a6a]">
      <span className="text-[#716c62]">{number}</span>
      <span className="h-px w-10 bg-[#6e6048]" />
      {children}
    </p>
  );
}

function TechnicalVisual() {
  return (
    <div className="relative min-h-[360px] overflow-hidden border border-[#36332d] bg-[#11110f] shadow-2xl shadow-black/40 sm:min-h-[480px]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(187,178,155,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(187,178,155,0.055)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="absolute inset-6 border border-[#29261f]" />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 720 560"
        role="img"
        aria-labelledby="technical-visual-title"
      >
        <title id="technical-visual-title">
          Technical drawing of knife bevel angle geometry
        </title>
        <defs>
          <linearGradient id="bevelSteel" x1="310" x2="430" y1="92" y2="446">
            <stop stopColor="#f0eadb" stopOpacity=".8" />
            <stop offset=".42" stopColor="#8a8d86" stopOpacity=".34" />
            <stop offset="1" stopColor="#d2c7ad" stopOpacity=".72" />
          </linearGradient>
        </defs>

        <path d="M358 92 L358 432" stroke="#69655a" strokeWidth="1.2" strokeDasharray="7 9" />
        <path d="M236 432 H528" stroke="#69655a" strokeWidth="1.2" />

        <path
          d="M358 88 L458 432 H258 Z"
          fill="url(#bevelSteel)"
          stroke="#d8cfbb"
          strokeWidth="2"
        />
        <path
          d="M358 88 L358 432"
          fill="none"
          stroke="#f0e8d8"
          strokeOpacity=".42"
          strokeWidth="1.4"
        />
        <path
          d="M358 88 L458 432"
          fill="none"
          stroke="#c2a166"
          strokeWidth="2.2"
        />
        <path
          d="M358 88 L258 432"
          fill="none"
          stroke="#c2a166"
          strokeWidth="2.2"
        />
        <path
          d="M358 88 L258 432 M358 88 L458 432"
          fill="none"
          stroke="#a34733"
          strokeDasharray="7 12"
          strokeWidth="1.4"
        />
        <path d="M358 210 A88 88 0 0 1 383 124" fill="none" stroke="#b49a6a" strokeWidth="1.3" />
        <path d="M358 210 A88 88 0 0 0 333 124" fill="none" stroke="#b49a6a" strokeWidth="1.3" />
        <path d="M294 432 V452 M358 432 V462 M422 432 V452" stroke="#8b806c" strokeWidth="1.2" />
        <path d="M258 452 H458" stroke="#8b806c" strokeWidth="1.2" />
        <circle cx="358" cy="88" r="6" fill="#11110f" stroke="#a34733" strokeWidth="1.5" />
        <circle cx="358" cy="432" r="4" fill="#c2a166" />
        <text x="278" y="58" fill="#b49a6a" fontSize="13" fontFamily="monospace" letterSpacing="3">
          BEVEL CROSS SECTION
        </text>
        <text x="392" y="168" fill="#d6cbb1" fontSize="12" fontFamily="monospace" letterSpacing="2">
          15 DEG
        </text>
        <text x="271" y="482" fill="#8f8877" fontSize="11" fontFamily="monospace" letterSpacing="2">
          EDGE CENTERLINE
        </text>
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0b0a] text-[#e6dfcf]">
      <section className="relative border-b border-[#27241f]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_8%,rgba(178,134,69,0.11),transparent_30%),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:auto,72px_72px]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-8 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-12">
          <header className="flex items-center justify-between border-b border-[#312d26] pb-5 lg:col-span-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-[#b49a6a]">Noera Labs</p>
              <p className="mt-1 text-sm text-[#8e8778]">Automated edge-restoration systems</p>
            </div>
            <a
              href="mailto:hunter.s.lin@gmail.com"
              className="hidden border border-[#625840] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#d9c9a2] transition hover:border-[#b49a6a] hover:bg-[#b49a6a]/10 sm:inline-flex"
            >
              Contact
            </a>
          </header>

          <div className="flex flex-col justify-center py-8 lg:py-20">
            <SectionLabel number="00">Prototype platform</SectionLabel>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-normal text-[#f2ecdd] sm:text-6xl lg:text-7xl">
              Automated edge restoration for professional knife workflows.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#c3b9a5] sm:text-xl">
              Noera builds automated edge-restoration systems that inspect blade geometry,
              identify the edge, and restore standard knives through controlled pressure,
              angle, and motion.
              
            </p>
            <p className="mt-5 max-w-xl font-mono text-xs uppercase leading-6 tracking-[0.18em] text-[#8f8877]">
              Built for sharpening shops, kitchens, butcher shops, and commercial knife-service operations.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hunter.s.lin@gmail.com"
                className="inline-flex items-center justify-center border border-[#b49a6a] bg-[#b49a6a] px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-[#15120d] transition hover:bg-[#d0b87f]"
              >
                Contact Noera
              </a>
              <a
                href="#development"
                className="inline-flex items-center justify-center border border-[#514b40] px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-[#d9cfba] transition hover:border-[#8d8065] hover:bg-[#ffffff0a]"
              >
                View prototype progress
              </a>
            </div>
          </div>

          <TechnicalVisual />
        </div>
      </section>

      <section className="border-b border-[#27241f] bg-[#10100e] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel number="01">Business problem</SectionLabel>
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-[#eee7d6] sm:text-5xl">
              Sharp knives are essential. Your skills should go to the jobs that need them most.
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#bdb4a2]">
              Professional kitchens, butchers, and sharpening businesses depend on sharp edges every day. But
              consistent sharpening still requires time, training, and judgment from experienced operators. Common dull
              knives often consume the same attention that could be spent on higher-value repair, reprofiling, or
              specialty work.
            </p>
          </div>
          <div className="grid gap-px border border-[#343029] bg-[#343029] sm:grid-cols-2">
            {problemPoints.map((point, index) => (
              <article key={point.title} className="bg-[#141310] p-6">
                <p className="font-mono text-[11px] text-[#7f7768]">P-{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-10 text-xl font-medium text-[#efe5cf]">{point.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#aaa18f]">{point.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#27241f] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="02">System capabilities</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-3xl font-semibold leading-tight text-[#eee7d6] sm:text-5xl">
                A vision-guided sharpening system built for repeatable edge restoration.
              </h2>
              <p className="mt-7 text-base leading-8 text-[#bdb4a2]">
                Noera&apos;s system is being developed to inspect blade geometry, identify the edge, and guide a
                controlled sharpening process with less operator attention per knife.
              </p>
            </div>
            <div className="border border-[#39342b]">
              {capabilities.map((capability) => (
                <article
                  key={capability.title}
                  className="grid gap-4 border-b border-[#39342b] p-5 last:border-b-0 sm:grid-cols-[150px_1fr] sm:p-6"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#b49a6a]">
                    {capability.label}
                  </p>
                  <div>
                    <h3 className="text-xl font-medium text-[#efe5cf]">{capability.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#aaa18f]">{capability.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#27241f] bg-[#0f0e0c] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionLabel number="03">Workflow value</SectionLabel>
            <h2 className="text-3xl font-semibold leading-tight text-[#eee7d6] sm:text-5xl">
              Help every knife get the right kind of attention.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-[#bdb4a2]">
              <p>
                Good sharpening begins by seeing what each knife requires. Noera helps shops and kitchens move common
                edges through a measured, repeatable process with more consistency, less delay, and less strain on
                skilled workers. Experienced sharpeners can then spend their time where judgment matters most: repairs,
                thinning, damaged geometry, and specialty work.
              </p>
              <p>
                For the business, this means steadier output, cleaner workflow, faster turnaround, and better use of the
                people who know the craft.
              </p>
            </div>
          </div>
          <ul className="self-end border-y border-[#3a3429]">
            {values.map((value, index) => (
              <li key={value} className="flex gap-5 border-b border-[#2e2a23] py-5 last:border-b-0">
                <span className="font-mono text-xs text-[#a34733]">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-lg text-[#ded3bd]">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-[#27241f] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="04">Initial customers</SectionLabel>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-[#eee7d6] sm:text-5xl">
            Designed for businesses where sharp edges affect daily operations.
          </h2>
          <div className="mt-10 grid gap-px border border-[#363128] bg-[#363128] md:grid-cols-2 lg:grid-cols-4">
            {customers.map((customer) => (
              <article key={customer.title} className="bg-[#12110f] p-6">
                <div className="mb-16 inline-flex border border-[#4b4437] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-[#b49a6a]">
                  {customer.code}
                </div>
                <h3 className="text-xl font-medium text-[#efe5cf]">{customer.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#aaa18f]">{customer.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="development" className="border-b border-[#27241f] bg-[#11100e] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel number="05">Development focus</SectionLabel>
            <p className="max-w-2xl text-2xl leading-10 text-[#e6ddc9]">
              Noera is building a working MVP for standard double-bevel kitchen knives. The goal is to prove reliable
              inspection, controlled sharpening motion, and repeatable results.
            </p>
          </div>
          <div className="grid gap-px border border-[#3a3429] bg-[#3a3429] sm:grid-cols-2">
            {developmentPriorities.map((priority, index) => (
              <div key={priority} className="bg-[#15130f] p-6">
                <p className="font-mono text-[11px] text-[#766f60]">D-{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-8 text-lg text-[#ded3bd]">{priority}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#27241f] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel number="06">Tool philosophy</SectionLabel>
          <h2 className="text-4xl font-semibold leading-tight text-[#f0e8d8] sm:text-6xl">
            Preserve the edge. Preserve the tool.
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#bdb4a2]">
            A knife is shaped by use. Every sharpening changes it. Noera is built around a simple belief: the best
            sharpening only removes what need to be removes, restores what needs to be
            restored, and leaves the tool closer to what it should be.
          </p>
        </div>
      </section>

      <section className="border-b border-[#27241f] bg-[#10100e] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="07">Team</SectionLabel>
          <h2 className="max-w-4xl text-3xl font-semibold leading-tight text-[#eee7d6] sm:text-5xl">
            Built by a team combining knife knowledge, robotics development, and production software experience.
          </h2>
          <div className="mt-10 grid gap-px border border-[#363128] bg-[#363128] md:grid-cols-2">
            {team.map((member) => (
              <article key={member.name} className="bg-[#141310] p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#b49a6a]">{member.role}</p>
                <h3 className="mt-8 text-3xl font-medium text-[#f0e8d8]">{member.name}</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-[#aaa18f]">{member.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 border-y border-[#373126] py-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <SectionLabel number="08">Contact</SectionLabel>
            <h2 className="text-4xl font-semibold text-[#f0e8d8] sm:text-6xl">Interested in Noera?</h2>
            <p className="mt-7 max-w-3xl text-base leading-8 text-[#bdb4a2]">
              Noera is working with sharpening shops, restaurants, butchers, knife-service operators, and technical
              collaborators who understand the operational cost of maintaining sharp tools at scale.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <a
              href="mailto:hunter.s.lin@gmail.com"
              className="inline-flex border border-[#b49a6a] bg-[#b49a6a] px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] text-[#15120d] transition hover:bg-[#d0b87f]"
            >
              Contact Hunter
            </a>
            <a
              href="mailto:hunter.s.lin@gmail.com"
              className="font-mono text-sm text-[#d9cfba] underline decoration-[#625840] underline-offset-8 hover:text-[#f2e8d2]"
            >
              hunter.s.lin@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
