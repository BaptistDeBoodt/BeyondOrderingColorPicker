import { useState } from 'react';
import style from './Home.module.css';

import ColorPicker from '@/components/ColorPicker';
import Header from '@/components/Header/Header';
import Gradient from '@/components/Gradient/Gradient';
import ButtonUsage from '@/components/ButtonUsage';
import AutocompleteUsage from '@/components/AutocompleteUsage';

import { useGradient } from '@/hooks/useGradient';

const areas = ['terras', 'upstairs', 'downstairs', 'garden', 'pool'];
const tableNumbers = ['1', '2', '3', '4', '5'];

const Home = () => {
    const [selectedArea, setSelectedArea] = useState<string | null>(null);
    const [selectedTable, setSelectedTable] = useState<string | null>(null);
    const [color, setColor] = useState('#999999');

    const gradients = useGradient(color);

    return (
        <div 
            className={style.home_conatiner}
            style={{ backgroundColor: gradients['gradient-200'] }}
        >
            <Header gradients={gradients} />
            <ColorPicker color={color} onChange={setColor} />
            <Gradient gradients={gradients} />
            <AutocompleteUsage 
                options={areas} 
                label="Area" 
                value={selectedArea}
                onChange={setSelectedArea}
                gradients={gradients}
            />
            <AutocompleteUsage 
                options={tableNumbers} 
                label="Table Number" 
                value={selectedTable}
                onChange={setSelectedTable}
                gradients={gradients}
            />
            <ButtonUsage gradients={gradients} />
        </div>
    );
};

export default Home;