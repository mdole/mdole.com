import React, { useState, useEffect } from "react"
import { Pre } from "../../components/pre"
import Prism from "prismjs"
import "./syntax-highlighting/prism.css"

export const newYorkCode = () => {
  const [highlight, setHighlight] = useState()
  useEffect(() => {
    Prism.highlightAll()
  })
  return (
    <Pre>
      <code className="language-javascript">
        {`const aggression = true

const vacation = () => {
  while (newYork) {
    wishToLeave()
  }
  while (elsewhere) {
    wishToReturn()
  }
  return (refreshed)
}

const smells = {
  street: ["garbage", "urine", "pizza", "diesel", "weed"],
  park: ["sweat", "grass", "weed", "flowers"],
  rideShare: ["too many air fresheners"],
  office: ["coffee", "donuts", "my deoderant", "microwaved fish"],
}

const sounds = {
  street: [
    "honking",
    "delivery bag rustling in wind",
    "high heels",
    "motorcycles",
  ],
  park: ["barking dog", "ball in mitt", "meat on grill"],
  office: [
    "honking",
    "sirens",
    "engineer on a call",
    "team standup",
    "keyboard clacking",
    "music accidentally played through monitor",
  ],
}
                
                `}
      </code>
    </Pre>
  )
}
