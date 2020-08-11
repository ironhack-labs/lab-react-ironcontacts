import React from 'react';



function RandomButton(props){
 
    return (
      <div>
        <button onClick={props.randomActor}>Add Random Contact</button>
      </div>
    );

}

export default RandomButton;
