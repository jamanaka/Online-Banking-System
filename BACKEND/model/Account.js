const { default: mongoose } = require("mongoose");

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true
    },
    accountNumber: {
        type: Number,
    },
    balance: {
        type: Number,
        default: 0
    },
    accountType: {
        type: String,
        default: 'Saving'
    },
    date: {
        type: Date,
        default: Date.now
    },
})

const Account = mongoose.model('Account', accountSchema)
module.exports = Account