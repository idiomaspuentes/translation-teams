import React from 'react';

export const ReportCard = ({ icon, value, label, change, changeColor }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 w-full max-w-xs border">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100">
          {icon}
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-800">{value}</h2>
      <p className="text-sm text-gray-600">{label}</p>
      <p className={`text-sm mt-1 ${changeColor}`}>{change}</p>
    </div>
  );
};
