let evt=new Event('KK',{vilage:'Kukatapalli'})

document.addEventListener('KK',function (e){
console.log(e)
    console.log('User assessment completed' )
})
document.dispatchEvent(evt)