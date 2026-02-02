import style from './Header.module.css';
import type { GradientProps } from '@/types/GradientProps';

const Header = ({ gradients }: GradientProps) => {
  const gradient500 = gradients['gradient-500'];

  return (
    <div
      className={style.header}
      style={{ backgroundColor: gradient500 }}
    >
    </div>
  );
};

export default Header;
