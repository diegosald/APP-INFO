const os = require('os')
function model () {
    const info = {
        'memoria': {'memtotal': os.totalmem(),
                'memlibre': os.freemem(),
                'memusada': os.totalmem()-os.freemem,
                'memlibreperc': (os.freemem())*100/os.totalmem(),
                'memusadaperc':((os.totalmem()-os.freemem())*100/os.totalmem()) },
        'cpuinfo':{'modelo':os.cpus()[0].model},
        'os':{'nombre':os.version(),
            'plataforma': os.type(),
            'arq': os.machine()},            
    }
return info
}
module.exports = model