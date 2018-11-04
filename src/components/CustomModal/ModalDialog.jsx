import React, { Children } from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Modal from "@material-ui/core/Modal";
import RegularButton from "../../components/CustomButtons/Button";
import Info from "../../components/Typography/Info";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    borderRadius: 10
  },
  buttonDialog: {
    float: "right",
    marginTop: "1em"
  },
  MessageInfo: {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: 300
  }
});

class ModalDialog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, open, handleClose, classes } = this.props;
    return (
      <Modal open={open} onClose={handleClose}>
        <div style={getModalStyle()} className={classes.paper}>
          <div className={classes.MessageInfo}>
            <Info className={classes.MessageInfo}>{children}</Info>
          </div>
          <RegularButton
            size="sm"
            color="success"
            className={classes.buttonDialog}
          >
            OK
          </RegularButton>
          <RegularButton
            size="sm"
            color="danger"
            className={classes.buttonDialog}
          >
            CANCEL
          </RegularButton>
        </div>
      </Modal>
    );
  }
}

ModalDialog.propTypes = {
  classes: PropTypes.any.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired
};

export default withStyles(styles)(ModalDialog);
