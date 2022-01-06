import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  border-bottom: 0.03em solid #e3e6e9;

  .information-container {
    display: flex;
    margin-bottom: 30px;
    .information-container-sub {
      margin-left: 40px;
    }
  }
  img {
    border: 10px solid red;
    border-radius: 240px;
    border: 0.03em solid #e3e6e9 !important;
  }
`;

export const Tags = styled.div`
  display: flex;
  margin-top: 5px;
  span{
    background-color: #e3e6e9;
    padding: 8px;
    margin-left: 10px;
    border-radius: 7px;
  }
`;
