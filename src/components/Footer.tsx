import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="py-2 bg-dark text-muted text-center fixed-bottom">
      <div className="d-flex justify-content-around">
        <Link to="/" className="btn btn-default text-muted">
          <i className="bi bi-person-vcard pe-2"></i>
          <span>Real -App</span>
        </Link>
        <button className="btn btn-default text-muted">
          Created by Yulia Mataev &copy; 2023
        </button>
        <div>
          <a
            href="https://linkedin.com/"
            target="_blank"
            className="btn btn-default text-muted"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            className="btn btn-default text-muted"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            className="btn btn-default text-muted"
          >
            <i className="bi bi-instagram"></i>
          </a>

          <Link to="/" className="btn btn-default text-muted">
            <i className="bi bi-house-door"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
