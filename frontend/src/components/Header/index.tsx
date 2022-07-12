import './styles.css'
import { AiFillGithub } from 'react-icons/ai'
import logo from '../../assets/img/logo.svg'

export function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>Meta</h1>
        <p>
          Desenvolvido por
          <a href="https://www.github.com/AllanPessin">
            <AiFillGithub /> 
            AllanPessin
          </a>
        </p>
      </div>
    </header>
  )
}