import React, { useState } from "react"
import { TextField, Modal, Box, Button } from "@mui/material"
import { IInventory } from "../redux/models/inventory";
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '#282c34',
  border: '1px solid #000',
  boxShadow: 24,
  borderRadius: '12px',
  color: '#fff',
  py: 2,
  px: 4
};


type ModalProps = {
    title: string,
    open: boolean,
    handleClose: () => any,
    handleSave: (item: IInventory) => any,
    item: IInventory
}

const EditModal: React.FC<ModalProps> = ({ title, handleClose, open, handleSave, item }) => {
  const [ localItem, setLocalItem ] = useState<IInventory>(item)
  const fields = [
    { name: 'category', placeholder: 'phone' },
    { name: 'price', placeholder: '50' },
    { name: 'quantity', placeholder: '0' },
    { name: 'value', placeholder: '0' }
  ]

  const handleChange = (fieldName: string, value: any) => [
      setLocalItem(localItem => ({ ...localItem, [fieldName]: value }))
  ]

    return <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
    <CloseIcon style={{ color: 'yellowgreen', fontSize: '30px', float: 'right' }} onClick={() => handleClose()} />

      <div style={{ color: '#fff', fontSize: '30px', fontFamily: 'sans-serif', marginTop: '16px' }}>
        <span>Edit product</span>
      </div>
      <div style={{ color: '#fff', fontSize: '15px', marginTop: '6px', fontFamily: 'sans-serif' }}>
        {title}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginTop: '30px' }}>
      {
        fields.map((field, idx) => {
          return <div>
            <div style={{ textTransform: 'capitalize', fontSize: '12px'}}>{field.name}</div>
            <TextField
              style={{ color: "#fff", height: '30px', marginBottom: '30px', marginTop: '8px', borderRadius: '12px' }}
              variant="outlined"
              margin="normal"
              name={field.name}
              value={localItem[field.name as ('category' | 'price' | 'value' | 'name')]}
              type={idx === 0 ? "text" : "number"}
              placeholder={localItem[field.name as ('category' | 'price' | 'value' | 'name')] || field.placeholder}
              onChange={evt => handleChange(field.name, evt.target.value)}
          />
        </div>
        })
      }
      </div>
      <div style={{ float: 'right', marginTop: '20px' }}>
        <Button onClick={() => handleClose()} style={{ color: 'yellowgreen' }}>Cancel</Button>
        <Button onClick={() => handleSave(localItem)}>Save</Button>
      </div>
    </Box>
  </Modal>
}

export default EditModal