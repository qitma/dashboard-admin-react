import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";
import tasksStyle from "assets/jss/material-dashboard-react/components/tasksStyle.jsx";
const CustomCheckbox = ({ isSelected, handleChecked, classes }) => {
  return (
    <Checkbox
      checked={isSelected}
      onClick={handleChecked}
      checkedIcon={<Check className={classes.checkedIcon} />}
      icon={<Check className={classes.uncheckedIcon} />}
      classes={{
        checked: classes.checked,
        root: classes.root
      }}
    />
  );
};

CustomCheckbox.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  handleChecked: PropTypes.func.isRequired,
  classes: PropTypes.any
};

export default withStyles(tasksStyle)(CustomCheckbox);
