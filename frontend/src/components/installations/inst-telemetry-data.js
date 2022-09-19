app.routeData.instTelemetryData = async () => {
    app.data.installation = await app.functions.getById('installations', app.url.params.installation);
    app.data.customer = app.data.installation.customer;
};

app.components.instTelemetryData = () => {
    return {
        template: `
            <div class="inst-telemetry-data">
                ${app.render('instPageTemplate', {
                    mainContent: `
                        <div>
                            <h2>Telemtetry Data</h2>
                            ${app.render('table', {model: 'telemetry-data'})}
                        </div>
                    `
                })}
            </div>
        `
    }
};