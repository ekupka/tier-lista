import { Color } from "./types";

export const defaultTierList = {
    rows: [
        {
            id: "S",
            thumbnail: {
                text: "S",
                color: "#63AA8C",
            },
            items: [] as {
                id: string;
                thumbnail: {
                    text: string;
                    color: Color;
                };
            }[],
        },

        {
            id: "A",
            thumbnail: {
                text: "A",
                color: "#4C9D50",
            },
            items: [],
        },

        {
            id: "B",
            thumbnail: {
                text: "B",
                color: "#619036",
            },
            items: [
                {
                    id: "Example A",
                    thumbnail: {
                        text: "Example A",
                        color: "#dd92d3",
                    },
                },
                {
                    id: "Example B",
                    thumbnail: {
                        text: "Example B",
                        color: "#ba84d4",
                    },
                },
            ],
        },

        {
            id: "C",
            thumbnail: {
                text: "C",
                color: "#828220",
            },
            items: [],
        },

        {
            id: "D",
            thumbnail: {
                text: "D",
                color: "#85631D",
            },
            items: [],
        },

        {
            id: "E",
            thumbnail: {
                text: "E",
                color: "#87401B",
            },
            items: [],
        },

        {
            id: "F",
            thumbnail: {
                text: "F",
                color: "#8A1A18",
            },
            items: [],
        },
    ],
    bench: [
        {
            id: "Example 1",
            thumbnail: {
                text: "Example 1",
                color: "#dd92d3",
            },
        },
        {
            id: "Example 2",
            thumbnail: {
                text: "Example 2",
                color: "#ba84d4",
            },
        },
        {
            id: "Example 3",
            thumbnail: {
                text: "Example 3",
                color: "#8e78d3",
            },
        },
        {
            id: "Example 4",
            thumbnail: {
                text: "Example 4",
                color: "#516fd0",
            },
        },
    ],
};
