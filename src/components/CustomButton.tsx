//ENUM - för typ säkerheten, utmärkt verktyg för när vi har en lista av oföränderliga värden, speciellt när vi ska reflektera kod sedan som sedan appliceras på på andra ställen också.
/* TODO - Have we interacted with the button?
 *   Check for states, for hover, clicked and idle
 *   Classname TEST */

import { useState } from "react"

// ENUM - 3 different states for button
export enum ButtonState {
  idle = "idle",
  hover = "hover",
  clicked = "clicked",
}


// Interface - PROPS
interface CustomButtonProps {
  buttonText: string
}

export default function CustomButton(props: CustomButtonProps) {
  const [buttonState, setButtonState] = useState<ButtonState>(ButtonState.idle)

  return (
    <input
      type="button"
      value={props.buttonText}
      className={buttonState}
      onMouseLeave={() => {
        setButtonState(ButtonState.idle)
      }}
      onMouseEnter={() => {
        setButtonState(ButtonState.hover)
      }}
      onClick={() => {
        setButtonState(ButtonState.clicked)
      }}
    />
  )
}