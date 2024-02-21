import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

interface DataItem {
  name: string;
  value: number;
  date: string;
}

interface BarChartProps {
  data: DataItem[];
}

export const CustomBarChart: React.FC<BarChartProps> = () => {
  const data: DataItem[] = [
    { name: 'January', date: '2023-01-01', value: 100 },
    { name: 'February', date: '2023-02-01', value: 200 },
    { name: 'March', date: '2023-03-01', value: 300 },
    { name: 'April', date: '2023-04-01', value: 400 },
    { name: 'May', date: '2023-05-01', value: 500 },
  ];

  return (
    <BarChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey='value' fill='#8884d8' />
    </BarChart>
  );
};
