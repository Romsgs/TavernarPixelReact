import React from 'react'
import * as F from './styledFooter'
import placa1 from '../images/placa1.png'
import chao from '../images/chao.png'
export const Footer = () => {
    return (
        <F.Footer>
        <footer >
            <div id='footerContainer'>
        <img id="tavernaFooter" src={placa1} alt="l"/>
        <p>
            Taverna © 2012 - 2021<br/>
            Todos os direitos reservados
        </p>
        <p>
            
        </p>
        
        <div id="icones">
            <a href="https://www.facebook.com/bandataverna" target="_blank" rel="noreferrer"><img class="footerIcon" src="../images/icons/facebook.png" alt=""/></a>
            <a href="https://www.instagram.com/bandataverna/" target="_blank" rel="noreferrer"><img class="footerIcon" src="../images/icons/instagram.png" alt=""/></a>
            <a href="https://www.youtube.com/c/BandaTaverna" target="_blank" rel="noreferrer"><img class="footerIcon" src="../images/icons/youtube.png" alt=""/></a>
            <a href="https://open.spotify.com/artist/4E2XVEYULgAjCObKNyuZim?si=936bd6b6afa14316" rel="noreferrer" target="_blank"><img class="footerIcon" src="../images/icons/spotify.png" alt=""/></a>
            
            
        </div>
        </div>
    </footer>
    </F.Footer>
    )
}
