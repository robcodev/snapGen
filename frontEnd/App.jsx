import './App.css';
import Form from "./assets/components/form.jsx";
import Preview from "./assets/components/preview.jsx";
import {useState} from "react";
import html2canvas from "html2canvas";
import Header from "./assets/components/appHeader.jsx";
function App(){

    // function formatearPrecios(numero){
    //     return Number(numero).toLocaleString('es-CL');
    // }

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

        html2canvas(document.getElementById("canva"), {useCORS: true, scale: 4}).then((canvas)=>{
            canvas.toBlob((blob)=>{
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "historiaTCG.png";
                document.body.appendChild(link);
                link.click();
            })
        })
        //
        // const canva = document.getElementById('canva');
        //
        // const canvas = await html2canvas(canva, {
        //     scale: 4,
        //     useCORS: true,
        // });
        // const dataURL = canvas.toDataURL("image/png");
        //
        // const link = document.createElement("a");
        // link.href = dataURL;
        // link.download = `snapGen.png`;
        // link.click();
    }

    return <>

        <Header/>


        <section
            className={'grid md:grid-cols-2 sm:grid-cols-1  mt-4 h-full gap-4'}>

            <div className={'col-span-1 items-center justify-center p-5 rounded border border-gray-300 shadow h-fit'}>
                <Form setDataForm={setDataForm} imageChange={handleImageChange}/>

                <button
                    onClick={handleDownload}
                    type={'button'}
                    className={'bg-black rounded text-white w-full p-2 mt-4 cursor-pointer hover:bg-gray-800'}
                >Descargar Imagen

                </button>
            </div>

            <div className={'col-span-1  max-w-124 rounded border border-gray-300 shadow'}>

                    <Preview dataForm={dataForm}/>
            </div>


        </section>

    </>
}

export default App