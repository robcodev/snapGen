import logoTCG from '/frontEnd/assets/imgs/logoTCG.png'
import defaultImage from '../imgs/deafultImg.jpg'

const Preview = ({dataForm}) => {
    const selector = ".autoResize"
    let watchList = Array.from(document.querySelectorAll(selector))
        .map((element) => element.parentNode);

    const reSize = function (watchElement) {
        watchElement.querySelectorAll(':scope >' + selector)
            .forEach((e)=>{
                const scale = e.parentNode.clientWidth / e.clientWidth;
                e.style.setProperty('--efiScale', scale);
                e.style.setProperty('--efiHeightDiff', e.clientHeight * (scale - 1) + 'px');
            })
    };

    const observer = new ResizeObserver((entries) => {
        for (let entry of entries)
            reSize(entry.target);
    });

    watchList.forEach((el) => {
        reSize(el);
        observer.observe(el)
    });

    return (
        <section className={'p-5'}>
            <h1
                className={'text-start font-bold text-xl'}>
                Previsualización en vivo
            </h1>
            <p className={'text-sm text-gray-400 text-start font-sans mb-8'}>Revisa cómo queda la plantilla antes de
                descargarla</p>

            <div id={'canva'}
                 className={'relative h-screen'}>

                <figure
                    className="preview aspect-[9/16] rounded absolute inset-0 flex flex-col items-center justify-center max-w-full max-h-screen">

                    <p className={'nerko-one-regular autoResize px-16 text-sm text-[#f9d876]'}>
                        Oferta del día</p>

                    <h1 className={'text-white autoResize px-8 text-2xl redondaExtraBold text-2xl'}>{dataForm.titulo || "Nombre del producto"}</h1>

                    <p className={'text-white autoResize px-16 text-xs redonda '}>{dataForm.subtitulo || 'Variedades - 100 un'}</p>

                    <img
                        src={dataForm.imagenProducto || defaultImage}
                        alt="Vista previa imagen"
                        className={'w-[90%] aspect-square rounded-lg my-3 m-auto object-center object-cover border-2 border-white'}
                    />

                    <div
                        className={'flex items-center justify-center text-xd text-white redonda'}>
                        <h4>Precio Normal: $</h4>
                        <h4>{dataForm.precioNormal}</h4>
                    </div>

                    <div
                        className="flex items-center justify-center text-xl redondaExtraBold">
                        <h2 className={'text-white'}>Precio Oferta: $</h2>
                        <h2 className={'text-white'}>{dataForm.precioOferta}</h2>
                    </div>

                    <img
                        src={logoTCG}
                        alt="logoTCG"
                        className="w-12 m-auto mt-4"
                    />
                </figure>
            </div>
        </section>


    )
}
export default Preview;