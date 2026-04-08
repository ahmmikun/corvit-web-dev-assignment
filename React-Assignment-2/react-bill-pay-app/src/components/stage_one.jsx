import { useState, useContext, useRef } from "react";
import { Button, Form, Alert } from "react-bootsrap";
import { MyContext } from "../context";

const Stage1 = () => {
  const textInput = useRef();
  const context = useContext(MyContext);
  const [error, setError] = useState([false, ``]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;
    const validate = validateInput(value);

    //validation
    if (validate) {
        setError([false, ``]);
      context.addPlayer(value);
      textInput.current.value = ``;
    }
  };

  const validateInput = (value) => {
    if (value === ``) {
      setError([true, `Player name cannot be empty`]);
      return false;
    }
    if(value.lenght <= 2)
        {
            setError([true, `Player name should be at least 3 characters long`]);
            return false;

        }
    return true;
  };

  return (
    <>
      <form className="mt-4" action="" onSubmit={handleSubmit}>
        <form.Group>
          <Form.Control
            type="text"
            placeholder="Add layer name"
            name="player"
            ref={textInput}
          />
        </form.Group>

        {error[0] ? (
          <Alert variant="danger" className="mt-2">
            {error[1]}
          </Alert>
        ) : null}

        <button className="miami" variant="primary" type="submit">
          Add Player
        </button>
        {context.players && context.players.length > 0 ? (
          <>
            <hr />
            <div>
              <ul className="list-group">
                {context.players.map((player, idx) => (
                  <li
                    key={idx}
                    className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
                  >
                    {player}
                    <span className="badge badge-danger
                    onClick={()=>context.removePlayer(idx  )}
                    ">x</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="action_button"
            onClick={()=> context.next()}>NEXT</div>
          </>
        ) : null}
      </form>
    </>
  );
};

export default Stage1;
