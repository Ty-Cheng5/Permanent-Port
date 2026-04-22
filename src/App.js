const projects = [
  {
    title: "MBathrooms",
    description: "Users can rate bathrooms in the University of Michigan campus. Won \"Best use of Cloudflare\" at the University of Michigan Hackathon.",
    stack: ["React", "SQL", "Python", "Cloudflare", "Google Maps"],
    repo: "https://github.com/aotlacan/hackathon-25",
    live: null,
  },
  {
    title: "Sequential Calculator",
    description: "Configured Controller and Datapath to input commands like Addition, Subtraction, Mutipulcation, and Division. Simulated test cases on FPGA ModelSim.",
    stack: ["Verilog"],
    repo: null,
    live: null,
  },
  {
    title: "ECOLLM",
    description: "Developed a Next.js dashboard integrated with AWS SageMaker to route LLM queries across geographically distributed endpoints, improving workload distribution efficiency. Awarded Best Societal Impact at University of Cincinnati Hackathon ",
    stack: ["NextJS", "AWS Sagemaker", "Tailwind CSS", "OpenAI"],
    repo: "https://github.com/kllarena07/ecollm",
    live: null,
  },
  {
    title: "NFL Data Anaylsis",
    description: "Built data analysis pipelines in Python (Jupyter/Colab) to clean, visualize, and model 2025 NFL player data, generating predictive insights on player performance trends.",
    stack: ["Python"],
    repo: null,
    live: null,
  },
  {
    title: "Euchre",
    description: "Used Object Oriented Programming, Inheritance and Polymorphism, and Recursion to recreate the card game Euchre. ",
    stack: ["C++"],
    repo: null,
    live: null,
  }
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
                <a href="#home" className="transition hover:text-cyan-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="transition hover:text-cyan-400">
                  About
                </a>
              </li>

              <li>
                <a href="#experience" className="transition hover:text-cyan-400">
                  Experience
                </a>
              </li>

              <li>
                <a href="#projects" className="transition hover:text-cyan-400">
                  Projects
                </a>
              </li>

            </ul>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-28">

        <section id="home" className="flex: 1 items-center space-y-12 text-center">

          <div id="profile" className="flex items-start justify-center gap-6">
            <img
              src={`${process.env.PUBLIC_URL}/pfp.png`}
              alt="Profile"
              className="h-40 w-40 shrink-0 rounded-full object-cover ring-2 ring-cyan-400/70"
            />
            <div className="text-left">
              <h1 className="text-5xl font-semibold leading-tight md:text-8xl">Ty Senopole</h1>
              <p className="mt-3 text-2xl text-slate-300 md:text-3xl">Computer Engineering Student at the University of Michigan</p>
            </div>
          </div>
        </section>

        <div className="flex gap-10">
          <p>LinkedIn</p>
          <p>Github</p>
        </div>
        
        <section id="about" className="py-24 text-center text-slate-400">
        </section>

        <h2 className="mb-6 text-2xl font-semibold">Experience</h2>
        <section id="experience" className="w-full max-w-2xl rounded-xl border border-slate-800 bg-slate-900/40 p-6 ">
          <ol className="space-y-0">
            <li className="flex gap-5">
              <div className="flex w-4 flex-col items-center">
                <div className="mt-1.5 h-4 w-4 shrink-0 rounded-full border-2 border-slate-950 bg-cyan-400" />
                <div className="mt-1 w-0.5 grow bg-slate-700" aria-hidden />
              </div>
              <div className="pb-10 pt-0.5">
                <h3 className="text-lg font-medium">Research Assistant</h3>
                <p className="text-slate-300">Aug. 2026 – Apr. 2027</p>
                <p className="mt-1 text-sm text-slate-500">
                  Selected for the Undergraduate Research Opportunity Program (UROP) to conduct engineering-focused research
                </p>
              </div>
            </li>
            
            <li className="flex gap-5">
              <div className="flex w-4 flex-col items-center">
                <div className="mt-1.5 h-4 w-4 shrink-0 rounded-full border-2 border-slate-950 bg-cyan-400" />
              </div>
              <div className="pt-0.5">
                <h3 className="text-lg font-medium">Michigan Data Science Team</h3>
                <p className="text-slate-300">Jan. 2026 – Apr. 2026</p>
                <p className="mt-1 text-sm text-slate-500">
                  Team Member
                </p>
              </div>
            </li>
          </ol>
        </section>
        

        <section id="projects" className="py-24">
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
                  {p.repo ? (
                    <a
                      href={p.repo}
                      className="text-cyan-400 transition hover:text-cyan-300"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  ) : null}
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
