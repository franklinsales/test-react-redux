import styled from 'styled-components'

export const LayoutWrapper = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-content: space-around;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;

    background: #ebeff7;
`

export const BoxContentWrapper = styled.div`
    width: 90%;
    min-height: 85%;

    background-color: #fff;

    border-radius: 10px;

    box-shadow: -1px -1px 13px 1px rgba(0,0,0,0.10);
`
