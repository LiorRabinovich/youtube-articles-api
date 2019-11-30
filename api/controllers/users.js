module.exports = {
    signup: (req, res) => {
        res.status(200).json({
            message: 'Signup'
        })
    },
    login: (req, res) => {
        res.status(200).json({
            message: 'Login'
        })
    }
}