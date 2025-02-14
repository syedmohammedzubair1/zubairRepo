import "./TaskManagment.css";

const dummy = [
  {
    title: "Bustitron",
    description: "bustitron is a bustitron",
    deadline: "20-02-2025",
    resources: "",
    companyId: 1,
    budget: "200000",
    totalPaid: "100000",
  },
];

export const TaskManagment=()=>{
  return (
    <div className="app-container">
      {
        dummy.map((item, index) => {
          return (
            <div className="task-card" key={index}>
              <h1 className="task-title">Title: {item.title}</h1>
              <h2 className="task-description">Description: {item.description}</h2>
              <h2 className="task-deadline">Deadline: {item.deadline}</h2>
              <h2 className="task-resources">Resources: {item.resources}</h2>
              <h2 className="task-companyId">Company ID: {item.companyId}</h2>
              <h2 className="task-budget">Budget: {item.budget}</h2>
              <h2 className="task-totalPaid">Total Paid: {item.totalPaid}</h2>
            </div>
          );
        })
      }
    </div>
  );
}