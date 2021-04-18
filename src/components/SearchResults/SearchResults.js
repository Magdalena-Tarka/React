import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResults.scss';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';
import Container from '../Container/Container';

class SearchResults extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.string,
  }

  static defaultProps = {
    icon: settings.searchResults.icon,
    title: settings.searchResults.title,
  }

  render() {
    const {icon, title, cards} = this.props;
    return (
      <Container className={styles.wrapper}>
        <section className={styles.component}>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <Icon name={icon} />
            </span>
            {title}
          </h3>
          <div>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResults;