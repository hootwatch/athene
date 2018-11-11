const create = (req, res) => {
  const { heartRate, barometer, accelerometer } = req.body;

  const io = res.locals["socketio"];

  io.emit("vitals", { heartRate, barometer, accelerometer });

  res.send({ success: true });
};

const read = (req, res) => {
  res.send("Vital");
};

export default { read, create };
