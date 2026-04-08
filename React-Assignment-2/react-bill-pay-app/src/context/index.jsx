import { createContext, useState } from "react";
const MyContext = createContext();
import { ToastContainer, toast } from "react-toastify";

const MyProvider = (props) => {
    const [stage, setStage] = useState(1);
    const [players, setPlayers] = useState([]);
    const [result, setResult] = useState(``)
    const addPlayerHandler = (name) => {
        setPlayers([prevState => ({
            ...prevState,
            name:name
        })]);
    };

    const removePlayerHndler = (idx) => {
        let newArray = [...players];
        newArray.splice(idx, 1);
        setPlayers(newArray); 
    };

    const nextHandlerv = () => {
        if(players.length < 2)
        {
            toast.error("At least 2 players are required to proceed.", {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
            });

        }
        else{
            //next
            setStage(2);
            setTimeout(()=>{
 generateLosers();
            },2000);
     
        }

    }
    const generateLosers =  ()=> {
        let result = players[Math.floor(Math.random()*players.length)];
        setResult(result);
    }

    const resetGameHandler = () => {
        setStage(1);
        setPlayers([]);
        setResult(``);
    }

    return(
        <>
        <MyContext.Provider value={{
            //state
            stage:stage,
            players:players,
            result:result,
            //methods
            addPlayer:addPlayerHandler,
            removePlayer:removePlayerHndler,
            next:nextHandler,
            generateNewLoser:generateLosers,
            resetGame:resetGameHandler

        }}>
            {props.children}

        </MyContext.Provider>
        <ToastContainer />
        </>
    )
}

export {
    MyContext,
    MyProvider
}