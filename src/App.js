import Detail from "./components/Detail"
import Home from "./routes/Home"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/movie/:id" element={<Detail />}/>
    </Routes>
  </div>
  ) 
}

export default App
