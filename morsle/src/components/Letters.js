import Letter from "./Letter"

const Letters = ({wordOfTheDay, inputArray, count}) => {
  // console.log(inputArray)
  return (
    <div>
      <Letter expected={`${wordOfTheDay[0]}`} actual={`${inputArray[0]}`} arr={wordOfTheDay}></Letter>
      <Letter expected={`${wordOfTheDay[1]}`} actual={`${inputArray[1]}`} arr={wordOfTheDay}></Letter>
      <Letter expected={`${wordOfTheDay[2]}`} actual={`${inputArray[2]}`} arr={wordOfTheDay}></Letter>
      <Letter expected={`${wordOfTheDay[3]}`} actual={`${inputArray[3]}`} arr={wordOfTheDay}></Letter>
      <Letter expected={`${wordOfTheDay[4]}`} actual={`${inputArray[4]}`} arr={wordOfTheDay}></Letter>
    </div>
  )
}

export default Letters