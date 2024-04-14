import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";


function SensorCard({sensor}) {
    const navigate = useNavigate();

    const handleShowHistory = () => {
        navigate(`/history/${sensor._id}`)
    }
    return (
    <Card style={{ width: '13rem', backgroundColor : "rgb(84, 83, 83, 0.7)", color : "white", marginRight : "2rem"}}>
      <Card.Body>
        <Card.Title style ={{fontSize : "1.5rem", marginBottom : "1rem", color : "rgb(222, 143, 83)"}}>{sensor.sensorId}</Card.Title>
        <Card.Text>
          <div style ={{fontSize : "1rem", color : "#9f9898", marginBottom : "0.7rem"}}><span style ={{ color : ""}}>Parameter : </span>{sensor.parameter}</div>
          <div style ={{fontSize : "1rem", color : "#9f9898", marginBottom : "0.7rem"}}><span style ={{ color : ""}}>Threshold : </span>{sensor.threshold}</div>
        </Card.Text>
        <Button variant="primary" onClick = {handleShowHistory}>Show History</Button>
      </Card.Body>
    </Card>
  );
}

export default SensorCard;