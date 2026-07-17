export function renderAbout(container) {
  container.innerHTML = `
    <div class="heading-container">
        <a class="page-back" href="/" data-nav aria-label="Back to home">← Home</a>
        <h3>Kahu: Discover Your Cat's Breed!</h3>
    </div>
    <div class="paragraph-container">
        <p>The idea for Kahu, our cat breed detection website, was born out of a personal experience that profoundly changed my life. In October of last year, I adopted a charming cat named Joey. Curious about Joey's breed, I realized there was a need for a simple yet reliable tool to help pet owners like myself identify their feline friends' breeds. This sparked the creation of Kahu, my first self-made project.</p>
        <p>Joey has been a source of immense joy and togetherness for my family. Her playful antics and affectionate nature have strengthened our bond and filled our home with happiness. Through Kahu, I aim to share this joy by providing a tool that helps other pet owners understand and connect with their pets on a deeper level.</p>
        <p>Kahu is designed to be user-friendly and highly effective. By simply uploading a photo of your cat, you can quickly discover its breed and learn more about its unique characteristics. This knowledge not only satisfies curiosity but also helps in providing better care tailored to your cat's specific needs.</p>
        <p>Discover your cat's breed with Kahu and celebrate the unique traits that make your feline friend special. Whether you are a new pet owner or a seasoned cat lover, Kahu is here to assist you in uncovering the fascinating world of cat breeds, just as Joey has helped me uncover the joys of pet companionship.</p>
    </div>
    <div class="inspiration-container">
        <h3>Here's Who Inspired This Website</h3>
    </div>
    <div class="slider">
        <div class="slides">
            <div class="slide"><img src="images/joe3.jpg" alt="Joey"></div>
        </div>
    </div>
    <div class="bottom-container">
        <h3>Thank you for visiting Kahu!</h3>
    </div>
  `;
}
