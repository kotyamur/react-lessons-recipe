import { Component } from 'react';

import { fetchBreeds, fetchDogByBreed } from 'api';
import { Dog } from '../Dog/Dog';
import { BreedSelect } from '../Dog/BreedSelect';
// import recipes from '../../recipes.json';
// import { RecipeList } from '../RecipeList/RecipeList';
// import { PaymentWidget } from '../PaymentWidget/PaymentWidget';

export class App extends Component {
  state = {
    breeds: [],
    dog: null,
    error: null,
  };
  async componentDidMount() {
    try {
      const breeds = await fetchBreeds();
      this.setState({ breeds: breeds });
    } catch {
      this.setState({
        error:
          'Мы не смогли загрузить породы собачек, пожалуйста перезагрузите страницу чтобы попробовать еще раз',
      });
    }
  }

  selectBreed = async breedId => {
    try {
      const dog = await fetchDogByBreed(breedId);
      this.setState({ dog });
    } catch {
      this.setState({ error: 'Ops, dog is not founded 😢, please try again!' });
    }
  };

  render() {
    const { dog, error, breeds } = this.state;
    return (
      <>
        {/* <RecipeList recipes={recipes} /> */}
        {/* <PaymentWidget /> */}
        <BreedSelect breeds={breeds} onSelect={this.selectBreed} />
        {error && <div>{error}</div>}
        {dog && <Dog dog={dog} />}
      </>
    );
  }
}
