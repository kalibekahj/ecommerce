import React from "react";
import "../Admin.css";

const DeleteModal = (props) => {
  return (
    <div id="show-delete-modal">
      <h1>Are you sure you want to delete this product?</h1>
      <button className="btn_yes" onClick={props.onDelete}>Yes</button>
      <button className="btn_cancel" onClick={props.onClose}>Cancel</button>
    </div>
  );
};

export default DeleteModal;
