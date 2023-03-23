import { useState } from 'react'
import '/src/style/Button.css'

function Dropdown({ variant, list, clbk}) {
  /*
    [
      { id: 0, value: "my-value", label: "Quello che vede l'utente"},
      { id: 1, value: "my-value", label: "Quello che vede l'utente"}

    ]
  
  */ 


  function renderClasses(){
    let classes = [
      'Button', 'text-center', 'd-flex', // ....
      variant
    ]

    return classes.join(" ")
  }

  function handleChange(e){
    console.log(e.currentTarget.value)
    if(clbk != undefined){
      clbk(e.currentTarget.value)
    }
  }

  return (
    <div className={renderClasses()}>
      <select onChange={handleChange}>
        <option>Scegli una opzione</option>
        {list.length > 0 &&  list.map((item) =>
            <option 
              key={item.id}
              value={item.value}>
                {item.label}
            </option>
        )}
      </select>
    </div>
  )
}

export default Dropdown
