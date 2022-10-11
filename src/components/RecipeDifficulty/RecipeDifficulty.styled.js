import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: ${p => p.theme.space[4]}px; ;
`;

export const Title = styled.h3`
  margin-bottom: ${p => p.theme.space[3]}px; ;
`;

export const BadgeList = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Badge = styled.span`
  padding: 8px;
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: 4px;
  color: ${p => {
    return p.active ? p.theme.colors.white : p.theme.colors.black;
  }};
  background-color: ${p => {
    return p.active ? p.theme.colors.accent : p.theme.colors.white;
  }};
`;
