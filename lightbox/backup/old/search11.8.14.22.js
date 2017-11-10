var octopus=[];
octopus.push(...model.pictures);
function mySearch(){
    const search = document.querySelector('#search');
    const suggestions = document.querySelector('#suggest');
    search.addEventListener('keyup',findMatches(search));;
    search.addEventListener('change',findMatches(search));
    function findMatches(search, octopus) {
      return octopus.filter(search => {
        const regex = new RegExp(search, 'gi');
        test(search);
        return octopus.match(regex);
      });
    }
    };
    mySearch();