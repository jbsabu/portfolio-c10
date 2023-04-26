import {Github} from 'react-bootstrap-icons'
// import { Row, Col, Container } from "react-bootstrap";  


export default function Footer (){
  const year = new Date().getFullYear()
  const gitURL = "https://github.com/jbsabu/portfolio-c10"
  return(
    <footer >
      <a href={gitURL} className='button-effect' rel = "noreferrer" target = "_blank"><Github size = "60" color = "black" /></a> &nbsp; <p>&copy; {year}</p>
    </footer>
  )
}

