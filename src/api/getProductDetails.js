import axios from 'axios';

export const getProductDetails = (brand, sku) => {
  return new Promise((resolve, reject) => {
    axios.get('<API>',{
      params: {
        op: 'getProductDetails',
        data: {
          "brand":brand,
          "sku": sku.toUpperCase(),
        }
      }
    })
    .then(res => {
      if(res.data) {
          resolve(res.data);
      } else reject(false);
    })
    .catch(err => {
      reject(err);
    })
  })
}
