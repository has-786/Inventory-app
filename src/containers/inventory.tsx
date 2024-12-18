import { connect } from "react-redux";
import { Dispatch } from "react";
import { RootState } from "../redux/reducers/rootReducer";
import { fetchInventoryRequest, updateInventory, removeInventory } from "../redux/actions/inventoryActions";
import Inventory from "../components/inventory";
import { IInventory } from "../redux/models/inventory";
import { DispatchType } from "../redux/types/types";

function mapStateToProps(state: RootState) {
    return {
        inventoryItems: state.inventory.inventory,
        isRequesting: state.inventory.pending
    }
}

function mapDispatchToProps(dispatch: Dispatch<DispatchType>){
    return {
        fetchInventory: () => dispatch(fetchInventoryRequest()),
        updateInventory: (inventory: IInventory, idx: number) => dispatch(updateInventory({inventory, idx})),
        removeInventory: (idx: number) => dispatch(removeInventory({ idx }))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory)