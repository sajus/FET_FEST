const express = require('express');
const router = express.Router();
const httpStatus = require('http-status-codes');
const user_service = require('../services/user_service');
const responseUtils = require('../response_entity/response-entity');

router.get('/api/v1/user/users', (request, response) => {
    user_service.getAllUsers()
    .then((data) => {
        response.status(httpStatus.OK)
        .jsonp(responseUtils.buildResponseSuccessDto(httpStatus.OK, 'OK', data));
    })
    .catch((error) => {
        response.status(httpStatus.BAD_REQUEST)
        .jsonp(responseUtils.buildResponseErrorDto(httpStatus.BAD_REQUEST, 'Error', error));
    })
});

router.post('/api/v1/user/location', (request, response) => {
    let data = request.body;
    user_service.getUsersByLocation(data)
    .then((data) => {
        response.status(httpStatus.OK)
        .jsonp(responseUtils.buildResponseSuccessDto(httpStatus.OK, 'OK', data));
    })
    .catch((error) => {
        response.status(httpStatus.BAD_REQUEST)
        .jsonp(responseUtils.buildResponseErrorDto(httpStatus.BAD_REQUEST, 'Error', error));
    })
});

router.post('/api/v1/user/add', (request, response) => {
    let user = request.body;
    user_service.doesUserExists(user.mobile)
    .then((data) => {
        if(data === true) {
            response.status(httpStatus.OK)
            .jsonp(responseUtils.buildResponseSuccessDto(httpStatus.OK, 'User with given mobile number already exists', data));
        } else {
            return user_service.registerUser(user);
        }
    })
    .then((data) => {
        response.status(httpStatus.CREATED)
        .jsonp(responseUtils.buildResponseSuccessDto(httpStatus.CREATED, 'Added new user successfully', data));
    })
    .catch((error) => {
        response.status(httpStatus.BAD_REQUEST)
        .jsonp(responseUtils.buildResponseErrorDto(httpStatus.BAD_REQUEST, 'Error', error));
    })
});

module.exports = router;