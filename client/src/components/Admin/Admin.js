import React from "react";
import EditModel from "./EditModel/EditModel";
import AddModel from "./AddModel/AddModel";
import DeleteModel from "./DeleteModel/DeleteModel";
import "../../components/Admin/Admin.css";

const Admin = props => {
  return (
    <main>
      <div className="opener">
        <h1 className="opener-h1">Hey Admin</h1>
      <AddModel />
      </div>
      <div className="label_header">
        <ul className="admin_label">
          <li>Image</li>
          <li>Title</li>
          <li>Category</li>
          <li>Price</li>
          <li>Id</li>
          <li>Modify</li>
        </ul>
        </div>
      <section className="admin_cards">
        {props.products.map((product, i) => (
          <div key={i} className="row__adminCard">
            <img src={product.image} className="admin_images" alt="" />
            <h2 className="admin_title">{product.title}</h2>
            <p className="admin_productType">{product.productType}</p>
            <p>${product.price}</p>
            <p>{product._id}</p>
            <div>
              <DeleteModel />
              <EditModel />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Admin;
