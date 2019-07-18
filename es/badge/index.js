Component({
  props: {
    className: '',
    overflowCount: 99,
    text: '',
    dot: false,
    handleClick:function(){
      console.log(this)
    }
  },
  methods:{
    click(){
      this.props.handleClick()
    }
  }
    
});
