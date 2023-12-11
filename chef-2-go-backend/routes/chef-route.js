import express from 'express';

// Importing the Chef Controller

import reciperouter from './recipe-route.js';
import * as chefController from '../controllers/chef-controller.js';  

const chefrouter = express.Router();
chefrouter.route('/')
   .get(chefController.findAll)
   .post(chefController.post)

   chefrouter.route('/:id')
   .get(chefController.get)
   .put(chefController.put)
   .delete(chefController.remove);

export default chefrouter;