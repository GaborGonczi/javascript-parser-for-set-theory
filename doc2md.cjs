const jsdoc2md=require('jsdoc-to-markdown');
const fs=require('fs');
jsdoc2md.render({files:'src/*.js'}).then(data=>{
    fs.writeFile('./docs/markdown/doc.md',data,err=>{
        if(err){
            console.log(err);
        }
    })
});