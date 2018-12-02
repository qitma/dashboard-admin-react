import { connect } from "react-redux";
import { createUser } from "../_actions";
import ManageUser from "../views/ManageUser/ManageUser";

const mapDispatchToProps = dispatch => {
  return {
    onAddUser: user => {
      dispatch(createUser(user));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ManageUser);
