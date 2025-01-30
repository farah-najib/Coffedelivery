import styled from 'styled-components'

export const LoginContainer = styled.div`
    position: relative;
    width: 352px;
    height: 552px;
    margin: 174px 0 0 96px;
    font-size: 0px;
    z-index: 51;
    overflow: visible auto;
`

export const Containertitle = styled.span`
    display: block;
    position: relative;
    height: 42px;
    color: #393846;
    font-family: Halant, sans-serif;
    font-size: 32px;
    font-weight: 600;
    line-height: 41.6px;
    text-align: left;
    white-space: nowrap;
    z-index: 52;
`

export const EnterInformations = styled.span`
    display: block;
    position: relative;
    height: 21px;
    color: #a7a7a7;
    font-family: Ruda, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 20.8px;
    text-align: left;
    white-space: nowrap;
    z-index: 54;
`

export const InputField = styled.div`
    position: relative;
    width: 351px;
    height: 68px;
    //overflow: visible auto;


`

export const Label = styled.span`
    display: block;
    position: relative;
    height: 18px;
    margin: 4px 0 0 0;
    color: #393846;
    font-family: Ruda, sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    text-align: left;
    white-space: nowrap;
`

export const Frame = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 10px;
    position: relative;
    width: 351px;
    margin: ${(props) => props.margin || '4px 0 0 0'};
    padding: 12px 16px;
    border: 1px solid #c8c8c8;
    border-radius: 8px;
    overflow: hidden;
    background:purple;
`

export const Input = styled.input`
    // flex-shrink: 0;
    // position: absolute;
    // width: 351px;
    // height: 42px;
    // top: -1px;
    // left: -1px;
    // background: transparent;
    // border: none;
    // outline: none;

    flex-shrink: 0;
    position: relative; /* Change from absolute to relative */
    width: 100%; /* Ensure it takes full width */
    height: 42px;
    background: transparent;
    border: none;
    outline: none;
    border: 1px solid #c8c8c8;
    border-radius: 8px;

`

export const Placeholder = styled.span`
    // flex-shrink: 0;
    // position: relative;
    // height: 18px;
    // color: #a7a7a7;
    // font-family: Ruda, sans-serif;
    // font-size: 14px;
    // font-weight: 400;
    // line-height: 18px;
    // text-align: left;
    // white-space: nowrap;

    flex-shrink: 0;
    position: absolute;
    height: 18px;
    color: #a7a7a7;
    font-family: Ruda, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    white-space: nowrap;
    pointer-events: none; /* Ensure it doesn't block input */
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    gap: ${(props) => props.gap || '4px'};
    position: relative;
    width: ${(props) => props.width || '350px'};
    margin: ${(props) => props.margin || '32px 0 0 1px'};
    padding: ${(props) => props.padding || '12px 24px'};
    cursor: pointer;
    background: ${(props) => props.background || '#89937c'};
    border: ${(props) => props.border || 'none'};
    border-radius: 8px;
`

export const TextButton = styled.span`
    flex-shrink: 0;
    position: relative;
    height: 18px;
    color: ${(props) => props.color || '#ffffff'};
    font-family: Ruda, sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    text-align: left;
    white-space: nowrap;
`

export const NewAccount = styled.button`
    position: relative;
    width: 138px;
    height: 13px;
    margin: 31px 0 0 106px;
    font-family: Ruda, sans-serif;
    font-size: 10px;
    font-weight: 400;
    line-height: 13px;
    text-align: center;
    text-overflow: initial;
    white-space: nowrap;
`
