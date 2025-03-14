import './App.css';
import Form from "./assets/components/form.jsx";
import Preview from "./assets/components/preview.jsx";
import {useState} from "react";
import html2canvas from "html2canvas";
function App(){

    function formatearPrecios(numero){
        return Number(numero).toLocaleString('es-CL');
    }

    const [dataForm, setDataForm] = useState({
        titulo: "",
        subtitulo: "",
        descripcion: "",
        precioNormal: "",
        precioOferta: "",
        imagenProducto: "",
        imagenFondo: "",
        logoProducto: ""
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file){
            const reader = new FileReader();
            reader.onloadend = () => {
                setDataForm(prevData => ({...prevData, imagenProducto: reader.result}))
            };
            reader.readAsDataURL(file);
        }
    }

    const handleDownload = async ()=>{
        const canva = document.getElementById('canva');

        if(!canva){
            console.error("No se encontró la cosa del canva")
        }
        if (canva){
            console.log('Si está leyendo el canva');
        }
        const canvas = await html2canvas(canva, {
            scale: 2,
            useCORS: true,
        });
        const dataURL = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = dataURL;
        link.download = `${dataURL}.png`;
        link.click();
        document.body.removeChild(link);
    }

    return <>
        <header>
            <nav className={'flex align-between'}>
                <h1 className={'text-start text-2xl'}>
                    SnapGen
                </h1>
                <div className={'w-4 h-4'}>x</div>
            </nav>
        </header>


        <section
            className={'grid grid-cols-1 md:grid-cols-3 mt-4 h-full gap-4'}>

            <div className={'col-span-1items-center justify-center p-5 rounded-lg'}>
                <Form setDataForm={setDataForm} imageChange={handleImageChange} />
            </div>

            <div className={'col-span-1 md:col-span-2 p-10 flex items-center justify-center rounded-lg'}>
                <div id={'canva'}>
                <Preview dataForm={dataForm} />
                </div>
            </div>
            <button
                onClick={handleDownload}
                type={'button'}
                className={'bg-[black] px-4 py-2 rounded-md text-white'}
            >Descargar Imagen</button>
        </section>

    </>
}

export default App