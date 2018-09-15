import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    .slider-maciek {
        position: relative;
        width: 100%;
        padding: 20px 0;
        margin: 0;
        display: flex;
        justify-content: center;
    }
    .back-tilt-data-left{
        position: relative;
        transition: all 300ms;   
        background: rgba(80,80,80,1);
        &:hover {
            transform: translateX(10px);
        }
        &.back-tilt-data-left .content .header {
            color: rgba(120,120,120,1);
        }
        img {
            opacity: 0.5;
        }    
    }
    .back-tilt-data-right{
        position: relative;
        img {
            opacity: 0.5;
        }
        transition: all 300ms;
        &:hover {
            transform: translateX(-10px);
        }
        &.back-tilt-data-right .content .header {
            color: rgba(120,120,120,1);
        }
          
    }
    .animate-this_back-tilt.back-tilt-data-left{
        transform: translateX(300px);
    }
    .animate-this_back-tilt.back-tilt-data-right{
        transform: translateX(-300px);
    }
    @media only screen and (max-width: 1200px){
        .back-tilt-data-right{
            position: absolute !important;
            top: 0;
            right: 10px;
            &:hover{
                transform: translateX(-10px);
            }
        }
        .back-tilt-data-left{
            position: absolute !important;
            top: 0;
            left: 10px;
            &:hover{
                transform: translateX(10px);
            }
        }
    }
`;

export const ButtonsWrapper = styled.div `
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    background: rgba(27, 28, 29, 0.01);
    p{
        color: black;
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
        width: 100%;
        text-align: center;
        letter-spacing: 0.1rem;
        opacity: .6;
    }
    .ui.button.accept {
        display: flex;
        flex-direction: column;
        align-items: center;
        &:hover{background: rgba(100,255,100,0.7)};
        color: rgba(0,0,0,0.7);
        svg {
            margin: 10px;
        }
    }
    .ui.button.reject {
        display: flex;
        flex-direction: column;
        align-items: center;
        &:hover{background: rgba(255,100,100,0.6)};
        color: rgba(0,0,0,0.7);
        svg {
            margin: 10px;
        }
    }
`;
