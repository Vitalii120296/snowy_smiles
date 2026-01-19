import classNames from 'classnames';
import s from './About.module.scss';

export const About = () => {
  return (
    <section className={classNames(s.about, "container")}>
      <h2 className={s.title}>SNOWY SMILES</h2>
      <div className={s.flex}>
        <div className={s.block}>
          <h3>In-office Whitening (Zoom!)</h3>
          <p>
            For in-office treatment, such as <strong>Zoom!</strong>, we protect your lips and gums before applying a whitening gel to your teeth.
            The gel is then activated with a specialised ultraviolet light, giving you a noticeably brighter smile in just one visit.
          </p>
        </div>

        {/* At-home */}
        <div className={s.block}>
          <h3>At-home Whitening</h3>
          <p>
            For at-home whitening, we create <strong>custom trays</strong> using molds of your teeth and provide a professional-grade whitening solution.
            You simply place a thin layer of gel in the trays and wear them as instructed each day.
          </p>
          <p>
            Most patients begin to see results within <strong>10 to 14 days</strong>, with the full effect visible by the end of the treatment period.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className={s.block}>
        <h3>FAQs</h3>

        <div className={s.faq}>
          <p><strong>What is the difference between professional teeth whitening and drugstore kits?</strong></p>
          <p>
            Drugstore whitening kits use much weaker formulas than professional treatments, so they often don’t deliver the bright results patients expect.
            Plus, because the trays and strips aren’t custom fit, they can sometimes irritate the gums and soft tissues in the mouth.
          </p>
        </div>

        <div className={s.faq}>
          <p><strong>Is teeth whitening safe?</strong></p>
          <p>
            Teeth whitening is considered one of the safest cosmetic dental treatments. Under professional supervision,
            it can brighten your smile by several shades (sometimes up to 10), helping you look younger and refreshed.
          </p>
        </div>

        <div className={s.faq}>
          <p><strong>Does teeth whitening work?</strong></p>
          <p>
            Yes — it gives quick and noticeable results, and is more effective than over-the-counter options.
            Results may vary depending on genetics and type of staining. Note: it’s not suitable for dental restorations.
          </p>
        </div>

        <div className={s.faq}>
          <p><strong>What if teeth whitening doesn’t work?</strong></p>
          <p>
            In cases of deep, internal stains, whitening may not provide the best results.
            If this happens, we’ll review alternatives together — such as porcelain veneers or cosmetic crowns — to help you achieve your ideal smile.
          </p>
        </div>

        <div className={s.faq}>
          <p><strong>What are the side effects?</strong></p>
          <p>
            Some patients develop mild sensitivity, but this usually fades quickly.
            Using a toothpaste or gel designed for sensitivity can help ease any discomfort.
          </p>
        </div>
      </div>

      {/* Cancellation Policy */}
      <div className={s.block}>
        <h3>Cancellation Policy</h3>
        <p>
          We completely understand that unexpected things come up. If you need to cancel or reschedule your appointment,
          please let us know as soon as possible, and we’ll gladly help you find a new time that works best for you.
        </p>
      </div>
    </section>
  );
};
