import styled from 'styled-components';

export const Wrapper = styled.div`
    transition: all 300ms;
    transform: scale(1);
    opacity: 1;
    overflow: hidden;
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
            background: rgba(0,0,0,0.3);
            .maciek-middle_image {
                width: 30%;     
                align-self: stretch;
            }

            .maciek-middle_head {
                width: 70%;
                 
                .maciek-middle_head_im-naz {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    font-size: 16px;
                    font-weight: 700;
                    background: rgba(0,0,0,0.3);
                    padding: 10px;
                    p {
                        width: 100%;
                        color: rgba(255,255,255,1);
                        &:nth-of-type(2) {
                            color: rgba(255,255,255,0.7);
                        }
                    }
                }
                .maciek-middle_head_op {
                    width: 100%;
                    padding: 10px;
                    font-size: 12px;
                    font-weight: 500;
                    &:nth-of-type(3){
                        font-size: 11px;
                        font-weight: 500;
                    }
                }
            }
        }

        .maciek-middle_tags {
            background: rgba(0,0,0,0.3);
            display: flex;
            flex-direction: row;
            align-items: stretch;
            width: 100%;
            flex-wrap: wrap;
           

            .maciek-middle_tags_col {
                width: 50%;
                &:nth-of-type(1){
                    border-right: 1px solid gray;
                }
                p.title {
                    width: 100%;
                    text-align: center;
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
`;


export const Imag = styled.div `
    background: url('${props=>props.imageUrl}');
    background-position: center;
    background-size: cover;
`;