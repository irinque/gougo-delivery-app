import './Header.css'
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo_gougo.svg';

function Header() {
  return (
    <>
    <header className='app-header'>
      <div className="header-logo">
        <Logo className='header-logo-svg'/>
      </div>
      <div className="header-switcher">
        <nav className='switcher-buttons'>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : 'inactive'}>Нужна доставка</NavLink>
          <NavLink to="/delivery-jobs" className={({ isActive }) => isActive ? 'active' : 'inactive'}>Для курьеров</NavLink>
        </nav>
      </div>
      <div className="header-menu">
        <NavLink to="/login">Войти в кабинет</NavLink>
      </div>
    </header>
    </>
  )
}

export default Header