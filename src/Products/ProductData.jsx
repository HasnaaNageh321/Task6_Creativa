import React, { useState } from 'react';
import './styleProducts.css';

function ProductData() {
    const [items, setItems] = useState([
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1593998066526-65fcab3021a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
            name: "State of mind watch",
            price: 1960,
            description: "The state of mind is lorem There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable",
            category: "Watches",
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            name: "Nike red Shoes",
            price: 1360,
            description: "Nike red Shoes is lorem There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
            category: "Shoes",
        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            name: "JBL Black Headphone",
            price: 880,
            description: "JBL Black Headphone is lorem There are many variations of passages of Lorem Ipsum available.",
            category: "Electronics",
        },
        {
            id: 4,
            img: "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
            name: "RB Black Glass",
            price: 533,
            description: "RB Black Glass is lorem There are many variations of passages of Lorem Ipsum available, if you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
            category: "Glasses",
        },
        {
            id: 5,
            img: "https://images.unsplash.com/photo-1507764923504-cd90bf7da772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
            name: "Apple MacBook Pro laptop",
            price: 19600,
            description: "Apple MacBook Pro laptop is lorem if you are going to use a passage of Lorem Ipsum, but the majority have suffered alteration in some form you need to be sure there isn't anything.",
            category: "Electronics",
        }
    ]);

    const addItem = () => {
        setItems([...items, {
            id: items.length + 1,
            img: "https://via.placeholder.com/150",
            name: `New Item ${items.length + 1}`,
            price: Math.floor(Math.random() * 1000) + 100,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus ipsum ac lectus tincidunt, et commodo velit bibendum. Nulla facilisi. Sed id tincidunt ligula, in ultricies neque.",
            category: "Uncategorized",
        }]);
    };

    return (
        <div className="container">
            <ul className="cards">
                {items.map((item) => (
                    <li key={item.id} className="carding">
                        <img src={item.img} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p className="Price">${item.price}</p>
                        <p>{item.description}</p>
                        <p>{item.category}</p>
                    </li>
                ))}
            </ul>
            <button className='btn btn-primary' onClick={addItem}>Add Item</button>
        </div>
    );
}

export default ProductData;
