const { Router } = require("express");
const { CreateBooking, GetBooking, GetBookingByID, GetBookingByUserID } = require("../controller/booking");
const jwtMiddleware = require("../middleware/jwt-middleware");
const checkRole = require("../middleware/role-middleware");

const route = Router();

// Define a route
route.use(jwtMiddleware);
route.post('/', checkRole(["user"]),CreateBooking)
route.get("/", checkRole(["admin"]), GetBooking)
route.get('/mybooking', checkRole(["user"]), GetBookingByUserID)
route.get('/:bookingID', checkRole(["admin", "user"]), GetBookingByID)

// Export the router
module.exports = route;