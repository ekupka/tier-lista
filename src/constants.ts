import { Color, ItemProps } from "./types";

export const defaultTierList = {
    rows: [
        {
            thumbnail: {
                text: "S",
                color: "#63AA8C",
            },
            items: [] as {
                thumbnail: {
                    text: string;
                    color: Color;
                };
            }[],
        },
        {
            thumbnail: {
                text: "A",
                color: "#4C9D50",
            },
            items: [],
        },
        {
            thumbnail: {
                text: "B",
                color: "#619036",
            },
            items: [
                {
                    thumbnail: {
                        text: "Example A",
                        color: "#dd92d3",
                    },
                },
                {
                    thumbnail: {
                        text: "Example B",
                        color: "#ba84d4",
                    },
                },
            ],
        },
        {
            thumbnail: {
                text: "C",
                color: "#828220",
            },
            items: [],
        },
        {
            thumbnail: {
                text: "D",
                color: "#85631D",
            },
            items: [],
        },
        {
            thumbnail: {
                text: "E",
                color: "#87401B",
            },
            items: [],
        },
        {
            thumbnail: {
                text: "F",
                color: "#8A1A18",
            },
            items: [],
        },
    ],
    bench: [
        {
            thumbnail: {
                text: "Example 1",
                color: "#dd92d3",
            },
        },
        {
            thumbnail: {
                text: "Example 2",
                color: "#ba84d4",
            },
        },
        {
            thumbnail: {
                text: "Example 3",
                color: "#8e78d3",
            },
        },
        {
            thumbnail: {
                text: "Example 4",
                color: "#516fd0",
            },
        },
    ],
};
