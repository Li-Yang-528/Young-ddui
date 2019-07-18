import Page from 'young-ddui/es/common/Page'
Page({
  data:{
    list:[
      {icon:'/static/image/1.png',name:'客户'},
      {icon:'/static/image/2.png',name:'联系人'},
      {icon:'/static/image/3.png',name:'合同'},
      {icon:'/static/image/4.png',name:'日志'},
      {icon:'/static/image/5.png',name:'审批'},
      {icon:'/static/image/6.png',name:'架构'}
    ],
    cards:[
      {title:'3个',subTitle:'新增客户', icon:'/static/image/1.png'},
      {title:'2个',subTitle:'新增联系人', icon:'/static/image/2.png'},
      {title:'0个',subTitle:'新增合同', icon:'/static/image/3.png'},
      {title:'1个',subTitle:'新增日志', icon:'/static/image/4.png'},
      {title:'2个',subTitle:'新增审批', icon:'/static/image/5.png'},
      {title:'4个',subTitle:'新增架构', icon:'/static/image/6.png'}
    ]
  },

  onChang(item,index,immediate){
    const {path} = item.props;
    !immediate && this.beforRouterLeave(function(next){
      next({url:path})
    })
  },
  handleClick(){
    this.beforRouterLeave(function(next){
      next({url:'/pages/details/details'})
    })
  },
  say(){
    console.log(arguments)
  }
});
