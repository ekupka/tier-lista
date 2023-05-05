import { Color } from "./types";

export const getRandomInt = () => (Math.random() * 1000000).toFixed(0);

export const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color as Color;
};
