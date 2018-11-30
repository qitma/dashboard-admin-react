import React from "react";
import RegularButton from "../../components/CustomButtons/Button";
import Icon from "@material-ui/core/Icon";

const PromoGroupCreate = ({ showCreateModal }) => {
  return (
    <div>
      <RegularButton
        onClick={showCreateModal}
        color="success"
        size="sm"
        autoFocus
        style={{ fontSize: "1em", textAlign: "left" }}
      >
        <Icon>add</Icon> Add
      </RegularButton>
    </div>
  );
};

export default PromoGroupCreate;
