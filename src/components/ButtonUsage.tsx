import Button from '@mui/material/Button';
import type { GradientProps } from '@types/GradientProps';

const ButtonUsage = ({ gradients }: GradientProps) => {
  return (
    <Button 
        variant="contained"
        sx={{
          backgroundColor: gradients['gradient-400'],
          color: gradients['gradient-200'],
          '&:hover': {
            backgroundColor: gradients['gradient-500'],
          },
        }}
    >
        CONFIRM
    </Button>
  );
}

export default ButtonUsage;