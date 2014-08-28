 /* CUSTOM SELECT DROPDOWN BEHAVIOURS
      * As click on Select Box header open Select Box 
      * As an option selected, close Select Box
      * As an option selected, assign the selected option to Select Box Header
      * As click outside of Select Box close Select Box
      * Find/assign clicked Select Box as the active Select Box so that you can change the value of only activeSelectBox incase there are multiple select boxes on the page
      * Animate Select Dropdown Arrow
  */
 
  var $selectSimple = $('.select_simple');
  var $selectSimpleHeader = $('.select_simple_header');
  var $selectSimpleArrow = $('.select_simple_header span');
  var $activeSelectSimple = "";
  var $activeSelectSimpleArrow = "";

  //Default Settings
  $selectSimpleArrow.addClass('deActiveArrow'); //Dropdown Arrow Position

  //Dropdown Option Box & Rotate DropDown Arrow
  var dropDown = function(x,y){
    
    x.toggleClass('activeSelect');
    y.toggleClass('deActiveArrow activeArrow');
  };

  /*On click select_simple_header
  * Assign active Select Box
  * Assign Active Select Dropdown Arrow
  * Apply dropDown behaviours to Active Select Box
  */
  $selectSimpleHeader.click(function(){
    
    $activeSelectSimple = $(this).parent($selectSimple); // Find the active Select Box 
    $activeSelectSimpleArrow = $activeSelectSimple.find('span'); // Find the active Select Box Arrow

    //Assign dropDown Behaviours
    dropDown($activeSelectSimple, $activeSelectSimpleArrow);

  }); 