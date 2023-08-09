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

// Total amount for each customer
function calculateTotalAmount(customer) {
  return customer.pricePerRefill * customer.refills;
}

// subscription discount applying
function applySubscriptionDiscount(totalAmount, customer) {
  if (customer.subscription) {
      return totalAmount * 0.75; // 25% discount apply
  }
  return totalAmount; // No discount
}

// coupon discount applying
function applyCouponDiscount(totalAmount, customer) {
  if (customer.coupon) {
      return totalAmount - 10; // -$10 coupon apply
  }
  return totalAmount; // No discount
}

// test for customer Timmy has coupon
const timmyTotalAmount = calculateTotalAmount(timmy);
const timmyWithCouponDiscount = applyCouponDiscount(timmyTotalAmount, timmy); 

// test for customer Sarah has subscription
const sarahTotalAmount = calculateTotalAmount(sarah);
const sarahWithSubscriptionDiscount = applySubscriptionDiscount(sarahTotalAmount, sarah);

// test for customer rocky who has coupon and subscription
const rockyTotalAmount = calculateTotalAmount(rocky);
const rockyWithSubscriptionDiscount = applySubscriptionDiscount(rockyTotalAmount, rocky);  
const rockyWithBothDiscounts = applyCouponDiscount(rockyWithSubscriptionDiscount, rocky);

// print and loggin for each customer
console.log("Sarah => Your grand total is: ", sarahWithSubscriptionDiscount); // 37.5
console.log("Timmy => Your grand total is: ", timmyWithCouponDiscount); // 65  
console.log("Rocky => Your grand total is: ", rockyWithBothDiscounts); // 102.5