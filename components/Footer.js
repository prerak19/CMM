import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer_section">
        <span className="bg_logo"></span>
        <div className="container">
          <div className="row">
            <div className="col-md-12 position-relative">
              <div className="subscribe_section">
                <span className="bg_envelope"></span>
                <div className="d-md-flex justify-content-around align-items-center">
                  <div className="col-md-6 col-sm-12">
                    <h2>For Daily Offers and Deals</h2>
                    <p>Subscribe our Daily Newsletter</p>
                  </div>
                  <div className="col-md-5 offset-1 col-sm-12">
                    <button className="btn btn_subscribe">Subscribe Now</button>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-5 col-sm-12">
                  <a className="mb-4 float-left w-100">
                    <img src="static/img/logof.png" width="220" alt="img" />
                  </a>
                  <p className=" float-left w-100">We are Century Mega Mart, Lorem ipsum dolore sit, Lorem <br />ipsum dolore sit, Lorem ipsum dolore sit, Lorem ipsum dolore sit, <br />Lorem ipsum dolore sit, Lorem ipsum dolore sit, </p>
                  <ul className="ftr_contact">
                    <li>
                      <i className="fas fa-phone"></i> <span>+91 9856895623</span>
                    </li>

                    <li>
                      <i className="fas fa-envelope"></i> <span>support@centurymegamart.com </span>
                    </li>

                    <li className="address_txt">
                      <i className="fas fa-map-marker-alt"></i> <span>40B, XYZ Complex, XYZ Street,<br />Ahmedabad-389969.</span>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2 col-sm-12 min_wid_cat">
                  <h5 className="ftr_title">Popular Category</h5>
                  <ul className="ftr_list">
                    <li><a >Staples </a></li>
                    <li><a >Personla Care </a></li>
                    <li><a >Beverages </a></li>
                    <li><a >Home care </a></li>
                    <li><a >Daily Essentials </a></li>
                    <li><a >Baby care </a></li>
                    <li><a >Snacks & Beverages </a></li>
                    <li><a >Dairy & Bakery</a></li>
                  </ul>
                </div>
                <div className="col-md-4 col-sm-12 position-relative">
                  <h5 className="ftr_title">Instagram</h5>
                  <div className="ml-2">
                    <div className="row">
                      <div className="col-md-4 col-sm-4 col-xs-6 col-6 p-2">
                        <a className="insta_post">
                          <img src="static/img/p14.png" width="100%" height="auto" alt="img" />
                        </a>
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-6 col-6 p-2">
                        <a className="insta_post">
                          <img src="static/img/p16.png" width="100%" height="auto" alt="img" />
                        </a>
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-6 col-6 p-2">
                        <a className="insta_post">
                          <img src="static/img/p18.png" width="100%" height="auto" alt="img" />
                        </a>
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-6 col-6 p-2">
                        <a className="insta_post">
                          <img src="static/img/p15.png" width="100%" height="auto" alt="img" />
                        </a>
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-6 col-6 p-2">
                        <a className="insta_post">
                          <img src="static/img/p17.png" width="100%" height="auto" alt="img" />
                        </a>
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-6 col-6 p-2">
                        <a className="insta_post">
                          <img src="static/img/p19.png" width="100%" height="auto" alt="img" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="follow_us">
          Follow Us
      </span>
        <span className="social_fix">
          <ul className="ftr_contact">
            <li>
              <a ><i className="fab fa-twitter"></i></a>
            </li>
            <li>
              <a ><i className="fab fa-facebook-f"></i></a>
            </li>
            <li>
              <a ><i className="fab fa-youtube"></i></a>
            </li>
            <li>
              <a ><i className="fab fa-instagram"></i></a>
            </li>
          </ul>
        </span>
      </div>
    );
  }
}

export default Footer;