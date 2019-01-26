import React, { Component } from 'react';
import { Layout } from 'antd';

import Header from './components/Header';

import './App.css';
import 'antd/dist/antd.css';

const { Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header />
          <Content>
            <h1>yes</h1>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
