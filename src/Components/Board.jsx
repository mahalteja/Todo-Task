import React from "react";
import "../Styles/Board.css";
import BoardTodo from "./BoardTodo";
import BoardInProgress from "./BoardInProgress";
import BoardCompleted from "./BoardCompleted";

const Board = ({data,deleteval}) => {
  return (
    <div className="board-sec">
      <BoardTodo Task_List={data} deleteval={deleteval}/>
      <BoardInProgress data={data} deleteval={deleteval}/>
      <BoardCompleted data={data} deleteval={deleteval}/>
    </div>
  );
};

export default Board;
