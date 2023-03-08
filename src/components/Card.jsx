const Card = (props) => { /*escribir "rafce" crea componente de react de una arrow fusion*/
  
    console.log(props)
  return (
    <>
        <h3>Titulo de card: Element n° {props.elemento}</h3>
    </>
  )
}

export default Card