import{_ as L,r as c,c as D,w as l,a as m,b2 as S,b as y,e,f as t,h as o,aX as x}from"./index-BlFMA_Ff.js";const A={name:"Modals",setup(){const C=c(!1),s=c(!1),h=c(!1),n=c(!1),M=c(!1),k=c(!1),b=c(!1),u=c(!1),i=c(!1),r=c(!1),a=c(!1),p=c(!1),d=c(!1),f=c(!1),_=c(!1);return{visibleLiveDemo:C,visibleStaticBackdropDemo:s,visibleScrollingLongContentDemo:h,visibleScrollableDemo:n,visibleVerticallyCenteredDemo:M,visibleVerticallyCenteredScrollableDemo:k,xlDemo:b,lgDemo:u,smDemo:i,fullscreenDemo:r,fullscreenSmDemo:a,fullscreenMdDemo:p,fullscreenLgDemo:d,fullscreenXlDemo:f,fullscreenXxlDemo:_}}},B=o("strong",null,"Vue Modals",-1),F=o("p",{class:"text-body-secondary small"},[t(" Below is a static modal example (meaning its "),o("code",null,"position"),t(" and "),o("code",null,"display"),t(" have been overridden). Included are the modal header, modal body (required for "),o("code",null,"padding"),t("), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action. ")],-1),j=o("strong",null,"Vue Modal",-1),T=o("small",null,"Live demo",-1),X=o("p",{class:"text-body-secondary small"}," Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page. ",-1),z=o("strong",null,"Vue Modal",-1),E=o("small",null,"Static backdrop",-1),W=o("p",{class:"text-body-secondary small"},[t(" If you set "),o("code",null,"backdrop"),t(" property to "),o("code",null,"static"),t(", your modal will behave as though the backdrop is static, meaning it will not close when clicking outside it. Click the button below to try it. ")],-1),H=o("strong",null,"Vue Modal",-1),N=o("small",null,"Scrolling long content",-1),I=o("p",{class:"text-body-secondary small"}," When modals become too long for the user's viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean. ",-1),R=o("p",null," Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ",-1),O=o("p",null," Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. ",-1),Y=o("p",null," Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. ",-1),G=o("p",null," Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ",-1),J=o("p",null," Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. ",-1),K=o("p",null," Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. ",-1),Q=o("p",null," Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ",-1),U=o("p",null," Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. ",-1),Z=o("p",null," Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. ",-1),$=o("p",null," Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ",-1),ll=o("p",null," Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. ",-1),el=o("p",null," Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. ",-1),ol=o("p",null," Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ",-1),sl=o("p",null," Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. ",-1),tl=o("p",null," Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. ",-1),nl=o("p",null," Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ",-1),al=o("p",null," Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. ",-1),ul=o("p",null," Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. ",-1),il=o("p",{class:"text-body-secondary small"},[t(" You can also create a scrollable modal that allows scroll the modal body by adding "),o("code",null,"scrollable"),t(" prop. ")],-1),rl=o("p",null," Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ",-1),dl=o("p",null," Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. ",-1),cl=o("p",null," Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. ",-1),ml=o("p",null," Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ",-1),fl=o("p",null," Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. ",-1),bl=o("p",null," Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. ",-1),_l=o("p",null," Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ",-1),pl=o("p",null," Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. ",-1),vl=o("p",null," Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. ",-1),gl=o("p",null," Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ",-1),Cl=o("p",null," Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. ",-1),Dl=o("p",null," Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. ",-1),yl=o("p",null," Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ",-1),xl=o("p",null," Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. ",-1),hl=o("p",null," Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. ",-1),Ml=o("p",null," Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ",-1),kl=o("p",null," Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. ",-1),wl=o("p",null," Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. ",-1),ql=o("strong",null,"Vue Modal",-1),Sl=o("small",null,"Vertically centered",-1),Vl=o("p",{class:"text-body-secondary small"},[t(" Add "),o("code",null,'alignment="center"'),t(" to "),o("code",null,"<CModal>"),t(" to vertically center the modal. ")],-1),Pl=o("strong",null,"Vue Modal",-1),Ll=o("small",null,"Tooltips and popovers",-1),Al=o("p",{class:"text-body-secondary small"},[o("code",null,"<CTooltips>"),t(" and "),o("code",null,"<CPopovers>"),t(" can be placed within modals as needed. When modals are closed, any tooltips and popovers within are also automatically dismissed. ")],-1),Bl=o("h5",null,"Popover in a modal",-1),Fl=o("hr",null,null,-1),jl=o("h5",null,"Tooltips in a modal",-1),Tl=o("strong",null,"Vue Modal",-1),Xl=o("small",null,"Optional sizes",-1),zl=o("p",{class:"text-body-secondary small"},[t(" Modals have three optional sizes, available via modifier classes to be placed on a "),o("code",null,"<CModal>"),t(". These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports. ")],-1),El=o("table",{class:"table"},[o("thead",null,[o("tr",null,[o("th",null,"Size"),o("th",null,"Property size"),o("th",null,"Modal max-width")])]),o("tbody",null,[o("tr",null,[o("td",null,"Small"),o("td",null,[o("code",null,"'sm'")]),o("td",null,[o("code",null,"300px")])]),o("tr",null,[o("td",null,"Default"),o("td",{class:"text-body-secondary"},"None"),o("td",null,[o("code",null,"500px")])]),o("tr",null,[o("td",null,"Large"),o("td",null,[o("code",null,"'lg'")]),o("td",null,[o("code",null,"800px")])]),o("tr",null,[o("td",null,"Extra large"),o("td",null,[o("code",null,"'xl'")]),o("td",null,[o("code",null,"1140px")])])])],-1),Wl=o("strong",null,"Vue Modal",-1),Hl=o("small",null,"Fullscreen Modal",-1),Nl=o("p",{class:"text-body-secondary small"},[t(" Another override is the option to pop up a modal that covers the user viewport, available via property "),o("code",null,"fullscrean"),t(". ")],-1),Il=o("table",{class:"table"},[o("thead",null,[o("tr",null,[o("th",null,"Property fullscrean"),o("th",null,"Availability")])]),o("tbody",null,[o("tr",null,[o("td",null,[o("code",null,"true")]),o("td",null,"Always")]),o("tr",null,[o("td",null,[o("code",null,"'sm'")]),o("td",null,[t("Below "),o("code",null,"576px")])]),o("tr",null,[o("td",null,[o("code",null,"'md'")]),o("td",null,[t("Below "),o("code",null,"768px")])]),o("tr",null,[o("td",null,[o("code",null,"'lg'")]),o("td",null,[t("Below "),o("code",null,"992px")])]),o("tr",null,[o("td",null,[o("code",null,"'xl'")]),o("td",null,[t("Below "),o("code",null,"1200px")])]),o("tr",null,[o("td",null,[o("code",null,"'xxl'")]),o("td",null,[t("Below "),o("code",null,"1400px")])])])],-1);function Rl(C,s,h,n,M,k){const b=m("CCardHeader"),u=m("CModalTitle"),i=m("CModalHeader"),r=m("CModalBody"),a=m("CButton"),p=m("CModalFooter"),d=m("CModal"),f=m("DocsExample"),_=m("CCardBody"),v=m("CCard"),g=m("CCol"),w=m("CLink"),V=m("CRow"),P=S("c-popover"),q=S("c-tooltip");return y(),D(V,null,{default:l(()=>[e(g,{xs:12},{default:l(()=>[e(v,{class:"mb-4"},{default:l(()=>[e(b,null,{default:l(()=>[B]),_:1}),e(_,null,{default:l(()=>[F,e(f,{href:"components/modal.html#modal-components"},{default:l(()=>[e(d,{class:"show d-block position-static",backdrop:!1,keyboard:!1,visible:""},{default:l(()=>[e(i,{dismiss:""},{default:l(()=>[e(u,null,{default:l(()=>[t("Modal title")]),_:1})]),_:1}),e(r,null,{default:l(()=>[t("Modal body text goes here.")]),_:1}),e(p,null,{default:l(()=>[e(a,{color:"secondary"},{default:l(()=>[t("Close")]),_:1}),e(a,{color:"primary"},{default:l(()=>[t("Save changes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(g,{xs:12},{default:l(()=>[e(v,{class:"mb-4"},{default:l(()=>[e(b,null,{default:l(()=>[j,t(),T]),_:1}),e(_,null,{default:l(()=>[X,e(f,{href:"components/modal.html#live-demo"},{default:l(()=>[e(a,{color:"primary",onClick:s[0]||(s[0]=()=>{n.visibleLiveDemo=!0})},{default:l(()=>[t("Launch demo modal")]),_:1}),e(d,{visible:n.visibleLiveDemo,onClose:s[3]||(s[3]=()=>{n.visibleLiveDemo=!1})},{default:l(()=>[e(i,{dismiss:"",onClose:s[1]||(s[1]=()=>{n.visibleLiveDemo=!1})},{default:l(()=>[e(u,null,{default:l(()=>[t("Modal title")]),_:1})]),_:1}),e(r,null,{default:l(()=>[t("Woohoo, you're reading this text in a modal!")]),_:1}),e(p,null,{default:l(()=>[e(a,{color:"secondary",onClick:s[2]||(s[2]=()=>{n.visibleLiveDemo=!1})},{default:l(()=>[t(" Close ")]),_:1}),e(a,{color:"primary"},{default:l(()=>[t("Save changes")]),_:1})]),_:1})]),_:1},8,["visible"])]),_:1})]),_:1})]),_:1})]),_:1}),e(g,{xs:12},{default:l(()=>[e(v,{class:"mb-4"},{default:l(()=>[e(b,null,{default:l(()=>[z,t(),E]),_:1}),e(_,null,{default:l(()=>[W,e(f,{href:"components/modal.html#static-backdrop"},{default:l(()=>[e(a,{color:"primary",onClick:s[4]||(s[4]=()=>{n.visibleStaticBackdropDemo=!0})},{default:l(()=>[t("Launch demo modal")]),_:1}),e(d,{backdrop:"static",visible:n.visibleStaticBackdropDemo,onClose:s[7]||(s[7]=()=>{n.visibleStaticBackdropDemo=!1})},{default:l(()=>[e(i,{dismiss:"",onClose:s[5]||(s[5]=()=>{n.visibleStaticBackdropDemo=!1})},{default:l(()=>[e(u,null,{default:l(()=>[t("Modal title")]),_:1})]),_:1}),e(r,null,{default:l(()=>[t("Woohoo, you're reading this text in a modal!")]),_:1}),e(p,null,{default:l(()=>[e(a,{color:"secondary",onClick:s[6]||(s[6]=()=>{n.visibleStaticBackdropDemo=!1})},{default:l(()=>[t(" Close ")]),_:1}),e(a,{color:"primary"},{default:l(()=>[t("Save changes")]),_:1})]),_:1})]),_:1},8,["visible"])]),_:1})]),_:1})]),_:1})]),_:1}),e(g,{xs:12},{default:l(()=>[e(v,{class:"mb-4"},{default:l(()=>[e(b,null,{default:l(()=>[H,t(),N]),_:1}),e(_,null,{default:l(()=>[I,e(f,{href:"components/modal.html#scrolling-long-content"},{default:l(()=>[e(a,{color:"primary",onClick:s[8]||(s[8]=()=>{n.visibleScrollingLongContentDemo=!0})},{default:l(()=>[t("Launch demo modal")]),_:1}),e(d,{visible:n.visibleScrollingLongContentDemo,onClose:s[10]||(s[10]=()=>{n.visibleScrollingLongContentDemo=!1})},{default:l(()=>[e(i,{dismiss:"",onClose:s[9]||(s[9]=()=>{n.visibleScrollingLongContentDemo=!1})},{default:l(()=>[e(u,null,{default:l(()=>[t("Modal title")]),_:1})]),_:1}),e(r,null,{default:l(()=>[R,O,Y,G,J,K,Q,U,Z,$,ll,el,ol,sl,tl,nl,al,ul]),_:1})]),_:1},8,["visible"])]),_:1}),il,e(f,{href:"components/modal.html#scrolling-long-content"},{default:l(()=>[e(a,{color:"primary",onClick:s[11]||(s[11]=()=>{n.visibleScrollableDemo=!0})},{default:l(()=>[t("Launch demo modal")]),_:1}),e(d,{scrollable:"",visible:n.visibleScrollableDemo,onClose:s[13]||(s[13]=()=>{n.visibleScrollableDemo=!1})},{default:l(()=>[e(i,{dismiss:"",onClose:s[12]||(s[12]=()=>{n.visibleScrollableDemo=!1})},{default:l(()=>[e(u,null,{default:l(()=>[t("Modal title")]),_:1})]),_:1}),e(r,null,{default:l(()=>[rl,dl,cl,ml,fl,bl,_l,pl,vl,gl,Cl,Dl,yl,xl,hl,Ml,kl,wl]),_:1})]),_:1},8,["visible"])]),_:1})]),_:1})]),_:1})]),_:1}),e(g,{xs:12},{default:l(()=>[e(v,{class:"mb-4"},{default:l(()=>[e(b,null,{default:l(()=>[ql,t(),Sl]),_:1}),e(_,null,{default:l(()=>[Vl,e(f,{href:"components/modal.html#vertically-centered"},{default:l(()=>[e(a,{color:"primary",onClick:s[14]||(s[14]=()=>{n.visibleVerticallyCenteredDemo=!0})},{default:l(()=>[t("Vertically centered modal")]),_:1}),e(d,{alignment:"center",visible:n.visibleVerticallyCenteredDemo,onClose:s[17]||(s[17]=()=>{n.visibleVerticallyCenteredDemo=!1})},{default:l(()=>[e(i,{dismiss:"",onClose:s[15]||(s[15]=()=>{n.visibleVerticallyCenteredDemo=!1})},{default:l(()=>[e(u,null,{default:l(()=>[t("Modal title")]),_:1})]),_:1}),e(r,null,{default:l(()=>[t(" Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ")]),_:1}),e(p,null,{default:l(()=>[e(a,{color:"secondary",onClick:s[16]||(s[16]=()=>{n.visibleVerticallyCenteredDemo=!1})},{default:l(()=>[t(" Close ")]),_:1}),e(a,{color:"primary"},{default:l(()=>[t("Save changes")]),_:1})]),_:1})]),_:1},8,["visible"])]),_:1}),e(f,{href:"components/modal.html#vertically-centered"},{default:l(()=>[e(a,{color:"primary",onClick:s[18]||(s[18]=()=>{n.visibleVerticallyCenteredScrollableDemo=!0})},{default:l(()=>[t("Vertically centered scrollable modal")]),_:1}),e(d,{alignment:"center",scrollable:"",visible:n.visibleVerticallyCenteredScrollableDemo,onClose:s[21]||(s[21]=()=>{n.visibleVerticallyCenteredScrollableDemo=!1})},{default:l(()=>[e(i,{dismiss:"",onClose:s[19]||(s[19]=()=>{n.visibleVerticallyCenteredScrollableDemo=!1})},{default:l(()=>[e(u,null,{default:l(()=>[t("Modal title")]),_:1})]),_:1}),e(r,null,{default:l(()=>[t(" Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ")]),_:1}),e(p,null,{default:l(()=>[e(a,{color:"secondary",onClick:s[20]||(s[20]=()=>{n.visibleVerticallyCenteredScrollableDemo=!1})},{default:l(()=>[t(" Close ")]),_:1}),e(a,{color:"primary"},{default:l(()=>[t("Save changes")]),_:1})]),_:1})]),_:1},8,["visible"])]),_:1})]),_:1})]),_:1})]),_:1}),e(g,{xs:12},{default:l(()=>[e(v,{class:"mb-4"},{default:l(()=>[e(b,null,{default:l(()=>[Pl,t(),Ll]),_:1}),e(_,null,{default:l(()=>[Al,e(f,{href:"components/modal.html#tooltips-and-popovers"},{default:l(()=>[e(a,{color:"primary",onClick:s[22]||(s[22]=()=>{C.tooltipsAndPopoversDemo=!0})},{default:l(()=>[t("Launch demo modal")]),_:1}),e(d,{visible:C.tooltipsAndPopoversDemo,onClose:s[25]||(s[25]=()=>{C.tooltipsAndPopoversDemo=!1})},{default:l(()=>[e(i,{dismiss:"",onClose:s[23]||(s[23]=()=>{C.tooltipsAndPopoversDemo=!1})},{default:l(()=>[e(u,null,{default:l(()=>[t("Modal title")]),_:1})]),_:1}),e(r,null,{default:l(()=>[Bl,o("p",null,[t(" This "),x((y(),D(a,{color:"secondary"},{default:l(()=>[t("button")]),_:1})),[[P,{header:"Popover title",content:"Popover body content is set in this property."}]])]),Fl,jl,o("p",null,[x((y(),D(w,null,{default:l(()=>[t("This link")]),_:1})),[[q,"Tooltip"]]),t(" and "),x((y(),D(w,null,{default:l(()=>[t("that link")]),_:1})),[[q,"Tooltip"]]),t(" have tooltips on hover. ")])]),_:1}),e(p,null,{default:l(()=>[e(a,{color:"secondary",onClick:s[24]||(s[24]=()=>{C.tooltipsAndPopoversDemo=!1})},{default:l(()=>[t(" Close ")]),_:1}),e(a,{color:"primary"},{default:l(()=>[t("Save changes")]),_:1})]),_:1})]),_:1},8,["visible"])]),_:1})]),_:1})]),_:1})]),_:1}),e(g,{xs:12},{default:l(()=>[e(v,{class:"mb-4"},{default:l(()=>[e(b,null,{default:l(()=>[Tl,t(),Xl]),_:1}),e(_,null,{default:l(()=>[zl,El,e(f,{href:"components/modal.html#optional-sizes"},{default:l(()=>[e(a,{color:"primary",onClick:s[26]||(s[26]=()=>{n.xlDemo=!0})},{default:l(()=>[t("Extra large modal")]),_:1}),e(a,{color:"primary",onClick:s[27]||(s[27]=()=>{n.lgDemo=!0})},{default:l(()=>[t("Large modal")]),_:1}),e(a,{color:"primary",onClick:s[28]||(s[28]=()=>{n.smDemo=!0})},{default:l(()=>[t("Small modal")]),_:1}),e(d,{size:"xl",visible:n.xlDemo,onClose:s[30]||(s[30]=()=>{n.xlDemo=!1})},{default:l(()=>[e(i,{dismiss:"",onClose:s[29]||(s[29]=()=>{n.xlDemo=!1})},{default:l(()=>[e(u,null,{default:l(()=>[t("Extra large modal")]),_:1})]),_:1}),e(r,null,{default:l(()=>[t(" ... ")]),_:1})]),_:1},8,["visible"]),e(d,{size:"lg",visible:n.lgDemo,onClose:s[32]||(s[32]=()=>{n.lgDemo=!1})},{default:l(()=>[e(i,{dismiss:"",onClose:s[31]||(s[31]=()=>{n.lgDemo=!1})},{default:l(()=>[e(u,null,{default:l(()=>[t("Large modal")]),_:1})]),_:1}),e(r,null,{default:l(()=>[t(" ... ")]),_:1})]),_:1},8,["visible"]),e(d,{size:"sm",visible:n.smDemo,onClose:s[34]||(s[34]=()=>{n.smDemo=!1})},{default:l(()=>[e(i,{dismiss:"",onClose:s[33]||(s[33]=()=>{n.smDemo=!1})},{default:l(()=>[e(u,null,{default:l(()=>[t("Small modal")]),_:1})]),_:1}),e(r,null,{default:l(()=>[t(" ... ")]),_:1})]),_:1},8,["visible"])]),_:1})]),_:1})]),_:1})]),_:1}),e(g,{xs:12},{default:l(()=>[e(v,{class:"mb-4"},{default:l(()=>[e(b,null,{default:l(()=>[Wl,t(),Hl]),_:1}),e(_,null,{default:l(()=>[Nl,Il,e(f,{href:"components/modal.html#fullscreen-modal"},{default:l(()=>[e(a,{color:"primary",onClick:s[35]||(s[35]=()=>{n.fullscreenDemo=!0})},{default:l(()=>[t("Full screen")]),_:1}),e(a,{color:"primary",onClick:s[36]||(s[36]=()=>{n.fullscreenSmDemo=!0})},{default:l(()=>[t("Full screen below sm")]),_:1}),e(a,{color:"primary",onClick:s[37]||(s[37]=()=>{n.fullscreenMdDemo=!0})},{default:l(()=>[t("Full screen below md")]),_:1}),e(a,{color:"primary",onClick:s[38]||(s[38]=()=>{n.fullscreenLgDemo=!0})},{default:l(()=>[t("Full screen below lg")]),_:1}),e(a,{color:"primary",onClick:s[39]||(s[39]=()=>{n.fullscreenXlDemo=!0})},{default:l(()=>[t("Full screen below xl")]),_:1}),e(a,{color:"primary",onClick:s[40]||(s[40]=()=>{n.fullscreenXxlDemo=!0})},{default:l(()=>[t("Full screen below xxl")]),_:1}),e(d,{fullscreen:"",visible:n.fullscreenDemo,onClose:s[42]||(s[42]=()=>{n.fullscreenDemo=!1})},{default:l(()=>[e(i,{dismiss:"",onClose:s[41]||(s[41]=()=>{n.xlDemo=!1})},{default:l(()=>[e(u,null,{default:l(()=>[t("Full screen")]),_:1})]),_:1}),e(r,null,{default:l(()=>[t(" ... ")]),_:1})]),_:1},8,["visible"]),e(d,{fullscreen:"sm",visible:n.fullscreenSmDemo,onClose:s[44]||(s[44]=()=>{n.fullscreenSmDemo=!1})},{default:l(()=>[e(i,{dismiss:"",onClose:s[43]||(s[43]=()=>{n.fullscreenSmDemo=!1})},{default:l(()=>[e(u,null,{default:l(()=>[t("Full screen below sm")]),_:1})]),_:1}),e(r,null,{default:l(()=>[t(" ... ")]),_:1})]),_:1},8,["visible"]),e(d,{fullscreen:"md",visible:n.fullscreenMdDemo,onClose:s[46]||(s[46]=()=>{n.fullscreenMdDemo=!1})},{default:l(()=>[e(i,{dismiss:"",onClose:s[45]||(s[45]=()=>{n.fullscreenMdDemo=!1})},{default:l(()=>[e(u,null,{default:l(()=>[t("Full screen below md")]),_:1})]),_:1}),e(r,null,{default:l(()=>[t(" ... ")]),_:1})]),_:1},8,["visible"]),e(d,{fullscreen:"lg",visible:n.fullscreenLgDemo,onClose:s[48]||(s[48]=()=>{n.fullscreenLgDemo=!1})},{default:l(()=>[e(i,{dismiss:"",onClose:s[47]||(s[47]=()=>{n.fullscreenLgDemo=!1})},{default:l(()=>[e(u,null,{default:l(()=>[t("Full screen below lg")]),_:1})]),_:1}),e(r,null,{default:l(()=>[t(" ... ")]),_:1})]),_:1},8,["visible"]),e(d,{fullscreen:"xl",visible:n.fullscreenXlDemo,onClose:s[50]||(s[50]=()=>{n.fullscreenXlDemo=!1})},{default:l(()=>[e(i,{dismiss:"",onClose:s[49]||(s[49]=()=>{n.fullscreenXlDemo=!1})},{default:l(()=>[e(u,null,{default:l(()=>[t("Full screen below xl")]),_:1})]),_:1}),e(r,null,{default:l(()=>[t(" ... ")]),_:1})]),_:1},8,["visible"]),e(d,{fullscreen:"xxl",visible:n.fullscreenXxlDemo,onClose:s[52]||(s[52]=()=>{n.fullscreenXxlDemo=!1})},{default:l(()=>[e(i,{dismiss:"",onClose:s[51]||(s[51]=()=>{n.fullscreenXxlDemo=!1})},{default:l(()=>[e(u,null,{default:l(()=>[t("Full screen below xxl")]),_:1})]),_:1}),e(r,null,{default:l(()=>[t(" ... ")]),_:1})]),_:1},8,["visible"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const Yl=L(A,[["render",Rl]]);export{Yl as default};
