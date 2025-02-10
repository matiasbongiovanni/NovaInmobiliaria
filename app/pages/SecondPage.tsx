import Information from '../components/Information'
import Card from "../components/Card";
import { MarqueeDemo } from "../components/Marquee"

type Props = {}

const SecondPage = (props: Props) => {
  return (
   <section>
        <Information />
        <Card />
        <MarqueeDemo />
   </section>
  )
}


export default SecondPage