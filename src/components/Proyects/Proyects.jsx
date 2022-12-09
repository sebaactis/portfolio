import { proyectsObj } from "./ProyectsObj"

const Proyects = () => {


  return (

    <>

      <h1 style={{ textAlign: "center", marginTop: "10rem", color: "white" }} id="proyects"> MY PROYECTS </h1>
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
                    <a href={proyect.linkgit} target="_blank" className="gitBtn"> GITHUB </a>
                    <a href="#" className="webBtn"> Website </a>
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