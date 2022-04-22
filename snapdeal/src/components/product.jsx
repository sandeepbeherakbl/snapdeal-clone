import { Category } from "./category"
import "./product.css"
export const Product = () => {
    return (
        <>
            <div className="prod_maindic">
                <Category />

                <div className="allprod">
                    <div className="products">
                        <p>Trending Products</p>

                        <div className="prod_gallery">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}