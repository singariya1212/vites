import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailsclice';
import { useNavigate } from 'react-router-dom';

const Ram = () => {
  const [users, setUsers] = useState({
    name: '',
    email: '',
    age: '',
    gender: ''
  });

  const getUsersdata = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const Navigate=useNavigate()
const dispatch=useDispatch()

const submitform=(e)=>{
  e.preventDefault()
  console.log(users,"users value submited");
  dispatch(createUser(users))
Navigate('/read')
  // setUsers({    name: '',
  //   email: '',
  //   age: '',
  //   gender: ''})
}
  useEffect(() => {
    console.log(users, 'Updated Users');
  }, [users]);

  return (
    <form className='w-50 mx-auto'>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={users.name}
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
          name="email"
          value={users.email}
          onChange={getUsersdata}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Age</label>
        <input
          type="text"
          name="age"
          className="form-control"
          value={users.age}
          onChange={getUsersdata}
        />
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          onChange={getUsersdata}
          name="gender"
          value="male"
          id="flexRadioDefault1"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Male
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          onChange={getUsersdata}
          type="radio"
          name="gender"
          value="female"
          id="flexRadioDefault2"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Female
        </label>
      </div>
      <button type="submit" className="btn btn-primary" onClick={submitform}>Submit</button>
    </form>
  );
};

export default Ram;
