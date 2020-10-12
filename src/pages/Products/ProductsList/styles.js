import styled from 'styled-components';
import Card from '../../../components/Card';

export const Container = styled.div`
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 16px;
`;

export const CardStyle = styled(Card)`
  margin: 16px 8px;
  width: 180px;
`;
