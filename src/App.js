import "./App.css";
import Header from './components/Header/';
import Visor from './components/Visor';
import Button from './components/Button';
import decoder from './hooks/decoder'

import { useState } from 'react';
import Footer from "./components/Footer";

function App() {

  const [numeros, setNumeros] = useState([]);
  const [resultadoTela, setResultadoTela] = useState([]);

  function handleSetNumero(e) {
    e.preventDefault();

    const array = []
    array.push(...numeros, e.currentTarget.id)
    setNumeros(array);
  }

  function handleEnter() {
    const envio = [];
    envio.push(numeros.toString().replace(/[^0-9]/g, ''))
    const decodificada = decoder(envio);

    const arrayMostrar = [];
    arrayMostrar.push(...resultadoTela, decodificada);
    setResultadoTela(arrayMostrar);
    setNumeros([]);
  }

  function handleDeleteNumero(e) {
    e.preventDefault()

    const envio = resultadoTela;
    envio.pop();
    console.log(envio);
    setResultadoTela([]);

    setTimeout(() => { setResultadoTela(envio) }, 10);
  }

  return (
    <>
      <div className="App">
        <Header />
        <Visor numeros={numeros} resultadoTela={resultadoTela} />
        <div className="container-keyboard">
          <div className="keyboard">

            <div onClick={e => handleDeleteNumero(e)} >
              <Button content="DEL" />
            </div>

            <div id="2" onClick={e => handleSetNumero(e)} >
              <Button content="2" />
            </div>
            <div id="3" onClick={e => handleSetNumero(e)} >
              <Button content="3" />
            </div>
            <div id="4" onClick={e => handleSetNumero(e)} >
              <Button content="4" />
            </div>
            <div id="5" onClick={e => handleSetNumero(e)} >
              <Button content="5" />
            </div>
            <div id="6" onClick={e => handleSetNumero(e)} >
              <Button content="6" />
            </div>
            <div id="7" onClick={e => handleSetNumero(e)} >
              <Button content="7" />
            </div>
            <div id="8" onClick={e => handleSetNumero(e)} >
              <Button content="8" />
            </div>
            <div id="9" onClick={e => handleSetNumero(e)} >
              <Button content="9" />
            </div>
            <Button content="*" />
            <div id="0" onClick={e => handleSetNumero(e)}>
              <Button content="0" />
            </div>
            <Button content="#" />

          </div>
          <button className="btn-enter" onClick={handleEnter}>Enter</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
