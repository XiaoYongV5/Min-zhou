const Util = require('../../utils/util.js');
// 背景音乐
const innerAudioContext = wx.createInnerAudioContext()
Page({
  onReady: function (e) {
    // bgm: true;
    innerAudioContext.autoplay = true;
    innerAudioContext.loop = true;
    innerAudioContext.src = 'http://www.fuyue.xyz/Resource/Manage/voice/Bonus_Track.mp3';
    innerAudioContext.play()
  },
    data: {
        searchKey: '', // 输入查询的关键字
        mp3: 'http://www.fuyue.xyz/Resource/Manage/voice/Bonus_Track.mp3',
        // 背景音乐
        bgm: true,
    },
    // 背景音乐
    BGM: function (e) {
     // console.log(e);
      let that = this;
      if (that.data.bgm) {
        this.setData({
          bgm: false
        });
        innerAudioContext.pause(); /**  暂停音乐 pause*/

      } else {
        that.setData({
          bgm: true,
          bgmImgAni: "bgmImgAni"
        })
        // 播放音乐
        innerAudioContext.autoplay = true
        innerAudioContext.loop = true
        innerAudioContext.src = that.data.mp3;
        setTimeout(function () {
          innerAudioContext.play()
        }.bind(this), 300)
      }


    },
    // 检查输入内容
    checkData() {
        let key = this.data.searchKey;

        if (key == '') {
            wx.showModal({
                content: '搜索关键词为空',
                showCancel: false,
                confirmText: '我知道了',
                confirmColor: '#888'
            });
            return false;
        }

        return true;
    },
    // 执行搜索
    searchTap() {
        if (!this.checkData()) return;

        let key = this.data.searchKey;

        let index1 = key.indexOf('梦到了');

        if (index1 != -1) {
            key = key.substr(index1 + 3);
        }

        let index2 = key.indexOf('梦到');

        if (index2 != -1) {
            key = key.substr(index2 + 2);
        }

        wx.navigateTo({
            url: '../detail/detail?key=' + key
        });
    },
    // 搜索内容变动
    changeSearchKey(e) {
        let val = e.detail.value;

        this.setData({
            searchKey: val
        });
    },
    // 定义转发
    onShareAppMessage: Util.shareConfig
});
