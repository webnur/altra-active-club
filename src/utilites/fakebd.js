
const addToStore = time => {
    localStorage.setItem('stored-time', time)
    // let setTime = {};
    // const storedCard = localStorage.setItem('stored-time', JSON.stringify(time));
    // console.log(storedCard)
    // let shoppingCart = {}

    //get the shopping cart from local storage
    // const storedTime = localStorage.getItem('stored-time');
    // if(storedTime){
    //     shoppingCart = JSON.parse(storedTime)
    // }
    // else {
    //     shoppingCart = {}  
    // }

    // //add time
    // const setTime = shoppingCart[time];
    // if(setTime){
    //     const newTime = setTime + 1;
    //     shoppingCart[time] = newTime
    // }
    // else {
    //     shoppingCart[time] = 1
    // }
    // localStorage.setItem('stored-time', JSON.stringify(shoppingCart))
}

const getStoredTime = () => {
    // let shoppingCart = {}

    // //get the shopping cart from local storage
    // const storedTime = localStorage.getItem('stored-time');
    // if(storedTime){
    //     shoppingCart = JSON.parse(storedTime)
    // }
    // return shoppingCart;



      const storedTime = localStorage.getItem('stored-time');
     return storedTime;
}

const breakTimeStore = time => {
    localStorage.setItem('Break-time', time)
}

export {addToStore, getStoredTime, breakTimeStore};