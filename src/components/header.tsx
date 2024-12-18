import React from "react"
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import * as styles from '../helpers/styles'
import '../css/header.css'

type headerProps = {
    isAdmin: boolean,
    toggleAdmin: () => any
}

const Header : React.FC<headerProps> = ({ isAdmin, toggleAdmin }: headerProps) => {
    return <div className="header">
            <div className="toggle">
                <div className="toggle-text">admin</div>
                {isAdmin && <ToggleOffIcon onClick={toggleAdmin} style={styles.toggleIconStyle} />}
                {!isAdmin && <ToggleOnIcon onClick={toggleAdmin} style={styles.toggleOnIconStyle} />}
                <div className="toggle-text">user</div>
            </div>
        </div>
}

export default Header