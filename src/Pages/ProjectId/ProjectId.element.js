import styled from 'styled-components';

export const ProDetails = styled.section`
    padding: 2em;

    p{
        margin-bottom: 0.5em;;
    }

    span{
        font-weight: bold;
    }

    .project_info{
        width: 100%;
    }
`;

export const Title = styled.h1`
    background-color: #222;
    color: #FB3;
    margin-bottom: 0.5em;;
    padding: 0.4em;
`;

export const ContainerDetails = styled.div`
    border-bottom: 1px solid #7a7a7a;
    margin-bottom: 1.2em;
    padding-bottom:1.2em;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const Btn = styled.button`
    background-color: #222;
    color: #FFF;
    padding: 0.5em 1em;
    text-decoration: none;
    transition: .5s;
    cursor: pointer;
    max-height: 40px;
    border: none;

    :hover{
        color: #FB3;
    }
`;