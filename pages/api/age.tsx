var age =((Date.now() / 1000 - 1233516011) / 31557600).toFixed(0);
export default function handler(req, res) {
    res.status(200).json({age})
  }