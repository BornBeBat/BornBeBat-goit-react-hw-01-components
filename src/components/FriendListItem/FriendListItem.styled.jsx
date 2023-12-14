import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 16px;
  border-radius: 24px;
  box-shadow: inset -31px -42px 110px -19px rgba(55, 206, 214, 0.64);
`;

export const Status = styled.span`
  width: 16px;
  height: 16px;
  border: 1px solid var(--black-opasiti-03);
  border-radius: 50%;
  background-color: ${props => {
    return props.status ? 'greenyellow' : 'red';
  }};
`;

export const Avatar = styled.img`
  width: 48px;
`;

export const Name = styled.p`
  font-size: 1em;
`;
