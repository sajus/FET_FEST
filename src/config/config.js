export default [
    {
        "key":"abTest",
        "name": "AB Testing Flag",
        "description": "Simple true / false to restrict random user from certain things",
        "enabled": true,
        "strategy":{
          "type": "abTesting",
          "filter": "uuid",
          "value": [0.6, 0.4]
        }
    },
    {
        "key":"userFlag",
        "name": "Restricted User Flag",
        "description": "Simple true / false to restrict users from certain things",
        "enabled": true,
        "strategy":{
            "type": "filterUser",
            "filter": "username",
            "expr": "regex",
            "value": "[a]$"
        }
    },
    {
        "key":"restrictedIP",
        "name": "Restricted IP Flag",
        "description": "Simple true / false to restrict user ip from certain things",
        "enabled": false,
        "strategy":{
            "type": "filterUser",
            "filter": "ipAddress",
            "expr": "contains",
            "value": ['147']
        }
    },
    {
        "key":"restrictedAge",
        "name": "Restricted Age Flag",
        "description": "Simple true / false to restrict user age from certain things",
        "enabled": false,
        "strategy":{
            "type": "filterUser",
            "filter": "age",
            "expr": "arithmetic",
            "exprtype": "morethan",
            "value": 40
        }
    },
    {
        "key":"restrictedDate",
        "name": "Restricted Date Flag",
        "description": "Simple true / false to restrict user date from certain things",
        "enabled": false,
        "strategy":{
            "type": "filterUser",
            "filter": "date",
            "expr": "arithmetic",
            "exprtype": "morethan",
            "value": new Date("2019-02-12")
        }
    },
    {
        "key":"restrictedDate1",
        "name": "Restricted Date Flag",
        "description": "Simple true / false to restrict user date from certain things",
        "enabled": false,
        "strategy":{
            "type": "filterUser",
            "filter": "date",
            "expr": "arithmetic",
            "exprtype": "lessthan",
            "value": new Date("2019-02-15")
        }
    },
    {
        "key":"abTest1",
        "name": "AB Testing Flag",
        "description": "Simple true / false to restrict random user from certain things",
        "enabled": false,
        "strategy":{
          "type": "abTesting",
          "filter": "uuid",
          "value": [0.6, 0.4]
        }
    },
    {
        "key":"showMe",
        "name": "Default Flag",
        "description": "Simple true / false",
        "enabled": false,
        "strategy":{
          "type": "simple",
          "value": true
        }
    },
    {
        "key":"genderFlag",
        "name": "Restricted Gender Flag",
        "description": "Simple true / false to restrict users from certain things",
        "enabled": false,
        "strategy":{
            "type": "filterUser",
            "filter": "gender",
            "expr": "contains",
            "value": ["female"]
        }
    },
    {
        "key":"uuidFlag",
        "name": "Restricted UUID Flag",
        "description": "Simple true / false to restrict users from certain things",
        "enabled": false,
        "strategy":{
            "type": "filterUser",
            "filter": "uuid",
            "expr": "regex",
            "value": "[0-9a-z]*[a-r]$"
        }
    }
];
