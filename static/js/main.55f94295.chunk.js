(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{19:function(e,t,a){e.exports=a(28)},28:function(e,t,a){"use strict";a.r(t);var l=a(2),n=a(3),i=a(5),s=a(4),r=a(0),c=a.n(r),o=a(8),p=a.n(o),u=a(6),d=a(42),h=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(n.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,null===this.props.value?c.a.createElement(d.a,{variant:"outlined",color:"primary",onClick:this.props.handleClick},this.props.display):c.a.createElement(d.a,{variant:"outlined",color:"primary",onClick:function(){return e.props.handleClick(e.props.value)}},this.props.display))}}]),a}(c.a.Component),m=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={topText:"",bottomText:""},n.displayTopText=n.displayTopText.bind(Object(u.a)(n)),n.displayBottomText=n.displayBottomText.bind(Object(u.a)(n)),n}return Object(n.a)(a,[{key:"displayTopText",value:function(){var e=this;this.setState((function(){var t=e.props.state.valueOne.toString(),a=e.props.state.valueOne.toString()+" "+e.props.state.sign;return e.props.state.isFirst?e.props.state.isCompleted?{topText:t}:{topText:"0"}:{topText:a}}))}},{key:"displayBottomText",value:function(){var e=this;this.setState((function(){var t=e.props.state.valueOne.toString(),a=e.props.state.valueTwo.toString();return e.props.state.isFirst?{bottomText:t}:{bottomText:a}}))}},{key:"componentDidMount",value:function(){this.displayTopText(),this.displayBottomText()}},{key:"componentDidUpdate",value:function(e){e.state!==this.props.state&&(this.displayTopText(),this.displayBottomText())}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("p",null,this.state.topText),c.a.createElement("h1",null,this.state.bottomText))}}]),a}(r.Component),v=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gridTemplateRows:"1fr 1fr 1fr 1fr"}},c.a.createElement(h,{display:"1",value:1,handleClick:this.props.handleNum}),c.a.createElement(h,{display:"2",value:2,handleClick:this.props.handleNum}),c.a.createElement(h,{display:"3",value:3,handleClick:this.props.handleNum}),c.a.createElement(h,{display:"+",value:"+",handleClick:this.props.handleSign}),c.a.createElement(h,{display:"4",value:4,handleClick:this.props.handleNum}),c.a.createElement(h,{display:"5",value:5,handleClick:this.props.handleNum}),c.a.createElement(h,{display:"6",value:6,handleClick:this.props.handleNum}),c.a.createElement(h,{display:"-",value:"-",handleClick:this.props.handleSign}),c.a.createElement(h,{display:"7",value:7,handleClick:this.props.handleNum}),c.a.createElement(h,{display:"8",value:8,handleClick:this.props.handleNum}),c.a.createElement(h,{display:"9",value:9,handleClick:this.props.handleNum}),c.a.createElement(h,{display:"*",value:"*",handleClick:this.props.handleSign}),c.a.createElement(h,{display:"=",handleClick:this.props.handleEqual}),c.a.createElement(h,{display:"0",value:0,handleClick:this.props.handleNum}),c.a.createElement(h,{display:"C",handleClick:this.props.handleReset}),c.a.createElement(h,{display:"/",value:"/",handleClick:this.props.handleSign}))}}]),a}(c.a.Component),k=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={valueOne:0,valueTwo:0,sign:"",isFirst:!0,isCompleted:!1},e.handleClickNum=e.handleClickNum.bind(Object(u.a)(e)),e.handleClickSpecial=e.handleClickSpecial.bind(Object(u.a)(e)),e.handleClickEquate=e.handleClickEquate.bind(Object(u.a)(e)),e.handleClickReset=e.handleClickReset.bind(Object(u.a)(e)),e}return Object(n.a)(a,[{key:"handleClickNum",value:function(e){var t=this;this.setState((function(a){return t.state.isFirst?t.state.isCompleted?{isCompleted:!1,valueOne:e}:{valueOne:10*a.valueOne+e}:{valueTwo:10*a.valueTwo+e}}))}},{key:"handleClickSpecial",value:function(e){this.setState({isFirst:!1,sign:e})}},{key:"handleClickEquate",value:function(){var e,t=this.state.valueOne,a=this.state.valueTwo;switch(this.state.sign){case"+":e=t+a;break;case"-":e=t-a;break;case"/":e=t/a;break;case"*":e=t*a;break;case"":e=t}this.setState({isCompleted:!0,isFirst:!0,valueOne:e,valueTwo:0})}},{key:"handleClickReset",value:function(){this.setState({valueOne:0,valueTwo:0})}},{key:"render",value:function(){return c.a.createElement("div",{style:{width:"50px"}},c.a.createElement(m,{state:this.state}),c.a.createElement(v,{handleNum:this.handleClickNum,handleSign:this.handleClickSpecial,handleReset:this.handleClickReset,handleEqual:this.handleClickEquate}))}}]),a}(c.a.Component),y=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(k,null))}}]),a}(c.a.Component);p.a.render(c.a.createElement(y,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.55f94295.chunk.js.map