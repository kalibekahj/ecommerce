import React from "react";
import "../Admin.css";

const AddModal = (props) => {

  return (
    <div id="show-add-modal" className="admin_modal">
      <form action="#" method="put" className="form-container">
        <h1>Edit a Product</h1>

        <label htmlFor="image">
          <b>Image</b>
        </label>
        <input type="text" placeholder="Enter Url" name="image" required />

        <label htmlFor="title">
          <b>Title</b>
        </label>
        <input type="title" placeholder="Enter Title" name="title" required />

        <label htmlFor="category">
          <b>Category</b>
        </label>
        <input
          type="text"
          placeholder="Enter Category"
          name="productType"
          required
        />

        <label htmlFor="price">
          <b>Price</b>
        </label>
        <input type="number" placeholder="Enter Price" name="price" required />

        <label htmlFor="id">
          <b>Id</b>
        </label>
        <input type="number" placeholder="Enter Id #" name="productId" required />
        <div className="btn_submit">
          <button type="submit" className="btn save">
            Save
          </button>
          <button
            type="button"
            className="btn cancel"
            onClick={props.onClose}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddModal;
