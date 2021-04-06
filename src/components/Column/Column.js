import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
import {settings} from '../../data/dataStore';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';

class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  }

  static propTypes = {
    title: PropTypes.node,
    cards: PropTypes.array,
  }

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={this.props.icon} />
          </span>
          {this.props.title}
        </h3>
        <div>
          {this.state.cards.map(({key, ...cardProps}) => (
            <Card key={key} {...cardProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>
      </section>
    )
  }

  addCard(title) {
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.lenght ? state.cards[state.cards-1].key+1 : 0,
            title
          }
        ]
      }
    ));
  }
}

export default Column;