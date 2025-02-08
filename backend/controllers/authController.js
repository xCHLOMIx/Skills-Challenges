const Admin = require("../models/Admin");
const Participant = require("../models/Participants");
const jwt = require("jsonwebtoken");
const { validateSignup } = require("../validation/validator");

const signup = async (req, res) => {
  const { error, value } = validateSignup(req.body);
  if (error) {
    console.log(error);
    res.status(400).json(error);
  }
  try {
    const user = await Participant.signup(value);
    res.json({ user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};
const login = async (req, res) => {
  try {
    const user = await Participant.login(req.body);
    const token = jwt.sign(
      {
        id: user._id,
        name: user.name,
        phone: user.phone,
        email: user.email,
        title: user.title,
      },
      process.env.SECRET_KEY
    );
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: true,
      maxAge: 1000 * 3600 * 72,
    });
    res.json({ message: "your logged in", token: token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

//info: admins auth

const signupAdmin = async (req, res) => {
  try {
    const user = await Admin.signup(req.body);
    res.json({ user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

const profile = async (req, res) => {
  try {
    const participantToken = req.cookies.jwt;
    const adminToken = req.cookies.jwtAdmin;

    if (!participantToken && !adminToken) {
      return res.status(403).json({ message: "No authentication token found" });
    }

    let user;
    let userType;

    if (adminToken) {
      const adminData = jwt.verify(adminToken, process.env.SECRET_KEY);
      user = await Admin.findById(adminData.id).select('-password');
      userType = 'admin';
    } else {
      const participantData = jwt.verify(participantToken, process.env.SECRET_KEY);
      user = await Participant.findById(participantData.id).select('-password');
      userType = 'participant';
    }

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      userType,
      profile: user
    });

  } catch (error) {
    console.error('Profile error:', error);
    res.status(401).json({ 
      message: "Authentication failed",
      error: error.message 
    });
  }
};

const loginAdmin = async (req, res) => {
  try {
      const user = await Admin.login(req.body);
      const token = jwt.sign(
          {
              id: user._id,
              name: user.name,
              phone: user.phone,
              email: user.email,
          },
          process.env.SECRET_KEY,
          { expiresIn: "3d" } // Set token expiration
      );

      res.cookie("jwtAdmin", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production", // Enable secure cookies in production
          sameSite: "Lax", // Prevent CSRF issues
          maxAge: 1000 * 3600 * 72, // 3 days
      });

      res.status(200).json({ message: "You're logged in as an admin" });
  } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
  }
};


const logout = (req, res) => {
  try {
    // Clear both cookies
    res.cookie("jwt", "", {
      maxAge: 1,
      httpOnly: true,
      secure: true,
    });
    res.cookie("jwtAdmin", "", {
      maxAge: 1,
      httpOnly: true,
      secure: true,
    });

    res.status(200).json({
      message: "Logged out successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error logging out",
      error: error.message,
    });
  }
};
module.exports = {
  signup,
  login,
  logout,
  signupAdmin,
  profile,
  loginAdmin,
};
