import React from 'react'

const Contact = () => {
  return (

    <section className="contactContainer">

    <article className="divContact container">
      
      <h3>Trabajemos juntos! Deja tus datos aqui</h3>

    </article>


      <form className="formContainer">

        <input className="input" type="text" placeholder="Name" />
        <input className="input" type="email" placeholder="Email" />
        <textarea  placeholder="  Details" maxLength="400" ></textarea>
        <button type="submit" className="btn btn-primary"> Submit </button>

      </form>


    </section>
  )
}

export default Contact