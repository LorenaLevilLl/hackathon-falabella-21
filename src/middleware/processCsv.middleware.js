import { httpResponse } from "../utils/httpResponse"

export const processCsMiddleware = (req, res, next) => {

  return httpResponse({res, statusCode: 200})
}