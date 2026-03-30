import React from "react";
import "./Ludo.css";

const board = [
  ["g","g","g","g","g","g","","","","b","b","b","b","b","b"],
  ["g","g","g","g","g","g","","b","b","b","b","b","b","b","b"],
  ["g","g","g","g","g","g","","b","","b","b","b","b","b","b"],
  ["g","g","g","g","g","g","","b","","b","b","b","b","b","b"],
  ["g","g","g","g","g","g","","b","","b","b","b","b","b","b"],
  ["g","g","g","g","g","g","","","","b","b","b","b","b","b"],

  ["","g","","","","","c","c","c","","","","","",""],
  ["","g","g","g","g","g","c","c","c","y","y","y","y","y",""],
  ["","","","","","","c","c","c","","","","","y",""],

  ["r","r","r","r","r","r","","r","","y","y","y","y","y","y"],
  ["r","r","r","r","r","r","","r","","y","y","y","y","y","y"],
  ["r","r","r","r","r","r","","r","","y","y","y","y","y","y"],
  ["r","r","r","r","r","r","r","","","y","y","y","y","y","y"],
  ["r","r","r","r","r","r","","r","","y","y","y","y","y","y"],
  ["r","r","r","r","r","r","","","","y","y","y","y","y","y"],
];

export default function Ludo() {
  return (
    <section className="ludo-wrapper">
      <table className="ludo-board">
        <tbody>
          {board.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  key={`${rowIndex}-${colIndex}`}
                  className={cell ? cell : ""}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}