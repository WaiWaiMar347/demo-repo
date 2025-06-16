const jwt=require('jsonwebtoken');
require('dotenv').config();


const middlware= (req, res, next) => {

  // Check if the request has a valid token
  const token = req.headers['x-access-token'];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  // Verify the token (this is a placeholder, implement your own verification logic)
  try {
    // Assuming you have a function to verify the token
    const decoded = jwt.verify(token,process.env.SECRECT_KEY);
    req.user = decoded; // Attach user info to request object
    next(); // Proceed to the next middleware or route handler
  } 
  catch (err) {
    return res.status(403).json({ message: 'Failed to authenticate token' });
  }
}
module.exports =middlware;