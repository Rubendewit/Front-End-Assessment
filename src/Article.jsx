import React, { Component } from 'react';
import { getNewsArticle } from './getNews';
import NewsCard from './NewsCard';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { article: {} };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    const variables = {
      id: Number(id)
    };
  
    const result = await getNewsArticle(variables);
  
    this.setState({
      article: result.fashionunitedNlNewsArticle,
    });
  }

  newsArticle() {
    const containerStyle = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      justifyContent: 'center'
    };

    const { article } = this.state; 

    console.log('>>>', article, this.state)

    return (
      <section className="CardContainer" style={containerStyle}>
        {<NewsCard news={article} />}
      </section>
    )
  }

  render() {
    return (
      <div>
        {this.newsArticle()}
      </div>
    );
  }
}

export default Home;
