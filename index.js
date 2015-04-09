/**************************************
FILENAME: 				index.js JAVASCRIPT FILE
AUTHOR: 					ERIC SCOTT PHUNG
PURPOSE: 					JAVSCRIPT FOR HOME PAGE (HTML5)
CREATED:
MODIFIED:
*************************************/

$(document).ready(function(argument){


/*
* This is the plugin FOR BOOTSTRAP MODAL PDF VIEWER!!!
*/
(function(a){a.createModal=function(b){defaults={title:"",message:"Your Message Goes Here!",closeButton:true,scrollable:false};var b=a.extend({},defaults,b);var c=(b.scrollable===true)?'style="max-height: 420px;overflow-y: auto;"':"";html='<div class="modal fade" id="myModal">';html+='<div class="modal-dialog">';html+='<div class="modal-content">';html+='<div class="modal-header">';html+='<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';if(b.title.length>0){html+='<h4 class="modal-title">'+b.title+"</h4>"}html+="</div>";html+='<div class="modal-body" '+c+">";html+=b.message;html+="</div>";html+='<div class="modal-footer">';if(b.closeButton===true){html+='<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>'}html+="</div>";html+="</div>";html+="</div>";html+="</div>";a("body").prepend(html);a("#myModal").modal().on("hidden.bs.modal",function(){a(this).remove()})}})(jQuery);

/*
* Here is how you use it ================================
*/


// static variables
// var pdfTwo = "";
// var pdfThree = "";
// var pdfFour = "";
// var pdfFive = "";
// var pdfSix = "";
var pdfOne = "docs/exhibit001settlementstatement.pdf";
var pdfTwo = "docs/exhibit002directpaychecksEMC.pdf";

// ...

// PDF ONE MODAL PDF VIEWER
function pdfModalBodyEvent(filename){
	// PDF ONE
	$('.view-pdfOne').on('click',function(){
		//var pdf_linkOne = "http://cs.iupui.edu/~esphung/powellWebApp/placeEssay.pdf"; // SOURCE PDF HERE!!!
		var iframe = '<div class="iframe-container"><iframe zoom="page-width" src="'+filename+'"></iframe></div>'
		$.createModal({
		title:'My Title',
		message: iframe,
		closeButton:true,
		scrollable:false
		});
		return false;
    });
} // end pdf one modal

pdfModalBodyEvent(pdfOne);




// PDF TWO MODAL PDF VIEWER
$(function(){
	// PDF TWO
	$('.view-pdfTwo').on('click',function(){
		var pdf_linkTwo = "docs/exhibit002directpaychecksEMC.pdf"; // SOURCE PDF HERE!!!
		var iframe = '<div class="iframe-container"><iframe src="'+pdf_linkTwo+'"></iframe></div>'
		$.createModal({
		title:'My Title',
		message: iframe,
		closeButton:true,
		scrollable:false
		});
		return false;
    });
}) // end pdf two modal




// PDF THREE MODAL PDF VIEWER
$(function(){
	// PDF THREE
	$('.view-pdfThree').on('click',function(){
		var pdf_linkThree = "docs/exhibit003counterclaim9.11.06.pdf"; // SOURCE PDF HERE!!!
		var iframe = '<div class="iframe-container"><iframe src="'+pdf_linkThree+'"></iframe></div>'
		$.createModal({
		title:'My Title',
		message: iframe,
		closeButton:true,
		scrollable:false
		});
		return false;
    });
}) // end pdf three modal



// PDF Twelve MODAL PDF VIEWER
$(function(){
	// PDF Twelve
	$('.view-pdfFour').on('click',function(){
		var pdf_linkTwelve = "docs/exhibit004modificationsigned.11.14.06.pdf"; // SOURCE PDF HERE!!!
		var iframe = '<div class="iframe-container"><iframe src="'+pdf_linkTwelve+'"></iframe></div>'
		$.createModal({
		title:'My Title',
		message: iframe,
		closeButton:true,
		scrollable:false
		});
		return false;
    });
}) // end pdf Twelve modal




	//$(".homePage").hide(50); // hide page stuff
	//$(".articlePageContent").hide(50); // hide page stuff

	// hide suscribe button on click submit button
	$(".hideBtn").click(function(){
		//$("form").fadeOut('45', function() {});// hide form
		$(".btnNotify").hide('45');// hide form Btn
		//alert("Thanks!!!")
	}); // end hide btn function


	//..javascript for page body goes here









	// CLICK FUNCTIONS!!!!!!!
	$(".articlePageBtn").click(function(){
		//$(this).append('<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>'); // add checkmark
		$("footer").hide(760);// hide form
		$(".homePage").hide(760); // hide home page stuff
		$(".articlePageContent").show(760)


	}); // end article page btn function


	// on 'Home' btn click
	$(".homePageBtn").click(function(){
		//$("form").fadeOut('45', function() {});// hide form
		$("footer").hide(760);// hide form
		//$(this).append('<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>');
		$(".homePage").show(760); // end fade in for home page elems
		$(".articlePageContent").hide(760)
	}); // end home page btn function


	// highlight articles on mouse hover
	$('.highlight').hover(function() {
		$(this).css("background-color", "#FDB900");
	}, function() {
		$(this).css("background-color", "white");
	}); // end IMAGE SHake EVENT





	// check icon "contact me" on submit button
	$(".submitBtn").one('click', function(){
		$(".contactPageBtn").append('<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>'); // add checkmark
	}); // end submit btn click













});// end doc ready









