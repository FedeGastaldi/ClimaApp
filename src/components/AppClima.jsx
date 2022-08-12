import Formulario from "./Formulario"
import Resultado from "./Resultado"
import useClima from "../hooks/useClima"

const appClima = () => {

  const {resultado , noResultado} = useClima()

  return (
    <>
        <main className="dos-columnas">
            <Formulario/>

            {resultado?.name && <Resultado/>}
        </main>
    </>
  )
}

export default appClima