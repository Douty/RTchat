import HomePage from './routes/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { io } from 'socket.io-client';
import './App.css';
import ChatRoom from './routes/ChatRoom';

const socket = io.connect('http://localhost:5000');
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage socket={socket}/>} />
        <Route path="/chatroom" element={<ChatRoom socket={socket}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
