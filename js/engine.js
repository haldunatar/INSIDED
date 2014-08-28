$(function(){

  //SideBar - Accordion Menu
  $(".js-nav").click(function(){
    //slide up all the link lists
    $("nav ul ul").slideUp();
    //slide down the link list below the h3 clicked - only if its closed
    if(!$(this).next().is(":visible"))
    {
      $(this).next().slideDown();
    }
  });

 /* CUSTOM SELECT DROPDOWN BEHAVIOURS
      * As click on Select Box header open Select Box 
      * As an option selected, close Select Box
      * As an option selected, assign the selected option to Select Box Header
      * As click outside of Select Box close Select Box
      * Find/assign clicked Select Box as the active Select Box so that you can change the value of only activeSelectBox incase there are multiple select boxes on the page
      * Animate Select Dropdown Arrow
  */
  
  //As click outside of Select Box close activeSelect Box
var close_selectBox = (function() {

    var activeJs_container = "";
    var activeJs_containerArrow = "";
    $(document).mouseup(function (e){
      
      //Find the active Select Box
      $('.js_container').click(function(){
            activeJs_container = $(this);
            activeJs_containerArrow = $(this).find('.js_arrow');
      });

      var container = activeJs_container;

      if(!container.is(e.target) && container.has(e.target).length === 0) // ... nor a descendant of the container, if the target of the click isn't the container...
      {
        container.removeClass('activeSelect calendarActive'); 
        activeJs_containerArrow.removeClass('activeArrow').addClass('deActiveArrow');
             
      }
  });

})();//Close close_selectBox


var simple_select = (function() {
  
  var $selectSimple = $('.select_simple');
  var $selectSimpleHeader = $('.select_simple_header');
  var $selectSimpleArrow = $('.select_simple_header span');
  var $selectSimpleOption = $('.optionBox_simple input:checkbox');
  var $activeSelectSimple = "";
  var $activeSelectSimpleHeader ="";
  var $activeSelectSimpleArrow = "";
  var $activeSelectSimpleHeaderTxt = "";

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
    
    $activeSelectSimpleHeaderTxt = $(this).find('p').html(); //Get Default Select Header Txt so that you can set default name as an option is unchecked
    $activeSelectSimpleHeader = $(this).find('p');// Find the active Select Box Header to assign selected option
    $activeSelectSimple = $(this).parent($selectSimple); // Find the active Select Box 
    $activeSelectSimpleArrow = $activeSelectSimple.find('span'); // Find the active Select Box Arrow
    
    //Assign dropDown Behaviours
    dropDown($activeSelectSimple, $activeSelectSimpleArrow);

  });
  /* On select an option   */
  $selectSimpleOption.click(function(){
 
      var $selectedOptionTxt = $(this).val();
      $activeSelectSimpleHeader.html($selectedOptionTxt);

      //Assign dropDown Behaviours
    dropDown($activeSelectSimple, $activeSelectSimpleArrow);
 
  });
 
})();//Close simple_select


//Multi Select Box Behaviours

