import MyComponent from '../../../../slices/WhatWeDo';

export default {
  title: 'slices/WhatWeDo'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"what_we_do","items":[],"primary":{"title":[{"type":"heading1","text":"Embrace impactful users","spans":[]}],"description":[{"type":"paragraph","text":"Sint ex nulla esse ut do fugiat aliqua exercitation sint minim consectetur quis amet qui. Proident aliquip aute minim ullamco do eu.","spans":[]}],"ButtonText":"aggregate value-added web-readiness","MainImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=900&h=500&fit=crop"},"Link":{"link_type":"Web","url":"http://twitter.com"}},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _ImageRight = () => <MyComponent slice={{"variation":"imageRight","name":"imageRight","slice_type":"what_we_do","items":[],"primary":{"title":[{"type":"heading1","text":"Empower revolutionary applications","spans":[]}],"description":[{"type":"paragraph","text":"Culpa sunt tempor tempor sit sunt nulla culpa culpa id consectetur elit tempor anim Lorem. Anim ea consectetur quis Lorem eiusmod velit consectetur laboris proident labore sit qui nulla sint.","spans":[]}],"ButtonText":"embrace scalable channels","MainImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1579931794097-0ad001e51edb?w=900&h=500&fit=crop"},"Link":{"link_type":"Web","url":"http://google.com"}},"id":"_ImageRight"}} />
_ImageRight.storyName = 'imageRight'
