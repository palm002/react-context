import React from 'react';
import UserCreate from './UserCreate';

import LanguageContext from '../contexts/LanguageContext';
import ColourContext from '../contexts/ColourContext';

class App extends React.Component {
  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language: language });
  };

  render() {
    return (
      <div className="ui container">
        <div className="">
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange('english')}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange('dutch')}
          />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <ColourContext.Provider value="grey">
            <UserCreate />
          </ColourContext.Provider>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
