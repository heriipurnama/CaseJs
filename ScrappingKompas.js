`use strict`

const ineed = require('ineed');

ineed.collect.images.hyperlinks.from('https://www.kompas.com/tag/headline',  
  function (err, response, result) {
      let restHeadLine = result.hyperlinks;

    // rename property
    restRenameHref = JSON.parse(
                        JSON.stringify(restHeadLine).split('"href":').join('"URL":')
                     );

    restRenameText = JSON.parse(
        JSON.stringify(restRenameHref).split('"text":').join('"Title":'),
    );

    let resultRenameProperty = restRenameText;
   
    console.log(resultRenameProperty);
    
});
