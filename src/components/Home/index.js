import { useEffect, useState } from 'react';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import LogoS from '../../assets/images/logo-s.png';
import './index.scss';
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n'];
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

  useEffect(() => {
    const setLetterTimer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000);

    return () => clearTimeout(setLetterTimer);
  }, [])
  
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span> 
            <span className={`${letterClass} _12`}>i, </span> 
            <br /> I'm
            <img src={LogoS} alt="S" />
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={15} />
          </h1>
          <h2>FullStack Developer / Javascript Experter</h2>
          <div className='flat-button'>Contact</div>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Home;