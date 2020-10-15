import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Riz from "./file1";
import Riz1 from "./file2"
import Riz2 from "./file3"
import Riz3 from "./file4"
import Riz4 from "./file5"


function Hi(){
    return <div> <center><h1>Practice part1</h1>Hello World </center></div>
    }

ReactDOM.render(
<div>
  <div><Hi/></div>
<hr/>

  <App title="Practice part 2, Plain Function with props" level= {1+0} name="Rizwan Hashmi"/>
  <hr/>

  <Riz title="Practice part 3, Plain Function de-structuring" level= {1+0} name="Rizwan Hashmi"/>
  <hr/>

  <Riz1 title="Practice part 4, A Constant holding Anonymus Function" level= {1+0} name="Rizwan Hashmi"/>
  <hr/>

  <Riz2 title="Practice part 5, Using Arrow function" level= {1+1} name="Rizwan Hashmi"/>
  <hr/>

  <Riz3 title="Practice part 6, arrow function without return" level= {1+0} name="Rizwan Hashmi"/>
  <hr/>

  <Riz4 title="Practice part 7, one line short function" level= {1+0} name="Rizwan Hashmi"/>
  <hr/>
</div>, 


document.querySelector('#root'));

//ReactDOM.render(
  //<Hi/>, document.querySelector('#root'));

