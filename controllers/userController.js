const User = require("../models/User");

module.exports = {
    //signup user
    signUp: async (req, res) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) return res.status(400).json({ msg: "Please enter all fields" });

            // Check if email is unique
            const existingUser = await User.findOne({ email });
            if (existingUser) return res.status(400).json({ msg: "Email already exists" });

            const user = await User.create({ email, password });
            return res.json(user);
        } catch (error) {
            console.log("Error: signUp", error.message);
            return res.status(500).json({ msg: error.message });
        }
    },
    //login user

    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) return res.status(400).json({ msg: "Please enter all fields" });
            const user = await User.findOne({ email, password });
            if (!user) return res.status(400).json({ msg: "Invalid credentials" });
            return res.json(user);
        } catch (error) {
            console.log("Error: login", error.message);
            return res.status(500).json({ msg: error.message });
        }
    },
};
