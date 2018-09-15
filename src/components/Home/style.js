import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    background: rgba(100,100,100,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .back-tilt-data-left{
        transition: all 300ms;   
        opacity: 0.4;
        background: rgba(0,0,0,0.3); 
        img {
            opacity: 0.5;
        }    
    }
    .back-tilt-data-right{
        img {
            opacity: 0.5;
        }
        transition: all 300ms;   
         opacity: 0.4;
        background: rgba(0,0,0,0.3);      
    }
    .animate-this_back-tilt.back-tilt-data-left{
        transform: translateX(300px);
    }
    .animate-this_back-tilt.back-tilt-data-right{
        transform: translateX(-300px);
    }
`;

export const ButtonsWrapper = styled.div `
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
`;
