import Material from "../models/material.model.js"

export const getMaterials = async (req, res, next) => {
    try {
        const allMaterials = await Material.find();

        res.status(200).json(allMaterials);
   } catch (error) {
        next(error)
    }
}