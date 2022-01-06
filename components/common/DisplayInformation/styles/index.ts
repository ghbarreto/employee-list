import styled from 'styled-components';

interface Props {
  marginTop?: string;
}

export const Style = styled.div<Props>`
  margin-top: ${props => props.marginTop || null};
  div {
    font-size: 18px;
    color: grey;
    margin-left: 15px;
  }

  span {
    margin-left: 30px;
  }
`;
