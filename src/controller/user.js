import User from "../models/user.js";
import { ComparePassword, HashPassword } from "../utils/hashPassword.js";


const Register = async (req, res, next) => {
    const { username,email, password, phone_number } = req.body;

    try {
        // Check if email already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        // Hash the password before saving it
        const hashedPassword = HashPassword(password);

        // Create a new user record in the database
        const user = await User.create({
            username,
            email,
            password: hashedPassword,
            phone_number,
        });

        // Return a success response
        res.status(201).json({
            message: 'User registered successfully',
            data: user
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


const Login = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Compare the hashed password with the provided password
        const isPasswordValid = ComparePassword(user.password, password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        // Generate a JWT token (adjust your secret key accordingly)
        const token = jwt.sign(
            { id: user.id, email: user.email }, 
            process.env.JWT_SECRET, // Make sure to set this environment variable
            { expiresIn: '1h' } // Token expiration time (1 hour)
        );

        // Return the success response with the token
        res.status(200).json({
            message: 'Login successful',
            token, // Send the generated token to the client
            user: {
                id: user.id,
                email: user.email,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export {Register, Login} 