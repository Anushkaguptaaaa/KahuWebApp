export function renderContact(container) {
  container.innerHTML = `
    <div class="heading-container">
        <h3>Want to get in contact with us?</h3>
    </div>
    <div class="paragraph-container paragraph-container--center">
        <p>Hi, I'm Anushka, creator of Kahu. For any queries, you may contact me at:</p>
        <div class="button-container">
            <a href="https://www.linkedin.com/in/anushkagupta04/" class="social-button" target="_blank" rel="noopener noreferrer">
                <img src="images/linkedin.png" alt="LinkedIn Logo">
            </a>
            <a href="mailto: aanushkaguptaa4@gmail.com" class="social-button">
                <img src="images/gmail.png" alt="Gmail Logo">
            </a>
            <a href="https://github.com/Anushkaguptaaaa" class="social-button" target="_blank" rel="noopener noreferrer">
                <img src="images/git2.png" alt="GitHub Logo">
            </a>
        </div>
    </div>
  `;
}
