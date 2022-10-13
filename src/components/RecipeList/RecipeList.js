import PropTypes from 'prop-types';
import { Recipe } from '../Recipe/Recipe';
import { List } from './RecipeList.styled';

export const RecipeList = ({ recipes }) => {
  return (
    <List>
      {recipes.map((recipe, idx) => (
        <li key={idx}>
          <Recipe recipe={recipe} />
        </li>
      ))}
    </List>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
