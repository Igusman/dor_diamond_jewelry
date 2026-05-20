import { useEffect, useState } from 'react'

const REVIEWS = [
  {
    text: 'הגימור פשוט מושלם. השרשרת שקניתי הפכה להיות הפריט הכי מחמיא בארון שלי מהיום הראשון.',
    author: 'מאיה ל.',
  },
  {
    text: 'שירות אישי ברמה אחרת. דור הבין בדיוק מה רציתי ויצר לי תכשיט מדהים שמתאים לסגנון שלי.',
    author: 'רונית כ.',
  },
  {
    text: 'קניתי עגילים לאמא שלי ליום הולדת והיא בכתה מרוב יופי. איכות שלא מוצאים בשום מקום.',
    author: 'יוסי מ.',
  },
  {
    text: 'הטבעת הגיעה באריזה יוקרתית ממש, הרגשתי שקיבלתי מתנה מבוטיק פריזאי. ממליצה בחום!',
    author: 'שירה ב.',
  },
]

function TestimonialSection() {
  const [active, setActive] = useState(0)
  const [sliding, setSliding] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setSliding(true)
      setTimeout(() => {
        setActive((prev) => (prev + 1) % REVIEWS.length)
        setSliding(false)
      }, 400)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (index) => {
    if (index === active) return
    setSliding(true)
    setTimeout(() => {
      setActive(index)
      setSliding(false)
    }, 400)
  }

  return (
    <section className="testimonial-carousel" aria-label="ביקורות לקוחות">
      <div className={`testimonial-slide ${sliding ? 'slide-out' : 'slide-in'}`}>
        <p className="testimonial-text">&ldquo;{REVIEWS[active].text}&rdquo;</p>
        <span className="testimonial-author">{REVIEWS[active].author}</span>
      </div>
      <div className="testimonial-dots" role="tablist">
        {REVIEWS.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === active}
            aria-label={`ביקורת ${i + 1}`}
            className={`dot ${i === active ? 'dot-active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  )
}

export default TestimonialSection
