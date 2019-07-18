Component({
  props: {
    className: '',
    overflowCount: 99,
    text: '',
    dot: false,
    onClick:function(){
      console.log(this)
    }
  },
  methods:{
    click(){
      this.props.onClick()
    }
  }
    
});
