import React from "react";
import PropTypes from "prop-types";

export const Header = ({ staticButton, addContact, sortContact }) => {
  return (
    <section className="hero is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">IronContacts</h1>
          <h2 className="subtitle">Don't loose contacts!</h2>
        </div>
      </div>

      <div className="hero-foot">
        <nav className="navbar">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {staticButton ? (
                  <button
                    onClick={() => addContact()}
                    className="button is-primary is-inverted is-static"
                  >
                    Add random contact
                  </button>
                ) : (
                  <button
                    onClick={() => addContact()}
                    className="button is-primary is-inverted"
                  >
                    Add random contact
                  </button>
                )}

                <button
                  onClick={() => sortContact("name")}
                  className="button is-danger is-inverted"
                >
                  Sort by name
                </button>
                <button
                  onClick={() => sortContact("popularity")}
                  className="button is-info is-inverted"
                >
                  Sort by popularity
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

Header.propTypes = {
  addContact: PropTypes.func,
  sortContact: PropTypes.func
};
