//RiskMath
//Uses Markov chaining to determine probabilistic outcomes of Risk battles
//Assumes both players roll the optimal (maximum) amount of dice possible
Ti.include('sylvester.js');

//Options constants
//exports.OPT_ATK_WINS_TIE = 'atk_wins_tie';

//Options
var atk_wins_tie = false;

//Q contains the probabilities of moving between one transient state and another
//R contains the probabilities of moving between a transient and absorbing state
//Absorbing states are any state where attacker or defender count is zero
var Q, R;

//Size of die
var sides = 6;

function RiskMath() {}

//Accepts number of attackers and defenders
//Attackers must be greater than one, and defenders must be at least one
//Attackers is defined as armies that can actually attack (total occupying minus one)
//Options specify rules modifications, as detailed in exports
RiskMath.init = function(atk, def, options) {
	//Sanity check
	if(atk <= 1) {
		throw("Attackers must be greater than one.");
	}
	
	if(def <= 0) {
		throw("Defenders must be greater than zero.");
	}
	
	options = options || {};
	
	//Parse options
	if(options[exports.OPT_ATK_WINS_TIE]) {	atk_wins_tie = true; };
	
	//Init math
	Q = this.initQ(atk, def);
	R = this.initR(atk, def);
}

//Initialize Q matrix - probability of transient to transient
RiskMath.initQ = function(atk, def) {
	Q = Matrix.Zero(atk * def, atk * def);
	
	//Fill probability array
	for(var x = 0;x < atk;x++) {
		for(var y = 0;y < def;y++) {
			//If attackers <= 1 or defenders <= 1. the next state must be absorbing
			//Either the attacker or the defender will be eliminated
			if(x <= 1 || y <= 1) {
				//Nothing to do, already zero	
			} else {
				//Otherwise, calculate the probability of the next transient state and fill the array with that value	
			}			
		}
	}
	
	Ti.API.debug("Matrix Q:");
	Ti.API.debug(Q.inspect());
}

//Initialize R matrix - probability of transient to absorbed
RiskMath.initR = function(atk, def) {
	R = Matrix.Zero(atk * def, parseInt(atk) + parseInt(def));
	
	//Fill probability array
	for(var x = 0;x < atk;x++) {
		for(var y = 0;y < def;y++) {
			//If attackers <= 1 or defenders <= 1. the next state must be absorbing
			//Either the attacker or the defender will be eliminated
			if(x <= 1 || y <= 1) {
				//Nothing to do, already zero	
			} else {
				//Otherwise, calculate the probability of the next transient state and fill the array with that value	
			}	
		}
	}
	
	Ti.API.debug("Matrix R:");
	Ti.API.debug(R.inspect());
}

//Calculates the base attacker win probability between two opposing forces
RiskMath.baseWinPct = function() {
	
}

//Calculates the attacker's expected losses
RiskMath.expectedLosses = function() {
	
}

//Rolls a d6
RiskMath.roll = function() {
	//TODO: Default JS random implementation may not be sufficient
	return Math.floor( (Math.random() * 6) + 1 );
}

//Export RiskMath
module.exports = RiskMath;
