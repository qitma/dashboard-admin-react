import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import tableStyle from "assets/jss/material-dashboard-react/components/tableStyle.jsx";

function CustomTable({ ...props }) {
  const { classes, tableHead, tableData, tableHeaderColor } = props;
  const CellAction = props.cellAction;
  const keyNo = 1;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow>
              <TableCell
                className={classes.tableCell + " " + classes.tableHeadCell}
                key={keyNo}
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
          {tableData.map((prop, key) => {
            return (
              <TableRow key={prop[`id`]}>
                <TableCell className={classes.tableCell} key={keyNo}>
                  {key + 1}
                </TableCell>
                {Object.keys(prop).map((key, index) => {
                  if (key.toLowerCase() !== "id") {
                    return (
                      <TableCell className={classes.tableCell} key={index + 1}>
                        {prop[key]}
                      </TableCell>
                    );
                  }
                  return null;
                })}
                {CellAction && (
                  <TableCell
                    className={classes.tableCell}
                    key={Object.keys(prop).length}
                  >
                    {React.cloneElement(CellAction, { data: prop })}
                  </TableCell>
                )}
                {console.log(prop)}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {/* <div>
        <pre>{JSON.stringify(tableData)}</pre>
      </div> */}
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
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
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  ),
  cellAction: PropTypes.object
};

export default withStyles(tableStyle)(CustomTable);
