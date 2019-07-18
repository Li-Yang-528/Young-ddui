import Component from '../common/Component';

Component({
  props: {
    active: -1,
    className:'',
    onChange:()=>{},
  },

  data:{
    activedIndex: -1
  },

  didMount(){
    const { active} = this.props;
    active > -1 && this.onActivedChange(this.$children[active],true);
  },
  
  methods: {
    onActivedChange(path,immediate){
     const activedIndex = this.$children.indexOf(path);
     if(activedIndex !== this.data.activedIndex && activedIndex!==-1 || immediate){
       this.props.onChange(path,activedIndex, immediate);
       this.setData({
         activedIndex: activedIndex
       });
       this.setActiveItem(activedIndex)
     }
    },
    setActiveItem(activedIndex) {
      this.$children.forEach((child,index)=>{
        child.setItemActived(index === activedIndex)
      });
    }
  },
});
