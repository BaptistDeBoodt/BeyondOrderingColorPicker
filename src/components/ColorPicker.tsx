import { CompactPicker } from 'react-color';
import type { ColorPickerProps } from '@types/ColorPickerProps';

const ColorPicker = ({ color, onChange }: ColorPickerProps) => {
  return (
    <CompactPicker
      color={color}
      onChange={(c) => onChange(c.hex)}
    />
  );
};

export default ColorPicker;
