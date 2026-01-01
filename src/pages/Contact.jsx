function Contact() {
  return (
    <div className="page contact-page">
      <div className="page-card contact-card">
        <h1>Contact</h1>
        <p className="subtitle">
          Reach out to Weatherly anytime
        </p>

        <div className="contact-list">
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div>
              <h4>Email</h4>
              <p>weatherly.app@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <h4>Location</h4>
              <p>Sri Lanka</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">💻</div>
            <div>
              <h4>GitHub</h4>
              <p>github.com/weatherly-app</p>
            </div>
          </div>
        </div>

        <p className="contact-footer">
          We usually respond within 24 hours
        </p>
      </div>
    </div>
  );
}

export default Contact;