import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import { getNewsArticles } from '../../getNews';
import NewsCard from '../NewsCard/NewsCard';
import LoadMore from '../LoadMore/LoadMore';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center'
  }
};

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
    const newsArticles = result && result.fashionunitedNlNewsArticles;
    const hasNextPage = !!newsArticles.length && !(newsArticles.length % limit);

    this.setState({
      newsArticles: _.uniqBy([...this.state.newsArticles, ...newsArticles], 'id'),
      articlesLoaded: this.state.articlesLoaded + newsArticles.length,
      hasNextPage
    });
  }

  async componentDidMount() {
    await this.getArticles();
  }

  newsArticles() {
    const cards = this.state.newsArticles.map((newsArticle, index) =>
      <NewsCard key={index} news={newsArticle} />
    )

    return (
      <section className={this.props.classes.container}>
        {cards}
      </section>
    )
  }

  render() {

    const loadMoreButton = this.state.hasNextPage
      ? <LoadMore onClick={this.getArticles} offset={this.state.articlesLoaded} />
      : null;

    return (
      <div key="foo">
        <div className="ArticleContainer">
          {this.newsArticles()}
        </div>
        {loadMoreButton}
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
