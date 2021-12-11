const getProducts = async () => {
  try {
    const results = await fetch("./data/products.json");
    const data = await results.json();
    const products = data.products;
    return products;
  } catch (err) {
    console.log(err);
  }
};

/*
=============
Load Products
=============
 */
const categoryCenter = document.querySelector(".category__center");

window.addEventListener("DOMContentLoaded", async () => {
  const products = await getProducts();
 
   displayProductItems(products);
});

const displayProductItems = items => {
  let displayProduct = items.map(
    product => ` 
    <div class="product category__product">
    <div class="product__header">
      <img src="${product.image}" alt="">
    </div>
    <div class="product__footer">
      <h3>${product.title}</h3>
      <div class="rating">
        <img src="https://www.freeiconspng.com/uploads/orange-star-icon-4.png" width="350"
          alt="orange star icon" />
        <img src="https://www.freeiconspng.com/uploads/orange-star-icon-4.png" width="350"
          alt="orange star icon" />
        <img src="https://www.freeiconspng.com/uploads/orange-star-icon-4.png" width="350"
          alt="orange star icon" />
        <img src="https://www.freeiconspng.com/uploads/orange-star-icon-4.png" width="350"
          alt="orange star icon" />
        <img src="https://www.freeiconspng.com/uploads/orange-star-icon-4.png" width="350"
          alt="orange star icon" />

      </div>
      <div class="product__price">
        <h4>$${product.price}</h4>
        <a href="#"><button type="button" class="product__btn">
            Add To Cart
          </button></a>
      </div>
      <ul>
        <li>
          <a href="#">
            <svg class="svg-icon" viewBox="0 0 20 20">
              <path fill="none"
                d="M19.471,8.934L18.883,8.34c-2.096-2.14-4.707-4.804-8.903-4.804c-4.171,0-6.959,2.83-8.996,4.897L0.488,8.934c-0.307,0.307-0.307,0.803,0,1.109l0.401,0.403c2.052,2.072,4.862,4.909,9.091,4.909c4.25,0,6.88-2.666,8.988-4.807l0.503-0.506C19.778,9.737,19.778,9.241,19.471,8.934z M9.98,13.787c-3.493,0-5.804-2.254-7.833-4.3C4.182,7.424,6.493,5.105,9.98,5.105c3.536,0,5.792,2.301,7.784,4.332l0.049,0.051C15.818,11.511,13.551,13.787,9.98,13.787z">
              </path>
              <circle fill="none" cx="9.98" cy="9.446" r="1.629"></circle>
            </svg>
          </a>
          <a href="#">
            <svg class="svg-icon" viewBox="0 0 20 20">
              <path fill="none"
                d="M13.22,2.984c-1.125,0-2.504,0.377-3.53,1.182C8.756,3.441,7.502,2.984,6.28,2.984c-2.6,0-4.714,2.116-4.714,4.716c0,0.32,0.032,0.644,0.098,0.96c0.799,4.202,6.781,7.792,7.46,8.188c0.193,0.111,0.41,0.168,0.627,0.168c0.187,0,0.376-0.041,0.55-0.127c0.011-0.006,1.349-0.689,2.91-1.865c0.021-0.016,0.043-0.031,0.061-0.043c0.021-0.016,0.045-0.033,0.064-0.053c3.012-2.309,4.6-4.805,4.6-7.229C17.935,5.1,15.819,2.984,13.22,2.984z M12.544,13.966c-0.004,0.004-0.018,0.014-0.021,0.018s-0.018,0.012-0.023,0.016c-1.423,1.076-2.674,1.734-2.749,1.771c0,0-6.146-3.576-6.866-7.363C2.837,8.178,2.811,7.942,2.811,7.7c0-1.917,1.554-3.47,3.469-3.47c1.302,0,2.836,0.736,3.431,1.794c0.577-1.121,2.161-1.794,3.509-1.794c1.914,0,3.469,1.553,3.469,3.47C16.688,10.249,14.474,12.495,12.544,13.966z">
              </path>
            </svg>
          </a>
          <a href="#">
            <svg class="svg-icon" viewBox="0 0 20 20">
              <path
                d="M12.319,5.792L8.836,2.328C8.589,2.08,8.269,2.295,8.269,2.573v1.534C8.115,4.091,7.937,4.084,7.783,4.084c-2.592,0-4.7,2.097-4.7,4.676c0,1.749,0.968,3.337,2.528,4.146c0.352,0.194,0.651-0.257,0.424-0.529c-0.415-0.492-0.643-1.118-0.643-1.762c0-1.514,1.261-2.747,2.787-2.747c0.029,0,0.06,0,0.09,0.002v1.632c0,0.335,0.378,0.435,0.568,0.245l3.483-3.464C12.455,6.147,12.455,5.928,12.319,5.792 M8.938,8.67V7.554c0-0.411-0.528-0.377-0.781-0.377c-1.906,0-3.457,1.542-3.457,3.438c0,0.271,0.033,0.542,0.097,0.805C4.149,10.7,3.775,9.762,3.775,8.76c0-2.197,1.798-3.985,4.008-3.985c0.251,0,0.501,0.023,0.744,0.069c0.212,0.039,0.412-0.124,0.412-0.34v-1.1l2.646,2.633L8.938,8.67z M14.389,7.107c-0.34-0.18-0.662,0.244-0.424,0.529c0.416,0.493,0.644,1.118,0.644,1.762c0,1.515-1.272,2.747-2.798,2.747c-0.029,0-0.061,0-0.089-0.002v-1.631c0-0.354-0.382-0.419-0.558-0.246l-3.482,3.465c-0.136,0.136-0.136,0.355,0,0.49l3.482,3.465c0.189,0.186,0.568,0.096,0.568-0.245v-1.533c0.153,0.016,0.331,0.022,0.484,0.022c2.592,0,4.7-2.098,4.7-4.677C16.917,9.506,15.948,7.917,14.389,7.107 M12.217,15.238c-0.251,0-0.501-0.022-0.743-0.069c-0.212-0.039-0.411,0.125-0.411,0.341v1.101l-2.646-2.634l2.646-2.633v1.116c0,0.174,0.126,0.318,0.295,0.343c0.158,0.024,0.318,0.034,0.486,0.034c1.905,0,3.456-1.542,3.456-3.438c0-0.271-0.032-0.541-0.097-0.804c0.648,0.719,1.022,1.659,1.022,2.66C16.226,13.451,14.428,15.238,12.217,15.238">
              </path>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>                  `
  );

  displayProduct = displayProduct.join("");
  if (categoryCenter) {
    categoryCenter.innerHTML = displayProduct;
  }
};

