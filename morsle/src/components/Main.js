import { useState, useEffect } from "react";
import Letter from "./Letter";

const Main = () => {
  const wordOfTheDay = ['B','R','E','A','D'];
  const [word, setWord] = useState('');    
  const [inputArray, setInputArray] = useState([]); 

  const onSubmit = (e) => {
    e.preventDefault();

    
    setInputArray(word.split(''));

    setWord('');
  }

  useEffect(() => {
    
    console.log(inputArray)
    
  }, [inputArray])

  return (
    <>
      {/* Submission form */}
      <div className="container">
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Enter Word Here" minLength={5} maxLength={5} onChange={(e) => setWord(e.target.value.toUpperCase())}/>
          <input type="submit" />
        </form>

        {/* div showing list of letters and if they are corret or not */}
        <div>
          <Letter expected={`${wordOfTheDay[0]}`} actual={`${inputArray[0]}`} arr={wordOfTheDay}></Letter>
          <Letter expected={`${wordOfTheDay[1]}`} actual={`${inputArray[1]}`} arr={wordOfTheDay}></Letter>
          <Letter expected={`${wordOfTheDay[2]}`} actual={`${inputArray[2]}`} arr={wordOfTheDay}></Letter>
          <Letter expected={`${wordOfTheDay[3]}`} actual={`${inputArray[3]}`} arr={wordOfTheDay}></Letter>
          <Letter expected={`${wordOfTheDay[4]}`} actual={`${inputArray[4]}`} arr={wordOfTheDay}></Letter>
        </div>
      </div>
    </>
  )
}

export default Main