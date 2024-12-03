import { Router } from "express";

const route = Router();

// Define a route
route.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Export the router
export default route;