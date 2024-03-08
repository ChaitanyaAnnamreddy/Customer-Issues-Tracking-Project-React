import { useFormik } from "formik";
import React from "react";

function AddTicket() {
  var ticketForm = useFormik({
    initialValues: {
      issue: "",
      productName: "",
      image: "",
      date: Date.now(),
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <form onSubmit={ticketForm.handleSubmit} className="box">
              <h1>Add Ticket</h1>
              <div class="form-outline">
                <input
                  type="text"
                  name="productName"
                  placeholder="Product Name"
                  onChange={ticketForm.handleChange}
                  value={ticketForm.values.productName}
                />
                <textarea
                  name="issue"
                  className="form-control"
                  id="textAreaExample1"
                  rows="4"
                  placeholder="Enter your issue"
                  onChange={ticketForm.handleChange}
                  value={ticketForm.values.issue}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-secondary  btn-lg">
                Raise a Ticket
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTicket;
