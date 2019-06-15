import uniqid from 'uniqid'
import config from './config.js'
import configFunction from './configFunction.js'
import mockData from './mockData'
export const abTesting = (req, res, next) => {

  /***** For setting unique id for each browser *****/
  const __uid = req.cookies.__unique_id__;
  let __user = req.cookies.__user__;
  if(!__uid) {
    const uid = uniqid();
    res.cookie('__unique_id__', uid, { maxAge: 1000*60*60*24, httpOnly: true });
  }

  if(!__user) {
    const userflag = (Math.floor(Math.random() * 1000) % 2) === 0 ? 'a' : 'b';
    res.cookie('__user__', userflag, { maxAge: 1000*60*60*24, httpOnly: true });
    __user = userflag;
  }

  return new Promise(resolve => {
    const random = Math.floor(Math.random() * 4999);
    const user = mockData[random];
    const username = __user;

    const testingKeys = {
      uuid: user.uuid,
      username: username
    };

    let flags = {}, funcRes = [];
    config.forEach(conf => {
      if(conf.enabled) {
        const func = conf.strategy.type;
        const keyName = conf.strategy.filter;
        funcRes.push(configFunction[func](testingKeys, conf));
      }
    })
    Promise.all(funcRes).then(values => {
      flags = Object.assign({}, flags, ...values);
      resolve(Object.assign({}, flags, { "defaultFlag": true }));
    });
  })
}
