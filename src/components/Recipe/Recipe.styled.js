import styled from 'styled-components';

export const Wraper = styled.div`
  padding: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[4]}px;
`;
