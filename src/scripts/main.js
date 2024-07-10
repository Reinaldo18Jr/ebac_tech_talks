AOS.init();

const dataDoEvento = new Date("Dec 12, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    
    const diaEmMs = 1000 * 60 * 60 * 24;
    const HoraEmMs = 1000 * 60 * 60;
    const MinutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);  //.floor arredonda valor quebrado para menor, ex: 5.7213 = 5 //
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / HoraEmMs);   // -%- recupera valor quebrado desconsiderado do math.floor //
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % HoraEmMs) / MinutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % MinutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento Expirado!'
    }
}, 1000)