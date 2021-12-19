const Headers = [
    {
        id: 1,
        title: "TARİH",
    },
    {
        id: 2,
        title: "ÜRÜN",
    },
    {
        id: 3,
        title: "ADET",
    },
    {
        id: 4,
        title: "FİYAT",
    },
    {
        id: 5,
        title: "KDV",
    },
    {
        id: 6,
        title: "İSKONTO",
    },
    {
        id: 7,
        title: "TOPLAM",
    },
    {
        id: 8,
        title: "DURUM"
    }
];

const Content = [
    {
        id: 1,
        date: "2021-12-10",
        product: "Macbook Pro",
        quantity: 1,
        price: 28.999,
        tax: 18,
        discount: 10,
        status: true,
    },
    {
        id: 2,
        date: "2021-12-12",
        product: "iPhone 13 Pro Max",
        quantity: 1,
        price: 32.999,
        tax: 18,
        discount: 0,
        status: false,
    },
    {
        id: 3,
        date: "2021-10-10",
        product: "iPad Pro",
        quantity: 1,
        price: 10.999,
        tax: 18,
        discount: 2,
        status: true,
    },
    {
        id: 4,
        date: "2021-09-10",
        product: "AirTag",
        quantity: 3,
        price: 299,
        tax: 18,
        discount: 5,
        status: false,
    },
    {
        id: 5,
        date: "2021-10-10",
        product: "iCar",
        quantity: 1,
        price: 500.299,
        tax: 150,
        discount: 10,
        status: true,
    },
];

export {
    Content,
    Headers
};