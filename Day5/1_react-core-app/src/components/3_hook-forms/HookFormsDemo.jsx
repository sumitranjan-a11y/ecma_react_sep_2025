import React from "react";

export default function HookFormsDemo() {
  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mb-0">User Registration Form</h4>
            </div>
            <div className="card-body">
              <form>
                {/* Name Field */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input id="name" placeholder="Enter your name" className="form-control" />
                </div>

                {/* Email Field */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input id="email" type="email" placeholder="Enter your email" className="form-control" />
                </div>

                {/* Password Field */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input id="password" type="password" placeholder="Enter password" className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary w-100">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
