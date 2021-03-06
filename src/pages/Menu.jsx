import React from 'react'
import Header from '../components/Header'
import MenuCell from '../components/MenuCell'
import {menuArray} from '../data.js'
import { FaPlus } from 'react-icons/fa';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';

const Menu = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClick = () => {
        console.log('Hello');
    }

  return (
    <>
        <Header itemOn={3} />
        <div className="menuContainer">
            <div className="infoDish">
                <div className="titleInfo">
                    <h5>Dish Info</h5>
                </div>
                <div id='imageDish'>Upload Image</div>
                <div className='inputDishArea'>
                    <label htmlFor="" className='dishLabel'>Dish Title</label>
                    <TextField id="titleDishName" label="" variant="outlined"/>
                    <label htmlFor="" className='dishLabel'>Dish Description</label>
                    <textarea name="description" id="" cols="30" rows="5"></textarea>
                    <label htmlFor="" className='dishLabel'>Dish Type</label>
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
                    <label htmlFor="" className='dishLabel'>Dish Price</label>
                    <p>$</p><TextField id="priceDish" label="" variant="outlined"/>
                    <button id='createDishBtn'>Create Dish</button>
                </div>
            </div>
            <div className="dishContainer">
                <div className="titleDish">
                    <h5>Dish List</h5>
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
        </div>
    </>
  )
}

export default Menu