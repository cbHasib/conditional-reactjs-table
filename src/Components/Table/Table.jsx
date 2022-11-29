import React, { useEffect, useState } from "react";
import "./Table.css";
import sortIcon from "../../assets/icon/sortIcon.svg";

/*
 * This table component is used to display data in a table format
 * @param {Array} data - Array of objects to be displayed in the table
 * @param {Array} column - List of column that you wanted to show
 * @param {Array} sort - List of sort that you wanted to show
 *
 * @example
 * <Table data={data} column={'column1', 'column2'} sort={'column1'} />
 * It will show only the column1 and column2 and sort the column1
 *
 * Coded by Md. Hasibul Hasan
 * Date: 29-Nov-2022
 * Version: 1.0.0
 * Email: hasibul.hasan2905@gmail.com
 * Phone: +8801780-568256
 *
 */

const Table = ({ data, column, sort }) => {
  const [sortData, setSortData] = useState([]);
  const [sortNameAsc, setSortNameAsc] = useState(true);
  const [sortDateAsc, setSortDateAsc] = useState(true);
  const [sortCityAsc, setSortCityAsc] = useState(true);
  const [sortEmailAsc, setSortEmailAsc] = useState(true);
  const [sortRoleAsc, setSortRoleAsc] = useState(true);
  useEffect(() => {
    setSortData(data);
  }, [data]);

  const sortBy = (key) => {
    if (key === "name") {
      const sortedData = [...sortData].sort((a, b) =>
        sortNameAsc
          ? a.person.name.localeCompare(b.person.name)
          : b.person.name.localeCompare(a.person.name)
      );
      setSortData(sortedData);
      setSortNameAsc(!sortNameAsc);
    } else if (key === "email") {
      const sortedData = [...sortData].sort((a, b) =>
        sortEmailAsc
          ? a.email.localeCompare(b.email)
          : b.email.localeCompare(a.email)
      );
      setSortData(sortedData);
      setSortEmailAsc(!sortEmailAsc);
    } else if (key === "city") {
      const sortedData = [...sortData].sort((a, b) =>
        sortCityAsc
          ? a.city.localeCompare(b.city)
          : b.city.localeCompare(a.city)
      );
      setSortData(sortedData);
      setSortCityAsc(!sortCityAsc);
    } else if (key === "joiningDate") {
      const sortedData = [...sortData].sort((a, b) => {
        const aDateString = a.joiningDate; // Oct 23
        const aDateParts = aDateString.split("/");
        // month is 0-based, that's why we need dataParts[1] - 1
        const aDateObject = new Date(
          +aDateParts[2],
          aDateParts[1] - 1,
          +aDateParts[0]
        );

        const bDateString = b.joiningDate; // Oct 23
        const bDateParts = bDateString.split("/");
        // month is 0-based, that's why we need dataParts[1] - 1
        const bDateObject = new Date(
          +bDateParts[2],
          bDateParts[1] - 1,
          +bDateParts[0]
        );

        return sortDateAsc
          ? aDateObject - bDateObject
          : bDateObject - aDateObject;
      });
      setSortDateAsc(!sortDateAsc);
      setSortData(sortedData);
    } else if (key === "role") {
      const sortedData = [...sortData].sort((a, b) =>
        sortRoleAsc
          ? a.role.localeCompare(b.role)
          : b.role.localeCompare(a.role)
      );
      setSortData(sortedData);
      setSortRoleAsc(!sortRoleAsc);
    } else {
      const sortedData = [...sortData].sort((a, b) =>
        a[key].localeCompare(b[key])
      );
      setSortData(sortedData);
    }
  };

  return (
    <section className="container py-10 w-full h-full ">
      <div className="w-fit mx-auto overflow-hidden">
        <div className="w-full overflow-x-auto">
          <table className="table-fixed text-sm  text-[#383838] text-left">
            <thead>
              <tr className="font-semibold bg-white">
                {column?.includes("name") && (
                  <th className="h-[40px] w-[175px]">
                    <div className="flex items-center gap-[10px]">
                      <span>Name</span>
                      {sort?.includes("name") && (
                        <button onClick={() => sortBy("name")}>
                          <img
                            src={sortIcon}
                            alt=""
                            className="hover:text-gray-400"
                          />
                        </button>
                      )}
                    </div>
                  </th>
                )}
                {column?.includes("city") && (
                  <th className="h-[40px] w-[175px]">
                    <div className="flex items-center gap-[10px]">
                      <span>City</span>
                      {sort.includes("city") && (
                        <button onClick={() => sortBy("city")}>
                          <img
                            src={sortIcon}
                            alt=""
                            className="hover:text-gray-400"
                          />
                        </button>
                      )}
                    </div>
                  </th>
                )}
                {column?.includes("email") && (
                  <th className="h-[40px] w-[220px]">
                    <div className="flex items-center gap-[10px]">
                      <span>Email Address</span>
                      {sort.includes("email") && (
                        <button onClick={() => sortBy("email")}>
                          <img
                            src={sortIcon}
                            alt=""
                            className="hover:text-gray-400"
                          />
                        </button>
                      )}
                    </div>
                  </th>
                )}
                {column?.includes("joiningDate") && (
                  <th className="h-[40px] w-[175px]">
                    <div className="flex items-center gap-[10px]">
                      <span>Joining Date</span>
                      {sort?.includes("joiningDate") && (
                        <button onClick={() => sortBy("joiningDate")}>
                          <img
                            src={sortIcon}
                            alt=""
                            className="hover:text-gray-400"
                          />
                        </button>
                      )}
                    </div>
                  </th>
                )}
                {column?.includes("role") && (
                  <th className="h-[40px] w-[175px]">
                    <div className="flex items-center gap-[10px]">
                      <span>Role</span>
                      {sort.includes("role") && (
                        <button onClick={() => sortBy("role")}>
                          <img
                            src={sortIcon}
                            alt=""
                            className="hover:text-gray-400"
                          />
                        </button>
                      )}
                    </div>
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {sortData.map((item, index) => (
                <tr key={index}>
                  {column?.includes("name") && (
                    <td>
                      <div className="flex items-center gap-[10px]">
                        <img src={item.person?.avatar} alt="" loading="lazy" />
                        <p>{item.person?.name}</p>
                      </div>
                    </td>
                  )}
                  {column?.includes("city") && <td>{item.city}</td>}
                  {column?.includes("email") && (
                    <td>
                      <a href={`mailto:${item.email}`}>{item.email}</a>
                    </td>
                  )}
                  {column?.includes("joiningDate") && (
                    <td>{item.joiningDate}</td>
                  )}
                  {column?.includes("role") && <td>{item.role}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Table;
