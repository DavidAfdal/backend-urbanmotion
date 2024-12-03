import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; // Import the Sequelize instance

const Vehicle = sequelize.define('Vehicle', {
  // Define model attributes
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  transmission_type: {
    type: DataTypes.STRING,
    allowNull: true,  // Optional field for vehicle transmission type (e.g., manual, automatic, electric)
  },
  passenger_capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,  // Optional field for passenger capacity
  },
  price : {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'Ready',   // The default status could be 'active'
    allowNull: false,
  },
}, {
  tableName: 'vehicles', // Define the table name
  timestamps: true,      // Enable createdAt and updatedAt fields
});

export default Vehicle;
