import React from 'react';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, Flex, message } from 'antd';
import './SignUp.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axios.post("http://localhost:8000/users/signup", values);

      if (response.status === 201 || response.status === 200) {
        message.success("Signup successful!");
        navigate("/"); // redirect to login page
      } else {
        message.error(response.data.message || "Signup failed.");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      message.error(error.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="signup-container">
      <Form
        name="signup"
        onFinish={onFinish}
        style={{ maxWidth: 400 }}
        className="signup-form"
      >
        <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Create Account</h2>

        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Please input your Email!' },
            { type: 'email', message: 'Invalid email format!' },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>

       <Form.Item
  name="password"
  rules={[
    { required: true, message: 'Please input your Password!' },
    {
      pattern: /^(?=.*[A-Z])(?=.*\d).{5,}$/,
      message: "At least 5 chars, one capital letter, one number"
    }
  ]}
>
  <Input.Password prefix={<LockOutlined />} placeholder="Password" />
</Form.Item>


        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Sign Up
          </Button>
        </Form.Item>

        <Flex justify="center">
          <span>
            Already have an account? <Link to="/">Log in</Link>
          </span>
        </Flex>
      </Form>
    </div>
  );
};

export default Signup;
