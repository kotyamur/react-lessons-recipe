export const Dog = ({ dog: { url, breeds } }) => {
  const { name, bred_for, temperament } = breeds[0];
  return (
    <div>
      <img src={url} width="480" alt="dog" />
      <div>
        <p>Name: {name}</p>
        <p>Bred for: {bred_for}</p>
        <p>Temperament: {temperament}</p>
      </div>
    </div>
  );
};
