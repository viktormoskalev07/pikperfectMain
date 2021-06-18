
            window.addEventListener('load', function(){
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
                            addScript(' js/owl.carousel.min.js ');
                            addScript('  js/main.js ');
                          }
                                    
            })


    