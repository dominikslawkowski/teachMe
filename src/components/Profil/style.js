import styled from 'styled-components';
import { Button, Input, TextArea, Image, Form, Select } from 'semantic-ui-react';

export const Grid = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    margin-top: 50px;
    width: 700px;
    height: 400px;
    box-shadow: 0px 4px 6px rgba(41, 41, 41, 0.2);
    display: grid;
    grid-gap: 10px;
    grid-template: "foto foto name surname" 
                    "foto foto age ."
                    "s1 s1 s2 s2" 
                    "desc desc desc desc"
                    "btn btn btn btn";
`;

export const Foto = styled(Image)`
    grid-area: foto;
`;

export const InputName = styled(Input)`
    grid-area: name;
    width: 200px;
    height: 30px;
`;

export const InputSurname = styled(Input)`
    grid-area: surname;
    width: 200px;
    height: 30px;
`;

export const InputAge = styled(Input)`
    grid-area: name;
    margin-top: 50px;
    width: 100px;
    height: 30px;
`;

export const StyledTextArea = styled(TextArea)`
    height: 100px;
    resize: none !important;
    justify-self: center;
`;

export const StyledForm = styled(Form)`
    grid-area: desc;
`;

export const SubmitButon = styled(Button)`
    grid-area: btn;
    width: 200px;
    height: 40px;
    justify-self: center;
`;

export const SelectKnow = styled(Select)`
    grid-area: s1;
`;

export const SelectLearn = styled(Select)`
    grid-area: s2;
`;