import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameRequired: false,
    lastNameRequired: false,
    successfulSubmit: false,
  }

  validateFirstName = () => {
    const {firstName} = this.state

    return firstName !== ''
  }

  validateLastName = () => {
    const {lastName} = this.state

    return lastName !== ''
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()

    this.setState({firstNameRequired: !isValidFirstName})
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()

    this.setState({lastNameRequired: !isValidLastName})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({successfulSubmit: true})
    } else {
      this.setState({
        firstNameRequired: !isValidFirstName,
        lastNameRequired: !isValidLastName,
        successfulSubmit: false,
      })
    }
  }

  anotherSubmit = () => {
    this.setState({successfulSubmit: false, firstName: '', lastName: ''})
  }

  renderForm = () => {
    const {
      firstName,
      lastName,
      firstNameRequired,
      lastNameRequired,
    } = this.state
    return (
      <form className="form" onSubmit={this.onSubmitForm}>
        <label htmlFor="first-name" className="text-label">
          FIRST NAME
        </label>
        <input
          type="text"
          id="first-name"
          value={firstName}
          placeholder="First name"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
        {firstNameRequired ? (
          <p className="error-message">Required</p>
        ) : (
          <p> </p>
        )}
        <label htmlFor="last-name" className="text-label">
          LAST NAME
        </label>
        <input
          type="text"
          id="last-name"
          value={lastName}
          placeholder="Last name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
        {lastNameRequired ? (
          <p className="error-message">Required</p>
        ) : (
          <p> </p>
        )}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  renderOnSuccess = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        onClick={this.anotherSubmit}
        className="submit-another-button"
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {successfulSubmit} = this.state
    return (
      <div className="form-bg-container">
        <h1 className="main-heading">Registration</h1>
        <div className="form-container">
          {successfulSubmit ? this.renderOnSuccess() : this.renderForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
