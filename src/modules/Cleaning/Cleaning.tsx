import s from "./Cleaning.module.scss";

export const Cleaning = () => {
  return (
    <div className={s.cleaning}>
      {/* Banner */}
      <section className={s.banner}>
        <video
          className={s.banner__video}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={(e) => e.currentTarget.classList.add(s.loaded)}
        >
          <source src="./img/teeth-cleaning.mp4" type="video/mp4" />
        </video>
      </section>

      <div className="container">
        <p className={s.banner__subtitle}>
          A healthy foundation for your whitening treatment.
        </p>
        {/* Why Cleaning */}
        <section className={s.why}>
          <h2>Why Cleaning Before Whitening?</h2>
          <p className={s.why__intro}>
            Teeth cleaning ensures your whitening treatment is more effective and
            longer-lasting. By removing plaque, tartar, and surface stains, whitening gel can
            penetrate enamel evenly for brighter results.
          </p>

          <ul className={s.why__list}>
            <li className={s.why__card}>
              <h3>Removes Plaque & Tartar</h3>
              <p>Eliminates buildup that can block whitening agents from working properly.</p>
            </li>
            <li className={s.why__card}>
              <h3>Healthier Gums</h3>
              <p>Reduces inflammation and makes whitening safer for soft tissues.</p>
            </li>
            <li className={s.why__card}>
              <h3>Smoother Surface</h3>
              <p>Creates a polished tooth surface for more even whitening results.</p>
            </li>
            <li className={s.why__card}>
              <h3>Longer-Lasting Results</h3>
              <p>Whitening effects last longer when teeth are clean and healthy.</p>
            </li>
          </ul>
        </section>

        {/* Steps */}
        <section className={s.steps}>
          <h2>The Cleaning Process</h2>
          <p className={s.steps__intro}>
            This is a light prep, not a full dental cleaning. For your overall oral health, you’ll still need to see your regular dentist for complete cleanings.
            <br></br>A cleaning session typically takes 30–45 minutes and involves:
          </p>

          <ul className={s.steps__list}>
            <li className={s.steps__card}>
              <span className={s.steps__number}>1</span>
              <h3>Examination</h3>
              <p>Assessment of teeth and gums before starting.</p>
            </li>
            <li className={s.steps__card}>
              <span className={s.steps__number}>2</span>
              <h3>Scaling</h3>
              <p>Removal of plaque and tartar deposits.</p>
            </li>
            <li className={s.steps__card}>
              <span className={s.steps__number}>3</span>
              <h3>Polishing</h3>
              <p>Polishing teeth to remove surface stains.</p>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className={s.cta}>
          <h2>Get Ready for Whitening</h2>
          <p>Book your cleaning appointment today and prepare for a dazzling smile.</p>
          <button className={s.cta_btn}>
            <a href="./contact-us">Book now</a>
          </button>
        </section>
      </div>
    </div >
  );
};
