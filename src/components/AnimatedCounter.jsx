import { counterItems } from "../constants/index.js";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <div
            key={item.label}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col items-center justify-center"
          >
            <div className="counter-number text-white text-5xl mb-2 font-bold">
              <CountUp suffix={item.suffix} end={item.value} duration={2} />
            </div>
            <div className="text-white text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;