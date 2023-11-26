
// Playerlist 
import React from 'react';
import Players from './Players';
import Player from './Player';
import "./Player.css"
const Playerlist=()=>{

    return(
        <div>
           

<div className="player-list">
        {Players.map((player, index) => (
          <Player key={index} {...player} />
        ))}
      </div>
              
            </div> 


      
    )

}
export default Playerlist;