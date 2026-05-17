function CollectionsSection({ collections }) {
  return (
    <section id="collections" className="collection-grid">
      <div className="section-head">
        <p className="hero-kicker">הקולקציות האחרונות</p>
        <h2>עיצוב שנשאר איתך הרבה אחרי הטרנד</h2>
      </div>
      <div className="cards">
        {collections.map((item) => (
          <article key={item.title} className="collection-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p className="card-price">{item.price}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CollectionsSection
