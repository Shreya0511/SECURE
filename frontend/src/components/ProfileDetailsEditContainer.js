import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { AuthData } from '../services/AuthService';
import Form from "react-bootstrap/Form";
import { useEffect } from 'react';

const ProfileDetailsEditContainer = () => {
  const { user, updateMe } = AuthData();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (user && user.user) {
      const userData = JSON.parse(user.user);
      setName(userData.name || '');
      setEmail(userData.email || '');
      setPassword(userData.password || '');
      setImage(userData.image || '');
    }
  }, [user.user]);

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    const userDetails = {
      name: name,
      email: email,
      password: password // Assuming you're allowing password update
    };

    await updateMe(userDetails);
  };

  const handleCancel = () => {
    // Reset the form fields or navigate away, depending on your requirement
    // Example: setName('');
    //          setEmail('');
    //          setPassword('');
  };

  return (
    <div style={{ marginTop: "4rem" }}>
      <div style={{ color: "rgb(222, 143, 83)", fontWeight: "bold", fontSize: "1.7rem" }}>
        Edit Details:
      </div>
      <div style={{ display: "flex", flexDirection: "row", marginTop: "2rem" }}>
        <div style={{ height: "20rem", width: "17rem", backgroundColor: "#6a645ebf", display: "flex", borderRadius: "1rem" }}>
          <Col xs={6} md={4}>
            <Image style={{ height: "12rem", width: "12rem", marginTop: "2rem", marginLeft: "2.2rem" }} src={JSON.parse(user.user).image} roundedCircle />
          </Col>
        </div>
        <form onSubmit={handleSaveChanges} style={{ marginLeft: "2rem" }}>
          <div style={{ height: '20rem', width: "30rem", color: "white", backgroundColor: "#6a645ebf", marginLeft: "2rem", borderRadius: "1rem", padding: "2rem" }}>
            <div style={{ display: "flex", flexDirection: "column", fontSize: "1.3rem" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ width: "12rem", fontWeight: "bold" }}>Name:</label>
                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div style={{ border: "0.08rem solid #6a645ebf", marginBottom: "0.5rem" }}></div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ width: "12rem", fontWeight: "bold" }}>Email :</label>
                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div style={{ border: "0.08rem solid #6a645ebf", marginBottom: "0.5rem" }}></div>
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: "rgb(222, 143, 83)",
                color: "white",
                fontWeight: "bold",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "0.3rem",
                cursor: "pointer",
                marginTop: "2rem"
              }}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileDetailsEditContainer;
