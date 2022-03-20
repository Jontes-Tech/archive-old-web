var age =((Date.now() / 1000 - 1233516011) / 31557600).toFixed(0);
export default function func(res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { myage: { age: string; }; }): void; new(): any; }; }; }) {   
  res.status(200).json({myage: {age}})
}