import styled from 'styled-components';

export const FormControl = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
`;

export const Label = styled.label`
    margin-bottom: .6em;
    font-weight: bold;
`;

export const Input = styled.input`
    padding: .7em;
    border-radius: 0;
    border: none;

    ::placeholder{
        color: #7b7b7b;
    }
`;

