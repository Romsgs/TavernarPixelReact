import React from 'react'
import * as S from './styledHeader'
import '../images/PlacaLogoGRANDEo.png'
import {Link} from 'react-router-dom'
export const Header = () => {
    return (

        <S.Header>
            
        <header>
        <Link to='/'><img src='../images/PlacaLogoGRANDEo.png' alt="asd"/></Link><br/>
        <div class='menuColapsavel'>

            <input type="checkbox" name="menu" id="menu"/>
            <label for="menu">MENU</label>
            
            <div class='conteudo'>

                <ul>
                    <li><Link to='/'>HOME</Link></li>
                    <li><a href="/">Press Kit</a></li>
                    <li><a href="/">Media</a></li>
                    <li><a href="/abanda">Sobre</a></li>
                    <li><a href="/">Contato</a></li>
                </ul>

            </div>

        </div>

        </header>
        </S.Header>
    )
}
