import { Component } from 'react';
import Select from 'react-select';
import { fetchBreeds } from 'api';
import { ErrorMessage } from './ErrorMessage';

export class BreedSelect extends Component {
  state = {
    breeds: [],
    error: null,
    isLoading: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const breeds = await fetchBreeds();
      this.setState({ breeds: breeds });
    } catch {
      this.setState({
        error:
          'Мы не смогли загрузить породы собачек, пожалуйста перезагрузите страницу чтобы попробовать еще раз',
      });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  buildOptions = () => {
    return this.state.breeds.map(breed => ({
      value: breed.id,
      label: breed.name,
    }));
  };

  render() {
    const { onSelect } = this.props;
    const { error, isLoading } = this.state;
    const options = this.buildOptions();
    return (
      <>
        <Select
          options={options}
          isLoading={isLoading}
          onChange={option => onSelect(option.value)}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </>
    );
  }
}