var multi_select = (function() {

  var $selectMulti = $('.select_multi');
  var $selectMultiHeader = $('.select_multi_header');
  var $selectMultiHeaderTxt = $('.select_multi_header p');
  var $selectMultiArrow = $('.select_multi_header span');
  var $selectMultiCheckbox = $('.optionBox_multi input:checkbox');
  var $totalCheckbox = 0;

  //Default Settings
  $selectMultiArrow.addClass('deActiveArrow'); //Dropdown Arrow Position

  //Dropdown Option Box & Rotate DropDown Arrow
  var dropDown = function(x,y){
    
    x.toggleClass('activeSelect');
    y.toggleClass('deActiveArrow activeArrow');
  };

  //On click select_multi_header
  $selectMultiHeader.click(function(){

  //Assign dropDown Behaviours
    dropDown($selectMulti, $selectMultiArrow);

  }); 

  //Check & Uncheck All
    $('#checkAll').click(function(){
      $selectMultiCheckbox.prop('checked', true); 
      $totalCheckbox = $(".optionBox_multi input:checkbox:checked").length;
      $selectMultiHeaderTxt.html($totalCheckbox + ' selected');


  //Assign dropDown Behaviours
    dropDown($selectMulti, $selectMultiArrow);
  
    });
    $('#unCheckAll').click(function(){
      $selectMultiCheckbox.prop('checked', false);  
      $selectMultiHeaderTxt.html('Select one or more options');    

  //Assign dropDown Behaviours
    dropDown($selectMulti, $selectMultiArrow);
    });

  //Select an multi select option
    $selectMultiCheckbox.change(function(){

      $totalCheckbox = $(".optionBox_multi input:checkbox:checked").length;
      $selectMultiHeaderTxt.html($totalCheckbox + ' selected');
      if($totalCheckbox === 0){ //If checked option number returns to 0, return header txt to Default 
        $selectMultiHeaderTxt.html('Select one or more options'); 
      } 

    });
 
})();//Close multi_select
 
 
// DatePicker Select Box

var datePicker_select = (function() {

  var $selectDatePicker = $('.select_datePicker');
  var $selectDatePickerHeader = $('.select_datePicker_header');
  var $selectDatePickerArrow = $('.select_datePicker_header span');
  var $activeSelectDatePicker = "";
  var $activeSelectDatePickerArrow = "";

  //Default Settings
  $selectDatePickerArrow.addClass('deActiveArrow'); //Dropdown Arrow Position

  var dropDown = function(x,y){
    
    x.toggleClass('calendarActive');
    y.toggleClass('deActiveArrow activeArrow');
  };

 
  $('.js--datePicker').click(function(){
 
      $activeSelectDatePicker = $(this).closest($selectDatePicker);
      $activeSelectDatePickerArrow = $activeSelectDatePicker.find('span'); // Find the active Select Datepicker Box Arrow
      dropDown($activeSelectDatePicker, $activeSelectDatePickerArrow);

    
  }); 

  //Load jQuery Datepicker
  $(function() {
            $("#datepicker1").datepicker({
            onSelect: function(date) {
            $selectDatePicker.removeClass('calendarActive'); //Open Datepicker Select Dropdown
            $selectDatePickerArrow.removeClass('activeArrow').addClass('deActiveArrow');
            $('#sec--row2').removeClass('disactive-box2'); //Open Rij 2 Row 2
            $tag2.show(); //Open Tag
            $clearAll.show(); //Open Clear All
            $tCount = $tCount + 1;
      
        }
        });
         $("#datepicker2").datepicker({
            onSelect: function(date) {
            $selectDatePicker.removeClass('calendarActive'); //Open Datepicker Select Dropdown
            $selectDatePickerArrow.removeClass('activeArrow').addClass('deActiveArrow');
            $closeCross.show();
        }
        });
  });
 
})();//Close datePicker_select

