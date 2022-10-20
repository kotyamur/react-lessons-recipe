import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  p {
    margin-bottom: 15px;
  }
`;

export const Dog = ({ dog: { url, breeds } }) => {
  const { name, bred_for, temperament } = breeds[0];
  return (
    <Wrapper>
      <img src={url} width="400" alt={name} />
      <div>
        <p>Name: {name}</p>
        <p>Bred for: {bred_for}</p>
        <p>Temperament: {temperament}</p>
      </div>
    </Wrapper>
  );
};
