import React from 'react';
import './Body.css';
import ProductCard  from '../ProductCard/ProductCard.jsx';

const products = [

    {id: '1', title: 'Двигатель f16 d3', price: 'Не указана', description: 'Chevrolet Lacetti'},
    {id: '2', title: 'Двигатель A15MF', price: 'Не указана', description: 'Daewoo Nexia'},
    {id: '3', title: 'Двигатель  K7JA710', price: 'Не указана', description: 'Renault Logan'},
    {id: '4', title: 'Двигатель A16DMS', price: 'Не указана', description: 'Daewoo Nubira'},
    {id: '5', title: 'Двигатель B15D2', price: 'Не указана', description: 'Chevrolet Cobalt'},
    {id: '6', title: 'Двигатель A08S3', price: 'Не указана', description: 'Daewoo Matiz'},
    {id: '7', title: 'Двигатель KF', price: 'Не указана', description: 'Mazda Xedos 6'},
    {id: '8', title: 'Двигатель JL4G18', price: 'Не указана', description: 'Geely'},
    {id: '9', title: 'Двигатель K4MD812', price: 'Не указана', description: 'Renault Megane 2'},
    {id: '10', title: 'Двигатель 1.4 kfv', price: 'Не указана', description: 'Citroen c3'},
    {id: '11', title: 'Двигатель 1.6, G4FC', price: 'Не указана', description: 'Hyundai/Kia'},
    {id: '12', title: 'Двигатель G4EC 1.5', price: 'Не указана', description: 'Hyundai Accent'},
    {id: '13', title: 'Двигатель 1.6 NFU', price: 'Не указана', description: 'Peugeot 206'},
    {id: '14', title: 'Двигатель 1.6 GL  G4ED', price: 'Не указана', description: 'Hyundai Elantra'},
    {id: '15', title: 'Двигатель A15SMS', price: 'Не указана', description: 'Chevrolet Lanos'},
    {id: '16', title: 'Двигатель MR7151A 1.5', price: 'Не указана', description: 'Geely ck1'},
    {id: '17', title: 'Двигатель F18 D3', price: 'Не указана', description: 'Chevrolet Lacetti'},
    {id: '18', title: 'Двигатель 405змз евро 2', price: 'Не указана', description: 'газель,соболь,волга'},
    {id: '19', title: 'Двигатель 406 инжектор', price: 'Не указана', description: 'волга'},
    {id: '20', title: 'Двигатель 1.6 8кл', price: 'Не указана', description: 'калина,гранта'},
    {id: '21', title: 'Двигатель 1.5 8 кл', price: 'Не указана', description: 'ваз 2114-2115'},
    {id: '22', title: 'Двигатель 1.5 16 кл', price: 'Не указана', description: 'ваз 2110-2112'},
    {id: '23', title: 'Двигатель 1.6 16 кл 124', price: 'Не указана', description: 'ваз 2110-2111'},
    {id: '24', title: 'Двигатель 402 карбюратор', price: 'Не указана', description: 'волга 21029'},
    {id: '25', title: 'Двигатель 1.5 инжектор', price: 'Не указана', description: 'ваз 2107 '},
    {id: '26', title: 'Двигатель 1.6 карбюратор', price: 'Не указана', description: 'ваз 2106'},
    {id: '27', title: 'Двигатель 1.7 инжектор', price: 'Не указана', description: 'chevrolet niva'},

]


const Body = () => {

    return (
        
        <div className="Body">
           
           
        
            {products.map(item => (
                <ProductCard
                    product={item}
                    
                    className={'item'}
                />
            ))}
        
    
            
            
        </div>
        
    );
}

export default Body;