function HeroSection() {
  return (
    <section className="hero" aria-label="אזור פתיחה לדף נחיתה לתכשיטי זהב">
      <div className="hero-content">
        <p className="hero-kicker">עבודת יד בזהב 18K</p>
        <h1>תכשיטי זהב עם נוכחות שלא מפסיקים להחמיא עליה</h1>
        <p className="hero-copy">
          ב-dor_diamond_jewelry מעצבים עבורך פריטים יוקרתיים שמחברים בין קלאסיקה
          לקו מודרני. כל תכשיט נוצר בקפידה כדי להרגיש אישי, מדויק, ובלתי
          נשכח.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">
            לקביעת פגישה פרטית
          </a>
          <a className="btn btn-secondary" href="#gallery">
            לצפייה בגלריה
          </a>
        </div>
      </div>
      <div className="hero-card" aria-label="מוצר נבחר">
        <p className="card-label">הפריט הנבחר</p>
        <h2>שרשרת Aurora</h2>
        <p>שרשרת צוואר בזהב 18K עם הברקה ידנית ושכבות גימור במראה אלגנטי.</p>
        <p className="card-price">₪8,900</p>
      </div>
    </section>
  )
}

export default HeroSection
