import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/homePage";
import ChatPage from "./pages/chatPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
