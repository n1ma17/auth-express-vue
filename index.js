const express = require("express");
const app = express();
const port = 5000;
const jwt = require("jsonwebtoken");

app.use(express.json());

const users = [
  {
    id: "1",
    username: "nima",
    password: "nima",
    isAdmin: true,
  },
  {
    id: "2",
    username: "hamid",
    password: "hamid",
    isAdmin: false,
  },
];
let refreshTokensList = [];
generateAccessToken = (user) => {
  return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "secretKey", {
    expiresIn: "30s",
  });
};
generateRefreshToken = (user) => {
  return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "secretRefreshKey");
};
app.post("/api/refreshToken", (req, res) => {
  //take refresh token from user
  const refreshToken = req.body.token;
  //error if there is no refresh token or it is invalid
  if (!refreshToken) return res.status(401).json("you are not authenticated");
  if (!refreshTokensList.includes(refreshToken)) {
    return res.status(403).json("reresh token is not valid");
  }
  console.log(refreshToken);
  jwt.verify(refreshToken, "secretRefreshKey", (err, user) => {
    if (err) {
      console.log(err);
    }
    refreshTokensList = refreshTokensList.filter(
      (token) => token !== refreshToken
    );

    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    refreshTokensList.push(refreshToken);
    res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  });
  //if everything is ok , generate new access token
});
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => {
    return user.username === username && user.password === password;
  });
  if (user) {
    //Generate an access token
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    refreshTokensList.push(refreshToken);
    res.json({
      username: user.username,
      isAdmin: user.isAdmin,
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
  } else {
    res.status(400).json("username or passwor incorrect");
  }
});

const verify = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, "secretKey", (err, user) => {
      if (err) {
        return res.status(401).json("token is not valid");
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json("user dose not have access");
  }
};
app.delete("/api/users/:userId", verify, (req, res) => {
  if (req.user.id === req.params.userId || req.user.isAdmin) {
    console.log("ss");
    res.status(200).json("user is deleted");
  } else {
    res.status(403).json("you are not allowed to delete this user");
  }
});
app.post("/api/logout", verify, (req, res) => {
  const refreshToken = req.body.token;
  refreshTokensList = refreshTokensList.filter(
    (token) => token !== refreshToken
  );
  res.status(200).json("logout is successfull");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
