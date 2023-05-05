import { Color } from "./types";

export const defaultTierList = {
    rows: [
        {
            thumbnail: {
                text: "S",
                bg: "#63AA8C",
            },
            items: [] as {
                thumbnail: {
                    text: string;
                    bg: Color;
                };
            }[],
        },
        {
            thumbnail: {
                text: "A",
                bg: "#4C9D50",
            },
            items: [],
        },
        {
            thumbnail: {
                text: "B",
                bg: "#619036",
            },
            items: [
                {
                    thumbnail: {
                        text: "Example A",
                        bg: "#dd92d3",
                    },
                },
                {
                    thumbnail: {
                        text: "Example B",
                        bg: "#ba84d4",
                    },
                },
            ],
        },
        {
            thumbnail: {
                text: "C",
                bg: "#828220",
            },
            items: [],
        },
        {
            thumbnail: {
                text: "D",
                bg: "#85631D",
            },
            items: [],
        },
        {
            thumbnail: {
                text: "E",
                bg: "#87401B",
            },
            items: [],
        },
        {
            thumbnail: {
                text: "F",
                bg: "#8A1A18",
            },
            items: [],
        },
    ],
    bench: [
        {
            thumbnail: {
                text: "Example 1",
                bg: "#dd92d3",
            },
        },
        {
            thumbnail: {
                text: "Example 2",
                bg: "#ba84d4",
            },
        },
        {
            thumbnail: {
                text: "Example 3",
                bg: "#8e78d3",
            },
        },
        {
            thumbnail: {
                text: "Example 4",
                bg: "#516fd0",
            },
        },
    ],
};
