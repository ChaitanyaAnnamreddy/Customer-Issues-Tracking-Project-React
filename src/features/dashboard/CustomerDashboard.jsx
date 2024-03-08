import React from "react";

import { Outlet, useNavigate, Link } from "react-router-dom";

function CustomerDashboard() {
  var navigate = useNavigate();
  return (
    <div>
      <h1>Customer Dashboard</h1>
      <Link to="listTickets">List of Tickets</Link>
      <button
        className="btn btn-primary"
        onClick={() => {
          navigate("addTicket");
        }}
      >
        Raise a Ticket
      </button>
      <Outlet />
    </div>
  );
}

export default CustomerDashboard;
