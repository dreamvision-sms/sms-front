import React, { useEffect, useState } from 'react';
import { IncommingSessionInterface } from '../../utils/interfaces/sessions';

interface Props {
  session: IncommingSessionInterface[];
}
const SessionList: React.FC<Props> = ({ session }: Props) => {
  const [filteredData, setFilteredData] =
    useState<IncommingSessionInterface[]>(session);
  useEffect(() => {
    setFilteredData(session);
  }, [session]);
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Lste des sessions
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Session
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Debut
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">FIN</h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="  text-sm font-medium uppercase xsm:text-base">
              Active
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Action
            </h5>
          </div>
        </div>

        {filteredData.map((session, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === filteredData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="hidden text-black dark:text-white sm:block font-bold">
                SESSION {session.start_date.toLocaleString()} /{' '}
                {session.end_date.toLocaleString()}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">
                {session.start_date.toLocaleString()}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">
                {session.start_date.toLocaleString()}
              </p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              {/* <p className="text-black dark:text-white">{session.end_date}</p> */}
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              {/* <p className="text-meta-5">{session.id}%</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SessionList;
