import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './style/App.css'
import Button from './components/Button'
import EditorialContent from './components/EditorialContent'
import Dropdown from './components/Dropdown'

function App() {
  const [ joke, setJoke ] = useState("")
  const [ categories, setCategories ] = useState([])
  
  let ar = ["animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"]

  let ciccino = "TEST"

  function clickHandler(){
    setCount(count + 1)
  }

  function loadJoke(){
    // Qui carichiamo il joke da questo URL https://api.chucknorris.io/jokes/random
    console.log("Qui carico il joke")
    setJoke("Losacco puzza")
  }

  function loadCategories(){
    // fetch api su https://api.chucknorris.io/jokes/categories
      // Una volta che ho l'array caricato creo un nuovo array di oggetti
      // E quell'array di oggetti sarà quello che passerò a setCategories
      let objects = [
        { label: "Test", value: "test"},
        { label: "Sport", value: "sport"}
      ]
      setCategories(objects)
  }

  function copyText(){
    console.log("Qui copio il testo del joke")
  }

  useEffect(()=>{
    console.log("component mounted")
    if(categories.length === 0){
      // loadCategories()
    }
  })


  

  return (
    <div className="App">
      <EditorialContent 
        title="Benvenuti nel sito di Chuck Norris"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni itaque odit aperiam, sapiente obcaecati veritatis enim, a delectus ab repellat libero quis rem, autem atque deserunt architecto praesentium suscipit dolorem."
        />
      

      {categories.length > 0 && <Dropdown list={categories}/>}

      { joke !== "" && 
        <div id="joke">{joke}</div>
      }


      <Button 
        content="Carica il joke" 
        variant="dark"
        clbk={loadJoke}
        />
      <Button 
        content="Copia il testo" 
        variant={ joke === "" ? "disabled" : "" }  // se il joke è "" -> variant=disabled; altrimenti variant=""
        clbk={copyText}/>

      <Button 
        content="Copia il testo" 
        variant="disabled" />

      <EditorialContent 
        title="Benvenuto"
        content="Lorem ipsum..."
        />
        

      <EditorialContent 
        title="Ciccino"
        content="Un altro contenuto..."
        />
    </div>
  )
}

export default App
