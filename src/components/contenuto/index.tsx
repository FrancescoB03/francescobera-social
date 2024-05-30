import React, { useContext } from "react";
import "./style.css";
import { Root } from "../../types/types";
import { Contesto, TContesto } from "../../contesto/context";

function Contenuto(): JSX.Element {
  const { data, setData } = useContext(Contesto) as TContesto;
  return (
    <>
      <div className="contenuto">
        {data &&
          data.slice().reverse().map((elemento) => (
            <div className="dato">
              <b>{elemento.title}</b>
              <p className="text" id="testo">
                {elemento.body}
              </p>
              <p className="text"> #{elemento.tags.join(" #")}</p>
              <p className="text">
                Views: {elemento.views} &#128064; ; 
                Likes:{" "} {elemento.reactions.likes} &#128077; ; 
                Dislikes:{" "} {elemento.reactions.dislikes} &#128078;
              </p>
            </div>
          ))}
          
      </div>
      <div className="footer">
        <p>This page was made by Francesco Berardino</p>
      </div>
    </>
  );
}

export default Contenuto;
