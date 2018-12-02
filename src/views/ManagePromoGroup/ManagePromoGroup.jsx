import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import PromoGroupListContainer from "../../_containers/PromoGroups/PromoGroupListContainer";
import ModalPromoGroupContainer from "../../_containers/PromoGroups/ModalPromoGroupContainer";
import RegularButton from "../../components/CustomButtons/Button";
import Icon from "@material-ui/core/Icon";

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
  }
};

class ManagePromoGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalCreate: false
    };
  }
  handleShowModal = () => {
    this.setState({ showModalCreate: true });
  };

  handleCloseModal = () => {
    this.setState({ showModalCreate: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <GridContainer>
        <ModalPromoGroupContainer
          isOpen={this.state.showModalCreate}
          handleClose={this.handleCloseModal}
        />
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardBody>
              <RegularButton
                onClick={this.handleShowModal}
                color="success"
                size="sm"
                autoFocus
                style={{ fontSize: "1em", textAlign: "left" }}
              >
                <Icon>add</Icon> Add
              </RegularButton>
              <PromoGroupListContainer />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(styles)(ManagePromoGroup);
