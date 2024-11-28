import React from 'react';

interface Props {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
}

export const PayOrderTemplate: React.FC<Props> = ({ orderId, totalAmount, paymentUrl }) => (
  <div>
    <h1>Order #{orderId}</h1>

    <p>
    Pay for the order in the amount of <b>{totalAmount} ₽</b>. Go to{' '}
      <a href={paymentUrl}>this link</a> for payment order.
    </p>
  </div>
);
