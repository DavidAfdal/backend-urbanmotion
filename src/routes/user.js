import { Router } from "express";
import { Login, Register } from "../controller/user.js";

const route = Router();

// Define a route
route.post("/register", Register);
route.post("/login", Login);


// Export the router
export default route;