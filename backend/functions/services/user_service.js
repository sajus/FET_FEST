const db = require('./database_service');
const User = require('../models/user');

const USER_DB = "user";

const UserService = {
    getAllUsers: function() {
        return new Promise((resolve, reject) => {
            db.collection(USER_DB)
            .get()
            .then((querySnapshot) => {
                let users = [];
                querySnapshot.forEach((doc) => {
                    let user = new User(doc.data());
                    users.push(doc.data());
                });
                resolve(users);
            })
            .catch((error) => {reject(error);});    
        });
    },
    doesUserExists: function(mobile) {
        return new Promise((resolve, reject) => {
            db.collection(USER_DB).where("mobile", "==", mobile)
            .get()
            .then((querySnapshot) => {
                let users = [];
                querySnapshot.forEach((doc) => {
                    let user = new User(doc.data());
                    users.push(user);
                });
                if(users.length > 0)
                    resolve(true);
                else
                    resolve(false);
            })
            .catch((error) => reject(error));
        });
    },
    registerUser: function(data) {
        return new Promise((resolve, reject) => {
            db.collection(USER_DB).add(data)
            .then((docRef) => {
                resolve({'docRefId': docRef.id})
            })
            .catch((error) => reject(error));
        })
    },
    getUsersByLocation: function(data) {
        let latitude = data.latitude;
        let longitude = data.longitude;
        let radius = data.radius;
        
        return new Promise((resolve, reject) => {
            db.collection(USER_DB)
            .get()
            .then((querySnapshot) => {
                let users = [];
                querySnapshot.forEach((doc) => {
                    let user = new User(doc.data());
                    users.push(doc.data());
                });
                resolve(users);
            })
            .catch((error) => {reject(error);});    
        });    
    }
}

module.exports = UserService;