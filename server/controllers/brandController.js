import { Brand } from "../models/models.js"
class BrandControllerClass {
    async create(req, res) {
        const {name} = req.body
        const type = await Brand.create({name})
        return res.json(type)
    }
    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }
}

export const BrandController = new BrandControllerClass();