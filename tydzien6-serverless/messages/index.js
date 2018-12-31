module.exports = async function (context, req) {
    context.log('Outputting data from Table binding.');

    context.res = {
        body: {
            status: 'ok',
            data: context.bindings.Messages || []
        }
    };
};