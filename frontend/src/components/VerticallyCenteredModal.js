import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { AuthData } from "../services/AuthService";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const VerticallyCenteredModal = (props) => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [parameter, setParameter] = useState("");
  const [model, setModel] = useState("");
  const [thresholdValue, setThresholdValue] = useState("");

  const {user, setUser} = AuthData();


  const handleId = (event) => {
    setId(event.target.value);
  };

  const handleManufacturer = (event) => {
    setManufacturer(event.target.value);
  };
  const handleModel = (event) => {
    setModel(event.target.value);
  };
  const handleParameter = (event) => {
    setParameter(event.target.value);
  };

  const handleThres = (event) => {
    setThresholdValue(event.target.value);
  };

  const handleAddClick = async () => {
    // Add validation here
    if(id === "" || manufacturer === "" || model === "" || parameter === "" || thresholdValue === ""){
      alert("Please fill all the fields before procedding!!");
      return;
    }
    const sensorData = {
      sensorId: id,
      manufacturer: manufacturer,
      model: model,
      parameter: parameter,
      threshold: thresholdValue,
      userId : JSON.parse(user.user)._id
    };
    

    try{
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/v1/sensor/addSensor`,
        {
          method : "POST",
          headers: {
            "Content-Type": "application/json",
            // authorization: `Bearer ${getCookies("jwt")}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept, Z-Key",
            "Access-Control-Allow-Methods":
              "GET, HEAD, POST, PUT, DELETE,PATCH, OPTIONS",
          },
          body: JSON.stringify(sensorData),        }
        )
        .then((response) => response.json())
        .then((data) => {
           if(data.status === 'success'){
            setUser({user : JSON.stringify(data.data), isAutheticated : true});
            alert("Successfully added the sensor!!");
            navigate('/dashboard', { replace: true });
            window.location.reload();
            // alert("Successfully added the sensor!!", function() {
            //   window.location.reload(); // Reload the page after the user closes the alert
            // });
            props.onHide();
           }
           else{
            alert(data.message);
           }
        });

    } catch(err){
      console.log(err);
      alert("Error adding the sensor. Please try again later!!");
    }


    // props.onAddSensor(sensorData); // Pass new sensor data to parent
    props.onHide();
  };

  // useEffect(() => {}, [handleAddClick]);
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Sensor
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Sensor Name</Form.Label>
              <Form.Control
                type="email"
                placeholder=""
                autoFocus
                onChange={handleId}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Manufacturer</Form.Label>
              <Form.Control
                type="text"
                id="manufacturer"
                autoFocus
                onChange={handleManufacturer}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Model</Form.Label>
              <Form.Control
                type="text"
                id="model"
                autoFocus
                onChange={handleModel}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Parameter</Form.Label>
              <Form.Control
                type="text"
                id="parameter"
                autoFocus
                onChange={handleParameter}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Threshold value</Form.Label>
              <Form.Control
                type="text"
                id="thresholdValue"
                autoFocus
                onChange={handleThres}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleAddClick}>Add</Button>

          <Button onClick={props.onHide}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default VerticallyCenteredModal;
