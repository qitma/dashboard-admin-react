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

class ModalUser extends React.Component {
  render() {
    const {
      data,
      open,
      handleClose,
      handleSubmit,
      handleChange,
      title,
      size,
      classes
    } = this.props;
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
          disableRestoreFocus={true}
        >
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <Divider />
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <DialogContent>
              <DialogContentText id="alert-dialog-description" />
              <TextField
                id="standard-name"
                label="Name"
                name="name"
                className={classes.textField}
                defaultValue={data.name}
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
                onChange={e => handleChange(data.id, e)}
                fullWidth
              />
              <TextField
                id="standard-phonenumber"
                label="Phone Number"
                name="phoneNumber"
                className={classes.textField}
                defaultValue={data.phoneNumber}
                margin="normal"
                inputProps={inputPropsPhone}
                InputLabelProps={{
                  shrink: true
                }}
                onChange={e => handleChange(data.id, e)}
                fullWidth
              />
              <TextField
                id="standard-city"
                label="City"
                name="city"
                className={classes.textField}
                defaultValue={data.city}
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
                onChange={e => handleChange(data.id, e)}
                fullWidth
              />
              {/* <TextField
                id="standard-deposit"
                label="Deposit"
                name="deposit"
                className={classes.textField}
                defaultValue={data.deposit}
                margin="normal"
                type="number"
                InputLabelProps={{
                  shrink: true
                }}
                onChange={e => handleChange(data.id, e)}
                fullWidth
              /> */}
            </DialogContent>
            <DialogActions>
              <RegularButton onClick={handleClose} color="danger" size="sm">
                CANCEL
              </RegularButton>
              <RegularButton color="success" size="sm" autoFocus type="submit">
                OK
              </RegularButton>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}

ModalUser.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  size: PropTypes.oneOf(["sm", "lg", "md"])
};

export default withStyles(styles)(ModalUser);
