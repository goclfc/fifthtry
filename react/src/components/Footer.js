function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-row">
          <small className="footer-copyright">
            © 2021 ვებ დიზაინი. თითქმის ყველა უფლება დაცულია
          </small>
          <ul className="footer-social">
            <li>
              <a href="#">
                <img src="images/icons/facebook.svg" alt="WebDev on Facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="images/icons/instagram.svg"
                  alt="WebDev on Instagram"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/icons/youtube.svg" alt="WebDev on Youtube" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/icons/twitter.svg" alt="WebDev on Twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
