import { BrainCircuit, User } from 'lucide-react'
import './App.css'
import {
  COURSE_SESSIONS,
  COURSE_YEARS,
  FACILITATOR_TEXT,
  SITE_STATS,
  type CourseSession,
} from './courseData'

function CourseCard({ course, index }: { course: CourseSession; index: number }) {
  const Icon = course.icon
  const side = index % 2 === 0 ? 'left' : 'right'

  return (
    <article className={`timeline-item ${side}`} aria-labelledby={`session-${course.session}`}>
      <div className={`course-card ${course.featured ? 'featured' : ''}`}>
        {course.featured ? <span className="featured-label">Featured</span> : null}
        <span className="timeline-dot" aria-hidden="true" />
        <div className="card-meta">
          <span className="icon-box">
            <Icon size={20} strokeWidth={1.9} aria-hidden="true" />
          </span>
          <time dateTime={course.isoDate}>{course.monthDay}</time>
        </div>
        <h3 id={`session-${course.session}`}>{course.title}</h3>
        <p>{course.subtitle}</p>
      </div>
    </article>
  )
}

function App() {
  return (
    <div className="site-shell">
      <div className="noise" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <nav className="top-nav" aria-label="Primary">
        <a className="brand" href="#top" aria-label="NTU EMBA GenAI Lab home">
          <span className="brand-mark">
            <BrainCircuit size={24} strokeWidth={1.8} aria-hidden="true" />
          </span>
          <span>NTU EMBA GenAI Lab</span>
        </a>
        <a className="about-link" href="#about">
          <User size={16} aria-hidden="true" />
          <span>About Facilitator</span>
        </a>
      </nav>

      <header id="top" className="hero-section">
        <p className="hero-kicker">
          <span aria-hidden="true" />
          Intelligence Augmented
        </p>
        <h1>The Augmented Leader</h1>
        <div>
          <p className="hero-subtitle">Navigating the Generative AI Frontier</p>
          <p className="hero-zh">台大 EMBA：AI 時代的共同探索歷程</p>
        </div>
        <div className="hero-stats" aria-label="Course overview">
          {SITE_STATS.map((stat) => {
            const Icon = stat.icon
            return (
              <div className="stat" key={stat.label}>
                <Icon size={18} aria-hidden="true" />
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            )
          })}
        </div>
      </header>

      <main className="timeline-wrap">
        <div className="year-nav" aria-label="Course years">
          {COURSE_YEARS.map((year) => (
            <a href={`#year-${year.year}`} key={year.year}>
              {year.year}
            </a>
          ))}
        </div>

        <div className="timeline-line" aria-hidden="true" />
        {COURSE_YEARS.map((year) => {
          const sessions = COURSE_SESSIONS.filter((course) => course.year === year.year)

          return (
            <section className="year-section" id={`year-${year.year}`} key={year.year}>
              <div className="year-badge">
                <h2>{year.year}</h2>
              </div>
              <div className="year-copy">
                <p>{year.theme}</p>
                <span>{year.description}</span>
              </div>
              <div className="year-sessions">
                {sessions.map((course) => (
                  <CourseCard course={course} index={course.session - 1} key={course.isoDate} />
                ))}
              </div>
            </section>
          )
        })}

      </main>

      <footer id="about" className="facilitator">
        <div className="facilitator-card">
          <img src="/images/facilitator.jpg" alt="Patricia Liu" />
          <div>
            <h2>About the Facilitator</h2>
            {FACILITATOR_TEXT.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <p className="copyright">&copy; 2026 Patricia Liu. Curated for NTU EMBA.</p>
      </footer>
    </div>
  )
}

export default App
