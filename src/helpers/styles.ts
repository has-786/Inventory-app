
const actionIconStyles = {
    fontSize: '15px',
    cursor: 'pointer'
}

const toggleIconStyle = {
    color: '#808080', fontSize: '40px', marginTop: '-7px', cursor: 'pointer'
}

const toggleOnIconStyle = {
    ...toggleIconStyle,
    color: '#9ACD32'
}

const editIconStyles = (isAdmin: boolean) => ({ ...actionIconStyles, color: !isAdmin ? '#808080' : '#90EE90' })
const viewIconStyles = (isAdmin: boolean) => ({ ...actionIconStyles, color: !isAdmin ? '#808080' : '#ADD8E6' })
const removeIconStyles = (isAdmin: boolean) => ({ ...actionIconStyles, color: !isAdmin ? '#808080' : '#ff3232' })

const modalStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '#323232',
  border: '1px solid #000',
  boxShadow: 24,
  borderRadius: '12px',
  color: '#fff',
  py: 2,
  px: 4
}

const iconStyles = { height: '30px', width: '30px', color: '#fff' }

const closeIconStyles = { color: '#9ACD32', fontSize: '30px', float: 'right' }

const modalCloseBtnStyles = { color: '#9ACD32', textTransform: 'capitalize' }

const modalSaveBtnStyles = { textTransform: 'capitalize' }

export {
    actionIconStyles,
    toggleIconStyle,
    toggleOnIconStyle,
    editIconStyles,
    viewIconStyles,
    removeIconStyles,
    modalStyles,
    iconStyles,
    closeIconStyles,
    modalCloseBtnStyles,
    modalSaveBtnStyles
}
