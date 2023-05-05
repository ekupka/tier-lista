import { Item, NewItemDialog, Row, Thumbnail } from "@/components";
import { ItemProps, RowProps } from "@/types";
import { TierListContext } from "@/context";
import { useContext, useState } from "react";
import { useDrop } from "react-dnd";
import "@/styles/App.css";

export const TierList = () => {
    const { tierList, createItem, moveRow } = useContext(TierListContext);
    const [showCreateItemDialog, setShowCreateItemDialog] = useState(false);

    const [, drop] = useDrop<RowProps>(() => ({
        accept: "row",
        drop: (item) => {
            const index = tierList.rows.indexOf(item);
            moveRow(index, index + 1);
        },
    }));

    const handleNewItemClick = () => {
        setShowCreateItemDialog(true);
    };

    const handleCreateItem = (item: ItemProps) => {
        createItem(item);
        setShowCreateItemDialog(false);
    };

    return (
        <>
            {showCreateItemDialog && (
                <NewItemDialog onClose={() => setShowCreateItemDialog(false)} callback={handleCreateItem} />
            )}
            <div style={{ display: "flex" }}>
                <button onClick={handleNewItemClick}>New Item</button>
            </div>
            <div className="row-container">
                {tierList.rows.map((row, index) => {
                    return (
                        <div key={row.thumbnail.text} ref={drop}>
                            <Row
                                key={row.thumbnail.text}
                                id={row.thumbnail.text}
                                thumbnail={<Thumbnail {...row.thumbnail} />}
                            >
                                {row.items.map((item) => {
                                    return (
                                        <Item
                                            key={item.thumbnail.text}
                                            id={item.thumbnail.text}
                                            thumbnail={item.thumbnail}
                                        />
                                    );
                                })}
                                <div className="row-footer">
                                    <button onClick={() => moveRow(index, index - 1)}>Move Up</button>
                                    <button onClick={() => moveRow(index, index + 1)}>Move Down</button>
                                </div>
                            </Row>
                        </div>
                    );
                })}
            </div>
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
