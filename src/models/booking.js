import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; // Import the Sequelize instance

const Booking = sequelize.define('Booking', {
  // Define model attributes
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,  // Foreign key to associate the booking with a user
    references: {
      model: 'users',   // Refers to the 'users' table where user details are stored
      key: 'id',
    },
  },
  vehicle_id: {
    type: DataTypes.INTEGER,
    allowNull: false,  // Foreign key to associate the booking with a vehicle
    references: {
      model: 'vehicles',  // Refers to the 'vehicles' table where vehicle details are stored
      key: 'id',
    },
  },
  rental_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  total_amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending', // Default status could be 'pending'
    allowNull: false,
  },
}, {
  tableName: 'bookins', // Define the table name
  timestamps: true,         // Enable createdAt and updatedAt fields
});
export default Booking;