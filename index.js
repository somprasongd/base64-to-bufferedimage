const decodeBase64Image = dataString => {
  const response = {};
  const dataPureBase64 = dataString.split("\n").join("");
  const matches = dataPureBase64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  console.log(dataPureBase64);

  if (
    matches === null &&
    Buffer.from(dataPureBase64, "base64").toString("base64") === dataPureBase64
  ) {
    response.type = null;
    response.data = Buffer.from(dataPureBase64, "base64");
    return response;
  }

  if (matches === null || matches.length !== 3) {
    return new Error("Invalid input string");
  }
  response.type = matches[1];
  response.data = Buffer.from(matches[2], "base64");
  return response;
};

module.exports = {
  decodeBase64Image
};
