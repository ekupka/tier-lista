import { createContext } from "react";
import { Color, ItemProps, TierListObject } from "./types";
import { defaultTierList } from "./constants";

type TierListContextProps = {
    tierList: TierListObject;
    moveItem: (itemId: string, rowId: string) => void;
    createItem: (item: ItemProps) => void;
    moveRow: (from: number, to: number) => void;
};

const TierListContext = createContext<TierListContextProps>({
    tierList: defaultTierList as TierListObject,
    moveItem: () => {},
    createItem: () => {},
    moveRow: () => {},
});

export default TierListContext;
