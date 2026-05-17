function ContactSection({
  formData,
  errors,
  isSubmitted,
  onInputChange,
  onSubmit,
}) {
  return (
    <section id="contact" className="cta-band contact-band">
      <h2>רוצה שנחזור אלייך עם הצעה מותאמת?</h2>
      <p>משאירים פרטים וקובעים שיחת ייעוץ קצרה עם הצוות של DOR JEWLERYS.</p>

      <form className="lead-form" onSubmit={onSubmit} noValidate>
        <label>
          שם מלא
          <input
            type="text"
            name="name"
            placeholder="לדוגמה: יעל כהן"
            value={formData.name}
            onChange={onInputChange}
            required
          />
          {errors.name ? <span className="error-text">{errors.name}</span> : null}
        </label>

        <label>
          טלפון
          <input
            type="tel"
            name="phone"
            placeholder="050-1234567"
            value={formData.phone}
            onChange={onInputChange}
            required
          />
          {errors.phone ? <span className="error-text">{errors.phone}</span> : null}
        </label>

        <label>
          פרטים נוספים (אופציונלי)
          <textarea
            name="notes"
            placeholder="איזה סוג תכשיט מעניין אותך?"
            value={formData.notes}
            onChange={onInputChange}
            rows="3"
          />
        </label>

        <button className="btn btn-primary form-submit" type="submit">
          שליחה לוואטסאפ
        </button>
        {isSubmitted ? (
          <p className="success-text">הטופס נפתח בוואטסאפ בהצלחה.</p>
        ) : null}
      </form>
    </section>
  )
}

export default ContactSection
