import React, { useState } from "react";
import { TextField, Modal, Box, Button } from "@mui/material"
import { IInventory } from "../redux/models/inventory";
import CloseIcon from '@mui/icons-material/Close';
import { fields } from "../helpers";
import * as styles from '../helpers/styles'
import '../css/edit-modal.css'

type ModalProps = {
    title: string,
    open: boolean,
    handleClose: () => any,
    handleSave: (item: IInventory) => any,
    item: IInventory
}

const EditModal: React.FC<ModalProps> = ({ title, handleClose, open, handleSave, item } : ModalProps) => {
  const [ localItem, setLocalItem ] = useState<IInventory>(item)

  const handleChange = (fieldName: string, value: any) => [
      setLocalItem((localItem: IInventory) => ({ ...localItem, [fieldName]: value }))
  ]

  return <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={styles.modalStyles}>
      <CloseIcon
        onClick={() => handleClose()}
        style={{ color: '#9ACD32', fontSize: '30px', float: 'right', cursor: 'pointer' }}
      />
      <div className="edit-title">
        Edit product
      </div>
      <div className="edit-description">
        {title}
      </div>
      <div className="edit-container">
      {
        fields.map((field, idx) => {
          return <div>
            <div className="edit-label">{field.name}</div>
            <TextField
              variant="standard"
              name={field.name}
              size="small"
              style={{ marginTop: '12px' }}
              inputProps={{
                style: styles.textInputStyles().textField
              }}
              InputProps={{
                disableUnderline: true
              }}
              value={localItem[field.name as ('category' | 'price' | 'value' | 'name')]}
              type={idx === 0 ? "text" : "number"}
              placeholder={localItem[field.name as ('category' | 'price' | 'value' | 'name')] || field.placeholder}
              onChange={evt => handleChange(field.name, evt.target.value)}
          />
        </div>
        })
      }
      </div>
      <div className="edit-action-btn">
        <Button
          onClick={() => handleClose()}
          style={{ color: '#9ACD32', textTransform: 'capitalize' }}>
          Cancel
        </Button>
        <Button
          onClick={() => handleSave(localItem)}
          style={{ textTransform: 'capitalize' }}
        >
            Save
        </Button>
      </div>
    </Box>
  </Modal>
}

export default EditModal