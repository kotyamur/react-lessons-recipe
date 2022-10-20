import { Component } from 'react';
import Select from 'react-select';
import { fetchBreeds } from 'api';
// export const BreedSelect = ({ breeds, onSelect }) => {
//   const options = breeds.map(breed => ({
//     value: breed.id,
//     label: breed.name,
//   }));
//   return (
//     <Select options={options} onChange={option => onSelect(option.value)} />
//   );
// };

export class BreedSelect extends Component {
  state = {
    breeds: [],
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

  buildOptions = () => {
    return this.state.breeds.map(breed => ({
      value: breed.id,
      label: breed.name,
    }));
  };

  render() {
    const { onSelect } = this.props;
    const { error } = this.state;
    const options = this.buildOptions();
    return (
      <>
        <Select options={options} onChange={option => onSelect(option.value)} />
        {error && <div>{error}</div>}
      </>
    );
  }
}
