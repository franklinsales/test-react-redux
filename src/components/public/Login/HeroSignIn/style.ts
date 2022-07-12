import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100%;

    background-color: #1f27ea;

    background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='20' height='20' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(238, 83%, 52%, 0.3)'/><path d='M10 15a5 5 0 110-10 5 5 0 010 10z'  stroke-width='1' stroke='hsla(0, 0%, 100%, 0.2)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");

    h1 {
        margin-top: 0;
        color: #fff;
        font-size:60px;
        width: 50%;
        padding: 20% 0 0 20%;
        line-height: 73px;
    }


    p{
        padding: 2% 10% 0 20%;
        color: #fff;
        font-size:20px;
    }

    @media(min-width: 1000px) {
        h1 {
            font-size:90px;
            line-height: 95px;
        }
    }
`