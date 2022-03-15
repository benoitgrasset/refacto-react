import React from 'react';
import { getCountries, getClassifications, getSubClassifications } from '../../utils/utils';
import '../../app.css';

interface State {
  countries: string[],
  classifications: string[],
  subClassifications: string[]
}

interface Props {
  domains: string[]
}

class DomainFilter extends React.Component<Props, State> {

  state: State = {
    countries: [],
    classifications: [],
    subClassifications: []
  };

  componentDidMount() {
    const { domains } = this.props;

    this.setState(prevState => ({
      ...prevState,
      countries: getCountries(domains),
      subClassifications: getSubClassifications(domains),
      classifications: getClassifications(domains)
    }))
  }

  render() {
    const { countries, classifications, subClassifications } = this.state;

    return (<>
      <select name="countries" multiple>
        {countries.map(country => (
          <option value={country} key={country}>{country}</option>
        ))}
      </select>
      <select name="classifications" multiple>
        {classifications.map(classification => (
          <option value={classification} key={classification}>{classification}</option>
        ))}
      </select>
      <select name="subClassifications" multiple>
        {subClassifications.map(subClassification => (
          <option value={subClassification} key={subClassification}>{subClassification}</option>
        ))}
      </select>
    </>)
  }
}

export default DomainFilter
