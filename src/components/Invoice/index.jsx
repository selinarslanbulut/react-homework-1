// React
import React from "react";

// Mocks
import { Headers, Content } from "../../__mocks__/data";

// Components
import Product from "../Product";

const Invoice = ({ 
    image = "https://via.placeholder.com/250x250", 
    company = "Şirket Adı",
    description = "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
}) => {
    const [products, setProducts] = React.useState(Content);
    const [headers, setHeaders] = React.useState({
        company,
        description,
        image,
        note: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    });

    const [total, setTotal] = React.useState("0");

    const calcTotal = (price = 0, quantitiy = 1, tax = 18, discount = 0) => {
        let totalPrice = 0;

        if(typeof price === "number") {
            totalPrice += price;
        }

        if(typeof tax === "number") {
            if(tax > 0) {
                totalPrice += (totalPrice / 100) * tax;
            }
        }

        if(typeof discount === "number") {
            if(discount > 0) {
                totalPrice -= (totalPrice / 100) * discount;
            }
        }

        if(typeof quantitiy === "number") {
            if (quantitiy > 1) {
                totalPrice += totalPrice * quantitiy;
            }
        }

        return Number(totalPrice);
    };

    const initialProduct = (id) => {
        return {
            id,
            date: "2021-12-17",
            product: "",
            quantity: 1,
            price: 0,
            tax: 18,
            discount: 0
        };
    }

    const updateHandler = (name, value, index, numberCheck) => {
        let items = [...products];
        let item = {...products[index]};

        if(numberCheck) {
            if(isNaN(value)) {
                item[name] = 0;
            } else {
                item[name] = Number(value);
            }
        } else {
            item[name] = value;
        }

        items[index] = item;
        setProducts(items);
    };

    const removeHandler = (index) => {
        let items = products;
        setProducts(items.filter(item => item.id !== items[index].id));
    };

    const addHandler = () => {
        setProducts([...products, initialProduct(products.length > 0 ? products[products.length - 1].id + 1 : 1)]);
    };

    const moneyFormat = (price) => {
        const formatter = new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY',
        });
          
        return formatter.format(price);
    };

    React.useEffect(() => {
        const calcTotalPrice = () => {
            let total = 0;
    
            products.forEach(product => {
                total += calcTotal(product.price, product.quantity, product.tax, product.discount);
            });
    
            setTotal(moneyFormat(total));
        };

        calcTotalPrice();
    }, [products]);

    return(
        <section className="bg-white shadow rounded p-10 mx-auto my-10">
            <div className="flex items-center flex-wrap">
                <div className="w-60">
                    <img src={headers.image} alt={headers.company} className="mx-auto block max-w-full rounded-lg" />
                </div>
                <div className="flex-1 pl-10">
                    <input type="text" className="text-6xl font-bold w-full focus:outline-none" value={headers.company} onChange={(event) => setHeaders({
                        ...headers,
                        company: event.currentTarget.value
                    })} />
                    
                    <input type="text" className="mt-4 w-full focus:outline-none" value={headers.description} onChange={(event) => setHeaders({
                        ...headers,
                        description: event.currentTarget.value
                    })} />
                </div>
            </div>

            <div className="flex justify-end mt-5">
                <button className="transition ease-in-out delay-150 hover:bg-green-800 bg-green-600 text-white px-5 py-1 ml-auto block" onClick={addHandler}>Ekle</button>
            </div>

            {Headers.length > 0 && products.length > 0 && (
                <div className="mt-10">
                    <div className={`text-center grid grid-cols-${Headers.length + 1}`}>
                        {Headers.map(item => (
                            <div className="font-semibold py-2 border-t" key={item.id}>
                                {item.title}
                            </div>
                        ))}
                        <div className="font-semibold py-2 border-t">Sil</div>
                    </div>
                    {products.length > 0 && (
                        <div className={`text-center grid grid-cols-${Headers.length + 1} text-sm`}>
                            {products.map((item, index) => (
                                <Product key={item.id} {...item} index={index} moneyFormat={moneyFormat} calcTotal={calcTotal} removeHandler={removeHandler} updateHandler={updateHandler} />
                            ))}
                        </div>
                    )}
                    <div className="mt-5">
                        <div className="text-2xl flex items-center justify-end">
                            <div>Toplam :</div>
                            <div className="ml-2">{total}</div>
                        </div>
                    </div>
                </div>
            )}

            <textarea value={headers.note} className="focus:outline-none" maxLength={200} cols="30" rows="10" onChange={(event) => setHeaders({
                ...headers,
                note: event.currentTarget.value
            })}></textarea>


            <div className="flex items-center">
                <button className="bg-orange-600 text-white px-5 py-1">E-Posta Gönder</button>
            </div>
        </section>
    );
};  

export default Invoice;