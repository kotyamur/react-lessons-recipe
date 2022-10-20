import { Component } from 'react';
// import ClipLoader from 'react-spinners/ClipLoader';
import { DogSkeleton } from '../Dog/DogSkeleton';

import { fetchDogByBreed } from 'api';
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
    isLoading: false,
  };
  // async componentDidMount() {
  //   try {
  //     const breeds = await fetchBreeds();
  //     this.setState({ breeds: breeds });
  //   } catch {
  //     this.setState({
  //       error:
  //         'Мы не смогли загрузить породы собачек, пожалуйста перезагрузите страницу чтобы попробовать еще раз',
  //     });
  //   }
  // }

  selectBreed = async breedId => {
    try {
      this.setState({ isLoading: true });
      const dog = await fetchDogByBreed(breedId);
      this.setState({ dog });
    } catch {
      this.setState({ error: 'Ops, dog is not founded 😢, please try again!' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { dog, error, isLoading } = this.state;
    return (
      <>
        {/* <RecipeList recipes={recipes} /> */}
        {/* <PaymentWidget /> */}
        <BreedSelect onSelect={this.selectBreed} />
        {error && <div>{error}</div>}
        {isLoading && <div>Loading...</div>}
        {isLoading && <DogSkeleton />}

        {/* <ClipLoader
          color="green"
          loading={isLoading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        /> */}
        {dog && !isLoading && <Dog dog={dog} />}
      </>
    );
  }
}
