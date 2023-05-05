import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TierList } from "@/components";
import { TierListProvider } from "@/context";

function App() {
    return (
        <DndProvider backend={HTML5Backend}>
            <TierListProvider>
                <TierList />
            </TierListProvider>
        </DndProvider>
    );
}

export default App;
