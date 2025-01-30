import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import axios from 'axios';
import { updateUser } from '../features/userDetailsclice';
const Update = () => {
    const {id}=useParams();
    const [particular, setParticular]=useState({
      name: '',
      email: '',
      age: '',
      gender: ''
    })
console.log(id,"id");
const Navigate=useNavigate()
const dispatch=useDispatch()
     useEffect(()=>{
        axios.get(`https://677818a080a79bf91903e755.mockapi.io/crud/${id}`)
        .then((data)=>{setParticular(data.data);
        })
    },[id])
  console.log(particular.name,"helo parlti");
  const getUsersdata = (e) => {
    setParticular({ ...particular, [e.target.name]: e.target.value });
  };
    const submitform=(e)=>{
      e.preventDefault()
      dispatch(updateUser({ id, data: particular }));
    Navigate('/read')
      
    }
  return (
   <form className='w-50 mx-auto'>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={particular.name}
          onChange={getUsersdata}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          value={particular.email}
          onChange={getUsersdata}name="email"
        
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Age</label>
        <input
          type="text"
          name="age"
          className="form-control"
          value={particular.age}
          onChange={getUsersdata}
        />
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          value="male"
          id="flexRadioDefault1"
          onChange={getUsersdata}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Male
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          value="female"
          id="flexRadioDefault2"
          
          onChange={getUsersdata}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Female
        </label>
      </div>
      <button type="submit" className="btn btn-primary" onClick={submitform} >Submit</button>
    </form>
  )
}

export default Update
