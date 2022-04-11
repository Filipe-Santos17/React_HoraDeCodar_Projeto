import { Link } from "react-router-dom";
import styled from 'styled-components';

export const Linka = styled(Link)`
    background-color: #222;
    color: #FFF;
    padding: 0.5em 1em;
    text-decoration: none;
    transition: 0.5s;

    &:hover{
        color: #FFBB33;
    }  
`;