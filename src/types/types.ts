export type ItemProps = {
    id: string;
    thumbnail: ThumbnailProps;
};

export type RowProps = {
    thumbnail: ThumbnailProps;
    items: ItemProps[];
};

export type ThumbnailProps = {
    text: string;
    bg: Color | string;
};

export type TierListProps = {
    rows: RowProps[];
    bench: ItemProps[];
};

export type TierListObject = {
    rows: [
        {
            thumbnail: {
                text: string;
                bg: Color | string;
            };
            items: [
                {
                    id: string;
                    thumbnail: {
                        text: string;
                        bg: Color | string;
                    };
                }
            ];
        }
    ];
    bench: [
        {
            id: string;
            thumbnail: {
                text: string;
                bg: Color | string;
            };
        }
    ];
};

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;
