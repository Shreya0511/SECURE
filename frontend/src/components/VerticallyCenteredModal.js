import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const VerticallyCenteredModal = (props) => {
  const [name, setName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [parameter, setParameter] = useState("");
  const [model, setModel] = useState("");
  const [thresholdValue, setThresholdValue] = useState("");

//   const handleInputChange = (event) => {
//     setSensorData({
//       ...sensorData,
//       [event.target.name]: event.target.value,
//     });
//   };
  const handleName = (event) => {
    setName(event.target.value);
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

  const handleAddClick = () => {
    // Add validation here
    const sensorData = {
      name: name,
      manufacturer: manufacturer,
      model: model,
      parameter: parameter,
      thresholdValue: thresholdValue,
    };

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
            Add Sensors
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
                onChange={handleName}
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
