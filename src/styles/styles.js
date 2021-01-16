import styled from 'styled-components';

const Button = styled.button`
  margin: 5px;
  min-height: 100px;
  min-width: 100px;
  border-radius: 50%;
  border: 0;
  color: white;
  transition: 0.2s;

  &:focus {
    outline: 0;
  }
`;

export const Main = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 410px;
  font-size: 40px;
`;

export const Display = styled.div`
  text-align: right;
  min-height: 150px;
  font-size: 100px;
  color: white;
`;

export const GrayButton = styled(Button)`
  color: black;
  background-color: #a5a5a5
`;

export const OrengeButton = styled(Button)`
  background-color: #ff9a0a
`;

export const DarkButton = styled(Button)`
  background-color: #333333 
`;

export const ZeroButton = styled(DarkButton)`
  text-align: left;
  padding-left: 40px;
  min-width: 210px;
  border-radius: 50px;
`;