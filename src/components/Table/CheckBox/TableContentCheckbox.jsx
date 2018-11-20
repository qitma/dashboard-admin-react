import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import CustomCheckBox from "./CheckBox";
// core components
import tableStyle from "assets/jss/material-dashboard-react/components/tableStyle.jsx";

function TableContentCheckbox({ ...props }) {
  const { tableKey, data, dataid, classes, handleChecked } = props;
  const CellAction = props.cellAction;
  const keyNo = 1;
  const newData =
    tableKey !== undefined && tableKey.length > 0
      ? tableKey
      : Object.keys(data);
  //console.log(newData);
  return (
    <TableRow key={data[`id`]}>
      <TableCell className={classes.tableCell}>
        <CustomCheckBox
          isSelected={data["selected"]}
          handleChecked={() => handleChecked(data["id"])}
        />
      </TableCell>
      <TableCell className={classes.tableCell} key={keyNo}>
        {dataid}
      </TableCell>
      {newData.map((key, index) => {
        if (key.toLowerCase() !== "id" && key.toLowerCase() !== "selected") {
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

TableContentCheckbox.propTypes = {
  tableKey: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired
  }),
  dataid: PropTypes.number,
  classes: PropTypes.any,
  cellAction: PropTypes.object,
  handleChecked: PropTypes.func
};

export default withStyles(tableStyle)(TableContentCheckbox);
