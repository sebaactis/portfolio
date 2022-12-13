import { proyectsObj } from "./ProyectsObj"

const Proyects = () => {

  return (

    <>

      <h1 style={{ textAlign: "center", marginTop: "10rem", color: "white", textShadow: "1px 9px 10px rgba(0,0,0,0.6)" }} id="proyects"> PROYECTS </h1>
      <section className="proyectSection">

        {
          proyectsObj.map((proyect) => {
            return (
              <figure style={{ width: "35rem"}} key={proyect.id}>
                <img src={proyect.img} alt="proyect" />
                <div className="proyectHov">
                  <p>
                    {proyect.description}
                  </p>
                  <div className="proyButtons">
                    <a href={proyect.linkgit} target="_blank" className="gitBtn"> GITHUB </a>
                    <a href={proyect.linkweb} target="_blank" className="webBtn"> Website </a>
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