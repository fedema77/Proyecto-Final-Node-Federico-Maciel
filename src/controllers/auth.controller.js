import jwt from 'jsonwebtoken';

const default_user = {
    id: 1,
    email: "jwt@jwt.com",
    password: "jwt100%",
};

export const login = (req, res) => {
    const {email, password} = req.body;

    const user = { id: 1 };

    if (email == default_user.email && password == default_user.password) {
        const payload = { user };
        const expiration = { expiresIn: '1h' };
        const token = jwt.sign(payload, process.env.JWT_SECRET, expiration);
        res.json({ token, message: 'Login successful' });
    } else {
        return res.status(400).json({ error: 'Email o contraseña incorrectos' });
    }
};