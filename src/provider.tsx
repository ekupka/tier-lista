import React, { useState } from "react";
import { TierListContext } from "./TierList";
import { TierListObject } from "./types";
import { defaultTierList } from "./constants";
import { remove, set, indexOf } from "lodash";

const TierListProvider = ({ children }: { children: React.ReactNode }) => {
    const [tierListData, setTierListData] = useState<TierListObject>(defaultTierList as TierListObject);

    const moveItem = (itemId: string, rowId: string) => {
        console.log("shouldMove", { itemId, rowId });

        setTierListData((tierList) => {
            let item = tierList.bench.find((item) => item.thumbnail.text === itemId);

            if (item === undefined)
                tierList.rows.forEach((row) => {
                    const rowItem = row.items.find((item) => item.thumbnail.text === itemId);
                    if (rowItem) item = rowItem;
                });

            if (!item) return tierList;
            const newTierList = { ...tierList };
            remove(newTierList.bench, (item) => item.thumbnail.text === itemId);
            newTierList.rows.forEach((row, index) => {
                remove(newTierList.rows[index].items, (item) => item.thumbnail.text === itemId);
            });

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

    return <TierListContext.Provider value={{ tierList: tierListData, moveItem }}>{children}</TierListContext.Provider>;
};

export default TierListProvider;
