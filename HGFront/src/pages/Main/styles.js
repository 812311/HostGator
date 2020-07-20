import styled from 'styled-components';

export const CyclesBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > span {
    margin-bottom: 7.2px;
    font: 14px/26px Montserrat;
    letter-spacing: 0px;
    color: #1d5297;
    opacity: 1;
  }
  @media screen and (min-width: 320px) {
    margin-top: 32px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 37px;
  }
`;

export const Cycles = styled.div`
  display: flex;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 4px #4480c570;
  border: 1px solid #4480c5;
  border-radius: 21px;
  opacity: 1;
  width: 324px;
  height: 41px;
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
`;
export const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  span {
    font-size: 16px;
    line-height: 22px;
    text-align: center;
  }
  svg {
    margin-right: 5px;
    vertical-align: middle;
  }
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    span {
      margin-right: 10px;
    }
  }
  @media screen and (min-width: 320px) {
    & > span {
      max-width: 234px;
    }
    & > div {
      flex-direction: column;
    }
  }
  @media screen and (min-width: 768px) {
    & > div {
      flex-direction: row;
    }
  }
`;

export const Information = styled.div`
  align-self: flex-start;
  flex: 4;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  /* margin: 10px; */
  /* padding-bottom: 10px; */

  & > span {
    text-align: center;
    font: 600 16px/27px Montserrat;
    letter-spacing: 1.6px;
    color: #b9d0ef;
    opacity: 1;
  }

  h3 {
    text-align: center;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
    margin-bottom: 32px;
    max-width: 750px;
  }

  @media screen and (min-width: 320px) {
    h3 {
      font: Bold 24px/32px Montserrat;
      overflow: hidden;
      margin: 0 auto;
      max-height: 97px;
      max-width: 290px;
    }
    & > span {
      margin-top: 32px;
      margin-bottom: 12px;
    }
  }
  @media screen and (min-width: 768px) {
    h3 {
      font: Bold 30px/45px Montserrat;
      max-width: 752px;
    }
    margin-top: 95px;
    & > span {
      margin-top: 0;
      margin-bottom: 7px;
    }
  }
`;

export const Banner = styled.div`
  position: relative;
  opacity: 1;
  background-color: #1d5297;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  & > img {
    margin-top: 85px;
    max-width: 100%;
    flex: 3;
  }

  @media screen and (min-width: 320px) {
    min-height: 350px;

    & > img {
      display: none;
    }
  }
  @media screen and (min-width: 768px) {
    min-height: 425px;
  }

  @media screen and (min-width: 1024px) {
    max-height: 415px;

    & > img {
      display: flex;
    }
  }
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  max-width: 1920px;
  height: 52px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  img {
    position: relative;
    max-width: 100%;
    height: 35px;
    background: transparent 0% 0% no-repeat padding-box;
  }
  @media screen and (min-width: 320px) {
    img {
      margin: 8px 15px;
    }
  }
  @media screen and (min-width: 768px) {
    img {
      margin: 8px 30px;
    }
  }
  @media screen and (min-width: 1024px) {
    img {
      margin: 8px 390px;
    }
  }
`;

export const IconGrupo29390 = styled.div`
  position: relative;
  @media screen and (min-width: 320px) {
    img {
      margin-top: 36px;
      position: absolute;
    }
  }

  @media screen and (min-width: 768px) {
    img {
      margin-top: 80px;
      position: absolute;
    }
  }
  @media screen and (min-width: 1024px) {
    img {
      margin-top: -65px;
      position: relative;
    }
  }
  @media screen and (min-width: 1130px) {
    img {
      margin-top: 80px;
      position: absolute;
    }
  }
`;

export const Container = styled.div`
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
