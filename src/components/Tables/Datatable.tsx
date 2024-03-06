import React from 'react';

const DataTable: React.FC = () => {
  return (
    <section className="data-table-common rounded-sm border border-stroke bg-white py-4 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex justify-between px-8 pb-4">
        <div className="w-100">
          <input
            className="w-full rounded-md border border-stroke bg-transparent px-5 py-2.5 outline-none focus:border-primary dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
            placeholder="Search..."
            type="text"
          />
        </div>
        <div className="flex items-center font-medium">
          <select className="bg-transparent pl-2">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
          <p className="pl-2 text-black dark:text-white">Entries Per Page</p>
        </div>
      </div>
      <table
        role="table"
        className="datatable-table datatable-one w-full table-auto !border-collapse overflow-hidden break-words px-4 md:table-fixed md:overflow-auto md:px-8"
      >
        <thead className="border-separate px-4">
          <tr
            className="border-t border-stroke dark:border-strokedark"
            role="row"
          >
            <th
              colSpan={1}
              role="columnheader"
              title="Toggle SortBy"
              style={{ cursor: 'pointer' }}
            >
              <div className="flex items-center">
                <span> Name/Id</span>
                <div className="ml-2 inline-flex flex-col space-y-[2px]">
                  <span className="inline-block">
                    <svg
                      className="fill-current"
                      width="10"
                      height="5"
                      viewBox="0 0 10 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 0L0 5H10L5 0Z" fill="" />
                    </svg>
                  </span>
                  <span className="inline-block">
                    <svg
                      className="fill-current"
                      width="10"
                      height="5"
                      viewBox="0 0 10 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                        fill=""
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="mt-2.5 w-full">
                <input
                  className="w-full rounded-md border border-stroke px-3 py-1 outline-none focus:border-primary"
                  type="text"
                  value=""
                />
              </div>
            </th>
            {/* Repeat the same structure for other table headers */}
          </tr>
        </thead>
        <tbody role="rowgroup">{/* Table body content */}</tbody>
      </table>
      <div className="flex justify-between border-t border-stroke px-6 pt-5 dark:border-strokedark">
        {/* Pagination buttons */}
      </div>
    </section>
  );
};

export default DataTable;
