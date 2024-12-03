import { scryptSync, randomBytes } from 'crypto';
const HashPassword = (password) => {
      // Generate a salt
      const salt = randomBytes(16).toString('hex');

      // Hash the password with the salt using scryptSync
      const hashedPassword = scryptSync(password, salt, 64).toString('hex');

      return hashedPassword
}

const ComparePassword = (hashPassword, password) => {
    // Split the stored hash into salt and password
    const [salt, storedHashedPassword] = hashPassword.split(':');

    // Check if salt or password is missing
    if (!salt || !storedHashedPassword) {
        throw new Error('Invalid password format');
    }

    // Hash the provided password using the same salt
    const hashedPassword = scryptSync(password, salt, 64).toString('hex');

    // Compare the stored hashed password with the newly hashed one
    return storedHashedPassword === hashedPassword;
};


export {HashPassword, ComparePassword}