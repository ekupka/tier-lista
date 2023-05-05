import { createContext } from "react";
import { defaultTierList } from "@/constants";
import { ItemProps, TierListProps } from "@/types";

export const TierListContext = createContext<{
    tierList: TierListProps;
    moveItem: (itemId: string, rowId: string) => void;
    createItem: (item: ItemProps) => void;
    moveRow: (from: number, to: number) => void;
}>({
    tierList: defaultTierList as TierListProps,
    moveItem: () => {},
    createItem: () => {},
    moveRow: () => {},
});
