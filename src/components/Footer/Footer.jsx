import instagram from "../../img/networks/instagram.png"
import linkedin from "../../img/networks/linkedin.png"
import github from "../../img/networks/github.png"
import twitter from "../../img/networks/twitter.png"


const Footer = () => {
    return (
        <footer className="footer">

            <a href="https://www.instagram.com/sebaactis/" target="_blank"> <img className="socialFooter" src={instagram} /> </a>
            <a href="https://www.linkedin.com/in/sebastianactis/" target="_blank"> <img className="socialFooter"  src={linkedin} /> </a>
            <a href="https://github.com/sebaactis" target="_blank"> <img className="socialFooter"  src={github} />  </a>
            <a href="https://twitter.com/SebaActis" target="_blank"> <img className="socialFooter"  src={twitter} />  </a>

        </footer>
    )
}

export default Footer