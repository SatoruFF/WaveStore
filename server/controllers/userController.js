import  ApiError  from "../error/errorHandler.js";
import bcrypt from 'bcrypt';
import config from 'config';
import jwt from 'jsonwebtoken';
const { sign, verify } = jwt;
import { Basket, User } from "../models/models.js";

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        config.get('SECRET-KEY'),
        {expiresIn: '24h'}
    )
}

class UserControllerClass {
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if(!email || !password) {
            return next(ApiError.badRequest('Invalid email or password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('User already exists'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }


    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal(`User with email: ${email} not found(`))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Invalid password'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }


    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

export const UserController = new UserControllerClass();