function GallerySection({ gallery }) {
  return (
    <section id="gallery" className="gallery-section">
      <div className="section-head">
        <p className="hero-kicker">גלריית השראה</p>
        <h2>פריטים אמיתיים מתוך קולקציות הזהב שלנו</h2>
      </div>
      <div className="gallery-grid">
        {gallery.map((image, index) => (
          <figure
            key={image.src}
            className="gallery-item"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  )
}

export default GallerySection
