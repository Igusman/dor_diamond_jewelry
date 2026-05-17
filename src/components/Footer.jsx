function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M12 21s6-5.2 6-11a6 6 0 10-12 0c0 5.8 6 11 6 11z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.1" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M8.5 5.5c.4-.4 1-.5 1.5-.2l2.1 1.2c.5.3.8.9.6 1.5l-.7 2c-.1.5 0 1 .4 1.4l2.8 2.8c.4.4.9.5 1.4.4l2-.7c.6-.2 1.2.1 1.5.6l1.2 2.1c.3.5.2 1.1-.2 1.5l-1.2 1.2c-.7.7-1.8 1-2.8.8-3.3-.6-6.3-2.3-8.8-4.8-2.5-2.5-4.2-5.5-4.8-8.8-.2-1 .1-2.1.8-2.8l1.2-1.2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Footer() {
  return (
    <footer className="site-footer" aria-label="פרטי קשר וזכויות יוצרים">
      <div className="footer-links">
        <a
          className="footer-link"
          href="https://www.instagram.com/dor_diamond_jewelry/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          title="Instagram"
        >
          <InstagramIcon />
        </a>

        <a
          className="footer-link"
          href="https://www.google.com/maps/search/?api=1&query=%D7%94%D7%92%D7%95%D7%A9%D7%9F%2016%2C%20%D7%A7%D7%A8%D7%99%D7%99%D7%AA%20%D7%9E%D7%95%D7%A6%D7%A7%D7%99%D7%9F"
          target="_blank"
          rel="noreferrer"
          aria-label="הגושן 16, קריית מוצקין"
          title="הגושן 16, קריית מוצקין"
        >
          <LocationIcon />
        </a>

        <a
          className="footer-link"
          href="tel:+972559751300"
          aria-label="972559751300"
          title="972559751300"
        >
          <PhoneIcon />
        </a>
      </div>

      <p className="footer-copyright">כל הזכויות שמורות ל-dor_diamond_jewelry</p>
    </footer>
  )
}

export default Footer