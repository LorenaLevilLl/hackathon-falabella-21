const RULES = [
    {
       "id":"rule001",
       "name":"OPERATOR_TYPE",
       "type":"MULTIPLE",
       "status":"ACTIVE",
       "field":"broken",
       "weight":0.5,
       "conditions":[
          {
             "value":"FALABELLA",
             "weight":0.4
          },
          {
             "value":"SELLER",
             "weight":0.8
          }
       ]
    }
 ]

 module.exports = RULES;