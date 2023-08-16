import React from 'react'
import './footer.css'

const Footer = () => {
  return <React.Fragment>

<footer>
    <div className="footer-content">
      <div className="contact-icons">
        <a href="https://twitter.com/your-twitter-url" target="_blank">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.tesla.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tesla"></i>
        </a>
      </div>
      <blockquote>
  <p>"Try to learn as much as possible that allows you to predict the future &amp; the best way to predict the future is to make it"</p>
  <cite>- Elon Musk</cite>
</blockquote>
    </div>
  </footer>

  </React.Fragment>

}

export default Footer