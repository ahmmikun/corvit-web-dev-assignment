import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const MyContext = createContext();

const MyProvider = (props) => {
  const [stage, setStage] = useState(1);
  const [players, setPlayers] = useState([]);
  const [result, setResult] = useState("");

  const addPlayerHandler = (name) => {
    setPlayers((prevState) => [...prevState, name]);
  };

  const removePlayerHandler = (idx) => {
    setPlayers((prevState) => prevState.filter((_, index) => index !== idx));
  };

  const generateLoser = () => {
    const loser = players[Math.floor(Math.random() * players.length)];
    setResult(loser);
  };

  const nextHandler = () => {
    if (players.length < 2) {
      toast.error("At least 2 players are required to proceed.", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
      });
    } else {
      setStage(2);
      setTimeout(() => {
        generateLoser();
      }, 2000);
    }
  };

  const resetGameHandler = () => {
    setStage(1);
    setPlayers([]);
    setResult("");
  };

  return (
    <>
      <MyContext.Provider
        value={{
          stage,
          players,
          result,
          addPlayer: addPlayerHandler,
          removePlayer: removePlayerHandler,
          next: nextHandler,
          generateNewLoser: generateLoser,
          resetGame: resetGameHandler,
        }}
      >
        {props.children}
      </MyContext.Provider>
      <ToastContainer />
    </>
  );
};

export {
  MyContext,
  MyProvider,
};
