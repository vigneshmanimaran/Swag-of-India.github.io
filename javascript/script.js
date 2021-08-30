new Vue({
  el: "#app",
  data: {
    portfolioItems: [{
        featured: true,
        color: "#FBC02D",
        type: "Website",
        category: "UI/UX",
        image: "images/Home Page.png", 
        summary: 'Home Page',
        description: 'In this webpage I created Homepage of the webpage. I designed the webpage with HTML5,CSS,BOOTSTRAP and few percentage of Javascript. I will add 100% behaviour in future.',
        link: "https://vigneshmanimaran.github.io/Home-Page.github.io/",
      },


      {
        featured: true,
        color: "#282633",
        type: "Website",
        category: "UI/UX",
        image: "images/Edit Profile.png", 
        summary: 'Profile',
        description: 'In this single page application, I created profile tab so that each and every customer update their details. I designed the profile webpage with HTML5,CSS,BOOTSRATP and will add behaviour later.',
        link: "https://vigneshmanimaran.github.io/My-profile.github.io/",
      },

      {
        featured: true,
        color: "#282633",
        type: "Website",
        category: "UI/UX",
        image: "images/Return Orders.png", 
        summary: 'Return Orders',
        description: 'This is the webpage which contains order details, that has to returned to the respective owners. I just designed webpage with HTML5,CSS,BOOTSTRAP and will soon add behaviour to return order webpage',
        link: "https://vigneshmanimaran.github.io/Return-order.github.io/",
      },


      {
        featured: true,
        color: "#282633",
        type: "Website",
        category: "UI/UX",
        image: "images/Seller Page.png", 
        summary: 'Seller page',
        description: 'I created for seller for selling their product. I used only HTML5,CSS,BOOTSTRAP for creating the seller page and as well I am learning javascript so that soon i will add behaviour to my single page application..',
        link:"https://vigneshmanimaran.github.io/sellerpage.github.io/",
      },
      {
        featured: true,
        color: "#282633",
        type: "Website",
        category: "UI/UX",
        image: "images/Login.png", 
        summary: 'Login page',
        description: 'In this webpage I created sign-in page of the webpage. I designed the webpage with HTML5,CSS,BOOTSTRAP and few percentage of Javascript. I will add 100% behaviour in future.',
        link:"https://vigneshmanimaran.github.io/SIGN-IN-page.github.io/",
      },
      {
        
        featured: true,
        color: "#282633",
        type: "Website",
        category: "UI/UX",
        image: "images/Thankyou.png", 
        summary: 'Thank you page',
        description: 'In this webpage I created thank you page of the webpage. I designed the webpage with HTML5,CSS,BOOTSTRAP and few percentage of Javascript. I will add 100% behaviour in future.',
        link: "https://vigneshmanimaran.github.io/Thank-you-page.github.io/",
        
      },
      {
       
        featured: true,
        color: "#282633",
        type: "Website",
        category: "UI/UX",
        image: "images/Products listing page.png", 
        summary: 'Product Listing page',
        description: 'I had done the project listing page for swag of India and I had listed the products of swag of India. In this page I created normal effect and over effect on the products using javascript. Normal effect is just like hovering the product it shows the cart icon,whistlist and favourite icon. Over effect is like hovering the normal effect it shows the styling effect on cart icon,whistlist and favourite icon. The webpage shows the detailed explaination.',
        link: "https://vigneshmanimaran.github.io/Product-listing-page.github.io/",
        
      },
      {
   
        featured: true,
        color: "#282633",
        type: "Website",
        category: "UI/UX",
        image: "images/Products listing page-1.png",
        summary: 'Products listing page-1',
        description: 'This is the customer review page of the created website for swag of India. I just made the review page with HMTL,CSS,BOOTSTRAP,JAVASCRIT. The javascript I applied to the review stars so that when clicking on the stars it scroll the window to the reviews section within few seconds. In addition to that, I made the related products as sliding one so that when user clicking on the next product the screen shows the related products in javascript.',
        link: "https://vigneshmanimaran.github.io/customer-review-page-update.github.io/",
        
      },
      {
     
        featured: true,
        color: "#282633",
        type: "Website",
        category: "UI/UX",
        image: "images/FAQ.png", 
        summary: 'FAQ Page',
        description: 'In this page I had created FAQ for Swag of India webpage. For structuing I used HTML, for styling I used CSS, for creating responsive webpage I used Bootstrap and i used javascript for adding behaviour. Moreover in this page I used javascript behaviour for plus sign to show the description and minus sign to hide the description.',
        link:  "https://vigneshmanimaran.github.io/frequently-asked-qn.github.io/",
        
      },
      {
       
        featured: true,
        color: "#282633",
        type: "Website",
        category: "UI/UX",
        image: "images/Cart Page.png", 
        summary: 'Cart Page',
        description: 'I designed cart page for the swag of India website. In this webpage I created cart tab so that when clicking on the cart icon, the product gets added to the cart and its shows how many products added and what product added to the cart and by clickingon the cart tab it shows the details of the product whether you can add as many product or you can remove the product from the cart. The screenshot or by clicking on the website link shows the detailed information.',
        link:"https://vigneshmanimaran.github.io/cart.github.io/",
       
      },
      {
 
        featured: true,
        color: "#282633",
        type: "Website",
        category: "UI/UX",
        image: "images/Wishlist.png", 
        summary: 'Wishlist page',
        description: 'I designed wishlist page for the swag of India website. In this webpage I created cart tab so that when clicking on the cart icon, the product gets added to the cart and its shows how many products added and what product added to the cart and by clickingon the cart tab it shows the details of the product whether you can add as many product or you can remove the product from the cart. In addition to that, I created wishlist tab similiar to cart tab but if the user wants to add product to wishlist or cart they can add or remove depends upon their needs.The screenshot or by clicking on the website link shows the detailed information.',
        link: "https://vigneshmanimaran.github.io/wishlist.github.io/",
        
      },
    ]
  },
  computed: {
    featuredPortfolioItems: function () {
      return this.portfolioItems.filter(function (u) {
        return u.featured;
      });
    }
  }
});

// scroll to top 
document.getElementById("scrollUp").classList.add("hide");
function getYPosition(){
   var top  = window.pageYOffset || document.documentElement.scrollTop
   return top;
 }

document.addEventListener('scroll', () => {
    var scroll = getYPosition();
    var arrow = document.getElementById('scrollUp');
    scrolled = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    if (scroll > 1200) {
       arrow.classList.remove("hide");
       arrow.classList.add("show");
       arrow.addEventListener('click', scrolled);
   } else {
       document.getElementById('scrollUp').classList.remove("show");
       document.getElementById('scrollUp').classList.add("hide");
       document.getElementById("scrollUp").removeEventListener("click", scrolled);
   }
})