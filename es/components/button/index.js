Component({
  props: {
    className:'',
    size: 'normal', // normal/small/large/mini/block
    type: 'default', // default/primary/danger/warning/text
    plain: false, 
    disabled: false,
    loading: false,
    onClick: function(){},
    formType: '',
    openType: '',
    hoverClass: 'hover-class',
    round: false,
    square: false
  },
  methods: {
    handleClick(arg){
      this.props.onClick(arg);
    }
  },
});
