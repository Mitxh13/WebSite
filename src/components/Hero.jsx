function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-glow" aria-hidden="true"></div>
      <div className="container hero-content">
        <div className="animate-in">
        </div>

        <p className="hero-greeting animate-in animate-in-delay-1">
          <span className="line"></span>
          hey, I&apos;m
        </p>

        <h1 className="hero-name animate-in animate-in-delay-2">
          Mitesh
        </h1>

        <p className="hero-tagline animate-in animate-in-delay-3">
          I build <span className="highlight">Digital Reality</span> &amp; AI <span className="highlight">systems</span>.
        </p>

        <p className="hero-description animate-in animate-in-delay-4">
          Computer Science &amp; Engineering student building scalable,
          real-world applications. Focused on AI systems, backend engineering,
          and gaming.

        </p>

        <div className="hero-cta animate-in animate-in-delay-5">
          <a href="#projects" className="hero-cta-primary">
            View my work
            <span>↓</span>
          </a>
          <a href="#contact" className="hero-cta-secondary">
            Get in touch <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
