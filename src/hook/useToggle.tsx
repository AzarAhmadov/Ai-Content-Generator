import { useState } from 'react';

type UseToggleType = [boolean, () => void];

const useToggle = (initialValue: boolean = false): UseToggleType => {
    const [toggle, setToggle] = useState<boolean>(initialValue);
    const handleToggle = () => {
        setToggle(prevToggle => !prevToggle);
    };

    return [toggle, handleToggle];
};

export default useToggle;
