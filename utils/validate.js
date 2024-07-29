const Joi = require('joi');

const validate = (schema) => (req, res, next) => {
  const { query, params, body } = req;

  // Validate query parameters
  if (Object.keys(query).length) {
    const { error } = schema.validate(query);
    if (error) {
      return res.status(400).json({ status: 400, data: { message: error.details[0].message } });
    }
  }

  // Validate URL parameters
  if (Object.keys(params).length) {
    const { error } = schema.validate(params);
    if (error) {
      return res.status(400).json({ status: 400, data: { message: error.details[0].message } });
    }
  }

  // Validate request body
  if (Object.keys(body).length) {
    const { error } = schema.validate(body);
    if (error) {
      return res.status(400).json({ status: 400, data: { message: error.details[0].message } });
    }
  }

  next();
};

module.exports = validate;
