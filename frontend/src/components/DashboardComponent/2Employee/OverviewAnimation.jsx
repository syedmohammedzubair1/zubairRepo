import React from "react";
import "./Overviewanimation.css"; // Keep the filename consistent

export default function OverviewAnimation() {
  const stats = [
    { count: 89, label: "Posted Jobs" },
    { count: 89, label: "Posted Jobs" },
    { count: 89, label: "Posted Jobs" },
    { count: 89, label: "Posted Jobs" },
]
  return (
    <div className="adminpanel w-100 d-flex flex-row flex-wrap justify-content-sm-center  mt-5">
      <div className="top-panel d-flex flex-wrap flex-row justify-content-center w-90">
        {stats.map((item, index) => (
          <div key={index} className=" postedjobs postedjobsclick bg-warning d-flex flex-column">
            <p className="w-100 text-center text-count" >
              {item.count}
            </p>
            <p className="w-100 text-center text-label">{item.label}</p>
          </div>


        ))}
      </div>
    </div>
  );
}