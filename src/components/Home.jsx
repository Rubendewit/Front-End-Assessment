import React, { Component } from 'react';
import { getNewsArticles } from '../getNews';
import NewsCard from './NewsCard';
import LoadMore from './LoadMore';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { newsArticles: [] };
  }

  async componentDidMount() {
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
      <NewsCard key={index} news={newsArticle} isOverview={true} />
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
