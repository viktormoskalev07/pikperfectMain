
          //images
          function fullQuality(item){ 
            const priority  = item.dataset.priority||0;
            setTimeout(function() {
            const webp = item.querySelector('.webp-img');
            const noWebp = item.querySelector('.nowebp-img');
            const fullWebp = webp.dataset.img;
            const fullNoWebp = noWebp.dataset.img;  
              webp.srcset=fullWebp; 
              noWebp.src=fullNoWebp;
            }, 1+300*priority);
          }
          function toggleMinImg(){ 
              const pictures = document.querySelectorAll('.toggle-img--js');  
              for (let i = 0; i < pictures.length; i++) {
                const pic = pictures[i]; 
                fullQuality(pic );  
              } 
          }  
      //images  
      
            //fonts 
            function addFont(){
                setTimeout(() => {
                  const globalFont= document.createElement('link');
                  const  FontStat= document.createElement('link');
                  FontStat.rel='preconnect';
                  FontStat.href='https://fonts.gstatic.com';
                  globalFont.rel='stylesheet';
                  globalFont.href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&family=Spectral:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap';
                  document.querySelector('head').append(FontStat);
                  document.querySelector('head').append(globalFont);
                }, 1);  
            } 
              //fonts
            

      //scripts
            window.addEventListener('load', function(){
                toggleMinImg();
                addFont();
                const place = document.querySelector('#script-place');  
                function addScript(path){
                    const someJs = document.createElement('script'); 
                    someJs.src=path; 
                    place.appendChild(someJs);       
                }  
                 const jq = document.createElement('script');
                        jq.src='https://code.jquery.com/jquery-3.5.1.min.js';

                        setTimeout(() => {
                            place.appendChild(jq);
                        }, 100);
                        
                          jq.onload=function(){ 
                            addScript('https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js');
                            addScript(' https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js  ');
                            if(place.dataset.carousel=='true'){ 
                               addScript(' js/owl.carousel.min.js ');
                            }
                           
                            addScript('  js/main.js ');
                          }
                                    
            })
//scripts





          

    