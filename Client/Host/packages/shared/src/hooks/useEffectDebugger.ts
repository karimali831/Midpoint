import React, { useEffect, useRef } from 'react';

const usePrevious = <T>(value: T[], initialValue: any) => {
    const ref = useRef(initialValue);
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};

const useEffectDebugger = <T, T2>(
    effectHook: React.EffectCallback,
    dependencies: T[],
    dependencyNames: Array<keyof T2>
) => {
    const previousDeps = usePrevious<T>(dependencies, []);

    const changedDeps = dependencies.reduce(
        (accum: any, dependency: any, index: number) => {
            if (dependency !== previousDeps[index]) {
                const keyName = dependencyNames[index] || index;
                return {
                    ...accum,
                    [keyName]: {
                        before: previousDeps[index],
                        after: dependency,
                    },
                };
            }

            return accum;
        },
        {}
    );

    if (Object.keys(changedDeps).length) {
        console.log('[use-effect-debugger] ', changedDeps);
    }

    useEffect(effectHook, dependencies);
};

export default useEffectDebugger;
