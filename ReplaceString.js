	function ReplaceString(initialString, finalString) {
		var watch = selectAll(".watch");
		for (var i = 0; i < watch.length; i++) {
			var target = watch[i].html();
			var targetSplit = target.split(initialString);
			var targetResult = targetSplit[0] + finalString + targetSplit[1]; 
			watch[i].html(targetResult, false);
		}

	}