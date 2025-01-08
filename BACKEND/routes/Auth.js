const express = require("express");
const router = express.Router();
const User = require("../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs')

router.post('/register', async (req, res) => {
    const { firstName, lastName, phone, email, password, confirmPassword } = req.body;

    if (!firstName || !lastName || !phone || !email || !password || !confirmPassword) {
        console.log('all field problem');
        return res.status(400).json({ message: "Please enter all fields" });
    }

    if (password !== confirmPassword) {
        console.log('password not match problem');
        return res.status(400).json({ message: "Passwords do not match" });
    }

    if (password < 6) {
        console.log("password lenght problem");
        return res.status(400).json({ message: "password must be atleast 6 characters" })
    }

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            console.log("email problem");
            return res.status(400).json({ message: "User already exists! Try with another Email" });
        }

        const phoneExists = await User.findOne({ phone })
        if (phoneExists) {
            console.log("phone problem");
            return res.status(400).json({ message: "Phone number already exists! Try with another Phone number" })
        }

        const newUser = new User({
            firstName,
            lastName,
            phone,
            email,
            password,
        });

        await newUser.save();
        // const token = jwt.sign(
        //     { id: newUser._id },
        //     process.env.JWT_SECRET,
        //     { expiresIn: "1h" }
        // );

        res.status(201).json({ message: "User Registered Successfully" });
    } catch (error) {
        console.log("Server Problem");
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

router.post('/login', async (req, res) => {
    const { emailOrNumber, password } = req.body;

    try {
        // Check if the input matches an email or phone number
        const user = await User.findOne({
            $or: [{ email: emailOrNumber }, { phone: emailOrNumber }],
        });

        if (!user) {
            return res.status(400).json({
                message: "Email or Phone number doesn't exist! Try an existing one or Register",
            });
        }

        // Compare the provided password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Incorrect Password' });
        }

        // If the login is successful, respond with user data or a token
        return res.status(200).json({
            message: 'Login successful',
            user: {
                id: user._id,
                email: user.email,
                phone: user.phone
            },
        });
    } catch (error) {
        console.error('Server Problem:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
