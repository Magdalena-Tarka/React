import React from 'react';
import ListLink from '../ListLink/ListLink';
import styles from './Home.scss';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import Creator from '../Creator/Creator';
import {settings} from '../../data/dataStore';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    addList: PropTypes.func,
  }

  render() {
    const {title, subtitle, lists, addList} = this.props;
    return (
      <main className={styles.component}>
        <Container>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          {lists.map(listData => (
            <ListLink key={listData.id} {...listData} />
          ))}
          <div className={styles.creator}>
            <Creator text={settings.listCreatorText} action={addList} />
          </div>
        </Container>
      </main>
    );
  }
}

export default Home;
