import Container from "./Container"
import { useState } from "react"
import Results from "./Results"

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
})

function handleChange(userExpected, newValue){
    setUserInput((prevInput)=>{
        return{
            ...prevInput,
            [userExpected]: +newValue
        }
    })
    console.log(userInput)
}

  return (
    <>
      <Container onChange={handleChange} userInput={userInput} />
      <Results input={userInput} />
    </>
  )
}

export default App
