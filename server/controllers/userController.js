const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, password, race, race2, race3, tier } = req.body;

    if (!username || !password || !race || !tier) {
      return res.status(400).json({ message: "빈칸을 채워주세요" });
    }

    const usernameExists = await User.findOne({ username });

    if (usernameExists) {
      return res.status(400).json({ message: "이미 존재하는 닉네임입니다" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      password: hashedPassword,
      race,
      race2,
      race3,
      tier,
    });

    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "회원가입 에러" });
  }
};

const login = async (req, res) => {
  try {
    console.log(req.body);
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "빈칸을 채워주세요" });
    }

    const user = await User.findOne({ username }).exec();

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "존재하지 않는 닉네임입니다" });
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      return res
        .status(400)
        .json({ success: false, message: "비밀번호가 일치하지 않습니다" });
    }

    const token = jwt.sign(
      {
        _id: user.id,
        username: user.username,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "6h",
      }
    );

    return res.status(200).json({ success: true, user, token });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, message: "로그인 에러" });
  }
};

module.exports = { register, login };
