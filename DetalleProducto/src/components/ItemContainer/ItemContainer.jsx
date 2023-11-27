import React from 'react';
import Item from '../Item/Item';

export default function ItemContainer() {
  const productArray = [
    { title: "Libro", description: "Harry James Potter [JÁ-ri DCHÉIMS PÓ-ter] (pronunciación inglesa) (n. el 31 de julio de 1980), es un mago de sangre mestiza y el único hijo de James y Lily Potter. Es la única persona conocida que ha sobrevivido a la maldición de Avada Kedavra, haciéndolo en dos ocasiones.", price: "$15.000", stock: "48.000",thumbnail:"https://www.penguinlibros.com/es/2960115-home_default/harry-potter-y-la-piedra-filosofal-edicion-especial-limitada-por-el-25-aniversario-harry-potter-1.jpg" }
    ];

  return (
    <div>
      {productArray.map((product) => (
        <Item key={product.title} title={product.title} description={product.description} price={product.price} stock={product.stock} imagen={product.thumbnail} />
      ))}
    </div>
  );
}