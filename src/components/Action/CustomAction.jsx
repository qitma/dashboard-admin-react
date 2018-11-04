import React from "react";
import Create from "@material-ui/icons/Create";
import DeleteForever from "@material-ui/icons/DeleteForever";
import ModalDialog from "../../components/CustomModal/ModalDialog";
//import PropTypes from "prop-types";

class CustomAction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDeleteModal: false
    };

    this.showDeleteModal = this.showDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
  }

  showDeleteModal = () => {
    this.setState({ showDeleteModal: true });
  };

  closeDeleteModal = () => {
    this.setState({ showDeleteModal: false });
  };

  render() {
    return (
      <div>
        <ModalDialog
          open={this.state.showDeleteModal}
          handleClose={this.closeDeleteModal}
        >
          Are you sure want to delete this data ?
        </ModalDialog>
        <div>
          <span>
            <Create />
          </span>
          <span onClick={this.showDeleteModal}>
            <DeleteForever />
          </span>
        </div>
      </div>
    );
  }
}

export default CustomAction;
