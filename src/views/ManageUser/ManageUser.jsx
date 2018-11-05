import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
//import icons
import Create from "@material-ui/icons/Create";
import DeleteForever from "@material-ui/icons/DeleteForever";
//import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomAction from "components/Action/CustomAction.jsx";
import ModalUpdateUser from "./ModalUpdateUser";
import CustomDialog from "../../components/CustomModal/ModalDialog";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  buttonPointer: {
    padding: 5,
    height: 100,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#EEEEEE"
    }
  }
};

const dummyUser = [
  {
    id: 1,
    name: "hendra",
    phoneNumber: "082126153031",
    city: "bandung",
    deposit: 10000
  },
  {
    id: 2,
    name: "Qitma",
    phoneNumber: "12323232",
    city: "bandung",
    deposit: 10000
  }
];

localStorage.setItem("Users", JSON.stringify(dummyUser));
class ManageUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showDeleteModal: false,
      showUpdateModal: false
    };

    this.showDeleteModal = this.showDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
    this.showUpdateModal = this.showUpdateModal.bind(this);
    this.closeUpdateModal = this.closeUpdateModal.bind(this);
  }

  componentDidMount() {
    this.fetchDataUser();
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

  fetchDataUser() {
    let users = JSON.parse(localStorage.getItem("Users"));

    this.setState({ users });
  }

  render() {
    const { classes } = this.props;
    const header = ["Name", "PhoneNumber", "City", "Deposit", "Action"];
    const users = this.state.users;
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
      >
        {" "}
      </ModalUpdateUser>
    );
    const cellAction = (
      <CustomAction>
        {updateComponent}
        {deleteComponent}
        <div style={{ display: "inline-block" }}>
          <span
            className={classes.buttonPointer}
            onClick={this.showUpdateModal}
          >
            <Create />
          </span>
          <span
            className={classes.buttonPointer}
            onClick={this.showDeleteModal}
          >
            <DeleteForever />
          </span>
        </div>
      </CustomAction>
    );
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            {/* <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Simple Table</h4>
              <p className={classes.cardCategoryWhite}>
                Here is a subtitle for this table
              </p>
            </CardHeader> */}
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={header}
                tableData={users}
                cellAction={cellAction}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

ManageUser.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ManageUser);
