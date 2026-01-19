import classNames from 'classnames';
import s from './Whitening.module.scss';

export const Whitening = () => {
  return (
    <div className={s.whitening}>
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
          <source src="./img/teeth-whitening.mp4" type="video/mp4" />
        </video>

      </section>

      <div className="container">
        <p className={s.banner__subtitle}>
          Brighten your smile in just one hour with safe & effective treatments.
        </p>
        {/* How it works */}
        <section className={s.how_it_work}>
          <h2>The Whitening Process</h2>
          <p className={s.how_it_work__intro}>
            Professional teeth whitening is designed to give you instant, visible results in just
            one session. Here’s what to expect:
          </p>

          <ul className={s.how_it_work__list}>
            <li className={s.how_it_work__card}>
              <span className={classNames(s.how_it_work__number, s.how_it_work__number_1)}>1</span>
              <h3>Consultation & Shade Check</h3>
              <p>Your current tooth shade is recorded before treatment for comparison.</p>
            </li>

            <li className={s.how_it_work__card}>
              <span className={classNames(s.how_it_work__number, s.how_it_work__number_2)}>2</span>
              <h3>Preparation & Protection</h3>
              <p>Teeth are cleaned, gums and lips are safely protected.</p>
            </li>

            <li className={s.how_it_work__card}>
              <span className={classNames(s.how_it_work__number, s.how_it_work__number_3)}>3</span>
              <h3>Whitening Gel Application</h3>
              <p>Professional-grade gel breaks down stains and discolouration.</p>
            </li>

            <li className={s.how_it_work__card}>
              <span className={classNames(s.how_it_work__number, s.how_it_work__number_4)}>4</span>
              <h3>Light Activation</h3>
              <p>LED light enhances the gel’s effectiveness.</p>
            </li>

            <li className={s.how_it_work__card}>
              <span className={classNames(s.how_it_work__number, s.how_it_work__number_5)}>5</span>
              <h3>Multiple Rounds</h3>
              <p>The gel may be reapplied for the best results.</p>
            </li>

            <li className={s.how_it_work__card}>
              <span className={classNames(s.how_it_work__number, s.how_it_work__number_6)}>6</span>
              <h3>Smile Reveal</h3>
              <p>Enjoy a brighter, whiter smile instantly after your session.</p>
            </li>
          </ul>
        </section>

        {/* Stains */}
        <section className={s.stains}>
          <h2>Why Teeth Stains Occur</h2>
          <p className={s.stains__intro}>
            Understanding stain types helps choose the most effective whitening approach.
          </p>

          <div className={s.stains__grid}>
            <div className={s.stains__card}>
              <h3>Extrinsic Stains</h3>
              <p><strong>Causes:</strong> Coffee, tea, wine, sodas, food pigments, smoking.</p>
              <p><strong>Look:</strong> Yellow or brown surface stains.</p>
              <p><strong>Treatment:</strong> Excellent response to whitening.</p>
            </div>

            <div className={s.stains__card}>
              <h3>Intrinsic Stains</h3>
              <p><strong>Causes:</strong> Ageing, trauma, medication, fluoride.</p>
              <p><strong>Look:</strong> Gray, blue, or deep yellow tones.</p>
              <p><strong>Treatment:</strong> May need several sessions or veneers.</p>
            </div>

            <div className={s.stains__card}>
              <h3>Age-Related Stains</h3>
              <p><strong>Causes:</strong> Natural enamel thinning & dentin darkening.</p>
              <p><strong>Look:</strong> Dull, darker, more translucent teeth.</p>
              <p><strong>Treatment:</strong> Whitening helps, but depends on enamel health.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={s.cta}>
          <h2>Book Your Whitening Session</h2>
          <p>Get a radiant, confident smile today — results in under 1 hour!</p>
          <button className={s.cta_btn}>
            <a href="contact-us">Book now</a>
          </button>
        </section>
      </div>
    </div>
  );
};
