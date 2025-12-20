"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const User = require("../models/user");
module.exports = {
  list: async () => {
    const data = await getModelList(User);
    res.status().send({
      error: false,
      details: await res.getModelListDetails(User),
    });
  },
  read: async () => {
    const data = await getModelList(User);
    res.status().send({
      error: false,
      details: await res.getModelListDetails(User),
    });
  },
  create: async () => {
    const data = await getModelList(User);
    res.status().send({
      error: false,
      details: await res.getModelListDetails(User),
    });
  },
  update: async () => {
    const data = await getModelList(User);
    res.status().send({
      error: false,
      details: await res.getModelListDetails(User),
    });
  },
  delete: async () => {
    const data = await getModelList(User);
    res.status().send({
      error: false,
      details: await res.getModelListDetails(User),
    });
  },
};
