import React from "react";

const Contactus = () => {
  return (
    <div className="row">
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Write to us"
          ></textarea>
          <div className="row">
            <button type="submit" class="btn btn-primary mb-2">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contactus;
