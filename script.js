
/* =========================================
   SPB FOREVER - JAVASCRIPT
   ========================================= */

// YouTube video used for the SPB Kannada jukebox.
const VIDEO_ID = "pBMb52fGZzA";

// Get the HTML elements.
const player = document.getElementById("musicPlayer");
const nowPlayingTitle = document.getElementById("nowPlayingTitle");
const nowPlayingMeta = document.getElementById("nowPlayingMeta");
const openSong = document.getElementById("openSong");

const songRows = [
  ...document.querySelectorAll(".song-row")
];


/* =========================================
   PLAY A SELECTED SONG
   ========================================= */

function playSong(row) {

  // Get information from the clicked playlist item.
  const title = row.dataset.title;
  const start = Number(row.dataset.start || 0);
  const language = row.dataset.language || "SPB Classics";

  // Load the YouTube video at the selected timestamp.
  player.src =
    `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?start=${start}&autoplay=1&rel=0`;

  // Update the selected song title and details.
  nowPlayingTitle.textContent = title;

  nowPlayingMeta.textContent =
    `${language} · SPB Classics · Saregama Kannada`;

  // Create a link to open the selected timestamp on YouTube.
  openSong.href =
    `https://www.youtube.com/watch?v=${VIDEO_ID}&t=${start}s`;

  // Highlight the selected playlist item.
  songRows.forEach(item => {

    const active = item === row;

    item.classList.toggle("active", active);

    item.setAttribute(
      "aria-pressed",
      String(active)
    );

  });

}


/* =========================================
   ADD CLICK EVENTS TO SONGS
   ========================================= */

songRows.forEach(row => {

  row.setAttribute(
    "aria-pressed",
    String(row.classList.contains("active"))
  );

  row.addEventListener("click", () => {
    playSong(row);
  });

});


// ================= TELUGU PLAYLIST SEARCH =================

const songSearch = document.getElementById("songSearch");
const songrows = document.querySelectorAll("#songList .song-row");

songSearch.addEventListener("input", function () {
  const searchText = this.value.trim().toLowerCase();

  songRows.forEach(function (song) {
    const title = song.dataset.title || "";
    const language = song.dataset.language || "";

    const matches = `${title} ${language}`
      .toLowerCase()
      .includes(searchText);

    song.hidden = !matches;
  });
});

// ================= END OF TELUGU PLAYLIST SEARCH =================


/* =========================================
   SEND A TRIBUTE MESSAGE
   ========================================= */

document
  .getElementById("dedicateBtn")
  .addEventListener("click", () => {

    const feedback =
      document.getElementById("tributeFeedback");

    // Display a message when the button is clicked.
    feedback.textContent =
      "♥ Your love for Balu Garu has been added to this little tribute.";

    // Change the button text.
    document.getElementById("dedicateBtn").innerHTML =
      '<i class="bi bi-heart-fill me-2"></i>Love sent';

  });


/* =========================================
   SHARE THE WEBSITE
   ========================================= */

document
  .getElementById("shareBtn")
  .addEventListener("click", async () => {

    const feedback =
      document.getElementById("tributeFeedback");

    const shareData = {
      title: "SPB Forever — A Musical Tribute",

      text:
        "Remembering the legendary S. P. Balasubrahmanyam. A voice that lives forever."
    };

    try {

      // Use the device's native sharing feature if available.
      if (navigator.share) {

        await navigator.share(shareData);

        feedback.textContent =
          "Thank you for sharing the tribute.";

      }

      // Otherwise, try copying the page address.
      else if (navigator.clipboard) {

        await navigator.clipboard.writeText(
          window.location.href
        );

        feedback.textContent =
          "Page link copied. Share it with another SPB fan!";

      }

      // Fallback when neither feature is available.
      else {

        feedback.textContent =
          "Copy this page's address from your browser to share the tribute.";

      }

    } catch (error) {

      if (error.name !== "AbortError") {

        feedback.textContent =
          "You can share this page using your browser's address bar.";

      }

    }

  });


/* =========================================
   MOBILE NAVIGATION
   Close the menu after choosing a section.
   ========================================= */

document
  .querySelectorAll("#mainNav .nav-link")
  .forEach(link => {

    link.addEventListener("click", () => {

      const nav = document.getElementById("mainNav");

      if (
        nav.classList.contains("show") &&
        window.bootstrap
      ) {

        bootstrap.Collapse
          .getOrCreateInstance(nav)
          .hide();

      }

    });

  });
