import React from 'react'
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

function Statistikat({gjoba,gjobap,gjobapp,gjobas}) {
  
    const data = [
        {name: "Gjoba", value: +gjoba},
        {name: "Gjoba te paguara", value: +gjobap},
        {name: "Gjoba pa paguar", value: +gjobapp},
        {name: "Gjoba sot", value: +gjobas},
      ]
      /*
      const data = [
        {name: "a", value: 5},
        {name: "b", value: 10},
        {name: "c", value: 15},
        {name: "d", value: 20},
      ]
      */
  return (
    <div>
         <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Pie dataKey="value" data={data} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
          <Tooltip />
        </PieChart>
    </div>
  )
}

export default Statistikat