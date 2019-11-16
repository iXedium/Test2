import React ,{useState} from "react";
import "./assets/Sass/main.scss";
import SideButton from "./components/side.button";
import { setState } from "expect/build/jestMatchersObject";

function App() {
   const [page, setPage] = useState(0);
  return (
    <React.Fragment>
      <div className="x-header">this is header</div>
      <div className="x-main">
        <div className="x-side">
          <SideButton title={"Organization"} active={page === 0} onClick={()=>setPage(0)}></SideButton>
          <SideButton title={"Address Book"} active={page === 1} onClick={()=>setPage(1)}></SideButton>
          <SideButton title={"Address Book"} active={page === 2} onClick={()=>setPage(2)}></SideButton>
        </div>
        <div className="x-content">content</div>
      </div>
    </React.Fragment>
  );
}

export default App;
