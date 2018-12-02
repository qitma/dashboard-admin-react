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
import { Formik, FastField, Form } from "formik";
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

const ModalPromoGroup = ({
  promoGroupData,
  handleClose,
  createPromoGroup,
  title,
  isOpen,
  classes
}) => {
  const { promoGroup, error, loading } = promoGroupData;
  //let open = promoGroup.id > 0 ? false : isOpen;
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        disableBackdropClick
        disableRestoreFocus={true}
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <Divider />
        <Formik
          initialValues={promoGroup}
          onSubmit={(values, actions) => {
            alert(JSON.stringify(values, null, 2));
            createPromoGroup(values);
            actions.setSubmitting(false);
            handleClose();
          }}
          render={({ isSubmitting, values, handleChange }) => (
            <Form>
              <DialogContent>
                <DialogContentText id="alert-dialog-description" />
                {/* <Field type="text" name="groupName" />
                <Field type="number" name="markup" />
                <Field type="number" name="minimumDeposit" />
                <Field type="number" name="minimumTransaction" />
                <Field type="number" name="minimumTransfer" />((
                <Field component="textarea" name="description" /> */}
                <TextField
                  id="standard-groupName"
                  label="Group Name"
                  name="name"
                  className={classes.textField}
                  // eslint-disable-next-line react/prop-types
                  defaultValue={values.name}
                  onChange={handleChange}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                />
                <TextField
                  id="standard-markup"
                  label="Mark Up"
                  name="markup"
                  className={classes.textField}
                  defaultValue={values.markup}
                  onChange={handleChange}
                  margin="normal"
                  type="number"
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                />
                <TextField
                  id="standard-minimumDeposit"
                  label="Minimum Deposit"
                  name="minimumDeposit"
                  className={classes.textField}
                  defaultValue={values.minimumDeposit}
                  onChange={handleChange}
                  margin="normal"
                  type="number"
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                />
                <TextField
                  id="standard-minimumTransaction"
                  label="Minimum Transaction"
                  name="minimumTransaction"
                  className={classes.textField}
                  defaultValue={values.minimumTransaction}
                  onChange={handleChange}
                  margin="normal"
                  type="number"
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                />
                <TextField
                  id="standard-minimumTransfer"
                  label="Minimum Transfer"
                  name="minimumTransfer"
                  className={classes.textField}
                  defaultValue={values.minimumTransfer}
                  onChange={handleChange}
                  margin="normal"
                  type="number"
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                />
                <TextField
                  id="standard-description"
                  label="Description"
                  name="description"
                  className={classes.textField}
                  defaultValue={values.description}
                  onChange={handleChange}
                  margin="normal"
                  multiline
                  rows={2}
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <RegularButton
                  onClick={handleClose}
                  color="danger"
                  size="sm"
                  disabled={isSubmitting}
                >
                  CANCEL
                </RegularButton>
                <RegularButton
                  color="success"
                  size="sm"
                  autoFocus
                  type="submit"
                  disabled={isSubmitting}
                >
                  SUBMIT
                </RegularButton>
              </DialogActions>
            </Form>
          )}
        />
      </Dialog>
    </div>
  );
};

ModalPromoGroup.propTypes = {
  classes: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  promoGroupData: PropTypes.object.isRequired,
  createPromoGroup: PropTypes.func.isRequired,
  size: PropTypes.oneOf(["sm", "lg", "md"])
};

export default withStyles(styles)(ModalPromoGroup);
