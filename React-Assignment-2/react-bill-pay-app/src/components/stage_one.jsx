import { useState, useContext, useRef } from "react";
import { Form, Alert } from "react-bootstrap";
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
    if (value.length <= 2) {
      setError([true, `Player name should be at least 3 characters long`]);
      return false;
    }
    return true;
  };

  return (
    <>
      <Form className="mt-4" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Add player name"
            name="player"
            ref={textInput}
          />
        </Form.Group>

        {error[0] ? (
          <Alert variant="danger" className="mt-2">
            {error[1]}
          </Alert>
        ) : null}

        <button className="miami" type="submit">
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
                    <span
                      className="badge bg-danger"
                      onClick={() => context.removePlayer(idx)}
                    >
                      x
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="action_button" onClick={() => context.next()}>
              NEXT
            </div>
          </>
        ) : null}
      </Form>
    </>
  );
};

export default Stage1;
