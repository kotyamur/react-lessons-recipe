import { Component } from 'react';
// import ClipLoader from 'react-spinners/ClipLoader';
import ContentLoader from 'react-content-loader';

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
    isLoading: false,
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
    const { dog, error, breeds, isLoading } = this.state;
    return (
      <>
        {/* <RecipeList recipes={recipes} /> */}
        {/* <PaymentWidget /> */}
        <BreedSelect breeds={breeds} onSelect={this.selectBreed} />
        {error && <div>{error}</div>}
        {isLoading && <div>Loading...</div>}
        {isLoading && (
          <ContentLoader
            speed={2}
            width={400}
            height={460}
            viewBox="0 0 400 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="254" y="3" rx="2" ry="2" width="140" height="10" />
            <rect x="255" y="20" rx="2" ry="2" width="140" height="10" />
            <rect x="-164" y="-198" rx="2" ry="2" width="400" height="400" />
            <rect x="255" y="39" rx="2" ry="2" width="140" height="10" />
          </ContentLoader>
        )}

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
