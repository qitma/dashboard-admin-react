import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Table from "components/Table/Table.jsx";
//import CardHeader from "components/Card/CardHeader.jsx";
import { Pagination } from "components/Table/Pagination.jsx";

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

const PromoGroupList = ({ promoGroupList, handleChangePage }) => {
  //const { classes } = props;

  const tableHead = [
    "Name",
    "Mark up",
    "Min.Deposit",
    "Min.Transaction",
    "Min.Transfer"
  ];
  const tableKey = [
    "name",
    "markup",
    "minimumDeposit",
    "minimumTransaction",
    "minimumTransfer"
  ];
  const { promoGroups, page, loading, error } = promoGroupList;
  const pageComponent = (
    <div className="pagination-wrapper">
      <Pagination page={page} handleChangePage={handleChangePage} />
    </div>
  );
  if (loading)
    return (
      <div>
        <h1>Loading...</h1>
        {pageComponent}
      </div>
    );
  else if (error)
    return (
      <div>
        <h3>Error : {error.message}</h3>
        {pageComponent}
      </div>
    );
  // eslint-disable-next-line no-console
  return (
    <div>
      {promoGroups && (
        <Table
          tableHeaderColor="primary"
          tableHead={tableHead}
          tableData={promoGroups}
          tableKey={tableKey}
          page={page}
        />
      )}
      {page && pageComponent}
    </div>
  );
};

PromoGroupList.propTypes = {
  promoGroupList: PropTypes.shape({
    page: PropTypes.object,
    loading: PropTypes.bool,
    error: PropTypes.object,
    promoGroups: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number
      })
    )
  })
};
export default withStyles(styles)(PromoGroupList);
