import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Topbar from './components/topbar';
import Contenuto from './components/contenuto';
import { Root, Post, Reactions } from './types/types';
import { Contesto, TContesto } from './contesto/context';

function App() {

  const [data, setData] = useState<Root>();
  const [contesto, setContesto] = useState<Root>();

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
    .then(response => response.json())
    .then(json => setData(json))
  }, [])

  const props={data}

  const propsTypes: TContesto = {data, setData}

  return (
    <Contesto.Provider value = {propsTypes}>
    <div className="App">
        <Topbar />
        <Contenuto />
    </div>
    </Contesto.Provider>
  );
}

export default App;
