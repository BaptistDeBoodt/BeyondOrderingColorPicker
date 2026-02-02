import style from './Gradient.module.css';
import type { GradientProps } from '@/types/GradientProps';

const Gradient = ({ gradients }: GradientProps) => {
  return (
    <div className={style.gradient}>
      {Object.entries(gradients).map(([key, color]) => (
        <div
          key={key}
          className={style.circle}
          style={{ backgroundColor: color }}
          title={key}
          data-label={key}
        />
      ))}
    </div>
  );
};

export default Gradient;
