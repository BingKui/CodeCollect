/*
 * 不定参数返回样式class属性值
 */
module.exports = (...args) => {
	let _arr = [];
	for(let arg of args) {
		let _item  = arg instanceof Array ? arg : (arg || "").split(" ");
		_arr = _arr.concat(_item);
	}
	return _arr.join(" ");
}