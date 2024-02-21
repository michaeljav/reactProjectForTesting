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
  date: string;
  value: number;
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
    <div className='w-full h-full'>
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 100 }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' tick={<CustomizedAxisTick />} />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey='value' fill='#8884d8' />
      </BarChart>
    </div>
  );
};

const CustomizedAxisTick: React.FC<{
  x?: number;
  y?: number;
  payload?: any;
}> = (props) => {
  const { x, y, payload } = props;
  console.log('Testing ', props);
  const date = new Date(payload.value);
  const year = date.getFullYear();
  const month = date.toLocaleString('en-us', { month: 'short' });
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        // dy={36}
        textAnchor='end'
        // fill='#666'
        transform='rotate(-45)'
      >
        {/* {`${month} ${year} - ${payload.value}`} */}
        {`${year}-${month} `}
      </text>
    </g>
  );
};

// ++++++++++++++++++++++++++++++++++++++++++++++++

// import React from 'react';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   Label,
// } from 'recharts';

// interface DataItem {
//   name: string;
//   date: string;
//   value: number;
// }

// interface BarChartProps {
//   data: DataItem[];
// }

// export const CustomBarChart: React.FC<BarChartProps> = () => {
//   const data: DataItem[] = [
//     { name: 'January', date: '2023-01-01', value: 100 },
//     { name: 'February', date: '2023-02-01', value: 200 },
//     { name: 'March', date: '2023-03-01', value: 300 },
//     { name: 'April', date: '2023-04-01', value: 400 },
//     { name: 'May', date: '2023-05-01', value: 500 },
//   ];
//   return (
//     <BarChart
//       width={600}
//       height={300}
//       data={data}
//       margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//     >
//       <CartesianGrid strokeDasharray='3 3' />
//       <XAxis dataKey='date' tick={<CustomizedAxisTick />} />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <Bar dataKey='value' fill='#8884d8' />
//     </BarChart>
//   );
// };

// const CustomizedAxisTick: React.FC<{
//   x?: number;
//   y?: number;
//   payload?: any;
// }> = (props) => {
//   const { x, y, payload } = props;
//   const date = new Date(payload.value);
//   const year = date.getFullYear();
//   return (
//     <g transform={`translate(${x},${y})`}>
//       <text
//         x={0}
//         y={0}
//         dy={16}
//         textAnchor='end'
//         fill='#666'
//         transform='rotate(-45)'
//       >
//         {`${year} - ${payload.value}`}
//       </text>
//     </g>
//   );
// };
