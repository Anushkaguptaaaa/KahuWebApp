import { initSidebar } from '../features/sidebar.js';
import { initUpload } from '../features/upload.js';
import { initCarouselClick } from '../features/carousel-click.js';

export function renderHome(container, { navigate, setActiveNav }) {
  container.innerHTML = `
      <header>
         <div class="header"></div>
      </header>
      <div class="main_section">
         <span class="toggle_side_bar"><i class="fa fa-bars"></i></span>
         <div id="side_bar" class="sidenav">
            <div class="side_bar_logo">
               <div class="logo"> <a href="/" data-nav><img src="images/logo.png" alt="Kahu"></a> </div>
            </div>
            <a href="javascript:void(0)" class="closebtn">X</a>
            <div class="scoll_to_id_menu">
               <nav class="nav">
                  <div class="padded">
                     <ul>
                        <li class="active"><a class="nav-section1" href="/" data-nav>Home</a></li>
                        <li><a class="nav-section2" href="/about" data-nav>About </a></li>
                        <li><a class="nav-section2" href="/gallery" data-nav>Gallery</a></li>
                        <li><a class="nav-section2" href="/contact" data-nav>contact </a></li>
                     </ul>
                     <div class="top_btn">
                        <a class="read_more joe-btn" href="#" id="joe-open">Ask Joe!</a>
                     </div>
                  </div>
               </nav>
            </div>
         </div>
         <div class="container padddd">
            <div class="row">
               <div class="col-md-6 padding_lrtb0">
                  <div class="bg">
                     <div class="text-bg">
                        <span>WELCOME </span>
                        <span>TO </span>
                        <h1> KAHU! </h1>
                        <p>Discover the world of cat breeds with Kahu. Our easy-to-use platform helps you identify and learn about various cat breeds through detailed information and stunning images. Join us and explore the unique charm of each feline breed</p>
                        <a class="read_more" href="#" id="upload-link">Upload image</a>
                        <input type="file" id="upload-input" accept="image/*" style="display: none;">
                        <div id="upload-status"></div>
                     </div>
                  </div>
               </div>
               <div class="col-md-6 padding_lrtb0">
                  <div id="myCarousel" class="carousel slide banner_main" data-interval="3000">
                     <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                     </ol>
                     <div class="carousel-inner">
                        <div class="carousel-item active">
                           <div class="container padding_lrtb0">
                              <div class="carousel-caption">
                                 <div class="images_box">
                                    <figure><img src="images/babber_box.jpg" alt=""></figure>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="carousel-item">
                           <div class="container padding_lrtb0">
                              <div class="carousel-caption">
                                 <div class="images_box">
                                    <figure><img src="images/img3.jpg" alt=""></figure>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="carousel-item">
                           <div class="container padding_lrtb0">
                              <div class="carousel-caption ">
                                 <div class="images_box">
                                    <figure><img src="images/img2.jpg" alt=""></figure>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  </div>
            </div>
         </div>
      </div>
      <div id="about" class="about">
         <div class="container-fluid">
            <div class="row d_flex">
               <div class="col-md-7 padding-left">
                  <div class="about_img">
                     <figure><img src="images/about_img.jpg" alt="About Kahu"/></figure>
                  </div>
               </div>
               <div class="col-md-5">
                  <div class="titlepage">
                     <h2>About Kahu</h2>
                     <p>Our cutting-edge Cat Breed Identifier app combines a user-friendly interface with accurate identification capabilities to determine cat breeds from images. Simply upload a photo of a cat, and the app swiftly analyzes key features to provide you with precise breed information. Ideal for cat enthusiasts, breeders, and veterinarians, our app offers a smooth and efficient solution for identifying various cat breeds, enhancing your feline knowledge and care experience.</p>
                     <a class="read_more" href="/about" data-nav>Read More</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="Our">
         <div class="container">
            <div class="row d_flex">
               <div class="col-md-4">
                  <div class="titlepage">
                     <h2>Our Cats</h2>
                     <p>Discover a wide range of cat breeds on our website, from the sleek Siamese to the fluffy Maine Coon. Each breed profile provides key details on physical traits, personality, and care needs, helping you find the perfect feline companion. Whether you're a seasoned cat lover or new to owning a cat, our site offers concise, informative descriptions to guide you.</p>
                     <a class="read_more" href="/gallery" data-nav>See More</a>
                  </div>
               </div>
               <div class="col-md-8">
                  <div id="Our_slide" class="carousel slide Our_banner" data-interval="3000">
                     <ol class="carousel-indicators">
                        <li data-target="#Our_slide" data-slide-to="0" class="active"></li>
                        <li data-target="#Our_slide" data-slide-to="1"></li>
                        <li data-target="#Our_slide" data-slide-to="2"></li>
                     </ol>
                     <div class="carousel-inner">
                        <div class="carousel-item active">
                           <div class="container">
                              <div class="carousel-caption relative">
                                 <figure><img src="images/dog.jpg" alt=""/></figure>
                              </div>
                           </div>
                        </div>
                        <div class="carousel-item">
                           <div class="container">
                              <div class="carousel-caption relative">
                                 <figure><img src="images/catt.jpg" alt=""/></figure>
                              </div>
                           </div>
                        </div>
                        <div class="carousel-item">
                           <div class="container">
                              <div class="carousel-caption relative">
                                 <figure><img src="images/catto.jpg" alt=""/></figure>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="memory-section" id="memory-game">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage memory-section__intro">
                     <h2>Cat Memory Match</h2>
                     <p>Take a break and flip the cards — find all the matching cat pairs!</p>
                  </div>
               </div>
            </div>
            <div class="memory-stats memory-stats--inline">
               <div class="memory-stat">
                  <span>Moves</span>
                  <strong id="memory-moves">0</strong>
               </div>
               <div class="memory-stat">
                  <span>Pairs</span>
                  <strong id="memory-pairs">0 / 8</strong>
               </div>
            </div>
            <div class="memory-board-wrap">
               <div class="memory-board" id="memory-board"></div>
               <div class="memory-win memory-win--overlay" id="memory-win">
                  <div class="memory-win__celebration">
                     <svg class="memory-win__arch" viewBox="0 0 360 80" aria-hidden="true">
                        <defs>
                           <linearGradient id="memory-win-glitter" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stop-color="#ffb6d9" />
                              <stop offset="25%" stop-color="#ff69b4" />
                              <stop offset="50%" stop-color="#fff0f8" />
                              <stop offset="75%" stop-color="#ff4da6" />
                              <stop offset="100%" stop-color="#ffb6d9" />
                           </linearGradient>
                           <path id="memory-win-curve" d="M 10 60 Q 180 0 350 60" />
                        </defs>
                        <text class="memory-win__arch-text">
                           <textPath href="#memory-win-curve" startOffset="50%" text-anchor="middle">YAY YOU WON!!!</textPath>
                        </text>
                     </svg>
                     <video src="images/jump.webm" class="memory-win__dance" autoplay loop muted playsinline aria-hidden="true"></video>
                  </div>
                  <button type="button" class="memory-btn memory-btn--dark" id="memory-play-again">Play again</button>
               </div>
            </div>
            <div class="memory-actions">
               <button type="button" class="memory-btn memory-btn--dark" id="memory-restart">New game</button>
            </div>
         </div>
      </div>
      <footer>
         <div class="footer">
            <div class="container">
               <div class="row">
                  <div class="col-md-4">
                     <div class="titlepage">
                        <h2>Contact Us</h2>
                        <ul class="location_icon">
                           <li><a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i></a> Dehradun, Uttarakhand, India</li>
                           <li><a href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a>aanushkaguptaa4@gmail.com</li>
                           <li><a href="#"><i class="fa fa-phone" aria-hidden="true"></i></a> (+91) 9068946316</li>
                        </ul>
                     </div>
                  </div>
                  <div class="col-md-8">
                     <div class="titlepage">
                        <h2>Newsletter</h2>
                        <form class="form_subscri">
                           <input class="newsl" placeholder="Enter Your Email" type="text" name="Enter Your Email">
                           <button class="subsci_btn">Subscribe</button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
  `;

  setActiveNav('/');
  initSidebar();
  initUpload(navigate);

  if (window.initMemoryGame) {
    window.initMemoryGame();
  }

  if (window.jQuery) {
    window.jQuery('#myCarousel').carousel({
      interval: 3000,
      pause: 'hover',
      wrap: true,
    });
    window.jQuery('#Our_slide').carousel({
      interval: 3000,
      pause: 'hover',
      wrap: true,
    });
  }

  initCarouselClick('#myCarousel');
  initCarouselClick('#Our_slide');
}
