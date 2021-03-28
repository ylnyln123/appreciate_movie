export default {
	formatTime(date) {
		const year = date.getFullYear()
		const month = date.getMonth() + 1
		const day = date.getDate()
		const hour = date.getHours()
		const minute = date.getMinutes()
		const second = date.getSeconds()
		const formatNumber = n => {
			n = n.toString()
			return n[1] ? n : '0' + n
		}
		return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
	},
	setStorage(key, value) {
		wx.setStorageSync(key, value)
	},
	getStorage(key) {
		const data = wx.getStorageSync(key);
		return data;
	}
}