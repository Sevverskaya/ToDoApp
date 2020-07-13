import { useState } from 'react';

export default () => {
    const [inputValue, setInputValue] = useState('');

    return {
        inputValue,
        onChange: event => {
            setInputValue(event.target.value);
        },
        reset: () => setInputValue('')
    };
};

