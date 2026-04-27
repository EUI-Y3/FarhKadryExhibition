import React, { useState, useEffect } from 'react';
import Navitem from '../common/navitem';
import { supabase } from './../../supabase';
import './nav.css';

const Navigation = () => {
    const [navItems, setNavItems] = useState([]);

    useEffect(() => {
        const getNavItems = async () => {
            const { data } = await supabase
                .from('navigation')
                .select('*');

            setNavItems(data || []);
        };

        getNavItems();
    }, []);

    return (
        <ul>
            {navItems.map((item) => (
                <Navitem
                    key={item.id}
                    style1="asideNav"
                    title={item.name}
                    link={item.link}
                />
            ))}
        </ul>
    );
};

export default Navigation;