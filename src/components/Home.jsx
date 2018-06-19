import React, { Component } from 'react';
import { getNewsArticles } from '../getNews';
import NewsCard from './NewsCard';
import LoadMore from './LoadMore';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsArticles: [],
      articlesLoaded: 0
    };
  }

  getArticles = async (offset = 0, limit = 10) => {
    const variables = {
      offset,
      limit,
      keywords: ['hunkemoller']
    };
  
    const result = await getNewsArticles(variables);
    const newsArticles = result.fashionunitedNlNewsArticles;
    const hasNextPage = !!newsArticles.length && !(newsArticles.length % limit);

    this.setState({
      newsArticles: [...this.state.newsArticles, ...newsArticles],
      articlesLoaded: this.state.articlesLoaded + newsArticles.length,
      hasNextPage
    });
  }

  async componentDidMount() {
    await this.getArticles();
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
        <LoadMore onClick={this.getArticles} offset={this.state.articlesLoaded} isVisible={this.state.hasNextPage} />
      </div>
    );
  }
}

export default Home;
