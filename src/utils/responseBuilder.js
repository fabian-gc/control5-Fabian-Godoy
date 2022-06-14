exports.getOKResponse = (ctx, data) => {
    ctx.body = data
    ctx.status = 200
    return ctx
}

exports.getErrorResponse = (ctx) => {
    ctx.body = { status: 500, message: 'Hubo un error al mostrar toda la lista' }
    ctx.status = 500
    return ctx
}
exports.getOKEmptyResponse =(ctx => {
    ctx.body = { status: 200, message: 'No se han encontrado coincidencias' }
    ctx.status = 200
    return ctx
})