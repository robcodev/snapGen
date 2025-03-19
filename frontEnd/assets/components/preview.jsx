import logoTCG from '/frontEnd/assets/imgs/logoTCG.png'
import defaultImage from '../imgs/deafultImg.jpg'
import {useEffect} from "react";

const Preview = ({dataForm}) => {

    const AjusteFuentes = ()=> {

        // quiero que las fuentes mantengas un tamaño a escala con el contenedor
        // Definir el contenedor
        // Definir cuanto tiene que medir
        // Capturar los elementos
        //

            console.log('ajustando fuentes...');
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
        }

    useEffect(() => {
        AjusteFuentes();
    }, []);


    return (
        <section className={'p-5'}>
            <h1
                className={'text-start font-bold text-xl'}>
                Previsualización en vivo
            </h1>
            <p className={'text-sm text-gray-400 text-start font-sans mb-8'}>Revisa cómo queda la plantilla antes de
                descargarla</p>

            <div id={'canva'}
                 className={'relative aspect-[9/16]'}>

                <figure
                    className="preview rounded absolute inset-0 flex flex-col items-center justify-center max-w-full max-h-screen">

                    <p className={'nerko-one-regular autoResize px-16 text-sm text-[#f9d876] mt-[6%]'}>
                        Oferta del Día</p>

                    <h1 className={'text-white autoResize px-8 text-2xl font-anton text-2xl'}>{dataForm.titulo || "Nombre del producto"}</h1>

                    <p className={'text-white autoResize px-16 text-xs font-anton '}>{dataForm.subtitulo || 'Variedades - 100 un'}</p>

                    <img
                        src={dataForm.imagenProducto || defaultImage}
                        alt="Vista previa imagen"
                        className={'w-[90%] aspect-square rounded-lg my-6 m-auto object-center object-cover border-2 border-white'}
                    />

                    <div
                        className={'autoResize px-24 flex text-sm items-center justify-center text-xd text-white font-anton'}>
                        <h4>Precio Normal: $<span>{dataForm.precioNormal}</span></h4>
                    </div>

                    <div
                        className="autoResize px-16  flex items-center justify-center text-xl font-anton">
                        <h2 className={'text-white'}>Precio Oferta: $<span className={'text-white'}>{dataForm.precioOferta}</span></h2>
                    </div>

                    <img
                        src={logoTCG}
                        alt="logoTCG"
                        className="w-1/4 m-auto mt-4"
                    />
                </figure>
            </div>
        </section>


    )
}
export default Preview;