function showSection(id) {
    // Define content to be loaded dynamically for each section
    const contentMap = {
        'video_4d': `
            <div class="container is-max-desktop">
            <div class="columns is-centered has-text-centered">
                <div class="column is-four-fifths">
                    <h3 class="title is-4">4D Reconstruction</h3>
                    <p>
                        Our method can reconstruct 4D dynamic scene in a feed-forward, online manner without global
                        optimization.
                    </p>
                    <br>
                    <div id="wrapper" style="
              display: flex;
              flex-wrap: nowrap;
              justify-content: center;
              align-items: center;
              gap: 2em;
            ">
                        <div class="iframe-container">
                        <iframe class="vframe"
                            src="https://cut3r.github.io/build/?playbackPath=/recordings/006545_mpii_test.viser&initialCameraPosition=0.0,-1.0,1.0&initialCameraLookAt=0.0,1.0,0.0&baseSpeed=0.8"
                            loading="lazy"></iframe>
                            <button onclick="openInNewTab(this)" data-link="https://cut3r.github.io/build/?playbackPath=/recordings/006545_mpii_test.viser&initialCameraPosition=0.0,-1.0,1.0&initialCameraLookAt=0.0,1.0,0.0&synchronizedVideoOverlay=/recordings/006545_mpii_test.mp4&baseSpeed=0.8">Open in New Tab to See Original Video</button>
                        </div>
                        <div class="iframe-container">
                        <iframe class="vframe"
                            src="https://cut3r.github.io/build/?playbackPath=/recordings/06eb2803.viser&initialCameraPosition=0.0,-1.0,1.0&initialCameraLookAt=0.0,1.0,0.0&baseSpeed=0.8"
                            loading="lazy"></iframe>
                            <button onclick="openInNewTab(this)" data-link="https://cut3r.github.io/build/?playbackPath=/recordings/06eb2803.viser&initialCameraPosition=0.0,-1.0,1.0&initialCameraLookAt=0.0,1.0,0.0&synchronizedVideoOverlay=/recordings/06eb2803.mp4&baseSpeed=0.8">Open in New Tab to See Original Video</button>
                        </div>
                    </div>
                    <br>
                    <!-- <div>
            (Results are downsampled for efficient online rendering)
          </div> -->
                    <div class="hide-on-touchscreens" style="
            display: flex;
            justify-content: center;
            gap: 1.5em;
            padding-top: 0.5em;
          ">
                        <div>
                            <i class="ti ti-view-360-arrow"></i> <strong>Left-click</strong> and
                            drag to rotate
                        </div>
                        <div>
                            <i class="ti ti-arrows-move"></i> <strong>Right-click</strong> and
                            drag or
                            <strong>WASD</strong>
                            to move
                        </div>
                        <div><i class="ti ti-zoom"></i> <strong>Scroll</strong> to zoom</div>
                        <div><strong>Click <i class="fas fa-pause"></i></strong> to pause</div>
                    </div>
                    <br>
                    <p id="click-interactive"
                        style="font-size: 20px; font-family: Arial, sans-serif; background-color: #f9f9f9; margin: 20px auto; padding: 20px; border-left: 5px solid #007BFF; border-right: 5px solid #007BFF; box-shadow: 0 2px 5px rgba(0,0,0,0.1); transition: all 0.3s ease;">
                        <a href="./interactive.html"
                            style="color: #007BFF; font-weight: bold; text-decoration: none; transition: color 0.3s; background-color: transparent;">Click
                            here to explore more 4D interactive results</a>!
                    </p>
                    <script>
                        // Get the paragraph element
                        var para = document.getElementById('click-interactive');

                        // Add event listeners for mouse enter and mouse leave
                        para.addEventListener('mouseenter', function () {
                            para.style.fontSize = '22px'; // Increase font size
                            para.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)'; // Enhance shadow
                        });

                        para.addEventListener('mouseleave', function () {
                            para.style.fontSize = '18px'; // Reset font size
                            para.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)'; // Reset shadow
                        });
                    </script>
                    <br>
                    <p> See more examples in our <a href="./gallery.html">gallery</a>.</p>
                </div>
            </div>
        </div><br>
        `,
        'video_3d': `
            <div class="container is-max-desktop">
            <div class="columns is-centered has-text-centered">
                <div class="column is-four-fifths">
                    <h2 class="title is-4">3D Reconstruction (Video)</h2>

                    <p>Our method reconstructs the 3D static scene in a feed-forward, online manner without global
                        optimization, both from videos and sparse image collections.</p>
                    <br>
                    <br>
                    <div id="wrapper" style="
                    display: flex;
                    flex-wrap: nowrap;
                    justify-content: center;
                    align-items: center;
                    gap: 2em;
                  ">
                        <div class="iframe-container">
                        <iframe class="vframe"
                            src="https://cut3r.github.io/build/?playbackPath=/static/recordings/3d_1_027.viser&initialCameraPosition=0.0,-1.0,1.0&initialCameraLookAt=0.0,1.0,0.0"
                            loading="lazy"></iframe>
                        <button onclick="openInNewTab(this)" data-link="https://cut3r.github.io/build/?playbackPath=/static/recordings/3d_1_027.viser&initialCameraPosition=0.0,-1.0,1.0&initialCameraLookAt=0.0,1.0,0.0&synchronizedVideoOverlay=/static/recordings/3d_1_027.mp4&baseSpeed=0.5">Open in New Tab to See Original Video</button>
                        </div>
                        <div class="iframe-container">
                        <iframe class="vframe"
                            src="https://cut3r.github.io/build/?playbackPath=/static/recordings/3d_2_018_gd4_2.viser&initialCameraPosition=0.0,-1.0,1.0&initialCameraLookAt=0.0,1.0,0.0"
                            loading="lazy"></iframe>
                        <button onclick="openInNewTab(this)" data-link="https://cut3r.github.io/build/?playbackPath=/static/recordings/3d_2_018_gd4_2.viser&initialCameraPosition=0.0,-1.0,1.0&initialCameraLookAt=0.0,1.0,0.0&synchronizedVideoOverlay=/static/recordings/3d_2_018.mp4&baseSpeed=0.5">Open in New Tab to See Original Video</button>
                        </div>
                    </div>
                    <br>
                    <div>
                        (Results are downsampled for efficient online rendering)
                    </div>
                    <div class="hide-on-touchscreens" style="
                  display: flex;
                  justify-content: center;
                  gap: 1.5em;
                  padding-top: 0.5em;
                ">
                        <div>
                            <i class="ti ti-view-360-arrow"></i> <strong>Left-click</strong> and
                            drag to rotate
                        </div>
                        <div>
                            <i class="ti ti-arrows-move"></i> <strong>Right-click</strong> and
                            drag or
                            <strong>WASD</strong>
                            to move
                        </div>
                        <div><i class="ti ti-zoom"></i> <strong>Scroll</strong> to zoom</div>
                        <div><strong>Click <i class="fas fa-pause"></i></strong> to pause</div>
                    </div>

                    <br>
                    <br>

                    <h3 class="title is-4">More 3D Video Reconstruction Results</h3>
                    
                    <br>
                    <div style="text-align: center; padding: 5px; font-family: Arial, sans-serif; background-color: #f2f2f2; width: 100%; box-sizing: border-box; display: flex;">
                        <div style="color: #333; padding: 5px; background-color: #ffffff; margin-right: 4px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); flex: 1;">
                            <span style="font-weight: bold;">Following:</span> <span style="font-weight: normal;">Viewpoint following the camera</span>
                        </div>
                        <div style="color: #333; padding: 5px; background-color: #ffffff; margin-left: 4px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); flex: 1;">
                            <span style="font-weight: bold;">Fixed:</span> <span style="font-weight: normal;">Viewpoint fixed in space</span>
                        </div>
                    </div>


                    <div id="carousel-results" class="carousel">
                        <div class="item item-vid5">
                            <video poster="" id="" autoplay playsinline muted loop height="450px" width="auto" loading="lazy">
                            <source data-src="./static/videos/gallery/codec_3d/teaser_batch_1_005.mp4" type="video/mp4">
                            </video>
                        </div>
                        <div class="item item-vid5">
                            <video poster="" id="" autoplay playsinline muted loop height="450px" width="auto" loading="lazy">
                            <source data-src="./static/videos/gallery/codec_3d/teaser_batch_1_028.mp4" type="video/mp4">
                            </video>
                        </div>
                        
                        <div class="item item-vid5">
                            <video poster="" id="" autoplay playsinline muted loop height="450px" width="auto" loading="lazy">
                            <source data-src="./static/videos/gallery/codec_3d/seqs_023.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                    <br>
                    <p> See more examples in our <a href="./gallery_3D.html">gallery</a>.</p>
                </div>
            </div>
        </div>
        `,
        'photo': `
            <div class="container is-max-desktop">
            <div class="columns is-centered has-text-centered">
                <div class="column is-four-fifths">
                    <h2 class="title is-4">3D Reconstruction (Photo Collection)</h2>

                    <p>Our method reconstructs the 3D static scene in a feed-forward, online manner without global
                        optimization, both from videos and sparse image collections.</p>
                    <br>
                    <br>

                    <div id="wrapper" style="
      
                            flex-wrap: wrap;
                            justify-content: center;
                            align-items: center;
                            gap: 2em;
                        ">
                        <div class="siframe-class">
                            <div class="image-grid">
                                <img src="./static/recordings/seq_013_0001.png" alt="Image 1" loading="lazy">
                                <img src="./static/recordings/seq_013_0002.png" alt="Image 2" loading="lazy">
                                <img src="./static/recordings/seq_013_0003.png" alt="Image 3" loading="lazy">
                                <img src="./static/recordings/seq_013_0004.png" alt="Image 4" loading="lazy">
                            </div>
                            <div class="iframe-container">
                            <iframe
                                src="https://cut3r.github.io/build/?playbackPath=/static/recordings/seq_013_1_0.viser&initialCameraPosition=0.0,-1.0,1.0&initialCameraLookAt=-1.0,0.0,0.0"
                                loading="lazy">
                            </iframe>
                            <button onclick="openInNewTab(this)" data-link="https://cut3r.github.io/build/?playbackPath=/static/recordings/seq_013_1_0.viser&initialCameraPosition=0.0,-1.0,1.0&initialCameraLookAt=-1.0,0.0,0.0">Open in New Tab</button>
                            </div>
                        </div>
                        <div class="siframe-class">
                            <div class="image-grid">
                                <img src="./static/recordings/seqs_017_0001.png" alt="Image 1" loading="lazy">
                                <img src="./static/recordings/seqs_017_0002.png" alt="Image 2" loading="lazy">
                                <img src="./static/recordings/seqs_017_0003.png" alt="Image 3" loading="lazy">
                                <img src="./static/recordings/seqs_017_0004.png" alt="Image 4" loading="lazy">
                            </div>
                            <div class="iframe-container">
                            <iframe
                                src="https://cut3r.github.io/build/?playbackPath=/static/recordings/seqs_017_1_0.viser&initialCameraPosition=-6.0,2.5,5.0&initialCameraLookAt=5.0,8.0,0.0"
                                loading="lazy">
                            </iframe>
                            <button onclick="openInNewTab(this)" data-link="https://cut3r.github.io/build/?playbackPath=/static/recordings/seqs_017_1_0.viser&initialCameraPosition=-6.0,2.5,5.0&initialCameraLookAt=5.0,8.0,0.0">Open in New Tab</button>
                        </div>
                        </div>
                    </div>

                    <div class="hide-on-touchscreens" style="
          display: flex;
          justify-content: center;
          gap: 1.5em;
          padding-top: 0.5em;
        ">
                        <div>
                            <i class="ti ti-view-360-arrow"></i> <strong>Left-click</strong> and
                            drag to rotate
                        </div>
                        <div>
                            <i class="ti ti-arrows-move"></i> <strong>Right-click</strong> and
                            drag or
                            <strong>WASD</strong>
                            to move
                        </div>
                        <div><i class="ti ti-zoom"></i> <strong>Scroll</strong> to zoom</div>
                        <div><strong>Click <i class="fas fa-pause"></i></strong> to pause</div>
                    </div>

                </div>
            </div>
        </div>
        `,
        'unseen': `
        <div class="container is-max-desktop">
            <div class="columns is-centered has-text-centered">
                <div class="column is-four-fifths">
                    <h2 class="title is-4">Inferring Unseen Structure</h2>
                    <p>
                        Given a camera query and the current reconstruction result, our method can infer the unseen
                        structure from a novel viewpoint, outputting both a depth map and RGB image at the new view.
                    </p>
                    <br>
                    <video width="100%" controls preload="none" poster="./static/images/unseen_poster.jpg">
                        <source src="./static/videos/unseen.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
        </div><br>
        `
    };

    // Hide all sections and remove their content to free up memory
    const sections = document.getElementsByClassName('dynamic-section');
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
        sections[i].innerHTML = contentMap[id] || `<p>No content for section "${id}".</p>`;
    }

    // Load content only for the clicked (or default) section
    const selectedSection = document.getElementById(id);
    selectedSection.innerHTML = contentMap[id] || `<p>No content for section "${id}".</p>`;
    selectedSection.style.display = 'block';

    if (id === 'video_3d') {
        initCarouselResults();
    }
}

function initCarouselResults() {
    document.querySelectorAll('#carousel-results video source[data-src]').forEach(srcTag => {
        const realSrc = srcTag.getAttribute('data-src');
        srcTag.setAttribute('src', realSrc);
        srcTag.removeAttribute('data-src');
    });

    bulmaCarousel.attach('#carousel-results', {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        initialSlide: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        pagination: false
    });
}

// Show default section on page load
document.addEventListener('DOMContentLoaded', function () {
    showSection('video_4d');
});

