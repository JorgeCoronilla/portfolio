
import { BrowserRouter } from "react-router-dom";
import { Section1 } from "./components/section1";
import { Section2 } from "./components/section2";

function App() {
  return (
    <div>
       <BrowserRouter>
        <Section1 />
        <Section2 />
      </BrowserRouter>
      
    </div>

  );
}

export default App;
