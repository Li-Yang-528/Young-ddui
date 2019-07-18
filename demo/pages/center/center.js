import Page from 'young-ddui/es/common/Page';
Page({
  data: {
    show:false
  },
  
  showDialog(){
    this.setData({
      show: !this.data.show
    });
    this.$refs.notify.show({text:'123213'});
    this.$refs.toast.show({
      text:'代码是写出来给人看的,你猜我换行是什么样',
      icon:'waiting'
    })
  }
});
