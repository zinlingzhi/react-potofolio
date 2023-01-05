import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {

  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const time = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(time);
  }, []);


  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','m','e']} idx={15} />
          </h1>
          <p>
            I'm interested in freelance opportunities - especially ambitious or large projects. However, if you have other requests or question, don't hestiate to contact me using below form either.
          </p>
          <div className='contact-form'>
            <form>
              <ul>
                <li className='half'>
                  <input type="text" name='name' placeholder='name' required />
                </li>
                <li className='half'>
                  <input type="email" name='email' placeholder='email' required />
                </li>
                <li className='half'>
                  <input type="text" name='subject' placeholder='Subject' required />
                </li>
                <li className='half'>
                  <textarea type="text" name='name' placeholder='Message' required />
                </li>
                <li className='half'>
                  <input type="submit" className='flat-button' value='SEND'/>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>

  )
}

export default Contact;