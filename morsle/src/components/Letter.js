
const Letter = ({expected, actual, arr}) => {

  if(actual === 'undefined'){
    actual = ''
  }
  return (
    
    expected === actual ?//first if condition -- green background if true
    <div className="letter-container" style={{backgroundColor:'green'}}>{actual}</div>
    : arr.includes(actual) //second if condition -- check to see if letter is in array (show yellow) if not show red
      ? <div className="letter-container" style={{backgroundColor:'yellow'}}>{actual}</div>
    : <div className="letter-container" style={{backgroundColor:'red'}}>{actual}</div>
        
  )
}

export default Letter