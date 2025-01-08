const Account = require('../model/Account');

// Generate a random account number
function generateAccountNumber() {
    return Math.floor(100000000 + Math.random() * 900000000).toString(); // Generates a 9-digit random number
}

// Create a New Account
exports.createAccount = async (req, res) => {
    try {
        const { userId } = req.body;
        
        // Generate a random account number for the user
        const accountNumber = generateAccountNumber();
        
        // Create the account with default balance and account type, along with the generated account number
        const account = await Account.create({ 
            userId, 
            accountNumber 
        });

        res.status(201).json(account); // Respond with the created account
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
