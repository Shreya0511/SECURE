import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

function PlaceHolder() {
  return (
    <div className="d-flex justify-content-around" style ={{display : "flex", flexDirection : "column", justifyContent : 'center', alignItems : "center", backgroundColor : "black", height : "100vh", width:"100vw"}}>
     

      <Card style={{ width: '70vw',height : "13rem", marginTop : "4rem", backgroundColor : "rgb(84, 83, 83, 0.7)", borderRadius : "1.5rem"}}>
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={20} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
        </Card.Body>
      </Card>

      <Card style={{ width: '70vw',height : "13rem", marginTop : "1rem", backgroundColor : "rgb(84, 83, 83, 0.7)", borderRadius : "1.5rem"}}>
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={20} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PlaceHolder;