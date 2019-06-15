const user_controller = require('./user_controller');
const request_controller = require('./request_controller');
const push_subscription_controller = require('./push_subscription_controller');
const request_accepted_controller = require('./request_accepted_controller');

module.exports = function (app) {
    
    //user api -- BEGIN
    app.get('/api/v1/user/users', user_controller);
    app.post('/api/v1/user/location', user_controller);
    app.post('/api/v1/user/add', user_controller);
    //user api -- END
};
