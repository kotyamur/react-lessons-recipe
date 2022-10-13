import { Component } from 'react';
import PropTypes from 'prop-types';
import { RecipeInfo } from '../RecipeInfo/RecipeInfo';
import { Wraper, Title, Image } from './Recipe.styled';
import { RecipeDifficulty } from '../RecipeDifficulty/RecipeDifficulty';

export class Recipe extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const {
      recipe: {
        name,
        time,
        servings,
        calories,
        difficulty,
        image = 'https://via.placeholder.com/340x200',
      },
    } = this.props;

    const { isOpen } = this.state;
    return (
      <Wraper>
        <Image src={image} alt={name} onClick={this.toggle} />
        <Title>{name}</Title>
        {isOpen && (
          <>
            <RecipeInfo time={time} servings={servings} calories={calories} />
            <RecipeDifficulty difficulty={difficulty} />
          </>
        )}
      </Wraper>
    );
  }
}

Recipe.propTypes = {
  recipe: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']),
  }),
};
