import React, { Component } from 'react';
import {
  Form, Modal, ModalBody,
} from 'reactstrap';
import Input from '../components/Common/Input';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInModal: false,
      signInForm: {
        firstName: '',
        lastName: '',
        email: '',
      }
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.toggleSignInModal = this.toggleSignInModal.bind(this);
  }

  toggleSignInModal() {
    this.setState({ signInModal: !this.state.signInModal })
  }

  onInputChange(name, value) {
    this.setState({ signInForm: { ...this.state.signInForm, [name]: value } })
  }

  render() {
    const { signInModal, signInForm } = this.state;
    return (
      <div>
        <nav className="navbar navbar-expand-md cmmHeader">
          <div className="d-md-flex justify-content-between align-items-center w-100">
            <a className="navbar-brand" >
              <img src="static/img/logo.png" width="45" alt="img" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-icon"></span>
              <span className="navbar-icon"></span>
              <span className="navbar-icon"></span>
            </button>
            <div className="input-group position-relative location_search">
              <div className="input-group-prepend">
                <div className="input-group-text"><img src="static/img/location.png" alt="img" /></div>
              </div>
              <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username" value="Ahmedabad" />
            </div>
            <form className="form-inline mt-2 mt-md-0 position-relative search_form">
              <input className="form-control" type="text" placeholder="Search for products" aria-label="Search" />
              <a className="search_icon"><i className="fas fa-search"></i></a>
            </form>
            <div className="daily_item">
              <ul className="mx-auto navbar-nav w-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-list-ul mr-2"></i> <span>Ahmedabad</span></a>
                  <div className="dropdown-menu" aria-labelledby="dropdown01">
                    <a className="dropdown-item" >Action</a>
                    <a className="dropdown-item" >Another action</a>
                    <a className="dropdown-item" >Something else here</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="daily_item">
              <ul className="mx-auto navbar-nav w-auto">
                <li className="nav-item">
                  <a className="nav-link" onClick={() => this.toggleSignInModal()} data-toggle="modal" data-target="#user_details"><i className="fas fa-user-circle mr-2"></i> <span>Sign In</span></a>
                </li>
              </ul>
            </div>
            <div className="daily_item">
              <ul className="mx-auto navbar-nav w-auto">
                <li className="nav-item">
                  <a className="nav-link" ><i className="fas fa-shopping-cart"></i>
                    <span className="cart_count">11</span>
                    <span className="cart_price">₹ 1560.00</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Modal isOpen={signInModal} toggle={this.toggleSignInModal} fade class="modal-dialog">
          <ModalBody>
            <h5 class="modal-title mt-2 mb-4 text-center" id="exampleModalLabel">Please Enter Your Details</h5>
            <Form className="needs-validation mb-3" novalidate>
              <Input
                id=""
                name="firstName"
                placeholder="First Name"
                value={signInForm.firstName}
                onChangeFunc={this.onInputChange}
                title="First Name"
              // isReq={true}
              // error={errors.name}
              // validationFunc={this.onInputValidate}
              />
              <Input
                id=""
                name="lastName"
                placeholder="Last Name"
                value={signInForm.lastName}
                onChangeFunc={this.onInputChange}
                title="Last Name"
              // isReq={true}
              // error={errors.name}
              // validationFunc={this.onInputValidate}
              />
              <Input
                id=""
                name="email"
                placeholder="Email Id"
                value={signInForm.email}
                onChangeFunc={this.onInputChange}
                title="Email Id"
              // isReq={true}
              // error={errors.name}
              // validationFunc={this.onInputValidate}
              />
            </Form>
            <button class="btn btn_popup w-100 mt-3" type="submit" onClick={this.toggleSignInModal}>Submit</button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

// export default withRouter(Header);
export default Header;