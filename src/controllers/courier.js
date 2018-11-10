import { sendText } from "../services/courier";

const text = async (req, res) => {
  const { number, data } = req.body;

  try {
    const sid = await sendText(number, data);

    res.send({ sid });
  } catch (e) {
    res.send(e);
  }
};

export default { text };
