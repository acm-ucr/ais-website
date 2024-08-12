"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Title from "./Title";

const Opportunities = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchSpreadsheetData = async () => {
      const range = "Sheet1!A1:E10";

      try {
        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID}/values/${range}?key=${process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY}`
        );

        const data = await response.json();

        const items = data.values.map((row) => ({
          column1: row[0],
          column2: row[1],
          column3: row[2],
          column4: row[3],
          column5: row[4],
          column6: row[5],
        }));
        console.log(items);
        setData(items);
      } catch (error) {
        console.error("Error fetching spreadsheet data", error);
      }
    };

    fetchSpreadsheetData();
  }, []);

  return (
    <div className="w-full flex justify-center items-center flex-col gap-4">
      <Title title={"Opportunities"} />
      {data ? (
        <div className="flex flex-col items-center justify-center w-5/6 border-2 border-black rounded-lg bg-ais-blue-300">
          {data.map((row, index) => (
            <div
              className="flex text-xl text-center rounded-xl gap-y-10 my-0.5 w-full text-ais-blue-200"
              key={index}
            >
              <p className="bg-red-50 w-2/3 h-full py-2">
                {row.column1 || "N/A"}
              </p>
              <p className="bg-green-50 w-2/3 py-2">{row.column2 || "N/A"}</p>
              <p className="bg-red-50 w-2/3 py-2">{row.column3 || "N/A"}</p>
              <p className="bg-green-50 w-2/3 py-2">{row.column4 || "N/A"}</p>
              <Link
                href={row.column5}
                className="bg-red-50 w-full hover:text-ais-blue-300/70 py-2"
              >
                {row.column5 || "N/A"}
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-ais-blue-300 text-xl font-nunito font-medium">
          No upcoming opportunities at the moment. Come back later.
        </div>
      )}
    </div>
  );
};

export default Opportunities;
