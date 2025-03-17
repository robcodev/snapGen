export default function Header(){
    return (
        <>
            <header>
                <nav className={'flex justify-between w-full'}>
                    <h1 className={'text-start text-2xl'}>
                        SnapGen
                    </h1>
                    <div className={'flex-wrap'}>
                        <button className={'border border-gray-300 active:bg-black active:text-white active:font-bold rounded h-8 w-24'}>
                            Plantillas
                        </button>

                        <button className={'border border-gray-300 active:bg-black active:text-white active:font-bold rounded h-8 w-24 mx-2 active'}>
                            Editor
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}