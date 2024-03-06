import "./Table.css"; // Import CSS file for styling
import { MdAdd } from "react-icons/md";

const Table = ({ companiesData, search }) => {
  const filteredData = search
    ? companiesData.filter((company) =>
        company.brandName.toLowerCase().includes(search.toLowerCase())
      )
    : companiesData;
  return (
    <>
      <div className="table-container">
        <table className="company-table">
          <thead>
            <tr>
              <th>Brand Name</th>
              <th>Description</th>
              <th>Number of Members</th>
              <th>Categories</th>
              <th>Tags</th>
              <th>Next Meeting</th>
              <th>+</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((company, index) => (
              <tr key={index}>
                <td>
                  <div className="flex align-items-center gap-1 min-w-[150px]">
                    <input type="checkbox" className="mr-2" />

                    <img
                      src={company.brandImage}
                      alt="Brand Logo"
                      className="brand-logo"
                      style={{
                        width: "25px",
                        height: "25px",
                        borderRadius: "5px",
                      }}
                    />

                    {company.brandName}
                  </div>
                </td>
                <td className="description-column">{company.description}</td>
                <td>
                  <div className="avatars-stack">
                    {company.members.map((item, key) => (
                      <div
                        className="avatar"
                        key={key}
                        style={{ width: "50px", height: "50px" }}
                      >
                        <img
                          className="avatar-img"
                          src={item}
                          alt="user@email.com"
                        />
                      </div>
                    ))}
                  </div>
                </td>

                <td className="flex gap-1">
                  {company.categories.map((item, i) => (
                    <p className={`Box${i}`} key={i}>
                      {item}
                    </p>
                  ))}
                  {/* <div className="flex gap-1  ">
                 
                </div> */}
                </td>

                <td>
                  <div className="flex gap-1">
                    {company.tags.map((item, i) => (
                      <p className="Box items-center text-gray-500" key={i}>
                        {item}
                      </p>
                    ))}
                  </div>
                </td>

                <td>
                  <p className={`Box${index}`}>{company.nextMeeting}</p>
                </td>

                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-around">
          {Array.from(Array(5).keys()).map((col) => (
            <div key={col} className="flex items-center text-gray-500">
              <MdAdd /> Add Collection
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Table;
