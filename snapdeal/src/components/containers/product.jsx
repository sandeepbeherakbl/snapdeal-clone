import { useDispatch, useSelector } from "react-redux"
import { Category } from "./category"
import "./product.css"
import axios from "axios";
import { useEffect , useState} from "react";
import { setProduct } from "../redux/action/action";
import Button from '@mui/material/Button';
// import { useNavigate } from "react-router-dom";


export const Product = () => {

    // const Navigate = useNavigate()
    const products = useSelector((state) => state.allreducer.product)

    // const handelchange = (id) =>{
    //     Navigate(`/product/${id}`)
    // }

    

    const Renderlist = products.map((product) => {
        const { id, titel, image, price, } = product;
        return (
            <div className="proddiv" key={id}>
                <div className="prod_image">
                    <img src={image} />
                </div>
                <div className="cnt">
                    <p>{titel}</p>
                    <p>{price}</p>
                </div>
                <Button variant="contained" disableElevation
                    style={{
                        "backgroundColor": "#e40046",
                        "color": "white",
                        "textDecoration": "none"
                    }}
                    onClick={()=> {handelchange(id)}}
                >
                    VIEW MORE
                </Button>
                <Button variant="contained" disableElevation
                    style={{
                        "backgroundColor": "#e40046",
                        "color": "white",
                        "textDecoration": "none",
                        "marginLeft": "20px"
                    }}
                    onClick={() => dispatch({type:'ADD_TO_CART', payload:{product}})}

                >
                    ADD TO CART
                </Button>
            </div>
        )
    })

    const [item , setItem] = useState(Renderlist)
    const filteritem = (catitem) => {
        const updatedItems = Renderlist.filter((curElem) => {
            return curElem.category === catitem;
        });
        setItem(updatedItems)
    }

    const dispatch = useDispatch();

    const fetchproduct = async (term) => {
        const response = await axios
            .get("http://localhost:3004/products")
            .catch((err) => {
                console.log(err)
            });
        dispatch(setProduct(response.data));
    }

    useEffect(() => {
        fetchproduct();
    }, []);

    // console.log(products)
    return (
        <>
            <div className="prod_maindic">
                <Category />
                
                <button onClick={() => filteritem('1')}> men </button>

                <div className="allprod">
                    <div className="products">
                        <p>Trending Products</p>

                        <div className="prod_gallery">
                            {Renderlist}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

