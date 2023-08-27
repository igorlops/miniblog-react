import styles from './About.module.css'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className={styles.about}>
        <h1>Sobre o Mini <span>Blog</span></h1>
        <p>
          Este projeto consiste em um blog criado com React no front-end e Firebase no back-end
        </p>
        <Link to="/post/create" className="btn"> Criar Post</Link>
    </div>
  )
}

export default About