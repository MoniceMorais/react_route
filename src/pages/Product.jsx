import { useParams } from "react-router-dom";

const Product = () => {
    const { id } = useParams();

    return <>
        <p>id do produto: {id}</p>
    </>
}

export default Product
