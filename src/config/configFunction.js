import ABTesting from 'ab-testing'

const abTestObj = feature => ABTesting.createTest(`${feature.key}`,
[
    {
        name: "true",
        weight: feature.strategy.value[0]
    },
    {
        name: "false",
        weight: feature.strategy.value[1]
    }
]);


export default {
  filterUser: (user, feature) => {
    return new Promise(resolve => {
      const featureFilter = user[feature.strategy.filter];
      if(feature.strategy.expr === 'contains') {
        feature.strategy.value.forEach(item => {
          if(featureFilter.indexOf(item) > -1) {
            resolve({ [feature.key]: true });
          }
        })
      } else if(feature.strategy.expr === 'regex') {
          const expr = new RegExp(feature.strategy.value, 'g');
          if(expr.test(featureFilter)){
            resolve({ [feature.key]: true });
          }
      } else if(feature.strategy.expr === 'arithmetic') {
          if(feature.strategy.exprtype === 'morethan' && feature.strategy.value > featureFilter) {
            resolve({ [feature.key]: true });
          } else if (feature.strategy.exprtype === 'lessthan' && feature.strategy.value < featureFilter) {
            resolve({ [feature.key]: true });
          }
      }
      resolve({ [feature.key]: false });
    })
  },
  abTesting: (user, feature) => {
    return new Promise(resolve => {
      const group = abTestObj(feature).getGroup(user[feature.strategy.filter]);
      resolve({ [feature.key]: (group === "true") ? true : false });
    })
  },
  simple: (user, feature) => {
    return new Promise(resolve => {
      resolve({ [feature.key]: feature.strategy.value });
    })
  }
}
