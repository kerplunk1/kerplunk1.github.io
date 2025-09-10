import logo from '../../assets/logo.ico'
import './Header.css'

export default function Header() {
  return (
    <>
      <header className='header'>
        <div className='hello'>
          <img src={logo} alt='logo' className='logo'/>
          <div>Привет, меня зовут Александр!</div>
        </div>
      </header>
    </>
  );
}