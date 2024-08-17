import React, { Component } from 'react'
import States from './States';

class CheckoutPage extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    isResidential: false
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.type === 'checkbox' ?
     e.target.checked :
     e.target.value;

    this.setState({
      [name]: value
    })
  };


  render() {
    const { items } = this.props;

    const {
      firstName,
      lastName,
      email,
      street,
      city,
      state,
      isResidential
    } = this.state

    const done = firstName && lastName && email && street && city && state;

    return (
      <div className="CheckoutPage">
        <p>
          You are buying {items.length} items.
        </p>
        <form>
          <div className="field-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" 
              id="firstName" 
              value={firstName}
              onChange={this.handleChange} 
            />
          </div>
          <div className="field-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" 
              id="lastName" 
              value={lastName}
              onChange={this.handleChange} 
            />
          </div>
          <div className="field-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" 
              id="email" 
              value={email}
              onChange={this.handleChange} 
            />
          </div>
          <div className="field-group">
            <label htmlFor="street">Street</label>
            <input type="text" name="street" 
              id="street" 
              value={street}
              onChange={this.handleChange} 
            />
          </div>
          <div className="field-group">
            <label htmlFor="city">City</label>
            <input type="text" name="city" 
              id="city" 
              value={city}
              onChange={this.handleChange} 
            />
          </div>
          <div className="field-group">
            <label htmlFor="state">State</label>
            <select name="state" id="state" 
              value={state}
              onChange={this.handleChange}
            >
              <States />
            </select>
          </div>
          <div className="field-group">
            <label htmlFor="isResidential">
              Is this a Residential Address?
            </label>
            <input type="checkbox" 
              name="isResidential" id="isResidential"
              checked={isResidential}
              onChange={this.handleChange}
            />
          </div>
        </form>
        <section>
          <h3>Confirm Shipping Info</h3>
          {done ? (
            <>
              <div>
                {firstName} {lastName}
              </div>
              <div>{street}</div>
              <div>{city}, {state}</div>
              <br />
              {email}
              <br />
              <div>
                {isResidential
                  ? 'residential'
                  : 'commercial'}
              </div>
            </>
          ) : (
            "Fill out the form first"
          )}
        </section>
      </div>
    )
  }
}

export default CheckoutPage