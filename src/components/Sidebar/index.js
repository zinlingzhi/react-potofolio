import { faGithub, faLinkedin, faSkype, faStackOverflow, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faUser, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoSub from '../../assets/images/logo_sub.png';
import './index.scss';

const Sidebar = () => {
  return (
    <div className='nav-bar'>
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub_logo" src={LogoSub} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" rel='noreferrer' href=''>
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li> 
        <li>
        <a target="_blank" rel='noreferrer' href=''>
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
        <a target="_blank" rel='noreferrer' href=''>
            <FontAwesomeIcon icon={faStackOverflow} color="#4d4d4e" />
          </a>
        </li>
        <li>
        <a target="_blank" rel='noreferrer' href=''>
            <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;