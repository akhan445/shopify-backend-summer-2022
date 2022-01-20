var express = require('express');
var router = express.Router();

/* GET users listing. */
module.exports = ({
  getInventory,
  getInventoryById,
  addNewInventoryItem,
  updateInventoryItem,
  deleteInventoryItem
}) => {
  /* GET inventory listing. */
  router.get('/', (req, res) => {
      getInventory()
          .then((inventory) => res.json(inventory))
          .catch((err) => res.json({
              error: err.message
          }));
  });

  // router.get('/posts', (req, res) => {
  //     getUsersPosts()
  //         .then((usersPosts) => {
  //             const formattedPosts = getPostsByUsers(usersPosts);
  //             res.json(formattedPosts);
  //         })
  //         .catch((err) => res.json({
  //             error: err.message
  //         }));
  // });

  // router.post('/', (req, res) => {

  //     const {
  //         first_name,
  //         last_name,
  //         email,
  //         password
  //     } = req.body;

  //     getUserByEmail(email)
  //         .then(user => {

  //             if (user) {
  //                 res.json({
  //                     msg: 'Sorry, a user account with this email already exists'
  //                 });
  //             } else {
  //                 return addUser(first_name, last_name, email, password)
  //             }

  //         })
  //         .then(newUser => res.json(newUser))
  //         .catch(err => res.json({
  //             error: err.message
  //         }));

  // })

  return router;
};
