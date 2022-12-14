/*app.routeData.instIO = async () => {
    if (app.url.params.installation) {
        app.data.installation = await app.functions.getById('installations', app.url.params.installation);
        app.data.customer = app.data.installation.customer;
    }

    var io = [];
    var ioTypes = await app.functions.get('io-types');

    for (var i = 0; i < ioTypes.length; i++) {
        var ioType = ioTypes[i];
        var typeResults = await app.functions.get(ioType.model, app.url.params);

        if (typeResults) {
            typeResults.forEach(res => {
                res._type = ioType.model;
                io.push(res);
            });
        }
    }

    app.data.io = io;
};*/

app.components.instIO = ({inst}) => {
    app.data.io.forEach(io => {
        io.detailLink = `/installations/${inst.id}/io/${io._type}/${io.id}`;
    });

    return {
        template: `
            <div class="inst-io">
                <h2>IO</h2>
                ${app.render('btnGroup', {newBtnUrl: `/installations/${inst.id}/io/new`})}
                ${app.render('table', {model: 'io', data: app.data.io, exclude: ['installation']})}
            </div>
        `
    }
};