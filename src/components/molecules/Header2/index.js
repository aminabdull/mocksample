import React from 'react'
import './header.scss'
import { Logo } from '../../../assets';
import { Link } from '../../../components';
import { useHistory } from 'react-router';

const Header2 = () => {
    const history = useHistory();
    return (
        <header className="header2 header-container">
            <div className="header-logo">
                <Link label={<img src={Logo} alt="Logo" className="img-logo" />} action={() => history.push('/news')} />
            </div>
            <div className="menu">
                <div className="menu-item">
                <Link label="News" action={() => history.push('/news')} />
                </div>
                <div className="menu-item">
                <Link label="Login" action={() => history.push('/login')} />
                </div>
            </div>
        </header>
    )
}

export default Header2
