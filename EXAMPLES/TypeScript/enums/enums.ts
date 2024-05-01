// TypeScript assings a value to every element of the enum
enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const orderStatus = OrderStatus.PENDING;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

console.log(isDelivered(orderStatus)); // false
console.log(isDelivered(OrderStatus.DELIVERED)); // true
