const Util = require('../../utils/util.js');
Page({
    data: {
        canUseSetClipboardData: wx.canIUse('setClipboardData')
    },
    payMeMoney() {
        wx.previewImage({
          urls: ['http://www.fuyue.xyz/Resource/Manage/img/other/%E8%B5%9E%E8%B5%8F%E7%A0%81.jpg']
        });
    },
    onLoad() {
        wx.setNavigationBarTitle({
            title: '关于'
        });
    },
    toast: function () {
      wx.navigateTo({
        url: '../out/out'
      })
    },
    // 定义转发
    onShareAppMessage: Util.shareConfig,
    payMeBtc() {
        wx.setClipboardData({
          data: '1LYL8sHrsQEVMCv6TDQrXU5DxTtqQHmN64',
            success: res => {
                wx.showModal({
                    title: '感谢您的支持!',
                    content: 'BTC钱包收款地址已经复制至您的手机剪切板',
                    showCancel: false,
                    confirmText: '好的'
                });

                wx.setStorage({
                    key: 'isPayLeoMoney',
                    data: true
                });
            },
            fail: err => {
                wx.showToast({
                    title: '复制失败，请重试'
                });
            }
        })
    },
    payMeEth() {
        wx.setClipboardData({
          data: '0x923667c029573526b0FDfAD8F5e206C751015b71',
            success: res => {
                wx.showModal({
                    title: '感谢您的支持!',
                    content: 'imtoken钱包收款地址已经复制至您的手机剪切板',
                    showCancel: false,
                    confirmText: '好的'
                });

                wx.setStorage({
                    key: 'isPayLeoMoney',
                    data: true
                });
            },
            fail: err => {
                wx.showToast({
                    title: '复制失败，请重试'
                });
            }
        })
    }
    
});