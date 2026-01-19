import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import classNames from "classnames";
import s from "./Contact.module.scss";
import { ADDRESS, EMAIL, PHONE_NUMBER } from "../../constants";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    emailjs
      .sendForm(
        "service_bo9symp",     // 🔁 заміни на свій Service ID
        "template_gsepvaa",    // 🔁 заміни на свій Template ID
        formRef.current,
        "P4w2fHymlNaK9K-yz"    // 🔁 заміни на свій Public Key
      )
      .then(
        () => {
          setStatus("success");
          formRef.current?.reset();
          setTimeout(() => setStatus("idle"), 4000);
        },
        (error) => {
          console.error(error.text);
          setStatus("error");
        }
      );
  };

  return (
    <section className={classNames(s.contact, "container")}>
      <div className={s.formSection}>
        <h2>Contact Us</h2>
        <p>
          Have questions about our services or want to book an appointment?
          Send us a message — we’ll be happy to help!
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className={s.form}>
          <div className={s.row}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
          </div>

          <input type="tel" name="user_number" placeholder="Phone Number" required />
          <textarea name="message" rows={5} placeholder="Your Message" required />

          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && <p className={s.success}>Message sent successfully!</p>}
          {status === "error" && <p className={s.error}>Something went wrong. Please try again.</p>}
        </form>
      </div>

      <div className={s.info}>
        <h3>Our Location</h3>
        <p>{ADDRESS}</p>
        <p>
          Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
        <p>
          Phone: <a href={`tel:+${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
        </p>
      </div>
    </section>
  );
};
