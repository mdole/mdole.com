import React from "react"
import { Pre } from "../../components/pre"

export const morningCode = () => {
  return (
    <Pre>
      <code class="language-javascript">
        {`const routine = time => {
  switch (time) {
    case 7:00: Wake up, check phone
    case 7:05: Return to couch
    case 7:15: Think about doing physical therapy exercises
    case 7:20: Decide to do half of the exercises
    case 7:30: Feel like you should be working on code, return to couch instead
    case 7:45: Say good morning to Bianca
    case 8:00: Toast with goat cheese
    case 8:20: Journal
    case 8:40: Shower, dress, pack a tote bag, catch the 4
    default: Anxiety
  }
}
`}
      </code>
    </Pre>
  )
}
