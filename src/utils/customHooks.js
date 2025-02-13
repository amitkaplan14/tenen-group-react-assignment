import React, { useEffect, useRef } from 'react';

export const useEffectAfterInit = (func, deps) => {
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) func();
        else didMount.current = true;
    }, deps);
};

