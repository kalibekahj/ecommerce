import React from "react";
import { Link } from "react-router-dom";
import auth0Client from "../../Auth";
import "../../App.css";

class Header extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <h1 className="App-title" title="Go to Jonesing">
              <Link to="/ ">Jonesing</Link>
            </h1>
            <ul className="links">
              <li>
                <Link to="/ " title="Home">
                  Home
                </Link>
              </li>
              <li>
                <span className="divider" />
              </li>
              <li>
                <Link to="/Products" title="Products">
                  Products
                </Link>
              </li>
              <li>
                <span className="divider" />
              </li>
              <li>
                <Link to="/Contact" title="Contact">
                  Contact
                </Link>
              </li>
              <li>
                <span className="divider" />
              </li>
              <li className="nav__list-item">
                {auth0Client.isAuthenticated() ? (
                  <li>
                    <Link to="/Admin" title="Admin">
                      Admin
                    </Link>
                  </li>
                ) : null}
              </li>
            </ul>
          </nav>
          <div className="join">
            <ol>
              <li>
                {!auth0Client.isAuthenticated() && (
                  <button className="btn btn-dark" onClick={auth0Client.signIn}>
                    Sign In
                  </button>
                )}
                {auth0Client.isAuthenticated() && (
                  <div>
                    <label className="mr-2 text-white">
                      {auth0Client.getProfile().name}
                    </label>
                    <button
                      className="btn btn-dark"
                      onClick={auth0Client.signOut}
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </li>
            </ol>
          </div>
          <div className="container">
            <input
              className="search-bar"
              type="text"
              placeholder="Search Xotic"
            />
            <input className="submit" type="submit" value="Search" />
            <ul className="icon-tabs">
              <li title="Favorites">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="30"
                  viewBox="0 0 48 48"
                >
                  <path d="M24 42.7l-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z" />
                </svg>
              </li>
              <li title="Filter">
                <Link to="/Products">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="30"
                    viewBox="0 0 48 48"
                  >
                    <path d="M20 36h8v-4h-8v4zM6 12v4h36v-4H6zm6 14h24v-4H12v4z" />
                  </svg>
                </Link>
              </li>
              <li title="Shopping Cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="30"
                  viewBox="0 0 48 48"
                >
                  <path d="M14 36c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4zM2 4v4h4l7.19 15.17-2.7 4.9c-.31.58-.49 1.23-.49 1.93 0 2.21 1.79 4 4 4h24v-4H14.85c-.28 0-.5-.22-.5-.5 0-.09.02-.17.06-.24L16.2 26h14.9c1.5 0 2.81-.83 3.5-2.06l7.15-12.98c.16-.28.25-.61.25-.96 0-1.11-.9-2-2-2H10.43l-1.9-4H2zm32 32c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4z" />
                </svg>
              </li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
