//Master View Component Constructor
function MasterView() {
	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createScrollView({
		backgroundColor:'#ddd'
	});
	
	//Create form
	var forms = require('forms');
	
	var fields = [
		{ title: 'Attackers', type: 'number', id: 'attackers'},
		{ title: 'Defenders', type: 'number', id: 'defenders'},
		{ title: 'Calculate!', type: 'submit', id: 'formSubmit'}
	];
	
	var form = forms.createForm({
		fields: fields,
		style: forms.STYLE_LABEL
	});
	
	self.add(form);
	
	//add behavior
	form.addEventListener('formSubmit', function(e) {
		Ti.API.debug(e);
	});
	
	return self;
};

module.exports = MasterView;