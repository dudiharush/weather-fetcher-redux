import React from 'React';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { RadioButton } from '../../../../components/common';
import { ThemeTypes } from '../../../../services/themes';
import { getPersistedTheme } from '../../../../services/ui/theme';
import { THEME_CHANGED } from '../../state/constants';
import { toggleTheme, themeChanged } from '../../state/actions';
import styles from './styles.scss';

const ToggleTheme = ({ toggle, themeChanged }) => {
  const dispatch = useDispatch();
  const defaultThemeType = getPersistedTheme();

  const toggleTheme = e => {
    dispatch(toggleTheme(e.target.value));
    dispatch(themeChanged(e.target.value));
  };

  return (
    <div className={styles.rootToggleTheme}>
      <RadioButton
        text="☀"
        value={ThemeTypes.light}
        name="themeType"
        checked={defaultThemeType === ThemeTypes.light}
        onChange={toggleTheme}
      />
      <RadioButton
        text="☽"
        value={ThemeTypes.dark}
        name="themeType"
        checked={defaultThemeType === ThemeTypes.dark}
        onChange={toggleTheme}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  themeType: state.themeType
});

const connected = connect(mapStateToProps)(ToggleTheme);

export { connected as ToggleTheme };

ToggleTheme.propTypes = {
  toggle: PropTypes.func,
  themeChanged: PropTypes.func
};

ToggleTheme.defaultProps = {
  toggle: undefined,
  themeChanged: undefined
};
