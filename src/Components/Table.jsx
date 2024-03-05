import React from "react";
import "./Table.css"; // Import CSS file for styling
import img1 from "../Data/Images/Shopify.jpeg";

const Table = ({ companiesData }) => {
  return (
    <table className="company-table">
      <thead>
        <tr>
          <th>
            {" "}
            <input type="checkbox" className="mr-2" /> Brand Name
          </th>
          <th>Description</th>
          <th>Number of Members</th>
          <th>Categories</th>
          <th>Tags</th>
          <th>Next Meeting</th>
        </tr>
      </thead>
      <tbody>
        {companiesData.map((company, index) => (
          <tr key={index}>
            <td className="d-flex align-items-center">
              <input type="checkbox" className="mr-2" />

              <img src={img1} alt="Brand Logo" className="brand-logo" />
              {company.brandName}
            </td>
            <td className="description-column">{company.description}</td>
            <td>{company.members.length}
            </td>
            <td>{company.categories.join(", ")}</td>
            <td>{company.tags.join(", ")}</td>
            <td>{company.nextMeeting}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