// Filtering

const filterBtn = document.querySelectorAll(".filter-btn");
const categoryContainer = document.getElementById("category");

if (categoryContainer) {
  categoryContainer.addEventListener("click", async e => {
    const target = e.target.closest(".section__title");
    if (!target) return;

    const id = target.dataset.id;
    const products = await getProducts();

    if (id) {
      // remove active from buttons
      Array.from(filterBtn).forEach(btn => {
        btn.classList.remove("active");
      });
      target.classList.add("active");

      // Load Products
      let menuCategory = products.filter(product => {
        if (product.category === id) {
          return product;
        }
      });

      if (id === "All Products") {
        displayProductItems(products);
      } else {
        displayProductItems(menuCategory);
      }
    }
  });
}

/*
=============
Product Details Left
=============
 */
// const pic1 = document.getElementById("pic1");
// const pic2 = document.getElementById("pic2");
// const pic3 = document.getElementById("pic3");
// const pic4 = document.getElementById("pic4");
// const pic5 = document.getElementById("pic5");
// const picContainer = document.querySelector(".product__pictures");
// const zoom = document.getElementById("zoom");
// const pic = document.getElementById("pic");

// // Picture List
// const picList = [pic1, pic2, pic3, pic4, pic5];

// Active Picture
// let picActive = 1;

// ["mouseover", "touchstart"].forEach(event => {
//   if (picContainer) {
//     picContainer.addEventListener(event, e => {
//       const target = e.target.closest("img");
//       if (!target) return;
//       const id = target.id.slice(3);
//       changeImage(`./images/products/iPhone/iphone${id}.jpeg`, id);
//     });
//   }
// });

// change active image
// const changeImage = (imgSrc, n) => {
//   // change the main image
//   pic.src = imgSrc;
//   // change the background-image
//   zoom.style.backgroundImage = `url(${imgSrc})`;
//   //   remove the border from the previous active side image
//   picList[picActive - 1].classList.remove("img-active");
//   // add to the active image
//   picList[n - 1].classList.add("img-active");
//   //   update the active side picture
//   picActive = n;
// };

/*
=============
Product Details Bottom
=============
 */

// const btns = document.querySelectorAll(".detail-btn");
// const detail = document.querySelector(".product-detail__bottom");
// const contents = document.querySelectorAll(".content");

// if (detail) {
//   detail.addEventListener("click", e => {
//     const target = e.target.closest(".detail-btn");
//     if (!target) return;

//     const id = target.dataset.id;
//     if (id) {
//       Array.from(btns).forEach(btn => {
//         // remove active from all btn
//         btn.classList.remove("active");
//         e.target.closest(".detail-btn").classList.add("active");
//       });
//       // hide other active
//       Array.from(contents).forEach(content => {
//         content.classList.remove("active");
//       });
//       const element = document.getElementById(id);
//       element.classList.add("active");
//     }
//   });
// };