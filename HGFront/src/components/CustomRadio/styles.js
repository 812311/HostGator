import styled from 'styled-components';

export const Section = styled.div`
  position: relative;
  width: 108px;
  height: 39px;
  & svg {
    z-index: 1;
  }
  & input {
    z-index: 2;
  }
  & span.Mui-checked ~ div {
    background: #4480c5;
    color: #fff;
  }
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  color: #16437e;
  border-radius: 21px;
  padding: 8px 0 0 20px;
  font-size: 16px;
  background: #fff;
  line-height: 23px;
  text-align: center;
`;
