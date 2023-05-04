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
  color: Color;
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
        color: Color;
      };
      items: [
        {
          thumbnail: {
            text: string;
            color: Color;
          };
        }
      ];
    }
  ];
  bench: [
    {
      thumbnail: {
        text: string;
        color: Color;
      };
    }
  ];
};

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;
