import { JSX } from "react/jsx-runtime";

function PageNotFound():JSX.Element{
    return(
        <div className="page">
      <main className="page__main page__main--404">
        <section className="not-found">
          <div className="container">
            <h1 className="not-found__title">404 - Page Not Found</h1>
            <p className="not-found__description">
              The page you are looking for might have been removed or is temporarily unavailable.
            </p>
            <a className="not-found__link" href="login">Go to Homepage</a>
          </div>
        </section>
      </main>
    </div>
    );
}

export default PageNotFound;