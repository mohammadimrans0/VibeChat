import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
    // Generate a JWT token for the user
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "24h" });

    res.cookie("token", token, {
        maxAge: 24 * 60 * 60 * 1000, // 1 day
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
    });
    return token;
}

// export const verifyToken = (token) => {
//     // Verify the JWT token
//     return jwt.verify(token, process.env.JWT_SECRET);
// }
