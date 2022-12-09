import { proyectsObj } from "./ProyectsObj"

const Proyects = () => {


  return (

    <>

      <h1 style={{ textAlign: "center", marginTop: "10rem", color: "white" }} id="proyects"> My Proyects </h1>
      <section className="proyectSection">

        {
          proyectsObj.map((proyect) => {
            return (
              <figure style={{ width: "30rem" }} key={proyect.id}>
                <img src={proyect.img} alt="proyect" />
                <div className="proyectHov">
                  <p>
                    {proyect.description}
                  </p>
                  <div className="proyButtons">
                    <button className="gitBtn"> Github </button>
                    <button className="webBtn"> Website </button>
                  </div>
                </div>

              </figure>
            )
          })
        }



      </section>

    </>
  )
}

export default Proyects