import React, {useState, useEffect, useContext} from 'react';
import './style.css';
import { Contesto, TContesto } from '../../contesto/context';


function Topbar (){

        const {data, setData} = useContext(Contesto) as TContesto

        const [titolo, setTitolo] = useState<string>('')
        const [contenuto, setContenuto] = useState<string>('')
        const [tag, setTag] = useState<string[]>([])

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
                    
                data?.posts.push(nota)
                setData(data!)


        }

        return(
        <div className="topbar"> 
        <div className="salvataggio">
                <div><h1>SALVARE POST</h1></div>
                <div><button id="save" onClick={() => {salva()}}>SALVA</button></div>
        </div>
        <div className="inserimento">
                <p>INSERISCI TITOLO:</p>
                <input type="textarea" id="text" className="titolo" onChange={(event) => {
                        setTitolo(event.target.value)
                }} />
                 <p>INSERISCI CONTENUTO:</p>
                <input type="textarea" id="text" className="content" onChange={(event) => {
                        setContenuto(event.target.value)
                }} />
        </div>
        </div>
        )
}

export default Topbar;