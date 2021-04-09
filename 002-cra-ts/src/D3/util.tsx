import { useRef, useEffect } from 'react';

export type IDataset = Array<[number, number]>

/**
 * @description: Hooks useInterval 间限执行钩子
 * @param {callback} Function  回调函数
 * @param {delay}    number    延迟时间
 * @demo  =>  useInterval(() => {}, 1000) 
 */
export function useInterval(callback: Function, delay: number) {
    const latestCallback = useRef<Function>(() => { });

    useEffect(() => {
        latestCallback.current = callback;
    });

    useEffect(() => {
        if (delay !== null) {
            const interval = setInterval(() => latestCallback.current(), delay || 0);
            return () => clearInterval(interval);
        }
        return undefined;
    }, [delay]);
}

export function generateDataset(x: void): IDataset {
  return Array(10).fill(0).map(() => [
    Math.random() * 80 + 10,
    Math.random() * 35 + 10,
  ])
}
