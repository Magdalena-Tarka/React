import {connect} from 'react-redux';
import Home from './Home';
import {createActionAddList} from '../../redux/listsRedux';
import { settings } from '../../data/dataStore';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
});

const mapDispatchToProps = (dispatch) => ({
  addList: title => dispatch(createActionAddList({
    title,
    image: settings.defaultListImage,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);