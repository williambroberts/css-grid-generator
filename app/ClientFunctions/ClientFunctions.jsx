export function generateRandomNumber(){
    return Math.floor((Math.random()*100)+1)
}

export function generateImageUrls(currentUrlsArray){
    let newArr = [...currentUrlsArray]
    //500 for min size returned must be > 500px (approx width parent box)
    let nextNumber =500+ generateRandomNumber()
    newArr.push(nextNumber)
    return newArr

}