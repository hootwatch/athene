import vitalService from "../services/vitals";

const { FITBIT_CALLBACK_URI } = process.env;

const auth = async (req, res) => {
  try {
    const auth_url = await vitalService.authFitbit();
    res.redirect(auth_url);
  } catch (e) {
    res.send(e);
  }
};

// const read = async (req, res) => {
//   const { code } = req.query;

//   try {
//     const vitals = await vitalService.readFitbit(code);
//     res.send({ vitals });
//   } catch (e) {
//     res.send(e);
//   }
// };

const read = async (req, res) => {
  try {
    res.send(true);
  } catch (e) {
    res.send(e);
  }
};

const create = async (req, res) => {
  try {
    console.log(req.body);
  } catch (e) {
    res.send(e);
  }
};

export default { auth, read, create };
