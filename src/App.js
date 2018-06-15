import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import getNewsArticles from './getNewsArticles';
import NewsCard from './NewsCard';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3'
    }
  }
});

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
    const containerStyle = {
      display: 'flex',
      'flex-direction': 'column',
      'align-items': 'center'
    };

    const cardStyle = {
      margin: '0 0 1rem 0'
    }

    const cards = this.state.newsArticles.map((newsArticle, index) =>
      <NewsCard key={index} news={newsArticle} style={cardStyle} />
    )

    return (
      <section className="CardContainer" style={containerStyle}>
        {cards}
      </section>
    )
  }
  
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <CssBaseline />
          <h1>Fashion News</h1>
          <div>
            {this.newsArticles()}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
