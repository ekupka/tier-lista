export type ItemProps = {
    id: string;
    thumbnail: ThumbnailProps;
};

export type RowProps = {
    thumbnail: ThumbnailProps;
    children: ItemProps[];
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
                bg: Color;
            };
            items: [
                {
                    thumbnail: {
                        text: string;
                        bg: Color;
                    };
                }
            ];
        }
    ];
    bench: [
        {
            thumbnail: {
                text: string;
                bg: Color;
            };
        }
    ];
};

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;
