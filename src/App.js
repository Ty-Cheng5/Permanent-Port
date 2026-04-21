const projects = [
  {
    title: "MBathrooms",
    description: "Users can rate bathrooms in the University of Michigan campus. Won \"Best use of Cloudflare\" at the University of Michigan Hackathon.",
    stack: ["React", "SQL", "Python", "Cloudflare", "Google Maps"],
    repo: "https://github.com/yourusername/project",
    live: null,
  },
  {
    title: "Sequential Calculator",
    description: "Configured Controller and Datapath to input commands like Addition, Subtraction, Mutipulcation, and Division.",
    stack: ["Verilog"],
    repo: null,
    live: null,
  },
  {
    title: "ECOLLM",
    description: "Developed a Next.js dashboard integrated with AWS SageMaker to route LLM queries across geographically distributed endpoints, improving workload distribution efficiency. Awarded Best Societal Impact at University of Cincinnati Hackathon ",
    stack: ["NextJS", "AWS Sagemaker", "Tailwind CSS", "OpenAI"],
    repo: null,
    live: null,
  },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">

      <header>

        <nav className="w-full border-b border-slate-800 bg-slate-900/90 backdrop-blur">

          <div
            className="mx-auto flex max-w-6xl flex-row items-center justify-center px-6 py-6"
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', position: 'relative' }}
          >

            <ul
              className="flex flex-row flex-nowrap items-center gap-12 whitespace-nowrap text-sm font-medium"
              style={{ display: 'flex', flexDirection: 'row', gap: '3rem', listStyle: 'none', margin: 0, padding: 0 }}
            >

              <li>
                <a href="#home" className=" ">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="transition hover:text-cyan-400">
                  Experience
                </a>
              </li>

              <li>
                <a href="#projects" className="transition hover:text-cyan-400">
                  Projects
                </a>
              </li>

              <li>
                <a href="#blog" className="transition hover:text-cyan-400">
                  Blog
                </a>
              </li>

              <li>
                <a href="#contact" className="transition hover:text-cyan-400">
                  About
                </a>
              </li>

            </ul>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-28">

        <section id="home" className="flex flex-col items-center space-y-12 text-center">

          <div id="profile" className="flex items-start justify-center gap-6">
            <img
              src="https://i.pravatar.cc/160?img=12"
              alt="Profile"
              className="h-40 w-40 shrink-0 rounded-full object-cover ring-2 ring-cyan-400/70"
            />
            <div className="text-left">
              <h1 className="text-5xl font-semibold leading-tight md:text-8xl">Ty Senopole</h1>
              <p className="mt-3 text-2xl text-slate-300 md:text-3xl">Computer Engineering Student at the University of Michigan</p>
            </div>
          </div>

          <div className="w-full max-w-2xl rounded-xl border border-slate-800 bg-slate-900/40 p-6 text-left">
            <h2 className="mb-6 text-2xl font-semibold">Education and Experience</h2>
            <ol className="space-y-0">
              <li className="flex gap-5">
                <div className="flex w-4 flex-col items-center">
                  <div className="mt-1.5 h-4 w-4 shrink-0 rounded-full border-2 border-slate-950 bg-cyan-400" />
                  <div className="mt-1 w-0.5 grow bg-slate-700" aria-hidden />
                </div>
                <div className="pb-10 pt-0.5">
                  <h3 className="text-lg font-medium">University of Michigan - Ann Arbor</h3>
                  <p className="text-slate-300">Jan. 2026 – Current</p>
                </div>
              </li>
              
              <li className="flex gap-5">
                <div className="flex w-4 flex-col items-center">
                  <div className="mt-1.5 h-4 w-4 shrink-0 rounded-full border-2 border-slate-950 bg-cyan-400" />
                </div>
                <div className="pt-0.5">
                  <h3 className="text-lg font-medium">University of Michigan - Dearborn</h3>
                  <p className="text-slate-300">Aug. 2024 – Dec. 2025</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section id="projects" className="border-t border-slate-800 py-24">
          <h2 className="mb-4 text-center text-3xl font-semibold">Projects</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-300">
            Things I&apos;ve built or contributed to.
          </p>
          <ul className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
            {projects.map((p) => (
              <li
                key={p.title}
                className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/40 p-6 text-left transition hover:border-slate-700"
              >
                <h3 className="text-xl font-medium text-slate-100">{p.title}</h3>
                <p className="mt-2 flex-1 text-slate-300">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-slate-800 px-2 py-0.5 text-xs font-medium text-cyan-300"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
                  <a
                    href={p.repo}
                    className="text-cyan-400 transition hover:text-cyan-300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                  {p.live ? (
                    <a
                      href={p.live}
                      className="text-cyan-400 transition hover:text-cyan-300"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live demo
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </section>

      </main>

      
    </div>
  );
}

export default App;
