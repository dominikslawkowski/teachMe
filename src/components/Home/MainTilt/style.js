import styled from 'styled-components';

export const Wrapper = styled.div`
    transition: all 300ms;
    transform: scale(1);
    opacity: 1;
    overflow: hidden;
    -webkit-box-shadow: 0px 0px 38px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 38px -4px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 38px -4px rgba(0,0,0,0.75);
    background-color: black;
    z-index: 1;
    &:hover {
        transform: scale(1.05);
        z-index: 10;
    }

    &.animate-this {
        transform: scale(0.1);
        opacity: 0;
        overflow: hidden;
    }

    &.maciek-middle {
        width: 500px;
        border-radius: 10px;
        overflow: hidden;
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto auto auto;

        .maciek-middle_head-wrapper {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            position: relative;
            border-bottom: gray solid 1px;
            background: rgba(255,255,255,0.8);
            
            .maciek-middle_image {
                width: 30%;     
                align-self: stretch;
                border: solid 1px white;
                border-top: none;
                border-left: none;
                border-bottom: none;
            }

            .maciek-middle_head {
                width: 70%;
                 
                .maciek-middle_head_im-naz {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    font-size: 16px;
                    font-weight: 700;
                    padding: 10px;
                    p {
                        width: 100%;
                        color: rgba(255,255,255,1);
                        color: rgba(100, 105, 105, 1);
                        &:nth-of-type(2) {
                            
                        }
                    }
                }
                .maciek-middle_head_op {
                    border-top: solid 1px white;
                    width: 100%;
                    padding: 10px;
                    font-size: 12px;
                    font-weight: 500;
                    font-size: 11px;
                    font-weight: 500;
                    color: rgba(100, 105, 105, 1);
                    letter-spacing: 1px;

                }
            }
        }

        .maciek-middle_tags {
            background: rgba(255,255,255,0.8);
            display: flex;
            flex-direction: row;
            align-items: stretch;
            width: 100%;
            flex-wrap: wrap;
           

            .maciek-middle_tags_col {
                width: 50%;
                &:nth-of-type(1){
                    border-right: 1px solid white;
                }
                p.title {
                    width: 100%;
                    text-align: center;
                    background: #1b1c1d;
                    color: rgba(200, 205, 205, 1);
                    padding-top: 5px;
                    padding-bottom: 5px;
                }
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                align-items: flex-start;
            
                .maciek-middle_tag-itself1,
                .maciek-middle_tag-itself2 {
                    padding: 10px;
                    text-align: center;
                    border-radius: 2px;
                    overflow: hidden;
                    margin: 5px;
                    &.maciek-middle_tag-itself1 {
                        background: rgba(50, 150, 150, 0.3);
                    }
                    &.maciek-middle_tag-itself2 {
                        background: rgba(50, 10, 50, 0.3);
                    }
                }
            }

        }
        .maciek-middle_grad {
            padding: 30px 10%;
            width: 100%;
            border-top: solid 1px gray;
            background: #1b1c1d;
        }
    }
     @media only screen and (max-width: 1200px){
         position: relative;
         
     }
`;


export const Imag = styled.div `
    background: url('${props=>props.imageUrl}');
    background-position: center;
    background-size: cover;
`;