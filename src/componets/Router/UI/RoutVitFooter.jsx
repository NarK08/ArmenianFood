import "../index.css";
function  RoutFooter() {
  return (
    <footer className="page-footer orange lighten-4">
      <div className="footer-copyright">
        <div className="black-text container">
          <strong>
            © {new Date().getFullYear()} Copyright Text
            <a className="black-text  right" href="#!">
              Repo
            </a>
          </strong>
        </div>
      </div>
    </footer>
  );
}

export default RoutFooter;
