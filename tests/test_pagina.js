const assert = require('assert');
const fs = require('fs');
const path = require('path');

describe('Prueba de la página HTML', function() {
    it('Debe contener el texto "Hola Mundo"', function(done) {
        fs.readFile(path.join(__dirname, '../html/index.html'), 'utf8', function(err, data) {
            if (err) throw err;
            assert(data.includes('Hola Mundo'), 'El texto "Hola Mundo" no se encuentra en el HTML');
            done();
        });
    });
});
