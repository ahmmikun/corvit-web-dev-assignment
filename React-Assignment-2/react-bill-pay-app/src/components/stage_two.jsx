import { useContext } from "react";
import { MyContext } from "../context";

const Stage2 = () => {
  const context = useContext(MyContext);

  return (
    <>
      <div className="result_wrapper">
        <h3>THe Loser is: {context.result} </h3>
      </div>
      <div className="action_button" onClick={() => context.resetGame()}>
        Start Over
      </div>
      <div
        className="action_button btn_2"
        onClick={() => context.generateNewLoser()}
      >
        Generate New Loser
      </div>
    </>
  );
};

export default Stage2;
