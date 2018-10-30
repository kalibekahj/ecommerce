import React from "react";
import ProductModal from "./ProductModal/ProductModal";
import DeleteModal from "./DeleteModal/DeleteModal";
import "../../components/Admin/Admin.css";

class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      showAddModal: false,
      showEditModal: false,
      showDeleteModal: false,

      // Form Values
      productId: "",
      productImageUrl: "",
      productTitle: "",
      productType: "",
      productPrice: ""
    };
  }
  // Allows product to be added (submitted)
  onSubmitAddProduct = e => {
    const data = {
      image: this.state.productImageUrl,
      title: this.state.productTitle,
      productType: this.state.productType,
      price: this.state.productPrice
    };
    fetch("http://localhost:3004/admin", { // linked to my api instead of a jsonbin so that the data gets sent to work on localhost port 3004
      method: "POST", // post method to add information
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(product => this.props.onAddProduct(product))
      .catch(err => console.log(err));

    this.toggleAddModal();
    e.preventDefault();
  };
  // Data that will be listed
  // product data is submitted with these properties and their inputs, so if i were to go on the page and enter some information according to the properties, this is what will be seen in the data collected
  onSubmitEditProduct = e => {
    const data = {
      productId: this.state.productId,
      image: this.state.productImageUrl,
      title: this.state.productTitle,
      productType: this.state.productType,
      price: this.state.productPrice
    };

    console.log(data);
    console.log(this.state.productId);
    // Gets data to endpoint to update products information
    fetch(`http://localhost:3004/admin/${data.productId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(product => {
        console.log(product);
        this.props.onEditProduct(product); // Automatically updates product
      })
      .catch(err => console.log(err));
    // Allows product to be updated and added onto the page without refreshing
    this.toggleEditModal();
    e.preventDefault();
  };
  // Allows edit button be used
  onShowEditProduct = product => {
    this.setState({
      productId: product._id,
      productImageUrl: product.image,
      productTitle: product.title,
      productType: product.productType,
      productPrice: product.price
    });
    this.toggleEditModal();
  };
  // Allows delete button to be used
  onShowDeleteProduct = id => {
    this.setState({ productId: id, showDeleteModal: true });
  };
  // Gets data to endpoint to delelte products
  onDeleteProduct = () => {
    fetch(`http://localhost:3004/admin/${this.state.productId}`, {
      method: "DELETE"
    })
      .then(() => {
        this.props.onDeleteProduct(this.state.productId); // Automatically deletes product
      })
      .catch(err => console.log(err));
    // Allows product to be delelted on the page without refreshing
    this.toggleDeleteModal();
  };
  // Allows changes to be made on forms
  onChangeValue = (key, value) => {
    this.setState({ [key]: value });
  };
  // Allows add modal form to pop-up
  toggleAddModal = () => {
    this.setState({
      showAddModal: !this.state.showAddModal
    });
  };
  // Allows edit modal form to pop-up by clicking on it
  toggleEditModal = () => {
    this.setState({
      showEditModal: !this.state.showEditModal
    });
  };
  // Allows delete modal message to pop-up
  toggleDeleteModal = () => {
    this.setState({
      showDeleteModal: !this.state.showDeleteModal
    });
  };
  render() {
    return (
      <main>
        <div className="opener">
          <h1 className="opener-h1">Hey Admin</h1>
          <button className="btn_edit" onClick={this.toggleAddModal}>
            Add new product
          </button>
          {this.state.showAddModal ? (
            <ProductModal
              header="Add a New Product"
              imageUrl={this.state.productImageUrl}
              title={this.state.productTitle}
              type={this.state.productType}
              price={this.state.productPrice}
              onChange={this.onChangeValue}
              onSubmit={this.onSubmitAddProduct}
              onClose={this.toggleAddModal}
            />
          ) : null}
        </div>
        <div className="label_header">
          <ul className="admin_label">
            <li className="label_image">Image</li>
            <li className="label_title">Title</li>
            <li className="label_category">Category</li>
            <li className="label_price">Price</li>
            <li className="label_id">Id</li>
            <li className="label_modify">Modify</li>
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
              <button
                className="btn_add"
                onClick={() => this.onShowEditProduct(product)}
              >
                <i className="fa fa-pencil" aria-hidden="true" />
              </button>
              <button
                className="btn_delete"
                onClick={() => this.onShowDeleteProduct(product._id)}
              >
                <i className="fa fa-trash" aria-hidden="true" />
              </button>
              <div />
            </div>
          ))}
          {this.state.showEditModal ? ( // Allows edit modal form to pop-up with data pre-written in inputs
            <ProductModal
              header="Edit a Product"
              imageUrl={this.state.productImageUrl}
              title={this.state.productTitle}
              type={this.state.productType}
              price={this.state.productPrice}
              onChange={this.onChangeValue}
              onSubmit={e => this.onSubmitEditProduct(e)} // Click on edit button and sends request for product to be edited
              onClose={this.toggleEditModal} // Closes edit modal
            />
          ) : null}
          {this.state.showDeleteModal ? (
            <DeleteModal
              onDelete={this.onDeleteProduct} // Click on delete button and sends request for product to be deleted
              onClose={this.toggleDeleteModal} // Closes delete modal
            />
          ) : null}
        </section>
      </main>
    );
  }
}

export default Admin;
