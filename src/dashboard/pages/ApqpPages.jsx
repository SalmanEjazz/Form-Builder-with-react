import React from "react";

const ApqpPages = () => {
  return (
    <>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="card p-4 ">
              <div className="row">
                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <label for="apqpPageName">Page Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="apqpPageName"
                      placeholder="Enter name"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="card mt-4 p-4">
            <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApqpPages;
