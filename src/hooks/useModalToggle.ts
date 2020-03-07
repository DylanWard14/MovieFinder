import React from 'react';

const useModalToggle = (initialIsVisible: boolean) => {
    const [visible, setVisible] = React.useState(initialIsVisible);
    const ref = React.useRef<HTMLFormElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Element)) {
            setVisible(false);
        } else {
            setVisible(true);
        }
    };

    const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setVisible(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        document.addEventListener('keydown', handleEscape, true);

        return () => {
            document.removeEventListener('click', handleClickOutside, true);
            document.removeEventListener('keydown', handleEscape, true);
        };
    });

    return { ref, visible, setVisible };
};

export default useModalToggle;
