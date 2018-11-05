import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
//custom component
import RegularButton from "../../components/CustomButtons/Button";
import { Divider } from "@material-ui/core";

// eslint-disable-next-line no-unused-vars
const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  }
});

class ModalUpdateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.data
    };
  }

  handleChange = event => {
    this.setState({
      user: {
        [event.target.name]: event.target.value
      }
    });
    // eslint-disable-next-line no-console
    console.log(this.state.user);
  };

  render() {
    const { open, handleClose, handleSuccess, title, classes } = this.props;
    const inputPropsPhone = {
      max: 14
    };
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          disableBackdropClick
        >
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <Divider />
          <DialogContent>
            <DialogContentText id="alert-dialog-description" />
            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                id="standard-name"
                label="Name"
                name="name"
                className={classes.textField}
                value={this.state.user.name}
                onChange={this.handleChange}
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
                fullWidth
              />
              <TextField
                id="standard-phonenumber"
                label="Phone Number"
                name="phoneNumber"
                className={classes.textField}
                value={this.state.user.phoneNumber}
                onChange={this.handleChange}
                margin="normal"
                inputProps={inputPropsPhone}
                InputLabelProps={{
                  shrink: true
                }}
                fullWidth
              />
              <TextField
                id="standard-city"
                label="City"
                name="city"
                className={classes.textField}
                value={this.state.user.city}
                onChange={this.handleChange}
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
                fullWidth
              />
              <TextField
                id="standard-deposit"
                label="Deposit"
                name="deposit"
                className={classes.textField}
                value={this.state.user.deposit}
                onChange={this.handleChange}
                margin="normal"
                type="number"
                InputLabelProps={{
                  shrink: true
                }}
                fullWidth
              />
            </form>
          </DialogContent>
          <DialogActions>
            <RegularButton onClick={handleClose} color="danger" size="sm">
              CANCEL
            </RegularButton>
            <RegularButton
              onClick={handleSuccess}
              color="success"
              size="sm"
              autoFocus
            >
              OK
            </RegularButton>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ModalUpdateUser.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSuccess: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};

export default withStyles(styles)(ModalUpdateUser);
