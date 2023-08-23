import React from 'react';

const CustomTable = ({ header, data }) => {
  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-200">
            {header.map((val) => (
                <th className="px-4 py-2">{val}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {data.map((val) => (
          <tr key={val?.id} className="border-t">
            <td className="px-4 py-2 text-center">{val?.name}</td>
            <td className="px-4 py-2 text-center">{val?.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CustomTable;