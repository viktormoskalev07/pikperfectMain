const resizeto = 150 ;//если изображение больше чем minWidth* сделать его resizeto*
const minWidth =320;  //если изображение больше чем minWidth* сделать его resizeto*
const divider = 3;      // если изображение меньше чем minWidth* поделить его на divider* ставьте 1 если не нужно менять сайз
const baseFolder = './dist/images/towebp'; 
 


const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const chalk = require('chalk')
const sizeOf = require('image-size');
const fsExtra = require('fs-extra')

fsExtra.emptyDirSync('./build');
let ncp = require('ncp').ncp;
 
ncp.limit = 16;
 function copyToBuild(){
     
    ncp('./dist', 'build', function (err) {
        if (err) {
          return console.error(err);
        }
       });
       console.log(chalk.green('build...'));
 } 
 
function makeImages(){



const getFiles = function (dir, files_){
    
  files_ = files_ || [];
    const files = fs.readdirSync(dir);
    for (let i in files){
        const name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
};

console.log(chalk.green('images build min to:'+resizeto+' px'));

const images = getFiles(baseFolder);
let current =0;
let max= images.length+1;
images.forEach(img => {
    current++;
    const ext = path.extname(img);
    const filename =  path.basename(img ,ext);
    const dirname =path.dirname(img); 
    const outputMin = dirname +'/'+'min-'+ filename + ext; 
    const outputWebp = dirname +'/'+ filename +   '.webp'; 
    const outputWebpMin = dirname +'/'+'min-'+ filename +  '.webp';  
    if((ext=='.jpg'||ext=='.jpeg'||ext=='.png'||ext=='.gif')&&!filename.includes('min-')){
        
         
        const oldSize = sizeOf(img).width;
        let newSize = oldSize;

       
        if (newSize > minWidth){
          newSize =resizeto;
        } else {
          newSize= Math.round(newSize/divider);
        }
        console.log (img +  ' file '+current+' from '+max+' change width from: ',chalk.blue(oldSize+'px'),'to', chalk.green(newSize+'px'));
       
     sharp(img)
     .resize(newSize)
     .toFile(outputMin, (err,info)=>{
        if(err){
            console.log(chalk.red(err));
        } 
    });   

    sharp(img).webp().toFile(outputWebp, (err,info)=>{
        if(err){
            console.log(chalk.red(err));
        } 
    });  
    sharp(img).webp().resize(newSize).toFile(outputWebpMin, (err,info)=>{
        if(err){
            console.log(chalk.red(err));
        } 
    });  

    } else {
        if (ext!=='.svg'&& ext!=='.webp'&&!filename.includes('min-')){
            console.log(ext)
            console.error(chalk.red('      builder.js            error in extname                         is it img ?  '+  img));
        }
    }
//  if(current==max-1){
    
//  }
}); 
 console.log(chalk.green('images done , copying to build...'));
}
 
 makeImages();
 
 copyToBuild();
 