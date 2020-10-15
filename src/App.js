import React from 'react';


function App(props) {
  return <div><center>

    <h1>{props.title}</h1>
    
    Hello to everyone from <strong>{props.name}</strong>, Learning level {props.level} from File {props.level}
    
    </center>
    </div>
    

}

export default App;
