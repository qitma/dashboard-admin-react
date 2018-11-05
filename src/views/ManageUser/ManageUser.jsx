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
  }

  componentDidMount() {
    this.fetchDataUser();
  }

  fetchDataUser() {
    let users = JSON.parse(localStorage.getItem("Users"));

    this.setState({ users });
  }

  render() {
    //const { classes } = this.props;
    const header = ["Name", "PhoneNumber", "City", "Deposit", "Action"];
    const users = this.state.users;

    const cellAction = <UserActions />;
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

export default ManageUser;
