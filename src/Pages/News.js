import { useState, useMemo, useRef } from "react";

function News() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [product, setProduce] = useState([])

    const nameRef = useRef()

    const handleSumit = () => {
        setProduce([...product, {
            name,
            price: parseInt(price)
        }])
        setName('')
        setPrice('')
        nameRef.current.focus()
    }

    const total = useMemo(() => {
        const result = product.reduce((result, prod) => result + prod.price, 0)
        return result
    }, [product])
    return (
        <div style={{ padding: '10px 32px' }}>
            <h1>Add to Cart</h1>
            <input
                ref={nameRef}
                value={name}
                placeholder="Enter name"
                onChange={e => setName(e.target.value)}
            />
            <br />
            <input
                value={price}
                placeholder="Enter price"
                onChange={e => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleSumit}>Add</button>
            <br />
            Total: {total}
            <ul>
                {
                    product.map((product, index) => (
                        <li key={index}>{product.name} - {product.price}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default News