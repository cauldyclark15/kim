import React, { Component } from 'react';
import { AutoComplete } from 'antd';

class Search extends Component {
  state = {
    dataSource: ['javascript', 'go', 'docker'],
    selectedValue: '',
  };

  onSelect = value => {
    this.setState({ selectedValue: value }, () => {
      alert(value);
    });
  };

  render() {
    const { dataSource } = this.state;

    return (
      <AutoComplete
        dataSource={dataSource}
        style={{ width: '100%', height: 30 }}
        onSelect={this.onSelect}
        onSearch={() => {}}
        placeholder='Search here...'
      />
    );
  }
}

export default Search;
