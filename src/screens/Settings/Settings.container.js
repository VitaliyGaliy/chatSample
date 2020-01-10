import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { theme } from 'store/ducks/settings/selectors';

import { setTheme } from 'store/ducks/settings/actions';

import Settings from './Settings';

const mapStateToProps = createStructuredSelector({
  theme,
});

const mapDispatchToProps = {
  setTheme,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
