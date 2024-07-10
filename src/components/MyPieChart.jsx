import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
    { name: 'Youtube', value: 400 },
    { name: 'Facebook', value: 300 },
    { name: 'Direct Search', value: 200 },
];
const COLORS = ['#F50E0C', '#0F68BD', '#9A53E7'];


const MyPieChart = () => {
    return (
        <ResponsiveContainer>
            <PieChart width={400} height={200} className='mx-auto w-11/12'>
                <Pie
                    data={data}
                    
                    innerRadius={90}
                    outerRadius={110}
                    fill="#8884d8"
                    paddingAngle={0}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend />
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default MyPieChart;