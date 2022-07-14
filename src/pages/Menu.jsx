import React from 'react'
import Header from '../components/Header'
import MenuCell from '../components/MenuCell'
import {menuArray} from '../data.js'
import { FaPlus } from 'react-icons/fa';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

const Menu = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClick = () => {
        console.log('Hello');
    }

    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
        newChecked.push(value);
        } else {
        newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

  return (
    <>
        <Header itemOn={3} />
        <div className="menuContainer">
            <div className="dishContainer">
                <div className="titleDish">
                    <h5>Create New Dish</h5>
                    <FaPlus id='addDishBtn' onClick={handleClick} />
                </div>
                <div className="dishSlides manageSlides" id='dishScroll'>
                    {
                        menuArray.map((item, index) => {
                            return <MenuCell name={menuArray[index].name} price={menuArray[index].price} image={menuArray[index].image} key={index}/>;
                        })
                    }
                </div>
            </div>
            <div className="infoDish">
                <div className="titleInfo">
                    <h5>Dish Info</h5>
                </div>
                <div id='imageDish'></div>
                <div className='inputDishArea'>
                    <TextField id="titleDishName" label="" variant="outlined" placeholder='Title Dish' />
                    <textarea name="description" id="" cols="30" rows="5" placeholder='description'></textarea>
                    <List dense sx={{ width: '25%', maxWidth: 360 }}>
                        {[0, 1, 2, 3].map((value) => {
                            const labelId = `checkbox-list-secondary-label-${value}`;
                            return (
                            <ListItem key={value} secondaryAction={
                                <Checkbox
                                    edge="end"
                                    onChange={handleToggle(value)}
                                    checked={checked.indexOf(value) !== -1}
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                                } disablePadding>
                                <ListItemButton>
                                    <ListItemText id={labelId} primary={`item ${value + 1}`} />
                                </ListItemButton>
                            </ListItem>
                            );
                        })}
                    </List>
                    <FormControl sx={{ m: 1, minWidth: 80 }} id="typeDishMenu">
                        <Select labelId="demo-simple-select-autowidth-label" id="demo-simple-select-autowidth" value={age} onChange={handleChange} autoWidth>
                            <MenuItem value={1}>Soup</MenuItem>
                            <MenuItem value={2}>Appetizer</MenuItem>
                            <MenuItem value={3}>Salad</MenuItem>
                            <MenuItem value={4}>Main Course</MenuItem>
                            <MenuItem value={5}>Dessert</MenuItem>
                            <MenuItem value="other"><em>Other</em></MenuItem>
                        </Select>
                    </FormControl>
                    <TextField id="priceDish" label="" variant="outlined" placeholder='Price' />
                    <button id='createDishBtn'>Create Dish</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Menu