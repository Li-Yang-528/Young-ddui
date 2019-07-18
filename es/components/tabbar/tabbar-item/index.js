import Component from '/common/Component'
Component({
  data: {
    active: false
  },
  props: {
    icon:'',
    path:'',
    className:''
  },
  methods: {
    onClick(){
      this.dispatch('onActivedChange', this);
    },
    setItemActived(isActived){
      this.setData({
        active: isActived
      })
    }
  },
});
