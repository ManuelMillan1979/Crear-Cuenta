import React, { useState } from "react"
import SocialButton from "./SocialButton"
import Formulario from "./Formulario"
import Alert from "./Alert"


function Registro() {
    const [error, setError] = useState({
      error: false,
      mensaje: "",
      color: "danger",
    })

    const [registroExitoso, setRegistroExitoso] = useState(false)

    return (
      <main className="background">
        <h1 className="my-2">Crea una Cuenta</h1>
        <SocialButton facebook={"facebook"} />
        <SocialButton github={"github"} />
        <SocialButton linkedin={"linkedin"} />
        <p>O usa tu email para registrarte</p>
        <Formulario
          error={error}
          setError={setError}
          setRegistroExitoso={setRegistroExitoso}
        />
        <Alert error={error} registroExitoso={registroExitoso} />
      </main>
    )
  }
  export default Registro