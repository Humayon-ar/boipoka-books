//1: getStoredData
//2: setData

const getStoredData = () =>{
    const storedDataStr = localStorage.getItem("readList");

    if(storedDataStr){
        const storedData = JSON.parse(storedDataStr);
        return storedData;
    }
    else{
        return [];
    }
}

const addToStoredData = (id) => {
    const storedBookData = getStoredData();

    if(storedBookData.includes(id)){
        alert("Sorry, it exists here")
    }
    else{
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList", data);
    }
   
}

export {addToStoredData};