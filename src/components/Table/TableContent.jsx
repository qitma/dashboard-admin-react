import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
// core components
import tableStyle from "assets/jss/material-dashboard-react/components/tableStyle.jsx";

function TableContent({ ...props }) {
  const { tableKey, data, dataid, classes } = props;
  const CellAction = props.cellAction;
  const keyNo = 1;
  const newData =
    tableKey !== undefined && tableKey.length > 0
      ? tableKey
      : Object.keys(data);
  return (
    <TableRow key={data[`id`]}>
      <TableCell className={classes.tableCell} key={keyNo}>
        {dataid}
      </TableCell>
      {newData.map((key, index) => {
        if (key.toLowerCase() !== "id") {
          return (
            <TableCell className={classes.tableCell} key={index + 1}>
              {data[key]}
            </TableCell>
          );
        }
        return null;
      })}
      {CellAction && (
        <TableCell className={classes.tableCell} key={Object.keys(data).length}>
          {React.cloneElement(CellAction, { data: data })}
        </TableCell>
      )}
    </TableRow>
  );
}

TableContent.propTypes = {
  tableKey: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.shape({
    id: PropTypes.number.isRequired
  }),
  dataid: PropTypes.number,
  classes: PropTypes.any,
  cellAction: PropTypes.object
};

export default withStyles(tableStyle)(TableContent);
