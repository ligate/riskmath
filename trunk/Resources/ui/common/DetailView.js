function DetailView(atk, def, options) {
	var self = Ti.UI.createWebView();
	
	Ti.API.debug("DetailView got:");
	Ti.API.debug("atk:" + atk);
	Ti.API.debug("def:" + def);
	Ti.API.debug("Options:" + options);
	
	//Initialize values to defaults if necessary
	atk = atk || 0;
	def = def || 0;
	options = options || {};
	
	//Init math
	var RiskMath = require('math/RiskMath');
	RiskMath.init(atk, def, options);
	
	//Render math results
	renderBaseWinPct(RiskMath.baseWinPct());
	renderExpectedLosses(RiskMath.expectedLosses());
	
	return self;
};

function renderBaseWinPct(pct) {
	
};

function renderExpectedLosses(losses) {
	
};

module.exports = DetailView;
