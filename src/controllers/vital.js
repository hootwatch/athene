import Vital from "../models/vitals";
let avg = [];

const create = async (req, res) => {
  const { heartRate, barometer, accelerometer } = req.body;

  let getAvg = heartRate;
  if (avg.length < 20) {
    avg.push(heartRate);
    console.log("Getting some vitals: " + avg.length + ` (${getAvg})`);
  } else {
    getAvg = await avg.reduce((a, b) => a + b, 0);

    if (getAvg / 20 > 120 || (getAvg / 20 < 60 && getAvg != undefined)) {
      console.log("Help " + getAvg / 20);
      Vital.create({ heartRate, barometer });
    } else {
      console.log("All good " + getAvg / 20);
    }

    avg.shift();
    avg.push(heartRate);
  }

  const io = res.locals["socketio"];

  io.emit("vitals", { heartRate, barometer, accelerometer });

  res.send({ success: true });
};

export default { create };
