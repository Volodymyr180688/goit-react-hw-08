import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { BiSolidContact } from "react-icons/bi";  
import style from './AppBar.module.css';  

export const AppBar = () => {
    const { isLoggedIn } = useSelector(selectIsLoggedIn);

    return (
        <header className={style.header}>
<div className={style.logo}><BiSolidContact className={style.icon}/><p>ContactBook</p></div>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
};
