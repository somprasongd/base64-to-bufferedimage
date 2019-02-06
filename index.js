const decodeBase64Image = dataString => {
  if (dataString === null || dataString.trim() === "") {
    return { error: new Error("Invalid input string") };
  }
  const data = {};
  const dataPureBase64 = dataString.split("\n").join("");
  const matches = dataPureBase64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);

  if (
    matches === null &&
    Buffer.from(dataPureBase64, "base64").toString("base64") === dataPureBase64
  ) {
    data.type = null;
    data.buffer = Buffer.from(dataPureBase64, "base64");
    return { error: undefined, data };
  }

  if (matches === null || matches.length !== 3) {
    return { error: new Error("Invalid input string") };
  }
  data.type = matches[1];
  data.buffer = Buffer.from(matches[2], "base64");
  return { error: undefined, data };
};

module.exports = {
  decodeBase64Image
};
