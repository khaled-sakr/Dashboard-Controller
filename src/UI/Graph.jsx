import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const data = [
  { name: "khaled", tail: 140, realAge: "160" },
  { name: "Yaser", tail: 150, realAge: "170" },
  { name: "Mostafa", tail: 140, realAge: "180" },
  { name: "Ahmed", tail: 110, realAge: "100" },
  { name: "Yosry", tail: 130, realAge: "240" },
  { name: "Mo", tail: 240, realAge: "290" },
];

function Graph() {
  return (
    <div className=" shad w-8/12 m-auto  sm:mr-auto  mb-4 h-[260px] bg-vanilla-300 to-vanilla-800 rounded-3xl pt-4 pb-2 px-4 scroll overflow-scroll ">
      <LineChart width={900} height={250} data={data}>
        <Line type="monotone" dataKey="tail" stroke="#720808" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="realAge"
          stroke="#206205"
          strokeWidth={3}
        />
        <CartesianGrid stroke="#cfbfaa" />
        <XAxis stroke="#b8a48c" dataKey="name" />
        <YAxis stroke="#b8a48c" />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
}

export default Graph;
