import { BrowserRouter, Route,Routes } from "react-router-dom"
import {RegisterPages} from "./pages/registerPages.jsx"
import ExitPages from "./pages/ExitPages.jsx"
import {HomePages} from "./pages/HomePages.jsx"
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePages/>} />
        <Route path="/register" element={<RegisterPages />} />
        <Route path="/exit" element={<ExitPages />} />
      </Routes>
    </BrowserRouter>
  )
}
