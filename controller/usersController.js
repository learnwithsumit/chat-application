// get users page
function getUsers(req, res, next) {
  res.render("users");
}

module.exports = {
  getUsers,
};
