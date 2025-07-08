import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './redux'

const Products = (props) => {

    // for basic 
    // const { productsData, fetchProducts } = props;
    // const { products, loading, error } = productsData;

    // using hooks
    const { products, loading, error } = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        // fetchProducts();
        dispatch(fetchProducts());
    }, [])


    return (
        <div className="flex flex-col h-screen">
            {loading && <span className='flex justify-center items-center h-screen'>Loading.....</span>}
            {error && <span>{error}</span>}
            {
                products &&
                <div className='my-5 mx-10 flex flex-col flex-wrap'>
                    {products?.map((item) => (
                        <div
                            className='w-full my-4 py-3 px-3 flex flex-row bg-[#E1E1E1] rounded-md drop-shadow-md drop-shadow-[#191919] hover:drop-shadow-xl hover:drop-shadow-[#191919] transition-all duration-300 ease-in-out'
                            key={item.id}
                        >
                            <span className='border-r border-[#191919] pr-2'>{item.id}</span>
                            <div
                                className='pl-2 flex flex-col'
                            >
                                <span>-{item.title}</span>
                                <span>-{item.price}</span>
                                <span>-{item.category}</span>
                                <span>-{item.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

// using hook use below export
export default Products;


// using basic approach use below methods
// const mapStateToProps = (state) => {
//     return {
//         productsData: state.product
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchProducts: () => dispatch(fetchProducts())
//     }
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Products);
