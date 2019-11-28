import React from "react";
import { Button } from "reactstrap";
import { MDBDataTable } from "mdbreact";
import { organisationData as data } from "../data/Organisations_data";

import plusSign from "../assets/images/icons/button_plus.svg";

const Organisations = () => {
  return (
    <div className="x-organisations">
      <h1 className="x-page-title">Organisations</h1>
      <p className="x-breadcrumb">BREADCRUMB</p>
      <div className="x-organisations__container">
        <div className="x-organisations__container__top">
          <Button>
            Add Organisation
            <span>
              <img src={plusSign} alt="" />
            </span>
          </Button>
        </div>
        <div className="x-organisations__container__main">
          <MDBDataTable
            btn
            hover
            data={data}
            entries={3}
            info={false}
            entriesLabel=""
            searchLabel=" "
          />
        </div>
        {/* <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Date Registered</th>
              <th scope="col">Organisation Name</th>
              <th scope="col">Telephone</th>
              <th scope="col">Town/City</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>dd/mm/yy</td>
              <td>Nursing Home Limited</td>
              <td>0161 123 4567</td>
              <td>Manchester</td>
              <td>Pending</td>
              <td>
                <Button> View </Button>
              </td>
            </tr>
            <tr>
              <td>dd/mm/yy</td>
              <td>Nursing Home Limited</td>
              <td>0161 123 4567</td>
              <td>Manchester</td>
              <td>Pending</td>
              <td>
                <Button> View </Button>
              </td>
            </tr>
            <tr>
              <td>dd/mm/yy</td>
              <td>Nursing Home Limited</td>
              <td>0161 123 4567</td>
              <td>Manchester</td>
              <td>Pending</td>
              <td>
                <Button> View </Button>
              </td>
            </tr>
            <tr>
              <td>dd/mm/yy</td>
              <td>Nursing Home Limited</td>
              <td>0161 123 4567</td>
              <td>Manchester</td>
              <td>Pending</td>
              <td>
                <Button> View </Button>
              </td>
            </tr>
            <tr>
              <td>dd/mm/yy</td>
              <td>Nursing Home Limited</td>
              <td>0161 123 4567</td>
              <td>Manchester</td>
              <td>Pending</td>
              <td>
                <Button> View </Button>
              </td>
            </tr>
            <tr>
              <td>dd/mm/yy</td>
              <td>Nursing Home Limited</td>
              <td>0161 123 4567</td>
              <td>Manchester</td>
              <td>Pending</td>
              <td>
                <Button> View </Button>
              </td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </div>
  );
};

export default Organisations;
