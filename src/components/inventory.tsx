import React, { useEffect, useState } from "react"
import { IInventory } from "../redux/models/inventory"
import Card from "./card"
import Header from "./header";
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import EditModal from "./editModal";
import { getCardItems, headings } from "../helpers";
import * as styles from '../helpers/styles'
import '../css/inventory.css'
import { CircularProgress } from "@mui/material";

type InventoryProps = {
    isRequesting: boolean,
    inventoryItems: IInventory[],
    fetchInventory: () => any,
    updateInventory: (item: IInventory, idx: number) => any,
    removeInventory: (idx: number) => any,
}

const Inventory: React.FC<InventoryProps> = ({ isRequesting, inventoryItems, fetchInventory, updateInventory, removeInventory }) => {
    const [ openEditModal, setOpenEditModal ] = useState(false)
    const [ editItemIdx, setEditItemIdx ] = useState(-1)
    const [ isAdmin, setAdmin ] = useState(true)

    const { totalProduct, totalStoreValue, outOfStock, numCategory } = getCardItems(inventoryItems)
    
    useEffect(() => {
        fetchInventory()
    }, [])

    const editClicked = (idx: number) => {
        setOpenEditModal(true)
        setEditItemIdx(idx)
    }

    const hideClicked = (idx: number) => {
        const item = inventoryItems[idx]
        updateInventory({ ...item, disabled: !item.disabled }, idx)
    }

    const removeClicked = (idx: number) => {
        removeInventory(idx)
    }

    const performEdit = (item: IInventory) => {
        updateInventory(item, editItemIdx)
        setOpenEditModal(false)
        setEditItemIdx(-1)
    }

    const cardItems = [
        { title: 'Total product', value: totalProduct },
        { title: 'Total store value', value: totalStoreValue },
        { title: 'Out of stocks', value: outOfStock },
        { title: 'No of category', value: numCategory }
    ]

    const toggleAdmin = () => setAdmin((isAdmin: boolean) => !isAdmin)

    return (<div className="section">
    <Header toggleAdmin={toggleAdmin} isAdmin={isAdmin} />
    <div className="main">
        <div className="app-title">Inventory stats</div>
        <div className="cards">
            {cardItems.map((item, idx) => <Card title={item.title} value={item.value} idx={idx} />)}
        </div>
        <div className="container">
            <div className="row">
                {headings.map(item => <div className="item">
                        <div className="item-headers-text">{item}</div>
                    </div>)
                }
            </div>
            { !!isRequesting && !inventoryItems?.length && <div className="loader">
                <CircularProgress size="25px" />
            </div>}
            {!!inventoryItems?.length && inventoryItems.map((item: IInventory, idx: number) => {
                return <div className={["row", item.disabled ? "haze" : ''].join(' ')}>
                    <div className="item">
                        <div className="item-text">{item.name}</div>
                    </div>
                    <div className="item">
                        <div className="item-text">{item.category}</div>
                    </div>
                    <div className="item">
                        <div className="item-text">${item.price}</div>
                    </div>
                    <div className="item">
                        <div className="item-text">{item.quantity}</div>
                    </div>
                    <div className="item">
                        <div className="item-text">${item.value}</div>
                    </div>
                    <div className={["item", !isAdmin ? 'disabled' : '' ].join(' ')}>
                        <div className="item-text">
                            <div className="actions">
                                <EditIcon style={styles.editIconStyles(isAdmin)} onClick={() => editClicked(idx)} />
                                {!item.disabled && <VisibilityIcon style={styles.viewIconStyles(isAdmin)} onClick={() => hideClicked(idx)} />}
                                {!!item.disabled && <VisibilityOffIcon style={styles.viewIconStyles(isAdmin)} onClick={() => hideClicked(idx)} />}
                                <DeleteIcon style={styles.removeIconStyles(isAdmin)} onClick={() => removeClicked(idx)} />
                            </div>
                        </div>
                    </div>
                </div>
            })
        }
        {openEditModal && <EditModal 
            open={openEditModal}
            item={inventoryItems[editItemIdx]}
            handleClose={() => setOpenEditModal(false)}
            handleSave={(item: IInventory) => performEdit(item)}
            title={inventoryItems[editItemIdx].name}
        />}
        </div>
    </div>
    </div>)
}

export default Inventory