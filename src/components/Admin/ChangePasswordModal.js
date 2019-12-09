import React from "react";
import { Button } from "reactstrap";

const ChangePasswordModal = props => {
  return (
    <div className="x-modal-change-password">
      <p>Change Password</p>
      <input placeholder="Current Password" />
      <div id="hr"></div>
      <input placeholder="New Password" />
      <input placeholder="Confirm New Password" />
      <div id="buttons">
        <Button>Cancel</Button>
        <Button color="primary">Confirm</Button>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
