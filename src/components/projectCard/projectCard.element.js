import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Card = styled.section`
    padding: 1rem;
    border: 1px solid #7a7a7a;
    border-radius: 5px;
    width: 24%;
    margin: .5%;
`;

export const CardTitle = styled.h4`
    background-color: #222;
    color: #FFBB33;
    padding: 0.4rem;
    margin-bottom: 3rem;
    font-size: 1.3rem;
`;

export const CardP = styled.p`
    color: #7a7a7a;
    margin-bottom: 1rem;

    span{
        font-weight: bold;
    }
`;

export const Cardtext = styled.p`
    display: flex;
    align-items: center;

    .infra{
        background-color: #FFAEBC;
    }

    .desenvolvimento{
        background-color: #A0E7E5;
    }

    .design{
        background-color: #B4F8C8;
    }

    .planejamento{
        background-color: #FBE7C6;
    }

    span{
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #ccc;
        margin-right: 5px;
    }
`;


export const Actions = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
`;

export const Alink = styled(Link)`
    color: #222;
    text-decoration: none;
    border: none;
    outline: none;
    border-radius: .2rem;
    padding: .5rem;
    color: #FFFFFFDD;
    font-size: .95rem;
    cursor: pointer;

    p{
        background-color: #00f;
    }

    button{
        background-color: #f00;
    }

    svg{
        margin-right: .5rem;
    }

    hover{
        background-color: #222;
        color: #FFBB33;
    }
`;