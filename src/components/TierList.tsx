import { Item, NewItemDialog, Row, Thumbnail } from "@/components";
import { ItemProps, RowProps } from "@/types";
import { TierListContext } from "@/context";
import { useCallback, useContext, useState } from "react";
import "@/styles/App.css";

export const TierList = () => {
    const { tierList, createItem, moveRow } = useContext(TierListContext);
    const [showCreateItemDialog, setShowCreateItemDialog] = useState(false);

    const handleNewItemClick = () => {
        setShowCreateItemDialog(true);
    };

    const handleCreateItem = (item: ItemProps) => {
        createItem(item);
        setShowCreateItemDialog(false);
    };

    const renderRow = useCallback(
        ({ row, index }: { row: RowProps; index: number }) => (
            <Row
                key={row.thumbnail.text}
                index={index}
                id={row.thumbnail.text}
                thumbnail={<Thumbnail {...row.thumbnail} />}
            >
                <div style={{ display: "flex", flex: 1 }}>
                    {row.items.map((item) => {
                        return <Item key={item.thumbnail.text} id={item.thumbnail.text} thumbnail={item.thumbnail} />;
                    })}
                </div>
                <div className="row-footer">
                    <div onClick={() => moveRow(index, index - 1)}>/\</div>
                    <div>Move</div>
                    <div onClick={() => moveRow(index, index + 1)}>\/</div>
                </div>
            </Row>
        ),
        [tierList]
    );

    return (
        <>
            {showCreateItemDialog && (
                <NewItemDialog onClose={() => setShowCreateItemDialog(false)} callback={handleCreateItem} />
            )}
            <div style={{ display: "flex" }}>
                <button onClick={handleNewItemClick}>New Item</button>
            </div>
            <div className="row-container">{tierList.rows.map((row, index) => renderRow({ row, index }))}</div>
            <div className="row-container">
                <Row key="bench" id="bench" thumbnail={<></>}>
                    {tierList.bench.map((item) => {
                        return <Item key={item.thumbnail.text} id={item.thumbnail.text} thumbnail={item.thumbnail} />;
                    })}
                </Row>
            </div>
        </>
    );
};
export { TierListContext };
