export default function Contact() {
  return (
    <>
      <section class="hero hero-sm contact__header">
        <div class="container">
          <h1 class="mb-0">Contact Us</h1>
        </div>
      </section>
      <section className="section-padding">
        <div className="container">
          <div className="contact-form">
            <div className="contact-form__form">
              <form action="#" className="form-layout">
                <div className="form-col-50">
                  <label for="contact-name">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="contact-name"
                    id="contact-name"
                  />
                </div>
                <div className="form-col-50">
                  <label for="contact-email">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="contact-email"
                    id="contact-email"
                  />
                </div>
                <div className="form-col">
                  <label for="contact-message">Your Message</label>
                  <textarea
                    className="form-control"
                    name="contact-message"
                    id="contact-message"
                    rows="4"
                  ></textarea>
                </div>
                <div className="form-col">
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="contact-form__info">
              <p className="lead">
                Email: <a href="mailto:webdev@gmail.com">webdev@gmail.com</a>
              </p>
              <p className="lead">
                Phone: <a href="tel:+9222323322">+ 999 23 23 322</a>
              </p>
              <br />
              <p className="lead">
                Give us a call or drop by anytime, we endeavour to answer all
                enquiries within 24 hours on business days.
              </p>
              <p className="lead">We are open from 9am — 5pm week days.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
