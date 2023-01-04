import React, {useState} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
require('./Signup.css')
const Signup = () => {

  const [inputField, setInputField] = useState({
    name:'',
    lastname:'',
    email:'',
    phone:'',
    password:'',
    conformPassword:''
  })

  const [errField, setErrField] = useState({
    nameErr:'',
    lastnameErr:'',
    emailErr:'',
    phoneErr:'',
    passwordErr:'',
    conformPasswordErr:''
  })

  const inputHandler= (e)=>{
    // console.log(e.target.name+ " " + e.target.value)
    setInputField({...inputField, [e.target.name]:e.target.value})
    // console.log(inputField)
}

const sumitButton = async ()=>{
    if(validForm()) {
        let url="http://localhost:3020/createAdMem"
        let options={
            method:'POST',
            url:url,
            headers:{

            },
            data:inputField
        }
        try{
            let resposne = await axios(options)
            console.log(resposne)

        }catch(e){ console.log(e) }
    }
    else { console.log('invalid')}
}

const validForm=()=>{
    let formIsValid = true;
    setErrField({
        nameErr:'',
        lastnameErr:'',
        emailErr:'',
        phoneErr:'',
        passwordErr:'',
        conformPasswordErr:''
    })

    if(inputField.name === '') {
        formIsValid = false;
        setErrField(prevState=>({
        ...prevState,nameErr:'Please Enter Name'
    }))}
    if(inputField.lastname === '') {
        formIsValid = false;
        setErrField(prevState=>({
        ...prevState,lastnameErr:'Please Enter lastname'
    }))}
    if(inputField.email === '') {
        formIsValid = false;
        setErrField(prevState=>({
        ...prevState,emailErr:'Please Enter email'
    }))}
    if(inputField.phone === '') {
        formIsValid = false;
        setErrField(prevState=>({
        ...prevState,phoneErr:'Please Enter phone'
    }))}
    if(inputField.password === '') {
        formIsValid = false;
        setErrField(prevState=>({
        ...prevState,passwordErr:'Please Enter password'
    }))}
    if(inputField.conformPassword !== '' && inputField.password !== inputField.conformPassword) {
        formIsValid = false;
        setErrField(prevState=>({
        ...prevState,conformPasswordErr:'password and  conform Password doesnot matched'
    }))}
    return formIsValid
}

  return (
    <div className='all'>
    <h1>SignUp to continue</h1>
    <div className="form">
      <div className="form-body">
          <div className="username">
              <label className="form__label" for="firstName">First Name </label>
              <input type="text" className="form__input"   name='name' value={inputField.name} onChange={inputHandler}/>
              {
                errField.nameErr.length>0 && <span className='error'>{errField.nameErr}</span>
              }
          </div>
          <div className="lastname">
              <label className="form__label" for="lastName">Last Name </label>
              <input  type="text" className="form__input" name='lastname' value={inputField.lastname} onChange={inputHandler}/>
              {
                errField.lastnameErr.length>0 && <span className='error'>{errField.lastnameErr}</span>
              }
          </div>
          <div className="email">
              <label className="form__label" for="email">Email </label>
              <input  type="email" id="email" className="form__input" name='email' value={inputField.email} onChange={inputHandler}/>
              {
                errField.emailErr.length>0 && <span className='error'>{errField.emailErr}</span>
              }
          </div>

          <div className="phone">
              <label className="form__label" for="phone">Phone </label>
              <input className="form__input" type="phone"  id="phone" name='phone' value={inputField.phone} onChange={inputHandler}/>
              {
                errField.phoneErr.length>0 && <span className='error'>{errField.phoneErr}</span>
              }
          </div>

          <div className="password">
              <label className="form__label" for="password">Password </label>
              <input className="form__input" type="password" name='password' value={inputField.password} onChange={inputHandler}/>
              {
                errField.passwordErr.length>0 && <span className='error'>{errField.passwordErr}</span>
              }
          </div>

          <div className="password">
              <label className="form__label" for="password">confirm Password </label>
              <input className="form__input" type="password" name='conformPassword' value={inputField.conformPassword} onChange={inputHandler}/>
              {
                errField.conformPasswordErr.length>0 && <span className='error'>{errField.conformPasswordErr}</span>
              }
          </div>
      </div>
      <div className="footer">
          <button type="submit" className="btn1" onClick={sumitButton}>Register</button>
      </div>
  </div>
 <div className='afterLogin'>
 <button type="submit" className="btn1"><Link to='/signup'>Logout</Link></button>
 </div>
  </div>
    )
}

export default Signup