import React from 'react';

const StatCard = ({ label, value, icon: Icon }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 md:p-5 shadow-sm">
    <div className="flex items-center gap-3">
      {Icon && <Icon className="h-5 w-5" aria-hidden />}
      <dt className="text-sm uppercase tracking-wide opacity-80">{label}</dt>
    </div>
    <dd className="mt-1 text-2xl font-semibold">{value}</dd>
  </div>
);

export default StatCard;
