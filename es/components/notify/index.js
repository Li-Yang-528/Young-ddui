import Component from '/common/Component'
import {assign} from '/common/util'

let timer;

Component({
  props: {
    className:'',
  },
  data:{
    display: false,
    slideName: '', 
    option:{
      text: '',
      duration: 3000,
      type: 'success' // success/warning/erro
    }
  },
  methods: {
    show(options){
      const self = this;
      const {option} = this.data;
      clearTimeout(timer);
      this.setData({
        display: true,
        slideName: 'enter', 
        option:assign( option,options)
      },function(){
          timer = setTimeout(()=>{
          self.leave()
        },option.duration)
      });
    },

    leave(){
      const self = this;
      clearTimeout(timer);
      this.setData({
        slideName: 'leave'
      },function(){
         timer = setTimeout(()=>{
          self.setData({
            display: false,
          })
        },300)
      });
    }
  },
});
