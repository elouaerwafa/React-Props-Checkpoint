// Player
import React from 'react';
import Card from 'react-bootstrap/Card';

const Player =({name, team, nationality, jerseyNumber, age, imageUrl })=> {

return(
  
    <div>
    
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='photo' src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          
            <strong> team:</strong> {team} <br />
            <strong> nationality:</strong> {nationality} <br />
            <strong> jerseyNumber: </strong> {jerseyNumber} <br />

        <strong> age: </strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>


    </div>
    )
}
export default Player;