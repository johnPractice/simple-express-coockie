const app = require('./src/app');
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.clear();
    console.log(`Listening on port ${port}..`);
});