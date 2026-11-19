const Joi = require("joi");

const productValidationSchema = Joi.object({
    name: Joi.string().trim().min(2).required(),

    description: Joi.string().required(),

    price: Joi.number().min(1).required(),

    category: Joi.string().required(),

    stock: Joi.number().min(0).required()
});

module.exports = productValidationSchema;