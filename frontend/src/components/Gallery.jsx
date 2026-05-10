export default function Gallery() {
    return (
        <section id="galeria">
            <h2>Galería</h2>
            <div className="gallery">
                <img className="img-gallery" src="/assets/fotos/img1.png" alt="Proyecto 1" />
                <img className="img-gallery" src="/assets/fotos/img2.png" alt="Proyecto 1" />
                <img className="img-gallery" src="/assets/fotos/img3.png" alt="Proyecto 1" />



                {/* Video 1 */}
                <video
                    className="video-gallery"
                    controls
                    width="400"
                >
                    <source src="/assets/videos/Estando_video.mp4" type="video/mp4" />
                    Tu navegador no soporta videos.
                </video>

                {/* Video 2 */}
                <video
                    className="video-gallery"
                    controls
                    width="400"
                >
                    <source src="/assets/videos/Sierena_video.mp4" type="video/mp4" />
                    Tu navegador no soporta videos.
                </video>



            </div>
        </section>
    );
}
