import { useState } from "react";
import { Color, ItemProps } from "./types";
import { getRandomColor, getRandomInt } from "./utils";

export const NewItemDialog = ({ onClose, callback }: { onClose: () => void; callback: (item: ItemProps) => void }) => {
    const [name, setName] = useState(`${getRandomInt()}`);
    const [image, setImage] = useState(getRandomColor() as string);
    const [isImage, setIsImage] = useState(false);

    const handleUploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length >= 1) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                reader.result && setImage(reader.result as string);
            });
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    const onCreate = () => {
        if (name && image) {
            const item: ItemProps = {
                id: name,
                thumbnail: {
                    bg: image as Color,
                    text: name,
                },
            };
            callback(item);
        }
    };

    const handleSelectColor = (event: React.ChangeEvent<HTMLInputElement>) => {
        const color = event.target.value;
        setImage(color);
    };

    return (
        <dialog open>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <h3>New Item</h3>
                <input onChange={(e) => setName(e.target.value)} value={name} data-type="text" placeholder="Name" />
                <label>
                    <input type="checkbox" checked={isImage} onChange={() => setIsImage((old) => !old)} />
                    Imagem
                </label>

                {isImage ? (
                    <input
                        onChange={handleUploadImage}
                        type="file"
                        id="image-input"
                        accept="image/png, image/jpeg, image/jpg"
                    />
                ) : (
                    <label>
                        <input onChange={handleSelectColor} type="color" id="head" name="head" value={image} />
                        Color
                    </label>
                )}
                <div style={{ display: "flex", gap: "12px" }}>
                    <button onClick={onClose}>Cancel</button>
                    <button disabled={!image || !name} onClick={onCreate}>
                        Create
                    </button>
                </div>
            </div>
        </dialog>
    );
};
