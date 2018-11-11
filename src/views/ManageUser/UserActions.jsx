import React from "react";
import PropTypes from "prop-types";
import Tooltip from "@material-ui/core/Tooltip";
//import icons
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
//import CardHeader from "components/Card/CardHeader.jsx";

import ModalUser from "./ModalUser";
import CustomDialog from "../../components/CustomModal/ModalDialog";
import tasksStyle from "assets/jss/material-dashboard-react/components/tasksStyle.jsx";
import { withStyles } from "@material-ui/core";

class UserActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDeleteModal: false,
      showUpdateModal: false
    };
  }
  showDeleteModal = () => {
    this.setState({ showDeleteModal: true });
  };

  closeDeleteModal = () => {
    this.setState({ showDeleteModal: false });
  };

  showUpdateModal = () => {
    this.setState({ showUpdateModal: true });
    this.props.openModal(this.props.data);
  };

  closeUpdateModal = () => {
    this.setState({ showUpdateModal: false });
    this.props.closeModal();
  };
  succesUpdateModal = () => {
    this.setState({ showUpdateModal: false });
  };

  successDeleteModal = () => {
    this.setState({ showDeleteModal: false });
    this.props.handleDelete(this.props.data.id);
  };
  render() {
    // eslint-disable-next-line react/prop-types
    const { data, handleSubmit, handleChange, classes } = this.props;
    const deleteComponent = (
      <CustomDialog
        open={this.state.showDeleteModal}
        handleClose={this.closeDeleteModal}
        handleSuccess={this.successDeleteModal}
        size="sm"
      >
        Are you sure want to delete this data ?
      </CustomDialog>
    );
    const updateComponent = (
      <ModalUser
        open={this.state.showUpdateModal}
        handleClose={this.closeUpdateModal}
        handleSuccess={this.succesUpdateModal}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        size="sm"
        title="Update data user"
        data={data}
      />
    );
    return (
      <div>
        {updateComponent}
        {deleteComponent}
        <div style={{ display: "inline-block" }}>
          <Tooltip
            id="tooltip-top"
            title="Edit User"
            placement="top"
            classes={{ tooltip: classes.tooltip }}
          >
            <IconButton
              aria-label="Edit"
              className={classes.tableActionButton}
              onClick={this.showUpdateModal}
            >
              <Edit
                className={classes.tableActionButtonIcon + " " + classes.edit}
              />
            </IconButton>
          </Tooltip>
          <Tooltip
            id="tooltip-top-start"
            title="Remove User"
            placement="top"
            classes={{ tooltip: classes.tooltip }}
          >
            <IconButton
              aria-label="Close"
              className={classes.tableActionButton}
              onClick={this.showDeleteModal}
            >
              <Close
                className={classes.tableActionButtonIcon + " " + classes.close}
              />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    );
  }
}

UserActions.propTypes = {
  data: PropTypes.object.isRequired,
  classes: PropTypes.any,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default withStyles(tasksStyle)(UserActions);
