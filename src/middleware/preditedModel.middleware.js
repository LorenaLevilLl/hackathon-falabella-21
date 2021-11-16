import { preditedModel } from "../controller/preditedModel.controller"
import { httpResponse } from "../utils/httpResponse"


export const preditedModelMiddleware = (req, res, next) => {
  console.log('3. preditedModelMiddleware')
  try {
    const {jsonCsv} = req.body
    if(!jsonCsv) {
      return httpResponse({res, statusCode: 400, message: 'csv was not processed' })  
    }

    const dataPredited = preditedModel(jsonCsv);

    req.body.dataPredited = dataPredited;

    next();
  } catch (error) {
    console.log(error)
    return httpResponse({res, statusCode: 500 })
  } 
}