const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();


app.set('port', process.env.PORT || 4000);


app.get('/data', (req, res)=>{
    res.send('123445');
})
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});