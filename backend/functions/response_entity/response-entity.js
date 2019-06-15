const ResponseEntity = {
    buildResponseSuccessDto: function (code, message = 'OK', data) {
        return {
            code: code,
            success: true,
            message: message,
            data: data
        };
    },

    buildResponseErrorDto: function (code, message = 'Failed', data) {
        return {
            code: code,
            success: false,
            message: message,
            data: data
        };
    }
};

module.exports = ResponseEntity;