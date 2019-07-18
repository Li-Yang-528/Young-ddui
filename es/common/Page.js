function next(params){
  if(!params){
    return;
  }
  dd.navigateTo(params)
}
module.exports = function BasePage(option = {}){
  const ready = option.onReady
  if(!option.hasOwnProperty('beforRouterLeave')){
    option.beforRouterLeave = function(callback){
      callback.call(this, next)
    }
  };
  option.onReady = function(){
    const pages = getCurrentPages();
    const children = [];
    const currentPage = pages[pages.length -1];
    currentPage.$getComponentBy(function(child){
      children.push(child)
    });
    this.$children = children;
    ready && ready.call(currentPage);
  }
  Page(option);
}