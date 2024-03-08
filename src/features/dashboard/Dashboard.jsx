import React from "react";
import ManagerDashboard from "./ManagerDashboard";
import EmployeeDashboard from "./EmployeeDashboard";
import CustomerDashboard from "./CustomerDashboard";

function Dashboard() {
  var { role } = JSON.parse(window.localStorage.getItem("user"))[0];
  console.log(role);
  return (
    <div>
      <h1>Dashboard of {role}</h1>
      {role === "manager" && <ManagerDashboard />}
      {role === "customer" && <CustomerDashboard />}
      {role === "employee" && <EmployeeDashboard />}
    </div>
  );
}

export default Dashboard;
