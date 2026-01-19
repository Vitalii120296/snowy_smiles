import classNames from 'classnames';
import s from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <>
      <section className={s.banner}>
        <video
          className={s.banner__video}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={(e) => e.currentTarget.classList.add(s.loaded)}
        >
          <source
            src="./img/Snowy-Smiles.mp4"
            type='video/mp4'
          />
        </video>
      </section>

      <div className="container">
        {/* Benefits */}
        <section className={s.benefits}>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>
              <img src="./img/benefits/safety-grade.png" alt="Professional & Safe Treatments" />
              ✨ Professional & Safe Treatments</li>
            <li>
              <img src="./img/benefits/fast-results.png" alt="Fast Results" />
              ⏱️ Fast Results (up to 8 shades whiter in 1 hour)</li>
            <li>
              <img src="./img/benefits/enamel.png" alt=" Gentle on Teeth & Enamel" />
              🦷 Gentle on Teeth & Enamel</li>
            <li>
              <img src="./img/benefits/packages.png" alt="Affordable Pricing & Packages" />
              💎 Affordable Pricing & Packages</li>
          </ul>
        </section>
        {/* How it works */}
        <section className={s.how_it_work}>
          <h2>The Teeth Whitening Experience</h2>
          <p className={s.how_it_work__intro}>
            Professional teeth whitening is a safe, effective way to dramatically brighten your smile
            in just a single visit. The process is simple, comfortable, and designed to deliver immediate,
            noticeable results.
          </p>

          <ul className={s.how_it_work__list}>
            <li className={s.how_it_work__card}>
              <span className={classNames(s.how_it_work__number, s.how_it_work__number_1)}>1</span>
              <span className={s.how_it_work__title}><h3>Consultation & Shade Assessment</h3></span>
              <span className={s.how_it_work__text}>
                Your treatment begins with a professional evaluation of your teeth and gums.
                Together, we’ll discuss your goals and record your current tooth shade so you
                can clearly see your results afterward.
              </span>
            </li>

            <li className={s.how_it_work__card}>
              <span className={classNames(s.how_it_work__number, s.how_it_work__number_2)}>2</span>
              <span className={s.how_it_work__title}><h3>Preparation & Protection</h3></span>
              <span className={s.how_it_work__text}>
                Before whitening, your teeth are gently cleaned to remove surface buildup.
                A protective barrier is applied to gums and lips to ensure safety and comfort
                during the treatment.
              </span>
            </li>

            <li className={s.how_it_work__card}>
              <span className={classNames(s.how_it_work__number, s.how_it_work__number_3)}>3</span>
              <span className={s.how_it_work__title}><h3>Application of Whitening Gel</h3></span>
              <span className={s.how_it_work__text}>
                A professional-grade whitening gel (hydrogen peroxide or carbamide peroxide)
                is carefully applied to your teeth to break down stains and discolouration.
              </span>
            </li>

            <li className={s.how_it_work__card}>
              <span className={classNames(s.how_it_work__number, s.how_it_work__number_4)}>4</span>
              <span className={s.how_it_work__title}><h3>Light Activation</h3></span>
              <span className={s.how_it_work__text}>
                Zoom! LED light is used to activate the whitening gel, enhancing its effectiveness.
              </span>
            </li>

            <li className={s.how_it_work__card}>
              <span className={classNames(s.how_it_work__number, s.how_it_work__number_5)}>5</span>
              <span className={s.how_it_work__title}><h3>Multiple Rounds</h3></span>
              <span className={s.how_it_work__text}>
                The gel may be reapplied in short intervals to achieve the optimal shade and maximum brightness.
              </span>
            </li>

            <li className={s.how_it_work__card}>
              <span className={classNames(s.how_it_work__number, s.how_it_work__number_6)}>6</span>
              <span className={s.how_it_work__title}><h3>Reveal Your New Smile</h3></span>
              <span className={s.how_it_work__text}>
                Once the whitening materials are removed, your brighter, refreshed smile
                is revealed instantly. In just about an hour, you’ll leave several shades whiter
                with a boost of confidence.
              </span>
            </li>
          </ul>
        </section>

        <section className={s.stains}>
          <h2>Why Teeth Stains Occur…</h2>
          <p className={s.stains__intro}>
            Not all tooth discolouration is the same. Understanding the type of stain helps determine the most effective whitening treatment.
          </p>

          <div className={s.stains__grid}>
            <div className={s.stains__card}>
              <h3>1. Extrinsic Stains</h3>
              <p><strong>Where they occur:</strong> On the outer layer of enamel.</p>
              <p><strong>Causes:</strong> Coffee, tea, red wine, dark sodas, richly pigmented foods (like berries or curry), and tobacco use.</p>
              <p><strong>Appearance:</strong> Yellow, brown, or surface-level discolouration.</p>
              <p><strong>Treatment:</strong> These respond well to professional whitening.</p>
            </div>

            <div className={s.stains__card}>
              <h3>2. Intrinsic Stains</h3>
              <p><strong>Where they occur:</strong> Beneath the enamel, within the dentin (the inner layer of the tooth).</p>
              <p><strong>Causes:</strong> Ageing, trauma to the tooth, certain medications (like tetracycline), or excessive fluoride exposure during childhood.</p>
              <p><strong>Appearance:</strong> Grayish or bluish tones, or deep yellow discolouration.</p>
              <p><strong>Treatment:</strong> May require multiple whitening sessions or cosmetic options (such as veneers).</p>
            </div>

            <div className={s.stains__card}>
              <h3>3. Age-Related Stains</h3>
              <p><strong>Where they occur:</strong> Combination of enamel thinning and dentin darkening over time.</p>
              <p><strong>Causes:</strong> Natural ageing process, along with years of exposure to foods, drinks, and lifestyle habits.</p>
              <p><strong>Appearance:</strong> Teeth look darker, duller, or more translucent.</p>
              <p><strong>Treatment:</strong> Professional whitening can help restore brightness, though results vary depending on enamel health.</p>
            </div>
          </div>

          <div className={s.stains__faq}>
            <h3>FAQs…</h3>
            <p><strong>What are my options for teeth whitening?</strong></p>
            <p>We offer in-office and at-home teeth whitening.</p>
          </div>
        </section>

        {/* Services */}
        <section className={s.services}>
          <h2>Our Services</h2>
          <div className={s.services__wrapper}>
            <div className={s.service_card}>
              <a href="teeth-whitening">
                <div className={s.service_card__img}>
                  <img src="./img/teeth_whitening.jpg" alt="Teeth Whitenin" />
                </div>
                <h3>Teeth Whitening</h3>
                <p>Less then 1 hr session for a brighter smile.</p>
              </a>
            </div>

            <div className={s.service_card}>
              <a href="teeth-cleaning">
                <div className={s.service_card__img}>
                  <img src="./img/teeth_cleaning.jpg" alt="Teeth Whitenin" />
                </div>
                <h3>Teeth cleaning</h3>
                <p>Less then 1 hr session for a brighter smile.</p>
              </a>
            </div>
          </div>
        </section>

        <section className={s.tutorial}>
          <h2>Still not sure? Watch the video tutorial</h2>
          <img src="./img/down-arrow.png" alt="arrow down" />
          <div className={s.tutorial_video}>
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/agTDvV9dgd8"
              title="Teeth Whitening at Home"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen>
            </iframe>
          </div>

        </section>

        {/* Testimonials */}
        <section className={s.testimonials}>
          <h2>What Our Clients Say</h2>
          <div className={s.testimonials__coments}>
            <div className={s.block}>
              <blockquote>
                “Snowy Smiles transformed my teeth in just one visit. I’ve never felt
                more confident!” – Anna R.
              </blockquote>
              <blockquote>
                “Fast, painless, and professional. Highly recommended!” – Mark L.
              </blockquote>
              <blockquote>
                “The whitening treatment was amazing — my teeth are several shades brighter now!” – Sophia K.
              </blockquote>
              <blockquote>
                “I came in for a cleaning and left with teeth that felt brand new. Fantastic service!” – Daniel M.
              </blockquote>
            </div>
            <div className={s.block}>
              <blockquote>
                “The whitening session was quick and comfortable. My friends instantly noticed the difference!” – Emily W.
              </blockquote>
              <blockquote>
                “The hygienist was gentle and thorough. Best dental cleaning I’ve ever had.” – James H.
              </blockquote>
              <blockquote>
                “Affordable and effective whitening — I couldn’t stop smiling after the appointment.” – Laura P.
              </blockquote>
              <blockquote>
                “Super professional team. My cleaning was smooth and my teeth feel so fresh.” – Michael D.
              </blockquote>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={s.cta}>
          <h2>Ready to Shine?</h2>
          <p>Book your whitening session today and get your dream smile!</p>
          <button className={s.cta_btn}>
            <a href="contact-us">Book now</a>
          </button>
        </section>

      </div>

    </>
  );
}