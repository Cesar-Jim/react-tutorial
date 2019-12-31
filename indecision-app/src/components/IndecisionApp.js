import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  // handleDeleteOptions
  handleDeleteOptions = () => {
    this.setState(() => ({
      options: []
    }));
  };

  // handleClearSelectedOption
  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };

  // handleDeleteOption
  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  };

  // handlePick
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];

    this.setState(() => ({
      selectedOption: option
    }));
  };

  // handleAddOption
  handleAddOption = option => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }));
  };

  // componentDidMount
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({
          options
        }));
      }
    } catch (e) {
      // do nothing at all
    }
  }

  // componentDidUpdate
  componentDidUpdate(prevProps, prevState) {
    // we have acces to this.props & this.state for the new state
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);

      localStorage.setItem('options', json);
    }
  }

  // componentWillUnmount
  componentWillUnmount() {
    // normally used for clean-up tasks
    console.log('componentWillUnmount(');
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className='container'>
          <Action
            handlePick={this.handlePick}
            hasOptions={this.state.options.length > 0}
          />
          <div className='widget'>
            <Options
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
              options={this.state.options}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}
