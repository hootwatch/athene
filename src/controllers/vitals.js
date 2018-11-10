const read = async (req, res) => {
  try {
    res.send(true);
  } catch (e) {
    res.send(e);
  }
};

export default { read };
