// Sample code with intentional issues for demonstration
// This file is used to show how Copilot can identify standards violations

// Issue 1: Missing JSDoc documentation
function getUserData(id) {
  // Issue 2: No input validation
  // Issue 3: No error handling
  const query = `SELECT * FROM users WHERE id = ${id}`; // Issue 4: SQL injection vulnerability
  
  // Issue 5: Synchronous operation (should be async)
  const result = db.query(query);
  
  // Issue 6: No logging
  // Issue 7: Inconsistent response format
  return result;
}

// Issue 8: Poor naming (should be camelCase for functions)
function Get_All_Users() {
  // Issue 9: Hardcoded credentials
  const dbPassword = "admin123";
  
  // Issue 10: No pagination
  const users = db.query("SELECT * FROM users");
  
  // Issue 11: No error handling
  return users;
}

// Issue 12: Missing validation
function createUser(req, res) {
  // Issue 13: No try-catch
  const user = {
    name: req.body.name, // Issue 14: No input sanitization
    email: req.body.email,
    password: req.body.password // Issue 15: Storing plain text password
  };
  
  // Issue 16: No validation middleware
  // Issue 17: No rate limiting
  db.insert('users', user);
  
  // Issue 18: Wrong status code (should be 201 for creation)
  // Issue 19: Inconsistent response format
  res.status(200).send({ user });
}

// Issue 20: No authentication check
function deleteUser(req, res) {
  const id = req.params.id;
  
  // Issue 21: No soft delete (hard delete)
  db.delete('users', { id });
  
  // Issue 22: No confirmation of deletion
  res.send("Deleted");
}

// Issue 23: Exporting incorrectly
module.exports = {
  getUserData,
  Get_All_Users,
  createUser,
  deleteUser
};
