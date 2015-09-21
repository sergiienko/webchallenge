function hasClass(obj, className) {
	var classAttr = obj.getAttribute('class');
	var classArr = classAttr.split(' ');
	for(var i = 0; i < classArr.length; i++)
		if (classArr[i] == className)
			return true;
	return false;
}
