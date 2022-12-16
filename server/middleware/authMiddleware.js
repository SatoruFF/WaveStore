import jwt from 'jsonwebtoken';
const { sign, verify } = jwt;
import config from 'config';
export function authMiddle (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(401).json({message: 'not authorized'})
        }
        const decoded = verify(token, config.get('SECRET-KEY'))
        req.user = decoded
        next()
    } catch (error) {
        res.status(401).json({message: 'not authorized'})
    }
}