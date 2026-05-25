import { useEffect, useState } from 'react'
import dp from './assets/dp.jpg'
import profile from './assets/leon.jpg'
import me from './assets/me.jpg'

export default function Portfolio() {
  const profileImages = [
    { src: profile, alt: 'Rehnaf Leon profile portrait' },
    { src: dp, alt: 'Rehnaf Leon alternate portrait' },
    { src: me, alt: 'Rehnaf Leon casual portrait' },
  ]

  const [activeProfileImage, setActiveProfileImage] = useState(0)

  useEffect(() => {
    const sliderTimer = window.setInterval(() => {
      setActiveProfileImage((currentImage) => (currentImage + 1) % profileImages.length)
    }, 2000)

    return () => window.clearInterval(sliderTimer)
  }, [profileImages.length])

  const projects = [
    {
      title: 'Road Damage Detection',
      description:
        'Deep learning road damage detection with YOLOv8 and computer vision workflows for smart transportation analysis.',
      tech: ['YOLOv8', 'PyTorch', 'OpenCV', 'Computer Vision'],
      metric: '97K',
      label: 'image patches',
    },
    {
      title: 'Shortcut Learning Detection',
      description:
        'Research pipeline for surfacing spurious correlations and shortcut learning behavior inside deep neural networks.',
      tech: ['Deep Learning', 'SAE', 'PyTorch', 'Research'],
      metric: 'SAE',
      label: 'feature probes',
    },
    {
      title: 'Waterbirds Bias Analysis',
      description:
        'Bias and contrast-set analysis using activation extraction, interpretability methods, and controlled evaluation.',
      tech: ['Interpretability', 'Bias Analysis', 'Python', 'AI Research'],
      metric: 'OOD',
      label: 'bias tests',
    },
    {
      title: 'RT-DETR Training Pipeline',
      description:
        'Object detection training workflow with RT-DETR, advanced augmentation, and GPU optimization strategies.',
      tech: ['RT-DETR', 'Ultralytics', 'Deep Learning', 'CUDA'],
      metric: 'GPU',
      label: 'training stack',
    },
  ]

  const skills = [
    'Python',
    'PyTorch',
    'YOLOv8',
    'OpenCV',
    'Deep Learning',
    'Computer Vision',
    'Machine Learning',
    'Git & GitHub',
    'LaTeX',
    'React',
    'Tailwind CSS',
    'Research & Analysis',
  ]

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#030407] text-slate-100">
      <div className="fixed inset-0 -z-10 futuristic-grid" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_10%,rgba(0,240,255,0.22),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(255,0,221,0.16),transparent_24%),radial-gradient(circle_at_50%_90%,rgba(87,255,159,0.12),transparent_28%)]" />
      <div className="fixed inset-0 -z-10 scanline opacity-30" />

      <nav className="sticky top-0 z-50 border-b border-cyan-300/10 bg-[#030407]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-mono text-sm font-bold uppercase tracking-[0.32em] text-cyan-200">
            Rehnaf<span className="text-fuchsia-300">.Leon</span>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 text-sm text-slate-300 md:flex">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-full px-4 py-2 transition hover:bg-cyan-300/10 hover:text-cyan-100"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main id="top">
        <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.22em] text-cyan-100 shadow-[0_0_32px_rgba(34,211,238,0.16)]">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_#6ee7b7]" />
              AI / Deep Learning / Computer Vision
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl xl:text-8xl">
              Engineering intelligent systems for the next interface.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              CSE student focused on artificial intelligence, deep learning, and
              computer vision, building research-driven systems that turn models
              into useful, inspectable products.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-cyan-300 px-7 py-3 font-bold text-slate-950 shadow-[0_0_34px_rgba(103,232,249,0.35)] transition hover:-translate-y-0.5 hover:bg-cyan-200"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-3 font-bold text-slate-100 transition hover:-translate-y-0.5 hover:border-fuchsia-300/60 hover:text-fuchsia-100"
              >
                Start Collaboration
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[420px]">
            <div className="absolute -inset-6 rounded-full border border-cyan-300/10 bg-cyan-300/[0.03] blur-sm" />
            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.045] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.55)] backdrop-blur-xl">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />
              <div className="relative mx-auto aspect-square w-full max-w-[330px]">
                <div className="absolute -inset-5 rounded-full bg-[conic-gradient(from_120deg,rgba(34,211,238,0.95),rgba(217,70,239,0.35),rgba(16,185,129,0.45),rgba(34,211,238,0.95))] opacity-80 blur-xl" />
                <div className="absolute -inset-2 rounded-full border border-cyan-200/60 shadow-[0_0_32px_rgba(34,211,238,0.7),inset_0_0_28px_rgba(34,211,238,0.22)]" />
                <div className="relative h-full overflow-hidden rounded-full border-4 border-cyan-200/70 bg-slate-950 shadow-[0_0_50px_rgba(34,211,238,0.45)]">
                  {profileImages.map((image, index) => (
                    <img
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      className={`absolute inset-0 h-full w-full object-cover saturate-125 transition-opacity duration-1000 ease-in-out ${
                        activeProfileImage === index ? 'opacity-95' : 'opacity-0'
                      }`}
                    />
                  ))}
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_18%,transparent_44%,rgba(3,4,7,0.1)_64%,rgba(3,4,7,0.72)_100%)]" />
                  <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20" />
                </div>
              </div>

              <div className="mt-7 text-center">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-100">AI Developer</p>
                <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">Research / Vision / Innovation</h2>
                <div className="mt-4 flex justify-center gap-2">
                  {profileImages.map((image, index) => (
                    <span
                      key={`${image.src}-indicator`}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        activeProfileImage === index ? 'w-7 bg-cyan-200 shadow-[0_0_14px_rgba(103,232,249,0.85)]' : 'w-1.5 bg-white/25'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 font-mono text-xs uppercase tracking-[0.14em] text-slate-300">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                  <span className="block text-lg font-black text-cyan-200">4+</span>
                  Projects
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                  <span className="block text-lg font-black text-fuchsia-200">ML</span>
                  Research
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                  <span className="block text-lg font-black text-emerald-200">CV</span>
                  Vision
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.28em] text-cyan-200">System Profile</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">About Me</h2>
            </div>
            <p className="text-xl leading-9 text-slate-300">
              I am a Computer Science student interested in AI, machine learning,
              and deep learning research. My current work focuses on computer
              vision, bias analysis, object detection, and neural network
              interpretability.
            </p>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.28em] text-fuchsia-200">Capability Matrix</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Skills & Technologies</h2>
            </div>
            <p className="max-w-md text-slate-400">
              Tools I use to prototype, train, evaluate, and ship modern AI systems.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-300/10"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-cyan-300 to-fuchsia-300 opacity-60" />
                <span className="relative font-medium text-slate-100">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12">
            <p className="font-mono text-sm uppercase tracking-[0.28em] text-emerald-200">Featured Builds</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Projects</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.055]"
              >
                <div className="absolute right-6 top-6 font-mono text-7xl font-black text-white/[0.035]">
                  0{index + 1}
                </div>
                <div className="relative">
                  <div className="mb-8 flex items-start justify-between gap-5">
                    <div>
                      <p className="font-mono text-sm uppercase tracking-[0.2em] text-cyan-200">{project.label}</p>
                      <h3 className="mt-3 text-2xl font-black text-white">{project.title}</h3>
                    </div>
                    <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-center font-mono text-cyan-100">
                      <span className="block text-2xl font-black">{project.metric}</span>
                    </div>
                  </div>

                  <p className="mb-7 leading-7 text-slate-300">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-sm text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
          <div className="relative overflow-hidden rounded-[34px] border border-cyan-300/20 bg-cyan-300/[0.055] p-8 text-center shadow-[0_0_80px_rgba(34,211,238,0.11)] md:p-14">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />
            <div className="absolute -top-24 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />

            <p className="font-mono text-sm uppercase tracking-[0.28em] text-cyan-100">
              Open Channel
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-tight text-white md:text-6xl">
              Let&apos;s Build The Future With AI
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Passionate about Artificial Intelligence, Computer Vision, and Deep
              Learning research. Open to collaboration, research opportunities,
              innovative projects, and impactful technology development.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <a
                href="mailto:rehnafleon@gmail.com"
                className="rounded-full bg-cyan-300 px-8 py-4 font-bold text-slate-950 transition duration-300 hover:scale-105 hover:bg-cyan-200 hover:shadow-[0_0_35px_rgba(103,232,249,0.45)]"
              >
                Email Me
              </a>

              <a
                href="https://github.com/viperleon"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 font-bold text-slate-100 transition duration-300 hover:border-fuchsia-300/60 hover:bg-fuchsia-400/10 hover:text-fuchsia-100 hover:shadow-[0_0_30px_rgba(217,70,239,0.25)]"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/rayhan-amin-0a3537302"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 font-bold text-slate-100 transition duration-300 hover:border-cyan-300/60 hover:bg-cyan-400/10 hover:text-cyan-100 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
              >
                LinkedIn
              </a>

              <a
                href="https://www.facebook.com/rehnafleon"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 font-bold text-slate-100 transition duration-300 hover:border-blue-300/60 hover:bg-blue-400/10 hover:text-blue-100 hover:shadow-[0_0_30px_rgba(96,165,250,0.25)]"
              >
                Facebook
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
