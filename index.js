'use strict';

module.exports = function (globArray) {
	if (!globArray.length)
		return false;
	var plainNegatingGlobs      = []; // stores all the negating globs without the preceding !
	var nonNegatingGlobs        = [];
	var descendentNegatingGlobs = [];
	var globPat                 = /^!(.*)$/;
	for (var glob in globArray) {
		var matches = null;
		if ((matches = globPat.exec(globArray[glob])) !== null)
			plainNegatingGlobs.push(matches[1]);
		else
			nonNegatingGlobs.push(globArray[glob]);
	}
	for (var nng in nonNegatingGlobs)
		for (var png in plainNegatingGlobs)
			if (plainNegatingGlobs[png] !== nonNegatingGlobs[nng] &&
				nonNegatingGlobs[nng].substring(0, plainNegatingGlobs[png].length) === plainNegatingGlobs[png]) {
				descendentNegatingGlobs.push(nonNegatingGlobs[nng]);
				break;
			}
	return nonNegatingGlobs.length === descendentNegatingGlobs.length;
};
