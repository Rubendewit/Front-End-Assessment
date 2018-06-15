import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Home from './Home';
import Article from './Article';

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

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <CssBaseline />
            <h1>Fashion News</h1>
            <Route exact path="/" component={Home}/>
            <Route path="/article/:id/:slug" component={Article}/>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
