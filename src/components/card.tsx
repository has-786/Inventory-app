import React from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';import { IconButton } from "@mui/material";

type CardProps = {
    title: string,
    value: number,
    idx: number
}

const Card: React.FC<CardProps> = ({ title, value, idx }) => {
    return <div style={{ display: 'flex', color: '#fff', background: '#006a3c', padding: '12px', margin: '0 12px', width: '100%', borderRadius: '12px' }}>
        <div>
          <IconButton>
            {idx === 0 && <ShoppingCartIcon style={{ height: '30px', width: '30px', color: '#fff' }}/>}
            {idx === 1 && <CurrencyExchangeIcon style={{ height: '30px', width: '30px', color: '#fff' }}/>}
            {idx === 2 && <RemoveShoppingCartIcon style={{ height: '30px', width: '30px', color: '#fff' }}/>}
            {idx === 3 && <CategoryIcon style={{ height: '30px', width: '30px', color: '#fff' }}/>}
          </IconButton>
        </div>
        <div style={{ paddingLeft: '10px' }}>
            <div style={{ fontSize: '12px', marginTop: '10px' }}>{title}</div>
            <div style={{ fontSize: '40px', marginTop: '0px' }}>{value}</div>
        </div>
    </div>
}

export default Card