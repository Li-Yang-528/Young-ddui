import Component from '/common/Component';
import {assign} from '/common/util'
let timer;
Component({
  data: {
    show: false,
    zoomName:'',
    option:{
      text:'',
      icon: '',
      duration: 3000,
      size: 50
    }
  },
 
  methods: {
    show(options){
      const self = this;
      const {option} = this.data;
      clearTimeout(timer);
      this.setData({
        show: true,
        zoomName: 'enter',
        option: assign( option,options)
      },function(){
        timer = setTimeout(()=>{
          self.clear();
        },option.duration)
      })
    },

    clear(){
      const self = this;
      clearTimeout(timer);
      this.setData({
        zoomName: 'leave',
      },function(){
        timer = setTimeout(()=>{
          self.setData({
            show: false,
          })
        },1000)
      })
    }
  },
});
