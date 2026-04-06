import { useEffect, useRef } from 'react'

function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const technologies = [
    'Python',
    'C',
    'JavaScript',
    'React',
    'TensorFlow / PyTorch',
    'Transformers',
    'PostgreSQL / MongoDB',
    'Git & Linux',
  ]

  return (
    <section className="section" id="about" ref={sectionRef}>
      <div className="container">
        <hr className="section-divider" />
        <div style={{ paddingTop: 'var(--space-4xl)' }}>
          <div className="reveal">
            <p className="section-label">
              <span className="num">01.</span> About
            </p>
            <h2 className="section-title">A bit about me</h2>
          </div>

          <div className="about-content">
            <div className="about-text reveal">
              <p>
                I&apos;m a <span className="hl">student developer</span> currently
                working on and exploring AI and systems — not just experimenting with ideas, but 
                turning them real.
              </p>
              <p>
                Right now I'm deep in building <span className="hl">Helium — an AI/OS-driven project</span>. Alongside that, Nano Pesu 
                and Vesper are two other AI-native projects I'm actively shipping — each one pushing
                me to think harder about how intelligence gets embedded into software at the OS level. 
              </p>
              <p>
              Outside academics I engage in gaming, cricket, and actively exploring emerging technologies to stay current with the tech landscape.
              </p>
            </div>

            <div className="about-tech reveal">
              <h3>Technologies I work with</h3>
              <div className="tech-grid">
                {technologies.map((tech, idx) => (
                  <div className="tech-item" key={idx}>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
