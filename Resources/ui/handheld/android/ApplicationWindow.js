function ApplicationWindow() {
	//declare module dependencies
	var MasterView = require('ui/common/MasterView'),
		DetailView = require('ui/common/DetailView');
		
	//create object instance
	var self = Ti.UI.createWindow({
		title:'RiskMath',
		layout: 'vertical',
		exitOnClose:true,
		navBarHidden:false,
		backgroundColor:'#ffffff'
	});
		
	//construct UI
	var masterView = new MasterView();
	self.add(masterView);

	//add behavior for master view
	masterView.addEventListener('formSubmit', function(e) {
		Ti.API.debug("formSubmit:" + JSON.stringify(e));
		
		//Get args
		var atk = e.atk;
		var def = e.def;
		var opts = e.options;
		
		//Create detail view
		var detailView = new DetailView(atk, def, opts);
		var detailContainerWindow = Ti.UI.createWindow({
			title:'Probabilities',
			navBarHidden:false,
			backgroundColor:'#ffffff'
		});
		detailContainerWindow.add(detailView);
		detailView.fireEvent('itemSelected',e);
		detailContainerWindow.open();
	});
	
	return self;
};

module.exports = ApplicationWindow;
