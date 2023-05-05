import { defaultTierList } from "@/constants";
import { indexOf, remove, set } from "lodash";
import { ItemProps, TierListProps } from "@/types";
import { ReactNode, useState } from "react";
import { TierListContext } from "@/context";

export const TierListProvider = ({ children }: { children: ReactNode }) => {
    const [tierListData, setTierListData] = useState<TierListProps>(defaultTierList as TierListProps);

    const moveRow = (originalIndex: number, destinationIndex: number) => {
        setTierListData((tierList) => {
            if (destinationIndex < 0 || destinationIndex > tierList.rows.length - 1) return tierList;
            console.log("moveRow", { originalIndex, destinationIndex });

            const newRows = [...tierList.rows];
            const row = tierList.rows[originalIndex];
            newRows.splice(originalIndex, 1);
            newRows.splice(destinationIndex, 0, row);

            return { ...tierList, rows: newRows } as TierListProps;
        });
    };

    const moveItem = (itemId: string, rowId: string) => {
        console.log("moveItem", { itemId, rowId });

        setTierListData((tierList) => {
            let item = tierList.bench.find((item) => item.thumbnail.text === itemId);
            let prevRow: "bench" | number = "bench";
            if (item === undefined)
                tierList.rows.forEach((row, index) => {
                    const rowItem = row.items.find((item) => item.thumbnail.text === itemId);
                    if (rowItem) {
                        item = rowItem;
                        prevRow = index;
                    }
                });

            if (!item) return tierList;

            const newTierList = { ...tierList };

            if (prevRow === "bench") remove(newTierList.bench, (item) => item.thumbnail.text === itemId);
            else remove(newTierList.rows[prevRow].items, (item) => item.thumbnail.text === itemId);

            if (rowId === "bench") newTierList.bench.push(item);
            else {
                const rowIndex = indexOf(
                    newTierList.rows,
                    newTierList.rows.find((row) => row.thumbnail.text === rowId)
                );
                set(newTierList, ["rows", rowIndex, "items"], [...(newTierList.rows.at(rowIndex)?.items || []), item]);
            }
            return newTierList;
        });
    };

    const createItem = (item: ItemProps) => {
        console.log("createItem", { item });

        setTierListData((tierList) => {
            const newBench = [...tierList.bench, item];
            return { ...tierList, bench: newBench } as TierListProps;
        });
    };

    return (
        <TierListContext.Provider value={{ tierList: tierListData, moveItem, createItem, moveRow }}>
            {children}
        </TierListContext.Provider>
    );
};
