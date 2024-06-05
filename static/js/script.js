const meml = document.getElementById('meml')
const memu = document.getElementById('memu')
const memt = document.getElementById('memt')
const cpuinfo = document.getElementById('cpuinfo')
const osinfo = document.getElementById('osinfo')
const plat = document.getElementById('plat')
const arq = document.getElementById('arq')
const gmeml = document.getElementById('gmeml')
const gmemu = document.getElementById('gmemu')

async function traerinfo() {
    const res = await fetch('http://127.0.0.1:8080/info')
    const data = await res.json()
    console.log(data)
    meml.innerHTML = parseFloat(data.memoria.memlibre/(1024*1024*1024)).toFixed(2)
    memu.innerHTML = parseFloat(data.memoria.memusada/(1024*1024*1024)).toFixed(2)
    memt.innerHTML = parseFloat(data.memoria.memtotal/(1024*1024*1024)).toFixed(2)
    cpuinfo.innerHTML = data.cpuinfo.modelo
    osinfo.innerHTML = data.os.nombre
    plat.innerHTML = data.os.plataforma
    arq.innerHTML = data.os.arq
    gmeml.innerHTML = parseFloat(data.memoria.memlibreperc).toFixed(2)
    gmemu.innerHTML = parseFloat(data.memoria.memusadaperc).toFixed(2)
    gmeml.style.width = parseFloat(data.memoria.memlibreperc).toFixed(2)  + '%'
    gmemu.style.width = parseFloat(data.memoria.memusadaperc).toFixed(2) + '%'
    if (parseFloat(data.memoria.memusadaperc) >= parseFloat(80.00) ){
        gmemu.classList.add('bg-danger')
    }else { (gmemu.classList.remove('bg-danger'))}
    
    if (parseFloat(data.memoria.memlibreperc) <= parseFloat(20) ){
        gmeml.classList.add('bg-danger')
    }else {(gmeml.classList.remove('bg-danger'))}

    console.log(5)












   
   // console.log(memlibreperc + " " + memusadaperc)
}
traerinfo()
setInterval(traerinfo,5000)
