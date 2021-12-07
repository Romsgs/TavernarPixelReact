import styled from 'styled-components'

export const Header = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
*{
    padding: 0;
    margin: 0;
    font-family: 'Press Start 2P', cursive;
    font-size: medium;
    box-sizing: border-box;
}
header{
    padding: 20px 0 10px 0;
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url("../images/R.jpg");
    // background-size: cover;
    background-repeat:repeat;

}
.menuColapsavel{
    align-self: center;
    width: 40%;
    max-width: 300px;
    padding: 0px 30px;
    // box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    font-family: 'Press Start 2P', cursive;
    display:flex;
    flex-direction: column;
    justify-content: center;
    font-size: x-large;
    
}
.conteudo{
    
    padding: 0 0 0 0px;
    max-height: 0;
    overflow: hidden;


}

.menuColapsavel > .conteudo > ul {
    list-style-type: none;
    padding: 0;
    text-align:left;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
a {
    display:block;
    padding: 5px;
    text-decoration: none;
    color: black;
}

input#menu {
    display: none;
    
}
label{
    color: blanchedalmond;
}
input:checked +label {
    background-image: url(/img/menu.png);
    background-size: 50px;
    
    text-align: center;
    
}

input:checked ~ .conteudo {
    max-height: 100%;
}
.menuColapsavel > label {
    font-family: 'Press Start 2P', cursive;
    font-size: x-large;
    display: block;
    cursor: pointer;
    background: url(menu.png) no-repeat left center;
    padding: 10px 0 10px 30px;
    text-align: center;
}

li{
    display: flex;
    width: 160px;
    height: 70px;
    text-align: center;
    font-size: large;
    align-items: center;
    justify-content: center;
    background-image: url('../images/plank8bit.png');
    background-size: cover;
}
header > img{
    width:90%;
    max-width: 414px;;
}
`