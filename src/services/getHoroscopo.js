

export const getHoroscopo = async() => {
    try{
        const resp = await fetch('https://api.adderou.cl/tyaas/')
        const data = await resp.json();
        return data;
    }catch(error){
        console.log(`hubo un error de tipo ${error}`);
    }
};
