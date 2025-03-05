import { JSX } from "react/jsx-runtime";

function PageNotFound():JSX.Element{
    return(
        <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="Rent service logo" width={81} height={41} />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Myemail@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--404">
        <section className="not-found">
          <div className="container">
            <h1 className="not-found__title">404 - Page Not Found</h1>
            <p className="not-found__description">
              The page you are looking for might have been removed or is temporarily unavailable.
            </p>
            <a className="not-found__link" href="main.html">Go to Homepage</a>
          </div>
        </section>
      </main>
    </div>
    );
}

export default PageNotFound;