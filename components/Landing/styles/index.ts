import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 1200px;
`;

export const SubContainer = styled.div`
  overflow: hidden;
  width: 90%;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;

  &:hover{
    overflow-y: scroll;
  }
`;
