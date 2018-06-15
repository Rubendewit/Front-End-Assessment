import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Home from './components/Home';
import Article from './components/Article';
import AppBar from './components/AppBar';
import LoadMore from './components/LoadMore';

const browserHistory = createHistory();

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
        <Router history={browserHistory}>
          <div className="App">
            <CssBaseline />
            <AppBar />
            <Route exact path="/" component={Home}/>
            <Route path="/article/:id/:slug" component={Article}/>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
