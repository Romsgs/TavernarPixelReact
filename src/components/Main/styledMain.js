import styled from 'styled-components';
import ImgSrc from '../images/OIP.jpg'
export const Style = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
    main{
        font-family: 'Press Start 2P', cursive;
        width: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 20px 0 20px 0;
        justify-content: center;
        background-color: blue;
        background-image: url(${ImgSrc});
        background-size: cover;
        background-position: bottom;
    }
    
    .textBox{
        width: 80%;
        text-align: center;
        border: 5px solid chocolate;
        border-radius: 15px;
        background-color: navajowhite;
        padding: 20px;
        line-height: 1.2;
        max-width:900px;
        margin-bottom: 150px;
    }

`