import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
//custom
import UserActions from "./UserActions.jsx";
import SearchField from "../../components/Action/Search.jsx";
import RegularButton from "../../components/CustomButtons/Button";
import ModalUser from "./ModalUser";
import Icon from "@material-ui/core/Icon";

class ManageUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      user: {
        id: 0,
        name: "",
        phoneNumber: "",
        city: "",
        deposit: ""
      },
      showCreateModal: false,
      page: 0,

      isUpdate: true // for determine need re-render or not
    };
  }

  componentDidMount() {
    this.fetchDataUser();
    // eslint-disable-next-line no-console
    console.log("fetch did mount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!nextState.isUpdate) return false;
    return true;
  }

  handleSubmit = event => {
    event.preventDefault();
    var users = this.getCopyUsers();
    var user = { ...this.state.user };
    //console.log(user);
    if (this.state.user.id > 0) {
      //console.log(users);
      let _users = this.updateUsers(users, user);
      this.postDataUser(_users);
    } else {
      user.id = users[users.length - 1].id + 1;
      users.push(user);
      this.postDataUser(users);
    }
    this.fetchDataUser(); //update state.isUpdate for force re-render
  };

  openModal = data => {
    this.setState({ user: { ...data } });
  };

  closeModal = () => {
    this.setState({
      user: {
        id: 0,
        name: "",
        phoneNumber: "",
        city: "",
        deposit: ""
      }
    });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  showCreateModal = () => {
    this.setState({ showCreateModal: true });
  };

  successCreateModal = () => {
    this.setState({ showCreateModal: false });
  };

  closeCreateModal = () => {
    this.setState({ showCreateModal: false });
    this.closeModal();
  };
  //handleChange for modal in child.
  handleChange = (index, event) => {
    // eslint-disable-next-line no-console
    let target = event.target;
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        [target.name]: target.value
      },
      isUpdate: false // set update to false, for not re-render parent
    }));
    console.log(this.state.user);
  };

  postDataUser = users => {
    localStorage.setItem("Users", JSON.stringify(users));
  };

  deleteDataUser = index => {
    let users = this.getCopyUsers().filter(x => x.id !== index);
    this.postDataUser(users);
    this.fetchDataUser();
  };

  fetchDataUser() {
    let users = JSON.parse(localStorage.getItem("Users"));

    this.setState({ users, isUpdate: true });
  }

  getCopyUsers() {
    return this.state.users.slice();
  }

  updateUsers(users, newUser) {
    //console.log(users);
    let newUsers = users.map(x => {
      if (x.id === newUser.id) {
        x = { ...newUser };
      }
      return x;
    });

    return newUsers;
  }

  render() {
    // eslint-disable-next-line no-console
    //console.log("renderr");
    const { classes } = this.props;
    const header = ["Name", "Phone Number", "City", "Deposit", "Action"];
    const users = this.state.users;
    const createModal = (
      <ModalUser
        open={this.state.showCreateModal}
        handleClose={this.closeCreateModal}
        handleSuccess={this.successCreateModal}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        data={this.state.user}
        size="sm"
        title="Add Data User"
      />
    );

    const cellAction = (
      <UserActions
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleDelete={this.deleteDataUser}
        openModal={this.openModal}
        closeModal={this.closeModal}
      />
    );
    const wrapperAdd = {
      display: "flex",
      justifyContent: "space-between"
    };

    return (
      <GridContainer>
        {createModal}
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            {/* <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Simple Table</h4>
              <p className={classes.cardCategoryWhite}>
                Here is a subtitle for this table
              </p>
            </CardHeader> */}
            <CardBody>
              <div style={wrapperAdd}>
                <RegularButton
                  onClick={this.showCreateModal}
                  color="success"
                  size="sm"
                  autoFocus
                  style={{ fontSize: "1em", textAlign: "left" }}
                >
                  <Icon>add</Icon> Add
                </RegularButton>
                <SearchField />
              </div>

              <Table
                tableHeaderColor="primary"
                tableHead={header}
                tableData={users}
                cellAction={cellAction}
                handleChangePage={this.handleChangePage}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default ManageUser;
