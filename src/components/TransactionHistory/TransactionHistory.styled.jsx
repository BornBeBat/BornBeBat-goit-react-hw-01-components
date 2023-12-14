import styled from '@emotion/styled';

export const HistoryContainer = styled.table`
  border-collapse: collapse;
`;
export const Thead = styled.thead`
  font-size: 0.8em;
  color: var(--color-background);
  background-color: rgba(90, 159, 182, 0.764);
  text-transform: uppercase;
`;

export const Tbody = styled.tbody`
  font-size: 0.8em;
  color: var(--black-opasiti-03);
`;
export const ColumHead = styled.th`
  border: 1px solid grey;
  width: calc(70vw / 3);
  text-align: center;
  padding-block: 16px;
`;
export const ColumBody = styled.th`
  border: 1px solid grey;
  width: calc(70vw / 3);
  text-align: center;
  padding-block: 16px;
`;

export const Row = styled.tr`
  background-color: ${props => {
    return props.index % 2 === 0
      ? 'var(--color-background)'
      : 'var(--color-background-noar)';
  }};
`;
