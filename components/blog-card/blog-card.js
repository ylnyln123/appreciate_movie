// components/blog-card/blog-card.js
import utils  from '../../utils/util'
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		blog: Object
	},
	observers: {
		['blog.createTime'](val) {
			if (val) {
				this.setData({
					_createTime:  utils.formatTime(new Date(val))
				})
			}
		}
	},
	/**
	 * 组件的初始数据
	 */
	data: {
		_createTime: ''
	},

	/**
	 * 组件的方法列表
	 */
	methods: {

	}
})