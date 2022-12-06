import { proyectsObj } from "./ProyectsObj"

const Proyects = () => {
  return (

    <>

      <h1 style={{ textAlign: "center", marginTop: "10rem", color: "white" }}> My Proyects </h1>
      <section className="proyectSection">

        {
          proyectsObj.map((proyect) => {
            return (
              <figure style={{width: "30rem"}} key={proyect.id}>
                <img src={proyect.img} alt="proyect" />
                <figcaption>
                  <p>
                    {proyect.description}
                  </p>
                  <a  className="btn btn-warning">GITHUB </a>
                </figcaption>

              </figure>
            )
          })
        }



      </section>

    </>
  )
}

export default Proyects