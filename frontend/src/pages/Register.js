import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { reset, register } from "../features/auth/authSlice";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/dashboard");
    }

    dispatch(reset());
  }, [isError, isSuccess, message, navigate, user, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Password do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <>
      <h1>Register a new account</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="name"
            placeholder="Enter name"
            id="name"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            name="email"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            name="password"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            id="password2"
            placeholder="Password"
            value={password2}
            name="password2"
            onChange={onChange}
          />
        </div>
        {/* <div className="mb-3" controlId="photo">
          <label>Profile Picture</label>
          <input type="file" />
        </div> */}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
      <div className="mt-3">
        <span>Have an account?</span> <Link to="/login">Login</Link>
      </div>
    </>
  );
};

export default Register;
