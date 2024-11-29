import { CartItemDTO } from '@/shared/services/dto/cart.dto';
import React from 'react';

interface Props {
  orderId: number;
  items: CartItemDTO[];
}

export const OrderSuccessTemplate: React.FC<Props> = ({ orderId, items }) => (
  <div>
    <h1>Thank you for your purchase! 🎉</h1>

    <p>Your order #{orderId} payed. List:</p>

    <hr />

    <ul>
      {items.map((item) => (
        <li key={item.id} className="flex items-center gap-4 mb-4">
          {/* Фото продукта */}
          <img
            src={item.productItem.product.imageUrl}
            alt={item.productItem.product.name}
            className="w-16 h-16 object-cover rounded"
          />

          {/* Информация о продукте */}
          <div>
            <p className="font-bold">{item.productItem.product.name}</p>
            <p>
              {item.productItem.price} ₽ x {item.quantity} шт. ={' '}
              {item.productItem.price * item.quantity} ₽
            </p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
