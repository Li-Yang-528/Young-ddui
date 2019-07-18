import Component from '/common/Component'

Component({
  props:{
    className:'',
    onTabChang:(item)=>{}
  },
  data:{
    tabs:[],
    tabWidth: 0,
    tabBarLeft: 0,
    activedIndex: 0
  },
  didMount(){
    const _children = this.$children;
    const len = _children.length;
    this.setData({
      tabs: _children.map(item => item.props.title),
      tabWidth: 100/len 
    })
  },
  methods: {
    handleTabClick({target}){
      const index = target.dataset.index;
      const actived = this.$children[index];
      this.props.onTabChang({current: actived});
      this.setData({
        tabBarLeft: index * this.data.tabWidth,
        activedIndex: index
      })
    },
    handleTabChang(item){
      const index = item.detail.current;
      this.setData({
        tabBarLeft: index * this.data.tabWidth,
        activedIndex: index
      })
    }
  }
})