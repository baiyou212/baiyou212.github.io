

// let couts = 0;
const left = document.querySelector(".prev");
const right = document.querySelector(".next");
const slide = document.querySelectorAll(".berita-slide");

let cout = 0
right.addEventListener("click", function (e) {
  cout++
  slideshow(slide)
  if ( cout > 1) {
    right.style.display = "none";
  }
  if ( cout > 0) {
    left.style.display = "block";
  }

});


left.addEventListener("click", function (e) {
  cout--
  slideshow(slide)
  if (cout < 2) {
    right.style.display = "block";
  }

  if ( cout < 1) {
    left.style.display = "none";
  }
});


function slideshow(slide) {
  slide.forEach(function (slides) {
    slides.style.transform = `translateX(-${cout * 265}%)`;
  });
}

function DisplaySidebar() {
  const hamburger = document.querySelector("#openSidebar");

  hamburger.addEventListener("click", ClickSidebar);
}
DisplaySidebar();
function ClickSidebar(e) {
  e.preventDefault();
  const container = document.querySelector(".wraps");
  const spin = document.querySelectorAll(".spinner");
  const sidebar = document.querySelector(".sidesbar-menu");
  sidebar.classList.add("opens");
  container.classList.add("hides");
}

function scrollDown() {
  let y = window.scrollX;
  document.addEventListener("scroll", function () {
    const header = document.querySelector(".navbars");
    let x = window.scrollY;
    if (x > y) {
      header.classList.add("fixed-header");
    }
    if (x < 100) {
      header.classList.remove("fixed-header");
    }
    y = x;
  });
}

scrollDown();

const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", (e) => {
  const container = document.querySelector(".wraps");

  const sidebar = document.querySelector(".sidesbar-menu");
  sidebar.classList.remove("opens");
  container.classList.remove("hides");
});

function dotClicks() {
  const img = document.querySelectorAll(".jumbotron");
  const dots = document.querySelectorAll(".dot");
  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function (e) {
      e.preventDefault();
      if (e.target === dots[(i, 0)]) {
        img[i].style.display = "block";
        img[(i, 1)].style.display = "none";
      }
      if (e.target === dots[(i, 1)]) {
        img[i].style.display = "block";
        img[(i, 0)].style.display = "none";
      }
    });
  }
}
dotClicks();

function PlayMovie(){
    const modal = document.querySelector(".modal-video");
    const play = document.querySelector('.play')
    play.addEventListener('click',function(e){
      modal.innerHTML = modalz();
      e.preventDefault()
    })

  //   modal.classList.remove("show");
  // setTimeout(() => {
  //     modal.classList.add("modals");
  // }, 100);
  }
  const modal = document.querySelector(".modal-video");
  const play = document.querySelector('.play')
  play.addEventListener('click',function(e){
    modal.innerHTML = modalz();
    modal.classList.add("modals");
    e.preventDefault()
  })
  function modalz() {
  return `
<div class="box-video">
<iframe  class="responsive-iframe" src="https://www.youtube.com/embed/-4enFkJtSsU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
`
  }

  function tutupModal() {
    const modal = document.querySelector(".modal-video");
    modal.addEventListener("click", function(e){
      e.preventDefault();
      if (e.target.classList.contains("modals")) {
        e.target.classList.remove("modals");
        const modal = document.querySelector(".modal-video");
        // modal.classList.add("show");
        modal.innerHTML = " "
      }
    });
  }
  
  tutupModal() 

function DropMenuHTML() {
  const menu = document.querySelector(".drop-menu");

  const div = `
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <div class="list-footer-info">
          <h3 class="title text-center">Tentang Sekolah</h3>
          <ul class="list">
            <li>
                <a href="#">Tentang Kami</a>
              </li>
            <li>
                <a href="#">Sejarah</a>
          </li>
            <li>
                <a href="#">Visi & Misi</a>
              </li>
            <li>
                <a href="#">Tujuan Sekolah</a>
              </li>
            <li>
                <a href="#">Tujuan Sekolah</a>
              </li>
          </ul>
        </div>
      </div>
      <div class="col-md-3">
        <div class="list-footer-info">
          <h3 class="title text-center">Program Sekolah</h3>
          <ul class="list">
              <li>
                  <a href="#">Extra Kurikuler</a>
              </li>
              <li>
                  <a href="#">Kegiatan Sekolah</a>
              </li>
            <li>
                <a href="#">Fasilitas Sekolah</a>
              </li>
          </ul>
        </div>
      </div>
      <div class="col-md-3">
        <div class="list-footer-info">
          <h3 class="title text-center">Prestasi Sekolah</h3>
          <ul class="list">
            <li>
              <a href="#">Tingkat Kecamatan</a>
            </li>
            <li>
              <a href="#">Tingkat Kab/Kota</a>
            </li>
            <li>
              <a href="#">Tingkat Provinsi</a>
            </li>
            <li><a href="#">Tingkat Nasional</a></li>
            <li><a href="#">Tingkat International</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-3">
          <div class="list-footer-info">
            <figure>
              <img src="img/footer-logo.png" alt="">
            </figure>
            <div class="info">
              <p>SD Masjid Syuhada merupakan lembaga pendidikan sekolah dasar yang mencetak lulusan 
                  <span>The Next Sholeh, Smart and Talented Leader.</span>                                
              </p>
            </div>
          </div>
        </div>
    </div>
  </div>`;
  menu.innerHTML = div;
}
DropMenuHTML();
