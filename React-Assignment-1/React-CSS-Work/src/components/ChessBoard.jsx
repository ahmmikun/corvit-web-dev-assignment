import React from "react";
import "./ChessBoard.css";

export default function ChessBoard() {
  return (
    <section className="chess-wrapper">
      <div className="chess-board">
        <div className="cell black"><span className="piece whitePiece">♜</span></div>
        <div className="cell white"><span className="piece blackPiece">♞</span></div>
        <div className="cell black"><span className="piece whitePiece">♝</span></div>
        <div className="cell white"><span className="piece blackPiece">♛</span></div>
        <div className="cell black"><span className="piece whitePiece">♚</span></div>
        <div className="cell white"><span className="piece blackPiece">♝</span></div>
        <div className="cell black"><span className="piece whitePiece">♞</span></div>
        <div className="cell white"><span className="piece blackPiece">♜</span></div>

        <div className="cell white"><span className="piece blackPiece">♟</span></div>
        <div className="cell black"><span className="piece whitePiece">♟</span></div>
        <div className="cell white"><span className="piece blackPiece">♟</span></div>
        <div className="cell black"><span className="piece whitePiece">♟</span></div>
        <div className="cell white"><span className="piece blackPiece">♟</span></div>
        <div className="cell black"><span className="piece whitePiece">♟</span></div>
        <div className="cell white"><span className="piece blackPiece">♟</span></div>
        <div className="cell black"><span className="piece whitePiece">♟</span></div>

        <div className="cell black"></div>
        <div className="cell white"></div>
        <div className="cell black"></div>
        <div className="cell white"></div>
        <div className="cell black"></div>
        <div className="cell white"></div>
        <div className="cell black"></div>
        <div className="cell white"></div>

        <div className="cell white"></div>
        <div className="cell black"></div>
        <div className="cell white"></div>
        <div className="cell black"></div>
        <div className="cell white"></div>
        <div className="cell black"></div>
        <div className="cell white"></div>
        <div className="cell black"></div>

        <div className="cell black"></div>
        <div className="cell white"></div>
        <div className="cell black"></div>
        <div className="cell white"></div>
        <div className="cell black"></div>
        <div className="cell white"></div>
        <div className="cell black"></div>
        <div className="cell white"></div>

        <div className="cell white"></div>
        <div className="cell black"></div>
        <div className="cell white"></div>
        <div className="cell black"></div>
        <div className="cell white"></div>
        <div className="cell black"></div>
        <div className="cell white"></div>
        <div className="cell black"></div>

        <div className="cell black"><span className="piece whitePiece">♙</span></div>
        <div className="cell white"><span className="piece blackPiece">♙</span></div>
        <div className="cell black"><span className="piece whitePiece">♙</span></div>
        <div className="cell white"><span className="piece blackPiece">♙</span></div>
        <div className="cell black"><span className="piece whitePiece">♙</span></div>
        <div className="cell white"><span className="piece blackPiece">♙</span></div>
        <div className="cell black"><span className="piece whitePiece">♙</span></div>
        <div className="cell white"><span className="piece blackPiece">♙</span></div>

        <div className="cell white"><span className="piece blackPiece">♖</span></div>
        <div className="cell black"><span className="piece whitePiece">♘</span></div>
        <div className="cell white"><span className="piece blackPiece">♗</span></div>
        <div className="cell black"><span className="piece whitePiece">♕</span></div>
        <div className="cell white"><span className="piece blackPiece">♔</span></div>
        <div className="cell black"><span className="piece whitePiece">♗</span></div>
        <div className="cell white"><span className="piece blackPiece">♘</span></div>
        <div className="cell black"><span className="piece whitePiece">♖</span></div>
      </div>
    </section>
  );
}