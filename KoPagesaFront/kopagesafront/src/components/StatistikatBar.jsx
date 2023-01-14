import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend , Tooltip } from 'recharts';

function StatistikatBar({patenta,patentad,patentaa}) {
    const data1 = [
        {name: "Aplikues", uv: 100, pv: 20, amt: 2290},
        {name: "Aplikues sot", uv: 100, pv: 20, amt: 2290},
        {name: "Te Regjistruar", uv: 100, pv: 20-3, amt: 2290},
        {name: "Rezervime", uv: 100, pv: 20, amt: 2290},
      ]

  return (
    <div>
        <BarChart
          width={500}
          height={300}
          data={data1}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
          className="mt-5 " 
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
    </div>
  )
}

export default StatistikatBar