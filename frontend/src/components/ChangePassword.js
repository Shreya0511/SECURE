import React, { useState } from 'react';
import { AuthData } from '../services/AuthService';

const ChangePassword = () => {
    const {user, updatePassword} = AuthData();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    const userDetails = {
       passwordCurrent : oldPassword,
       passwordConfirm : confirmPassword,
       password : newPassword,
    }

    await updatePassword(userDetails);
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");


  };

  const handleCancel = () => {
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    alert("Reset the changes succesfully!!");
  };

  return (
    <div style={{ marginTop: "4rem", color : "white", fontSize : "1.3rem"}}>
      <div style={{ color: "rgb(222, 143, 83)", fontWeight: "bold", fontSize: "1.7rem" }}>
        Change Password :
      </div>
      <div style={{ display: "flex", flexDirection: "column", marginTop: "2rem" }}>
        <form onSubmit={handleSaveChanges}>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ fontWeight: "bold", width : "15rem"}}>Current Password :</label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              style={{ marginLeft: "0.5rem", paddingLeft : "0.2rem"}}
              placeholder='********'
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ fontWeight: "bold", width : "15rem" }}>New Password :</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              style={{ marginLeft: "0.5rem" }}
              placeholder='********'

            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ fontWeight: "bold", width : "15rem"}}>Confirm New Password :</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{ marginLeft: "0.5rem" }}
              placeholder='********'

            />
          </div>
          <div style={{ display: "flex", marginTop : "2rem" }}>
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
                marginRight : "0.5rem",
              }}
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={handleCancel}
              style={{
                backgroundColor: "white",
                color: "red",
                fontWeight: "bold",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "0.3rem",
                cursor: "pointer",
                marginLeft : "0.5rem",
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
