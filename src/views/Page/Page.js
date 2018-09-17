import React from "react";
import "./styles.css";

import PropTypes from "prop-types";

// Internal Components
import Header from "components/Header/Header";

class Page extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.func.isRequired,
    headerVisible: PropTypes.bool.isRequired,
    setLoaded: PropTypes.func.isRequired,
    isLoaded: PropTypes.bool.isRequired,
    userData: PropTypes.any.isRequired
  };

  /*
   *  Helpers
   */
  redirect = path => {
    const { history } = this.props;
    history.push(path);
  };

  setLoaded = loaded => {
    this.props.setLoaded(loaded);
  };

  isAuthenticated = async () => {
    let result;
    this.setLoaded(false);

    result = await this.props.isAuthenticated();

    this.setLoaded(true);

    return result;
  };

  /*
   *  Views
   */
  authenticated = () => {
    return (
      <div className="container">
        <p>Acesso liberado chefia!</p>
      </div>
    );
  };

  unauthenticated = () => {
    return (
      <div className="container">
        <p>
          Rota Protegida.{" "}
          <a onClick={() => this.redirect("/")} className="clickable">
            Afaste-se
          </a>
          !
        </p>
      </div>
    );
  };

  /*
   * Render
   */
  render() {
    const { headerVisible } = this.props;

    return (
      <React.Fragment>
        <Header display={headerVisible} />
        {!this.isAuthenticated()
          ? this.unauthenticated()
          : this.authenticated()}
      </React.Fragment>
    );
  }
}

export default Page;
