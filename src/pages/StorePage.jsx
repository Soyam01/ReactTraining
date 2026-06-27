import { useEffect, useState } from 'react'

const StorePage = () => {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setLoading(true)
				setError('')

				const response = await fetch('https://fakestoreapi.com/products')

				if (!response.ok) {
					throw new Error('Unable to load products')
				}

				const data = await response.json()
				setProducts(data)
			} catch (err) {
				setError(err.message || 'Something went wrong while loading products')
			} finally {
				setLoading(false)
			}
		}

		fetchProducts()
	}, [])

	return (
		<div className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6">
			<section className="mb-10 rounded-3xl bg-slate-950 px-6 py-10 text-white shadow-2xl shadow-slate-950/20 md:px-10">
				<p className="text-sm uppercase tracking-[0.35em] text-emerald-300">Fake Store API</p>
				<h1 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Simple Store</h1>
				<p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
					A lightweight storefront built from FakeStoreAPI product data. Browse the catalog, compare prices,
					and get a quick feel for the available items.
				</p>
			</section>

			{loading && (
				<div className="rounded-2xl border border-slate-200 bg-white px-6 py-10 text-center text-slate-600 shadow-sm">
					Loading products...
				</div>
			)}

			{error && !loading && (
				<div className="rounded-2xl border border-rose-200 bg-rose-50 px-6 py-10 text-center text-rose-700">
					{error}
				</div>
			)}

			{!loading && !error && (
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{products.map((product) => (
						<article
							key={product.id}
							className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
						>
							<div className="mb-4 flex h-56 items-center justify-center rounded-xl bg-slate-50 p-4">
								<img
									src={product.image}
									alt={product.title}
									className="max-h-full w-full object-contain transition duration-300 group-hover:scale-105"
								/>
							</div>

							<p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
								{product.category}
							</p>
							<h2 className="mt-2 line-clamp-2 text-lg font-semibold text-slate-900">{product.title}</h2>
							<p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{product.description}</p>

							<div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
								<span className="text-xl font-bold text-slate-950">${product.price}</span>
								<span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white">
									Rating {product.rating?.rate ?? 'N/A'}
								</span>
							</div>
						</article>
					))}
				</div>
			)}
		</div>
	)
}

export default StorePage
