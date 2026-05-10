export default function Gallery() {
    return (
        <section id="galeria">
            <h2>Galería</h2>

            <div className="gallery">

                <div>
                    <img className="img-gallery" src="/assets/fotos/img1.png" alt="Proyecto 1" />
                    <p>Feria de las Flores en San Ángel - Julio 2025</p>
                </div>

                <div>
                    <img className="img-gallery" src="/assets/fotos/img2.png" alt="Proyecto 2" />
                    <p>La Barra del Tuno - Marzo 2025</p>
                </div>

                <div>
                    <img className="img-gallery" src="/assets/fotos/img3.png" alt="Proyecto 3" />
                    <p>Interpolitécnico de Tunas y Estudiantinas - Noviembre 2025</p>
                </div>

                {/* Video 1 */}
                <div>
                    <video
                        className="video-gallery"
                        controls
                        width="400"
                    >
                        <source src="/assets/videos/Estando_video.mp4" type="video/mp4" />
                        Tu navegador no soporta videos.
                    </video>

                    <p>2° Presentacion de la Estudiantina - Mayo 2016</p>
                </div>

                {/* Video 2 */}
                <div>
                    <video
                        className="video-gallery"
                        controls
                        width="450"
                    >
                        <source src="/assets/videos/Sirena_video.mp4" type="video/mp4" />
                        Tu navegador no soporta videos.
                    </video>

                    <p>9° Aniversario de la Estudiantina - Febrero 2025</p>
                </div>

            </div>
        </section>
    );
}