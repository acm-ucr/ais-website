"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Title from "./Title";

const Opportunities = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const spreadsheetData = async () => {
      const range = "Sheet1!A1:E15";

      fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID}/values/${range}?key=${process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          const items = data.values.map((row) => ({
            column1: row[0],
            column2: row[1],
            column3: row[2],
            column4: row[3],
            column5: row[4],
          }));

          setData(items);
        })
        .catch((error) => {
          console.error("Error fetching spreadsheet data", error);
        });
    };

    spreadsheetData();
  }, []);

  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div className="w-full flex justify-center items-center flex-col font-nunito gap-4 my-10">
      <Title title={"Opportunities"} />
      {data.length > 0 ? (
        <>
          {/* desktop view */}
          <div className="hidden md:flex flex-col items-center justify-center w-5/6 border-4 border-ais-blue-200 rounded-lg bg-ais-blue-300">
            <div className="flex text-xl font-bold text-center rounded-xl gap-y-10 my-0.5 w-full bg-ais-blue-200 text-white ">
              {headers.map((header, index) => (
                <p key={index} className={`w-full py-2`}>
                  {data[0][header]}
                </p>
              ))}
            </div>

            {data.slice(1).map((row, index) => (
              <div
                className="grid grid-cols-5  text-xl text-center rounded-xl gap-y-10 my-0.5 w-full text-ais-blue-200"
                key={index}
              >
                <p className="flex items-center justify-center bg-white py-2">
                  {row.column1 || "N/A"}
                </p>
                <p className="flex items-center justify-center bg-white  py-2 mx-1">
                  {row.column2 || "N/A"}
                </p>
                <p className="bg-white  py-2">{row.column3 || "N/A"}</p>
                <p className="flex items-center justify-center bg-white  py-2 mx-1">
                  {row.column4 || "N/A"}
                </p>
                <Link
                  href={row.column5}
                  className=" flex items-center justify-center bg-white w-full hover:text-ais-blue-300/70 py-2"
                  rel="noopener noreferrer"
                >
                  {"LINK" || "N/A"}
                </Link>
              </div>
            ))}
          </div>
          {/* mobile view */}
          <div className=" md:hidden flex flex-col items-center justify-center w-11/12 border-4 border-ais-blue-200 rounded-lg bg-ais-blue-300">
            <div className="flex  text-base md:text-xl font-bold text-center rounded-xl gap-y-10 my-0.5 w-full bg-ais-blue-500 text-white ">
              {headers.slice(1, 5).map((header, index) => (
                <p
                  key={index}
                  className={`w-full py-2 ${
                    header === "column4" ? "hidden" : ""
                  }`}
                >
                  {data[0][header]}
                </p>
              ))}
            </div>

            {data.slice(1).map((row, index) => (
              <div
                className="grid grid-cols-3  text-lg md:text-xl text-center rounded-xl gap-y-10 my-0.5 w-full text-ais-blue-200"
                key={index}
              >
                <p className="bg-white py-1.5 mx-0 flex items-center justify-center">
                  {row.column2 || "N/A"}
                </p>
                <p className="bg-white py-1.5 mx-1">{row.column3 || "N/A"}</p>

                <Link
                  href={row.column5}
                  className="flex items-center justify-center bg-white hover:text-ais-blue-300/70 py-1.5"
                >
                  {"LINK" || "N/A"}
                </Link>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="text-ais-blue-100 text-2xl text-center font-nunito font-medium">
          No upcoming opportunities at the moment. Come back later.
        </div>
      )}
    </div>
  );
};

export default Opportunities;
