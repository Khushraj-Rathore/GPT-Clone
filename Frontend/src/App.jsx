import { useState } from 'react';
import ChatWindow from './ChatWindow';
import Sidebar from './Sidebar';
import { MyContext } from './MyContext';
import {v1 as uuidv1} from "uuid";
import './App.css'

function App() {
  let [prompt , setPrompt]=useState('');
  let [reply , setReply]= useState(null);
  let [currThreadId , setCurrThreadId] = useState(uuidv1());
  let [prevChats , setPrevChats] = useState([]);
  let [newChat , setNewChat] = useState(true);
  let [allThreads , setAllThreads] = useState([]);


  const provideValues = {
    prompt,setPrompt,
    reply, setReply,
    currThreadId , setCurrThreadId,
    prevChats , setPrevChats,
    newChat , setNewChat,
    allThreads ,setAllThreads
  };


  return (
    <div className='app'>
      <MyContext.Provider  value={provideValues}>
      <Sidebar/>
      <ChatWindow/>
      </MyContext.Provider> 
    </div>
  );
}

export default App;
