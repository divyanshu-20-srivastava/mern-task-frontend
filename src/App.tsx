import "./index.css";
import "./styles/IdeClone.css";
import "./styles/SampleSplitter.css";
import IdeClone from "./components/IdeClone";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Analytics from "./components/Analytics";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IdeClone />}></Route>
          <Route path="/analytics" element={<Analytics />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
