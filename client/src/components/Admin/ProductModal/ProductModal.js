import React from "react";
import "../Admin.css";

const ProductModal = (props) => {
  return (
    <div id="show-product-modal" className="admin_modal">
      <form className="form-container" onSubmit={props.onSubmit}>
        <h1>{props.header}</h1>

        <label htmlFor="image">
          <b>Image</b>
        </label>
        <input
          type="text"
          placeholder="Enter Url"
          name="image"
          value={props.imageUrl}
          onChange={e => props.onChange("productImageUrl", e.target.value)}
          required
        />

        <label htmlFor="title">
          <b>Title</b>
        </label>
        <input
          type="title"
          placeholder="Enter Title"
          name="title"
          value={props.title}
          onChange={e => props.onChange("productTitle", e.target.value)}
          required
        />

        <label htmlFor="category">
          <b>Category</b>
        </label>
        <input
          type="text"
          placeholder="Enter Category"
          name="productType"
          value={props.type}
          onChange={e => props.onChange("productType", e.target.value)}
          required
        />

        <label htmlFor="price">
          <b>Price</b>
        </label>
        <input
          type="text"
          placeholder="Enter Price"
          name="price"
          value={props.price}
          onChange={e => props.onChange("productPrice", e.target.value)}
          required
        />
        <div className="btn_submit">
          <button type="submit" className="btn save">
            Save
          </button>
          <button type="button" className="btn cancel" onClick={props.onClose}> 
            Close 
          </button> 
        </div>
      </form>
    </div>
  );
};

export default ProductModal;
