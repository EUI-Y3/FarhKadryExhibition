import React, { useEffect, useState } from 'react';
import './categories.css';

import CategoryCard from '../components/common/categorycard';
import { supabase } from '../supabase';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const { data } = await supabase
                .from('categories')
                .select('*');

            setCategories(data || []);
        };

        fetchCategories();
    }, []);

    return (
        <>
            <div className="carousel-wrapper moveIn scrollAnimate">
                <div className="blurred_separator"></div>
                <div className="blurred_separator2"></div>

                <div className="carousel" id="carousel">
                    {categories.map((category) => (
                        <CategoryCard
                            key={category.id}
                            image={category.image}
                            title={category.title}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Categories;