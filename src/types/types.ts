export type ItemProps = {
    id: string;
    thumbnail: ThumbnailProps;
};

export type RowProps = {
    id: string;
    name: string;
    thumbnail: ThumbnailProps;
    items: ItemProps[];
};

export type ThumbnailProps = {
    text: string;
    color?: Color;
    image?: string;
};

export type TierListProps = {
    rows: RowProps[];
    bench: ItemProps[];
};

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;
