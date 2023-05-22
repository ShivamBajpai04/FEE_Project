//how to make a ordering system for a cafe?
const product = [
    {
        id: 0,
        image: 'Images/latte.png',
        title: 'Latte',
        description: 'Espresso combined with several ounces of steamed milk',
        price: 150.00,
    },
    {
        id: 1,
        image: 'Images/cappucino.png',
        title: 'Cappuccino',
        description: 'Perfect balance of espresso, steamed milk and foam ',
        price: 160.00,
    },
    {
        id: 2,
        image: 'Images/espresso.png',
        title: 'Espresso',
        description: 'Concentrated coffee, served in shots',
        price: 130.00,
    },
    {
        id: 3,
        image: 'Images/choco_lava_cake.png',
        title: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with a gooey center, topped with vanilla ice cream.',
        price: 100.00,
    },
    {
        id: 4,
        image: 'Images/Creme-Brulee.png',
        title: 'Crème Brûlée',
        description: 'Classic French dessert with a caramelized sugar crust.',
        price: 400.00,
    },
    {
        id: 5,
        image: 'Images/devil-fruit-modified.png',
        title: 'Gomu Gomu No Mi',
        description: 'Paramecia-type Devil Fruit that grants the users body the properties of rubber.',
        price: 350.00,
    },
    {
        id: 6,
        image: 'Images/Cream-modified.png',
        title: 'Vanilla Bean Ice Cream',
        description: 'Classic vanilla bean ice cream topped with whipped cream and a cherry.',
        price: 600.00,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i = 0;
    document.getElementById('root').innerHTML = categories.map((item)=>
    {
        var {image, title,description, price} = item;
        return(
            `<div class='box'>
            <div class='img-box'>
            <img style='margin-bottom:0px;' class='images' src=${image}></img>
            </div>
            <div class='button'>
            <p style='margin-bottom:0px; margin-top:0px;'>${title}</p>
            <p style='font-size:12px; margin-bottom:0px; margin-top:0px;'>${description}</p>
            <h2 style='margin-top:0px;'>₹${price}</h2>` +
            "<button style='margin-top:0px; margin-bottom:15px;' onclick='addtocart("+(i++)+")'>Add to cart </button>"+
            `</div>
            </div>`
        )
    
    }).join('')

    var cart =[];

    function addtocart(a){
        cart.push({...categories[a]});
        displaycart();
    
    }

    function delElement(a){
        cart.splice(a, 1);
        displaycart();
    }
    function delCart(a){
        if(cart.length>0){
            cart.length=0;
            displaycart();
            alert("Your Order has been placed");}
        else{
            alert("Your cart is empty");
        }
    }
    function displaycart(a){
        let j = 0, total=0;
        document.getElementById("count").innerHTML=cart.length;
        if(cart.length==0){
            document.getElementById('cartItem').innerHTML = "Your cart is empty";
            document.getElementById("total").innerHTML = "₹ "+0;
        }
        else{
            document.getElementById("cartItem").innerHTML = cart.map((items)=>
            {
                var {image, title, price} = items;
                total +=price;
            document.getElementById("total").innerHTML = "₹ "+total;
                
                return(
                    `<div class='cart-item'>
                    <div class='row-img'>
                    <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px'> ${price}</h2>`+
                    "<i class='fa-solid fa-trash' onclick='delElement("+ (j++)+")'></i></div>"
                    
                     
                );
            }).join('');
        }
    }
