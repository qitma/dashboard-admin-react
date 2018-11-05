import React from "react";
import PropTypes from "prop-types";
import Tooltip from "@material-ui/core/Tooltip";
//import icons
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
//import CardHeader from "components/Card/CardHeader.jsx";

import ModalUpdateUser from "./ModalUpdateUser";
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
    this.showDeleteModal = this.showDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
    this.showUpdateModal = this.showUpdateModal.bind(this);
    this.closeUpdateModal = this.closeUpdateModal.bind(this);
  }

  showDeleteModal = () => {
    this.setState({ showDeleteModal: true });
  };

  closeDeleteModal = () => {
    this.setState({ showDeleteModal: false });
  };

  showUpdateModal = () => {
    this.setState({ showUpdateModal: true });
  };

  closeUpdateModal = () => {
    this.setState({ showUpdateModal: false });
  };

  render() {
    // eslint-disable-next-line react/prop-types
    const { data, classes } = this.props;
    const deleteComponent = (
      <CustomDialog
        open={this.state.showDeleteModal}
        handleClose={this.closeDeleteModal}
        handleSuccess={this.closeDeleteModal}
        size="sm"
      >
        Are you sure want to delete this data ?
      </CustomDialog>
    );
    const updateComponent = (
      <ModalUpdateUser
        open={this.state.showUpdateModal}
        handleClose={this.closeUpdateModal}
        handleSuccess={this.closeUpdateModal}
        size="sm"
        title="Update data user"
        data={data}
      >
        {" "}
      </ModalUpdateUser>
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
  data: PropTypes.object.isRequired
};

export default withStyles(tasksStyle)(UserActions);
