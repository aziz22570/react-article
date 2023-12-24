import PropTypes from 'prop-types';
const Product = ({children,onDeleteProduct,id}) => {
  return (
    <>
    <div className="my-4">
      <div className="card bg-light mb-3">
        {children}
      </div>
      <div className="btn btn-light" onClick={()=> onDeleteProduct(id)}>Delect</div>
    </div>

    </>
  )
};
Product.prototype = {
  label: PropTypes.string, 
  price: PropTypes.number
}
Product.defaultProps = {
  label: "My product",
  price: 0
}

export default Product