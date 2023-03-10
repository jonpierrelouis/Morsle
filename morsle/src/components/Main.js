import { useState } from "react";
import Letters from "./Letters";

const Main = () => {
  const wordOfTheDay = "BREAD";
  const [word, setWord] = useState([]);    
  const [inputArray0, setInputArray0] = useState([]);
  const [inputArray1, setInputArray1] = useState([]);
  const [inputArray2, setInputArray2] = useState([]);
  const [inputArray3, setInputArray3] = useState([]);
  const [inputArray4, setInputArray4] = useState([]);
 
  const [wordAttempt, setWordAttemp] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    
    if(wordAttempt === 0){setInputArray0(word)}
    else if(wordAttempt === 1){setInputArray1(word)}
    else if(wordAttempt === 2){setInputArray2(word)}
    else if(wordAttempt === 3){setInputArray3(word)}
    else if(wordAttempt === 4){setInputArray4(word)}

    
    //Condition to check game win
    if(word === wordOfTheDay){
      setGameWon(true);
    }else{
      setWordAttemp(wordAttempt + 1);
    }

    setWord('');
    
  }

  return (
    <div className="container">
      <h2 className="center">Morsle</h2>
      {/* Show input by default, then show if player won/lost at end of game conditions happen */}
      {
        (!gameWon && wordAttempt >= 5) ? <div className="center">You Lost!</div> 
        : (gameWon && wordAttempt < 5) ? <div className="center">You Won!</div>
        : <form onSubmit={onSubmit}>
            <input type="text" placeholder="Enter Word Here" minLength={5} maxLength={5} value={word} onChange={(e) => setWord(e.target.value.toUpperCase())}/>
            <input type="submit" />
          </form>
      }

      {/* div showing list of letters and if they are corret or not */}
      { wordAttempt >= 4 && <Letters wordOfTheDay={wordOfTheDay} inputArray={inputArray4}></Letters>}
      { wordAttempt >= 3 && <Letters wordOfTheDay={wordOfTheDay} inputArray={inputArray3}></Letters>}
      { wordAttempt >= 2 && <Letters wordOfTheDay={wordOfTheDay} inputArray={inputArray2}></Letters>}
      { wordAttempt >= 1 && <Letters wordOfTheDay={wordOfTheDay} inputArray={inputArray1}></Letters>}
      { wordAttempt >= 0 && <Letters wordOfTheDay={wordOfTheDay} inputArray={inputArray0}></Letters>}
    </div>
   
  )
}

export default Main