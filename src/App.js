import React, {Component} from 'react';
import './App.css';
import logo from '../src/mayerslogo.png';
import { tsNullKeyword } from '@babel/types';


const emailRedex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
const phoneRedex = RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)

const formValid = ({formErrors,...rest}) => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  return valid;

  Object.value(rest).forEach(val =>{
   val && (valid =false); 
});
return valid;
};
class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      emailadress: null,
      phoneNumber: null,
      aboutUs: null,
      formErrors: {
        firstName: "",
        lastName: "",
        emailAdress: "",
        phoneNumber: "",
        aboutUs: ""
      }
    };
  }

handleSubmit = e => {
  e.preventDefault();
}




handleChange = e => {
  
  const {name, value } =  e.target;
  let formErrors = this.state.formErrors;

  switch(name){
    case 'firstName': 
    formErrors.firstName = value.length < 3 
    ? "minimum 3 characters required "
    : "";
    break;
    case 'lastName': 
    formErrors.lastName = value.length < 3 
    ? "minimum 3 characters required "
    : "";
    break;
    case 'emailAdress': 
    formErrors.emailAdress = emailRedex.test(value)
    ? ''
    : 'invalid email adress';
    break;
    case 'phoneNumber': 
    formErrors.phoneNumber = phoneRedex.test(value)
    ? ''
    : 'invalid phone number';
    break;
    case 'other':
      console.log('hwloo');
    break;
    default:
      break;
  }

  this.setState({formErrors, [name]:value}, ()=> console.log(this.state));

};




  render(){

    const{formErrors}=this.state;

    return (
   
      <div className = "wrapper">
        <div className="picture">
        <img src={logo} width="180" height="130" />

        </div>
        
        <div className = "form-wrapper">
          <h1>Job Application Form</h1>
          <form onSubmit={this.handleSubmit} noValidate> 
          <div className = "firstName">
            <label htmlFor="firstName ">First Name </label>
            <input 
            className = {formErrors.firstName.length > 0 ? "error" : null} 
            placeholder="First Name" 
            name= "firstName"
            noValidate
            onChange = {this.handleChange}
            />
            {formErrors.firstName.length > 0 && (
              <span className = "errorMessage"> {formErrors.firstName}</span>
            )}
          </div>
          <div className = "lastName">
            <label htmlFor="lastName ">Last Name </label>
            <input 
            
            className = {formErrors.lastName.length > 0 ? "error" : null}  
            placeholder="Last Name  " 
            name= "lastName"
            noValidate
            onChange = {this.handleChange}
            />
            {formErrors.lastName.length > 0 && (
              <span className = "errorMessage"> {formErrors.lastName}</span>
            )}
          </div>
          <div className = "emailAdress">
            <label htmlFor="emailAdress ">Email Address  </label>
            <input 
            
            className = {formErrors.emailAdress.length > 0 ? "error" : null} 
            placeholder="Email " 
            type="email"
            name= "emailAdress"
            noValidate
            onChange = {this.handleChange}
            />
            {formErrors.emailAdress.length > 0 && (
              <span className = "errorMessage"> {formErrors.emailAdress}</span>
            )}
          </div>
          <div className = "phoneNumber">
            <label htmlFor="phoneNumber ">Phone Number </label>
            <input 
           
            className = {formErrors.phoneNumber.length > 0 ? "error" : null} 
            placeholder="Phone Number" 
            name= "phoneNumber"
            noValidate
            onChange = {this.handleChange}
            />
            {formErrors.phoneNumber.length > 0 && (
              <span className = "errorMessage"> {formErrors.phoneNumber}</span>
            )}
          </div>
          <div className = "aboutUs">
            
            <label htmlFor="aboutUs ">How did you hear about us? </label>
           

        
            
            <select>
            <option>--Select--</option>
            <option value ="online" onSelect={(e)=>this.handlerSelecton(e)}>Online </option>
            <option value ="friend" >Friend/Family</option>
            <option value ="other">Other</option>
            
            </select>
            
            <input  type= "text" value= {this.state.value} onChange={this.handleChange}></input>


           
              
        </div>
        <div className = "createAccount">
         <button  type= "submit">Submit </button>
        </div>
        </form>
      </div>
      </div>
    );

  }
}

export default App;
