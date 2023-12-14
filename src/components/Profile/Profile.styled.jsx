import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  overflow: hidden;
  width: 600px;
  background-color: var(--color-background);
  border-radius: 14px;
  border: 3px solid var(--black-opasiti-08);
`;

export const Description = styled.div`
  display: block;
  margin-bottom: 50px;
`;

export const Wrapper = styled.div`
  display: block;
  border-radius: 50%;
  overflow: hidden;
  width: 220px;
  height: 220px;
  margin: 75px auto;
`;

export const Avatar = styled.img`
  height: 100%;
`;

export const Username = styled.p`
  margin-bottom: 0.5em;
  font-size: 1.3em;
  font-weight: var(--weighth-bold);
  text-align: center;
`;

export const Text = styled.p`
  margin-bottom: 0.25em;
  font-size: 1.1em;
  text-align: center;
  color: var(--black-opasiti-03);
`;

export const StatisticContainer = styled.ul`
  display: flex;
  justify-content: center;
  background-color: var(--color-background-noar);
`;
export const Item = styled.li`
  border: 1px solid var(--black-opasiti-03);
  display: flex;
  flex-direction: column;
  flex-basis: 33.33%;
  align-items: center;
  justify-content: center;
  padding-block: 0.8em;
  gap: 0.4em;
`;
export const Label = styled.span`
  font-size: 0.8em;
  color: var(--black-opasiti-03);
`;

export const Quantity = styled.span`
  font-size: 0.8em;
  font-weight: var(--weighth-bold);
`;
