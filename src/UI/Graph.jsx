import {
  AreaChart,
  CartesianGrid,
  Legend,
  Area,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useConFast } from "../context/ContextProject";

function Graph() {
  const { Change, dataInc } = useConFast();
  Change("incomes");
  const date = dataInc.map((item) =>
    item.date.replace("-", "").replace("-", "").slice(6, 8)
  );
  const incomes = dataInc
    .map((item) => item.benefit)
    .sort((a, b) => Number(a) - Number(b));

  const packages = dataInc.map((item) => item.packages);
  const data = date.map((date, index) => {
    return {
      date: +date,
      incomes: +incomes[index],
      packages: +packages[index],
    };
  });
  return (
    <div className="mt-7 sm:w-fit w-[300px]  m-auto  ml-0 sm:ml-auto  h-[360px] bg-gray-100 rounded-3xl pt-4 pb-2 px-4 scroll overflow-scroll ">
      Graph Shown incomes and Total Salaries
      <div className="mt-4 text-stone-400">
        <AreaChart width={800} height={300} data={data}>
          <Area
            type="monotone"
            dataKey="incomes"
            stroke="#03d01e"
            fill="#4ad65d"
            strokeWidth={3}
            name="Total Revenues"
            unit="$"
          />
          <Area
            type="monotone"
            dataKey="packages"
            strokeWidth={4}
            stroke="#0082aa"
            fill="#088ac6"
            name="Total Soled Packages"
            unit="p"
          />
          <CartesianGrid stroke="#bdb0d0" />
          <XAxis stroke="#afa8b9" dataKey="date" />
          <YAxis stroke="#ada1bd" />
          <Tooltip />
          <Legend />
        </AreaChart>
      </div>
    </div>
  );
}

export default Graph;
