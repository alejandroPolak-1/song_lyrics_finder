import React, {Fragment, useState } from 'react';
import Form from './components/Form'


function App() {
  
  //define state
const [searchletter, setSearchLetter] = useState({})
  return (
   <Fragment>
     <Form 
     setSearchLetter={setSearchLetter}/>
   </Fragment>
  );
}

export default App;
