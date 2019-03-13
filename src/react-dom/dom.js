export function setAttribute(dom, name, value){
  if(name === 'className') name = 'class';
  if(/on\w+/.test(name)){
    name = name.toLowerCase();
    dom[name] = value || '';
  }else if(name === 'style'){
    if(!value || typeof value === 'string'){
      node.style.cssText = value || '';
    }else if(value && typeof value === 'object'){
       // 可以通过style={ width: 20 }这种形式来设置样式，可以省略掉单位px
      for(let name in value){
        dom.style[name] = typeof value[name] === 'number' ? value[name]+'px': value[name];
      }
    }
  }else{
    if(name in dom){
      dom[name] = value || '';
    }
    if(value){
      dom.setAttribute(name, value);
    }else{
      dom.removeAttribute(name, value);
    }
  }
}