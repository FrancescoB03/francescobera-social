import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Titolo from './components/titolo';
import Topbar from './components/topbar';
import Contenuto from './components/contenuto';
import { Root, Post, Reactions } from './types/types';
import { Contesto, TContesto } from './contesto/context';

function App() {

  const [data, setData] = useState<Post[]>();
  const [contesto, setContesto] = useState<Root>();

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
    .then(response => response.json())
    .then(json => setData((json as Root).posts))
  }, [])

  const props={data, setData}

  return (
    <Contesto.Provider value = {props}>
    <div className="App">
        <Titolo/>
        <Topbar />
        <Contenuto />
    </div>
    </Contesto.Provider>
  );
}

export default App;
