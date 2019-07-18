const mixins = {
 didMount() {
    const self = this;
    const parentId = this.$id;
    const $page = this.$page;
    $page.$refs = {};
    this.$children = this.$page.$getComponentBy(function(componentInstances){
      const {refName, __parentId} = componentInstances.props;
      const isChild = (String(__parentId) === parentId);
      if(isChild){
        componentInstances.$parent = self;
      };
      refName && ($page.$refs[refName] = componentInstances)
      return isChild;
    });
  },
  methods:{
    dispatch(eventName, arg){
      var parent = this.$parent;
      while(!parent[eventName] || typeof parent[eventName] !== 'function'){
        parent = parent.$parent;
      }
      parent[eventName].apply(parent, Array.isArray(arg) ? arg : [arg])
    },
    broadcast(eventName, arg){
      const children = this.$children;
      if(children){
        children.forEach(function(child){
          if(child[eventName] && typeof child[eventName] === 'function'){
            child[eventName].apply(child, Array.isArray(arg) ? arg : [arg]);
          } 
        })
      }
    }
  }
}

module.exports = function Components(options = {}){
  if(!options.hasOwnProperty('mixins')){
    options.mixins = [mixins]
  }else{
    options.mixins.indexOf(mixins) < 0 && options.mixins.unshift(mixins);
  };
  Component(options);
};

