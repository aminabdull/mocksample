import React from 'react'
import './header.scss'
import { Logo } from '../../../assets';
import { Link } from '../../../components';
import { useHistory } from 'react-router';

const Header = ({title, url}) => {
    const history = useHistory();
    return (
        <header className="header header-container">
            <div className="header-logo">
                <Link label={<img src={Logo} alt="Logo" className="img-logo" />} action={()=>history.push('/news')} />
            </div>
            <div className="navigate-header">
                <Link label={title} action={url} />
            </div>
        </header>
    )
}

export default Header
