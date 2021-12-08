import styled from 'styled-components'
import ImgSrc from '../images/chao.png'
export const Footer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
footer{
    font-family: 'Press Start 2P', cursive;
    color: black;
    width: 100%;
    max-height: 256px;
    background-color: lightblue;
    background-image: url(${ImgSrc});
    // background-size: cover;
    background-repeat:repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
.footerIcon{
    width: 50px;
    
}
#icones{
    display: flex;
    justify-content: space-evenly;
}
#tavernaFooter{
    // position: relative;
    // top: -70px;
    width: 400px;
    max-width: 500px;
    align-self: center;
    
}
#footerContainer{
    position: relative;
    top: -160px;
}
`