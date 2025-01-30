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

// export const Frame = styled.div`
//     display: flex;
//     align-items: center;
//     flex-wrap: nowrap;
//     gap: 10px;
//     position: relative;
//     width: 351px;
//     margin: ${(props) => props.margin || '4px 0 0 0'};
//     padding: 12px 16px;
//     border: 1px solid #c8c8c8;
//     border-radius: 8px;
//     overflow: hidden;
//     background:purple;
// `

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

// export const TextButton = styled.span`
//     flex-shrink: 0;
//     position: relative;
//     height: 18px;
//     color: ${(props) => props.color || '#ffffff'};
//     font-family: Ruda, sans-serif;
//     font-size: 14px;
//     font-weight: 700;
//     line-height: 18px;
//     text-align: left;
//     white-space: nowrap;
// `

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






export const Frame = styled.div`
    width: 544px;
    height: 900px;
`

export const Group = styled.div`
    position: relative;
    width: 358px;
    height: 332px;
    top: 284px;
    left: 96px;
`

export const TextWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    font-family: var(--title-m-semibold-font-family);
    font-weight: var(--title-m-semibold-font-weight);
    color: var(--base-800);
    font-size: var(--title-m-semibold-font-size);
    letter-spacing: var(--title-m-semibold-letter-spacing);
    line-height: var(--title-m-semibold-line-height);
    white-space: nowrap;
    font-style: var(--title-m-semibold-font-style);
`

export const DoYouAlreadyHave = styled.p`
    position: absolute;
    top: 319px;
    left: 94px;
    font-family: 'Ruda-Regular', Helvetica;
    font-weight: 400;
    color: transparent;
    font-size: 10px;
    letter-spacing: 0;
    line-height: 13px;
    white-space: nowrap;
`

export const Span = styled.span`
    color: #79797f;
    font-family: var(--text-XXS-regular-font-family);
    font-style: var(--text-XXS-regular-font-style);
    font-weight: var(--text-XXS-regular-font-weight);
    letter-spacing: var(--text-XXS-regular-letter-spacing);
    line-height: var(--text-XXS-regular-line-height);
    font-size: var(--text-XXS-regular-font-size);
`

export const TextWrapper2 = styled.button`
    font-family: var(--text-XXS-bold-font-family);
    font-weight: var(--text-XXS-bold-font-weight);
    color: #1d1c25;
    font-style: var(--text-XXS-bold-font-style);
    letter-spacing: var(--text-XXS-bold-letter-spacing);
    line-height: var(--text-XXS-bold-line-height);
    font-size: var(--text-XXS-bold-font-size);
`

export const Div = styled.p`
    position: absolute;
    width: 351px;
    top: 42px;
    left: 1px;
    font-family: var(--text-m-regular-font-family);
    font-weight: var(--text-m-regular-font-weight);
    color: var(--base-500);
    font-size: var(--text-m-regular-font-size);
    letter-spacing: var(--text-m-regular-letter-spacing);
    line-height: var(--text-m-regular-line-height);
    font-style: var(--text-m-regular-font-style);
`

export const AtomOutlinedButton = styled.div`
    display: flex;
    width: 350px;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 12px 24px;
    position: absolute;
    top: 95px;
    left: 1px;
    border-radius: 8px;
    border: 1px solid;
    border-color: var(--green-600);
`

export const TextButton = styled.div`
    position: relative;
    width: fit-content;
    margin-top: -1px;
    font-family: var(--text-s-bold-font-family);
    font-weight: var(--text-s-bold-font-weight);
    color: var(--green-600);
    font-size: var(--text-s-bold-font-size);
    letter-spacing: var(--text-s-bold-letter-spacing);
    line-height: var(--text-s-bold-line-height);
    white-space: nowrap;
    font-style: var(--text-s-bold-font-style);
`

export const AtomPrimaryButton = styled.div`
    display: flex;
    width: 350px;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 12px 24px;
    position: absolute;
    top: 246px;
    left: 1px;
    background-color: var(--green-500);
    border-radius: 8px;
`

export const TextButton2 = styled.div`
    position: relative;
    width: fit-content;
    margin-top: -1px;
    font-family: var(--text-s-bold-font-family);
    font-weight: var(--text-s-bold-font-weight);
    color: #ffffff;
    font-size: var(--text-s-bold-font-size);
    letter-spacing: var(--text-s-bold-letter-spacing);
    line-height: var(--text-s-bold-line-height);
    white-space: nowrap;
    font-style: var(--text-s-bold-font-style);
`

export const Group2 = styled.div`
    position: absolute;
    width: 212px;
    height: 13px;
    top: 213px;
    left: 71px;
`

export const Vector = styled.img`
    left: 0;
    position: absolute;
    width: 84px;
    height: 8px;
    top: 2px;
`

export const Img = styled.img`
    left: 126px;
    position: absolute;
    width: 84px;
    height: 8px;
    top: 2px;
`

export const TextWrapper3 = styled.div`
    position: absolute;
    top: 0;
    left: 100px;
    font-family: var(--text-XXS-regular-font-family);
    font-weight: var(--text-XXS-regular-font-weight);
    color: var(--base-500);
    font-size: var(--text-XXS-regular-font-size);
    letter-spacing: var(--text-XXS-regular-letter-spacing);
    line-height: var(--text-XXS-regular-line-height);
    white-space: nowrap;
    font-style: var(--text-XXS-regular-font-style);
`

export const AtomOutlinedButton2 = styled.div`
    display: flex;
    width: 350px;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 12px 24px;
    position: absolute;
    top: 152px;
    left: 1px;
    border-radius: 8px;
    border: 1px solid;
    border-color: var(--green-600);
`
