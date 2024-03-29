import { Link } from "react-router-dom";
import aboutImg from "./../Images/oldlogo2.png";
import { Component } from "react";
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
          <div className="bar1">
            <i id="bar" className={"fas fa-bars"}></i>
          </div>
          <div>
            <ul id="navbar">
              <li></li>
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
          {/* <div className="lis">
            <Link to="/">לתחילת השאלון</Link>
          </div> */}
          <img src={aboutImg} className="logo" alt="logo" />

          {/* <div style={{ height: "30px", width: "30px" }}>
            // <img src={aboutImg} className="logo" alt="logo" />
          </div> */}
        </nav>
      </>
    );
  }
}
export default NavBar;
