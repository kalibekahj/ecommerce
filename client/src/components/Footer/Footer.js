import React from "react";
import "../../App.css";

class Footer extends React.Component {
  render() {
    return (
      <div>
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <footer> 
            
        <div className="media">
            <strong>stay connected</strong>
            <ul className="icons">
                <li className="li-icon"><a href="" className="fa fa-facebook">Facebook</a></li>
                <li className="li-icon"><a href="" className="fa fa-twitter">Twitter</a></li>
                <li className="li-icon"><a href="" className="fa fa-instagram">Instagram</a></li>
                <li className="li-icon"><a href="" className ="fa fa-linkedin">LinkedIn</a></li>
            </ul>
        </div>
        <div className="contact-us">
            <strong>contact us</strong>     
                <div>
                  <input type="text" id="emailAddress" name="emailAddress" placeholder="Email Address"/>
                </div>
            <button className="btn-subscribe" type="submit">Subscribe</button>
        </div>
        <div className="copyright">
        <p>Copyright &copy; 2018 by Jonesing</p>
        </div>

        <div className="support">
            <strong>need assistance?</strong>
            <p>123-456-7890</p>
            <a className="email-link">email@email.com</a>
        </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
