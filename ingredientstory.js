let dataIngredientStory = [
    {
        "id": "1",
        "img": "./images/haircare.jpg",
        "nameproduct": "Nước dưỡng tóc tinh dầu bưởi 140ml",
    },
    {
        "id": "1",
        "img": "./images/haircare.jpg",
        "nameproduct": "Nước dưỡng tóc tinh dầu bưởi 140ml",
    },
    {
        "id": "1",
        "img": "./images/haircare.jpg",
        "nameproduct": "Nước dưỡng tóc tinh dầu bưởi 140ml",
    },
    {
        "id": "1",
        "img": "./images/haircare.jpg",
        "nameproduct": "Nước dưỡng tóc tinh dầu bưởi 140ml",
    },
    {
        "id": "1",
        "img": "./images/haircare.jpg",
        "nameproduct": "Nước dưỡng tóc tinh dầu bưởi 140ml",
    },
    {
        "id": "1",
        "img": "./images/haircare.jpg",
        "nameproduct": "Nước dưỡng tóc tinh dầu bưởi 140ml",
    },
];
const listIngredientStory = document.querySelector(".ingredientstory__list");

const renderIngredientStoryItem = (params) => {
    listIngredientStory.innerHTML = params
        .map((item) => {
            return `
            <li class="bestseller__item d-flex flex-column align-items-center justify-content-center">
                <a href="#"><img class="img-fluid h-auto" src="${item.img}" alt="${item.nameproduct}"></a>
                <div class="bestseller__item-cart d-flex justify-content-between align-items-center">
                    <div class="name__product d-flex flex-column gap-2">
                        <a href="#" class="text-decoration-none text-dark fs-6 text">${item.nameproduct}</a>
                    </div>
                </div>
            </li>
            `;
        })
        .join("");
};

renderIngredientStoryItem(dataIngredientStory);


$('.ingredientstory__list').slick({
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
});
