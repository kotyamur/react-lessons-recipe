import { Form as FormikForm } from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: ${p => p.theme.space[3]}px;
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: 4px;
`;
