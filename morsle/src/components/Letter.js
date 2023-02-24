
const Letter = ({expected, actual, arr}) => {

  if(actual === 'undefined'){
    actual = ''
  }
  return (
    
    actual === '' ? //first if condition -- when a letter is not in the box
    <div className="letter-container" style={{backgroundColor:'grey'}}>{actual}</div>
    : expected === actual ?//second if condition -- when letter is in box and is true
    <div className="letter-container" style={{backgroundColor:'green'}}>{actual}</div>
    : arr.includes(actual) //third if condition -- when letter is not in the box, but in the word somewhere else
      ? <div className="letter-container" style={{backgroundColor:'yellow'}}>{actual}</div>
      //fourth if condition -- when letter is in box but is not in the word at all
    : <div className="letter-container" style={{backgroundColor:'red'}}>{actual}</div>
        
  )
}

export default Letter