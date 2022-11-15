import { Link } from "react-router-dom";
import aboutImg from "./../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import { render } from "@testing-library/react";

class NavBar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };
  render() {
    return (
      <>
        <nav>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "navbar"}
            >
              <li>
                <Link to="/about">מי אנחנו</Link>
              </li>
              <li>
                <Link to="/">לתחילת השאלון</Link>
              </li>
              {/* <li>
              <Link to='/Menu'>Menu</Link>
             </li> */}
            </ul>
          </div>

          <img src={aboutImg} className="App-logo" alt="logo" />
        </nav>
      </>
    );
  }
}
export default NavBar;
