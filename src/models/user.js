import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; // Import the Sequelize instance

const User = sequelize.define('User', {
  // Define model attributes
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photo_profile: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  tableName: 'users', // Optional: Define the table name
  timestamps: true,   // Enable createdAt and updatedAt fields
});

export default User;