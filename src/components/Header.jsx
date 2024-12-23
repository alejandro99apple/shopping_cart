import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Header.css';

const Header = () => {
    const { cartItems } = useContext(CartContext);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const uniquePlantsCount = cartItems.length; // Contar plantas diferentes en el carrito

    return (
        <header>
            <h3><Link to="/"><img src='icon.svg'></img> Plant Paradise</Link></h3>
            <nav>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to="/products">Plants</Link>
                    <Link style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '40px' }} to="/cart">
                        <svg width="30px" height="30px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_901_3095)">
                            <path d="M10 24L9 20L8 16L7 12L6 8H31L29 22C28.86 23.04 28.12 24 27 24H10Z" fill="#FFC44D"/>
                            <path d="M23 27C24.1 27 25 27.9 25 29C25 30.1 24.1 31 23 31C21.9 31 21 30.1 21 29C21 27.9 21.9 27 23 27ZM11 27C12.1 27 13 27.9 13 29C13 30.1 12.1 31 11 31C9.9 31 9 30.1 9 29C9 27.9 9.9 27 11 27Z" fill="#668077"/>
                            <path d="M8 16H2M9 20H3M7 12H1M26 16H11M25 20H12M27 12H10M10 24H27C28.125 24 28.862 23.038 29 22L31 8H6L4 1H1M13 29C13 27.896 12.104 27 11 27C9.896 27 9 27.896 9 29C9 30.104 9.896 31 11 31C12.104 31 13 30.104 13 29ZM25 29C25 27.896 24.104 27 23 27C21.896 27 21 27.896 21 29C21 30.104 21.896 31 23 31C24.104 31 25 30.104 25 29Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_901_3095">
                            <rect width="32" height="32" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>  ({uniquePlantsCount})
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
