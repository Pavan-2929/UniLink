import Doubt from "../models/Doubt.model.js";

export const getDoubts = async (req, res, next) => {
  try {
    const AllDoubts = await Doubt.find();

    res.status(200).json(AllDoubts);
  } catch (error) {
    next(error);
  }
};

export const getDoubtById = async (req, res, next) => {
    try {

        const singleDoubt = await Doubt.findById(req.params.id)
        res.status(200).json(singleDoubt)
    } catch (error) {
        next(error)
    }
}

export const createDoubt = async (req, res, next) => {
  try {
    const {title, description} = req.body
    const id = req.id;

    const newDoubt = Doubt.create({title, description, userId: id})
    res.status(200).json(newDoubt)
  } catch (error) {
    next(error)
  }
}
