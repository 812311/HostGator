import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font: 14px Montserrat;
  }

  body{
    background: #F1F6FB;
    -webkit-font-smoothing: antialiased;
  }

  button{
    cursor: pointer;
  }

  #root{
    top: 0px;
    left: 0px;
    max-width: 1920px;
    max-height: 1080px;
    background: #F1F6FB 0% 0% no-repeat padding-box;
    opacity: 1;
  }


`;
