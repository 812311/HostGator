import styled from 'styled-components';

export const Middler = styled.div`
  height: 668px;
  width: 331px;
  padding-bottom: 50px;
  margin: 0 10px 0 10px;

  @media screen and (min-width: 320px) {
    margin-top: 35px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 38px;
  }
  @media screen and (min-width: 1024px) {
    margin-top: 44px;
  }
`;

export const OrangeBG = styled.div`
  width: 331px;
  height: 668px;
  background: #ff6a17 0% 0% no-repeat;
  border: 1px solid #dfecff;
  border-radius: 4px;
  opacity: 1;
`;

export const WhiteContainer = styled.div`
  margin-top: 12px;
  width: 331px;
  height: 650px;
  background: #ffffff 0% 0% no-repeat;
  border: 1px solid #dfecff;
  border-radius: 4px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Container = styled.div`
  height: 800px;
  width: 350px;
  background-color: #ffffff;
`;
export const PlanHeader = styled.div`
  border-bottom: 1px solid #dfecff;
  width: 100%;
  height: 136px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  & > span {
    margin-top: 10px;
    text-align: center;
    font: Bold 26px/26px Montserrat;
    letter-spacing: 0px;
    color: #1d5297;
  }
`;
export const PlanPrice = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  border-bottom: 1px solid #dfecff;
  width: 100%;
  height: 294px;
  text-align: center;
  letter-spacing: 0px;

  span {
    font: 13px/19px Montserrat;
    color: #333333;
    margin: 0px 0px 5px 0px;
  }
  h5 {
    font: 14px/18px Montserrat;
    color: #1d5297;
  }
  h5 > span {
    background: #51c99c 0% 0% no-repeat padding-box;
    border-radius: 12px;
    width: 80px;
    height: 23px;
    font: Bold 14px/18px Montserrat;
    color: #ffffff;
    text-transform: uppercase;
    text-align: center;
    padding: 2px 7px 2px 7px;
    margin-left: 5px;
  }
  h4 {
    font: Bold 15px/20px Montserrat;
    margin-bottom: 12px;
  }
  h3 {
    font: 20px/24px Montserrat;
    color: #1d5297;
  }
  h3 > strong {
    font: Bold 35px/24px Montserrat;
    color: #1d5297;
  }
  div > span {
    text-decoration: line-through;
    margin-right: 5px;
  }
  div > strong {
    font: Bold 13px/19px Montserrat;
  }
`;
export const ContrateButton = styled.button`
  width: 279px;
  height: 52px;
  border-radius: 26px;
  border: 0px solid transparent;
  background: #ff6a17 0% 0% no-repeat padding-box;
  text-align: center;
  font: Bold 22px/27px Montserrat;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  margin: 25px 0 28px 0;
  &:hover {
    opacity: 0.8;
  }
`;

export const BeneficiosInfo = styled.div`
  display: flex;
  align-self: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-left: 27px;
  height: 220px;
  span {
    text-align: left;
    font: 16px/32px Montserrat;
    letter-spacing: 0px;
    color: #333333;
  }
  span > strong {
    font: Bold 16px/32px Montserrat;
  }

  span > .underlined {
    text-decoration: underline;
  }
`;
