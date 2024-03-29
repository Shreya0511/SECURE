import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const VerticallyCenteredModal = (props) => {
  const [id, setId] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [parameter, setParameter] = useState("");
  const [model, setModel] = useState("");
  const [thresholdValue, setThresholdValue] = useState("");


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
            alert("Successfully added the sensor!!");
            props.onHide();
           }
           else{
            alert("Please make sure to fill all the required fields!!");
           }
        });

    } catch(err){
      console.log(err);
      alert("Error adding the sensor. Please try again later!!");
    }


    props.onAddSensor(sensorData); // Pass new sensor data to parent
    props.onHide();
  };
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
              <Form.Label>Sensor Id</Form.Label>
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