//Page Interactions
var select_interact = (function() {

  var $row1 = $('.js--row1');
  var $row2 = $('.js--row2');
  var $row3 = $('.js--row3');
  var $row4 = $('.js--row4');
  var $row5 = $('.js--row5'); //Opens via Second DatePicker
  var $row6 = $('.js--row6');
  var $row7 = $('.js--row7');
  var $tag1 = $('.tag1');
  this.$tag2 = $('.tag2'); //Call it in datePicker_select
  var $tag3 = $('.tag3');
  this.$clearAll = $('.clearAll'); //Call it in datePicker_select
  this.$closeCross = $('.closeCross');

  //Default Select Box Headers & Texts ** Cuz we may want to assign Select Box Default txt back to original as we uncheck them with tags..
  var $row1Txt = "Comments";
  var $row2Txt = "Date To";
  var $row3Txt = "Group";
  var $row4Txt = "is greater than";
  var $row5Txt = "Before / After / On";
  var $row6Txt = "Select one or more options";
  var $row7Txt = "Date To";
  $row1Header = $('.js--row1Head');
  $row2Header = $('.js--row2Head');
  $row3Header = $('.js--row3Head');
  $row4Header = $('.js--row4Head');
  $row5Header = $('.js--row5Head');
  $row6Header = $('.js--row6Head');
  $row7Header = $('.js--row7Head');

  //Default Settings 
  $tag1.hide();
  $tag2.hide();
  $tag3.hide();
  $clearAll.hide();
  $closeCross.hide();


  //Filter Tag Manipulations
  $tag1.click(function(){
    $row1.removeClass('selected').addClass('unSelected');
    $(this).hide();
    $row1Header.html($row1Txt);
    $('#sec--row1').addClass('disactive-box1');
    $row4Header.html($row4Txt);

    $tCount = $tCount - 1;
    if($tCount == 0){
    $clearAll.hide();
    } 
 
  });

  $tag2.click(function(){
    $row2.removeClass('selected').addClass('unSelected');
    $tag2.hide();
    $closeCross.hide();
    $('#sec--row2').addClass('disactive-box2');
    $row5Header.html($row5Txt);
    $('input[name=datePicker1]').val('Registration Date');
    $('input[name=datePicker2]').val('Date To');
    $('#sec--row4').addClass('disactive-box4');

    $tCount = $tCount - 1
    if($tCount == 0){
    $clearAll.hide();
    } 

  });
  $tag3.click(function(){
    $row3.removeClass('selected').addClass('unSelected');
    $tag3.hide();
    $('#sec--row3').addClass('disactive-box3');
    $row3Header.html($row3Txt);
    $row6Header.html($row6Txt);
    $('.optionBox_multi input:checkbox').prop('checked', false);

    $tCount = $tCount - 1;
    if($tCount == 0){
    $clearAll.hide();
    } 

  });


  //Count tags to close Clear All link as there are nog tags selected
  this.$tCount = 0;
  //As an option in a row is selected, assign that row active so that interaction can start
  $row1.click(function(){

    $('#sec--row1').removeClass('disactive-box1'); //Open Rij 2 Row 1
    $tag1.show();
    $clearAll.show();
    $tCount = $tCount + 1;

  });
  //Row2 is activated in previous 'datePicker' class
  $row3.click(function(){
    $('#sec--row3').removeClass('disactive-box3');
    $tag3.show();
    $clearAll.show();
    $tCount = $tCount + 1;
  });
  $row5.click(function(){
    $('#sec--row4').removeClass('disactive-box4');
  });


    //Reset Everything..
  $clearAll.add($closeCross).click(function(){
    $('.tag').hide();
    $closeCross.hide();
    $row1Header.html($row1Txt);
    $('#sec--row1').addClass('disactive-box1');
    $row4Header.html($row4Txt);
    $('#sec--row2').addClass('disactive-box2');
    $row5Header.html($row5Txt);
    $('input[name=datePicker1]').val('Registration Date');
    $('input[name=datePicker2]').val('Date To');
    $('#sec--row4').addClass('disactive-box4');
    $('#sec--row3').addClass('disactive-box3');
    $row3Header.html($row3Txt);
    $row6Header.html($row6Txt);
    $('.optionBox_multi input:checkbox').prop('checked', false);
 
  });
 

})();//Close select_interact


var table_act = (function(){
 

    $('.table_names input:checkbox').click(function(){
      var $checkTotal = $(".table_names input:checkbox:checked").length;
      if($checkTotal > 0){
        $('.table_selectBoxes').show();
      }else{
        $('.table_selectBoxes').hide();
      }
      var $c = $(this).closest('tr');
      $c.toggleClass('activeTableRow');
      
    });

})();//Close table_act
 


});//Close jQ