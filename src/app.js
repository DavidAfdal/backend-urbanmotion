
import express from 'express';
import cors from 'cors'
import path from 'path';
import UserRoute from "./routes/user.js";
import VehicleRoute from "./routes/vehicle.js";
import BookingRoute from "./routes/booking.js";
import dotenv from 'dotenv';

dotenv.config()

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express();

app.use('/uploads', express.static(path.join(__dirname, '/public/uploads')));
app.use(express.json())
app.use(cors())

app.use("/user", UserRoute)
app.use(VehicleRoute)
app.use(BookingRoute)


app.listen(process.env.APP_PORT, () => {
    console.log(`listening on port 5000`)
})