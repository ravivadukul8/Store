
const Price = ({price}) => {
  return Intl.NumberFormat('en-IN', { maximumSignificantDigits: 2 , style : "currency", currency: "INR"  }).format(price/100)
}

export default Price