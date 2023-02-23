import { useState, useEffect } from "react";
import Letters from "./Letters";

const Main = () => {
  const wordOfTheDay = ['B','R','E','A','D'];
  const [word, setWord] = useState('');    
  const [inputArray, setInputArray] = useState([]);
  let inputArr = ["","","","",""];
  const [wordAttempt, setWordAttemp] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    inputArr[wordAttempt] = word;
    setInputArray(inputArr);
    setWordAttemp(wordAttempt + 1);

    setWord('');
  }

  useEffect(() => {
    
    // console.log(word)
    console.log(inputArray)
    
  }, [inputArray])

  return (
    <>
      <div className="container">
        {/* Submission form */}
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Enter Word Here" minLength={5} maxLength={5} onChange={(e) => setWord(e.target.value.toUpperCase())}/>
          <input type="submit" />
        </form>

        {/* div showing list of letters and if they are corret or not */}
        {wordAttempt >= 0 && <Letters wordOfTheDay={wordOfTheDay} inputArray={inputArray[0]}></Letters>}
        {wordAttempt >= 1 && <Letters wordOfTheDay={wordOfTheDay} inputArray={inputArray[1]}></Letters>}
        {wordAttempt >= 2 && <Letters wordOfTheDay={wordOfTheDay} inputArray={inputArray[2]}></Letters>}
        {wordAttempt >= 3 && <Letters wordOfTheDay={wordOfTheDay} inputArray={inputArray[3]}></Letters>}
        {wordAttempt >= 4 && <Letters wordOfTheDay={wordOfTheDay} inputArray={inputArray[4]}></Letters>}
      </div>
    </>
  )
}

export default Main