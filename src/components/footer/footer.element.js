import styled from "styled-components"

export const Footter = styled.footer`
    background-color: #222;
    color: #fff;
    padding: 3em;
    text-align: center;
`;

export const SocialList = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
`;

export const SocialItem = styled.li`
    margin: 0 1em;
    font-size: 1.5em;
    cursor: pointer;

    &:hover{
        color: #ffbb33;
    }
`;

export const CopyRigth = styled.p`
    margin-top: 2em;
`;

export const Copy = styled.span`
    font-weight: bold;
    color: #ffbb33;
`;