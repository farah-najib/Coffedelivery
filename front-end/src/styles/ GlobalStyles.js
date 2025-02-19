import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    font-family: 'Halant';
  font-weight: 400;
  font-style: normal;
  }

  body{
  margin:0;
  padding:0;
  overflow-x:hidden;
  }
  :root {
    --red-500: rgba(186, 45, 11, 1);
    --blue-900: rgba(31, 33, 48, 1);
    --brown-600: rgba(85, 48, 4, 1);
    --brown-500: rgba(151, 82, 2, 1);
    --brown-400: rgba(214, 189, 169, 1);
    --green-500: rgba(137, 147, 124, 1);
    --green-600: rgba(78, 91, 62, 1);
    --yellow-500: rgba(247, 203, 87, 1);
    --base-600: rgba(122, 121, 128, 1);
    --base-800: rgba(58, 56, 70, 1);
    --base-700: rgba(78, 77, 86, 1);
    --base-900: rgba(29, 28, 37, 1);
    --base-100: rgba(248, 248, 248, 1);
    --base-300: rgba(225, 225, 225, 1);
    --base-400: rgba(201, 201, 201, 1);
    --base-500: rgba(168, 168, 168, 1);
    --basewhite: rgba(255, 255, 255, 1);
    --base-200: rgba(243, 242, 242, 1);
    --basetitle: rgba(39, 34, 33, 1);
    --title-XL-bold-font-family: "Halant-Bold", Helvetica;
    --title-XL-bold-font-weight: 700;
    --title-XL-bold-font-size: 48px;
    --title-XL-bold-letter-spacing: 0px;
    --title-XL-bold-line-height: 129.99999523162842%;
    --title-XL-bold-font-style: normal;
    --title-XL-semibold-font-family: "Halant-SemiBold", Helvetica;
    --title-XL-semibold-font-weight: 600;
    --title-XL-semibold-font-size: 48px;
    --title-XL-semibold-letter-spacing: 0px;
    --title-XL-semibold-line-height: 129.99999523162842%;
    --title-XL-semibold-font-style: normal;
    --title-m-semibold-font-family: "Halant-SemiBold", Helvetica;
    --title-m-semibold-font-weight: 600;
    --title-m-semibold-font-size: 32px;
    --title-m-semibold-letter-spacing: 0px;
    --title-m-semibold-line-height: 129.99999523162842%;
    --title-m-semibold-font-style: normal;
    --title-s-semibold-font-family: "Halant-SemiBold", Helvetica;
    --title-s-semibold-font-weight: 600;
    --title-s-semibold-font-size: 24px;
    --title-s-semibold-letter-spacing: 0px;
    --title-s-semibold-line-height: 129.99999523162842%;
    --title-s-semibold-font-style: normal;
    --text-m-bold-font-family: "Ruda-Bold", Helvetica;
    --text-m-bold-font-weight: 700;
    --text-m-bold-font-size: 16px;
    --text-m-bold-letter-spacing: 0px;
    --text-m-bold-line-height: 129.99999523162842%;
    --text-m-bold-font-style: normal;
    --text-m-regular-font-family: "Halant";
    --text-m-regular-font-weight: 400;
    --text-m-regular-font-size: 16px;
    --text-m-regular-letter-spacing: 0px;
    --text-m-regular-line-height: 129.99999523162842%;
    --text-m-regular-font-style: normal;
    --text-l-regular-font-family: "Ruda-Regular", Helvetica;
    --text-l-regular-font-weight: 400;
    --text-l-regular-font-size: 20px;
    --text-l-regular-letter-spacing: 0px;
    --text-l-regular-line-height: 129.99999523162842%;
    --text-l-regular-font-style: normal;
    --text-l-bold-font-family: "Ruda-Bold", Helvetica;
    --text-l-bold-font-weight: 700;
    --text-l-bold-font-size: 20px;
    --text-l-bold-letter-spacing: 0px;
    --text-l-bold-line-height: 129.99999523162842%;
    --text-l-bold-font-style: normal;
    --text-XS-regular-font-family: "Ruda-Regular", Helvetica;
    --text-XS-regular-font-weight: 400;
    --text-XS-regular-font-size: 12px;
    --text-XS-regular-letter-spacing: 0px;
    --text-XS-regular-line-height: 129.99999523162842%;
    --text-XS-regular-font-style: normal;
    --text-XS-bold-font-family: "Ruda-Bold", Helvetica;
    --text-XS-bold-font-weight: 700;
    --text-XS-bold-font-size: 12px;
    --text-XS-bold-letter-spacing: 0px;
    --text-XS-bold-line-height: 129.99999523162842%;
    --text-XS-bold-font-style: normal;
    --text-XXS-bold-font-family: "Ruda-Bold", Helvetica;
    --text-XXS-bold-font-weight: 700;
    --text-XXS-bold-font-size: 10px;
    --text-XXS-bold-letter-spacing: 0px;
    --text-XXS-bold-line-height: 129.99999523162842%;
    --text-XXS-bold-font-style: normal;
    --text-XXS-regular-font-family: "Ruda-Regular", Helvetica;
    --text-XXS-regular-font-weight: 400;
    --text-XXS-regular-font-size: 10px;
    --text-XXS-regular-letter-spacing: 0px;
    --text-XXS-regular-line-height: 129.99999523162842%;
    --text-XXS-regular-font-style: normal;
    --text-s-regular-font-family: "Ruda-Regular", Helvetica;
    --text-s-regular-font-weight: 400;
    --text-s-regular-font-size: 14px;
    --text-s-regular-letter-spacing: 0px;
    --text-s-regular-line-height: 129.99999523162842%;
    --text-s-regular-font-style: normal;
    --text-s-bold-font-family: "Ruda-Bold", Helvetica;
    --text-s-bold-font-weight: 700;
    --text-s-bold-font-size: 14px;
    --text-s-bold-letter-spacing: 0px;
    --text-s-bold-line-height: 129.99999523162842%;
    --text-s-bold-font-style: normal;
    --highlight-m-regular-font-family: "DancingScript-Regular", Helvetica;
    --highlight-m-regular-font-weight: 400;
    --highlight-m-regular-font-size: 16px;
    --highlight-m-regular-letter-spacing: 0px;
    --highlight-m-regular-line-height: normal;
    --highlight-m-regular-font-style: normal;
    --text-s-font-family: "Outfit-Regular", Helvetica;
    --text-s-font-weight: 400;
    --text-s-font-size: 16px;
    --text-s-letter-spacing: 0px;
    --text-s-line-height: 139.9999976158142%;
    --text-s-font-style: normal;
    --drop-card: 0px 4px 16px 0px rgba(0, 0, 0, 0.25);
    --drop-2: 0px 4px 16px 0px rgba(0, 0, 0, 0.14);
    --beaut: 0px -18px 39px 0px rgba(168, 168, 168, 0.05), 0px -72px 72px 0px rgba(168, 168, 168, 0.04),
      0px -161px 97px 0px rgba(168, 168, 168, 0.03), 0px -286px 115px 0px rgba(168, 168, 168, 0.01),
      0px -447px 125px 0px rgba(168, 168, 168, 0);
    --beautiful: -6px -10px 25px 0px rgba(0, 0, 0, 0.05), -22px -40px 46px 0px rgba(0, 0, 0, 0.04),
      -50px -89px 62px 0px rgba(0, 0, 0, 0.02), -90px -159px 73px 0px rgba(0, 0, 0, 0.01),
      -140px -248px 80px 0px rgba(0, 0, 0, 0);
  }
   button{
   border-style: none;
   }
`

export default GlobalStyles
