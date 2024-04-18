let dataBestSeller = [
    {
        "id": "1",
        "img": "./images/haircare.jpg",
        "nameproduct": "Nước dưỡng tóc tinh dầu bưởi 140ml",
        "uses": "giảm gãy rụng và làm mềm tóc",
        "price": "165.000 đ",
        "pricesale": "123.000 đ",

    },
    {
        "id": "2",
        "img": "./images/haircare.jpg",
        "nameproduct": "Nước dưỡng tóc tinh dầu bưởi 140ml",
        "uses": "giảm gãy rụng và làm mềm tóc",
        "price": "165.000 đ",
        "pricesale": "123.000 đ",

    },
    {
        "id": "3",
        "img": "./images/haircare.jpg",
        "nameproduct": "Nước dưỡng tóc tinh dầu bưởi 140ml",
        "uses": "giảm gãy rụng và làm mềm tóc",
        "price": "165.000 đ",
        "pricesale": "123.000 đ",

    },
    {
        "id": "4",
        "img": "./images/haircare.jpg",
        "nameproduct": "Nước dưỡng tóc tinh dầu bưởi 140ml",
        "uses": "giảm gãy rụng và làm mềm tóc",
        "price": "165.000 đ",
        "pricesale": "123.000 đ",

    },
    {
        "id": "5",
        "img": "./images/haircare.jpg",
        "nameproduct": "Nước dưỡng tóc tinh dầu bưởi 140ml",
        "uses": "giảm gãy rụng và làm mềm tóc",
        "price": "165.000 đ",
        "pricesale": "123.000 đ",

    },
];
const listBestSeller = document.querySelector(".bestseller__list")
const renderBestSellerItem = (params) => {
    listBestSeller.innerHTML = params
        .map((item) => {
            return `
            <li class="bestseller__item d-flex flex-column align-items-center justify-content-center">
            <a href="#"><img class="img-fluid h-auto" src="${item.img}" alt="${item.nameproduct}"></a>
            <div class="bestseller__item-cart d-flex justify-content-between align-items-center">
            <div class="name__product d-flex flex-column gap-2">
            <a href="#" class="text-decoration-none text-dark fw-500 fs-6 text">${item.nameproduct}</a>
            <span class="text-uppercase fw-normal ballow fs-6 text">${item.uses} </span>
            <span class="ballow fs-6 text">${item.price}.</span> </div>
            <div class="cart">
            <button class="bi bi-bag-plus">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5"/>
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg>
            </button>
            </div>
        </li>
        `;
        })
        .join("");
};
renderBestSellerItem(dataBestSeller);
// 
$('.bestseller__list').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
        {
            breakpoint: 992,
            settings: {
                
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]

}
);
