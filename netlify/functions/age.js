var myage =((Date.now() / 1000 - 1233516011) / 31557600);
exports.handler = async function (event, context) {
    return {
      statusCode: 200,
      body: JSON.stringify({age: myage}),
    };
  }