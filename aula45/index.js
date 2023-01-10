const retornaHora = (date) => {
    if (date && !(date instanceof Date)) {
        throw new TypeError('Esperando Instancia de Date')
    }
    if (!date) {
        date = new Date();
    }
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'

    });
}

try {
    const data = new Date('01-01-1970 12:25:50')
    const hora = retornaHora(data);
    console.log(hora)
} catch (e) {
    console.log(e)
} finally {
    console.log('Tenha um otimo dia')
}