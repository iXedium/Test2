import React from "react";
import { Button, Container } from "reactstrap";
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

        <table className="table">
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
        </table>
      </div>
    </div>
  );
};

export default Organisations;
