import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
    {
      name: 'Jan',
      uv: 400,
      pv: 200,
      amt: 200,
    },
    {
      name: 'Feb',
      uv: 2000,
      pv: 998,
      amt: 1210,
    },
    {
      name: 'Mar',
      uv: 1000,
      pv: 100,
      amt: 290,
    },
    {
      name: 'Apr',
      uv: 2780,
      pv: 908,
      amt: 1000,
    },
    {
      name: 'May',
      uv: 2090,
      pv: 3500,
      amt: 2181,
    },
  ];
  

const MyAreaChart = () => {


    return (
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={550}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#F9BE8E" fill="#8884d8" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#C699EE" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    );
};

export default MyAreaChart;