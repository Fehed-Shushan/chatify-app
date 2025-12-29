import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/Register";
import Chat from "./pages/chat";
import { useAuth } from "./context/AuthContext";

function App() {
  const { user } = useAuth();

  console.log("AUTH USER:", user);

  return (
    <BrowserRouter>
      <Routes>
        {!user ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Login />} />
          </>
        ) : (
          <>
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<Chat />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
