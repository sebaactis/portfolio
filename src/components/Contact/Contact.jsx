import { useEffect, useState } from 'react'
import { contactCollection } from "../../firebase";
import { addDoc, serverTimestamp } from "firebase/firestore";
import swal from "sweetalert";


const Contact = () => {



  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confEmail, setConfEmail] = useState("");
  const [details, setDetails] = useState("");


  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleConfEmail = (e) => setConfEmail(e.target.value);
  const handleDetails = (e) => setDetails(e.target.value);

  const alert = () => {
    swal("alerta")
  }

  const enviarInfo = (e) => {
    e.preventDefault();


    const infoContact = {
      nombre: name,
      email: email,
      details: details,
      date: serverTimestamp()
    };

    addDoc(contactCollection, infoContact)
      .then((res) => {
        console.log(res);

      })
      .catch((error) => {
        console.log(error)
      })

    setName("");
    setEmail("");
    setConfEmail("");
    setDetails("");

  };

  return (

    <section className="contactContainer">


      <article className="divContact container">

        <h3 id="contact">If you want to contact me, I leave you the following form, and my active social networks.</h3>

      </article>


      <form className="formContainer" onSubmit={enviarInfo}>

        <h1 style={{ textShadow: "1px 9px 10px rgba(0,0,0,0.6)", color: "white" }}> CONTACT </h1>

        <input className="input" type="text" placeholder="Name" name="name" value={name} onChange={handleName} />
        <input className="input" type="email" placeholder="Email" name="email" value={email} onChange={handleEmail} />
        <input className="input" type="email" placeholder="Confirm Email" name="confEmail" value={confEmail} onChange={handleConfEmail} />
        <textarea placeholder="  Details" maxLength="400" value={details} name="details" onChange={handleDetails}></textarea>
        <button className="btn btn-success" onClick={() => alert()} disabled={name === "" || email === "" || confEmail === "" || details === "" || email !== confEmail}> Send </button>

      </form>


    </section>
  )
}

export default Contact