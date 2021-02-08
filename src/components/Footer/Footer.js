import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import footerLogo from '../../assets/images/footerLogo.png';
import footerCall from '../../assets/images/Phone icon.jpeg'
import footerAddress from '../../assets/images/location.png'
import footerEmail from '../../assets/images/Email.jpg'

class Footer extends Component {
  scrollTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  render() {
    return (
        <div className='footer'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-3 isDesktop' onClick={this.scrollTop}>
                <Link to="/">
                  <img src={footerLogo} alt="footerLogo" className='img-responsive w-100 m-auto'/>
                </Link>
              </div>
              <div className='col-md-3 col-xs-12'>
                <h3>Useful Links</h3>
                <ul className='list-unstyled text-white'>
                  <li><p onClick={this.scrollTop}><Link to='/'>Home Page</Link></p></li>
                  <li><p onClick={this.scrollTop}><Link to='/privacyPolicy'>Privacy Policy</Link></p></li>
                  <li><p onClick={this.scrollTop}><Link to='faqs'>FAQs</Link></p></li>
                  <li><p onClick={this.scrollTop}><Link to='/termsConditions'>Terms & Conditions</Link></p></li>
                </ul>
              </div>

              <div className='col-md-3 col-xs-12'>
                <h3>Follow Us</h3>
                <ul className='list-unstyled text-white'>
                  <li><p>
                    <a href=' https://www.facebook.com/caveayurveda' target='_blank'>Facebook</a></p></li>
                  <li><p><a href='https://www.instagram.com/caveayurveda/'>Instagram</a></p></li>
                  <li><p><a href='https://www.youtube.com/channel/UCO77KJG7kskE7ceB6hedfeQ'>YouTube</a></p></li>
                </ul>
              </div>
              <div className='col-md-3 col-xs-12'>
                <h3>Contact Us (for business queries)</h3>
                <table className='table contactTable'>
                  <tbody>
                  <tr>
                    <td><i className="fa fa-map-marker" aria-hidden="true"></i></td>
                    <td><p>Plot number 123, Street
                      Number 2, Opp. DC office, Sangrur, Punjab - 148001</p></td>
                  </tr>
                  <tr>
                    <td><i className="fa fa-phone" aria-hidden="true"></i></td>
                    <td><p>+91-888242277222222</p></td>
                  </tr>
                  <tr>
                    <td><i className="fa fa-envelope-o" aria-hidden="true"></i></td>
                    <td><p>support@nuagehealth.in</p></td>
                  </tr>
                  </tbody>
                </table>
              </div>

            </div>
            <div className="row">
              <div className="col-md-12">
                <p className='text-center text-white'><span><i className="fa fa-copyright" aria-hidden="true"></i></span> Copyright 2020. IIRIS Natural Sciences Pvt. Ltd. All rights reserved</p>

              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Footer;
