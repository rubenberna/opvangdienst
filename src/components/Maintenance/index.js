import React from "react"
import { Jumbotron } from "react-bootstrap"

export default function Component() {
  return (
    <div style={{ width: "100%", height: "70vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Jumbotron>
        <h1>Site under maintenance</h1>
        <p>
          Please bear with us while we solve this issue.
        </p>
        <p>
          <a href="https://www.facebook.com/Dienst-Opvanggezinnen-Gezinsbond-Gewest-Antwerpen-108867864144180"
            style={{ textDecoration: 'none'}}>
            Or visit our Facebook page
          </a>
        </p>
      </Jumbotron>
    </div>
  )
}