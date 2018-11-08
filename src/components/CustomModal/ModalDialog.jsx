import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
// import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

//custom component
import RegularButton from "../../components/CustomButtons/Button";

class CustomDialog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      size,
      title,
      children,
      open,
      handleClose,
      handleSuccess
    } = this.props;
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        disableRestoreFocus={true}
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {children}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <RegularButton onClick={handleClose} color="danger" size={size}>
            CANCEL
          </RegularButton>
          <RegularButton
            onClick={handleSuccess}
            color="success"
            size={size}
            autoFocus
          >
            OK
          </RegularButton>
        </DialogActions>
        {/* <div style={getModalStyle()} className={classes.paper}>
          <div className={classes.MessageInfo}>
            <Info className={classes.MessageInfo}>{children}</Info>
          </div>
          <RegularButton
            onClick={handleSuccess}
            size="sm"
            color="success"
            className={classes.buttonDialog}
          >
            OK
          </RegularButton>
          <RegularButton
            onClick={handleClose}
            size="sm"
            color="danger"
            className={classes.buttonDialog}
          >
            CANCEL
          </RegularButton>
        </div> */}
      </Dialog>
    );
  }
}

CustomDialog.defaultProps = {
  title: ""
};

CustomDialog.propTypes = {
  size: PropTypes.oneOf(["sm", "lg", "md"]),
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSuccess: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  title: PropTypes.string
};

export default CustomDialog;
