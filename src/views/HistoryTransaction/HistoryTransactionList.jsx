import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
//import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

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

const HistoryTransactionList = ({ historyTransactionList }) => {
  //const { classes } = props;

  const tableHead = [
    "Name",
    "Transaction Type",
    "Transaction Number",
    "Amount",
    "Transaction Date"
  ];
  const { historyTransactions, page, loading, error } = historyTransactionList;
  if (loading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  else if (error)
    return (
      <div>
        <h3>Error : {error.message}</h3>
      </div>
    );
  // eslint-disable-next-line no-console
  console.log(historyTransactions);
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardBody>
            {historyTransactions && (
              <Table
                tableHeaderColor="primary"
                tableHead={tableHead}
                tableData={historyTransactions}
                page={page}
              />
            )}
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

HistoryTransactionList.propTypes = {
  historyTransactionList: PropTypes.shape({
    page: PropTypes.object,
    loading: PropTypes.bool,
    error: PropTypes.object,
    historyTransactions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number
      })
    )
  })
};
export default withStyles(styles)(HistoryTransactionList);