import styled from "styled-components";

export interface IWrapper {
    marginBottom?: string
    marginTop?: string
}

export const Wrapper = styled.div<IWrapper>`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;

    margin-bottom: ${props => props.marginBottom || "20px"};
    margin-top: ${props => props.marginTop || "20px"};

    label {
        width: 100%;
        margin-bottom: 10px;
        font-size: 14px;
        font-weight: 700;
    }
`

export const WrapperInput = styled.div<IWrapper>`

    width: 100%;
    position: relative;
    display: flex;

    & > span,
    input {
        white-space: nowrap;
        display: block;
        &:not(:first-child):not(:last-child) {
            border-radius: 0;
        }
        &:first-child {
            border-radius: 6px 0 0 6px;
        }
        &:last-child {
            border-radius: 0 6px 6px 0;
        }
        &:not(:first-child) {
            margin-left: -1px;
        }
    }
    input {
        position: relative;
        z-index: 1;
        flex: 1 1 auto;
        width: 1%;
        margin-top: 0;
        margin-bottom: 0;
    }
    & > span {
        text-align: center;
        padding: 8px 12px;
        font-size: 14px;
        line-height: 25px;
        color: #99A3BA;
        background: #EEF4FF;
        border: 1px solid #CDD9ED;
        transition: background .3s ease, border .3s ease, color .3s ease;
    }
    &:focus-within {
        & > span {
            color: #fff;
            background: #1f27ea;
            border-color: #1f27ea;
        }
    }
`

export const InputWrapper = styled.input`
    display: block;
    width: 100%;
    padding: 8px 16px;
    line-height: 25px;
    font-size: 14px;
    font-weight: 500;
    font-family: inherit;
    border-radius: 6px;
    -webkit-appearance: none;
    color: #99A3BA;
    border: 1px solid #1f27ea;
    background: #fff;
    transition: border .3s ease;
    &::placeholder {
        color: #1f27ea;
    }
    &:focus {
        outline: none;
        border-color: #1f27ea;
    }
`

export const SpanWrapper = styled.span`

`