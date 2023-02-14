const chargeEl = document.querySelector('.charge'),
batterPercent = document.querySelector('span'),
batterInfo = document.querySelector('.info');

window.onload = ()=>{
    if(!navigator.getBattery){
        alert('Battery status api is not supported in your browser')
        return false;
    }
}

navigator.getBattery().then(battery=>{
    function updateAllBatteryInfo(){
        updateChargingInfo();
        updateLevelInfo();
    }

    updateAllBatteryInfo()
    battery.addEventListener('chargingchange',()=>{
        updateAllBatteryInfo();
    })

    battery.addEventListener('levelchange',()=>{
        updateAllBatteryInfo();
    })

    function updateChargingInfo(){
        if(battery.charging){
            chargeEl.classList.add('active')
            batterInfo.innerHTML = ""
        }else{
            chargeEl.classList.remove('active')
            // display battery status 
            if(parseInt(battery.dischargingTime)){
                let hr = parseInt(battery.dischargingTime / 3600)
                let min = parseInt(battery.dischargingTime / 60 - hr * 60);
                batterInfo.innerHTML = `${hr} ${min} remaining`
            }
        }
    }

    function updateLevelInfo(){
        let batteryLevel = `${parseInt(battery.level * 100)}%`
        batterPercent.innerHTML = batteryLevel
        chargeEl.style.width = batteryLevel
    }
})
