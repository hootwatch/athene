import Vital from "../models/vitals";
import { sendText } from "../services/courier";

let avg = [];
let contacted = false;

const create = async (req, res) => {
  const { heartRate, barometer, accelerometer } = req.body;

  let getAvg = heartRate;
  if (avg.length < 20) {
    avg.push(heartRate);
    console.log("Getting some vitals: " + avg.length + ` (${getAvg})`);
  } else {
    getAvg = await avg.reduce((a, b) => a + b, 0);

    if (getAvg / 20 > 100 || (getAvg / 20 < 70 && getAvg != undefined)) {
      console.log("Help " + getAvg / 20);
      await Vital.create({ heartRate, barometer });

      if (!contacted) {
        const number = "9542886794";
        const data =
          "A hoot alert has been triggered, please check the app for full details.";

        const sid = await sendText(number, data);
        console.log("Contacted " + sid);
        contacted = true;
      }
    } else {
      console.log("All good " + getAvg / 20);
    }

    avg.shift();
    avg.push(heartRate);
  }

  const io = res.locals["socketio"];

  io.emit("vitals", {
    heartRate,
    barometer: barometer.toString(),
    accelerometer
  });

  res.send({ success: true });
};

export default { create };
