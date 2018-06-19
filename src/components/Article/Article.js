import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { getNewsArticle } from '../../getNews';
import NewsCard from '../NewsCard/NewsCard';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center'
  }
}

export class Article extends Component {
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
    return (
      <section className={this.props.classes.container}>
        {<NewsCard news={this.state.article} isExternal={true} />}
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

Article.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default withStyles(styles)(Article);
