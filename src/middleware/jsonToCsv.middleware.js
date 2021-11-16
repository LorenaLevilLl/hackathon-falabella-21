import { jsonToCsv } from "../controller/jsonToCsv.controller"
import { httpResponse } from "../utils/httpResponse"

export const jsonToCsvMiddleware = (req, res, next) => {
  console.log('4. jsonToCsvMiddleware')
  try {
    const {dataPredicted} = req.body;
    if(!dataPredicted) {
      return httpResponse({res, statusCode: 400, message: 'data predicted it was not processed' })  
    }

    const csv = jsonToCsv(dataPredicted);

    return httpResponse({res, statusCode: 200, payload: csv})
  } catch (error) {
    console.log(error)
    return httpResponse({res, statusCode: 500 })
  }
}