import React, {useState, useEffect} from 'react';
import './button.css';

export default function Button(props) {
  let letters = "";
  switch(props.content) {
    case "1":
      letters = "";
      break;
    case "2":
      letters = "abc";
      break;
    case "3":
      letters = "def";
      break;
    case "4":
      letters = "ghi";
      break;
    case "5":
      letters = "jkl";
      break;
    case "6":
      letters = "mno";
      break;
    case "7":
      letters = "pqrs";
      break;
    case "8":
      letters = "tuv";
      break;
    case "9":
      letters = "wxyz";
      break;
    case "0":
    letters = "_";
    break;
    default:
      letters = "";
    break;
  }


  const [arrayTeste, setArrayTeste] = useState([]);
  const [ultimo, setUltimo] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(()=>{
    setIndex(arrayTeste.length === 1 ? 0 : arrayTeste.length);
    setUltimo(arrayTeste[index]);
    // console.log(arrayTeste);
  }, [arrayTeste]);

  const handleTeste = (prop) => (event) => {
    if(!arrayTeste[0]){
      setArrayTeste([prop]);
      return;
    }
    if(arrayTeste[0]){
      if(ultimo.includes(prop)){
        const novoItem = `${ultimo}${prop}`;
        // arrayTeste.splice(index, 1);
        // arrayTeste.push(novoItem);
        return;
      } 
    }
    setArrayTeste([...arrayTeste, prop]);
  }


  return (
      <button className="button" onClick={handleTeste(props.content)}>
        {props.content}
        <span className="letters-btn">{letters}</span>
      </button>
  )
}