import axios from "axios";
import search from "./search";
import { getProductDetails } from "./getProductDetails";

const getContents = () => {
  return new Promise((resolve, reject) => {
    const query = {
      constant_score: {
        filter: {
          bool: {
            should: [
              {
                term: {
                  type: "flights"
                }
              }
            ]
          }
        }
      }
    };
    const aggs = {
      price_ranges: {
        range: {
          field: "offerPrice",
          ranges: [
            { to: 999.0 },
            { from: 1000.0, to: 1999.0 },
            { from: 2000.0, to: 2999.0 },
            { from: 3000.0, to: 3999.0 }
          ]
        }
      }
    };
    axios
      .post("http://localhost:9200/offers/_search?", { query, aggs })
      .then(res => {
        if (res.data && res.data.hits) {
          return resolve(res.data);
        }
        throw new Error(false);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const getStores = () => {
  return new Promise((resolve, reject) => {
    const query = {
      bool: {
        must: [
          {
            term: {
              type: "stores"
            }
          }
        ]
      }
    };
    const aggs = {
      stores: {
        terms: {
          field: "name.keyword"
        }
      }
    };

    axios
      .post("http://localhost:9200/offers/_search?", { size: 10, query, aggs })
      .then(res => {
        if (res.data && res.data.hits) {
          return resolve(res.data);
        }
        throw new Error(false);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const getResults = () => {
  return new Promise(resolve => {
    console.log("==>", search);
    resolve(search);
  });
};

// eslint-disable-next-line import/prefer-default-export
export const getSiteContents = req => {
  return new Promise(resolve => {
    if (req.path === "/") {
      axios
        .all([getContents(req.path), getStores()])
        .then(
          axios.spread((offers, stores) => {
            resolve({
              offers,
              stores
            });
          })
        )
        .catch(err => {
          console.log(err);
        });
    } else if (req.path.indexOf("search") >= 0) {
      axios
        .all([getResults()])
        .then(
          axios.spread(result => {
            resolve({
              results: result[req.query.q]
            });
          })
        )
        .catch(err => {
          console.log(err);
        });
    } else if (req.path.indexOf("pdp") >= 0) {
      axios
        .all([getProductDetails(req.query.brand, req.query.sku)])
        .then(
          axios.spread((details, images) => {
            const detailsInstance = details;
            detailsInstance.s7Images = images;
            resolve({
              details: detailsInstance
            });
          })
        )
        .catch(err => {
          console.log(err);
        });
    }
  });
};
