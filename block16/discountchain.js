// Workshop : Discount Chain.
const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}


//refill total  $ per for customer
function calculateRefillTotal(customer) {
  return customer.pricePerRefill * customer.refills;
}
console.log(calculateRefillTotal(rocky));
console.log(calculateRefillTotal(sarah));
console.log(calculateRefillTotal(timmy));


// 25% discount if customer has subscription 
function applySubscriptionDiscount(refillTotal, hasSubscription) {
  if (hasSubscription)  {
      return refillTotal * 0.75; // 25% discount....
  }
  return ( sarah.subscription, calculateRefillTotal(sarah) * 0.75);
}
//printing out
console.log('Sarah => Your grand total is: ',applySubscriptionDiscount(sarah));


//$10 dollars coupon if the customer has
function applyCouponDiscount(refillTotal, hasCoupon) {
  if (hasCoupon) {
    return refillTotal - 10; //-$10 coupon....
  }
  return (timmy.coupon, calculateRefillTotal(timmy) - 10);
}
//printing out
console.log("Timmy => Your grand total is: " , applyCouponDiscount(timmy));
























