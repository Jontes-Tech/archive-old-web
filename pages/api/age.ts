import type { NextApiRequest, NextApiResponse } from 'next'
export default function handler(
  req: NextApiRequest
) {
  res.status(200).json({ age: age})
}
var dob = '20090201';
var year = Number(dob.substr(0, 4));
var month = Number(dob.substr(4, 2)) - 1;
var day = Number(dob.substr(6, 2));
var today = new Date();
var age = today.getFullYear() - year;
if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
  age--;
}