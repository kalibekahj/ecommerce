import React from "react";
import "../../App.css";

class Contact extends React.Component {

  render() {
    return (
      <div>
        <h1 className="contact-us-text">contact us</h1>
        <div className="form-contact">
        <div className="contact-intro">
          <h2 className="title-2">Who are we?</h2>
          Our company strives to empower men and women to feel at their best by
          smelling good! We encourage better self-esteem to the community and to
          uplift one another. While your inner beauty is uncovered, we've got
          you covered! Your inner beauty will shine through to your outer beauty
          when you use our products, giving you more confidence. The scent of
          you will be addictive and make you feel confident and satisfied when
          you use our products.
          <p>
            We continue to ship for free worldwide to give all customers a
            chance to buy our products and not have to worry about shipping
            fees. If you would like to expedite your shipping, that will be
            extra fees of $5.00 plus any tax. Refunds are distributed
            accordingly. If you need any assistance or questions, contact us!
          </p>
        </div>

        <form action="#" method="post" className="form_contact">
          <div className="form-input">
            <label htmlFor="firstName" className="form-label">
              First Name:
            </label>
            <input type="text" id="firstName" name="firstName" required />

            <label htmlFor="lastName" className="form-label">
              Last Name:
            </label>
            <input type="text" id="lastName" name="lastName" required />

            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input type="text" id="email" name="email" required />
          </div>

          <div>
            <textarea
              className="form-comment"
              name="comments"
              placeholder="Enter Comments..."
              cols="60"
              rows="15"
            />
          </div>

          <div>
            <input className="submit" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
    );
  }
}

export default Contact;
