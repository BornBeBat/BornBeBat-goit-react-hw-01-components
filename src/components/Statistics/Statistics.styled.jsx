import styled from '@emotion/styled';

export const StatisticsContainer = styled.section`
  overflow: hidden;
  width: 768px;
  background-color: var(--color-background);
  border-radius: 14px;
  border: 3px solid var(--black-opasiti-08);
`;

export const Title = styled.h2`
  margin-block: 150px;
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: 33.33%;
  align-items: center;
  justify-content: center;
  padding-block: 0.8em;
  gap: 0.4em;
  color: var(--color-backdrop);
`;

export const Label = styled.span`
  font-size: 0.65em;
`;

export const Percentage = styled.span`
  font-size: 0.85em;
  font-weight: var(--weighth-bold);
`;
