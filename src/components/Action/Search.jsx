import React from "react";
import Search from "@material-ui/icons/Search";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import headerLinksStyle from "assets/jss/material-dashboard-react/components/headerLinksStyle.jsx";

function SearchField({ ...props }) {
  // eslint-disable-next-line react/prop-types
  const style = {
    wrapper: {
      display: "inline-flex",
      justifyContent: "flex-end"
    },
    searchPosition: {
      justifyContent: "center",
      flexFlow: "column-reverse",
      marginTop: "100px"
    }
  };
  const { classes } = props;
  return (
    <div className={classes.searchWrapper}>
      <CustomInput
        formControlProps={{
          className: classes.margin + " " + classes.search
        }}
        inputProps={{
          placeholder: "Search",
          inputProps: {
            "aria-label": "Search"
          }
        }}
      />
      <Button color="white" aria-label="edit" justIcon round>
        <Search />
      </Button>
    </div>
  );
}

export default withStyles(headerLinksStyle)(SearchField);
