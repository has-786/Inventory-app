import React from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import { IconButton } from "@mui/material";
import { iconStyles } from '../helpers/styles'
import '../css/card.css'

type CardProps = {
    title: string,
    value: number,
    idx: number
}

const Card: React.FC<CardProps> = ({ title, value, idx }) => {
    return <div className="card-container">
        <div>
          <IconButton>
            {idx === 0 && <ShoppingCartIcon style={iconStyles} />}
            {idx === 1 && <CurrencyExchangeIcon style={iconStyles}/>}
            {idx === 2 && <RemoveShoppingCartIcon style={iconStyles}/>}
            {idx === 3 && <CategoryIcon style={iconStyles}/>}
          </IconButton>
        </div>
        <div className="card-data">
            <div className="card-title">{title}</div>
            <div className="card-value">{value}</div>
        </div>
    </div>
}

export default Card