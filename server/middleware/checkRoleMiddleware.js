import jwt from 'jsonwebtoken';
const { sign, verify } = jwt;
import config from 'config';
export function roleMiddle(role) {
    return function(req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json({message: 'not authorized'})
            }
            const decoded = verify(token, config.get('SECRET-KEY'))
            if(decoded.role !== role) {
                return res.status(403).json({message: 'no access allowed'})
            }
            req.user = decoded
            next()
        } catch (error) {
            res.status(401).json({message: 'not authorized'})
        }
    }
} 