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
import { Formik, Field, Form } from "formik";
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

export const ModalPromoGroup = ({
  promoGroupData,
  handleClose,
  createPromoGroup,
  title,
  isOpen
}) => {
  const { promoGroup, error, loading } = promoGroupData;
  let open = promoGroup.id > 0 ? false : isOpen;
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
        <Formik
          initialValues={promoGroup}
          onSubmit={(values, actions) => {
            createPromoGroup(values);
            actions.setSubmitting(false);
          }}
          render={({ isSubmitting }) => (
            <Form>
              <DialogContent>
                <DialogContentText id="alert-dialog-description" />
                <Field type="text" name="groupName" />
                <Field type="number" name="markup" />
                <Field type="number" name="minimumDeposit" />
                <Field type="number" name="minimumTransaction" />
                <Field type="number" name="minimumTransfer" />
                <Field component="textarea" name="description" />
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
