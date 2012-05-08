//RiskMath
//Uses Markov chaining to determine probabilistic outcomes of Risk battles
//Assumes both players roll the optimal (maximum) amount of dice possible

//Options constants
exports.OPT_ATK_WINS_TIE = 'atk_wins_tie';

//Options
var atk_wins_tie = false;

//Q contains the probabilities of moving between one transient state and another
//R contains the probabilities of moving between a transient and absorbing state
//Absorbing states are any state where attacker or defender count is zero
var Q, R;

//Class variables and default values
var atk = 0;
var def = 0;

//Constructor
//Accepts number of attackers and defenders
//Attackers must be greater than one, and defenders must be at least one
//Attackers is defined as armies that can actually attack (total occupying minus one)
//Options specify rules modifications, as detailed in exports
function RiskMath(atk, def, options) {
	//Sanity check
	if(atk <= 1) {
		throw("Attackers must be greater than one.");
	}
	
	if(def <= 0) {
		throw("Defenders must be greater than zero.");
	}
	
	options = options || {};
	
	//Attackers and defenders
	this.atk = atk;
	this.def = def;
	
	//Parse options
	if(options[exports.OPT_ATK_WINS_TIE]) {	atk_wins_tie = true; };
	
	//Init math
	Q = initQ(atk, def);
	R = initR(atk, def);
};

//Initialize Q matrix - probability of transient to transient
function initQ(atk, def) {
	//Fill probability array
	for(var x = 0;x < atk;x++) {
		Q[x] = [];
		
		for(var y = 0;y < def;x++) {
			//If attackers <= 1 or defenders <= 1. the next state must be absorbing
			//Either the attacker or the defender will be eliminated
			if(x <= 1 || y <= 1) {
				Q[x][y] = 0;	
			} 
			
			//Otherwise, calculate the probability of the next transient state and fill the array with that value
			
		}
	}
};

//Initialize R matrix - probability of transient to absorbed
function initR(atk, def) {
	//Fill probability array
	for(var x = 0;x < atk;x++) {
		R[x] = [];
		
		for(var y = 0;y < def;x++) {
			//If attackers <= 1 or defenders <= 1. the next state must be absorbing
			//Either the attacker or the defender will be eliminated
			if(x <= 1 || y <= 1) {
				R[x][y] = 0;	
			} 
			
			//Otherwise, calculate the probability of the next transient state and fill the array with that value
			
		}
	}
};

//Calculates the base attacker win probability between two opposing forces
RiskMath.prototype.baseWinPct = function() {
	
};

//Calculates the attacker's expected losses
RiskMath.prototype.expectedLosses = function() {
	
};

//Rolls a d6
RiskMath.prototype.roll = function() {
	//TODO: Default JS random implementation may not be sufficient
	return Math.floor( (Math.random() * 6) + 1 );
}

//Export RiskMath
module.exports = RiskMath;
