import './App.css'
import Notes from './components/notes';
import { useState } from 'react';

function App() { 
  const [notes, setNotes] = useState([
    {
      id:1,
      text:"Chek the description for my frontend Skils"
    },
    {
      id:2,
      text:"Go through my resume for my skills and relevent experience "
    }
  ]);

  const[note,setNote] = useState("")
 return (
 <div>
    
    <Notes notes={notes} setNotes={setNotes}/>
 </div> 
 );
}

export default App
