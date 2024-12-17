import React, { useEffect, useState } from "react"
import { IInventory } from "../redux/models/inventory"
import Card from "./card"
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

import '../App.css'
import EditModal from "./editModal";

type InventoryProps = {
    inventoryItems: IInventory[],
    fetchInventory: () => any,
    updateInventory: (item: IInventory, idx: number) => any,
    removeInventory: (idx: number) => any,
}

const Inventory: React.FC<InventoryProps> = ({ inventoryItems, fetchInventory, updateInventory, removeInventory }) => {
    console.log('inventoryItems', inventoryItems)
    const [ openEditModal, setOpenEditModal ] = useState(false)
    const [ editItemIdx, setEditItemIdx ] = useState(-1)
    const [ isAdmin, setAdmin ] = useState(true)
    const totalProduct = inventoryItems.length,
    outOfStock = inventoryItems.filter(i => i.quantity === 0).length,
    totalStoreValue = 2, //inventoryItems.reduce((a, b) => a.value + b.value, 0),
    numCategory = [ ...new Set(inventoryItems.map(i => i.category)) ].length
    useEffect(() => {
        fetchInventory()
    }, [])

    const editClicked = (idx: number) => {
        setOpenEditModal(true)
        setEditItemIdx(idx)
    }
    const hideClicked = (idx: number) => {
        console.log('hide', idx)

        const item = inventoryItems[idx]
        updateInventory({ ...item, disabled: !item.disabled }, idx)
        // write logic to update the item in redux
    }
    const removeClicked = (idx: number) => {
        console.log('remove', idx)

        removeInventory(idx)
        // write logic to remove the item in redux
    }

    const performEdit = (item: IInventory) => {
        console.log('will dispatch some action to update', item, editItemIdx)
        // write logic to update the item in redux
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

    return (<div className="main">
        <div className="header">
            <div style={{ float: 'right', display: 'flex', justifyContent: 'space-between', gap: '4px', }}>
                <div>admin</div>
                {isAdmin && <ToggleOffIcon onClick={() => setAdmin(isAdmin => !isAdmin)} style={{ color: 'grey', fontSize: '40px', marginTop: '-7px' }}/>}
                {!isAdmin && <ToggleOnIcon onClick={() => setAdmin(isAdmin => !isAdmin)} style={{ color: 'yellowgreen' , fontSize: '40px', marginTop: '-7px' }}/>}
                <div>user</div>
            </div>
        </div>
        <div className="app-title">Inventory stats</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '16px 0' }}>
        {
            cardItems.map((item, idx) => {
                return <Card title={item.title} value={item.value} idx={idx} />
            })
        }
        </div>
        <div className="container">
            <div className="row">
                    <div className="item">
                        <div className="item-headers-text">Name</div>
                    </div>
                    <div className="item">
                        <div className="item-headers-text">Category</div>
                    </div>
                    <div className="item">
                        <div className="item-headers-text">Price</div>
                    </div>
                    <div className="item">
                        <div className="item-headers-text">Quantity</div>
                    </div>
                    <div className="item">
                        <div className="item-headers-text">Value</div>
                    </div>
                    <div className="item">
                        <div className="item-headers-text" >ACTION</div>
                    </div>
                </div>
        {
            inventoryItems.map((item: IInventory, idx: number) => {
                return <div className="row" style={{ opacity: item.disabled ? 0.5 : 1 }}>
                    <div className="item">
                        <div className="item-text">{item.name}</div>
                    </div>
                    <div className="item">
                        <div className="item-text">{item.category}</div>
                    </div>
                    <div className="item">
                        <div className="item-text">{item.price}</div>
                    </div>
                    <div className="item">
                        <div className="item-text">{item.quantity}</div>
                    </div>
                    <div className="item">
                        <div className="item-text">{item.value}</div>
                    </div>
                    <div className="item" style={{ pointerEvents: !isAdmin ? 'none' : 'all' }}>
                        <div className="item-text">
                            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff', gap: '8px', marginLeft: '-3px'}} >
                                <EditIcon style={{fontSize: '15px'}} onClick={() => editClicked(idx)} />
                                {!item.disabled && <VisibilityIcon style={{fontSize: '15px'}} onClick={() => hideClicked(idx)} />}
                                {!!item.disabled && <VisibilityOffIcon style={{fontSize: '15px'}} onClick={() => hideClicked(idx)} />}
                                <DeleteIcon style={{fontSize: '15px'}} onClick={() => removeClicked(idx)} />
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
    </div>)
}

export default Inventory