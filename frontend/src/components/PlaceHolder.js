import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

function PlaceHolder() {
  return (
    <div className="d-flex justify-content-around" style ={{display : "flex", flexDirection : "column", justifyContent : 'center', alignItems : "center"}}>
     

      <Card style={{ width: '60vw',marginTop : "4rem", marginBottom : "2rem"}}>
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

      <Card style={{ width: '60vw',marginTop : "4rem" }}>
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