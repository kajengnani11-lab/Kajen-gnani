import { useState } from 'react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <main className="contact-page" id="contact-page">
      <section className="contact-hero">
        <div className="container">
          <p className="section-title">Let&apos;s connect</p>
          <h1>Have an idea?<br /><em>Let&apos;s talk.</em></h1>
          <p className="contact-lede">
            Whether you want to share an opportunity, ask a question, or simply say hello, I&apos;d be happy to hear from you.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container contact-grid">
          <div className="contact-details">
            <p className="section-title">Get in touch</p>
            <h2>Start a conversation.</h2>
            <p>Send a message through the form and I&apos;ll get back to you as soon as possible.</p>
            <div className="contact-detail-line">
              <span>Email</span>
              <a href="mailto:Kajengnani11@gmail.com">Kajengnani11@gmail.com</a>
            </div>
            <div className="contact-detail-line">
              <span>Phone</span>
              <a href="tel:+14168599066">416 859 9066</a>
            </div>
            <div className="contact-detail-line">
              <span>Location</span>
              <p>Available for learning and collaboration</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your name" required />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Tell me a little about your idea..." rows="5" required />

            <button className="contact-submit" type="submit">Send message <span aria-hidden="true">&#8594;</span></button>
            {submitted && <p className="form-success" role="status">Thanks for reaching out. Your message is ready to be followed up.</p>}
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
