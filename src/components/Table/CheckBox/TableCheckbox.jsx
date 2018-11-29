import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import CustomCheckBox from "./CheckBox";
//import ReactPaginate from "react-paginate";
// core components
import tableStyle from "assets/jss/material-dashboard-react/components/tableStyle.jsx";
import TableContent from "./TableContentCheckbox.jsx";
import Page from "../../../variables/Page";
//import TablePaginationActions from "./TablePaginationAction";

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5
  }
});

// const TablePaginationActionsWrapped = withStyles(actionsStyles, {
//   withTheme: true
// })(TablePaginationActions);

function CustomTableCheckbox({ ...props }) {
  const inlineStyle = {
    marginTop: "10px"
  };
  const {
    classes,
    tableHead,
    tableData,
    tableHeaderColor,
    tableKey,
    cellAction,
    handleChangePage,
    handleChecked,
    handleAllChecked,
    isSelectedAll,
    page
  } = props;
  let keyNo = 0;
  //let test = false;
  //const pageDisplay = page.count/page.size
  //const colSpanFooter = tableHead.length + 1;
  return (
    <div className={classes.tableResponsive} style={inlineStyle}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow>
              <TableCell className={classes.tableCell}>
                <CustomCheckBox
                  isSelected={isSelectedAll}
                  handleChecked={() => handleAllChecked()}
                />
              </TableCell>
              <TableCell
                className={classes.tableCell + " " + classes.tableHeadCell}
                key={++keyNo}
              >
                No
              </TableCell>
              {tableHead.map((prop, index) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={index + 1}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((data, key) => {
            // eslint-disable-next-line prettier/prettier
            let index = ( page.page * page.size )+key+1;
            return (
              <TableContent
                tableKey={tableKey}
                data={data}
                dataid={index}
                cellAction={cellAction}
                key={data[`id`]}
                handleChecked={handleChecked}
              />
            );
          })}
        </TableBody>
        {/* <TableFooter className={classes.tableFooter}>
          <TableRow>
            <TablePagination
              colSpan={colSpanFooter}
              count={10}
              rowsPerPage={3}
              page={0}
              onChangePage={handleChangePage}
              //onChangeRowsPerPage={this.handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActionsWrapped}
            />
          </TableRow>
        </TableFooter> */}
      </Table>

      {/* <div>
        <pre>{JSON.stringify(tableData)}</pre>
      </div> */}
    </div>
  );
}

CustomTableCheckbox.defaultProps = {
  tableHeaderColor: "gray",
  page: Page
};

CustomTableCheckbox.propTypes = {
  classes: PropTypes.object.isRequired,
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string).isRequired,
  tableData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  ).isRequired,
  tableKey: PropTypes.arrayOf(PropTypes.string),
  cellAction: PropTypes.object,
  handleChangePage: PropTypes.func,
  handleChecked: PropTypes.func.isRequired,
  handleAllChecked: PropTypes.func.isRequired,
  isSelectedAll: PropTypes.bool,
  page: PropTypes.shape({
    page: PropTypes.number,
    size: PropTypes.number,
    count: PropTypes.number,
    pageCount: PropTypes.number
  })
};

export default withStyles(tableStyle)(CustomTableCheckbox);
