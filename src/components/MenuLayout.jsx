import React from 'react';
import MenuCell from '../components/MenuCell';
import { lastOrders } from '../data';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

const MenuLayout = () => {

  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([0, 1, 2, 3]);
  const [right, setRight] = React.useState([4, 5, 6, 7]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

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

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const customList = (items) => (
    <Paper sx={{ width: 400, height: 230, overflow: 'auto' }}>
      <List dense component="div" role="list">
        {items.map((value) => {
          const labelId = `transfer-list-item-${value}-label`;

          return (
            <ListItem
              key={value}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`List item ${value + 1}`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );

  return (
    <>
      <div className="manageBoxContainer">
        <h3>Menu Layout</h3>
        <div className="manageBoxLayout gridThreeColumn">
          <div className="leftMenu ">
            <h4>All Items</h4>
            <div className="manageSlides menuLayoutSlides">
              <MenuCell name={lastOrders[0].name} price={lastOrders[0].price} image={lastOrders[0].image}/>
              <MenuCell name={lastOrders[0].name} price={lastOrders[0].price} image={lastOrders[0].image}/>
              <MenuCell name={lastOrders[0].name} price={lastOrders[0].price} image={lastOrders[0].image}/>
              <MenuCell name={lastOrders[0].name} price={lastOrders[0].price} image={lastOrders[0].image}/>
              <MenuCell name={lastOrders[0].name} price={lastOrders[0].price} image={lastOrders[0].image}/>
              <MenuCell name={lastOrders[0].name} price={lastOrders[0].price} image={lastOrders[0].image}/>
              <MenuCell name={lastOrders[0].name} price={lastOrders[0].price} image={lastOrders[0].image}/>
            </div>
          </div>
          <div className="buttons listButtons">
            <button className='listButton'>&#62;&#62;</button>
            <button className='listButton'>&#62;</button>
            <button className='listButton'>&#60;</button>
            <button className='listButton'>&#60;&#60;</button>
          </div>
          <div className="rigthMenu">
            <h4>Menu Items</h4>
            <div className="manageSlides menuLayoutSlides">
              <MenuCell name={lastOrders[0].name} price={lastOrders[0].price} image={lastOrders[0].image}/>
              <MenuCell name={lastOrders[0].name} price={lastOrders[0].price} image={lastOrders[0].image}/>
              <MenuCell name={lastOrders[0].name} price={lastOrders[0].price} image={lastOrders[0].image}/>
              <MenuCell name={lastOrders[0].name} price={lastOrders[0].price} image={lastOrders[0].image}/>
              <MenuCell name={lastOrders[0].name} price={lastOrders[0].price} image={lastOrders[0].image}/>
              <MenuCell name={lastOrders[0].name} price={lastOrders[0].price} image={lastOrders[0].image}/>
              <MenuCell name={lastOrders[0].name} price={lastOrders[0].price} image={lastOrders[0].image}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuLayout