import Vital from "../models/vitals";

const read = async (req, res) => {
  try {
    const vitals = await Vital.find();

    const profile = {
      vitals,
      user: {
        name: "David Castaneda",
        pic: "http://i.imgur.com/OgAYwYor.jpg"
      }
    };

    res.send(profile);
  } catch (e) {
    res.send(e);
  }
};

export default { read };
