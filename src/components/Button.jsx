import { useState } from 'react'
import '/src/style/Button.css'

function Button({ content, variant, clbk }) {

  function renderClasses(){
    let classes = [
      'Button', 'text-center', 'd-flex', // ....
      variant
    ]
    return classes.join(" ")
  }

  function componentClickHandler(e){
    console.log("Ho cliccato sul componente!")

    if(clbk !== undefined && variant !== "disabled"){
      clbk()
    }
  }

  return (
    <div onClick={componentClickHandler} className={renderClasses()}>
        {content}
    </div>
  )
}

export default Button
