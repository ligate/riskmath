//UI constants
var form_element_height = '40dp';
var atk_def_width = '50dp';
var plus_minus_width = '40dp';
var top = '10dp';

var textFieldDefaults = {
	height: form_element_height,
	width: atk_def_width,
	value: '0',
	top: top,
	color: '#222',
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
};

//Master View Component Constructor
function MasterView() {
	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createScrollView({
		backgroundColor:'#ddd',
		contentHeight: 'auto',
		contentWidth: 'auto',
		layout:'vertical',
		
		showVerticalScrollIndicator:true,
		showHorizontalScrollIndicator:true,
	});

	//Create view panels
	createAttackerPanel(self);
	createDefenderPanel(self);
	createOptionsPanel(self);
	
	//Create submit button
	var submit = Ti.UI.createButton({
		title: 'Calculate!',
		height: '40dp',
		width: '100dp',
		top:'10dp'
	});
	submit.addEventListener('click', function() {
		self.fireEvent('formSubmit', {
			atk: atk_box.value,
			def: def_box.value,
			options: collectOptions(self) 
		});
	});
	
	self.add(submit);
	
	return self;
};

function createAttackerPanel(view) {
	//Attack label
	var atk_label = Ti.UI.createLabel({
		text: 'Attackers',
		color: '#222',
		font: {
			fontWeight: 'bold',
			fontSize: '16dp'
		}
	});
	
	//Attack panel
	var atk_view = Ti.UI.createView({
		layout: 'horizontal'
	});
	var atk_box = Ti.UI.createTextField(textFieldDefaults);
	var atk_plus = Ti.UI.createButton({
		title: "+",
		top: top,
		height: form_element_height,
		width: plus_minus_width
	});
	var atk_minus = Ti.UI.createButton({
		title: "-",
		top: top,
		height: form_element_height,
		width: plus_minus_width
	});
	
	//Attack box and increment/decrement listeners
	atk_box.addEventListener('change',function(e){
	    atk_box.value = atk_box.value.replace(/[^0-9]+/,"");
	});
	atk_plus.addEventListener('click', function() {
		var val = parseInt(atk_box.value);
		atk_box.value =  (val + 1).toString();
	});
	
	atk_minus.addEventListener('click', function() {
		var val = parseInt(atk_box.value);
		if(val > 0) {
			atk_box.value = (val - 1).toString();
		}
	});
	
	atk_view.add(atk_box);
	atk_view.add(atk_plus);
	atk_view.add(atk_minus);
	
	view.add(atk_label);
	view.add(atk_view);
};

function createDefenderPanel(view) {
	//Defender label
	var def_label = Ti.UI.createLabel({
		text: 'Defenders',
		color: '#222',
		font: {
			fontWeight: 'bold',
			fontSize: '16dp'
		}
	});
	
	//Defender panel
	var def_view = Ti.UI.createView({
		layout: 'horizontal'
	});
	var def_box = Ti.UI.createTextField(textFieldDefaults);
	var def_plus = Ti.UI.createButton({
		title: "+",
		top: top,
		height: form_element_height,
		width: plus_minus_width
	});
	var def_minus = Ti.UI.createButton({
		title: "-",
		top: top,
		height: form_element_height,
		width: plus_minus_width
	});
	
	//Defender box and increment/decrement listeners
	// def_box.addEventListener('change',function(e){
	    // def_box.value = def_box.value.replace(/[^0-9]+/,"");
	// });
	def_plus.addEventListener('click', function() {
		var val = parseInt(def_box.value);
		def_box.value =  (val + 1).toString();
	});
	
	def_minus.addEventListener('click', function() {
		var val = parseInt(def_box.value);
		if(val > 0) {
			def_box.value = (val - 1).toString();
		}
	});
	
	def_view.add(def_box);
	def_view.add(def_plus);
	def_view.add(def_minus);
	
	view.add(def_label);
	view.add(def_view);
};

function createOptionsPanel(view) {
	//Options label
	var opt_label = Ti.UI.createLabel({
		text: 'Options',
		color: '#222',
		font: {
			fontWeight: 'bold',
			fontSize: '16dp'
		}
	});
	
	//Options
	var atk_wins_ties = Ti.UI.createSwitch({
		style: Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
		title: 'Attacker wins ties',
		color: '#222',
		font: {
			fontSize: '16dp'
		}
	});
	
	view.add(opt_label);
	view.add(atk_wins_ties);
};

function collectOptions(view) {
	
};

module.exports = MasterView;