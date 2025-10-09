import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChatPage from "./pages/Chatpage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App flex flex-col h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat/:id" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
