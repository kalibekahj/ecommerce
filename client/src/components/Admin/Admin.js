import React from "react";
import ProductModal from "./ProductModal/ProductModal";
import AddModal from "./AddModal/AddModal";
import DeleteModal from "./DeleteModal/DeleteModal";
import "../../components/Admin/Admin.css";

class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      showProductModal: false,
      showAddModal: false,
      showDeleteModal: false
    };
  }
toggleProductModal = () => {
  this.setState({
    showProductModal: !this.state.showProductModal,
  });
}
toggleAddModal = () => {
  this.setState({
    showAddModal: !this.state.showAddModal,
  });
}
toggleDeleteModal = () => {
  this.setState({
    showDeleteModal: !this.state.showDeleteModal,
  });
}
  render() {
    return (
      <main>
        <div className="opener">
          <h1 className="opener-h1">Hey Admin</h1>
          <button className="btn_edit" onClick={this.toggleProductModal}>
            Add new product
          </button>
          {this.state.showProductModal ? <ProductModal onClose={this.toggleProductModal} /> : null}
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
          {this.props.products.map((product, i) => (
            <div key={i} className="row__adminCard">
              <img src={product.image} className="admin_images" alt="" />
              <h2 className="admin_title">{product.title}</h2>
              <p className="admin_productType">{product.productType}</p>
              <p>${product.price}</p>
              <p>{product._id}</p>
              <button className="btn_add" onClick={this.toggleAddModal}>
                +
              </button>
              <button className="btn_delete" onClick={this.toggleDeleteModal}>
                -
              </button>
              <div />
            </div>
          ))}
          {this.state.showAddModal ? <AddModal onClose={this.toggleAddModal}/> : null}
          {this.state.showDeleteModal ? <DeleteModal onClose={this.toggleDeleteModal}/> : null}
        </section>
      </main>
    );
  }
}

export default Admin;
