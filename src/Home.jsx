import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import getNewsArticles from './getNewsArticles';
import NewsCard from './NewsCard';

class Home extends Component {
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
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      justifyContent: 'center'
    };

    const cards = this.state.newsArticles.map((newsArticle, index) =>
      <NewsCard key={index} news={newsArticle} />
    )

    return (
      <section className="CardContainer" style={containerStyle}>
        {cards}
      </section>
    )
  }

  render() {
    return (
      <div>
        {this.newsArticles()}
      </div>
    );
  }
}

export default Home;
