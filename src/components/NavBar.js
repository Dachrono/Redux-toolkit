import '../styles/NavBar.css';
import { Bag } from '../icons.js'
import { useSelector } from 'react-redux';

const NavBar = () => {
    const { amount } = useSelector((store) => store.cart);
    return (
        <nav>   
            <div className="nav-center">
                <h3>Redux</h3>
                <div className="nav-container">
                    <Bag /> 
                    <p>= {amount}</p>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;