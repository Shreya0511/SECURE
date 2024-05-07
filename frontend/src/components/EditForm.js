import React, { useEffect, useState } from "react";
import { AuthData } from "../services/AuthService";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const EditForm = () => {
  const navigate = useNavigate();
  const { user, selectedSensor } = AuthData();
  const [sensorId, setSensorId] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [parameter, setParameter] = useState("");
  const [model, setModel] = useState("");
  const [threshold, setThreshold] = useState("");
  const [status, setStatus] = useState(false);
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Please enter the aimed montly cost of the sensor in rupees.
    </Tooltip>
  );

  useEffect(() => {
    const senor = JSON.parse(user.user).sensors.find(
      (sensor) => sensor._id === selectedSensor
    );
    setSensorId(senor.sensorId);
    setManufacturer(senor.manufacturer);
    setParameter(senor.parameter);
    setModel(senor.model);
    setThreshold(senor.threshold);
    setStatus(senor.status);
  }, [selectedSensor, user.user]);

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    const sensorData = {
      sensorId,
      manufacturer,
      parameter,
      model,
      threshold,
      status,
      _id: selectedSensor,
      userId: JSON.parse(user.user)._id,
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/v1/sensor/editSensor`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sensorData),
        }
      );
      const data = await response.json();
      if (data.status === "success") {
        alert("Sensor data updated successfully");
        navigate("/dashboard", { replace: true });
        window.location.reload();
      } else {
        alert("Failed to update sensor data");
      }
    } catch (err) {
      console.error("Error updating sensor data:", err);
      alert("Error updating the sensor data");
    }
  };

  const handleCancel = () => {
    navigate("/dashboard");
  };

  const handleThresCalc = (event) => {
    const thresh =
      (event.target.value * 1000) / (moment().daysInMonth() * 24 * 8);
    setThreshold(thresh.toFixed(2));
  };

  return (
    <div style={{ color: "white", marginTop: "3rem" }}>
      <div style={{ color: "white", fontSize: "1.7rem", fontWeight: "bold" }}>
        Edit Sensor:{" "}
        <span style={{ color: "rgb(222, 143, 83)" }}>{sensorId}</span>
      </div>
      <form
        style={{
          marginTop: "1.5rem",
          display: "flex",
          flexDirection: "column",
        }}
        onSubmit={handleSaveChanges} // Handle form submission
      >
        {/* Form inputs */}
        {/* Sensor Id */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "1rem",
          }}
        >
          <label style={{ width: "12rem", fontWeight: "bold" }}>
            Sensor Id:
          </label>
          <Form.Control
            type="text"
            value={sensorId}
            onChange={(e) => setSensorId(e.target.value)}
          />
        </div>

        {/* Manufacturer */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "1rem",
          }}
        >
          <label style={{ width: "12rem", fontWeight: "bold" }}>
            Manufacturer:
          </label>
          <Form.Control
            type="text"
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
          />
        </div>

        {/* Model */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "1rem",
          }}
        >
          <label style={{ width: "12rem", fontWeight: "bold" }}>Model:</label>
          <Form.Control
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
        </div>

        {/* Parameter */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "1rem",
          }}
        >
          <label style={{ width: "12rem", fontWeight: "bold" }}>
            Parameter:
          </label>
          <Form.Control
            type="text"
            value={parameter}
            onChange={(e) => setParameter(e.target.value)}
          />
        </div>

        {/* Threshold */}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "1rem",
          }}
        >
          <label style={{ width: "13.5rem", fontWeight: "bold", flex: "2" }}>
            Monthly Cost:
          </label>
          <Form.Control
            type="text"
            value={threshold}
            onChange={handleThresCalc}
            style={{ flex: "4", marginRight: "1rem" }}
          />
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <div>
              <FontAwesomeIcon
                style={{ fontSize: "1.3rem", color: "rgb(222, 143, 83)" }}
                icon={faCircleExclamation}
              />
            </div>
          </OverlayTrigger>
        </div>

        {/* Status */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "1rem",
          }}
        >
          <label style={{ width: "8rem", fontWeight: "bold" }}>Status:</label>
          <div style={{ marginRight: "1rem" }}>
            <input
              type="checkbox"
              checked={status}
              onChange={() => setStatus(!status)}
            />
            <label>Active</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={!status}
              onChange={() => setStatus(!status)}
            />
            <label>Inactive</label>
          </div>
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <button
            type="submit" // Add type submit to trigger form submission
            style={{
              backgroundColor: "rgb(222, 143, 83)",
              height: "2.5rem",
              width: "8rem",
              borderRadius: "0.6rem",
              marginRight: "1rem",
              color: "white",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Save Changes
          </button>
          <button
            type="button" // Specify type button to avoid accidental form submission
            onClick={handleCancel}
            style={{
              backgroundColor: "",
              height: "2.5rem",
              width: "8rem",
              borderRadius: "0.6rem",
              color: "rgb(222, 143, 83)",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
