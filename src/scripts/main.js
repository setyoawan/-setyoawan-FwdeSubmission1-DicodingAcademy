const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
});
import '../styles/main.css';
import data from '../DATA.json';
import $ from 'jquery';
const dataRes = data.restaurants;

let restHTML = '';
dataRes.forEach(function (rest) {
  console.log(rest)
  restHTML += `                    
      <div class="card">
        <div class="card-image"> 
            <img src="${rest.pictureId}" alt="restaurant image">              
        </div>
        <div class="card-label"> 
          <p>${rest.city}</p>
        </div>                    
        <div class="card-content">
          <p class="rating"><span>Rating :</span>  ${rest.rating}</p>          
          <p class="descript">${rest.description}</p>
        </div>        
      </div>                            
    `;
});

$('#restaurant-data').html(restHTML);