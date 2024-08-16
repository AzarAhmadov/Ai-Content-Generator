import { useState, useEffect, useRef } from 'react';

type UseToggleType = [boolean, () => void, React.RefObject<HTMLDivElement>];

const useToggle = (initialValue: boolean = false): UseToggleType => {
    const [toggle, setToggle] = useState<boolean>(initialValue);
    const ref = useRef<HTMLDivElement>(null);

    const handleToggle = () => {
        setToggle(prevToggle => !prevToggle);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setToggle(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return [toggle, handleToggle, ref];
};

export default useToggle;
