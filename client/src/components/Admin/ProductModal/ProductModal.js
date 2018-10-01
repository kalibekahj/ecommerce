import React from "react";
import "../Admin.css";

const ProductModal = (props) => {

  return (
    <div id="show-product-modal" className="admin_modal">
      <form method="post" className="form-container">
        <h1>Add a New Product</h1>

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
        <input type="text" placeholder="Enter Price" name="price" required />

        <label htmlFor="id">
          <b>Id</b>
        </label>
        <input type="text" placeholder="Enter Id #" name="productId" required />
        <div className="btn_submit">
          <button type="submit" className="btn save" >
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

export default ProductModal;
