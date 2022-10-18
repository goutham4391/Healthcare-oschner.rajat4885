
let searchQuery = document.getElementById('searchQuery');

searchQuery.addEventListener('input',function(e){
        let queryInput = e.target.value;
        console.log(e);
        if(queryInput != ''){
            this.setAttribute('name','q');
  
            //locationFilters.setAttribute('class','row filter-on');
            
        }
        else{
            this.removeAttribute('name');
            this.setAttribute("value","");
            console.log("is empty");
            //locationFilters.setAttribute('class','row filter-off');
        }
    
});

let zipcodeQuery = document.getElementById('zipcodeQuery');
let radiusQuery = document.getElementById('radiusQuery');
let radiusQueryLabel = document.querySelector('label[for="radiusQuery"]');

zipcodeQuery.addEventListener('input',function(e){
        let zipcodeSelect = e.target.value;
        if(zipcodeSelect != ''){
            this.setAttribute('name','near');
            radiusQuery.setAttribute('name','distance');
            radiusQuery.setAttribute('class','form-control filter-on');
            if(!radiusQueryLabel.classList.replace('filter-off', 'filter-on')){
                radiusQueryLabel.classList.add('filter-on')
            }
        }
        else{
            this.removeAttribute('name');
            radiusQuery.removeAttribute('name');
            radiusQuery.setAttribute('class','form-control filter-off');
            if(!radiusQueryLabel.classList.replace('filter-on', 'filter-off')){
                radiusQueryLabel.classList.add('filter-off')
            }

        }
        
});

let serviceQuery = document.getElementById('serviceQuery');
serviceQuery.addEventListener('change',function(e){
        let serviceSelect = e.target.value;
        
        
        if(serviceSelect != ''){
            this.setAttribute('name','specialty');
          
        }
        else{
            this.removeAttribute('name');
        }
        
});

let locationFilters = document.getElementById('location-filters');