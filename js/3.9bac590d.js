(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{3523:function(t,a,s){},"8b24":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("q-page",[s("div",{staticClass:"row",staticStyle:{"padding-top":"25px"}},[s("div",{staticClass:"col-12"},[s("booking")],1)])])],1)},o=[],i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4 col-sm-12 col-xs-12 q-pa-md"},[s("q-card",[s("q-card-section",{staticClass:"bg-primary text-white",attrs:{align:"center"}},[s("div",{staticClass:"text-h5"},[t._v("\n          HOURLY RENTALS\n        ")])]),s("q-card-section",[s("div",{staticClass:"q-pa-md",staticStyle:{"max-width":"340px"}},[s("q-input",{attrs:{filled:"",readonly:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[s("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[s("q-date",{attrs:{mask:"YYYY-MM-DD",options:t.optionFrom},model:{value:t.date,callback:function(a){t.date=a},expression:"date"}},[s("div",{staticClass:"row items-center justify-end"},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1),s("q-tooltip",{attrs:{"transition-show":"rotate","transition-hide":"rotate"}},[t._v("Date")])],1)]},proxy:!0}]),model:{value:t.date,callback:function(a){t.date=a},expression:"date"}})],1)]),s("q-card-actions",{attrs:{align:"center"}},[s("q-btn",{staticClass:"full-width",attrs:{color:"primary",push:""},on:{click:function(a){return t.getHourlyBookings()}}},[t._v("CHECK AVAILABILITY\n          "),s("q-tooltip",{attrs:{"transition-show":"rotate","transition-hide":"rotate"}},[t._v("CHECK AVAILABILITY OF DATE")])],1)],1)],1)],1),s("div",{staticClass:"col-lg-8 col-sm-12 col-xs-12 q-pa-md"},[s("available-slots",{attrs:{date:t.date,showSlots:t.showSlots,showLoading:t.showLoading}})],1)])},n=[],r=(s("e6cf"),s("ded3")),l=s.n(r),c=s("bd4c"),d=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("form",[s("q-card",{staticStyle:{"max-height":"650px",overflow:"auto"}},[s("q-card-section",{staticClass:"bg-primary text-white"},[s("div",{staticClass:"text-h5",attrs:{align:"center"}},[t._v("\n          SLOTS\n        ")])]),s("q-card-section",[s("div",{staticClass:"text-h5",attrs:{align:"center"}},[t._v("\n          AVAILABLE AND TAKEN SLOTS FOR HOURLY RENTALS\n        ")])]),t.showLoading?s("q-card-section",{staticClass:"q-mt-md"},[s("q-inner-loading",{attrs:{showing:1==t.showLoading}},[s("q-spinner-gears",{attrs:{size:"550px",color:"primary"}})],1)],1):t._e(),s("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[s("div",[t.hourlyBookingsTaken.length>0?s("q-card-section",{directives:[{name:"show",rawName:"v-show",value:t.showSlots,expression:"showSlots"}],staticClass:"q-pa-sm",staticStyle:{height:"360px"}},[s("div",{staticClass:"row justify-center"},[s("div",{staticClass:"col-lg-12 text-h6",attrs:{align:"center"}},[t._v("\n                  Taken Slots\n                ")]),t._l(t.hourlyBookingsTaken,(function(a){return s("div",{key:a.id,staticClass:"col-lg-6"},[s("q-card",{staticClass:"q-ma-sm bg-primary text-white"},[s("q-card-section",[s("div",{staticClass:"text-h6"},[t._v("\n                        "+t._s(a.book_from)+" - "+t._s(a.book_to)+"\n                      ")])])],1)],1)})),s("div",{staticClass:"col-lg-12 text-h6 q-pt-md",attrs:{align:"center"}},[t._v("\n                  Available Slots\n                ")]),t._l(t.hourlyBookingsAvailable,(function(a){return s("div",{key:a.id,staticClass:"col-lg-6"},[s("q-card",{staticClass:"q-ma-sm bg-secondary text-white"},[s("q-card-section",[s("div",{staticClass:"text-h6"},[t._v("\n                        "+t._s(a.book_from)+" - "+t._s(a.book_to)+"\n                      ")])])],1)],1)}))],2)]):s("q-card-section",{directives:[{name:"show",rawName:"v-show",value:t.showSlots,expression:"showSlots"}]},[s("q-card",[s("q-card-section",{staticClass:"bg-primary text-white",attrs:{align:"center"}},[s("div",{staticClass:"text-h4"},[t._v("\n                    ALL SLOTS ARE AVAILABLE\n                  ")])])],1)],1),s("q-card-section",{staticClass:"q-pa-sm"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showSlots,expression:"showSlots"}]},[s("q-card-section",[s("div",{staticClass:"flex flex-center"},[s("div",{staticClass:"q-pa-sm"},[s("q-input",{attrs:{filled:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[s("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[s("q-time",{attrs:{"minute-options":t.officeTimeFromMinutes},model:{value:t.timeFrom,callback:function(a){t.timeFrom=a},expression:"timeFrom"}},[s("div",{staticClass:"row items-center justify-end"},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1),s("q-tooltip",{attrs:{"transition-show":"rotate","transition-hide":"rotate"}},[t._v("From Time")])],1)]},proxy:!0},{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[s("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[s("q-time",{attrs:{"minute-options":t.officeTimeToMinutes},model:{value:t.timeTo,callback:function(a){t.timeTo=a},expression:"timeTo"}},[s("div",{staticClass:"row items-center justify-end"},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1),s("q-tooltip",{attrs:{"transition-show":"rotate","transition-hide":"rotate"}},[t._v("To Time")])],1)]},proxy:!0}]),model:{value:t.overallTime,callback:function(a){t.overallTime=a},expression:"overallTime"}})],1),s("div",{staticClass:"q-pa-sm"},[s("q-btn",{attrs:{color:"primary",push:"",disable:t.disableButton}},[t._v("\n                        BOOK\n                        "),s("q-tooltip",{attrs:{"transition-show":"rotate","transition-hide":"rotate"}},[t._v("BOOK HOURLY RENTALS")])],1)],1)])]),s("q-card-actions",[s("div",{directives:[{name:"show",rawName:"v-show",value:t.displayError,expression:"displayError"}],staticClass:"q-pt-sm",staticStyle:{width:"740px"}},[s("q-banner",{staticClass:"text-white bg-red",attrs:{"inline-actions":""},scopedSlots:t._u([{key:"avatar",fn:function(){return[s("q-icon",{attrs:{name:"error",color:"white"}})]},proxy:!0}])},[t._v("\n                      PLEASE ENTER A VALID TIME\n                    ")])],1)])],1)])],1)]),s("vue-recaptcha",{attrs:{sitekey:"6LfXAtYZAAAAAOLvN_WeE3cILHNjb4xVjt4M86kO",loadRecaptchaScript:!0}},[s("button",{staticClass:"hidden"})])],1)],1)])},p=[],m=s("2f62"),u=s("e096"),h={components:{VueRecaptcha:u["a"]},props:["date","showSlots","showLoading"],computed:l()({},Object(m["b"])(["hourlyBookingsAvailable","hourlyBookingsTaken"])),data(){return{timeFrom:"00:00",timeTo:"00:30",overallTime:"",disableButton:!1,displayError:!1,officeTimeFromMinutes:[0,30],officeTimeToMinutes:[0,30]}},watch:{timeTo(t){const a=this.overallTime.split(" - ");this.overallTime=`${a[0]} - ${t}`},timeFrom(t){const a=this.overallTime.split(" - ");this.overallTime=`${t} - ${a[1]}`},overallTime(t){const a=t.split(" - "),s=`${this.date} ${a[0]}`,e=new Date(s),o=`${this.date} ${a[1]}`,i=new Date(o),n=Math.floor((i-e)/1e3),r=Math.floor(n/60);r>=30&&r<=360?(this.disableButton=!1,this.displayError=!1):(this.disableButton=!0,this.displayError=!0)}},mounted(){this.overallTime=`${this.timeFrom} - ${this.timeTo}`}},v=h,w=(s("d38d"),s("2877")),f=s("f09f"),q=s("a370"),g=s("74f7"),C=s("cf57"),b=s("27f9"),y=s("0016"),x=s("7cbe"),T=s("ca78"),S=s("9c40"),_=s("05c0"),k=s("4b7e"),A=s("54e1"),L=s("7f67"),E=s("eebe"),B=s.n(E),Q=Object(w["a"])(v,d,p,!1,null,"20fd4008",null),O=Q.exports;B()(Q,"components",{QCard:f["a"],QCardSection:q["a"],QInnerLoading:g["a"],QSpinnerGears:C["a"],QInput:b["a"],QIcon:y["a"],QPopupProxy:x["a"],QTime:T["a"],QBtn:S["a"],QTooltip:_["a"],QCardActions:k["a"],QBanner:A["a"]}),B()(Q,"directives",{ClosePopup:L["a"]});var I={components:{AvailableSlots:O},data(){return{date:"",showLoading:!1,showSlots:!1}},computed:l()({},Object(m["b"])(["loading"])),created(){this.formatDates()},methods:{optionFrom(t){return t>=c["b"].formatDate(Date.now(),"YYYY/MM/DD")},formatDates(){const t=(new Date).toISOString().substring(0,10);this.date=t},async getHourlyBookings(){this.showLoading=!0,this.showSlots=!1,await this.$store.dispatch("getHourlyBookings",this.date),setTimeout((()=>{this.showLoading=!1,this.showSlots=!0}),2e3)}}},D=I,N=s("52ee"),Y=Object(w["a"])(D,i,n,!1,null,null,null),$=Y.exports;B()(Y,"components",{QCard:f["a"],QCardSection:q["a"],QInput:b["a"],QIcon:y["a"],QPopupProxy:x["a"],QDate:N["a"],QBtn:S["a"],QTooltip:_["a"],QCardActions:k["a"]}),B()(Y,"directives",{ClosePopup:L["a"]});var F={components:{Booking:$},name:"PageIndex"},M=F,j=s("9989"),R=Object(w["a"])(M,e,o,!1,null,null,null);a["default"]=R.exports;B()(R,"components",{QPage:j["a"]})},d38d:function(t,a,s){"use strict";s("3523")}}]);