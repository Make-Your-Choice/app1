import React from 'react';
import { Link } from 'react-router-dom';

//навигационная панель
const Navbar = () => {
    return (
        <div className='navbar'>
        <div className='navbar__links'>
          {/*ссылка на стартовую страницу (просмотр курса валюты за дату)*/}
          <Link to="/" className='link__text'>Start Page</Link>
          {/*ссылка на страницу для просмотра списка курсов валют за дату*/}
          <Link to="/daily" className='link__text'>Daily currencies</Link>
          {/*ссылка на страницу для просмотра списка курсов валюты за период*/}
          <Link to="period" className='link__text'>Period for currency</Link>
        </div>
      </div>
    );
};

export default Navbar;