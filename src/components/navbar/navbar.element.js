import { Link } from "react-router-dom";
import { RiMoneyDollarCircleFill } from "react-icons/ri"
import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: #222;
    padding: 1em;
`;

export const Logo = styled(RiMoneyDollarCircleFill)`
    color: #fff;
    display: flex;
    justify-content: flex-start;
    width: 4rem;
    height:4rem;
`;

export const List = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
`;

export const Item = styled.li`
    margin-right: 1em;
`;

export const LinkA = styled(Link)`
    color: #FFF;
    text-decoration: none;

    &:hover{
        color: #FFBB33;
        text-decoration: none;
    }
`;