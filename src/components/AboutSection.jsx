function AboutSection() {
  return (
    <section id="about" className="about-section" aria-label="אודות המותג">
      <div className="section-head">
        <p className="hero-kicker">אודות</p>
        <h2>מותג בוטיק שנבנה סביב דיוק, רגש ונוכחות</h2>
      </div>

      <div className="about-grid">
        <article className="about-card">
          <h3>הסיפור שלנו</h3>
          <p>
            dor_diamond_jewelry הוקם מתוך אהבה לתכשיטים שמספרים סיפור אישי. כל
            פריט מתחיל ברעיון, ממשיך לבחירת חומרי גלם מוקפדת ומסתיים בעבודת יד
            קפדנית שמעניקה תחושה יוקרתית אמיתית.
          </p>
        </article>

        <article className="about-card">
          <h3>מה חשוב לנו</h3>
          <p>
            אנחנו משלבים בין קלאסיקה לנגיעה מודרנית, בלי להתפשר על איכות. המטרה
            שלנו היא שתענדי תכשיט שמרגיש חלק ממך, ולא רק פריט יפה לאירוע אחד.
          </p>
        </article>
      </div>
    </section>
  )
}

export default AboutSection