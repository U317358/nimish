

import { useContext } from "react";
import { FormContext } from "../reducers/FormContext";
import { submitForm } from "../api";
import { toast } from "react-toastify";

function Form() {
  const { state, dispatch } = useContext(FormContext);

  const handleChange = (e) => {
    dispatch({
      type: "SET_FIELD",
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting...", state);

    try {
      const res = await submitForm(state);

      console.log("SUCCESS:", res);
       toast.success("Thank you for connecting We will contact you shortly! 🎉"); 

      dispatch({ type: "RESET" });
    } catch (error) {
      console.error("FULL ERROR:", error);
    }
  };

  return (
    <>
  <div className="container d-flex justify-content-center align-items-center vh-100">
    
    <div className="card shadow p-4" style={{ width: "400px" }}>
      
      <h3 className="text-center text-primary mb-4">
        Contact Form
      </h3>

      <form onSubmit={handleSubmit}>
        
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter Name"
            value={state.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter Email"
            value={state.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Number</label>
          <input
            type="tel"
            name="number"
            className="form-control"
            placeholder="Enter Number"
            value={state.number}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>

      </form>
    </div>

  </div>

  {/* 🔥 SEPARATE ROW (3 COLUMNS) */}
  <div className="container mb-4">
    <div className="row text-center p-3 shadow rounded bg-light">

      {/* Instagram */}
      <div className="col-md-4">
        <h6 className="text-muted">Instagram</h6>
        <p className="fw-bold text-primary mb-0">
          <a href="https://instagram.com/nimish_arch_studio" target="_blank" rel="noreferrer">
            @nimish_arch_studio
          </a>
        </p>
      </div>

      {/* Phone */}
      <div className="col-md-4">
        <h6 className="text-muted">Phone</h6>
        <p className="fw-bold text-success mb-0">
          <a href="tel:8010571965">8010571965</a>
        </p>
      </div>

      {/* Location */}
      <div className="col-md-4">
        <h6 className="text-muted">Office</h6>
        <p className="fw-bold  text-success mb-0">
          Flat 105, Greenpark Appt,<br />
          Kadamwadi Road, Kolhapur<br />
          416003
        </p>
      </div>

    </div>
  </div>
</>
  );
}

export default Form;

