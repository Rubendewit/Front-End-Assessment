import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import getNewsArticles from './getNewsArticles';
import NewsCard from './NewsCard';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { newsArticles: [] };
  }

  async componentWillMount() {
    const variables = {
      keywords: ['hunkemoller']
    };
  
    const result = await getNewsArticles(variables);
  
    this.setState({
      newsArticles: result.fashionunitedNlNewsArticles,
    });
  }

  newsArticles() {
    return this.state.newsArticles.map((newsArticle, index) =>
      <NewsCard key={index} news={newsArticle} />
    )
  }
  
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <h1>Fashion News</h1>
        <div>
          {this.newsArticles()}
        </div>
      </div>
    );
  }
}

export default App;
