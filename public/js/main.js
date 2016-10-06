$(document).ready(function() 
  { 
    $.tablesorter.addParser({ 
        // set a unique id 
        id: 'progress', 
        is: function(s) { 
            // return false so this parser is not auto detected 
            return false; 
        }, 
        format: function(s, c, d) { 
            console.log($(d).attr('value'))
            return $(d).attr('value');
        }, 
        // set type, either numeric or text 
        type: 'numeric' 
    });         
    
    $('.tablesorter').each(function(index, el){
      $(this).tablesorter({
            headers: { 
                1: { 
                    sorter:'progress' 
                },
                2: { 
                    sorter:'progress' 
                }
            } 
        });
    }); 
  } 
);