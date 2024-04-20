const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "../img/buttermilk-pancakes.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "../img/Diner-Double.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "../img/Godzilla-Milkshake.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "../img/Country-Delight.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "../img/Egg-Attack.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "../img/Oreo-Dream.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "../img/Bacon-Overflow.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "../img/American-Classic.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "../img/Quarantine-Buddy.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "Steak Dinner",
      category: "dinner",
      price: 22.99,
      img: "../img/Steak-Dinner.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

let navbarButton = document.querySelector('.navbarButton')
let contentMenu = document.querySelector('.container .content')

window.addEventListener('DOMContentLoaded', function() {
    displayMenuItem(menu);
    displayMenuButton();
})

function displayMenuItem(menuItem) {
    let items = menuItem.map(function(item) {
      return `
          <article class="menu-item">
            <img src="${item.img}" alt="American-Classic">
            <div class="item-info">
                <div class="title-price">
                    <h4>${item.title}</h4>
                    <h4 class="price">$${item.price}</h4>
                </div>
                <p class="item-text">
                    ${item.desc}
                </p>
            </div>
          </article>`
    })
    items = items.join("")
    contentMenu.innerHTML = items
}

function displayMenuButton() {
  let categories = menu.reduce(function(prev, curr) {
      if( !prev.includes(curr.category) ) {
        prev.push(curr.category)
      }
      return prev
    }, ['all']
  );

const categorysButton = categories.map(function(categoryBtn) {
  return `<button type="button" class="btn" id="${categoryBtn}">${categoryBtn}</button>`
}).join("")

navbarButton.innerHTML = categorysButton

let buttonBtn = document.querySelectorAll('.container .navbarButton .btn')

buttonBtn.forEach(function(btnBtn) {
  btnBtn.addEventListener('click', function(e) {
    let category = e.currentTarget.id
    const menuCategory = menu.filter(function(itemCategory) {
      if( itemCategory.category === category ) {
        return itemCategory
      }
    });
    
    if( category == "all" ) {
      displayMenuItem(menu)
    } else {
      displayMenuItem(menuCategory)
    }
  })
})

}



























// let navbarButton = document.querySelectorAll('.container .navbar ul li')
// let item = document.querySelectorAll('.content .item')

// navbarButton.forEach(function(navBut) {
//     navBut.addEventListener('click', function() {
//         item.forEach(function(items) {
//             if( navBut.classList.contains('breakfast') ) {
//                 if( !items.classList.contains('breakfast') ) {
//                     items.setAttribute('hidden', true)
//                 } else {
//                     items.removeAttribute('hidden')
//                 }
//             } else if( navBut.classList.contains('lunch') ) {
//                 if( !items.classList.contains('lunch') ) {
//                     items.setAttribute('hidden', true)
//                 } else {
//                     items.removeAttribute('hidden')
//                 }
//             } else if( navBut.classList.contains('shakes') ) {
//                 if( !items.classList.contains('shakes') ) {
//                     items.setAttribute('hidden', true)
//                 } else {
//                     items.removeAttribute('hidden')
//                 }
//             } else if( navBut.classList.contains('dinner') ) {
//                 if( !items.classList.contains('dinner') ) {
//                     items.setAttribute('hidden', true)
//                 } else {
//                     items.removeAttribute('hidden')
//                 }
//             } else {
//                 if( !items.classList.contains('all') ) {
//                     items.removeAttribute('hidden')
//                 }
//             }
//         })
        
//     })
// })
