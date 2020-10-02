// REACT+NEXT
import React, { Fragment, useContext, useState } from 'react';
import Link from 'next/link';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';;
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//CORE COMPONENTS
import Header from 'components/Header/Header.js';
import Button from 'components/CustomButtons/Button.js';
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js';
import HeaderLinks from "components/Header/HeaderLinks.js";


import styles from 'assets/jss/nextjs-material-kit/pages/componentsSections/navbarsStyle.js';


const useStyles = makeStyles(styles);


const Navbar = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<Header
				color='transparent'
				brandImage={<img id='logo' src='/img/SHL.png' alt='logo' className={classes.img} />}
				fixed
				changeColorOnScroll={{
					height: 400,
					color: 'white',
				}}
				rightLinks={
					<List className={classes.list}>
						<ListItem className={classes.listItem}>
							<Button href='/' className={classes.navLink} color='transparent'>
								Home
							</Button>
						</ListItem>
						<ListItem className={classes.listItem}>
							<Button href="/login" className={classes.navLink} color='primary' style={{color:"white"}}>
								Login
							</Button>
						</ListItem>
						<ListItem className={classes.listItem}>
						</ListItem>
					</List>
				}
			/>
		</Fragment>
	);
};

export default Navbar;
