import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
    return (
        <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
            <div className="overflow-hidden bg-slate-100">
                <img
                    src={product.image || product.imageURL}
                    alt={product.name}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
            </div>

            <div className="space-y-4 p-5">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                        New
                    </span>
                </div>

                <p className="line-clamp-2 text-sm leading-6 text-slate-600">
                    {product.description}
                </p>

                <div className="flex items-center justify-between">
                    <p className="text-xl font-bold text-slate-900">
                        &#8377; {Number(product.price).toFixed(2)}
                    </p>
                    <Link
                        to={`/products/${product._id}`}
                        className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-600"
                    >
                        View details
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default ProductCard;
