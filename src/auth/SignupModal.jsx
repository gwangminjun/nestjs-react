import React, { useState } from "react";
import Modal from "react-modal";

import { useSelector, useDispatch } from "react-redux";
import { signupAxios } from "../RTK/authRTK/signupAsyncThunk";

// 컴포넌트 스타일을 위한 스타일 객체 (선택 사항)
const modalStyles = {
  content: {
    width: "400px",
    margin: "auto",
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "20px",
  },
};

const SignupModal = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [roll, setRoll] = useState("");

  const { isOpen, onClose } = useSelector((state) => state.signup);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username,
      email,
      password,
      phone,
      roll,
    };
    dispatch(signupAxios(formData));
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={modalStyles}
      contentLabel="회원가입 모달"
    >
      <h2>회원가입</h2>
      <form id="signup" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">사용자명:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">이메일:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">전화번호:</label>
          <input
            type="phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="roll">권한:</label>
          <input
            type="radio"
            id="roll"
            value="ADMIN"
            onChange={(e) => setRoll(e.target.value)}
          />
        </div>
        <button type="submit">회원가입</button>
      </form>
    </Modal>
  );
};

SignupModal;
