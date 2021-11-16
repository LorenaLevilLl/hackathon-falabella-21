import { httpResponse } from "../utils/httpResponse"
const RULES = require('../mock/rules')

export const calculateProbabilityMiddleware = (req, res, next) => {
    let probability
    console.log(RULES[0].conditions);
    console.log(req.csv);
    return httpResponse({res, statusCode: 200})
  }
