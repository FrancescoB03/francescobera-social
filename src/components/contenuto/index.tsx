import React, { useContext } from 'react'
import './style.css';
import { Root } from '../../types/types';
import { Contesto, TContesto } from '../../contesto/context';


function Contenuto(): JSX.Element {
        const {data, setData} = useContext(Contesto) as TContesto
        return(
        <div className="contenuto"> 
                {data && data.posts.map((elemento) => (
                <div className="dato">
                <ul>
                        <li>
                                <p>{elemento.body}</p>
                        </li>
                </ul>
                </div>   
                ))}
        </div>
        )
}

export default Contenuto;