import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import OverviewAnimation from "./OverviewAnimation";

const Taskoverview = () => {
  const [taskTable, settaskTable] = useState([]);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        const updatedData = data.map((item, index) => ({
          SNo: index + 1,
          title: item.title,
          taskStatus: ["pending", "In Progress", "Completed"][
            Math.floor(Math.random() * 3)
          ],
          percentage: `${Math.floor(Math.random() * 101)}%`,
        }));
        settaskTable(updatedData);
      } catch (error) {
        console.log("Error fetching the data", error);
      }
    };

    fetchTask();
  }, []);

  return (
    <>
      <OverviewAnimation />
      <div
        className="d-flex justify-content-center align-items-center mt-5"
        style={{ width: "100%", fontFamily: "montserrat" }}
      >
        <div className=" overflow-auto" style={{ width: "80%" }}>
          <Table striped bordered hover>
            <thead className="text-center text-capitalize">
              <tr>
                <th>SNO</th>
                <th>Task Tittle</th>
                <th>Status</th>
                <th>percentage</th>
              </tr>
            </thead>
            <tbody className="text-center text-capitalize ">
              {taskTable.map((Task) => (
                <tr>
                  <td className="p-2 border">{Task.SNo}</td>
                  <td className="p-2 border">{Task.title}</td>
                  <td className="p-2 border">{Task.taskStatus}</td>
                  <td className="p-2 border">{Task.percentage}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Taskoverview;
