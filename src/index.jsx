import React from "react";
import ReactDOMClient from "react-dom/client";
import { DashboardMain } from "./screens/DashboardMain";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<DashboardMain />);
