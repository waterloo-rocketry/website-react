import React from 'react';
import {
  Gauge, Ruler, Rocket, Target, BarChart3, Weight, Flame, Cylinder, DraftingCompass,
} from 'lucide-react';
import StatCard from '../atoms/StatCard';

const iconMap = {
  Diameter: DraftingCompass,
  Length: Ruler,
  'Motor Class': Rocket,
  'Motor Classification': Rocket,
  'Wet Mass': Weight,
  Fuel: Flame,
  Oxidizer: Cylinder,
  'Apogee (reported)': Target,
  Apogee: Target,
  'Max Velocity': BarChart3,
};

const SpecsGrid = ({ specs }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {specs.map((s) => {
      const Icon = iconMap[s.label] || Gauge;
      return <StatCard key={s.label} label={s.label} value={s.value} icon={Icon} />;
    })}
  </div>
);

export default SpecsGrid;
