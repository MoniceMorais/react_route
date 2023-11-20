import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
    // rota dinâmica
    const { id } = useParams();

    // carregamento dinâmico de dados
    const url = 'http://localhost:3500/products/' + id;
    const { data: product, loading, error } = useFetch(url);

    return <>
        {error && <p>Ocorreu um erro</p>}
        {loading && <p>Carregando...</p>}
        {product && (
            <div>
                <h1>{product.name}</h1>
                <p>R$ {product.price}</p>
                {/* nested routes */}
                <Link to={`/products/${product.id}/info`}>Mais informações</Link>
            </div>
        )}

    </>
}

export default Product
