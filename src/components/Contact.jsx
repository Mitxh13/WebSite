import { useEffect, useRef } from 'react'

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function KaggleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.281.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.075.378" />
    </svg>
  )
}

function Contact() {
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

  return (
    <section className="section" id="contact" ref={sectionRef}>
      <div className="container">
        <hr className="section-divider" />
        <div style={{ paddingTop: 'var(--space-4xl)' }}>
          <div className="contact-inner">
            <div className="reveal">
              <p className="section-label">
                <span className="num">05.</span> Contact
              </p>
              <h2 className="contact-heading">Let&apos;s connect.</h2>
              <p className="contact-text">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            <div className="contact-links reveal">
              <a
                href="mailto:kmitesh2006@gmail.com"
                className="contact-link"
                id="contact-email"
              >
                <MailIcon />
                Email
              </a>
              <a
                href="https://github.com/Mitxh13"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
                id="contact-github"
              >
                <GithubIcon />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/mitesh-kurumeti"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
                id="contact-linkedin"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
              <a
                href="https://kaggle.com/mitxh13"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
                id="contact-kaggle"
              >
                <KaggleIcon />
                Kaggle
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
