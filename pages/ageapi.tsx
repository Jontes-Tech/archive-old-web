import type { NextPage } from 'next'
var age =((Date.now() / 1000 - 1233516011) / 31557600).toFixed(0);
const Home: NextPage = () => {
  return (
    <div>
        <h1>{age}</h1>
    </div>
  )
}
export default Home