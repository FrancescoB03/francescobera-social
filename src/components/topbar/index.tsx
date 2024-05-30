import React, { useState, useEffect, useContext } from 'react';
import './style.css';
import { Contesto, TContesto } from '../../contesto/context';


function Topbar() {

        const { data, setData } = useContext(Contesto) as TContesto

        const [titolo, setTitolo] = useState<string>('')
        const [contenuto, setContenuto] = useState<string>('')

        function salva() {

                const nota = {
                        id: 1,
                        title: titolo,
                        body: contenuto,
                        tags: [''],
                        reactions: {
                                likes: 200,
                                dislikes: 100
                        },
                        views: 21000,
                        userId: 2
                }

                data && data.push(nota)
                setData([...data!])
        }

        return (
                <div className="topbar">
                                <div className="salvataggio">
                                        <h2>SAVE THE POST :</h2>
                                        <button id="save" onClick={() => { salva() }}>SAVE</button>
                                </div>
                                <div className="inserimento">
                                        <h3>INSERT TITLE:</h3>
                                        <input type="textarea" id="text" className="titolo" onChange={(event) => {
                                                setTitolo(event.target.value)
                                        }} />
                                        <h3>INSERT CONTENT:</h3>
                                        <input type="textarea" id="text" className="content" onChange={(event) => {
                                                setContenuto(event.target.value)
                                        }} />
                                </div>
                </div>
        )
}

export default Topbar;