import { useContext } from "react";
import { MyContext, useContext } from "./context/index.jsx";

import "bootsrap/dist/css/bootsrap.min.css";
import "./style/css";
import Stage1 from "./components/stage_one";
import Stage2 from "./components/stage_two";

const app = () => {
  const context = useContext(MyContext);
  return (
    <div className="wrapper">
      <div className="center-wrapper">
        <h1>Who pays the bill</h1>
        {context.stage == 1 ? <Stage1 /> : <Stage2 />}
      </div>
    </div>
  );
};

export default app;
