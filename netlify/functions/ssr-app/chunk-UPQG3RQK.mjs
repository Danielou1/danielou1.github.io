import{a as Dc,b as Lc,c as Fc,d as Oc,g as Nc,k as Uc,m as Ts,n as kc}from"./chunk-KRZBCBAS.mjs";import{$a as Sc,Aa as Ca,Ea as wr,Eb as Ic,Fb as Ft,Gb as Hi,Ia as dt,J as wa,Ja as Xe,Jb as Tt,K as Fn,Ka as ws,L as ys,La as Es,Ma as U,Mb as Tr,N as gi,Na as Y,Oa as _e,P as br,Q as Ea,Ra as Er,Sa as st,T as Ms,Ta as jt,U as St,Ua as xc,V as bs,Va as yc,W as Vi,Wa as Mc,Xa as Re,Y as mc,Ya as qe,Za as Lt,_a as bc,aa as gc,ab as wc,ba as Zn,bb as Ec,ca as $n,cb as Aa,da as Fe,db as wt,ea as je,eb as Tc,f as Mr,fa as _c,g as hc,i as uc,ia as Ta,ib as Cc,j as dc,ja as Ss,n as xs,na as zi,pb as Ac,s as fc,ta as Sr,u as pc,ua as vc,ub as Rc,vb as Pc,wa as se,wb as Ra,xa as Ue}from"./chunk-VOBF3GEN.mjs";import{a as mn,b as jn,h as vs}from"./chunk-VVCT4QZE.mjs";var Ot=(()=>{class i{constructor(){this.language=new hc("de"),this.language$=this.language.asObservable()}toggleLanguage(){let t=this.language.value==="de"?"en":"de";this.language.next(t)}setLanguage(t){this.language.next(t)}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Fn({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var Ct=(()=>{class i{constructor(){this.zoomRequestSource=new Mr,this.cameraResetRequestSource=new Mr,this.zoomRequest$=this.zoomRequestSource.asObservable(),this.cameraResetRequest$=this.cameraResetRequestSource.asObservable()}requestZoom(t){this.zoomRequestSource.next(t)}requestCameraReset(){this.cameraResetRequestSource.next()}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Fn({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function _d(i,e){if(i&1&&(U(0,"div",26)(1,"span",27),Re(2),Y(),_e(3,"span",28),Y()),i&2){let t=e.$implicit;se(2),qe(t.icon),se(),Xe("innerHTML",t.text,Sr)}}function vd(i,e){if(i&1){let t=Er();U(0,"div",1)(1,"div",2)(2,"button",3),st("click",function(){Zn(t);let r=jt();return $n(r.goBack())}),Fe(),U(3,"svg",4),_e(4,"line",5)(5,"polyline",6),Y()(),je(),U(6,"h2",7),Re(7),Y(),U(8,"div",8)(9,"button",9),st("click",function(){Zn(t);let r=jt();return $n(r.toggleLanguage())}),Re(10),Y()()(),U(11,"div",10)(12,"h3",11),Re(13),Y(),_e(14,"p",12),Y(),U(15,"div",13),dt(16,_d,4,2,"div",14),Y(),U(17,"footer",15)(18,"a",16),Fe(),U(19,"svg",17),_e(20,"path",18),Y()(),je(),U(21,"a",19),Fe(),U(22,"svg",17),_e(23,"path",20)(24,"rect",21)(25,"circle",22),Y()(),je(),U(26,"a",23),Fe(),U(27,"svg",17),_e(28,"path",24)(29,"polyline",25),Y()()()()}if(i&2){let t=jt();se(7),qe(t.profileData[t.currentLanguage].title),se(3),Lt(" ",t.currentLanguage==="de"?"EN":"DE"," "),se(3),qe(t.profileData[t.currentLanguage].greeting),se(),Xe("innerHTML",t.profileData[t.currentLanguage].bio,Sr),se(2),Xe("ngForOf",t.profileData[t.currentLanguage].highlights)}}var Bc=(()=>{class i{constructor(t,n){this.languageService=t,this.sceneControlService=n,this.currentLanguage="de",this.profileData={de:{title:"Profil",greeting:"Hallo! Ich bin Daniel.",bio:"Als engagierter Informatikstudent an der Technischen Hochschule Mittelhessen, mit einer Leidenschaft f\xFCr Embedded Systems und industrielle Softwareentwicklung, strebe ich danach, innovative L\xF6sungen f\xFCr komplexe Herausforderungen zu entwickeln. Mein Ziel ist es, meine F\xE4higkeiten in einem dynamischen und internationalen Umfeld einzusetzen und kontinuierlich zu erweitern.",highlights:[{icon:"\u{1F4BB}",text:"Fundierte Kenntnisse in <strong>C/C++</strong> und <strong>Java</strong> f\xFCr robuste Softwarel\xF6sungen."},{icon:"\u{1F527}",text:"Erfahrung mit <strong>Git</strong>, <strong>Docker</strong> und agilen Methoden f\xFCr eine effiziente Entwicklung."},{icon:"\u{1F50C}",text:"Kenntnisse in <strong>MQTT</strong>, I\xB2C, SPI und Sensorintegration f\xFCr IoT-Anwendungen."},{icon:"\u{1F30D}",text:"Teamf\xE4hig und motiviert, in einem <strong>internationalen Umfeld</strong> zu wachsen."}]},en:{title:"Profile",greeting:"Hello! I'm Daniel.",bio:"As a dedicated computer science student at the Technical University of Central Hesse (THM), with a passion for embedded systems and industrial software development, I strive to create innovative solutions for complex challenges. My goal is to apply and continuously expand my skills in a dynamic and international environment.",highlights:[{icon:"\u{1F4BB}",text:"Profound knowledge in <strong>C/C++</strong> and <strong>Java</strong> for robust software solutions."},{icon:"\u{1F527}",text:"Experience with <strong>Git</strong>, <strong>Docker</strong>, and agile methodologies for efficient development."},{icon:"\u{1F50C}",text:"Knowledge in <strong>MQTT</strong>, I\xB2C, SPI, and sensor integration for IoT applications."},{icon:"\u{1F30D}",text:"A team player, motivated to grow in an <strong>international environment</strong>."}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t})}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}static{this.\u0275fac=function(n){return new(n||i)(Ue(Ot),Ue(Ct))}}static{this.\u0275cmp=St({type:i,selectors:[["app-profil"]],standalone:!0,features:[wt],decls:1,vars:1,consts:[["class","profile-container",4,"ngIf"],[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],[1,"bio-section"],[1,"greeting"],[1,"bio",3,"innerHTML"],[1,"highlights"],["class","highlight-item",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Danielou1","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","https://www.linkedin.com/in/danielou-mounsande/","target","_blank","title","LinkedIn",1,"social-icon"],["d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"],["x","2","y","9","width","4","height","12"],["cx","4","cy","4","r","2"],["href","mailto:mounsandedaniel@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"highlight-item"],[1,"icon"],[3,"innerHTML"]],template:function(n,r){n&1&&dt(0,vd,30,5,"div",0),n&2&&Xe("ngIf",r.profileData)},dependencies:[Tt,Ft,Hi],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;border-color:#00bfff;transform:translateY(-2px)}.bio-section[_ngcontent-%COMP%]{background-color:#0003;padding:20px;border-radius:8px;border:1px solid rgba(0,191,255,.5)}.greeting[_ngcontent-%COMP%]{font-size:1.6rem;font-weight:500;margin-bottom:8px}.bio[_ngcontent-%COMP%]{font-size:1.1rem;line-height:1.6;color:#f0f0f0}.highlights[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px}.highlight-item[_ngcontent-%COMP%]{background-color:#0003;padding:16px;border-radius:8px;display:flex;align-items:center;gap:12px;border:1px solid rgba(0,191,255,.5);transition:background-color .2s ease}.highlight-item[_ngcontent-%COMP%]:hover{background-color:#00bfff33}.icon[_ngcontent-%COMP%]{font-size:1.8rem}[_nghost-%COMP%]     strong{color:#00bfff;font-weight:700}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}@media (max-width: 640px){.title[_ngcontent-%COMP%]{font-size:1.8rem}.greeting[_ngcontent-%COMP%]{font-size:1.3rem}.bio[_ngcontent-%COMP%]{font-size:1rem}}"]})}}return i})();function xd(i,e){if(i&1&&(U(0,"div",25)(1,"span",26),Re(2),Y(),U(3,"div",27),_e(4,"div",28),Y()()),i&2){let t=e.$implicit;Xe("title",t.description),se(2),qe(t.name),se(2),ws("width",t.level,"%")}}function yd(i,e){if(i&1&&(U(0,"div",21)(1,"h3",22),Re(2),Y(),U(3,"div",23),dt(4,xd,5,4,"div",24),Y()()),i&2){let t=e.$implicit;se(2),qe(t.name),se(2),Xe("ngForOf",t.skills)}}var Vc=(()=>{class i{constructor(t,n){this.languageService=t,this.sceneControlService=n,this.currentLanguage="de",this.skillsData={de:{title:"Technische F\xE4higkeiten",categories:[{name:"Programmiersprachen",skills:[{name:"C/C++",level:90,description:"Umfassende Erfahrung in Systemprogrammierung und Embedded-Anwendungen."},{name:"Java",level:85,description:"Entwicklung von Backend-Diensten und Desktop-Anwendungen."},{name:"Python",level:70,description:"Erfahrung in Skripting, Automatisierung und Datenanalyse."},{name:"SQL",level:65,description:"Solide Kenntnisse in Datenbankabfragen und -management."}]},{name:"Tools & Technologien",skills:[{name:"Git & GitHub",level:90,description:"Effiziente Versionskontrolle und kollaborative Entwicklung."},{name:"Docker",level:75,description:"Containerisierung von Anwendungen f\xFCr konsistente Umgebungen."},{name:"Matlab/Simulink",level:70,description:"Modellierung und Simulation von Systemen."},{name:"SPS (PLC)",level:60,description:"Grundlagen der speicherprogrammierbaren Steuerungen."}]}]},en:{title:"Technical Skills",categories:[{name:"Programming Languages",skills:[{name:"C/C++",level:90,description:"Extensive experience in system programming and embedded applications."},{name:"Java",level:85,description:"Development of backend services and desktop applications."},{name:"Python",level:70,description:"Experience in scripting, automation, and data analysis."},{name:"SQL",level:65,description:"Solid knowledge in database querying and management."}]},{name:"Tools & Technologies",skills:[{name:"Git & GitHub",level:90,description:"Efficient version control and collaborative development."},{name:"Docker",level:75,description:"Containerization of applications for consistent environments."},{name:"Matlab/Simulink",level:70,description:"System modeling and simulation."},{name:"SPS (PLC)",level:60,description:"Fundamentals of programmable logic controllers."}]}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t})}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}static{this.\u0275fac=function(n){return new(n||i)(Ue(Ot),Ue(Ct))}}static{this.\u0275cmp=St({type:i,selectors:[["app-skills"]],standalone:!0,features:[wt],decls:25,vars:3,consts:[[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],["class","category-section",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Danielou1","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","https://www.linkedin.com/in/danielou-mounsande/","target","_blank","title","LinkedIn",1,"social-icon"],["d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"],["x","2","y","9","width","4","height","12"],["cx","4","cy","4","r","2"],["href","mailto:mounsandedaniel@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"category-section"],[1,"category-title"],[1,"skills-grid"],["class","skill-item",3,"title",4,"ngFor","ngForOf"],[1,"skill-item",3,"title"],[1,"skill-name"],[1,"skill-bar-container"],[1,"skill-bar"]],template:function(n,r){n&1&&(U(0,"div",0)(1,"div",1)(2,"button",2),st("click",function(){return r.goBack()}),Fe(),U(3,"svg",3),_e(4,"line",4)(5,"polyline",5),Y()(),je(),U(6,"h2",6),Re(7),Y(),U(8,"div",7)(9,"button",8),st("click",function(){return r.toggleLanguage()}),Re(10),Y()()(),dt(11,yd,5,2,"div",9),U(12,"footer",10)(13,"a",11),Fe(),U(14,"svg",12),_e(15,"path",13),Y()(),je(),U(16,"a",14),Fe(),U(17,"svg",12),_e(18,"path",15)(19,"rect",16)(20,"circle",17),Y()(),je(),U(21,"a",18),Fe(),U(22,"svg",12),_e(23,"path",19)(24,"polyline",20),Y()()()()),n&2&&(se(7),qe(r.skillsData[r.currentLanguage].title),se(3),Lt(" ",r.currentLanguage==="de"?"EN":"DE"," "),se(),Xe("ngForOf",r.skillsData[r.currentLanguage].categories))},dependencies:[Tt,Ft],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;transform:translateY(-2px)}.category-section[_ngcontent-%COMP%]{padding-top:16px}.category-title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600;margin-bottom:16px;color:#f0f0f0}.skills-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:16px}.skill-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.skill-name[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:500}.skill-bar-container[_ngcontent-%COMP%]{width:100%;height:12px;background-color:#0000004d;border-radius:6px;overflow:hidden;border:1px solid #444}.skill-bar[_ngcontent-%COMP%]{height:100%;background-color:#00bfff;border-radius:6px;transition:width .5s ease-out}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}@media (max-width: 640px){.title[_ngcontent-%COMP%]{font-size:1.8rem}.category-title[_ngcontent-%COMP%]{font-size:1.3rem}}"]})}}return i})();function Md(i,e){if(i&1&&(U(0,"div",22)(1,"div",23),Re(2),Y(),U(3,"div",24),Re(4),Y()()),i&2){let t=e.$implicit;Xe("title",t.description),se(2),qe(t.icon),se(2),qe(t.name)}}var zc=(()=>{class i{constructor(t,n){this.languageService=t,this.sceneControlService=n,this.currentLanguage="de",this.softSkillsData={de:{title:"Soziale Kompetenzen",items:[{icon:"\u{1F4D6}",name:"Lernbereitschaft",description:"Schnelle Aneignung neuer Technologien und Konzepte."},{icon:"\u{1F91D}",name:"Teamarbeit",description:"Effektive Zusammenarbeit in agilen und interdisziplin\xE4ren Teams."},{icon:"\u23F0",name:"Zeitmanagement",description:"Priorisierung von Aufgaben zur Einhaltung von Fristen."},{icon:"\u{1F4A1}",name:"Kritisches Denken",description:"Analytische Probleml\xF6sung und fundierte Entscheidungsfindung."},{icon:"\u{1F5E3}\uFE0F",name:"Effektive Kommunikation",description:"Klare Vermittlung komplexer technischer Informationen."},{icon:"\u{1F468}\u200D\u{1F3EB}",name:"Leadership",description:"\xDCbernahme von Verantwortung und Motivation des Teams."}]},en:{title:"Soft Skills",items:[{icon:"\u{1F4D6}",name:"Eagerness to Learn",description:"Rapid acquisition of new technologies and concepts."},{icon:"\u{1F91D}",name:"Teamwork",description:"Effective collaboration in agile and interdisciplinary teams."},{icon:"\u23F0",name:"Time Management",description:"Prioritizing tasks to meet deadlines effectively."},{icon:"\u{1F4A1}",name:"Critical Thinking",description:"Analytical problem-solving and informed decision-making."},{icon:"\u{1F5E3}\uFE0F",name:"Effective Communication",description:"Clearly conveying complex technical information."},{icon:"\u{1F468}\u200D\u{1F3EB}",name:"Leadership",description:"Taking responsibility and motivating the team."}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t})}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}static{this.\u0275fac=function(n){return new(n||i)(Ue(Ot),Ue(Ct))}}static{this.\u0275cmp=St({type:i,selectors:[["app-softskills"]],standalone:!0,features:[wt],decls:26,vars:3,consts:[[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],[1,"soft-skills-grid"],["class","soft-skill-card",3,"title",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Danielou1","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","https://www.linkedin.com/in/danielou-mounsande/","target","_blank","title","LinkedIn",1,"social-icon"],["d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"],["x","2","y","9","width","4","height","12"],["cx","4","cy","4","r","2"],["href","mailto:mounsandedaniel@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"soft-skill-card",3,"title"],[1,"icon"],[1,"skill-name"]],template:function(n,r){n&1&&(U(0,"div",0)(1,"div",1)(2,"button",2),st("click",function(){return r.goBack()}),Fe(),U(3,"svg",3),_e(4,"line",4)(5,"polyline",5),Y()(),je(),U(6,"h2",6),Re(7),Y(),U(8,"div",7)(9,"button",8),st("click",function(){return r.toggleLanguage()}),Re(10),Y()()(),U(11,"div",9),dt(12,Md,5,3,"div",10),Y(),U(13,"footer",11)(14,"a",12),Fe(),U(15,"svg",13),_e(16,"path",14),Y()(),je(),U(17,"a",15),Fe(),U(18,"svg",13),_e(19,"path",16)(20,"rect",17)(21,"circle",18),Y()(),je(),U(22,"a",19),Fe(),U(23,"svg",13),_e(24,"path",20)(25,"polyline",21),Y()()()()),n&2&&(se(7),qe(r.softSkillsData[r.currentLanguage].title),se(3),Lt(" ",r.currentLanguage==="de"?"EN":"DE"," "),se(2),Xe("ngForOf",r.softSkillsData[r.currentLanguage].items))},dependencies:[Tt,Ft],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;transform:translateY(-2px)}.soft-skills-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px;padding-top:16px}.soft-skill-card[_ngcontent-%COMP%]{background-color:#0003;border:1px solid rgba(0,191,255,.5);border-radius:8px;padding:20px;text-align:center;transition:transform .2s ease,background-color .2s ease}.soft-skill-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);background-color:#00bfff1a}.soft-skill-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:2.5rem;margin-bottom:12px;display:block}.soft-skill-card[_ngcontent-%COMP%]   .skill-name[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:600}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}"]})}}return i})();function bd(i,e){if(i&1&&(U(0,"div",22)(1,"div",23),Re(2),Y(),U(3,"div",24),Re(4),Y()()),i&2){let t=e.$implicit;Xe("title",t.description),se(2),qe(t.name),se(2),qe(t.level)}}var Hc=(()=>{class i{constructor(t,n){this.languageService=t,this.sceneControlService=n,this.currentLanguage="de",this.languagesData={de:{title:"Sprachkenntnisse",items:[{name:"Franz\xF6sisch",level:"Muttersprache",description:"C2 - Vollst\xE4ndige Beherrschung in allen Kontexten."},{name:"Deutsch",level:"Verhandlungssicher",description:"C1 - Flie\xDFend in beruflichen und akademischen Umgebungen."},{name:"Englisch",level:"Gute Kenntnisse",description:"B2 - Selbstst\xE4ndige und effektive Kommunikation."}]},en:{title:"Languages",items:[{name:"French",level:"Native Speaker",description:"C2 - Complete proficiency in all contexts."},{name:"German",level:"Business Fluent",description:"C1 - Fluent in professional and academic environments."},{name:"English",level:"Proficient",description:"B2 - Independent and effective communication."}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t})}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}static{this.\u0275fac=function(n){return new(n||i)(Ue(Ot),Ue(Ct))}}static{this.\u0275cmp=St({type:i,selectors:[["app-sprachen"]],standalone:!0,features:[wt],decls:26,vars:3,consts:[[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],[1,"languages-grid"],["class","language-card",3,"title",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Danielou1","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","https://www.linkedin.com/in/danielou-mounsande/","target","_blank","title","LinkedIn",1,"social-icon"],["d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"],["x","2","y","9","width","4","height","12"],["cx","4","cy","4","r","2"],["href","mailto:mounsandedaniel@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"language-card",3,"title"],[1,"language-name"],[1,"language-level"]],template:function(n,r){n&1&&(U(0,"div",0)(1,"div",1)(2,"button",2),st("click",function(){return r.goBack()}),Fe(),U(3,"svg",3),_e(4,"line",4)(5,"polyline",5),Y()(),je(),U(6,"h2",6),Re(7),Y(),U(8,"div",7)(9,"button",8),st("click",function(){return r.toggleLanguage()}),Re(10),Y()()(),U(11,"div",9),dt(12,bd,5,3,"div",10),Y(),U(13,"footer",11)(14,"a",12),Fe(),U(15,"svg",13),_e(16,"path",14),Y()(),je(),U(17,"a",15),Fe(),U(18,"svg",13),_e(19,"path",16)(20,"rect",17)(21,"circle",18),Y()(),je(),U(22,"a",19),Fe(),U(23,"svg",13),_e(24,"path",20)(25,"polyline",21),Y()()()()),n&2&&(se(7),qe(r.languagesData[r.currentLanguage].title),se(3),Lt(" ",r.currentLanguage==="de"?"EN":"DE"," "),se(2),Xe("ngForOf",r.languagesData[r.currentLanguage].items))},dependencies:[Tt,Ft],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;transform:translateY(-2px)}.languages-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:16px;padding-top:16px}.language-card[_ngcontent-%COMP%]{background-color:#0003;border:1px solid rgba(0,191,255,.5);border-radius:8px;padding:20px;text-align:center}.language-name[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600;color:#f0f0f0}.language-level[_ngcontent-%COMP%]{font-size:1.1rem;color:#00bfff;margin-top:4px}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}"]})}}return i})();function Sd(i,e){if(i&1&&(U(0,"div",22),_e(1,"div",23),U(2,"div",24)(3,"div",25),Re(4),Y(),U(5,"h3",26),Re(6),Y(),U(7,"p",27),Re(8),Y(),U(9,"p",28),Re(10),Y()()()),i&2){let t=e.$implicit;se(4),qe(t.date),se(2),qe(t.institution),se(2),qe(t.degree),se(2),qe(t.description)}}var Gc=(()=>{class i{constructor(t,n){this.languageService=t,this.sceneControlService=n,this.currentLanguage="de",this.academicData={de:{title:"Akademische Laufbahn",timeline:[{degree:"Bachelor of Science: Ingenieur-Informatik",institution:"Technische Hochschule Mittelhessen (THM)",date:"Okt 2022 - Dez 2025",description:"Praxisnahes Studium mit Fokus auf Software-Engineering, Algorithmen, objektorientierte Programmierung (Java, C++), Datenbanken (SQL), Web-Technologien und Embedded Systems."},{degree:"Deutsch-Sprachkurs (A1-C1) mit TestDaF-Zertifikat",institution:"Goethe-Institut",date:"Sep 2019 - Aug 2021",description:"Intensivkurs zur Erlangung der sprachlichen Hochschulzugangsberechtigung f\xFCr Deutschland."},{degree:"Allgemeine Hochschulreife (Abitur)",institution:"Coll\xE8ge Bilingue de Kribi",date:"Sep 2003 - Aug 2019",description:"Abschluss mit Leistungskursen in Mathematik, Physik und Informatik als solide Grundlage f\xFCr ein Ingenieurstudium."}]},en:{title:"Education",timeline:[{degree:"Bachelor of Engineering: Applied Computer Science",institution:"THM - University of Applied Sciences",date:"Oct 2022 - Dec 2025",description:"Hands-on studies focusing on Software Engineering, Algorithms, Object-Oriented Programming (Java, C++), Databases (SQL), Web Technologies, and Embedded Systems."},{degree:"German Language Course (A1-C1) with TestDaF Certificate",institution:"Goethe-Institut",date:"Sep 2019 - Aug 2021",description:"Intensive course to obtain the language proficiency required for university admission in Germany."},{degree:"General University Entrance Qualification (Abitur)",institution:"Coll\xE8ge Bilingue de Kribi",date:"Sep 2003 - Aug 2019",description:"Graduated with advanced courses in Mathematics, Physics, and Computer Science, providing a strong foundation for engineering studies."}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t})}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}static{this.\u0275fac=function(n){return new(n||i)(Ue(Ot),Ue(Ct))}}static{this.\u0275cmp=St({type:i,selectors:[["app-akademisch"]],standalone:!0,features:[wt],decls:26,vars:3,consts:[[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],[1,"timeline"],["class","timeline-item",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Danielou1","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","https://www.linkedin.com/in/danielou-mounsande/","target","_blank","title","LinkedIn",1,"social-icon"],["d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"],["x","2","y","9","width","4","height","12"],["cx","4","cy","4","r","2"],["href","mailto:mounsandedaniel@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"timeline-item"],[1,"timeline-dot"],[1,"timeline-content"],[1,"timeline-date"],[1,"timeline-institution"],[1,"timeline-degree"],[1,"timeline-description"]],template:function(n,r){n&1&&(U(0,"div",0)(1,"div",1)(2,"button",2),st("click",function(){return r.goBack()}),Fe(),U(3,"svg",3),_e(4,"line",4)(5,"polyline",5),Y()(),je(),U(6,"h2",6),Re(7),Y(),U(8,"div",7)(9,"button",8),st("click",function(){return r.toggleLanguage()}),Re(10),Y()()(),U(11,"div",9),dt(12,Sd,11,4,"div",10),Y(),U(13,"footer",11)(14,"a",12),Fe(),U(15,"svg",13),_e(16,"path",14),Y()(),je(),U(17,"a",15),Fe(),U(18,"svg",13),_e(19,"path",16)(20,"rect",17)(21,"circle",18),Y()(),je(),U(22,"a",19),Fe(),U(23,"svg",13),_e(24,"path",20)(25,"polyline",21),Y()()()()),n&2&&(se(7),qe(r.academicData[r.currentLanguage].title),se(3),Lt(" ",r.currentLanguage==="de"?"EN":"DE"," "),se(2),Xe("ngForOf",r.academicData[r.currentLanguage].timeline))},dependencies:[Tt,Ft],styles:['[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;transform:translateY(-2px)}.timeline[_ngcontent-%COMP%]{position:relative;padding:20px 0;margin-left:20px}.timeline[_ngcontent-%COMP%]:before{content:"";position:absolute;left:4px;top:0;bottom:0;width:2px;background-color:#444}.timeline-item[_ngcontent-%COMP%]{position:relative;margin-bottom:30px;padding-left:30px}.timeline-dot[_ngcontent-%COMP%]{position:absolute;left:-4px;top:5px;width:20px;height:20px;border-radius:50%;background-color:#222;border:4px solid #00bfff}.timeline-date[_ngcontent-%COMP%]{font-size:.9rem;color:#aaa;margin-bottom:8px}.timeline-institution[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:600;color:#f0f0f0}.timeline-degree[_ngcontent-%COMP%]{font-size:1.1rem;font-style:italic;color:#ccc;margin-top:4px}.timeline-description[_ngcontent-%COMP%]{font-size:1rem;color:#aaa;margin-top:8px}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}@media (max-width: 640px){.title[_ngcontent-%COMP%]{font-size:1.8rem}.timeline-institution[_ngcontent-%COMP%]{font-size:1.2rem}.timeline-degree[_ngcontent-%COMP%]{font-size:1rem}}']})}}return i})();function wd(i,e){if(i&1&&(U(0,"span",27),Re(1),Y()),i&2){let t=e.$implicit;se(),qe(t)}}function Ed(i,e){if(i&1&&(U(0,"div",22)(1,"h3",23),Re(2),Y(),U(3,"p",24),Re(4),Y(),U(5,"div",25),dt(6,wd,2,1,"span",26),Y()()),i&2){let t=e.$implicit;se(2),qe(t.name),se(2),qe(t.description),se(2),Xe("ngForOf",t.tags)}}var Wc=(()=>{class i{constructor(t,n){this.languageService=t,this.sceneControlService=n,this.currentLanguage="de",this.projectsData={de:{title:"Ausgew\xE4hlte Projekte",projects:[{name:"AVR Synthesizer & Musik-Player",description:"Ein mehrstufiges Embedded-Projekt, das einen AVR-Mikrocontroller in ein Musikinstrument verwandelt. Von der Erzeugung reiner Sinust\xF6ne mittels DAC und Timern \xFCber ein digitales Echtzeit-Piano bis hin zu einem kompletten Melodie-Player, der vordefinierte Lieder (z.B. Super Mario) durch pr\xE4zise Steuerung von Tonfrequenz und -dauer abspielt.",tags:["AVR","Embedded C","Synthesizer","DAC","Timers","Interrupts"]},{name:"RGB-LED-Steuerung via USART",description:'Programmierung eines AVR-Mikrocontrollers zur Steuerung einer RGB-LED. Das System empf\xE4ngt Farbcodes (z.B. "255,100,0#") \xFCber die serielle Schnittstelle (USART) und passt die Farbe der LED dynamisch durch die Generierung von drei PWM-Signalen an.',tags:["AVR","Embedded C","PWM","USART","Serial"]},{name:"Infrarot-gesteuerter Timer",description:"Entwicklung eines Timers f\xFCr AVR-Mikrocontroller, der vollst\xE4ndig \xFCber eine IR-Fernbedienung nach dem NEC-Protokoll gesteuert wird. Das Projekt umfasste die C-Programmierung von Timer/Counter-Interrupts, die Behandlung externer Interrupts zur IR-Signaldekodierung und die Ansteuerung eines I2C-LCDs.",tags:["AVR","Embedded C","IR-Protokoll","I2C","Timers","Interrupts"]},{name:"I2C-Farbsensor (TCS34725)",description:"Implementierung von I2C-Master-Routinen zur Kommunikation mit Peripherieger\xE4ten. Das Projekt umfasste das Senden von Konfigurationsbefehlen an ein LCD und das Auslesen und Interpretieren von RGBC-Farbdaten (Rot, Gr\xFCn, Blau, Clear) von einem TCS34725-Farbsensor.",tags:["AVR","Embedded C","I2C","Sensoren","LCD"]},{name:"Servomotor-Steuerung mit PWM",description:"Ansteuerung eines Standard-Servomotors durch Generierung eines pr\xE4zisen PWM-Signals mit einem AVR-Timer. Das Programm bewegt den Servo schrittweise zwischen vordefinierten Positionen, um die Grundlagen der Motorsteuerung zu demonstrieren.",tags:["AVR","Embedded C","PWM","Servo","Timers"]},{name:"Digitales Voltmeter mit ADC",description:"Nutzung des eingebauten 12-Bit-Analog-Digital-Wandlers (ADC) des AVR, um eine anliegende Spannung zu messen. Das Ergebnis wurde in Volt und als Prozentsatz umgerechnet und auf einem LCD-Display flimmerfrei (nur bei Wert\xE4nderung) angezeigt.",tags:["AVR","Embedded C","ADC","Sensoren","LCD"]},{name:"Interaktives 3D-Portfolio",description:"Entwicklung dieses interaktiven 3D-Portfolios als virtuelle Bahnhofsszene mit Angular und Three.js. Integration von synchronisierten HTML-Panels f\xFCr dynamische Inhalte und interaktive Elemente.",tags:["Angular","Three.js","TypeScript","WebGL","SSR","UI/UX"]},{name:"ExamBuilder (Bachelorarbeit)",description:"Desktop-Anwendung in JavaFX zur Erstellung und Verwaltung von Pr\xFCfungen. Kernst\xFCck ist die KI-gest\xFCtzte Umformulierung von Fragen \xFCber die Gemini API zur Steigerung der Pr\xFCfungsvielfalt.",tags:["JavaFX","Maven","Apache POI","Gemini API","MVC"]},{name:"Smart Lab System",description:"Entwicklung eines intelligenten Laborsystems mit STM32 und BME280-Sensorik. Implementierung der Embedded-Software in C/C++ und einer JavaFX-GUI zur Echtzeitvisualisierung via MQTT.",tags:["C/C++","STM32","JavaFX","MQTT","Embedded"]},{name:"Echtzeit-Stoppuhr mit STM32F4",description:"Implementierung einer pr\xE4zisen digitalen Stoppuhr auf einem STM32F4 Mikrocontroller. Das Projekt umfasste die Programmierung von Timern, Interrupts und die Ansteuerung eines LCD-Displays zur Anzeige der Zeit. Fokus auf Echtzeitverarbeitung und Hardware-Interaktion.",tags:["STM32F4","Embedded C","Mikrocontroller","Timer","Interrupts","LCD"]},{name:"Autonome Wetterstation mit STM32F4",description:"Entwicklung einer autonomen Wetterstation basierend auf einem STM32F4 Mikrocontroller. Integration verschiedener Sensoren (Temperatur, Luftfeuchtigkeit, Druck) und Daten\xFCbertragung \xFCber UART/I2C. Visualisierung der Wetterdaten auf einem Display oder \xFCber serielle Schnittstelle.",tags:["STM32F4","Embedded C","Sensoren","UART","I2C","Wetterdaten"]},{name:"Terminal-Snake in C",description:"Implementierung des klassischen Snake-Spiels als Konsolenanwendung in C. Das Projekt demonstriert Kenntnisse in der Konsolenprogrammierung, Datenstrukturen und Algorithmen f\xFCr die Spielmechanik und Kollisionserkennung.",tags:["C-Programmierung","Konsolenanwendung","Algorithmen","Spieleentwicklung"]},{name:"Web-Ping-Pong mit JavaScript & Docker",description:"Entwicklung eines interaktiven Ping-Pong-Spiels f\xFCr den Webbrowser mit JavaScript. Das Projekt wurde in Docker-Containern verpackt, um eine einfache Bereitstellung und konsistente Ausf\xFChrung zu gew\xE4hrleisten. Fokus auf Frontend-Entwicklung und Containerisierung.",tags:["JavaScript","HTML5 Canvas","Webentwicklung","Docker","Containerisierung"]}]},en:{title:"Featured Projects",projects:[{name:"AVR Synthesizer & Music Player",description:"A multi-stage embedded project that turns an AVR microcontroller into a musical instrument. From generating pure sine wave tones using a DAC and timers, to a real-time digital piano, to a full melody player capable of playing predefined songs (e.g., Super Mario) by precisely controlling note frequency and duration.",tags:["AVR","Embedded C","Synthesizer","DAC","Timers","Interrupts"]},{name:"RGB LED Control via USART",description:'Programmed an AVR microcontroller to control an RGB LED. The system receives color codes (e.g., "255,100,0#") via the serial interface (USART) and dynamically adjusts the LED color by generating three PWM signals.',tags:["AVR","Embedded C","PWM","USART","Serial"]},{name:"IR Remote Controlled Timer",description:"Developed a timer for AVR microcontrollers, fully controllable via an IR remote using the NEC protocol. The project involved C programming for timer/counter interrupts, handling external interrupts for IR signal decoding, and interfacing with an I2C LCD.",tags:["AVR","Embedded C","IR Protocol","I2C","Timers","Interrupts"]},{name:"I2C Color Sensor (TCS34725)",description:"Implementation of I2C master routines to communicate with peripherals. The project involved sending configuration commands to an LCD and reading/interpreting RGBC (Red, Green, Blue, Clear) color data from a TCS34725 color sensor.",tags:["AVR","Embedded C","I2C","Sensors","LCD"]},{name:"Servo Motor Control with PWM",description:"Controlled a standard servo motor by generating a precise PWM signal with an AVR timer. The program moves the servo incrementally between predefined positions, demonstrating the fundamentals of motor control.",tags:["AVR","Embedded C","PWM","Servo","Timers"]},{name:"Digital Voltmeter with ADC",description:"Utilized the AVR's built-in 12-bit Analog-to-Digital Converter (ADC) to measure an input voltage. The result was converted to volts and a percentage, and displayed on an LCD with flicker-free logic (updating only on value change).",tags:["AVR","Embedded C","ADC","Sensors","LCD"]},{name:"Interactive 3D Portfolio",description:"Development of this interactive 3D portfolio as a virtual train station scene using Angular and Three.js. Integration of synchronized HTML panels for dynamic content and interactive elements.",tags:["Angular","Three.js","TypeScript","WebGL","SSR","UI/UX"]},{name:"ExamBuilder (Bachelor Thesis)",description:"Desktop application built with JavaFX for creating and managing exams. A core feature is the AI-powered rephrasing of questions via the Gemini API to enhance exam diversity.",tags:["JavaFX","Maven","Apache POI","Gemini API","MVC"]},{name:"Smart Lab System",description:"Developed a smart laboratory system using STM32 and BME280 sensors. Implemented the embedded software in C/C++ and a JavaFX GUI for real-time visualization via MQTT.",tags:["C/C++","STM32","JavaFX","MQTT","Embedded"]},{name:"Real-time Stopwatch with STM32F4",description:"Implementation of a precise digital stopwatch on an STM32F4 microcontroller. The project involved programming timers, interrupts, and controlling an LCD display for time visualization. Focus on real-time processing and hardware interaction.",tags:["STM32F4","Embedded C","Microcontroller","Timers","Interrupts","LCD"]},{name:"Autonomous Weather Station with STM32F4",description:"Development of an autonomous weather station based on an STM32F4 microcontroller. Integration of various sensors (temperature, humidity, pressure) and data transmission via UART/I2C. Visualization of weather data on a display or via serial interface.",tags:["STM32F4","Embedded C","Sensors","UART","I2C","Weather Data"]},{name:"Terminal Snake Game in C",description:"Implementation of the classic Snake game as a console application in C. This project demonstrates knowledge of console programming, data structures, and algorithms for game mechanics and collision detection.",tags:["C Programming","Console Application","Algorithms","Game Development"]},{name:"Web Ping-Pong Game with JavaScript & Docker",description:"Development of an interactive Ping-Pong game for the web browser using JavaScript. The project was containerized with Docker for easy deployment and consistent execution. Focus on frontend development and containerization.",tags:["JavaScript","HTML5 Canvas","Web Development","Docker","Containerization"]}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t})}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}static{this.\u0275fac=function(n){return new(n||i)(Ue(Ot),Ue(Ct))}}static{this.\u0275cmp=St({type:i,selectors:[["app-projekte"]],standalone:!0,features:[wt],decls:26,vars:3,consts:[[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],[1,"projects-grid"],["class","project-card",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Danielou1","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","https://www.linkedin.com/in/danielou-mounsande/","target","_blank","title","LinkedIn",1,"social-icon"],["d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"],["x","2","y","9","width","4","height","12"],["cx","4","cy","4","r","2"],["href","mailto:mounsandedaniel@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"project-card"],[1,"project-name"],[1,"project-description"],[1,"project-tags"],["class","tag",4,"ngFor","ngForOf"],[1,"tag"]],template:function(n,r){n&1&&(U(0,"div",0)(1,"div",1)(2,"button",2),st("click",function(){return r.goBack()}),Fe(),U(3,"svg",3),_e(4,"line",4)(5,"polyline",5),Y()(),je(),U(6,"h2",6),Re(7),Y(),U(8,"div",7)(9,"button",8),st("click",function(){return r.toggleLanguage()}),Re(10),Y()()(),U(11,"div",9),dt(12,Ed,7,3,"div",10),Y(),U(13,"footer",11)(14,"a",12),Fe(),U(15,"svg",13),_e(16,"path",14),Y()(),je(),U(17,"a",15),Fe(),U(18,"svg",13),_e(19,"path",16)(20,"rect",17)(21,"circle",18),Y()(),je(),U(22,"a",19),Fe(),U(23,"svg",13),_e(24,"path",20)(25,"polyline",21),Y()()()()),n&2&&(se(7),qe(r.projectsData[r.currentLanguage].title),se(3),Lt(" ",r.currentLanguage==="de"?"EN":"DE"," "),se(2),Xe("ngForOf",r.projectsData[r.currentLanguage].projects))},dependencies:[Tt,Ft],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;transform:translateY(-2px)}.projects-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;padding-top:16px}.project-card[_ngcontent-%COMP%]{background-color:#0003;border:1px solid rgba(0,191,255,.5);border-radius:8px;padding:20px;transition:transform .2s ease,background-color .2s ease}.project-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);background-color:#00bfff1a}.project-name[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:600;color:#f0f0f0;margin-bottom:8px}.project-description[_ngcontent-%COMP%]{font-size:1rem;color:#aaa;line-height:1.5;margin-bottom:12px}.project-tags[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px}.tag[_ngcontent-%COMP%]{background-color:#00bfff33;color:#00bfff;padding:4px 8px;border-radius:4px;font-size:.8rem}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}@media (max-width: 640px){.title[_ngcontent-%COMP%]{font-size:1.8rem}.project-name[_ngcontent-%COMP%]{font-size:1.2rem}}"]})}}return i})();function Td(i,e){if(i&1&&(U(0,"div",22),_e(1,"div",23),U(2,"div",24)(3,"div",25),Re(4),Y(),U(5,"h3",26),Re(6),Y(),U(7,"p",27),Re(8),Y(),U(9,"p",28),Re(10),Y()()()),i&2){let t=e.$implicit;se(4),qe(t.date),se(2),bc("",t.title," bei ",t.company,""),se(2),qe(t.location),se(2),qe(t.description)}}var Xc=(()=>{class i{constructor(t,n){this.languageService=t,this.sceneControlService=n,this.currentLanguage="de",this.experienceData={de:{title:"Berufserfahrung",timeline:[{title:"Forschung & Entwicklung im Bereich Embedded Systems",company:"Technische Hochschule Mittelhessen",location:"Gie\xDFen, Deutschland",date:"Oktober 2023 - Laufend",description:"Mitarbeit an einem Forschungsprojekt zur Entwicklung eines Microcontroller-basierten Remote-Labors. Meine Aufgaben umfassen die Implementierung, das Testen und die Optimierung von Embedded-Systemen, um eine zuverl\xE4ssige und performante Fernsteuerung der Laborumgebung zu gew\xE4hrleisten."},{title:"Verwaltungsunterst\xFCtzung & Sprachmittlung",company:"Bundesamt f\xFCr Migration und Fl\xFCchtlinge (BAMF)",location:"Gie\xDFen, Deutschland",date:"2023 - Laufend",description:"Als Dolmetscher unterst\xFCtze ich bei Anh\xF6rungen und erstelle pr\xE4zise schriftliche \xDCbersetzungen. Zudem bin ich f\xFCr die Aktenanlage und die Unterst\xFCtzung allgemeiner Verwaltungsprozesse zust\xE4ndig, um eine reibungslose Kommunikation zwischen der Beh\xF6rde und den Antragstellern sicherzustellen."},{title:"Verbundzusteller",company:"Deutsche Post DHL",location:"Deutschland",date:"Juni 2022 - Laufend",description:"Als Zusteller bei der Deutschen Post DHL bin ich f\xFCr die zuverl\xE4ssige Lieferung von Briefen und Paketen verantwortlich. Diese Rolle erfordert ein hohes Ma\xDF an Eigenorganisation und Zeitmanagement. Ein wesentlicher Teil meiner T\xE4tigkeit ist die st\xE4ndige Interaktion mit Kunden, um eine erfolgreiche Zustellung sicherzustellen und einen exzellenten Service zu bieten."},{title:"Bachelorarbeit & Softwareentwicklung mit JavaFX",company:"Technische Hochschule Mittelhessen",location:"Gie\xDFen, Deutschland",date:"April 2025 - Dezember 2025",description:"Im Rahmen meiner Bachelorarbeit habe ich die Desktop-Anwendung 'ExamBuilder' mit JavaFX und nach dem MVC-Muster entworfen und entwickelt. Die Anwendung dient der Erstellung, Verwaltung und dem Export von Pr\xFCfungen. Zu den Kernfunktionen geh\xF6ren die flexible Zusammenstellung von Fragen, das Generieren von L\xF6sungsbl\xE4ttern und eine innovative Funktion zur KI-gest\xFCtzten Reformulierung von Fragen, um die Pr\xFCfungsvielfalt zu erh\xF6hen."},{title:"Praktikum im CNC-Bereich",company:"Schunk Group (STS)",location:"Heuchelheim, Deutschland",date:"Juli 2025 - August 2025",description:"Intensives Praktikum in der Fertigung, in dem ich f\xFCr die Programmierung und Bedienung von Siemens-CNC-Maschinen (Sinumerik) verantwortlich war. Zu meinen Aufgaben geh\xF6rten die selbstst\xE4ndige Fertigung von Pr\xE4zisionsbauteilen sowie die kontinuierliche \xDCberwachung und Optimierung der Fertigungsprozesse."}]},en:{title:"Work Experience",timeline:[{title:"Research & Development in Embedded Systems",company:"THM - University of Applied Sciences",location:"Giessen, Germany",date:"October 2023 - Present",description:"Contributing to a research project focused on developing a microcontroller-based remote laboratory. My responsibilities include implementing, testing, and optimizing embedded systems to ensure reliable and high-performance remote control of the lab environment."},{title:"Administrative Support & Language Services",company:"Federal Office for Migration and Refugees (BAMF)",location:"Giessen, Germany",date:"2023 - Present",description:"As an interpreter, I facilitate hearings and provide precise written translations. I am also responsible for file creation and supporting general administrative processes to ensure smooth communication between the authorities and applicants."},{title:"Delivery Associate",company:"Deutsche Post DHL",location:"Germany",date:"June 2022 - Present",description:"As a delivery associate for Deutsche Post DHL, I am responsible for the reliable delivery of letters and parcels. This role demands a high level of self-organization and time management. A significant part of my work involves constant communication with customers to ensure successful deliveries and provide excellent service."},{title:"Bachelor Thesis & Software Development with JavaFX",company:"THM - University of Applied Sciences",location:"Giessen, Germany",date:"April 2025 - December 2025",description:"As part of my bachelor thesis, I designed and developed the 'ExamBuilder' desktop application using JavaFX, following the MVC design pattern. The application enables the creation, management, and export of exams. Key features include flexible assembly of exam questions, automatic generation of correction sheets, and an innovative feature for AI-powered question rephrasing to enhance exam diversity."},{title:"Internship in CNC Machining",company:"Schunk Group (STS)",location:"Heuchelheim, Germany",date:"July 2025 - August 2025",description:"Intensive internship in a manufacturing environment where I was responsible for programming and operating Siemens CNC machines (Sinumerik). My tasks included the independent production of precision components and the continuous monitoring and optimization of manufacturing processes."}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t})}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}static{this.\u0275fac=function(n){return new(n||i)(Ue(Ot),Ue(Ct))}}static{this.\u0275cmp=St({type:i,selectors:[["app-erfahrung"]],standalone:!0,features:[wt],decls:26,vars:3,consts:[[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],[1,"timeline"],["class","timeline-item",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Danielou1","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","https://www.linkedin.com/in/danielou-mounsande/","target","_blank","title","LinkedIn",1,"social-icon"],["d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"],["x","2","y","9","width","4","height","12"],["cx","4","cy","4","r","2"],["href","mailto:mounsandedaniel@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"timeline-item"],[1,"timeline-dot"],[1,"timeline-content"],[1,"timeline-date"],[1,"timeline-institution"],[1,"timeline-degree"],[1,"timeline-description"]],template:function(n,r){n&1&&(U(0,"div",0)(1,"div",1)(2,"button",2),st("click",function(){return r.goBack()}),Fe(),U(3,"svg",3),_e(4,"line",4)(5,"polyline",5),Y()(),je(),U(6,"h2",6),Re(7),Y(),U(8,"div",7)(9,"button",8),st("click",function(){return r.toggleLanguage()}),Re(10),Y()()(),U(11,"div",9),dt(12,Td,11,5,"div",10),Y(),U(13,"footer",11)(14,"a",12),Fe(),U(15,"svg",13),_e(16,"path",14),Y()(),je(),U(17,"a",15),Fe(),U(18,"svg",13),_e(19,"path",16)(20,"rect",17)(21,"circle",18),Y()(),je(),U(22,"a",19),Fe(),U(23,"svg",13),_e(24,"path",20)(25,"polyline",21),Y()()()()),n&2&&(se(7),qe(r.experienceData[r.currentLanguage].title),se(3),Lt(" ",r.currentLanguage==="de"?"EN":"DE"," "),se(2),Xe("ngForOf",r.experienceData[r.currentLanguage].timeline))},dependencies:[Tt,Ft],styles:['[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;transform:translateY(-2px)}.timeline[_ngcontent-%COMP%]{position:relative;padding:20px 0;margin-left:20px}.timeline[_ngcontent-%COMP%]:before{content:"";position:absolute;left:4px;top:0;bottom:0;width:2px;background-color:#444}.timeline-item[_ngcontent-%COMP%]{position:relative;margin-bottom:30px;padding-left:30px}.timeline-dot[_ngcontent-%COMP%]{position:absolute;left:-4px;top:5px;width:20px;height:20px;border-radius:50%;background-color:#222;border:4px solid #00bfff}.timeline-date[_ngcontent-%COMP%]{font-size:.9rem;color:#aaa;margin-bottom:8px}.timeline-institution[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:600;color:#f0f0f0}.timeline-degree[_ngcontent-%COMP%]{font-size:1.1rem;font-style:italic;color:#ccc;margin-top:4px}.timeline-description[_ngcontent-%COMP%]{font-size:1rem;color:#aaa;margin-top:8px}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}@media (max-width: 640px){.title[_ngcontent-%COMP%]{font-size:1.8rem}.timeline-institution[_ngcontent-%COMP%]{font-size:1.2rem}.timeline-degree[_ngcontent-%COMP%]{font-size:1rem}}']})}}return i})();function Cd(i,e){if(i&1&&(U(0,"a",28),Re(1),Y()),i&2){let t=jt().$implicit;Xe("href",t.href,vc),se(),qe(t.value)}}function Ad(i,e){if(i&1&&(U(0,"span",29),Re(1),Y()),i&2){let t=jt().$implicit;se(),qe(t.value)}}function Rd(i,e){if(i&1&&(U(0,"div",22)(1,"div",23),Re(2),Y(),U(3,"div",24)(4,"span",25),Re(5),Y(),dt(6,Cd,2,2,"a",26)(7,Ad,2,1,"span",27),Y()()),i&2){let t=e.$implicit;se(2),qe(t.icon),se(3),qe(t.text),se(),Xe("ngIf",t.href),se(),Xe("ngIf",!t.href)}}var qc=(()=>{class i{constructor(t,n){this.languageService=t,this.sceneControlService=n,this.currentLanguage="de",this.contactData={de:{title:"Kontaktdaten",items:[{icon:"\u{1F4E7}",text:"Email",value:"mounsandedaniel@gmail.com",href:"mailto:mounsandedaniel@gmail.com"},{icon:"\u{1F4DE}",text:"Telefon",value:"+49 157 587 279 49",href:"tel:+4915758727949"},{icon:"\u{1F4CD}",text:"Standort",value:"Gie\xDFen, Deutschland"},{icon:"\u{1F697}",text:"F\xFChrerschein",value:"Klasse B"}]},en:{title:"Contact Data",items:[{icon:"\u{1F4E7}",text:"Email",value:"mounsandedaniel@gmail.com",href:"mailto:mounsandedaniel@gmail.com"},{icon:"\u{1F4DE}",text:"Phone",value:"+49 157 587 279 49",href:"tel:+4915758727949"},{icon:"\u{1F4CD}",text:"Location",value:"Gie\xDFen, Germany"},{icon:"\u{1F697}",text:"Driving License",value:"Class B"}]}}}ngOnInit(){this.langSub=this.languageService.language$.subscribe(t=>{this.currentLanguage=t})}ngOnDestroy(){this.langSub&&this.langSub.unsubscribe()}toggleLanguage(){this.languageService.toggleLanguage()}goBack(){this.sceneControlService.requestCameraReset()}static{this.\u0275fac=function(n){return new(n||i)(Ue(Ot),Ue(Ct))}}static{this.\u0275cmp=St({type:i,selectors:[["app-daten"]],standalone:!0,features:[wt],decls:26,vars:3,consts:[[1,"profile-container"],[1,"profile-header"],[1,"back-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-left"],["x1","19","y1","12","x2","5","y2","12"],["points","12 19 5 12 12 5"],[1,"title"],[1,"header-buttons"],[1,"lang-toggle",3,"click"],[1,"data-grid"],["class","data-item",4,"ngFor","ngForOf"],[1,"profile-footer"],["href","https://github.com/Danielou1","target","_blank","title","GitHub",1,"social-icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","https://www.linkedin.com/in/danielou-mounsande/","target","_blank","title","LinkedIn",1,"social-icon"],["d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"],["x","2","y","9","width","4","height","12"],["cx","4","cy","4","r","2"],["href","mailto:mounsandedaniel@gmail.com","title","Email",1,"social-icon"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"],[1,"data-item"],[1,"icon"],[1,"data-text"],[1,"data-label"],["target","_blank","class","data-value link",3,"href",4,"ngIf"],["class","data-value",4,"ngIf"],["target","_blank",1,"data-value","link",3,"href"],[1,"data-value"]],template:function(n,r){n&1&&(U(0,"div",0)(1,"div",1)(2,"button",2),st("click",function(){return r.goBack()}),Fe(),U(3,"svg",3),_e(4,"line",4)(5,"polyline",5),Y()(),je(),U(6,"h2",6),Re(7),Y(),U(8,"div",7)(9,"button",8),st("click",function(){return r.toggleLanguage()}),Re(10),Y()()(),U(11,"div",9),dt(12,Rd,8,4,"div",10),Y(),U(13,"footer",11)(14,"a",12),Fe(),U(15,"svg",13),_e(16,"path",14),Y()(),je(),U(17,"a",15),Fe(),U(18,"svg",13),_e(19,"path",16)(20,"rect",17)(21,"circle",18),Y()(),je(),U(22,"a",19),Fe(),U(23,"svg",13),_e(24,"path",20)(25,"polyline",21),Y()()()()),n&2&&(se(7),qe(r.contactData[r.currentLanguage].title),se(3),Lt(" ",r.currentLanguage==="de"?"EN":"DE"," "),se(2),Xe("ngForOf",r.contactData[r.currentLanguage].items))},dependencies:[Tt,Ft,Hi],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;color:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}.profile-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;padding:20px;height:100%;overflow-y:auto}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0000004d;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#555;border-radius:4px}.profile-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#00bfff}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;border-bottom:2px solid #00bfff;padding-bottom:16px;gap:10px}.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-right:auto}.header-buttons[_ngcontent-%COMP%]{display:flex;gap:10px;align-items:center;margin-left:auto}.back-button[_ngcontent-%COMP%]{background:none;border:none;color:#f0f0f0;cursor:pointer;padding:5px;line-height:1;transition:color .2s ease}.back-button[_ngcontent-%COMP%]:hover{color:#00bfff}.title[_ngcontent-%COMP%]{font-size:2.2rem;font-weight:700;color:#00bfff}.lang-toggle[_ngcontent-%COMP%]{background-color:#222;color:#fff;border:2px solid #00bfff;border-radius:6px;padding:8px 16px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform .2s ease}.lang-toggle[_ngcontent-%COMP%]:hover{background-color:#00bfff;border-color:#00bfff;transform:translateY(-2px)}.data-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:20px}.data-item[_ngcontent-%COMP%]{background-color:#0003;padding:16px;border-radius:8px;display:flex;align-items:center;gap:16px;border:1px solid rgba(0,191,255,.5)}.icon[_ngcontent-%COMP%]{font-size:1.8rem;color:#00bfff}.data-text[_ngcontent-%COMP%]{display:flex;flex-direction:column}.data-label[_ngcontent-%COMP%]{font-size:.9rem;color:#aaa;margin-bottom:2px}.data-value[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:500}.data-value.link[_ngcontent-%COMP%]{color:#f0f0f0;text-decoration:none;transition:color .2s ease}.data-value.link[_ngcontent-%COMP%]:hover{color:#00bfff;text-decoration:underline}.profile-footer[_ngcontent-%COMP%]{margin-top:auto;padding-top:16px;border-top:1px solid #444;display:flex;justify-content:flex-end;align-items:center;gap:16px}.social-icon[_ngcontent-%COMP%]{color:#999;transition:color .2s ease,transform .2s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#00bfff;transform:scale(1.1)}"]})}}return i})();var vo="177";var gh=0,pl=1,_h=2;var ml=1,xo=2,Rn=3,cn=0,Vt=1,un=2,Xn=0,Ei=1,gl=2,_l=3,vl=4,vh=5,oi=100,xh=101,yh=102,Mh=103,bh=104,Sh=200,wh=201,Eh=202,Th=203,Ys=204,js=205,Ch=206,Ah=207,Rh=208,Ph=209,Ih=210,Dh=211,Lh=212,Fh=213,Oh=214,yo=0,Mo=1,bo=2,Ti=3,So=4,wo=5,Eo=6,To=7,xl=0,Nh=1,Uh=2,qn=0,kh=1,Bh=2,Vh=3,zh=4,Hh=5,Gh=6,Wh=7;var nl=300,Di=301,Li=302,Co=303,Ao=304,is=306,Zs=1e3,si=1001,$s=1002,hn=1003,Xh=1004;var rs=1005;var xn=1006,Ro=1007;var di=1008;var bn=1009,yl=1010,Ml=1011,ur=1012,Po=1013,fi=1014,Pn=1015,dr=1016,Io=1017,Do=1018,fr=1020,bl=35902,Sl=1021,wl=1022,dn=1023,nr=1026,pr=1027,El=1028,Lo=1029,Tl=1030,Fo=1031;var Oo=1033,ss=33776,os=33777,as=33778,ls=33779,No=35840,Uo=35841,ko=35842,Bo=35843,Vo=36196,zo=37492,Ho=37496,Go=37808,Wo=37809,Xo=37810,qo=37811,Yo=37812,jo=37813,Zo=37814,$o=37815,Jo=37816,Ko=37817,Qo=37818,ea=37819,ta=37820,na=37821,cs=36492,ia=36494,ra=36495,Cl=36283,sa=36284,oa=36285,aa=36286;var Lr=2300,Js=2301,qs=2302,il=2400,rl=2401,sl=2402;var qh=3200,Yh=3201;var Al=0,jh=1,Yn="",tn="srgb",Ci="srgb-linear",Fr="linear",ht="srgb";var wi=7680;var ol=519,Zh=512,$h=513,Jh=514,Rl=515,Kh=516,Qh=517,eu=518,tu=519,al=35044;var Pl="300 es",En=2e3,Or=2001;var Gn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Pa=Math.PI/180,Nr=180/Math.PI;function hs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function Je(i,e,t){return Math.max(e,Math.min(t,i))}function Pd(i,e){return(i%e+e)%e}function Ia(i,e,t){return(1-t)*i+t*e}function Cr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Jt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ze=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Tn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],f=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==f||c!==p||h!==g){let m=1-a,d=l*f+c*p+h*g+u*v,E=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){let D=Math.sqrt(S),A=Math.atan2(D,d*E);m=Math.sin(m*A)/D,a=Math.sin(a*A)/D}let M=a*E;if(l=l*m+f*M,c=c*m+p*M,h=h*m+g*M,u=u*m+v*M,m===1-a){let D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*p-c*f,e[t+1]=l*g+h*f+c*u-a*p,e[t+2]=c*g+h*p+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),f=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),h=2*(a*t-s*r),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Da.copy(this).projectOnVector(e),this.sub(Da)}reflect(e){return this.sub(Da.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Da=new L,Yc=new Tn,ze=class i{constructor(e,t,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],v=r[0],m=r[3],d=r[6],E=r[1],S=r[4],M=r[7],D=r[2],A=r[5],T=r[8];return s[0]=o*v+a*E+l*D,s[3]=o*m+a*S+l*A,s[6]=o*d+a*M+l*T,s[1]=c*v+h*E+u*D,s[4]=c*m+h*S+u*A,s[7]=c*d+h*M+u*T,s[2]=f*v+p*E+g*D,s[5]=f*m+p*S+g*A,s[8]=f*d+p*M+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*s,p=c*s-o*l,g=t*u+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(r*c-h*n)*v,e[2]=(a*n-r*o)*v,e[3]=f*v,e[4]=(h*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(La.makeScale(e,t)),this}rotate(e){return this.premultiply(La.makeRotation(-e)),this}translate(e,t){return this.premultiply(La.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},La=new ze;function Il(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nu(){let i=ir("canvas");return i.style.display="block",i}var jc={};function Ai(i){i in jc||(jc[i]=!0,console.warn(i))}function iu(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function ru(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function su(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Zc=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$c=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Id(){let i={enabled:!0,workingColorSpace:Ci,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ht&&(r.r=Hn(r.r),r.g=Hn(r.g),r.b=Hn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(r.r=tr(r.r),r.g=tr(r.g),r.b=tr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yn?Fr:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ai("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ai("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ci]:{primaries:e,whitePoint:n,transfer:Fr,toXYZ:Zc,fromXYZ:$c,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:Zc,fromXYZ:$c,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),i}var Qe=Id();function Hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function tr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Gi,Ks=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gi===void 0&&(Gi=ir("canvas")),Gi.width=e.width,Gi.height=e.height;let r=Gi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Gi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ir("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Hn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hn(t[n]/255)*255):t[n]=Hn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Dd=0,rr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=hs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Fa(r[o].image)):s.push(Fa(r[o]))}else s=Fa(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Fa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ks.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ld=0,Oa=new L,In=(()=>{class i extends Gn{constructor(t=i.DEFAULT_IMAGE,n=i.DEFAULT_MAPPING,r=si,s=si,o=xn,a=di,l=dn,c=bn,h=i.DEFAULT_ANISOTROPY,u=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=hs(),this.name="",this.source=new rr(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Oa).x}get height(){return this.source.getSize(Oa).y}get depth(){return this.source.getSize(Oa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let r=t[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[n]=r}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zs:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case $s:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zs:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case $s:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return i.DEFAULT_IMAGE=null,i.DEFAULT_MAPPING=nl,i.DEFAULT_ANISOTROPY=1,i})(),ct=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,M=(p+1)/2,D=(d+1)/2,A=(h+f)/4,T=(u+v)/4,P=(g+m)/4;return S>M&&S>D?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=A/n,s=T/n):M>D?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=A/r,s=P/r):D<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),n=T/s,r=P/s),this.set(n,r,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-v)/E,this.z=(f-h)/E,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qs=class extends Gn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);let r={width:e,height:t,depth:n.depth},s=new In(r);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new rr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cn=class extends Qs{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ur=class extends In{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var eo=class extends In{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ai=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(s,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cs.copy(n.boundingBox)),Cs.applyMatrix4(e.matrixWorld),this.union(Cs)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ar),As.subVectors(this.max,Ar),Wi.subVectors(e.a,Ar),Xi.subVectors(e.b,Ar),qi.subVectors(e.c,Ar),Kn.subVectors(Xi,Wi),Qn.subVectors(qi,Xi),_i.subVectors(Wi,qi);let t=[0,-Kn.z,Kn.y,0,-Qn.z,Qn.y,0,-_i.z,_i.y,Kn.z,0,-Kn.x,Qn.z,0,-Qn.x,_i.z,0,-_i.x,-Kn.y,Kn.x,0,-Qn.y,Qn.x,0,-_i.y,_i.x,0];return!Na(t,Wi,Xi,qi,As)||(t=[1,0,0,0,1,0,0,0,1],!Na(t,Wi,Xi,qi,As))?!1:(Rs.crossVectors(Kn,Qn),t=[Rs.x,Rs.y,Rs.z],Na(t,Wi,Xi,qi,As))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Nn=[new L,new L,new L,new L,new L,new L,new L,new L],gn=new L,Cs=new ai,Wi=new L,Xi=new L,qi=new L,Kn=new L,Qn=new L,_i=new L,Ar=new L,As=new L,Rs=new L,vi=new L;function Na(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){vi.fromArray(i,s);let a=r.x*Math.abs(vi.x)+r.y*Math.abs(vi.y)+r.z*Math.abs(vi.z),l=e.dot(vi),c=t.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Fd=new ai,Rr=new L,Ua=new L,sr=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Fd.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);let t=Rr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Rr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(Ua)),this.expandByPoint(Rr.copy(e.center).sub(Ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Un=new L,ka=new L,Ps=new L,ei=new L,Ba=new L,Is=new L,Va=new L,kr=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ka.copy(e).add(t).multiplyScalar(.5),Ps.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(ka);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Ps),a=ei.dot(this.direction),l=-ei.dot(Ps),c=ei.lengthSq(),h=Math.abs(1-o*o),u,f,p,g;if(h>0)if(u=o*l-a,f=o*a-l,g=s*h,u>=0)if(f>=-g)if(f<=g){let v=1/h;u*=v,f*=v,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ka).addScaledVector(Ps,f),p}intersectSphere(e,t){Un.subVectors(e.center,this.origin);let n=Un.dot(this.direction),r=Un.dot(Un)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,r,s){Ba.subVectors(t,e),Is.subVectors(n,e),Va.crossVectors(Ba,Is);let o=this.direction.dot(Va),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,e);let l=a*this.direction.dot(Is.crossVectors(ei,Is));if(l<0)return null;let c=a*this.direction.dot(Ba.cross(ei));if(c<0||l+c>o)return null;let h=-a*ei.dot(Va);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_t=class i{constructor(e,t,n,r,s,o,a,l,c,h,u,f,p,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,h,u,f,p,g,v,m)}set(e,t,n,r,s,o,a,l,c,h,u,f,p,g,v,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Yi.setFromMatrixColumn(e,0).length(),s=1/Yi.setFromMatrixColumn(e,1).length(),o=1/Yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let f=o*h,p=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,p=l*u,g=c*h,v=c*u;t[0]=f+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,p=l*u,g=c*h,v=c*u;t[0]=f-v*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,p=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=f-v*u}else if(e.order==="XZY"){let f=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Od,e,Nd)}lookAt(e,t,n){let r=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),ti.crossVectors(n,Qt),ti.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),ti.crossVectors(n,Qt)),ti.normalize(),Ds.crossVectors(Qt,ti),r[0]=ti.x,r[4]=Ds.x,r[8]=Qt.x,r[1]=ti.y,r[5]=Ds.y,r[9]=Qt.y,r[2]=ti.z,r[6]=Ds.z,r[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],d=n[14],E=n[3],S=n[7],M=n[11],D=n[15],A=r[0],T=r[4],P=r[8],b=r[12],y=r[1],R=r[5],z=r[9],k=r[13],q=r[2],X=r[6],H=r[10],J=r[14],G=r[3],oe=r[7],fe=r[11],Ae=r[15];return s[0]=o*A+a*y+l*q+c*G,s[4]=o*T+a*R+l*X+c*oe,s[8]=o*P+a*z+l*H+c*fe,s[12]=o*b+a*k+l*J+c*Ae,s[1]=h*A+u*y+f*q+p*G,s[5]=h*T+u*R+f*X+p*oe,s[9]=h*P+u*z+f*H+p*fe,s[13]=h*b+u*k+f*J+p*Ae,s[2]=g*A+v*y+m*q+d*G,s[6]=g*T+v*R+m*X+d*oe,s[10]=g*P+v*z+m*H+d*fe,s[14]=g*b+v*k+m*J+d*Ae,s[3]=E*A+S*y+M*q+D*G,s[7]=E*T+S*R+M*X+D*oe,s[11]=E*P+S*z+M*H+D*fe,s[15]=E*b+S*k+M*J+D*Ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+s*l*u-r*c*u-s*a*f+n*c*f+r*a*p-n*l*p)+v*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*h-s*l*h)+m*(+t*c*u-t*a*p-s*o*u+n*o*p+s*a*h-n*c*h)+d*(-r*a*h-t*l*u+t*a*f+r*o*u-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],E=u*m*c-v*f*c+v*l*p-a*m*p-u*l*d+a*f*d,S=g*f*c-h*m*c-g*l*p+o*m*p+h*l*d-o*f*d,M=h*v*c-g*u*c+g*a*p-o*v*p-h*a*d+o*u*d,D=g*u*l-h*v*l-g*a*f+o*v*f+h*a*m-o*u*m,A=t*E+n*S+r*M+s*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return e[0]=E*T,e[1]=(v*f*s-u*m*s-v*r*p+n*m*p+u*r*d-n*f*d)*T,e[2]=(a*m*s-v*l*s+v*r*c-n*m*c-a*r*d+n*l*d)*T,e[3]=(u*l*s-a*f*s-u*r*c+n*f*c+a*r*p-n*l*p)*T,e[4]=S*T,e[5]=(h*m*s-g*f*s+g*r*p-t*m*p-h*r*d+t*f*d)*T,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*d-t*l*d)*T,e[7]=(o*f*s-h*l*s+h*r*c-t*f*c-o*r*p+t*l*p)*T,e[8]=M*T,e[9]=(g*u*s-h*v*s-g*n*p+t*v*p+h*n*d-t*u*d)*T,e[10]=(o*v*s-g*a*s+g*n*c-t*v*c-o*n*d+t*a*d)*T,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*p-t*a*p)*T,e[12]=D*T,e[13]=(h*v*r-g*u*r+g*n*f-t*v*f-h*n*m+t*u*m)*T,e[14]=(g*a*r-o*v*r-g*n*l+t*v*l+o*n*m-t*a*m)*T,e[15]=(o*u*r-h*a*r+h*n*l-t*u*l-o*n*f+t*a*f)*T,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,f=s*c,p=s*h,g=s*u,v=o*h,m=o*u,d=a*u,E=l*c,S=l*h,M=l*u,D=n.x,A=n.y,T=n.z;return r[0]=(1-(v+d))*D,r[1]=(p+M)*D,r[2]=(g-S)*D,r[3]=0,r[4]=(p-M)*A,r[5]=(1-(f+d))*A,r[6]=(m+E)*A,r[7]=0,r[8]=(g+S)*T,r[9]=(m-E)*T,r[10]=(1-(f+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Yi.set(r[0],r[1],r[2]).length(),o=Yi.set(r[4],r[5],r[6]).length(),a=Yi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],_n.copy(this);let c=1/s,h=1/o,u=1/a;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,t.setFromRotationMatrix(_n),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=En){let l=this.elements,c=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r),p,g;if(a===En)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Or)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=En){let l=this.elements,c=1/(t-e),h=1/(n-r),u=1/(o-s),f=(t+e)*c,p=(n+r)*h,g,v;if(a===En)g=(o+s)*u,v=-2*u;else if(a===Or)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Yi=new L,_n=new _t,Od=new L(0,0,0),Nd=new L(1,1,1),ti=new L,Ds=new L,Qt=new L,Jc=new _t,Kc=new Tn,li=(()=>{class i{constructor(t=0,n=0,r=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,s=this._order){return this._x=t,this._y=n,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],l=s[8],c=s[1],h=s[5],u=s[9],f=s[2],p=s[6],g=s[10];switch(n){case"XYZ":this._y=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Je(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return Jc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jc,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Kc.setFromEuler(this),this.setFromQuaternion(Kc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return i.DEFAULT_ORDER="XYZ",i})(),or=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ud=0,Qc=new L,ji=new Tn,kn=new _t,Ls=new L,Pr=new L,kd=new L,Bd=new Tn,eh=new L(1,0,0),th=new L(0,1,0),nh=new L(0,0,1),ih={type:"added"},Vd={type:"removed"},Zi={type:"childadded",child:null},za={type:"childremoved",child:null},Bt=(()=>{class i extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,n=new li,r=new Tn,s=new L(1,1,1);function o(){r.setFromEuler(n,!1)}function a(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new ze}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return ji.setFromAxisAngle(t,n),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,n){return ji.setFromAxisAngle(t,n),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(eh,t)}rotateY(t){return this.rotateOnAxis(th,t)}rotateZ(t){return this.rotateOnAxis(nh,t)}translateOnAxis(t,n){return Qc.copy(t).applyQuaternion(this.quaternion),this.position.add(Qc.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(eh,t)}translateY(t){return this.translateOnAxis(th,t)}translateZ(t){return this.translateOnAxis(nh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?Ls.copy(t):Ls.set(t,n,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Pr,Ls,this.up):kn.lookAt(Ls,Pr,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(kn),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ih),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Vd),za.child=t,this.dispatchEvent(za),za.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ih),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,t,kd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,Bd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>jn(mn({},l),{boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>mn({},l)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let f=c[h];o(t.shapes,f)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(o(t.materials,this.material[c]));s.material=l}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(o(t.animations,c))}}if(n){let l=a(t.geometries),c=a(t.materials),h=a(t.textures),u=a(t.images),f=a(t.shapes),p=a(t.skeletons),g=a(t.animations),v=a(t.nodes);l.length>0&&(r.geometries=l),c.length>0&&(r.materials=c),h.length>0&&(r.textures=h),u.length>0&&(r.images=u),f.length>0&&(r.shapes=f),p.length>0&&(r.skeletons=p),g.length>0&&(r.animations=g),v.length>0&&(r.nodes=v)}return r.object=s,r;function a(l){let c=[];for(let h in l){let u=l[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return i.DEFAULT_UP=new L(0,1,0),i.DEFAULT_MATRIX_AUTO_UPDATE=!0,i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,i})(),vn=new L,Bn=new L,Ha=new L,Vn=new L,$i=new L,Ji=new L,rh=new L,Ga=new L,Wa=new L,Xa=new L,qa=new ct,Ya=new ct,ja=new ct,ri=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),vn.subVectors(e,t),r.cross(vn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){vn.subVectors(r,t),Bn.subVectors(n,t),Ha.subVectors(e,t);let o=vn.dot(vn),a=vn.dot(Bn),l=vn.dot(Ha),c=Bn.dot(Bn),h=Bn.dot(Ha),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vn.x),l.addScaledVector(o,Vn.y),l.addScaledVector(a,Vn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return qa.setScalar(0),Ya.setScalar(0),ja.setScalar(0),qa.fromBufferAttribute(e,t),Ya.fromBufferAttribute(e,n),ja.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(qa,s.x),o.addScaledVector(Ya,s.y),o.addScaledVector(ja,s.z),o}static isFrontFacing(e,t,n,r){return vn.subVectors(n,t),Bn.subVectors(e,t),vn.cross(Bn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),vn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;$i.subVectors(r,n),Ji.subVectors(s,n),Ga.subVectors(e,n);let l=$i.dot(Ga),c=Ji.dot(Ga);if(l<=0&&c<=0)return t.copy(n);Wa.subVectors(e,r);let h=$i.dot(Wa),u=Ji.dot(Wa);if(h>=0&&u<=h)return t.copy(r);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector($i,o);Xa.subVectors(e,s);let p=$i.dot(Xa),g=Ji.dot(Xa);if(g>=0&&p<=g)return t.copy(s);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ji,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return rh.subVectors(s,r),a=(u-h)/(u-h+(p-g)),t.copy(r).addScaledVector(rh,a);let d=1/(m+v+f);return o=v*d,a=f*d,t.copy(n).addScaledVector($i,o).addScaledVector(Ji,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function Za(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Qe.workingColorSpace){if(e=Pd(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Za(o,s,e+1/3),this.g=Za(o,s,e),this.b=Za(o,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,t=tn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tn){let n=ou[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}copyLinearToSRGB(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return Qe.workingToColorSpace(Ht.copy(this),e),Math.round(Je(Ht.r*255,0,255))*65536+Math.round(Je(Ht.g*255,0,255))*256+Math.round(Je(Ht.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Ht.copy(this),t);let n=Ht.r,r=Ht.g,s=Ht.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=tn){Qe.workingToColorSpace(Ht.copy(this),e);let t=Ht.r,n=Ht.g,r=Ht.b;return e!==tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(Fs);let n=Ia(ni.h,Fs.h,t),r=Ia(ni.s,Fs.s,t),s=Ia(ni.l,Fs.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ht=new Ke;Ke.NAMES=ou;var zd=0,ci=class extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=hs(),this.name="",this.type="Material",this.blending=Ei,this.side=cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ys,this.blendDst=js,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Ti,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ol,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ys&&(n.blendSrc=this.blendSrc),this.blendDst!==js&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ti&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ol&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Gt=class extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var At=new L,Os=new Ze,Hd=0,nn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=al,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Os.fromBufferAttribute(this,t),Os.applyMatrix3(e),this.setXY(t,Os.x,Os.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==al&&(e.usage=this.usage),e}};var Br=class extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Vr=class extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Pt=class extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Gd=0,ln=new _t,$a=new Bt,Ki=new L,en=new ai,Ir=new ai,Nt=new L,yn=class i extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Il(e)?Vr:Br)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return $a.lookAt(e),$a.updateMatrix(),this.applyMatrix4($a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pt(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];en.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Ir.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(en.min,Ir.min),en.expandByPoint(Nt),Nt.addVectors(en.max,Ir.max),en.expandByPoint(Nt)):(en.expandByPoint(Ir.min),en.expandByPoint(Ir.max))}en.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Nt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Nt.fromBufferAttribute(a,c),l&&(Ki.fromBufferAttribute(e,c),Nt.add(Ki)),r=Math.max(r,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new L,l[P]=new L;let c=new L,h=new L,u=new L,f=new Ze,p=new Ze,g=new Ze,v=new L,m=new L;function d(P,b,y){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,y),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,b),g.fromBufferAttribute(s,y),h.sub(c),u.sub(c),p.sub(f),g.sub(f);let R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(R),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(R),a[P].add(v),a[b].add(v),a[y].add(v),l[P].add(m),l[b].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let P=0,b=E.length;P<b;++P){let y=E[P],R=y.start,z=y.count;for(let k=R,q=R+z;k<q;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let S=new L,M=new L,D=new L,A=new L;function T(P){D.fromBufferAttribute(r,P),A.copy(D);let b=a[P];S.copy(b),S.sub(D.multiplyScalar(D.dot(b))).normalize(),M.crossVectors(A,b);let R=M.dot(l[P])<0?-1:1;o.setXYZW(P,S.x,S.y,S.z,R)}for(let P=0,b=E.length;P<b;++P){let y=E[P],R=y.start,z=y.count;for(let k=R,q=R+z;k<q;k+=3)T(e.getX(k+0)),T(e.getX(k+1)),T(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new nn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},sh=new _t,xi=new kr,Ns=new sr,oh=new L,Us=new L,ks=new L,Bs=new L,Ja=new L,Vs=new L,ah=new L,zs=new L,te=class extends Bt{constructor(e=new yn,t=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Vs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(Ja.fromBufferAttribute(u,e),o?Vs.addScaledVector(Ja,h):Vs.addScaledVector(Ja.sub(t),h))}t.add(Vs)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(s),xi.copy(e.ray).recast(e.near),!(Ns.containsPoint(xi.origin)===!1&&(xi.intersectSphere(Ns,oh)===null||xi.origin.distanceToSquared(oh)>(e.far-e.near)**2))&&(sh.copy(s).invert(),xi.copy(e.ray).applyMatrix4(sh),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,D=S;M<D;M+=3){let A=a.getX(M),T=a.getX(M+1),P=a.getX(M+2);r=Hs(this,d,e,n,c,h,u,A,T,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let E=a.getX(m),S=a.getX(m+1),M=a.getX(m+2);r=Hs(this,o,e,n,c,h,u,E,S,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,D=S;M<D;M+=3){let A=M,T=M+1,P=M+2;r=Hs(this,d,e,n,c,h,u,A,T,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let E=m,S=m+1,M=m+2;r=Hs(this,o,e,n,c,h,u,E,S,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function Wd(i,e,t,n,r,s,o,a){let l;if(e.side===Vt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===cn,a),l===null)return null;zs.copy(a),zs.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(zs);return c<t.near||c>t.far?null:{distance:c,point:zs.clone(),object:i}}function Hs(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Us),i.getVertexPosition(l,ks),i.getVertexPosition(c,Bs);let h=Wd(i,e,t,n,Us,ks,Bs,ah);if(h){let u=new L;ri.getBarycoord(ah,Us,ks,Bs,u),r&&(h.uv=ri.getInterpolatedAttribute(r,a,l,c,u,new Ze)),s&&(h.uv1=ri.getInterpolatedAttribute(s,a,l,c,u,new Ze)),o&&(h.normal=ri.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new L,materialIndex:0};ri.getNormal(Us,ks,Bs,f.normal),h.face=f,h.barycoord=u}return h}var He=class i extends yn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(u,2));function g(v,m,d,E,S,M,D,A,T,P,b){let y=M/T,R=D/P,z=M/2,k=D/2,q=A/2,X=T+1,H=P+1,J=0,G=0,oe=new L;for(let fe=0;fe<H;fe++){let Ae=fe*R-k;for(let Ye=0;Ye<X;Ye++){let ut=Ye*y-z;oe[v]=ut*E,oe[m]=Ae*S,oe[d]=q,c.push(oe.x,oe.y,oe.z),oe[v]=0,oe[m]=0,oe[d]=A>0?1:-1,h.push(oe.x,oe.y,oe.z),u.push(Ye/T),u.push(1-fe/P),J+=1}}for(let fe=0;fe<P;fe++)for(let Ae=0;Ae<T;Ae++){let Ye=f+Ae+X*fe,ut=f+Ae+X*(fe+1),Z=f+(Ae+1)+X*(fe+1),re=f+(Ae+1)+X*fe;l.push(Ye,ut,re),l.push(ut,Z,re),G+=6}a.addGroup(p,G,b),p+=G,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Fi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Xt(i){let e={};for(let t=0;t<i.length;t++){let n=Fi(i[t]);for(let r in n)e[r]=n[r]}return e}function Xd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Dl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}var au={clone:Fi,merge:Xt},qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qd,this.fragmentShader=Yd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fi(e.uniforms),this.uniformsGroups=Xd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},zr=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=En}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ii=new L,lh=new Ze,ch=new Ze,Ut=class extends zr{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Nr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nr*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,lh,ch),t.subVectors(ch,lh)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Pa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Qi=-90,er=1,to=class extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ut(Qi,er,e,t);r.layers=this.layers,this.add(r);let s=new Ut(Qi,er,e,t);s.layers=this.layers,this.add(s);let o=new Ut(Qi,er,e,t);o.layers=this.layers,this.add(o);let a=new Ut(Qi,er,e,t);a.layers=this.layers,this.add(a);let l=new Ut(Qi,er,e,t);l.layers=this.layers,this.add(l);let c=new Ut(Qi,er,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===En)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Or)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Hr=class extends In{constructor(e=[],t=Di,n,r,s,o,a,l,c,h){super(e,t,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},no=class extends Cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Hr(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new He(5,5,5),s=new rn({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:Xn});s.uniforms.tEquirect.value=t;let o=new te(r,s),a=t.minFilter;return t.minFilter===di&&(t.minFilter=xn),new to(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},pt=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},jd={type:"move"},ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jd)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Gr=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Ka=new L,Zd=new L,$d=new ze,wn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ka.subVectors(n,t).cross(Zd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ka),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||$d.getNormalMatrix(e),r=this.coplanarPoint(Ka).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},yi=new sr,Gs=new L,lr=class{constructor(e=new wn,t=new wn,n=new wn,r=new wn,s=new wn,o=new wn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=En){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],u=r[6],f=r[7],p=r[8],g=r[9],v=r[10],m=r[11],d=r[12],E=r[13],S=r[14],M=r[15];if(n[0].setComponents(l-s,f-c,m-p,M-d).normalize(),n[1].setComponents(l+s,f+c,m+p,M+d).normalize(),n[2].setComponents(l+o,f+h,m+g,M+E).normalize(),n[3].setComponents(l-o,f-h,m-g,M-E).normalize(),n[4].setComponents(l-a,f-u,m-v,M-S).normalize(),t===En)n[5].setComponents(l+a,f+u,m+v,M+S).normalize();else if(t===Or)n[5].setComponents(a,u,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Gs.x=r.normal.x>0?e.max.x:e.min.x,Gs.y=r.normal.y>0?e.max.y:e.min.y,Gs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var An=class extends In{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Wr=class extends In{constructor(e,t,n=fi,r,s,o,a=hn,l=hn,c,h=nr,u=1){if(h!==nr&&h!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var cr=class i extends yn{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new L,h=new Ze;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let p=n+u/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Pt(o,3)),this.setAttribute("normal",new Pt(a,3)),this.setAttribute("uv",new Pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Mt=class i extends yn{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],f=[],p=[],g=0,v=[],m=n/2,d=0;E(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Pt(u,3)),this.setAttribute("normal",new Pt(f,3)),this.setAttribute("uv",new Pt(p,2));function E(){let M=new L,D=new L,A=0,T=(t-e)/n;for(let P=0;P<=s;P++){let b=[],y=P/s,R=y*(t-e)+e;for(let z=0;z<=r;z++){let k=z/r,q=k*l+a,X=Math.sin(q),H=Math.cos(q);D.x=R*X,D.y=-y*n+m,D.z=R*H,u.push(D.x,D.y,D.z),M.set(X,T,H).normalize(),f.push(M.x,M.y,M.z),p.push(k,1-y),b.push(g++)}v.push(b)}for(let P=0;P<r;P++)for(let b=0;b<s;b++){let y=v[b][P],R=v[b+1][P],z=v[b+1][P+1],k=v[b][P+1];(e>0||b!==0)&&(h.push(y,R,k),A+=3),(t>0||b!==s-1)&&(h.push(R,z,k),A+=3)}c.addGroup(d,A,0),d+=A}function S(M){let D=g,A=new Ze,T=new L,P=0,b=M===!0?e:t,y=M===!0?1:-1;for(let z=1;z<=r;z++)u.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),g++;let R=g;for(let z=0;z<=r;z++){let q=z/r*l+a,X=Math.cos(q),H=Math.sin(q);T.x=b*H,T.y=m*y,T.z=b*X,u.push(T.x,T.y,T.z),f.push(0,y,0),A.x=X*.5+.5,A.y=H*.5*y+.5,p.push(A.x,A.y),g++}for(let z=0;z<r;z++){let k=D+z,q=R+z;M===!0?h.push(q,q+1,k):h.push(q+1,q,k),P+=3}c.addGroup(d,P,M===!0?1:2),d+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Xr=class i extends Mt{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Wt=class i extends yn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=e/a,f=t/l,p=[],g=[],v=[],m=[];for(let d=0;d<h;d++){let E=d*f-o;for(let S=0;S<c;S++){let M=S*u-s;g.push(M,-E,0),v.push(0,0,1),m.push(S/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){let S=E+c*d,M=E+c*(d+1),D=E+1+c*(d+1),A=E+1+c*d;p.push(S,M,A),p.push(M,D,A)}this.setIndex(p),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(v,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Mn=class i extends yn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new L,f=new L,p=[],g=[],v=[],m=[];for(let d=0;d<=n;d++){let E=[],S=d/n,M=0;d===0&&o===0?M=.5/t:d===n&&l===Math.PI&&(M=-.5/t);for(let D=0;D<=t;D++){let A=D/t;u.x=-e*Math.cos(r+A*s)*Math.sin(o+S*a),u.y=e*Math.cos(o+S*a),u.z=e*Math.sin(r+A*s)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(A+M,1-S),E.push(c++)}h.push(E)}for(let d=0;d<n;d++)for(let E=0;E<t;E++){let S=h[d][E+1],M=h[d][E],D=h[d+1][E],A=h[d+1][E+1];(d!==0||o>0)&&p.push(S,M,A),(d!==n-1||l<Math.PI)&&p.push(M,D,A)}this.setIndex(p),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(v,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ee=class extends ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Al,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var io=class extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ro=class extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ws(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Jd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ri=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},so=class extends Ri{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:il,endingEnd:il}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case rl:s=e,a=2*t-n;break;case sl:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case rl:o=e,l=2*n-t;break;case sl:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),v=g*g,m=v*g,d=-f*m+2*f*v-f*g,E=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,S=(-1-p)*m+(1.5+p)*v+.5*g,M=p*m-p*v;for(let D=0;D!==a;++D)s[D]=d*o[h+D]+E*o[c+D]+S*o[l+D]+M*o[u+D];return s}},oo=class extends Ri{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(r-t),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}},ao=class extends Ri{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},sn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ws(t,this.TimeBufferType),this.values=Ws(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ws(e.times,Array),values:Ws(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ao(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new so(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Lr:t=this.InterpolantFactoryMethodDiscrete;break;case Js:t=this.InterpolantFactoryMethodLinear;break;case qs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lr;case this.InterpolantFactoryMethodLinear:return Js;case this.InterpolantFactoryMethodSmooth:return qs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Jd(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===qs,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(r)l=!0;else{let u=a*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[f+g]||v!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};sn.prototype.ValueTypeName="";sn.prototype.TimeBufferType=Float32Array;sn.prototype.ValueBufferType=Float32Array;sn.prototype.DefaultInterpolation=Js;var hi=class extends sn{constructor(e,t,n){super(e,t,n)}};hi.prototype.ValueTypeName="bool";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=Lr;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var lo=class extends sn{constructor(e,t,n,r){super(e,t,n,r)}};lo.prototype.ValueTypeName="color";var co=class extends sn{constructor(e,t,n,r){super(e,t,n,r)}};co.prototype.ValueTypeName="number";var ho=class extends Ri{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let h=c+a;c!==h;c+=4)Tn.slerpFlat(s,0,o,c-a,o,c,l);return s}},qr=class extends sn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ho(this.times,this.values,this.getValueSize(),e)}};qr.prototype.ValueTypeName="quaternion";qr.prototype.InterpolantFactoryMethodSmooth=void 0;var ui=class extends sn{constructor(e,t,n){super(e,t,n)}};ui.prototype.ValueTypeName="string";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=Lr;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var uo=class extends sn{constructor(e,t,n,r){super(e,t,n,r)}};uo.prototype.ValueTypeName="vector";var Yr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},fo=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},lu=new fo,us=(()=>{class i{constructor(t){this.manager=t!==void 0?t:lu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let r=this;return new Promise(function(s,o){r.load(t,s,n,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}return i.DEFAULT_MATERIAL_NAME="__DEFAULT",i})(),zn={},ll=class extends Error{constructor(e,t){super(e),this.response=t}},po=class extends us{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Yr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(zn[e]!==void 0){zn[e].push({onLoad:t,onProgress:n,onError:r});return}zn[e]=[],zn[e].push({onLoad:t,onProgress:n,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=zn[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,v=0,m=new ReadableStream({start(d){E();function E(){u.read().then(({done:S,value:M})=>{if(S)d.close();else{v+=M.byteLength;let D=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let A=0,T=h.length;A<T;A++){let P=h[A];P.onProgress&&P.onProgress(D)}d.enqueue(M),E()}},S=>{d.error(S)})}}});return new Response(m)}else throw new ll(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Yr.add(e,c);let h=zn[e];delete zn[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=zn[e];if(h===void 0)throw this.manager.itemError(e),c;delete zn[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var mo=class extends us{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Yr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=ir("img");function l(){h(),Yr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var jr=class extends us{constructor(e){super(e)}load(e,t,n,r){let s=new In,o=new mo(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},Pi=class extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Zr=class extends Pi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Qa=new _t,hh=new L,uh=new L,$r=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lr,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;hh.setFromMatrixPosition(e.matrixWorld),t.position.copy(hh),uh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uh),t.updateMatrixWorld(),Qa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},cl=class extends $r{constructor(){super(new Ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Nr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},hr=class extends Pi{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new cl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},dh=new _t,Dr=new L,el=new L,hl=class extends $r{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Dr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Dr),el.copy(n.position),el.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(el),n.updateMatrixWorld(),r.makeTranslation(-Dr.x,-Dr.y,-Dr.z),dh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dh)}},Wn=class extends Pi{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new hl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Jr=class extends zr{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ul=class extends $r{constructor(){super(new Jr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Kr=class extends Pi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new ul}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Xs,Qr=class{static getContext(){return Xs===void 0&&(Xs=new(window.AudioContext||window.webkitAudioContext)),Xs}static setContext(e){Xs=e}},es=class extends us{constructor(e){super(e)}load(e,t,n,r){let s=this,o=new po(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{let c=l.slice(0);Qr.getContext().decodeAudioData(c,function(u){t(u)}).catch(a)}catch(c){a(c)}},n,r);function a(l){r?r(l):console.error(l),s.manager.itemError(e)}}};var go=class extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},_o=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=fh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function fh(){return performance.now()}var Mi=new L,tl=new Tn,Kd=new L,bi=new L,Si=new L,ts=class extends Bt{constructor(){super(),this.type="AudioListener",this.context=Qr.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new _o}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);let t=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Mi,tl,Kd),bi.set(0,0,-1).applyQuaternion(tl),Si.set(0,1,0).applyQuaternion(tl),t.positionX){let n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Mi.x,n),t.positionY.linearRampToValueAtTime(Mi.y,n),t.positionZ.linearRampToValueAtTime(Mi.z,n),t.forwardX.linearRampToValueAtTime(bi.x,n),t.forwardY.linearRampToValueAtTime(bi.y,n),t.forwardZ.linearRampToValueAtTime(bi.z,n),t.upX.linearRampToValueAtTime(Si.x,n),t.upY.linearRampToValueAtTime(Si.y,n),t.upZ.linearRampToValueAtTime(Si.z,n)}else t.setPosition(Mi.x,Mi.y,Mi.z),t.setOrientation(bi.x,bi.y,bi.z,Si.x,Si.y,Si.z)}},Ii=class extends Bt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(console.warn("THREE.Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}};var Ll="\\[\\]\\.:\\/",Qd=new RegExp("["+Ll+"]","g"),Fl="[^"+Ll+"]",ef="[^"+Ll.replace("\\.","")+"]",tf=/((?:WC+[\/:])*)/.source.replace("WC",Fl),nf=/(WCOD+)?/.source.replace("WCOD",ef),rf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fl),sf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fl),of=new RegExp("^"+tf+nf+rf+sf+"$"),af=["material","materials","bones","map"],dl=class{constructor(e,t,n){let r=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=(()=>{class i{constructor(t,n,r){this.path=n,this.parsedPath=r||i.parseTrackName(n),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new i.Composite(t,n,r):new i(t,n,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Qd,"")}static parseTrackName(t){let n=of.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);af.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(n);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let l=o[a];if(l.name===n||l.uuid===n)return l;let c=r(l.children);if(c)return c}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[n++]=r[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,s=n.propertyName,o=n.propertyIndex;if(t||(t=i.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=n.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return i.Composite=dl,i})();Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var q_=new Float32Array(1);var ph=new _t,ns=class{constructor(e,t,n=0,r=1/0){this.ray=new kr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new or,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ph.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ph),this}intersectObject(e,t=!0,n=[]){return fl(e,this,n,t),n.sort(mh),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)fl(e[r],this,n,t);return n.sort(mh),n}};function mh(i,e){return i.distance-e.distance}function fl(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)fl(s[o],e,t,!0)}}function Ol(i,e,t,n){let r=lf(n);switch(t){case Sl:return i*e;case El:return i*e/r.components*r.byteLength;case Lo:return i*e/r.components*r.byteLength;case Tl:return i*e*2/r.components*r.byteLength;case Fo:return i*e*2/r.components*r.byteLength;case wl:return i*e*3/r.components*r.byteLength;case dn:return i*e*4/r.components*r.byteLength;case Oo:return i*e*4/r.components*r.byteLength;case ss:case os:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case as:case ls:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uo:case Bo:return Math.max(i,16)*Math.max(e,8)/4;case No:case ko:return Math.max(i,8)*Math.max(e,8)/2;case Vo:case zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case qo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case jo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case $o:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ea:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ta:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case na:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case cs:case ia:case ra:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Cl:case sa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case oa:case aa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lf(i){switch(i){case bn:case yl:return{byteLength:1,components:1};case ur:case Ml:case dr:return{byteLength:2,components:1};case Io:case Do:return{byteLength:2,components:4};case fi:case Po:case Pn:return{byteLength:4,components:1};case bl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vo);function Du(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function cf(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let v=u[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var hf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,df=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ff=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Lf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ff=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Of=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",zf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$f=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,np=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ip=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ap=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,up=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ep=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Tp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ap=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ip=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Np=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Up=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$p=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,em=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,im=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_m=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ym=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Am=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Im=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,km=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:hf,alphahash_pars_fragment:uf,alphamap_fragment:df,alphamap_pars_fragment:ff,alphatest_fragment:pf,alphatest_pars_fragment:mf,aomap_fragment:gf,aomap_pars_fragment:_f,batching_pars_vertex:vf,batching_vertex:xf,begin_vertex:yf,beginnormal_vertex:Mf,bsdfs:bf,iridescence_fragment:Sf,bumpmap_pars_fragment:wf,clipping_planes_fragment:Ef,clipping_planes_pars_fragment:Tf,clipping_planes_pars_vertex:Cf,clipping_planes_vertex:Af,color_fragment:Rf,color_pars_fragment:Pf,color_pars_vertex:If,color_vertex:Df,common:Lf,cube_uv_reflection_fragment:Ff,defaultnormal_vertex:Of,displacementmap_pars_vertex:Nf,displacementmap_vertex:Uf,emissivemap_fragment:kf,emissivemap_pars_fragment:Bf,colorspace_fragment:Vf,colorspace_pars_fragment:zf,envmap_fragment:Hf,envmap_common_pars_fragment:Gf,envmap_pars_fragment:Wf,envmap_pars_vertex:Xf,envmap_physical_pars_fragment:np,envmap_vertex:qf,fog_vertex:Yf,fog_pars_vertex:jf,fog_fragment:Zf,fog_pars_fragment:$f,gradientmap_pars_fragment:Jf,lightmap_pars_fragment:Kf,lights_lambert_fragment:Qf,lights_lambert_pars_fragment:ep,lights_pars_begin:tp,lights_toon_fragment:ip,lights_toon_pars_fragment:rp,lights_phong_fragment:sp,lights_phong_pars_fragment:op,lights_physical_fragment:ap,lights_physical_pars_fragment:lp,lights_fragment_begin:cp,lights_fragment_maps:hp,lights_fragment_end:up,logdepthbuf_fragment:dp,logdepthbuf_pars_fragment:fp,logdepthbuf_pars_vertex:pp,logdepthbuf_vertex:mp,map_fragment:gp,map_pars_fragment:_p,map_particle_fragment:vp,map_particle_pars_fragment:xp,metalnessmap_fragment:yp,metalnessmap_pars_fragment:Mp,morphinstance_vertex:bp,morphcolor_vertex:Sp,morphnormal_vertex:wp,morphtarget_pars_vertex:Ep,morphtarget_vertex:Tp,normal_fragment_begin:Cp,normal_fragment_maps:Ap,normal_pars_fragment:Rp,normal_pars_vertex:Pp,normal_vertex:Ip,normalmap_pars_fragment:Dp,clearcoat_normal_fragment_begin:Lp,clearcoat_normal_fragment_maps:Fp,clearcoat_pars_fragment:Op,iridescence_pars_fragment:Np,opaque_fragment:Up,packing:kp,premultiplied_alpha_fragment:Bp,project_vertex:Vp,dithering_fragment:zp,dithering_pars_fragment:Hp,roughnessmap_fragment:Gp,roughnessmap_pars_fragment:Wp,shadowmap_pars_fragment:Xp,shadowmap_pars_vertex:qp,shadowmap_vertex:Yp,shadowmask_pars_fragment:jp,skinbase_vertex:Zp,skinning_pars_vertex:$p,skinning_vertex:Jp,skinnormal_vertex:Kp,specularmap_fragment:Qp,specularmap_pars_fragment:em,tonemapping_fragment:tm,tonemapping_pars_fragment:nm,transmission_fragment:im,transmission_pars_fragment:rm,uv_pars_fragment:sm,uv_pars_vertex:om,uv_vertex:am,worldpos_vertex:lm,background_vert:cm,background_frag:hm,backgroundCube_vert:um,backgroundCube_frag:dm,cube_vert:fm,cube_frag:pm,depth_vert:mm,depth_frag:gm,distanceRGBA_vert:_m,distanceRGBA_frag:vm,equirect_vert:xm,equirect_frag:ym,linedashed_vert:Mm,linedashed_frag:bm,meshbasic_vert:Sm,meshbasic_frag:wm,meshlambert_vert:Em,meshlambert_frag:Tm,meshmatcap_vert:Cm,meshmatcap_frag:Am,meshnormal_vert:Rm,meshnormal_frag:Pm,meshphong_vert:Im,meshphong_frag:Dm,meshphysical_vert:Lm,meshphysical_frag:Fm,meshtoon_vert:Om,meshtoon_frag:Nm,points_vert:Um,points_frag:km,shadow_vert:Bm,shadow_frag:Vm,sprite_vert:zm,sprite_frag:Hm},le={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Dn={basic:{uniforms:Xt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Xt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ke(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Xt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Xt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Xt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ke(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Xt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Xt([le.points,le.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Xt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Xt([le.common,le.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Xt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Xt([le.sprite,le.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Xt([le.common,le.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Xt([le.lights,le.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Dn.physical={uniforms:Xt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var la={r:0,b:0,g:0},Oi=new li,Gm=new _t;function Wm(i,e,t,n,r,s,o){let a=new Ke(0),l=s===!0?0:1,c,h,u=null,f=0,p=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?t:e).get(M)),M}function v(S){let M=!1,D=g(S);D===null?d(a,l):D&&D.isColor&&(d(D,1),M=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,M){let D=g(M);D&&(D.isCubeTexture||D.mapping===is)?(h===void 0&&(h=new te(new He(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Fi(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Oi.copy(M.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Gm.makeRotationFromEuler(Oi)),h.material.toneMapped=Qe.getTransfer(D.colorSpace)!==ht,(u!==D||f!==D.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=D,f=D.version,p=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new te(new Wt(2,2),new rn({name:"BackgroundMaterial",uniforms:Fi(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(D.colorSpace)!==ht,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(u!==D||f!==D.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=D,f=D.version,p=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function d(S,M){S.getRGB(la,Dl(i)),n.buffers.color.setClear(la.r,la.g,la.b,M,o)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),l=M,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,d(a,l)},render:v,addToRenderList:m,dispose:E}}function Xm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(y,R,z,k,q){let X=!1,H=u(k,z,R);s!==H&&(s=H,c(s.object)),X=p(y,k,z,q),X&&g(y,k,z,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(y,R,z,k),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,R,z){let k=z.wireframe===!0,q=n[y.id];q===void 0&&(q={},n[y.id]=q);let X=q[R.id];X===void 0&&(X={},q[R.id]=X);let H=X[k];return H===void 0&&(H=f(l()),X[k]=H),H}function f(y){let R=[],z=[],k=[];for(let q=0;q<t;q++)R[q]=0,z[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:k,object:y,attributes:{},index:null}}function p(y,R,z,k){let q=s.attributes,X=R.attributes,H=0,J=z.getAttributes();for(let G in J)if(J[G].location>=0){let fe=q[G],Ae=X[G];if(Ae===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(Ae=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(Ae=y.instanceColor)),fe===void 0||fe.attribute!==Ae||Ae&&fe.data!==Ae.data)return!0;H++}return s.attributesNum!==H||s.index!==k}function g(y,R,z,k){let q={},X=R.attributes,H=0,J=z.getAttributes();for(let G in J)if(J[G].location>=0){let fe=X[G];fe===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(fe=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(fe=y.instanceColor));let Ae={};Ae.attribute=fe,fe&&fe.data&&(Ae.data=fe.data),q[G]=Ae,H++}s.attributes=q,s.attributesNum=H,s.index=k}function v(){let y=s.newAttributes;for(let R=0,z=y.length;R<z;R++)y[R]=0}function m(y){d(y,0)}function d(y,R){let z=s.newAttributes,k=s.enabledAttributes,q=s.attributeDivisors;z[y]=1,k[y]===0&&(i.enableVertexAttribArray(y),k[y]=1),q[y]!==R&&(i.vertexAttribDivisor(y,R),q[y]=R)}function E(){let y=s.newAttributes,R=s.enabledAttributes;for(let z=0,k=R.length;z<k;z++)R[z]!==y[z]&&(i.disableVertexAttribArray(z),R[z]=0)}function S(y,R,z,k,q,X,H){H===!0?i.vertexAttribIPointer(y,R,z,q,X):i.vertexAttribPointer(y,R,z,k,q,X)}function M(y,R,z,k){v();let q=k.attributes,X=z.getAttributes(),H=R.defaultAttributeValues;for(let J in X){let G=X[J];if(G.location>=0){let oe=q[J];if(oe===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor)),oe!==void 0){let fe=oe.normalized,Ae=oe.itemSize,Ye=e.get(oe);if(Ye===void 0)continue;let ut=Ye.buffer,Z=Ye.type,re=Ye.bytesPerElement,we=Z===i.INT||Z===i.UNSIGNED_INT||oe.gpuType===Po;if(oe.isInterleavedBufferAttribute){let de=oe.data,Te=de.stride,nt=oe.offset;if(de.isInstancedInterleavedBuffer){for(let Oe=0;Oe<G.locationSize;Oe++)d(G.location+Oe,de.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Oe=0;Oe<G.locationSize;Oe++)m(G.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let Oe=0;Oe<G.locationSize;Oe++)S(G.location+Oe,Ae/G.locationSize,Z,fe,Te*re,(nt+Ae/G.locationSize*Oe)*re,we)}else{if(oe.isInstancedBufferAttribute){for(let de=0;de<G.locationSize;de++)d(G.location+de,oe.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let de=0;de<G.locationSize;de++)m(G.location+de);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let de=0;de<G.locationSize;de++)S(G.location+de,Ae/G.locationSize,Z,fe,Ae*re,Ae/G.locationSize*de*re,we)}}else if(H!==void 0){let fe=H[J];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(G.location,fe);break;case 3:i.vertexAttrib3fv(G.location,fe);break;case 4:i.vertexAttrib4fv(G.location,fe);break;default:i.vertexAttrib1fv(G.location,fe)}}}}E()}function D(){P();for(let y in n){let R=n[y];for(let z in R){let k=R[z];for(let q in k)h(k[q].object),delete k[q];delete R[z]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;let R=n[y.id];for(let z in R){let k=R[z];for(let q in k)h(k[q].object),delete k[q];delete R[z]}delete n[y.id]}function T(y){for(let R in n){let z=n[R];if(z[y.id]===void 0)continue;let k=z[y.id];for(let q in k)h(k[q].object),delete k[q];delete z[y.id]}}function P(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function qm(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function l(c,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ym(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==dn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let P=T===dr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==bn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Pn&&!P)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:D,maxSamples:A}}function jm(i){let e=this,t=null,n=0,r=!1,s=!1,o=new wn,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||r;return r=f,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{let E=s?0:n,S=E*4,M=d.clippingState||null;l.value=M,M=h(g,f,S,p);for(let D=0;D!==S;++D)M[D]=t[D];d.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let d=p+v*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,M=p;S!==v;++S,M+=4)o.copy(u[S]).applyMatrix4(E,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Zm(i){let e=new WeakMap;function t(o,a){return a===Co?o.mapping=Di:a===Ao&&(o.mapping=Li),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Co||a===Ao)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new no(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var gr=4,cu=[.125,.215,.35,.446,.526,.582],ki=20,Nl=new Jr,hu=new Ke,Ul=null,kl=0,Bl=0,Vl=!1,Ui=(1+Math.sqrt(5))/2,mr=1/Ui,uu=[new L(-Ui,mr,0),new L(Ui,mr,0),new L(-mr,0,Ui),new L(mr,0,Ui),new L(0,Ui,-mr),new L(0,Ui,mr),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],$m=new L,ua=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=$m}=s;Ul=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ul,kl,Bl),this._renderer.xr.enabled=Vl,e.scissorTest=!1,ca(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Di||e.mapping===Li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ul=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:dr,format:dn,colorSpace:Ci,depthBuffer:!1},r=du(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=du(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jm(s)),this._blurMaterial=Km(s,e,t)}return r}_compileMaterial(e){let t=new te(this._lodPlanes[0],e);this._renderer.compile(t,Nl)}_sceneToCubeUV(e,t,n,r,s){let l=new Ut(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(hu),u.toneMapping=qn,u.autoClear=!1;let g=new Gt({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),v=new te(new He,g),m=!1,d=e.background;d?d.isColor&&(g.color.copy(d),e.background=null,m=!0):(g.color.copy(hu),m=!0);for(let E=0;E<6;E++){let S=E%3;S===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[E],s.y,s.z)):S===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[E]));let M=this._cubeSize;ca(r,S*M,E>2?M:0,M,M),u.setRenderTarget(r),m&&u.render(v,l),u.render(e,l)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Di||e.mapping===Li;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fu());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new te(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;ca(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Nl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=uu[(r-s-1)%uu.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new te(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ki-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):ki;m>ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);let d=[],E=0;for(let T=0;T<ki;++T){let P=T/v,b=Math.exp(-P*P/2);d.push(b),T===0?E+=b:T<m&&(E+=2*b)}for(let T=0;T<d.length;T++)d[T]=d[T]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;let M=this._sizeLods[r],D=3*M*(r>S-gr?r-S+gr:0),A=4*(this._cubeSize-M);ca(t,D,A,3*M,2*M),l.setRenderTarget(t),l.render(u,Nl)}};function Jm(i){let e=[],t=[],n=[],r=i,s=i-gr+1+cu.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>i-gr?l=cu[o-i+gr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,d=1,E=new Float32Array(v*g*p),S=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let A=0;A<p;A++){let T=A%3*2/3-1,P=A>2?0:-1,b=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];E.set(b,v*g*A),S.set(f,m*g*A);let y=[A,A,A,A,A,A];M.set(y,d*g*A)}let D=new yn;D.setAttribute("position",new nn(E,v)),D.setAttribute("uv",new nn(S,m)),D.setAttribute("faceIndex",new nn(M,d)),e.push(D),r>gr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function du(i,e,t){let n=new Cn(i,e,t);return n.texture.mapping=is,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ca(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Km(i,e,t){let n=new Float32Array(ki),r=new L(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function fu(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function pu(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function $l(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Co||l===Ao,h=l===Di||l===Li;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ua(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new ua(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function eg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Ai("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function tg(i,e,t,n){let r={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(u){let f=[],p=u.index,g=u.attributes.position,v=0;if(p!==null){let E=p.array;v=p.version;for(let S=0,M=E.length;S<M;S+=3){let D=E[S+0],A=E[S+1],T=E[S+2];f.push(D,A,A,T,T,D)}}else if(g!==void 0){let E=g.array;v=g.version;for(let S=0,M=E.length/3-1;S<M;S+=3){let D=S+0,A=S+1,T=S+2;f.push(D,A,A,T,T,D)}}else return;let m=new(Il(f)?Vr:Br)(f,1);m.version=v;let d=s.get(u);d&&e.remove(d),s.set(u,m)}function h(u){let f=s.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function ng(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,s,f*o),t.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,f*o,g),t.update(p,n,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function u(f,p,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,v,0,g);let d=0;for(let E=0;E<g;E++)d+=p[E]*v[E];t.update(d,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ig(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function rg(i,e,t){let n=new WeakMap,r=new ct;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let y=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],M=0;g===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let D=a.attributes.position.count*M,A=1;D>e.maxTextureSize&&(A=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);let T=new Float32Array(D*A*4*u),P=new Ur(T,D,A,u);P.type=Pn,P.needsUpdate=!0;let b=M*4;for(let R=0;R<u;R++){let z=d[R],k=E[R],q=S[R],X=D*A*4*R;for(let H=0;H<z.count;H++){let J=H*b;g===!0&&(r.fromBufferAttribute(z,H),T[X+J+0]=r.x,T[X+J+1]=r.y,T[X+J+2]=r.z,T[X+J+3]=0),v===!0&&(r.fromBufferAttribute(k,H),T[X+J+4]=r.x,T[X+J+5]=r.y,T[X+J+6]=r.z,T[X+J+7]=0),m===!0&&(r.fromBufferAttribute(q,H),T[X+J+8]=r.x,T[X+J+9]=r.y,T[X+J+10]=r.z,T[X+J+11]=q.itemSize===4?r.w:1)}}f={count:u,texture:P,size:new Ze(D,A)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];let v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function sg(i,e,t,n){let r=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var Lu=new In,mu=new Wr(1,1),Fu=new Ur,Ou=new eo,Nu=new Hr,gu=[],_u=[],vu=new Float32Array(16),xu=new Float32Array(9),yu=new Float32Array(4);function vr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=gu[r];if(s===void 0&&(s=new Float32Array(r),gu[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fa(i,e){let t=_u[e];t===void 0&&(t=new Int32Array(e),_u[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function og(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function hg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;yu.set(n),i.uniformMatrix2fv(this.addr,!1,yu),Dt(t,n)}}function ug(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;xu.set(n),i.uniformMatrix3fv(this.addr,!1,xu),Dt(t,n)}}function dg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;vu.set(n),i.uniformMatrix4fv(this.addr,!1,vu),Dt(t,n)}}function fg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function mg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function _g(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function vg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function Mg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(mu.compareFunction=Rl,s=mu):s=Lu,t.setTexture2D(e||s,r)}function bg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ou,r)}function Sg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Nu,r)}function wg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Fu,r)}function Eg(i){switch(i){case 5126:return og;case 35664:return ag;case 35665:return lg;case 35666:return cg;case 35674:return hg;case 35675:return ug;case 35676:return dg;case 5124:case 35670:return fg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return gg;case 5125:return _g;case 36294:return vg;case 36295:return xg;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Mg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return wg}}function Tg(i,e){i.uniform1fv(this.addr,e)}function Cg(i,e){let t=vr(e,this.size,2);i.uniform2fv(this.addr,t)}function Ag(i,e){let t=vr(e,this.size,3);i.uniform3fv(this.addr,t)}function Rg(i,e){let t=vr(e,this.size,4);i.uniform4fv(this.addr,t)}function Pg(i,e){let t=vr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ig(i,e){let t=vr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Dg(i,e){let t=vr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Lg(i,e){i.uniform1iv(this.addr,e)}function Fg(i,e){i.uniform2iv(this.addr,e)}function Og(i,e){i.uniform3iv(this.addr,e)}function Ng(i,e){i.uniform4iv(this.addr,e)}function Ug(i,e){i.uniform1uiv(this.addr,e)}function kg(i,e){i.uniform2uiv(this.addr,e)}function Bg(i,e){i.uniform3uiv(this.addr,e)}function Vg(i,e){i.uniform4uiv(this.addr,e)}function zg(i,e,t){let n=this.cache,r=e.length,s=fa(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Lu,s[o])}function Hg(i,e,t){let n=this.cache,r=e.length,s=fa(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ou,s[o])}function Gg(i,e,t){let n=this.cache,r=e.length,s=fa(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Nu,s[o])}function Wg(i,e,t){let n=this.cache,r=e.length,s=fa(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Fu,s[o])}function Xg(i){switch(i){case 5126:return Tg;case 35664:return Cg;case 35665:return Ag;case 35666:return Rg;case 35674:return Pg;case 35675:return Ig;case 35676:return Dg;case 5124:case 35670:return Lg;case 35667:case 35671:return Fg;case 35668:case 35672:return Og;case 35669:case 35673:return Ng;case 5125:return Ug;case 36294:return kg;case 36295:return Bg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return Hg;case 35680:case 36300:case 36308:case 36293:return Gg;case 36289:case 36303:case 36311:case 36292:return Wg}}var Hl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Eg(t.type)}},Gl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xg(t.type)}},Wl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},zl=/(\w+)(\])?(\[|\.)?/g;function Mu(i,e){i.seq.push(e),i.map[e.id]=e}function qg(i,e,t){let n=i.name,r=n.length;for(zl.lastIndex=0;;){let s=zl.exec(n),o=zl.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Mu(t,c===void 0?new Hl(a,i,e):new Gl(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Wl(a),Mu(t,u)),t=u}}}var _r=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);qg(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function bu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Yg=37297,jg=0;function Zg(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Su=new ze;function $g(i){Qe._getMatrix(Su,Qe.workingColorSpace,i);let e=`mat3( ${Su.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case Fr:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function wu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Zg(i.getShaderSource(e),o)}else return r}function Jg(i,e){let t=$g(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Kg(i,e){let t;switch(e){case kh:t="Linear";break;case Bh:t="Reinhard";break;case Vh:t="Cineon";break;case zh:t="ACESFilmic";break;case Gh:t="AgX";break;case Wh:t="Neutral";break;case Hh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ha=new L;function Qg(){Qe.getLuminanceCoefficients(ha);let i=ha.x.toFixed(4),e=ha.y.toFixed(4),t=ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ds).join(`
`)}function t0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function n0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ds(i){return i!==""}function Eu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var i0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xl(i){return i.replace(i0,s0)}var r0=new Map;function s0(i,e){let t=We[e];if(t===void 0){let n=r0.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xl(t)}var o0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cu(i){return i.replace(o0,a0)}function a0(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Au(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function l0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ml?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===xo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Rn&&(e="SHADOWMAP_TYPE_VSM"),e}function c0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Di:case Li:e="ENVMAP_TYPE_CUBE";break;case is:e="ENVMAP_TYPE_CUBE_UV";break}return e}function h0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Li:e="ENVMAP_MODE_REFRACTION";break}return e}function u0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xl:e="ENVMAP_BLENDING_MULTIPLY";break;case Nh:e="ENVMAP_BLENDING_MIX";break;case Uh:e="ENVMAP_BLENDING_ADD";break}return e}function d0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function f0(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=l0(t),c=c0(t),h=h0(t),u=u0(t),f=d0(t),p=e0(t),g=t0(s),v=r.createProgram(),m,d,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ds).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ds).join(`
`),d.length>0&&(d+=`
`)):(m=[Au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),d=[Au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qn?"#define TONE_MAPPING":"",t.toneMapping!==qn?We.tonemapping_pars_fragment:"",t.toneMapping!==qn?Kg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Jg("linearToOutputTexel",t.outputColorSpace),Qg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ds).join(`
`)),o=Xl(o),o=Eu(o,t),o=Tu(o,t),a=Xl(a),a=Eu(a,t),a=Tu(a,t),o=Cu(o),a=Cu(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let S=E+m+o,M=E+d+a,D=bu(r,r.VERTEX_SHADER,S),A=bu(r,r.FRAGMENT_SHADER,M);r.attachShader(v,D),r.attachShader(v,A),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function T(R){if(i.debug.checkShaderErrors){let z=r.getProgramInfoLog(v).trim(),k=r.getShaderInfoLog(D).trim(),q=r.getShaderInfoLog(A).trim(),X=!0,H=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,D,A);else{let J=wu(r,D,"vertex"),G=wu(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+J+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||q==="")&&(H=!1);H&&(R.diagnostics={runnable:X,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:q,prefix:d}})}r.deleteShader(D),r.deleteShader(A),P=new _r(r,v),b=n0(r,v)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,Yg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=A,this}var p0=0,ql=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Yl(e),t.set(e,n)),n}},Yl=class{constructor(e){this.id=p0++,this.code=e,this.usedTimes=0}};function m0(i,e,t,n,r,s,o){let a=new or,l=new ql,c=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures,p=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,R,z,k){let q=z.fog,X=k.geometry,H=b.isMeshStandardMaterial?z.environment:null,J=(b.isMeshStandardMaterial?t:e).get(b.envMap||H),G=J&&J.mapping===is?J.image.height:null,oe=g[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let fe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ae=fe!==void 0?fe.length:0,Ye=0;X.morphAttributes.position!==void 0&&(Ye=1),X.morphAttributes.normal!==void 0&&(Ye=2),X.morphAttributes.color!==void 0&&(Ye=3);let ut,Z,re,we;if(oe){let at=Dn[oe];ut=at.vertexShader,Z=at.fragmentShader}else ut=b.vertexShader,Z=b.fragmentShader,l.update(b),re=l.getVertexShaderID(b),we=l.getFragmentShaderID(b);let de=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),nt=k.isInstancedMesh===!0,Oe=k.isBatchedMesh===!0,vt=!!b.map,xt=!!b.matcap,it=!!J,C=!!b.aoMap,qt=!!b.lightMap,rt=!!b.bumpMap,ft=!!b.normalMap,Me=!!b.displacementMap,et=!!b.emissiveMap,Pe=!!b.metalnessMap,Ge=!!b.roughnessMap,Rt=b.anisotropy>0,w=b.clearcoat>0,_=b.dispersion>0,N=b.iridescence>0,j=b.sheen>0,K=b.transmission>0,W=Rt&&!!b.anisotropyMap,be=w&&!!b.clearcoatMap,ce=w&&!!b.clearcoatNormalMap,ye=w&&!!b.clearcoatRoughnessMap,Se=N&&!!b.iridescenceMap,Q=N&&!!b.iridescenceThicknessMap,pe=j&&!!b.sheenColorMap,Le=j&&!!b.sheenRoughnessMap,De=!!b.specularMap,ae=!!b.specularColorMap,Be=!!b.specularIntensityMap,I=K&&!!b.transmissionMap,he=K&&!!b.thicknessMap,ee=!!b.gradientMap,ge=!!b.alphaMap,ne=b.alphaTest>0,$=!!b.alphaHash,ve=!!b.extensions,Ve=qn;b.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Ve=i.toneMapping);let mt={shaderID:oe,shaderType:b.type,shaderName:b.name,vertexShader:ut,fragmentShader:Z,defines:b.defines,customVertexShaderID:re,customFragmentShaderID:we,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&k._colorsTexture!==null,instancing:nt,instancingColor:nt&&k.instanceColor!==null,instancingMorph:nt&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Ci,alphaToCoverage:!!b.alphaToCoverage,map:vt,matcap:xt,envMap:it,envMapMode:it&&J.mapping,envMapCubeUVHeight:G,aoMap:C,lightMap:qt,bumpMap:rt,normalMap:ft,displacementMap:f&&Me,emissiveMap:et,normalMapObjectSpace:ft&&b.normalMapType===jh,normalMapTangentSpace:ft&&b.normalMapType===Al,metalnessMap:Pe,roughnessMap:Ge,anisotropy:Rt,anisotropyMap:W,clearcoat:w,clearcoatMap:be,clearcoatNormalMap:ce,clearcoatRoughnessMap:ye,dispersion:_,iridescence:N,iridescenceMap:Se,iridescenceThicknessMap:Q,sheen:j,sheenColorMap:pe,sheenRoughnessMap:Le,specularMap:De,specularColorMap:ae,specularIntensityMap:Be,transmission:K,transmissionMap:I,thicknessMap:he,gradientMap:ee,opaque:b.transparent===!1&&b.blending===Ei&&b.alphaToCoverage===!1,alphaMap:ge,alphaTest:ne,alphaHash:$,combine:b.combine,mapUv:vt&&v(b.map.channel),aoMapUv:C&&v(b.aoMap.channel),lightMapUv:qt&&v(b.lightMap.channel),bumpMapUv:rt&&v(b.bumpMap.channel),normalMapUv:ft&&v(b.normalMap.channel),displacementMapUv:Me&&v(b.displacementMap.channel),emissiveMapUv:et&&v(b.emissiveMap.channel),metalnessMapUv:Pe&&v(b.metalnessMap.channel),roughnessMapUv:Ge&&v(b.roughnessMap.channel),anisotropyMapUv:W&&v(b.anisotropyMap.channel),clearcoatMapUv:be&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ce&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Le&&v(b.sheenRoughnessMap.channel),specularMapUv:De&&v(b.specularMap.channel),specularColorMapUv:ae&&v(b.specularColorMap.channel),specularIntensityMapUv:Be&&v(b.specularIntensityMap.channel),transmissionMapUv:I&&v(b.transmissionMap.channel),thicknessMapUv:he&&v(b.thicknessMap.channel),alphaMapUv:ge&&v(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ft||Rt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!X.attributes.uv&&(vt||ge),fog:!!q,useFog:b.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Te,skinning:k.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Ye,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ve,decodeVideoTexture:vt&&b.map.isVideoTexture===!0&&Qe.getTransfer(b.map.colorSpace)===ht,decodeVideoTextureEmissive:et&&b.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(b.emissiveMap.colorSpace)===ht,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===un,flipSided:b.side===Vt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ve&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&b.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function d(b){let y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(let R in b.defines)y.push(R),y.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(E(y,b),S(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function E(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function S(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),b.push(a.mask)}function M(b){let y=g[b.type],R;if(y){let z=Dn[y];R=au.clone(z.uniforms)}else R=b.uniforms;return R}function D(b,y){let R;for(let z=0,k=h.length;z<k;z++){let q=h[z];if(q.cacheKey===y){R=q,++R.usedTimes;break}}return R===void 0&&(R=new f0(i,y,b,s),h.push(R)),R}function A(b){if(--b.usedTimes===0){let y=h.indexOf(b);h[y]=h[h.length-1],h.pop(),b.destroy()}}function T(b){l.remove(b)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:D,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:P}}function g0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function _0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ru(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Pu(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u,f,p,g,v,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=m),e++,d}function a(u,f,p,g,v,m){let d=o(u,f,p,g,v,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(u,f,p,g,v,m){let d=o(u,f,p,g,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||_0),n.length>1&&n.sort(f||Ru),r.length>1&&r.sort(f||Ru)}function h(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function v0(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Pu,i.set(n,[o])):r>=s.length?(o=new Pu,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function x0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ke};break;case"SpotLight":t={position:new L,direction:new L,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function y0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var M0=0;function b0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function S0(i){let e=new x0,t=y0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let r=new L,s=new _t,o=new _t;function a(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,E=0,S=0,M=0,D=0,A=0,T=0;c.sort(b0);for(let b=0,y=c.length;b<y;b++){let R=c[b],z=R.color,k=R.intensity,q=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=z.r*k,u+=z.g*k,f+=z.b*k;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],k);T++}else if(R.isDirectionalLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let J=R.shadow,G=t.get(R);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=R.shadow.matrix,E++}n.directional[p]=H,p++}else if(R.isSpotLight){let H=e.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(z).multiplyScalar(k),H.distance=q,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[v]=H;let J=R.shadow;if(R.map&&(n.spotLightMap[D]=R.map,D++,J.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[v]=J.matrix,R.castShadow){let G=t.get(R);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=X,M++}v++}else if(R.isRectAreaLight){let H=e.get(R);H.color.copy(z).multiplyScalar(k),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=H,m++}else if(R.isPointLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){let J=R.shadow,G=t.get(R);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=R.shadow.matrix,S++}n.point[g]=H,g++}else if(R.isHemisphereLight){let H=e.get(R);H.skyColor.copy(R.color).multiplyScalar(k),H.groundColor.copy(R.groundColor).multiplyScalar(k),n.hemi[d]=H,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==d||P.numDirectionalShadows!==E||P.numPointShadows!==S||P.numSpotShadows!==M||P.numSpotMaps!==D||P.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+D-A,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,P.directionalLength=p,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=d,P.numDirectionalShadows=E,P.numPointShadows=S,P.numSpotShadows=M,P.numSpotMaps=D,P.numLightProbes=T,n.version=M0++)}function l(c,h){let u=0,f=0,p=0,g=0,v=0,m=h.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){let S=c[d];if(S.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),u++}else if(S.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(S.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let M=n.hemi[v];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Iu(i){let e=new S0(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function w0(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Iu(i),e.set(r,[a])):s>=o.length?(a=new Iu(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var E0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function C0(i,e,t){let n=new lr,r=new Ze,s=new Ze,o=new ct,a=new io({depthPacking:Yh}),l=new ro,c={},h=t.maxTextureSize,u={[cn]:Vt,[Vt]:cn,[un]:un},f=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:E0,fragmentShader:T0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new yn;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new te(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ml;let d=this.type;this.render=function(A,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let b=i.getRenderTarget(),y=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Xn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let k=d!==Rn&&this.type===Rn,q=d===Rn&&this.type!==Rn;for(let X=0,H=A.length;X<H;X++){let J=A[X],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);let oe=G.getFrameExtents();if(r.multiply(oe),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/oe.x),r.x=s.x*oe.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/oe.y),r.y=s.y*oe.y,G.mapSize.y=s.y)),G.map===null||k===!0||q===!0){let Ae=this.type!==Rn?{minFilter:hn,magFilter:hn}:{};G.map!==null&&G.map.dispose(),G.map=new Cn(r.x,r.y,Ae),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let fe=G.getViewportCount();for(let Ae=0;Ae<fe;Ae++){let Ye=G.getViewport(Ae);o.set(s.x*Ye.x,s.y*Ye.y,s.x*Ye.z,s.y*Ye.w),z.viewport(o),G.updateMatrices(J,Ae),n=G.getFrustum(),M(T,P,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===Rn&&E(G,P),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(b,y,R)};function E(A,T){let P=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Cn(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,P,f,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,P,p,v,null)}function S(A,T,P,b){let y=null,R=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)y=R;else if(y=P.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let z=y.uuid,k=T.uuid,q=c[z];q===void 0&&(q={},c[z]=q);let X=q[k];X===void 0&&(X=y.clone(),q[k]=X,T.addEventListener("dispose",D)),y=X}if(y.visible=T.visible,y.wireframe=T.wireframe,b===Rn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:u[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let z=i.properties.get(y);z.light=P}return y}function M(A,T,P,b,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Rn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);let k=e.update(A),q=A.material;if(Array.isArray(q)){let X=k.groups;for(let H=0,J=X.length;H<J;H++){let G=X[H],oe=q[G.materialIndex];if(oe&&oe.visible){let fe=S(A,oe,b,y);A.onBeforeShadow(i,A,T,P,k,fe,G),i.renderBufferDirect(P,null,k,fe,A,G),A.onAfterShadow(i,A,T,P,k,fe,G)}}}else if(q.visible){let X=S(A,q,b,y);A.onBeforeShadow(i,A,T,P,k,X,null),i.renderBufferDirect(P,null,k,X,A,null),A.onAfterShadow(i,A,T,P,k,X,null)}}let z=A.children;for(let k=0,q=z.length;k<q;k++)M(z[k],T,P,b,y)}function D(A){A.target.removeEventListener("dispose",D);for(let P in c){let b=c[P],y=A.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}var A0={[yo]:Mo,[bo]:Eo,[So]:To,[Ti]:wo,[Mo]:yo,[Eo]:bo,[To]:So,[wo]:Ti};function R0(i,e){function t(){let I=!1,he=new ct,ee=null,ge=new ct(0,0,0,0);return{setMask:function(ne){ee!==ne&&!I&&(i.colorMask(ne,ne,ne,ne),ee=ne)},setLocked:function(ne){I=ne},setClear:function(ne,$,ve,Ve,mt){mt===!0&&(ne*=Ve,$*=Ve,ve*=Ve),he.set(ne,$,ve,Ve),ge.equals(he)===!1&&(i.clearColor(ne,$,ve,Ve),ge.copy(he))},reset:function(){I=!1,ee=null,ge.set(-1,0,0,0)}}}function n(){let I=!1,he=!1,ee=null,ge=null,ne=null;return{setReversed:function($){if(he!==$){let ve=e.get("EXT_clip_control");$?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),he=$;let Ve=ne;ne=null,this.setClear(Ve)}},getReversed:function(){return he},setTest:function($){$?de(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function($){ee!==$&&!I&&(i.depthMask($),ee=$)},setFunc:function($){if(he&&($=A0[$]),ge!==$){switch($){case yo:i.depthFunc(i.NEVER);break;case Mo:i.depthFunc(i.ALWAYS);break;case bo:i.depthFunc(i.LESS);break;case Ti:i.depthFunc(i.LEQUAL);break;case So:i.depthFunc(i.EQUAL);break;case wo:i.depthFunc(i.GEQUAL);break;case Eo:i.depthFunc(i.GREATER);break;case To:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=$}},setLocked:function($){I=$},setClear:function($){ne!==$&&(he&&($=1-$),i.clearDepth($),ne=$)},reset:function(){I=!1,ee=null,ge=null,ne=null,he=!1}}}function r(){let I=!1,he=null,ee=null,ge=null,ne=null,$=null,ve=null,Ve=null,mt=null;return{setTest:function(at){I||(at?de(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(at){he!==at&&!I&&(i.stencilMask(at),he=at)},setFunc:function(at,fn,Ln){(ee!==at||ge!==fn||ne!==Ln)&&(i.stencilFunc(at,fn,Ln),ee=at,ge=fn,ne=Ln)},setOp:function(at,fn,Ln){($!==at||ve!==fn||Ve!==Ln)&&(i.stencilOp(at,fn,Ln),$=at,ve=fn,Ve=Ln)},setLocked:function(at){I=at},setClear:function(at){mt!==at&&(i.clearStencil(at),mt=at)},reset:function(){I=!1,he=null,ee=null,ge=null,ne=null,$=null,ve=null,Ve=null,mt=null}}}let s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,E=null,S=null,M=null,D=null,A=null,T=new Ke(0,0,0),P=0,b=!1,y=null,R=null,z=null,k=null,q=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,J=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=J>=1):G.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=J>=2);let oe=null,fe={},Ae=i.getParameter(i.SCISSOR_BOX),Ye=i.getParameter(i.VIEWPORT),ut=new ct().fromArray(Ae),Z=new ct().fromArray(Ye);function re(I,he,ee,ge){let ne=new Uint8Array(4),$=i.createTexture();i.bindTexture(I,$),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ve=0;ve<ee;ve++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(he+ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return $}let we={};we[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),we[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),we[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(i.DEPTH_TEST),o.setFunc(Ti),rt(!1),ft(pl),de(i.CULL_FACE),C(Xn);function de(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Te(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function nt(I,he){return u[I]!==he?(i.bindFramebuffer(I,he),u[I]=he,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=he),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=he),!0):!1}function Oe(I,he){let ee=p,ge=!1;if(I){ee=f.get(he),ee===void 0&&(ee=[],f.set(he,ee));let ne=I.textures;if(ee.length!==ne.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let $=0,ve=ne.length;$<ve;$++)ee[$]=i.COLOR_ATTACHMENT0+$;ee.length=ne.length,ge=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,ge=!0);ge&&i.drawBuffers(ee)}function vt(I){return g!==I?(i.useProgram(I),g=I,!0):!1}let xt={[oi]:i.FUNC_ADD,[xh]:i.FUNC_SUBTRACT,[yh]:i.FUNC_REVERSE_SUBTRACT};xt[Mh]=i.MIN,xt[bh]=i.MAX;let it={[Sh]:i.ZERO,[wh]:i.ONE,[Eh]:i.SRC_COLOR,[Ys]:i.SRC_ALPHA,[Ih]:i.SRC_ALPHA_SATURATE,[Rh]:i.DST_COLOR,[Ch]:i.DST_ALPHA,[Th]:i.ONE_MINUS_SRC_COLOR,[js]:i.ONE_MINUS_SRC_ALPHA,[Ph]:i.ONE_MINUS_DST_COLOR,[Ah]:i.ONE_MINUS_DST_ALPHA,[Dh]:i.CONSTANT_COLOR,[Lh]:i.ONE_MINUS_CONSTANT_COLOR,[Fh]:i.CONSTANT_ALPHA,[Oh]:i.ONE_MINUS_CONSTANT_ALPHA};function C(I,he,ee,ge,ne,$,ve,Ve,mt,at){if(I===Xn){v===!0&&(Te(i.BLEND),v=!1);return}if(v===!1&&(de(i.BLEND),v=!0),I!==vh){if(I!==m||at!==b){if((d!==oi||M!==oi)&&(i.blendEquation(i.FUNC_ADD),d=oi,M=oi),at)switch(I){case Ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gl:i.blendFunc(i.ONE,i.ONE);break;case _l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,S=null,D=null,A=null,T.set(0,0,0),P=0,m=I,b=at}return}ne=ne||he,$=$||ee,ve=ve||ge,(he!==d||ne!==M)&&(i.blendEquationSeparate(xt[he],xt[ne]),d=he,M=ne),(ee!==E||ge!==S||$!==D||ve!==A)&&(i.blendFuncSeparate(it[ee],it[ge],it[$],it[ve]),E=ee,S=ge,D=$,A=ve),(Ve.equals(T)===!1||mt!==P)&&(i.blendColor(Ve.r,Ve.g,Ve.b,mt),T.copy(Ve),P=mt),m=I,b=!1}function qt(I,he){I.side===un?Te(i.CULL_FACE):de(i.CULL_FACE);let ee=I.side===Vt;he&&(ee=!ee),rt(ee),I.blending===Ei&&I.transparent===!1?C(Xn):C(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);let ge=I.stencilWrite;a.setTest(ge),ge&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),et(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(I){y!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),y=I)}function ft(I){I!==gh?(de(i.CULL_FACE),I!==R&&(I===pl?i.cullFace(i.BACK):I===_h?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),R=I}function Me(I){I!==z&&(H&&i.lineWidth(I),z=I)}function et(I,he,ee){I?(de(i.POLYGON_OFFSET_FILL),(k!==he||q!==ee)&&(i.polygonOffset(he,ee),k=he,q=ee)):Te(i.POLYGON_OFFSET_FILL)}function Pe(I){I?de(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function Ge(I){I===void 0&&(I=i.TEXTURE0+X-1),oe!==I&&(i.activeTexture(I),oe=I)}function Rt(I,he,ee){ee===void 0&&(oe===null?ee=i.TEXTURE0+X-1:ee=oe);let ge=fe[ee];ge===void 0&&(ge={type:void 0,texture:void 0},fe[ee]=ge),(ge.type!==I||ge.texture!==he)&&(oe!==ee&&(i.activeTexture(ee),oe=ee),i.bindTexture(I,he||we[I]),ge.type=I,ge.texture=he)}function w(){let I=fe[oe];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(I){ut.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ut.copy(I))}function Le(I){Z.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Z.copy(I))}function De(I,he){let ee=c.get(he);ee===void 0&&(ee=new WeakMap,c.set(he,ee));let ge=ee.get(I);ge===void 0&&(ge=i.getUniformBlockIndex(he,I.name),ee.set(I,ge))}function ae(I,he){let ge=c.get(he).get(I);l.get(he)!==ge&&(i.uniformBlockBinding(he,ge,I.__bindingPointIndex),l.set(he,ge))}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},oe=null,fe={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,E=null,S=null,M=null,D=null,A=null,T=new Ke(0,0,0),P=0,b=!1,y=null,R=null,z=null,k=null,q=null,ut.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:de,disable:Te,bindFramebuffer:nt,drawBuffers:Oe,useProgram:vt,setBlending:C,setMaterial:qt,setFlipSided:rt,setCullFace:ft,setLineWidth:Me,setPolygonOffset:et,setScissorTest:Pe,activeTexture:Ge,bindTexture:Rt,unbindTexture:w,compressedTexImage2D:_,compressedTexImage3D:N,texImage2D:Se,texImage3D:Q,updateUBOMapping:De,uniformBlockBinding:ae,texStorage2D:ce,texStorage3D:ye,texSubImage2D:j,texSubImage3D:K,compressedTexSubImage2D:W,compressedTexSubImage3D:be,scissor:pe,viewport:Le,reset:Be}}function P0(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,_){return p?new OffscreenCanvas(w,_):ir("canvas")}function v(w,_,N){let j=1,K=Rt(w);if((K.width>N||K.height>N)&&(j=N/Math.max(K.width,K.height)),j<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let W=Math.floor(j*K.width),be=Math.floor(j*K.height);u===void 0&&(u=g(W,be));let ce=_?g(W,be):u;return ce.width=W,ce.height=be,ce.getContext("2d").drawImage(w,0,0,W,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+W+"x"+be+")."),ce}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function m(w){return w.generateMipmaps}function d(w){i.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(w,_,N,j,K=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let W=_;if(_===i.RED&&(N===i.FLOAT&&(W=i.R32F),N===i.HALF_FLOAT&&(W=i.R16F),N===i.UNSIGNED_BYTE&&(W=i.R8)),_===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.R8UI),N===i.UNSIGNED_SHORT&&(W=i.R16UI),N===i.UNSIGNED_INT&&(W=i.R32UI),N===i.BYTE&&(W=i.R8I),N===i.SHORT&&(W=i.R16I),N===i.INT&&(W=i.R32I)),_===i.RG&&(N===i.FLOAT&&(W=i.RG32F),N===i.HALF_FLOAT&&(W=i.RG16F),N===i.UNSIGNED_BYTE&&(W=i.RG8)),_===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RG8UI),N===i.UNSIGNED_SHORT&&(W=i.RG16UI),N===i.UNSIGNED_INT&&(W=i.RG32UI),N===i.BYTE&&(W=i.RG8I),N===i.SHORT&&(W=i.RG16I),N===i.INT&&(W=i.RG32I)),_===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGB8UI),N===i.UNSIGNED_SHORT&&(W=i.RGB16UI),N===i.UNSIGNED_INT&&(W=i.RGB32UI),N===i.BYTE&&(W=i.RGB8I),N===i.SHORT&&(W=i.RGB16I),N===i.INT&&(W=i.RGB32I)),_===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),N===i.UNSIGNED_INT&&(W=i.RGBA32UI),N===i.BYTE&&(W=i.RGBA8I),N===i.SHORT&&(W=i.RGBA16I),N===i.INT&&(W=i.RGBA32I)),_===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),_===i.RGBA){let be=K?Fr:Qe.getTransfer(j);N===i.FLOAT&&(W=i.RGBA32F),N===i.HALF_FLOAT&&(W=i.RGBA16F),N===i.UNSIGNED_BYTE&&(W=be===ht?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function M(w,_){let N;return w?_===null||_===fi||_===fr?N=i.DEPTH24_STENCIL8:_===Pn?N=i.DEPTH32F_STENCIL8:_===ur&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===fi||_===fr?N=i.DEPTH_COMPONENT24:_===Pn?N=i.DEPTH_COMPONENT32F:_===ur&&(N=i.DEPTH_COMPONENT16),N}function D(w,_){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==hn&&w.minFilter!==xn?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function A(w){let _=w.target;_.removeEventListener("dispose",A),P(_),_.isVideoTexture&&h.delete(_)}function T(w){let _=w.target;_.removeEventListener("dispose",T),y(_)}function P(w){let _=n.get(w);if(_.__webglInit===void 0)return;let N=w.source,j=f.get(N);if(j){let K=j[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&b(w),Object.keys(j).length===0&&f.delete(N)}n.remove(w)}function b(w){let _=n.get(w);i.deleteTexture(_.__webglTexture);let N=w.source,j=f.get(N);delete j[_.__cacheKey],o.memory.textures--}function y(w){let _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let K=0;K<_.__webglFramebuffer[j].length;K++)i.deleteFramebuffer(_.__webglFramebuffer[j][K]);else i.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)i.deleteFramebuffer(_.__webglFramebuffer[j]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let N=w.textures;for(let j=0,K=N.length;j<K;j++){let W=n.get(N[j]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),o.memory.textures--),n.remove(N[j])}n.remove(w)}let R=0;function z(){R=0}function k(){let w=R;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),R+=1,w}function q(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function X(w,_){let N=n.get(w);if(w.isVideoTexture&&Pe(w),w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){let j=w.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(N,w,_);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+_)}function H(w,_){let N=n.get(w);if(w.version>0&&N.__version!==w.version){we(N,w,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+_)}function J(w,_){let N=n.get(w);if(w.version>0&&N.__version!==w.version){we(N,w,_);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+_)}function G(w,_){let N=n.get(w);if(w.version>0&&N.__version!==w.version){de(N,w,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+_)}let oe={[Zs]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[$s]:i.MIRRORED_REPEAT},fe={[hn]:i.NEAREST,[Xh]:i.NEAREST_MIPMAP_NEAREST,[rs]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[Ro]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},Ae={[Zh]:i.NEVER,[tu]:i.ALWAYS,[$h]:i.LESS,[Rl]:i.LEQUAL,[Jh]:i.EQUAL,[eu]:i.GEQUAL,[Kh]:i.GREATER,[Qh]:i.NOTEQUAL};function Ye(w,_){if(_.type===Pn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===xn||_.magFilter===Ro||_.magFilter===rs||_.magFilter===di||_.minFilter===xn||_.minFilter===Ro||_.minFilter===rs||_.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,oe[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,oe[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,oe[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,fe[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,fe[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ae[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===hn||_.minFilter!==rs&&_.minFilter!==di||_.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ut(w,_){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",A));let j=_.source,K=f.get(j);K===void 0&&(K={},f.set(j,K));let W=q(_);if(W!==w.__cacheKey){K[W]===void 0&&(K[W]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),K[W].usedTimes++;let be=K[w.__cacheKey];be!==void 0&&(K[w.__cacheKey].usedTimes--,be.usedTimes===0&&b(_)),w.__cacheKey=W,w.__webglTexture=K[W].texture}return N}function Z(w,_,N){return Math.floor(Math.floor(w/N)/_)}function re(w,_,N,j){let W=w.updateRanges;if(W.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,N,j,_.data);else{W.sort((Q,pe)=>Q.start-pe.start);let be=0;for(let Q=1;Q<W.length;Q++){let pe=W[be],Le=W[Q],De=pe.start+pe.count,ae=Z(Le.start,_.width,4),Be=Z(pe.start,_.width,4);Le.start<=De+1&&ae===Be&&Z(Le.start+Le.count-1,_.width,4)===ae?pe.count=Math.max(pe.count,Le.start+Le.count-pe.start):(++be,W[be]=Le)}W.length=be+1;let ce=i.getParameter(i.UNPACK_ROW_LENGTH),ye=i.getParameter(i.UNPACK_SKIP_PIXELS),Se=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Q=0,pe=W.length;Q<pe;Q++){let Le=W[Q],De=Math.floor(Le.start/4),ae=Math.ceil(Le.count/4),Be=De%_.width,I=Math.floor(De/_.width),he=ae,ee=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,Be,I,he,ee,N,j,_.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ce),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ye),i.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function we(w,_,N){let j=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=i.TEXTURE_3D);let K=ut(w,_),W=_.source;t.bindTexture(j,w.__webglTexture,i.TEXTURE0+N);let be=n.get(W);if(W.version!==be.__version||K===!0){t.activeTexture(i.TEXTURE0+N);let ce=Qe.getPrimaries(Qe.workingColorSpace),ye=_.colorSpace===Yn?null:Qe.getPrimaries(_.colorSpace),Se=_.colorSpace===Yn||ce===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let Q=v(_.image,!1,r.maxTextureSize);Q=Ge(_,Q);let pe=s.convert(_.format,_.colorSpace),Le=s.convert(_.type),De=S(_.internalFormat,pe,Le,_.colorSpace,_.isVideoTexture);Ye(j,_);let ae,Be=_.mipmaps,I=_.isVideoTexture!==!0,he=be.__version===void 0||K===!0,ee=W.dataReady,ge=D(_,Q);if(_.isDepthTexture)De=M(_.format===pr,_.type),he&&(I?t.texStorage2D(i.TEXTURE_2D,1,De,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,De,Q.width,Q.height,0,pe,Le,null));else if(_.isDataTexture)if(Be.length>0){I&&he&&t.texStorage2D(i.TEXTURE_2D,ge,De,Be[0].width,Be[0].height);for(let ne=0,$=Be.length;ne<$;ne++)ae=Be[ne],I?ee&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ae.width,ae.height,pe,Le,ae.data):t.texImage2D(i.TEXTURE_2D,ne,De,ae.width,ae.height,0,pe,Le,ae.data);_.generateMipmaps=!1}else I?(he&&t.texStorage2D(i.TEXTURE_2D,ge,De,Q.width,Q.height),ee&&re(_,Q,pe,Le)):t.texImage2D(i.TEXTURE_2D,0,De,Q.width,Q.height,0,pe,Le,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){I&&he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,De,Be[0].width,Be[0].height,Q.depth);for(let ne=0,$=Be.length;ne<$;ne++)if(ae=Be[ne],_.format!==dn)if(pe!==null)if(I){if(ee)if(_.layerUpdates.size>0){let ve=Ol(ae.width,ae.height,_.format,_.type);for(let Ve of _.layerUpdates){let mt=ae.data.subarray(Ve*ve/ae.data.BYTES_PER_ELEMENT,(Ve+1)*ve/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,Ve,ae.width,ae.height,1,pe,mt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,ae.width,ae.height,Q.depth,pe,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,De,ae.width,ae.height,Q.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ee&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,ae.width,ae.height,Q.depth,pe,Le,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,De,ae.width,ae.height,Q.depth,0,pe,Le,ae.data)}else{I&&he&&t.texStorage2D(i.TEXTURE_2D,ge,De,Be[0].width,Be[0].height);for(let ne=0,$=Be.length;ne<$;ne++)ae=Be[ne],_.format!==dn?pe!==null?I?ee&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,ae.width,ae.height,pe,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,De,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ee&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ae.width,ae.height,pe,Le,ae.data):t.texImage2D(i.TEXTURE_2D,ne,De,ae.width,ae.height,0,pe,Le,ae.data)}else if(_.isDataArrayTexture)if(I){if(he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,De,Q.width,Q.height,Q.depth),ee)if(_.layerUpdates.size>0){let ne=Ol(Q.width,Q.height,_.format,_.type);for(let $ of _.layerUpdates){let ve=Q.data.subarray($*ne/Q.data.BYTES_PER_ELEMENT,($+1)*ne/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,Q.width,Q.height,1,pe,Le,ve)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pe,Le,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,Q.width,Q.height,Q.depth,0,pe,Le,Q.data);else if(_.isData3DTexture)I?(he&&t.texStorage3D(i.TEXTURE_3D,ge,De,Q.width,Q.height,Q.depth),ee&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pe,Le,Q.data)):t.texImage3D(i.TEXTURE_3D,0,De,Q.width,Q.height,Q.depth,0,pe,Le,Q.data);else if(_.isFramebufferTexture){if(he)if(I)t.texStorage2D(i.TEXTURE_2D,ge,De,Q.width,Q.height);else{let ne=Q.width,$=Q.height;for(let ve=0;ve<ge;ve++)t.texImage2D(i.TEXTURE_2D,ve,De,ne,$,0,pe,Le,null),ne>>=1,$>>=1}}else if(Be.length>0){if(I&&he){let ne=Rt(Be[0]);t.texStorage2D(i.TEXTURE_2D,ge,De,ne.width,ne.height)}for(let ne=0,$=Be.length;ne<$;ne++)ae=Be[ne],I?ee&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,pe,Le,ae):t.texImage2D(i.TEXTURE_2D,ne,De,pe,Le,ae);_.generateMipmaps=!1}else if(I){if(he){let ne=Rt(Q);t.texStorage2D(i.TEXTURE_2D,ge,De,ne.width,ne.height)}ee&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,Le,Q)}else t.texImage2D(i.TEXTURE_2D,0,De,pe,Le,Q);m(_)&&d(j),be.__version=W.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function de(w,_,N){if(_.image.length!==6)return;let j=ut(w,_),K=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+N);let W=n.get(K);if(K.version!==W.__version||j===!0){t.activeTexture(i.TEXTURE0+N);let be=Qe.getPrimaries(Qe.workingColorSpace),ce=_.colorSpace===Yn?null:Qe.getPrimaries(_.colorSpace),ye=_.colorSpace===Yn||be===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let Se=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,pe=[];for(let $=0;$<6;$++)!Se&&!Q?pe[$]=v(_.image[$],!0,r.maxCubemapSize):pe[$]=Q?_.image[$].image:_.image[$],pe[$]=Ge(_,pe[$]);let Le=pe[0],De=s.convert(_.format,_.colorSpace),ae=s.convert(_.type),Be=S(_.internalFormat,De,ae,_.colorSpace),I=_.isVideoTexture!==!0,he=W.__version===void 0||j===!0,ee=K.dataReady,ge=D(_,Le);Ye(i.TEXTURE_CUBE_MAP,_);let ne;if(Se){I&&he&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Be,Le.width,Le.height);for(let $=0;$<6;$++){ne=pe[$].mipmaps;for(let ve=0;ve<ne.length;ve++){let Ve=ne[ve];_.format!==dn?De!==null?I?ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,0,0,Ve.width,Ve.height,De,Ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,Be,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,0,0,Ve.width,Ve.height,De,ae,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,Be,Ve.width,Ve.height,0,De,ae,Ve.data)}}}else{if(ne=_.mipmaps,I&&he){ne.length>0&&ge++;let $=Rt(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Be,$.width,$.height)}for(let $=0;$<6;$++)if(Q){I?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,pe[$].width,pe[$].height,De,ae,pe[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Be,pe[$].width,pe[$].height,0,De,ae,pe[$].data);for(let ve=0;ve<ne.length;ve++){let mt=ne[ve].image[$].image;I?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,0,0,mt.width,mt.height,De,ae,mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,Be,mt.width,mt.height,0,De,ae,mt.data)}}else{I?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,De,ae,pe[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Be,De,ae,pe[$]);for(let ve=0;ve<ne.length;ve++){let Ve=ne[ve];I?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,0,0,De,ae,Ve.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,Be,De,ae,Ve.image[$])}}}m(_)&&d(i.TEXTURE_CUBE_MAP),W.__version=K.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Te(w,_,N,j,K,W){let be=s.convert(N.format,N.colorSpace),ce=s.convert(N.type),ye=S(N.internalFormat,be,ce,N.colorSpace),Se=n.get(_),Q=n.get(N);if(Q.__renderTarget=_,!Se.__hasExternalTextures){let pe=Math.max(1,_.width>>W),Le=Math.max(1,_.height>>W);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,W,ye,pe,Le,_.depth,0,be,ce,null):t.texImage2D(K,W,ye,pe,Le,0,be,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),et(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,K,Q.__webglTexture,0,Me(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,K,Q.__webglTexture,W),t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(w,_,N){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){let j=_.depthTexture,K=j&&j.isDepthTexture?j.type:null,W=M(_.stencilBuffer,K),be=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=Me(_);et(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,W,_.width,_.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,W,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,W,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,w)}else{let j=_.textures;for(let K=0;K<j.length;K++){let W=j[K],be=s.convert(W.format,W.colorSpace),ce=s.convert(W.type),ye=S(W.internalFormat,be,ce,W.colorSpace),Se=Me(_);N&&et(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,ye,_.width,_.height):et(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,ye,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ye,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Oe(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(_.depthTexture);j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X(_.depthTexture,0);let K=j.__webglTexture,W=Me(_);if(_.depthTexture.format===nr)et(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(_.depthTexture.format===pr)et(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function vt(w){let _=n.get(w),N=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let j=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){let K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",K)};j.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=j}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");let j=w.texture.mipmaps;j&&j.length>0?Oe(_.__webglFramebuffer[0],w):Oe(_.__webglFramebuffer,w)}else if(N){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=i.createRenderbuffer(),nt(_.__webglDepthbuffer[j],w,!1);else{let K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,W)}}else{let j=w.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),nt(_.__webglDepthbuffer,w,!1);else{let K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,W)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(w,_,N){let j=n.get(w);_!==void 0&&Te(j.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&vt(w)}function it(w){let _=w.texture,N=n.get(w),j=n.get(_);w.addEventListener("dispose",T);let K=w.textures,W=w.isWebGLCubeRenderTarget===!0,be=K.length>1;if(be||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=_.version,o.memory.textures++),W){N.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[ce]=[];for(let ye=0;ye<_.mipmaps.length;ye++)N.__webglFramebuffer[ce][ye]=i.createFramebuffer()}else N.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let ce=0;ce<_.mipmaps.length;ce++)N.__webglFramebuffer[ce]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(be)for(let ce=0,ye=K.length;ce<ye;ce++){let Se=n.get(K[ce]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&et(w)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ce=0;ce<K.length;ce++){let ye=K[ce];N.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ce]);let Se=s.convert(ye.format,ye.colorSpace),Q=s.convert(ye.type),pe=S(ye.internalFormat,Se,Q,ye.colorSpace,w.isXRRenderTarget===!0),Le=Me(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,pe,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,N.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),nt(N.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,_);for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)Te(N.__webglFramebuffer[ce][ye],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ye);else Te(N.__webglFramebuffer[ce],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(_)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ce=0,ye=K.length;ce<ye;ce++){let Se=K[ce],Q=n.get(Se);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),Ye(i.TEXTURE_2D,Se),Te(N.__webglFramebuffer,w,Se,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),m(Se)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ce=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,j.__webglTexture),Ye(ce,_),_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)Te(N.__webglFramebuffer[ye],w,_,i.COLOR_ATTACHMENT0,ce,ye);else Te(N.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,ce,0);m(_)&&d(ce),t.unbindTexture()}w.depthBuffer&&vt(w)}function C(w){let _=w.textures;for(let N=0,j=_.length;N<j;N++){let K=_[N];if(m(K)){let W=E(w),be=n.get(K).__webglTexture;t.bindTexture(W,be),d(W),t.unbindTexture()}}}let qt=[],rt=[];function ft(w){if(w.samples>0){if(et(w)===!1){let _=w.textures,N=w.width,j=w.height,K=i.COLOR_BUFFER_BIT,W=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(w),ce=_.length>1;if(ce)for(let Se=0;Se<_.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);let ye=w.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Se=0;Se<_.length;Se++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[Se]);let Q=n.get(_[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,N,j,0,0,N,j,K,i.NEAREST),l===!0&&(qt.length=0,rt.length=0,qt.push(i.COLOR_ATTACHMENT0+Se),w.depthBuffer&&w.resolveDepthBuffer===!1&&(qt.push(W),rt.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,rt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,qt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let Se=0;Se<_.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,be.__webglColorRenderbuffer[Se]);let Q=n.get(_[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,Q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Me(w){return Math.min(r.maxSamples,w.samples)}function et(w){let _=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Pe(w){let _=o.render.frame;h.get(w)!==_&&(h.set(w,_),w.update())}function Ge(w,_){let N=w.colorSpace,j=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==Ci&&N!==Yn&&(Qe.getTransfer(N)===ht?(j!==dn||K!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),_}function Rt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=X,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=G,this.rebindTextures=xt,this.setupRenderTarget=it,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=et}function I0(i,e){function t(n,r=Yn){let s,o=Qe.getTransfer(r);if(n===bn)return i.UNSIGNED_BYTE;if(n===Io)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Do)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yl)return i.BYTE;if(n===Ml)return i.SHORT;if(n===ur)return i.UNSIGNED_SHORT;if(n===Po)return i.INT;if(n===fi)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===dr)return i.HALF_FLOAT;if(n===Sl)return i.ALPHA;if(n===wl)return i.RGB;if(n===dn)return i.RGBA;if(n===nr)return i.DEPTH_COMPONENT;if(n===pr)return i.DEPTH_STENCIL;if(n===El)return i.RED;if(n===Lo)return i.RED_INTEGER;if(n===Tl)return i.RG;if(n===Fo)return i.RG_INTEGER;if(n===Oo)return i.RGBA_INTEGER;if(n===ss||n===os||n===as||n===ls)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ss)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===as)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ss)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===os)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===as)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ls)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===No||n===Uo||n===ko||n===Bo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===No)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ko)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vo||n===zo||n===Ho)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Vo||n===zo)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ho)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Go||n===Wo||n===Xo||n===qo||n===Yo||n===jo||n===Zo||n===$o||n===Jo||n===Ko||n===Qo||n===ea||n===ta||n===na)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Go)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wo)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xo)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qo)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yo)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jo)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zo)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$o)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jo)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ko)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qo)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ea)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ta)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===na)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cs||n===ia||n===ra)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===cs)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ia)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ra)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cl||n===sa||n===oa||n===aa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===cs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===sa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===aa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var D0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,jl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new In,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new rn({vertexShader:D0,fragmentShader:L0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new te(new Wt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zl=class extends Gn{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null,v=new jl,m=t.getContextAttributes(),d=null,E=null,S=[],M=[],D=new Ze,A=null,T=new Ut;T.viewport=new ct;let P=new Ut;P.viewport=new ct;let b=[T,P],y=new go,R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let re=S[Z];return re===void 0&&(re=new ar,S[Z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Z){let re=S[Z];return re===void 0&&(re=new ar,S[Z]=re),re.getGripSpace()},this.getHand=function(Z){let re=S[Z];return re===void 0&&(re=new ar,S[Z]=re),re.getHandSpace()};function k(Z){let re=M.indexOf(Z.inputSource);if(re===-1)return;let we=S[re];we!==void 0&&(we.update(Z.inputSource,Z.frame,c||o),we.dispatchEvent({type:Z.type,data:Z.inputSource}))}function q(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",X);for(let Z=0;Z<S.length;Z++){let re=M[Z];re!==null&&(M[Z]=null,S[Z].disconnect(re))}R=null,z=null,v.reset(),e.setRenderTarget(d),p=null,f=null,u=null,r=null,E=null,ut.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(Z){return vs(this,null,function*(){if(r=Z,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",q),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),A=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,de=null,Te=null;m.depth&&(Te=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=m.stencil?pr:nr,de=m.stencil?fr:fi);let nt={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(nt),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Cn(f.textureWidth,f.textureHeight,{format:dn,type:bn,depthTexture:new Wr(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let we={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,we),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Cn(p.framebufferWidth,p.framebufferHeight,{format:dn,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=yield r.requestReferenceSpace(a),ut.setContext(r),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(Z){for(let re=0;re<Z.removed.length;re++){let we=Z.removed[re],de=M.indexOf(we);de>=0&&(M[de]=null,S[de].disconnect(we))}for(let re=0;re<Z.added.length;re++){let we=Z.added[re],de=M.indexOf(we);if(de===-1){for(let nt=0;nt<S.length;nt++)if(nt>=M.length){M.push(we),de=nt;break}else if(M[nt]===null){M[nt]=we,de=nt;break}if(de===-1)break}let Te=S[de];Te&&Te.connect(we)}}let H=new L,J=new L;function G(Z,re,we){H.setFromMatrixPosition(re.matrixWorld),J.setFromMatrixPosition(we.matrixWorld);let de=H.distanceTo(J),Te=re.projectionMatrix.elements,nt=we.projectionMatrix.elements,Oe=Te[14]/(Te[10]-1),vt=Te[14]/(Te[10]+1),xt=(Te[9]+1)/Te[5],it=(Te[9]-1)/Te[5],C=(Te[8]-1)/Te[0],qt=(nt[8]+1)/nt[0],rt=Oe*C,ft=Oe*qt,Me=de/(-C+qt),et=Me*-C;if(re.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(et),Z.translateZ(Me),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Te[10]===-1)Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let Pe=Oe+Me,Ge=vt+Me,Rt=rt-et,w=ft+(de-et),_=xt*vt/Ge*Pe,N=it*vt/Ge*Pe;Z.projectionMatrix.makePerspective(Rt,w,_,N,Pe,Ge),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function oe(Z,re){re===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(re.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let re=Z.near,we=Z.far;v.texture!==null&&(v.depthNear>0&&(re=v.depthNear),v.depthFar>0&&(we=v.depthFar)),y.near=P.near=T.near=re,y.far=P.far=T.far=we,(R!==y.near||z!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,z=y.far),T.layers.mask=Z.layers.mask|2,P.layers.mask=Z.layers.mask|4,y.layers.mask=T.layers.mask|P.layers.mask;let de=Z.parent,Te=y.cameras;oe(y,de);for(let nt=0;nt<Te.length;nt++)oe(Te[nt],de);Te.length===2?G(y,T,P):y.projectionMatrix.copy(T.projectionMatrix),fe(Z,y,de)};function fe(Z,re,we){we===null?Z.matrix.copy(re.matrixWorld):(Z.matrix.copy(we.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(re.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Nr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let Ae=null;function Ye(Z,re){if(h=re.getViewerPose(c||o),g=re,h!==null){let we=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let de=!1;we.length!==y.cameras.length&&(y.cameras.length=0,de=!0);for(let Oe=0;Oe<we.length;Oe++){let vt=we[Oe],xt=null;if(p!==null)xt=p.getViewport(vt);else{let C=u.getViewSubImage(f,vt);xt=C.viewport,Oe===0&&(e.setRenderTargetTextures(E,C.colorTexture,C.depthStencilTexture),e.setRenderTarget(E))}let it=b[Oe];it===void 0&&(it=new Ut,it.layers.enable(Oe),it.viewport=new ct,b[Oe]=it),it.matrix.fromArray(vt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(vt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(xt.x,xt.y,xt.width,xt.height),Oe===0&&(y.matrix.copy(it.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),de===!0&&y.cameras.push(it)}let Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){let Oe=u.getDepthInformation(we[0]);Oe&&Oe.isValid&&Oe.texture&&v.init(e,Oe,r.renderState)}}for(let we=0;we<S.length;we++){let de=M[we],Te=S[we];de!==null&&Te!==void 0&&Te.update(de,re,c||o)}Ae&&Ae(Z,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),g=null}let ut=new Du;ut.setAnimationLoop(Ye),this.setAnimationLoop=function(Z){Ae=Z},this.dispose=function(){}}},Ni=new li,F0=new _t;function O0(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Dl(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,E,S,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,E,S):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Vt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Vt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let E=e.get(d),S=E.envMap,M=E.envMapRotation;S&&(m.envMap.value=S,Ni.copy(M),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),m.envMapRotation.value.setFromMatrix4(F0.makeRotationFromEuler(Ni)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=S*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Vt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){let E=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function N0(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){let M=S.program;n.uniformBlockBinding(E,M)}function c(E,S){let M=r[E.id];M===void 0&&(g(E),M=h(E),r[E.id]=M,E.addEventListener("dispose",m));let D=S.program;n.updateUBOMapping(E,D);let A=e.render.frame;s[E.id]!==A&&(f(E),s[E.id]=A)}function h(E){let S=u();E.__bindingPointIndex=S;let M=i.createBuffer(),D=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,D,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let S=r[E.id],M=E.uniforms,D=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,T=M.length;A<T;A++){let P=Array.isArray(M[A])?M[A]:[M[A]];for(let b=0,y=P.length;b<y;b++){let R=P[b];if(p(R,A,b,D)===!0){let z=R.__offset,k=Array.isArray(R.value)?R.value:[R.value],q=0;for(let X=0;X<k.length;X++){let H=k[X],J=v(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,z+q,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,q),q+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,S,M,D){let A=E.value,T=S+"_"+M;if(D[T]===void 0)return typeof A=="number"||typeof A=="boolean"?D[T]=A:D[T]=A.clone(),!0;{let P=D[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return D[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(E){let S=E.uniforms,M=0,D=16;for(let T=0,P=S.length;T<P;T++){let b=Array.isArray(S[T])?S[T]:[S[T]];for(let y=0,R=b.length;y<R;y++){let z=b[y],k=Array.isArray(z.value)?z.value:[z.value];for(let q=0,X=k.length;q<X;q++){let H=k[q],J=v(H),G=M%D,oe=G%J.boundary,fe=G+oe;M+=oe,fe!==0&&D-fe<J.storage&&(M+=D-fe),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=J.storage}}}let A=M%D;return A>0&&(M+=D-A),E.__size=M,E.__cache={},this}function v(E){let S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){let S=E.target;S.removeEventListener("dispose",m);let M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function d(){for(let E in r)i.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}var da=class{constructor(e={}){let{canvas:t=nu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,d=null,E=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,D=!1;this._outputColorSpace=tn;let A=0,T=0,P=null,b=-1,y=null,R=new ct,z=new ct,k=null,q=new Ke(0),X=0,H=t.width,J=t.height,G=1,oe=null,fe=null,Ae=new ct(0,0,H,J),Ye=new ct(0,0,H,J),ut=!1,Z=new lr,re=!1,we=!1,de=new _t,Te=new _t,nt=new L,Oe=new ct,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xt=!1;function it(){return P===null?G:1}let C=n;function qt(x,F){return t.getContext(x,F)}try{let x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vo}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",ne,!1),t.addEventListener("webglcontextcreationerror",$,!1),C===null){let F="webgl2";if(C=qt(F,x),C===null)throw qt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let rt,ft,Me,et,Pe,Ge,Rt,w,_,N,j,K,W,be,ce,ye,Se,Q,pe,Le,De,ae,Be,I;function he(){rt=new eg(C),rt.init(),ae=new I0(C,rt),ft=new Ym(C,rt,e,ae),Me=new R0(C,rt),ft.reverseDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),et=new ig(C),Pe=new g0,Ge=new P0(C,rt,Me,Pe,ft,ae,et),Rt=new Zm(M),w=new Qm(M),_=new cf(C),Be=new Xm(C,_),N=new tg(C,_,et,Be),j=new sg(C,N,_,et),pe=new rg(C,ft,Ge),ye=new jm(Pe),K=new m0(M,Rt,w,rt,ft,Be,ye),W=new O0(M,Pe),be=new v0,ce=new w0(rt),Q=new Wm(M,Rt,w,Me,j,p,l),Se=new C0(M,j,ft),I=new N0(C,et,ft,Me),Le=new qm(C,rt,et),De=new ng(C,rt,et),et.programs=K.programs,M.capabilities=ft,M.extensions=rt,M.properties=Pe,M.renderLists=be,M.shadowMap=Se,M.state=Me,M.info=et}he();let ee=new Zl(M,C);this.xr=ee,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let x=rt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=rt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(x){x!==void 0&&(G=x,this.setSize(H,J,!1))},this.getSize=function(x){return x.set(H,J)},this.setSize=function(x,F,B=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=x,J=F,t.width=Math.floor(x*G),t.height=Math.floor(F*G),B===!0&&(t.style.width=x+"px",t.style.height=F+"px"),this.setViewport(0,0,x,F)},this.getDrawingBufferSize=function(x){return x.set(H*G,J*G).floor()},this.setDrawingBufferSize=function(x,F,B){H=x,J=F,G=B,t.width=Math.floor(x*B),t.height=Math.floor(F*B),this.setViewport(0,0,x,F)},this.getCurrentViewport=function(x){return x.copy(R)},this.getViewport=function(x){return x.copy(Ae)},this.setViewport=function(x,F,B,V){x.isVector4?Ae.set(x.x,x.y,x.z,x.w):Ae.set(x,F,B,V),Me.viewport(R.copy(Ae).multiplyScalar(G).round())},this.getScissor=function(x){return x.copy(Ye)},this.setScissor=function(x,F,B,V){x.isVector4?Ye.set(x.x,x.y,x.z,x.w):Ye.set(x,F,B,V),Me.scissor(z.copy(Ye).multiplyScalar(G).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(x){Me.setScissorTest(ut=x)},this.setOpaqueSort=function(x){oe=x},this.setTransparentSort=function(x){fe=x},this.getClearColor=function(x){return x.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor(...arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha(...arguments)},this.clear=function(x=!0,F=!0,B=!0){let V=0;if(x){let O=!1;if(P!==null){let ie=P.texture.format;O=ie===Oo||ie===Fo||ie===Lo}if(O){let ie=P.texture.type,ue=ie===bn||ie===fi||ie===ur||ie===fr||ie===Io||ie===Do,xe=Q.getClearColor(),me=Q.getClearAlpha(),Ne=xe.r,ke=xe.g,Ce=xe.b;ue?(g[0]=Ne,g[1]=ke,g[2]=Ce,g[3]=me,C.clearBufferuiv(C.COLOR,0,g)):(v[0]=Ne,v[1]=ke,v[2]=Ce,v[3]=me,C.clearBufferiv(C.COLOR,0,v))}else V|=C.COLOR_BUFFER_BIT}F&&(V|=C.DEPTH_BUFFER_BIT),B&&(V|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",$,!1),Q.dispose(),be.dispose(),ce.dispose(),Pe.dispose(),Rt.dispose(),w.dispose(),j.dispose(),Be.dispose(),I.dispose(),K.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",ic),ee.removeEventListener("sessionend",rc),pi.stop()};function ge(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let x=et.autoReset,F=Se.enabled,B=Se.autoUpdate,V=Se.needsUpdate,O=Se.type;he(),et.autoReset=x,Se.enabled=F,Se.autoUpdate=B,Se.needsUpdate=V,Se.type=O}function $(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ve(x){let F=x.target;F.removeEventListener("dispose",ve),Ve(F)}function Ve(x){mt(x),Pe.remove(x)}function mt(x){let F=Pe.get(x).programs;F!==void 0&&(F.forEach(function(B){K.releaseProgram(B)}),x.isShaderMaterial&&K.releaseShaderCache(x))}this.renderBufferDirect=function(x,F,B,V,O,ie){F===null&&(F=vt);let ue=O.isMesh&&O.matrixWorld.determinant()<0,xe=ud(x,F,B,V,O);Me.setMaterial(V,ue);let me=B.index,Ne=1;if(V.wireframe===!0){if(me=N.getWireframeAttribute(B),me===void 0)return;Ne=2}let ke=B.drawRange,Ce=B.attributes.position,$e=ke.start*Ne,lt=(ke.start+ke.count)*Ne;ie!==null&&($e=Math.max($e,ie.start*Ne),lt=Math.min(lt,(ie.start+ie.count)*Ne)),me!==null?($e=Math.max($e,0),lt=Math.min(lt,me.count)):Ce!=null&&($e=Math.max($e,0),lt=Math.min(lt,Ce.count));let yt=lt-$e;if(yt<0||yt===1/0)return;Be.setup(O,V,xe,B,me);let bt,tt=Le;if(me!==null&&(bt=_.get(me),tt=De,tt.setIndex(bt)),O.isMesh)V.wireframe===!0?(Me.setLineWidth(V.wireframeLinewidth*it()),tt.setMode(C.LINES)):tt.setMode(C.TRIANGLES);else if(O.isLine){let Ie=V.linewidth;Ie===void 0&&(Ie=1),Me.setLineWidth(Ie*it()),O.isLineSegments?tt.setMode(C.LINES):O.isLineLoop?tt.setMode(C.LINE_LOOP):tt.setMode(C.LINE_STRIP)}else O.isPoints?tt.setMode(C.POINTS):O.isSprite&&tt.setMode(C.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ai("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))tt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Ie=O._multiDrawStarts,kt=O._multiDrawCounts,ot=O._multiDrawCount,pn=me?_.get(me).bytesPerElement:1,Bi=Pe.get(V).currentProgram.getUniforms();for(let Kt=0;Kt<ot;Kt++)Bi.setValue(C,"_gl_DrawID",Kt),tt.render(Ie[Kt]/pn,kt[Kt])}else if(O.isInstancedMesh)tt.renderInstances($e,yt,O.count);else if(B.isInstancedBufferGeometry){let Ie=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,kt=Math.min(B.instanceCount,Ie);tt.renderInstances($e,yt,kt)}else tt.render($e,yt)};function at(x,F,B){x.transparent===!0&&x.side===un&&x.forceSinglePass===!1?(x.side=Vt,x.needsUpdate=!0,_s(x,F,B),x.side=cn,x.needsUpdate=!0,_s(x,F,B),x.side=un):_s(x,F,B)}this.compile=function(x,F,B=null){B===null&&(B=x),d=ce.get(B),d.init(F),S.push(d),B.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),x!==B&&x.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights();let V=new Set;return x.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let ie=O.material;if(ie)if(Array.isArray(ie))for(let ue=0;ue<ie.length;ue++){let xe=ie[ue];at(xe,B,O),V.add(xe)}else at(ie,B,O),V.add(ie)}),d=S.pop(),V},this.compileAsync=function(x,F,B=null){let V=this.compile(x,F,B);return new Promise(O=>{function ie(){if(V.forEach(function(ue){Pe.get(ue).currentProgram.isReady()&&V.delete(ue)}),V.size===0){O(x);return}setTimeout(ie,10)}rt.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let fn=null;function Ln(x){fn&&fn(x)}function ic(){pi.stop()}function rc(){pi.start()}let pi=new Du;pi.setAnimationLoop(Ln),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(x){fn=x,ee.setAnimationLoop(x),x===null?pi.stop():pi.start()},ee.addEventListener("sessionstart",ic),ee.addEventListener("sessionend",rc),this.render=function(x,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(F),F=ee.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,F,P),d=ce.get(x,S.length),d.init(F),S.push(d),Te.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Z.setFromProjectionMatrix(Te),we=this.localClippingEnabled,re=ye.init(this.clippingPlanes,we),m=be.get(x,E.length),m.init(),E.push(m),ee.enabled===!0&&ee.isPresenting===!0){let ie=M.xr.getDepthSensingMesh();ie!==null&&ba(ie,F,-1/0,M.sortObjects)}ba(x,F,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(oe,fe),xt=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,xt&&Q.addToRenderList(m,x),this.info.render.frame++,re===!0&&ye.beginShadows();let B=d.state.shadowsArray;Se.render(B,x,F),re===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,O=m.transmissive;if(d.setupLights(),F.isArrayCamera){let ie=F.cameras;if(O.length>0)for(let ue=0,xe=ie.length;ue<xe;ue++){let me=ie[ue];oc(V,O,x,me)}xt&&Q.render(x);for(let ue=0,xe=ie.length;ue<xe;ue++){let me=ie[ue];sc(m,x,me,me.viewport)}}else O.length>0&&oc(V,O,x,F),xt&&Q.render(x),sc(m,x,F);P!==null&&T===0&&(Ge.updateMultisampleRenderTarget(P),Ge.updateRenderTargetMipmap(P)),x.isScene===!0&&x.onAfterRender(M,x,F),Be.resetDefaultState(),b=-1,y=null,S.pop(),S.length>0?(d=S[S.length-1],re===!0&&ye.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function ba(x,F,B,V){if(x.visible===!1)return;if(x.layers.test(F.layers)){if(x.isGroup)B=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(F);else if(x.isLight)d.pushLight(x),x.castShadow&&d.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Z.intersectsSprite(x)){V&&Oe.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Te);let ue=j.update(x),xe=x.material;xe.visible&&m.push(x,ue,xe,B,Oe.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Z.intersectsObject(x))){let ue=j.update(x),xe=x.material;if(V&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Oe.copy(x.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Oe.copy(ue.boundingSphere.center)),Oe.applyMatrix4(x.matrixWorld).applyMatrix4(Te)),Array.isArray(xe)){let me=ue.groups;for(let Ne=0,ke=me.length;Ne<ke;Ne++){let Ce=me[Ne],$e=xe[Ce.materialIndex];$e&&$e.visible&&m.push(x,ue,$e,B,Oe.z,Ce)}}else xe.visible&&m.push(x,ue,xe,B,Oe.z,null)}}let ie=x.children;for(let ue=0,xe=ie.length;ue<xe;ue++)ba(ie[ue],F,B,V)}function sc(x,F,B,V){let O=x.opaque,ie=x.transmissive,ue=x.transparent;d.setupLightsView(B),re===!0&&ye.setGlobalState(M.clippingPlanes,B),V&&Me.viewport(R.copy(V)),O.length>0&&gs(O,F,B),ie.length>0&&gs(ie,F,B),ue.length>0&&gs(ue,F,B),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function oc(x,F,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[V.id]===void 0&&(d.state.transmissionRenderTarget[V.id]=new Cn(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?dr:bn,minFilter:di,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));let ie=d.state.transmissionRenderTarget[V.id],ue=V.viewport||R;ie.setSize(ue.z*M.transmissionResolutionScale,ue.w*M.transmissionResolutionScale);let xe=M.getRenderTarget();M.setRenderTarget(ie),M.getClearColor(q),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear(),xt&&Q.render(B);let me=M.toneMapping;M.toneMapping=qn;let Ne=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),d.setupLightsView(V),re===!0&&ye.setGlobalState(M.clippingPlanes,V),gs(x,B,V),Ge.updateMultisampleRenderTarget(ie),Ge.updateRenderTargetMipmap(ie),rt.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Ce=0,$e=F.length;Ce<$e;Ce++){let lt=F[Ce],yt=lt.object,bt=lt.geometry,tt=lt.material,Ie=lt.group;if(tt.side===un&&yt.layers.test(V.layers)){let kt=tt.side;tt.side=Vt,tt.needsUpdate=!0,ac(yt,B,V,bt,tt,Ie),tt.side=kt,tt.needsUpdate=!0,ke=!0}}ke===!0&&(Ge.updateMultisampleRenderTarget(ie),Ge.updateRenderTargetMipmap(ie))}M.setRenderTarget(xe),M.setClearColor(q,X),Ne!==void 0&&(V.viewport=Ne),M.toneMapping=me}function gs(x,F,B){let V=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ie=x.length;O<ie;O++){let ue=x[O],xe=ue.object,me=ue.geometry,Ne=ue.group,ke=ue.material;ke.allowOverride===!0&&V!==null&&(ke=V),xe.layers.test(B.layers)&&ac(xe,F,B,me,ke,Ne)}}function ac(x,F,B,V,O,ie){x.onBeforeRender(M,F,B,V,O,ie),x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),O.onBeforeRender(M,F,B,V,x,ie),O.transparent===!0&&O.side===un&&O.forceSinglePass===!1?(O.side=Vt,O.needsUpdate=!0,M.renderBufferDirect(B,F,V,O,x,ie),O.side=cn,O.needsUpdate=!0,M.renderBufferDirect(B,F,V,O,x,ie),O.side=un):M.renderBufferDirect(B,F,V,O,x,ie),x.onAfterRender(M,F,B,V,O,ie)}function _s(x,F,B){F.isScene!==!0&&(F=vt);let V=Pe.get(x),O=d.state.lights,ie=d.state.shadowsArray,ue=O.state.version,xe=K.getParameters(x,O.state,ie,F,B),me=K.getProgramCacheKey(xe),Ne=V.programs;V.environment=x.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=(x.isMeshStandardMaterial?w:Rt).get(x.envMap||V.environment),V.envMapRotation=V.environment!==null&&x.envMap===null?F.environmentRotation:x.envMapRotation,Ne===void 0&&(x.addEventListener("dispose",ve),Ne=new Map,V.programs=Ne);let ke=Ne.get(me);if(ke!==void 0){if(V.currentProgram===ke&&V.lightsStateVersion===ue)return cc(x,xe),ke}else xe.uniforms=K.getUniforms(x),x.onBeforeCompile(xe,M),ke=K.acquireProgram(xe,me),Ne.set(me,ke),V.uniforms=xe.uniforms;let Ce=V.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ce.clippingPlanes=ye.uniform),cc(x,xe),V.needsLights=fd(x),V.lightsStateVersion=ue,V.needsLights&&(Ce.ambientLightColor.value=O.state.ambient,Ce.lightProbe.value=O.state.probe,Ce.directionalLights.value=O.state.directional,Ce.directionalLightShadows.value=O.state.directionalShadow,Ce.spotLights.value=O.state.spot,Ce.spotLightShadows.value=O.state.spotShadow,Ce.rectAreaLights.value=O.state.rectArea,Ce.ltc_1.value=O.state.rectAreaLTC1,Ce.ltc_2.value=O.state.rectAreaLTC2,Ce.pointLights.value=O.state.point,Ce.pointLightShadows.value=O.state.pointShadow,Ce.hemisphereLights.value=O.state.hemi,Ce.directionalShadowMap.value=O.state.directionalShadowMap,Ce.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ce.spotShadowMap.value=O.state.spotShadowMap,Ce.spotLightMatrix.value=O.state.spotLightMatrix,Ce.spotLightMap.value=O.state.spotLightMap,Ce.pointShadowMap.value=O.state.pointShadowMap,Ce.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=ke,V.uniformsList=null,ke}function lc(x){if(x.uniformsList===null){let F=x.currentProgram.getUniforms();x.uniformsList=_r.seqWithValue(F.seq,x.uniforms)}return x.uniformsList}function cc(x,F){let B=Pe.get(x);B.outputColorSpace=F.outputColorSpace,B.batching=F.batching,B.batchingColor=F.batchingColor,B.instancing=F.instancing,B.instancingColor=F.instancingColor,B.instancingMorph=F.instancingMorph,B.skinning=F.skinning,B.morphTargets=F.morphTargets,B.morphNormals=F.morphNormals,B.morphColors=F.morphColors,B.morphTargetsCount=F.morphTargetsCount,B.numClippingPlanes=F.numClippingPlanes,B.numIntersection=F.numClipIntersection,B.vertexAlphas=F.vertexAlphas,B.vertexTangents=F.vertexTangents,B.toneMapping=F.toneMapping}function ud(x,F,B,V,O){F.isScene!==!0&&(F=vt),Ge.resetTextureUnits();let ie=F.fog,ue=V.isMeshStandardMaterial?F.environment:null,xe=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ci,me=(V.isMeshStandardMaterial?w:Rt).get(V.envMap||ue),Ne=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,ke=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ce=!!B.morphAttributes.position,$e=!!B.morphAttributes.normal,lt=!!B.morphAttributes.color,yt=qn;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(yt=M.toneMapping);let bt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,tt=bt!==void 0?bt.length:0,Ie=Pe.get(V),kt=d.state.lights;if(re===!0&&(we===!0||x!==y)){let Yt=x===y&&V.id===b;ye.setState(V,x,Yt)}let ot=!1;V.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==kt.state.version||Ie.outputColorSpace!==xe||O.isBatchedMesh&&Ie.batching===!1||!O.isBatchedMesh&&Ie.batching===!0||O.isBatchedMesh&&Ie.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ie.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ie.instancing===!1||!O.isInstancedMesh&&Ie.instancing===!0||O.isSkinnedMesh&&Ie.skinning===!1||!O.isSkinnedMesh&&Ie.skinning===!0||O.isInstancedMesh&&Ie.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ie.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ie.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ie.instancingMorph===!1&&O.morphTexture!==null||Ie.envMap!==me||V.fog===!0&&Ie.fog!==ie||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ye.numPlanes||Ie.numIntersection!==ye.numIntersection)||Ie.vertexAlphas!==Ne||Ie.vertexTangents!==ke||Ie.morphTargets!==Ce||Ie.morphNormals!==$e||Ie.morphColors!==lt||Ie.toneMapping!==yt||Ie.morphTargetsCount!==tt)&&(ot=!0):(ot=!0,Ie.__version=V.version);let pn=Ie.currentProgram;ot===!0&&(pn=_s(V,F,O));let Bi=!1,Kt=!1,yr=!1,gt=pn.getUniforms(),on=Ie.uniforms;if(Me.useProgram(pn.program)&&(Bi=!0,Kt=!0,yr=!0),V.id!==b&&(b=V.id,Kt=!0),Bi||y!==x){Me.buffers.depth.getReversed()?(de.copy(x.projectionMatrix),ru(de),su(de),gt.setValue(C,"projectionMatrix",de)):gt.setValue(C,"projectionMatrix",x.projectionMatrix),gt.setValue(C,"viewMatrix",x.matrixWorldInverse);let $t=gt.map.cameraPosition;$t!==void 0&&$t.setValue(C,nt.setFromMatrixPosition(x.matrixWorld)),ft.logarithmicDepthBuffer&&gt.setValue(C,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&gt.setValue(C,"isOrthographic",x.isOrthographicCamera===!0),y!==x&&(y=x,Kt=!0,yr=!0)}if(O.isSkinnedMesh){gt.setOptional(C,O,"bindMatrix"),gt.setOptional(C,O,"bindMatrixInverse");let Yt=O.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),gt.setValue(C,"boneTexture",Yt.boneTexture,Ge))}O.isBatchedMesh&&(gt.setOptional(C,O,"batchingTexture"),gt.setValue(C,"batchingTexture",O._matricesTexture,Ge),gt.setOptional(C,O,"batchingIdTexture"),gt.setValue(C,"batchingIdTexture",O._indirectTexture,Ge),gt.setOptional(C,O,"batchingColorTexture"),O._colorsTexture!==null&&gt.setValue(C,"batchingColorTexture",O._colorsTexture,Ge));let an=B.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&pe.update(O,B,pn),(Kt||Ie.receiveShadow!==O.receiveShadow)&&(Ie.receiveShadow=O.receiveShadow,gt.setValue(C,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(on.envMap.value=me,on.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&F.environment!==null&&(on.envMapIntensity.value=F.environmentIntensity),Kt&&(gt.setValue(C,"toneMappingExposure",M.toneMappingExposure),Ie.needsLights&&dd(on,yr),ie&&V.fog===!0&&W.refreshFogUniforms(on,ie),W.refreshMaterialUniforms(on,V,G,J,d.state.transmissionRenderTarget[x.id]),_r.upload(C,lc(Ie),on,Ge)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(_r.upload(C,lc(Ie),on,Ge),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&gt.setValue(C,"center",O.center),gt.setValue(C,"modelViewMatrix",O.modelViewMatrix),gt.setValue(C,"normalMatrix",O.normalMatrix),gt.setValue(C,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Yt=V.uniformsGroups;for(let $t=0,Sa=Yt.length;$t<Sa;$t++){let mi=Yt[$t];I.update(mi,pn),I.bind(mi,pn)}}return pn}function dd(x,F){x.ambientLightColor.needsUpdate=F,x.lightProbe.needsUpdate=F,x.directionalLights.needsUpdate=F,x.directionalLightShadows.needsUpdate=F,x.pointLights.needsUpdate=F,x.pointLightShadows.needsUpdate=F,x.spotLights.needsUpdate=F,x.spotLightShadows.needsUpdate=F,x.rectAreaLights.needsUpdate=F,x.hemisphereLights.needsUpdate=F}function fd(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(x,F,B){let V=Pe.get(x);V.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Pe.get(x.texture).__webglTexture=F,Pe.get(x.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:B,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,F){let B=Pe.get(x);B.__webglFramebuffer=F,B.__useDefaultFramebuffer=F===void 0};let pd=C.createFramebuffer();this.setRenderTarget=function(x,F=0,B=0){P=x,A=F,T=B;let V=!0,O=null,ie=!1,ue=!1;if(x){let me=Pe.get(x);if(me.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(C.FRAMEBUFFER,null),V=!1;else if(me.__webglFramebuffer===void 0)Ge.setupRenderTarget(x);else if(me.__hasExternalTextures)Ge.rebindTextures(x,Pe.get(x.texture).__webglTexture,Pe.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Ce=x.depthTexture;if(me.__boundDepthTexture!==Ce){if(Ce!==null&&Pe.has(Ce)&&(x.width!==Ce.image.width||x.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(x)}}let Ne=x.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ue=!0);let ke=Pe.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(ke[F])?O=ke[F][B]:O=ke[F],ie=!0):x.samples>0&&Ge.useMultisampledRTT(x)===!1?O=Pe.get(x).__webglMultisampledFramebuffer:Array.isArray(ke)?O=ke[B]:O=ke,R.copy(x.viewport),z.copy(x.scissor),k=x.scissorTest}else R.copy(Ae).multiplyScalar(G).floor(),z.copy(Ye).multiplyScalar(G).floor(),k=ut;if(B!==0&&(O=pd),Me.bindFramebuffer(C.FRAMEBUFFER,O)&&V&&Me.drawBuffers(x,O),Me.viewport(R),Me.scissor(z),Me.setScissorTest(k),ie){let me=Pe.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+F,me.__webglTexture,B)}else if(ue){let me=Pe.get(x.texture),Ne=F;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,me.__webglTexture,B,Ne)}else if(x!==null&&B!==0){let me=Pe.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,me.__webglTexture,B)}b=-1},this.readRenderTargetPixels=function(x,F,B,V,O,ie,ue,xe=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Pe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ue!==void 0&&(me=me[ue]),me){Me.bindFramebuffer(C.FRAMEBUFFER,me);try{let Ne=x.textures[xe],ke=Ne.format,Ce=Ne.type;if(!ft.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=x.width-V&&B>=0&&B<=x.height-O&&(x.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+xe),C.readPixels(F,B,V,O,ae.convert(ke),ae.convert(Ce),ie))}finally{let Ne=P!==null?Pe.get(P).__webglFramebuffer:null;Me.bindFramebuffer(C.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=function(x,F,B,V,O,ie,ue,xe=0){return vs(this,null,function*(){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Pe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ue!==void 0&&(me=me[ue]),me)if(F>=0&&F<=x.width-V&&B>=0&&B<=x.height-O){Me.bindFramebuffer(C.FRAMEBUFFER,me);let Ne=x.textures[xe],ke=Ne.format,Ce=Ne.type;if(!ft.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $e=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,$e),C.bufferData(C.PIXEL_PACK_BUFFER,ie.byteLength,C.STREAM_READ),x.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+xe),C.readPixels(F,B,V,O,ae.convert(ke),ae.convert(Ce),0);let lt=P!==null?Pe.get(P).__webglFramebuffer:null;Me.bindFramebuffer(C.FRAMEBUFFER,lt);let yt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),yield iu(C,yt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,$e),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ie),C.deleteBuffer($e),C.deleteSync(yt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(x,F=null,B=0){let V=Math.pow(2,-B),O=Math.floor(x.image.width*V),ie=Math.floor(x.image.height*V),ue=F!==null?F.x:0,xe=F!==null?F.y:0;Ge.setTexture2D(x,0),C.copyTexSubImage2D(C.TEXTURE_2D,B,0,0,ue,xe,O,ie),Me.unbindTexture()};let md=C.createFramebuffer(),gd=C.createFramebuffer();this.copyTextureToTexture=function(x,F,B=null,V=null,O=0,ie=null){ie===null&&(O!==0?(Ai("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=O,O=0):ie=0);let ue,xe,me,Ne,ke,Ce,$e,lt,yt,bt=x.isCompressedTexture?x.mipmaps[ie]:x.image;if(B!==null)ue=B.max.x-B.min.x,xe=B.max.y-B.min.y,me=B.isBox3?B.max.z-B.min.z:1,Ne=B.min.x,ke=B.min.y,Ce=B.isBox3?B.min.z:0;else{let an=Math.pow(2,-O);ue=Math.floor(bt.width*an),xe=Math.floor(bt.height*an),x.isDataArrayTexture?me=bt.depth:x.isData3DTexture?me=Math.floor(bt.depth*an):me=1,Ne=0,ke=0,Ce=0}V!==null?($e=V.x,lt=V.y,yt=V.z):($e=0,lt=0,yt=0);let tt=ae.convert(F.format),Ie=ae.convert(F.type),kt;F.isData3DTexture?(Ge.setTexture3D(F,0),kt=C.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Ge.setTexture2DArray(F,0),kt=C.TEXTURE_2D_ARRAY):(Ge.setTexture2D(F,0),kt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);let ot=C.getParameter(C.UNPACK_ROW_LENGTH),pn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Bi=C.getParameter(C.UNPACK_SKIP_PIXELS),Kt=C.getParameter(C.UNPACK_SKIP_ROWS),yr=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,bt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,bt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ne),C.pixelStorei(C.UNPACK_SKIP_ROWS,ke),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ce);let gt=x.isDataArrayTexture||x.isData3DTexture,on=F.isDataArrayTexture||F.isData3DTexture;if(x.isDepthTexture){let an=Pe.get(x),Yt=Pe.get(F),$t=Pe.get(an.__renderTarget),Sa=Pe.get(Yt.__renderTarget);Me.bindFramebuffer(C.READ_FRAMEBUFFER,$t.__webglFramebuffer),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,Sa.__webglFramebuffer);for(let mi=0;mi<me;mi++)gt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Pe.get(x).__webglTexture,O,Ce+mi),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Pe.get(F).__webglTexture,ie,yt+mi)),C.blitFramebuffer(Ne,ke,ue,xe,$e,lt,ue,xe,C.DEPTH_BUFFER_BIT,C.NEAREST);Me.bindFramebuffer(C.READ_FRAMEBUFFER,null),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(O!==0||x.isRenderTargetTexture||Pe.has(x)){let an=Pe.get(x),Yt=Pe.get(F);Me.bindFramebuffer(C.READ_FRAMEBUFFER,md),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,gd);for(let $t=0;$t<me;$t++)gt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,an.__webglTexture,O,Ce+$t):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,an.__webglTexture,O),on?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Yt.__webglTexture,ie,yt+$t):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Yt.__webglTexture,ie),O!==0?C.blitFramebuffer(Ne,ke,ue,xe,$e,lt,ue,xe,C.COLOR_BUFFER_BIT,C.NEAREST):on?C.copyTexSubImage3D(kt,ie,$e,lt,yt+$t,Ne,ke,ue,xe):C.copyTexSubImage2D(kt,ie,$e,lt,Ne,ke,ue,xe);Me.bindFramebuffer(C.READ_FRAMEBUFFER,null),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else on?x.isDataTexture||x.isData3DTexture?C.texSubImage3D(kt,ie,$e,lt,yt,ue,xe,me,tt,Ie,bt.data):F.isCompressedArrayTexture?C.compressedTexSubImage3D(kt,ie,$e,lt,yt,ue,xe,me,tt,bt.data):C.texSubImage3D(kt,ie,$e,lt,yt,ue,xe,me,tt,Ie,bt):x.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ie,$e,lt,ue,xe,tt,Ie,bt.data):x.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ie,$e,lt,bt.width,bt.height,tt,bt.data):C.texSubImage2D(C.TEXTURE_2D,ie,$e,lt,ue,xe,tt,Ie,bt);C.pixelStorei(C.UNPACK_ROW_LENGTH,ot),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,pn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Bi),C.pixelStorei(C.UNPACK_SKIP_ROWS,Kt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,yr),ie===0&&F.generateMipmaps&&C.generateMipmap(kt),Me.unbindTexture()},this.copyTextureToTexture3D=function(x,F,B=null,V=null,O=0){return Ai('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,F,B,V,O)},this.initRenderTarget=function(x){Pe.get(x).__webglFramebuffer===void 0&&Ge.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Ge.setTextureCube(x,0):x.isData3DTexture?Ge.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Ge.setTexture2DArray(x,0):Ge.setTexture2D(x,0),Me.unbindTexture()},this.resetState=function(){A=0,T=0,P=null,Me.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}};var pa=(()=>{class i{constructor(){this.panelState=new Mr,this.panelState$=this.panelState.asObservable()}updatePanelState(t){this.panelState.next(t)}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=Fn({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var B0=["canvas"],ku=(()=>{class i{constructor(t,n,r,s){this.platformId=t,this.router=n,this.sceneControlService=r,this.syncService=s,this.animationId=0,this.signPanels=[],this.raycaster=new ns,this.mouse=new Ze,this.isDragging=!1,this.previousMousePosition={x:0,y:0},this.dragThreshold=5,this.initialPinchDistance=0,this.lastTap=0,this.touchStartPosition={x:0,y:0},this.initialCameraRadiusOnPinch=10,this.cameraTarget=new L(0,1.5,0),this.cameraRadius=10,this.cameraAzimuth=0,this.cameraPolar=Math.PI/2,this.isZooming=!1,this.zoomStartTime=0,this.zoomDuration=1e3,this.initialCameraPosition=new L,this.targetCameraPosition=new L,this.initialCameraTarget=new L,this.targetCameraTarget=new L,this.onMouseDown=o=>{this.isDragging=!0,this.canvasRef.nativeElement.style.cursor="grabbing",this.previousMousePosition={x:o.clientX,y:o.clientY}},this.onMouseUp=()=>{this.isDragging=!1,this.canvasRef.nativeElement.style.cursor="grab"},this.onMouseLeave=()=>{this.isDragging=!1,this.canvasRef.nativeElement.style.cursor="grab"},this.onMouseMove=o=>{if(!this.isDragging)return;let a=o.clientX-this.previousMousePosition.x,l=o.clientY-this.previousMousePosition.y;this.cameraAzimuth-=a*.01,this.cameraPolar-=l*.01,this.cameraPolar=Math.max(.1,Math.min(Math.PI/2-.05,this.cameraPolar)),this.previousMousePosition={x:o.clientX,y:o.clientY},this.updateCameraPosition()},this.onClick=o=>{let a=Math.abs(o.clientX-this.previousMousePosition.x),l=Math.abs(o.clientY-this.previousMousePosition.y);if(a>this.dragThreshold||l>this.dragThreshold)return;this.mouse.x=o.clientX/window.innerWidth*2-1,this.mouse.y=-(o.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);let c=this.signPanels.map(u=>u.mesh),h=this.raycaster.intersectObjects(c,!0);if(h.length>0){let u=h[0].object,f=this.signPanels.find(p=>p.mesh===u);for(;u&&!f;)f=this.signPanels.find(p=>p.mesh===u),u=u.parent;f&&f.label!=="giant"&&f.label!=="main"&&(this.clickSound&&(this.clickSound.isPlaying&&this.clickSound.stop(),this.clickSound.play(),setTimeout(()=>{this.clickSound.isPlaying&&this.clickSound.stop()},2e3),this.ambientSound&&this.ambientSound.isPlaying&&(this.ambientSound.setVolume(.2),this.clickSound.onEnded=()=>{this.ambientSound&&this.ambientSound.setVolume(.5)})),this.sceneControlService.requestZoom("screen"),this.router.navigate([`/${f.label.toLowerCase()}`]))}},this.onMouseWheel=o=>{o.preventDefault(),this.cameraRadius+=o.deltaY*.01,this.cameraRadius=Math.max(3,Math.min(20,this.cameraRadius)),this.updateCameraPosition(),this.zoomSound&&(this.zoomSound.isPlaying&&this.zoomSound.stop(),this.zoomSound.play(),setTimeout(()=>{this.zoomSound.isPlaying&&this.zoomSound.stop()},3e3),this.ambientSound&&this.ambientSound.isPlaying&&(this.ambientSound.setVolume(.2),this.zoomSound.onEnded=()=>{this.ambientSound&&this.ambientSound.setVolume(.5)}))},this.onTouchStart=o=>{o.preventDefault(),this.isDragging=!0;let a=o.touches;a.length===1?(this.previousMousePosition={x:a[0].clientX,y:a[0].clientY},this.touchStartPosition={x:a[0].clientX,y:a[0].clientY}):a.length===2&&(this.initialPinchDistance=this.getPinchDistance(a),this.initialCameraRadiusOnPinch=this.cameraRadius)},this.onTouchMove=o=>{if(o.preventDefault(),!this.isDragging)return;let a=o.touches;if(a.length===1){let l=a[0].clientX-this.previousMousePosition.x,c=a[0].clientY-this.previousMousePosition.y;this.cameraAzimuth-=l*.01,this.cameraPolar-=c*.01,this.cameraPolar=Math.max(.1,Math.min(Math.PI/2-.05,this.cameraPolar)),this.previousMousePosition={x:a[0].clientX,y:a[0].clientY},this.updateCameraPosition()}else if(a.length===2){let l=this.getPinchDistance(a);if(this.initialPinchDistance>0){let c=l/this.initialPinchDistance;this.cameraRadius=this.initialCameraRadiusOnPinch/c,this.cameraRadius=Math.max(3,Math.min(20,this.cameraRadius)),this.updateCameraPosition(),this.zoomSound&&(this.zoomSound.isPlaying&&this.zoomSound.stop(),this.zoomSound.play(),setTimeout(()=>{this.zoomSound.isPlaying&&this.zoomSound.stop()},3e3),this.ambientSound&&this.ambientSound.isPlaying&&(this.ambientSound.setVolume(.2),this.zoomSound.onEnded=()=>{this.ambientSound&&this.ambientSound.setVolume(.5)}))}}},this.onTouchEnd=o=>{o.preventDefault(),this.isDragging=!1,this.initialPinchDistance=0;let a=new Date().getTime(),l=a-this.lastTap;if(l<300&&l>0)this.resetCamera();else if(o.changedTouches.length===1){let c=o.changedTouches[0],h=Math.abs(c.clientX-this.touchStartPosition.x),u=Math.abs(c.clientY-this.touchStartPosition.y);if(h<this.dragThreshold&&u<this.dragThreshold){let f=new MouseEvent("click",{clientX:c.clientX,clientY:c.clientY,bubbles:!0,cancelable:!0});this.onClick(f)}}this.lastTap=a},this.animate=()=>{if(this.animationId=requestAnimationFrame(this.animate),this.isZooming){let a=Date.now()-this.zoomStartTime,l=Math.min(a/this.zoomDuration,1),c=1-Math.pow(1-l,5);this.camera.position.lerpVectors(this.initialCameraPosition,this.targetCameraPosition,c),this.cameraTarget.lerpVectors(this.initialCameraTarget,this.targetCameraTarget,c),this.camera.lookAt(this.cameraTarget),l>=1&&(this.isZooming=!1)}this.animateLeaves(),this.renderer.render(this.scene,this.camera),this.syncPanel()},this.onWindowResize=()=>{!this.camera||!this.renderer||(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight))}}ngOnInit(){if(Tr(this.platformId)){this.initThree(),this.animate();let t=new es;t.load("assets/audio/classical_ambient.mp3",r=>{this.ambientSound=new Ii(this.listener),this.ambientSound.setBuffer(r),this.ambientSound.setLoop(!0),this.ambientSound.setVolume(.5),this.ambientSound.play()}),t.load("assets/audio/mouse_click.mp3",r=>{this.clickSound=new Ii(this.listener),this.clickSound.setBuffer(r),this.clickSound.setVolume(.7)}),t.load("assets/audio/zoom_effect.mp3",r=>{this.zoomSound=new Ii(this.listener),this.zoomSound.setBuffer(r),this.zoomSound.setVolume(.7)});let n=this.canvasRef.nativeElement;n.addEventListener("mousedown",this.onMouseDown),n.addEventListener("mouseup",this.onMouseUp),n.addEventListener("mousemove",this.onMouseMove),n.addEventListener("click",this.onClick),n.addEventListener("mouseleave",this.onMouseLeave),n.addEventListener("wheel",this.onMouseWheel,{passive:!1}),n.addEventListener("touchstart",this.onTouchStart,{passive:!1}),n.addEventListener("touchmove",this.onTouchMove,{passive:!1}),n.addEventListener("touchend",this.onTouchEnd,{passive:!1}),window.addEventListener("resize",this.onWindowResize),this.sceneControlService.zoomRequest$.subscribe(r=>{typeof r=="string"&&r==="screen"?this.zoomToScreen():r instanceof Bt&&this.zoomOnObject(r)}),this.sceneControlService.cameraResetRequest$.subscribe(()=>{this.resetCamera(),this.syncService.updatePanelState({visible:!1,transform:""})})}}ngOnDestroy(){if(Tr(this.platformId)){cancelAnimationFrame(this.animationId);let t=this.canvasRef.nativeElement;this.ambientSound&&this.ambientSound.stop(),this.clickSound&&this.clickSound.stop(),this.zoomSound&&this.zoomSound.stop(),this.listener&&this.listener.context.close(),window.removeEventListener("resize",this.onWindowResize),t.removeEventListener("mousedown",this.onMouseDown),t.removeEventListener("mouseup",this.onMouseUp),t.removeEventListener("mousemove",this.onMouseMove),t.removeEventListener("click",this.onClick),t.removeEventListener("mouseleave",this.onMouseLeave),t.removeEventListener("wheel",this.onMouseWheel),t.removeEventListener("touchstart",this.onTouchStart),t.removeEventListener("touchmove",this.onTouchMove),t.removeEventListener("touchend",this.onTouchEnd)}}zoomOnObject(t){if(this.isZooming)return;this.isZooming=!0,this.zoomStartTime=Date.now(),this.initialCameraPosition.copy(this.camera.position),this.initialCameraTarget.copy(this.cameraTarget);let n=new L;t.getWorldPosition(n),this.targetCameraTarget.copy(n);let r=new L(0,0,-4);r.applyQuaternion(t.quaternion),this.targetCameraPosition.copy(n).add(r)}zoomToScreen(){this.zoomOnObject(this.screenPanel)}resetCamera(){this.cameraRadius=10,this.cameraAzimuth=0,this.cameraPolar=Math.PI/2,this.cameraTarget.set(0,1.5,0),this.updateCameraPosition()}getPinchDistance(t){let n=t[0].clientX-t[1].clientX,r=t[0].clientY-t[1].clientY;return Math.sqrt(n*n+r*r)}updateCameraPosition(){let t=this.cameraTarget.x+this.cameraRadius*Math.sin(this.cameraPolar)*Math.sin(this.cameraAzimuth),n=this.cameraTarget.y+this.cameraRadius*Math.cos(this.cameraPolar),r=this.cameraTarget.z+this.cameraRadius*Math.sin(this.cameraPolar)*Math.cos(this.cameraAzimuth);this.camera.position.set(t,n,r),this.camera.lookAt(this.cameraTarget)}initThree(){this.signPanels=[];let t=this.canvasRef.nativeElement;this.scene=new Gr,this.addSky(),this.addTrees(),this.addBahnhofLampPost(),this.camera=new Ut(75,window.innerWidth/window.innerHeight,.1,1e3),this.listener=new ts,this.camera.add(this.listener),this.updateCameraPosition(),this.addTrainTracks(),this.addTrain(),this.addPlatformDetails(),this.addPlatformRoof(),this.renderer=new da({canvas:t,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=xo;let n=new Zr(4210768,526368,1.3);this.scene.add(n);let r=new Kr(4214880,1.8);r.position.set(10,15,10),r.castShadow=!0,r.shadow.mapSize.width=2048,r.shadow.mapSize.height=2048,this.scene.add(r),this.addAwningLights(),this.addPlatformLights(),this.addStreetLights();let s=new te(new Wt(30,30),new Ee({color:3355460,emissive:34,emissiveIntensity:.5}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,this.scene.add(s),this.createMainBuilding(),this.createScreenPanel(),this.addCharacters(),this.addMenuBoard(),this.addTableDetails(),this.addBusStop(),this.addBus()}syncPanel(){if(!this.screenPanel)return;let t=new L;this.screenPanel.getWorldPosition(t);let n=t.project(this.camera),r=(n.x*.5+.5)*this.canvasRef.nativeElement.clientWidth,s=(n.y*-.5+.5)*this.canvasRef.nativeElement.clientHeight;this.isZooming||this.camera.position.distanceTo(this.screenPanel.position)<5?n.z<1?this.syncService.updatePanelState({visible:!0,transform:`translate(-50%, -50%) translate(${r}px, ${s}px)`}):this.syncService.updatePanelState({visible:!1,transform:""}):this.syncService.updatePanelState({visible:!1,transform:""})}createScreenPanel(){let t=new Wt(8,5),n=new Gt({visible:!1});this.screenPanel=new te(t,n),this.screenPanel.position.set(0,1.5,-2.04),this.scene.add(this.screenPanel)}addBus(){let t=new pt,n=new Ee({color:21922,metalness:.7,roughness:.4}),r=new Ee({color:16777215,metalness:.2,roughness:.1,transparent:!0,opacity:.3}),s=new Ee({color:2236962,metalness:.1}),o=new te(new He(8,2.5,2.2),n);o.position.y=1.5,o.castShadow=!1,t.add(o);let a=new Mt(.5,.5,.3,32);a.rotateX(Math.PI/2),[-2.5,2.5].forEach(E=>{[-1.1,1.1].forEach(S=>{let M=new te(a,s);M.position.set(E,.5,S),t.add(M)})});let c=new te(new He(6,1.2,.1),r);c.position.set(0,2,1.1),t.add(c);let h=c.clone();h.position.z=-1.1,t.add(h);let u=new te(new He(.1,1.2,2),r);u.position.set(3.95,2,0),u.rotation.y=Math.PI/12,t.add(u),[-.8,.8].forEach(E=>{let S=new te(new Mt(.2,.15,.1),new Ee({color:16777215,emissive:16777215,emissiveIntensity:1.5}));S.position.set(3.95,1,E),S.rotation.z=Math.PI/2,t.add(S);let M=new hr(16777215,4,20,Math.PI/5,.5,2);M.position.set(4,1,E),M.target.position.set(10,1,E),t.add(M),t.add(M.target)});let f=this.createBusNumberTexture(),p=new Gt({map:f}),g=new te(new Wt(1,.4),p);g.position.set(4.01,2.5,0),g.rotation.y=Math.PI/2,t.add(g);let v=this.createRMVLogoTexture(),m=new Gt({map:v,transparent:!0}),d=new te(new Wt(1.5,.5),m);d.position.set(-1,1.5,1.11),t.add(d),t.position.set(10,0,-5),t.rotation.y=-Math.PI/2,this.scene.add(t)}createBusNumberTexture(){let t=document.createElement("canvas");t.width=256,t.height=64;let n=t.getContext("2d");n.fillStyle="black",n.fillRect(0,0,t.width,t.height),n.font='bold 45px "Courier New", Courier, monospace',n.fillStyle="#FFA500",n.textAlign="center",n.textBaseline="middle",n.fillText("801",t.width/2,t.height/2);let r=new An(t);return r.needsUpdate=!0,r}createRMVLogoTexture(){let t=document.createElement("canvas");t.width=512,t.height=128;let n=t.getContext("2d");n.fillStyle="white",n.fillRect(0,0,t.width,t.height),n.fillStyle="#D9000D",n.fillRect(20,20,60,88),n.fillStyle="#009650",n.fillRect(90,20,60,88),n.fillStyle="#006AB3",n.fillRect(160,20,60,88),n.font="bold 80px sans-serif",n.fillStyle="black",n.textAlign="left",n.textBaseline="middle",n.fillText("RMV",250,t.height/2);let r=new An(t);return r.needsUpdate=!0,r}addBusStop(){let t=new pt,n=new Ee({color:4473924,metalness:.9,roughness:.5}),r=new Ee({color:16777215,metalness:.1,roughness:.1,transparent:!0,opacity:.2}),s=new te(new He(4,.1,2),n);s.position.y=2.5,s.castShadow=!0,t.add(s);let o=new te(new He(4,2.4,.05),r);o.position.set(0,1.25,-.9),t.add(o);let a=new te(new He(.05,2.4,2),r);a.position.set(-1.95,1.25,0),t.add(a);let l=16767129,c=new Wn(l,3,8,2);c.position.set(0,2.4,-.4),c.castShadow=!0,t.add(c);let h=new te(new He(1.5,.05,.2),new Ee({color:3355443,emissive:l,emissiveIntensity:1}));h.position.copy(c.position),t.add(h);let u=this.createBench();u.scale.set(.8,.8,.8),u.position.set(0,.2,-.5),t.add(u);let f=new te(new Mt(.05,.05,3,16),n);f.position.set(2.5,1.5,0),f.castShadow=!0,t.add(f);let p=new cr(.4,32),g=this.createBusSignTexture(),v=new Gt({map:g}),m=new te(p,v);m.position.set(2.5,3.2,0),t.add(m);let d=this.createBusSignTexture(!0),E=new Gt({map:d}),S=new te(p,E);S.position.copy(m.position),S.rotation.y=Math.PI,t.add(S),t.position.set(14,0,-5),t.rotation.y=-Math.PI/2,this.scene.add(t)}createBusSignTexture(t=!1){let n=document.createElement("canvas");n.width=256,n.height=256;let r=n.getContext("2d");r.fillStyle="#FFD700",r.beginPath(),r.arc(128,128,128,0,Math.PI*2),r.fill(),r.strokeStyle="black",r.lineWidth=20,r.beginPath(),r.arc(128,128,118,0,Math.PI*2),r.stroke(),t&&(r.translate(n.width,0),r.scale(-1,1)),r.font="bold 150px sans-serif",r.fillStyle="black",r.textAlign="center",r.textBaseline="middle",r.fillText("H",128,128);let s=new An(n);return s.needsUpdate=!0,s}createMainBuilding(){let t=new pt,n=new Ee({color:9132587}),r=new te(new He(6,4,.1),n);r.position.set(0,2,-2),r.castShadow=!0,r.receiveShadow=!0,t.add(r);let s=new te(new He(.1,4,4),n);s.position.set(3,2,0),s.castShadow=!0,s.receiveShadow=!0,t.add(s);let o=new te(new Xr(4.5,2,4),new Ee({color:5967374}));o.rotation.y=Math.PI/4,o.position.y=5,o.castShadow=!0,t.add(o);let a=new te(new Wt(5.8,3.8),new Ee({color:13808780}));a.rotation.x=-Math.PI/2,a.position.y=.01,a.receiveShadow=!0,t.add(a);let l=new te(new He(3,1,.8),new Ee({color:9127187}));l.position.set(0,.5,1.8),l.castShadow=!0,l.receiveShadow=!0,t.add(l);let c=6,h=1.5,u=.1,f=new He(c,u,h),p=new Ee({color:16777215,transparent:!0,opacity:.5,metalness:.2,roughness:.4}),g=new te(f,p);g.position.set(0,3.2,2+h/2),g.rotation.x=Math.PI/10,g.castShadow=!0,g.receiveShadow=!0,t.add(g);let v=new Mt(.05,.05,3.2),m=new Ee({color:13421772,metalness:.9}),d=new te(v,m);d.position.set(-c/2+.1,1.6,2.3),d.castShadow=!0,t.add(d);let E=new te(v,m);E.position.set(c/2-.1,1.6,2.3),E.castShadow=!0,t.add(E);let S=new te(new Mt(.7,.7,.1,16),new Ee({color:7032635}));S.position.set(0,1,0),S.castShadow=!0,S.receiveShadow=!0,t.add(S);let M=new Ee({color:6636321});[-.8,.8].forEach(X=>{let H=new te(new He(.4,.4,.4),M);H.position.set(X,.2,0),H.castShadow=!0,H.receiveShadow=!0,t.add(H)});let D=new Mt(.05,.05,.3,16);[16711680,65280].forEach((X,H)=>{let J=new te(D,new Ee({color:X}));J.position.set(H===0?-.2:.2,1.15,H===0?-.1:.2),J.castShadow=!0,t.add(J)});for(let X=0;X<5;X++){let H=new te(new He(.05,.01,.01),new Ee({color:16776960}));H.position.set(-.1+X*.05,1.16,0),H.castShadow=!0,t.add(H)}let A=new te(new He(.5,1.5,.3),new Ee({color:3355443}));A.position.set(2.7,1,1.6),A.castShadow=!0,t.add(A);let T=new Ee({color:8900331,transparent:!0,opacity:.5,roughness:.1,metalness:.9}),P=new Ee({color:4473924}),b=()=>{let X=new pt,H=new te(new Wt(1,1.2),T);X.add(H);let J=new te(new He(1.1,.05,.1),P);J.position.y=.6,X.add(J);let G=J.clone();G.position.y=-.6,X.add(G);let oe=new te(new He(.05,1.2,.1),P);oe.position.x=-.5,X.add(oe);let fe=oe.clone();return fe.position.x=.5,X.add(fe),X},y=b();y.position.set(-1.5,2.5,-1.95),t.add(y);let R=b();R.position.set(1.5,2.5,-1.95),t.add(R);let z=new Ee({color:6044193}),k=new te(new He(.1,2,1),z);k.position.set(2.95,1,-.5),t.add(k);let q=new te(new Mn(.05,8,8),new Ee({color:16766720,metalness:1}));q.position.set(2.85,1,-.2),t.add(q),this.scene.add(t)}addCharacters(){let t=new Ee({color:2003199}),n=()=>{let o=new pt,a=new te(new He(.5,.8,.3),t);a.castShadow=!0,o.add(a);let l=new te(new He(.3,.3,.3),t);return l.position.y=.6,l.castShadow=!0,o.add(l),o},r=n();r.position.set(-.8,.8,0),this.scene.add(r);let s=n();s.position.set(.8,.8,0),s.rotation.y=Math.PI,this.scene.add(s)}addMenuBoard(){let t=new pt,n=new Ee({color:2236962,metalness:.9,roughness:.4}),r=new te(new Mt(.8,.8,.05,32),n);r.castShadow=!0,t.add(r);let s=new te(new Mt(.08,.08,1.5,16),n);s.position.y=.75,s.castShadow=!0,t.add(s);let o=new pt;o.position.y=1.5+.9,o.rotation.x=-Math.PI/12,t.add(o);let a=new te(new He(2.5,1.8,.08),n);a.castShadow=!0,o.add(a);let l=new Ee({color:0,emissive:1118481,emissiveIntensity:1.5}),c=new te(new Wt(2.4,1.7),l);c.position.z=.045,o.add(c);let h=[{label:"Profil",text:"About Me"},{label:"Daten",text:"Data"},{label:"Skills",text:"Skills"},{label:"SoftSkills",text:"Soft Skills"},{label:"Projekte",text:"Projects"},{label:"Akademisch",text:"Academic"},{label:"Sprachen",text:"Languages"},{label:"Erfahrung",text:"Experience"}],u=.18,f=.02,g=(h.length*(u+f)-f)/2-u/2;h.forEach((v,m)=>{let d=A=>{let T=document.createElement("canvas");T.width=512,T.height=64;let P=T.getContext("2d");P.fillStyle="#1a1a1a",P.fillRect(0,0,T.width,T.height),P.font="bold 40px sans-serif",P.fillStyle="#00bfff",P.textAlign="center",P.textBaseline="middle",P.fillText(A,T.width/2,T.height/2);let b=new An(T);return b.needsUpdate=!0,b},E=new Wt(2.2,u),S=new Gt({map:d(v.text),transparent:!0}),M=new te(E,S),D=g-m*(u+f);M.position.set(0,D,.05),o.add(M),this.signPanels.push({mesh:M,label:v.label})}),t.position.set(4.3,0,2.2),t.scale.set(.8,.8,.8),this.scene.add(t)}addTableDetails(){let t=new Ee({color:15658734,roughness:.3}),n=new Mt(.08,.1,.15,16),r=new Ee({color:13421772,roughness:.3}),s=new Mt(.15,.15,.02,16),o=new te(n,t);o.position.set(-.2,1.08,.1),this.scene.add(o);let a=new te(s,r);a.position.set(.2,1.01,-.1),this.scene.add(a)}addAwningLights(){let t=new pt,n=16767129,r=9,s=8,o=2,a=[-2,0,2];for(let l of a){let c=new Wn(n,r,s,o);c.position.set(l,3,2.5),c.castShadow=!0,t.add(c);let h=new te(new Mn(.1,8,8),new Ee({color:5592405,emissive:n,emissiveIntensity:1}));h.position.copy(c.position),t.add(h)}this.scene.add(t)}addPlatformLights(){let t=new pt,n=16767129,r=4,s=8,o=2,a=[-7,0,7];for(let l of a){let c=new Wn(n,r,s,o);c.position.set(-12.5,3.2,l),c.castShadow=!0,t.add(c);let h=new te(new He(.2,.1,.2),new Ee({color:3355443,emissive:n,emissiveIntensity:1}));h.position.copy(c.position),t.add(h)}this.scene.add(t)}addStreetLights(){let t=[new L(12,0,12),new L(12,0,-12),new L(-10,0,12),new L(-10,0,-12)],n=new Ee({color:3355443,metalness:.8}),r=new Ee({color:16777215,emissive:16767129,emissiveIntensity:2}),s=o=>{let a=new pt,l=new Mt(.1,.15,4,16),c=new te(l,n);c.position.y=2,c.castShadow=!0,a.add(c);let h=new He(1,.1,.1),u=new te(h,n);u.position.set(.5,4,0),u.castShadow=!0,a.add(u);let f=new Mn(.2,16,16),p=new te(f,r);p.position.set(1,3.8,0),a.add(p);let g=new Wn(16767129,7.5,15,2);g.position.copy(p.position),g.castShadow=!0,a.add(g),a.position.copy(o),a.rotation.y=Math.atan2(o.x,o.z)+Math.PI,this.scene.add(a)};t.forEach(o=>s(o))}addTrainTracks(){let t=new pt,n=new He(3,.2,15),r=new Ee({color:8947848}),s=new te(n,r);s.position.set(-12.5,.1,0),s.receiveShadow=!0,t.add(s);let o=new He(.2,.05,2),a=new Ee({color:7032635});for(let f=-15;f<15;f+=.8){let p=new te(o,a);p.position.set(-14.5,.05,f),p.receiveShadow=!0,t.add(p)}let l=new He(.08,.08,30),c=new Ee({color:4473924,metalness:.8,roughness:.5}),h=new te(l,c);h.position.set(-14.2,.12,0),h.castShadow=!0,t.add(h);let u=new te(l,c);u.position.set(-14.8,.12,0),u.castShadow=!0,t.add(u),this.scene.add(t)}addTrain(){let t=new pt;t.position.set(-14.5,.35,0),t.rotation.y=Math.PI/2;let n=14360358,r=new Ee({color:n,metalness:.8,roughness:.4}),s=new Ee({color:13421772,metalness:.6,roughness:.5}),o=new Ee({color:3355443,metalness:.9,roughness:.8}),a=new Ee({color:1118481,metalness:1,roughness:.2}),l=new Mt(.25,.25,1.2,16);l.rotateX(Math.PI/2);let c=new pt,h=new te(new He(4,1.2,1),r);h.position.y=.6,h.castShadow=!0,c.add(h);let u=this.createDBLogoTexture(),f=new Gt({map:u,transparent:!0}),p=new te(new Wt(.8,.8),f);p.position.set(0,.7,.51),c.add(p);let g=new te(new He(1.5,.8,1),new Ee({color:4473924}));g.position.set(-1.25,1.4,0),g.castShadow=!0,c.add(g);let v=new te(new He(.05,.5,.8),a);v.position.set(-1.95,1.4,0),c.add(v);let m=new te(new Mt(.15,.1,.1),new Ee({color:16777215,emissive:16777215,emissiveIntensity:2}));m.position.set(-2,.8,0),m.rotation.z=Math.PI/2,c.add(m);let d=new hr(16777215,5,20,Math.PI/6,.5,2);d.position.set(-2,.8,0),d.target.position.set(-10,.8,0),c.add(d),c.add(d.target);for(let T=0;T<2;T++){let P=new te(l,o);P.position.set(-1+T*2,0,0),c.add(P)}c.position.x=-10,t.add(c);let E=5,S=1.1,M=1.4,D=.5,A=-10+4/2+D+E/2;for(let T=0;T<2;T++){let P=new pt,b=new te(new He(E,M,S),s);b.position.y=.7,b.castShadow=!0,P.add(b);for(let y=-1;y<=1;y+=2)for(let R=-1.5;R<=1.5;R+=1){let z=new te(new He(.8,.5,.05),a);z.position.set(R,.9,S/2*y),P.add(z)}for(let y=0;y<2;y++){let R=new te(l,o);R.position.set(-1.5+y*3,0,0),P.add(R)}P.position.x=A,t.add(P),A+=E+D}this.scene.add(t)}createDBLogoTexture(){let t=document.createElement("canvas");t.width=256,t.height=256;let n=t.getContext("2d");n.fillStyle="white",n.fillRect(0,0,t.width,t.height),n.font="bold 180px sans-serif",n.fillStyle="#DB1F26",n.textAlign="center",n.textBaseline="middle",n.fillText("DB",t.width/2,t.height/2);let r=new An(t);return r.needsUpdate=!0,r}createBench(){let t=new pt,n=new Ee({color:8411718}),r=new te(new He(2,.1,.4),n);r.position.y=.5,r.castShadow=!0,t.add(r);let s=new te(new He(2,.5,.1),n);s.position.set(0,.8,-.15),s.castShadow=!0,t.add(s);let o=new te(new He(.1,.5,.4),n);o.position.set(-.9,.25,0),o.castShadow=!0,t.add(o);let a=o.clone();return a.position.x=.9,t.add(a),t}addPlatformDetails(){let t=this.createBench();t.position.set(-12.2,.2,-4),t.rotation.y=-Math.PI/2,this.scene.add(t);let n=this.createBench();n.position.set(-12.2,.2,4),n.rotation.y=-Math.PI/2,this.scene.add(n)}addPlatformRoof(){let t=new pt,n=new Ee({color:6710886,metalness:.5}),r=new Ee({color:5592405,metalness:.8}),s=new te(new He(4,.2,16),n);s.position.set(-12.5,3.5,0),s.castShadow=!0,s.receiveShadow=!0,t.add(s);let o=new Mt(.1,.1,3.3,16),a=[-6,0,6];for(let l of a){let c=new te(o,r);c.position.set(-11.5,1.85,l),c.castShadow=!0,t.add(c);let h=new te(o,r);h.position.set(-13.5,1.85,l),h.castShadow=!0,t.add(h)}this.scene.add(t)}addTrees(){let t=new pt,n=new Mt(.1,.1,1),r=new Ee({color:9132587}),s=new Mn(.5,8,8),o=new Ee({color:2263842});[[-5,.5,-5],[5,.5,-5],[5,.5,5]].forEach(l=>{let c=new te(n,r);c.position.set(l[0],l[1]/2,l[2]);let h=new te(s,o);h.position.set(l[0],l[1]+.5,l[2]),t.add(c),t.add(h)}),this.scene.add(t)}animateLeaves(){let t=Date.now()*.001;this.scene.traverse(n=>{if(n instanceof te&&n.geometry instanceof Mn&&!Array.isArray(n.material)){let r=n.material;r.color&&r.color.getHex()===2263842&&(n.position.x+=Math.sin(t+n.position.z)*.001,n.position.z+=Math.cos(t+n.position.x)*.001)}})}addSky(){let t=new Mn(100,32,32),n=new rn({uniforms:{},vertexShader:`
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition).y;
          gl_FragColor = vec4(mix(vec3(0.0, 0.0, 0.0), vec3(0.05, 0.0, 0.1), smoothstep(0.0, 0.5, h)), 1.0);
        }
      `,side:Vt,depthWrite:!1}),r=new te(t,n);this.scene.add(r)}addBahnhofLampPost(){let t=new pt,n=new te(new Mt(.08,.08,5,16),new Ee({color:2236962,metalness:1}));n.position.y=2.5,t.add(n);let r=new jr().load("assets/clock-bahnhof.jpg"),s=new Gt({map:r,side:un}),o=new te(new cr(.5,32),s);o.position.set(0,3.8,.48),t.add(o);let a=new te(new He(.05,.05,.5),new Ee({color:4473924}));a.position.set(0,3.8,.25),t.add(a);let l=.5;[-.25,.25].forEach(f=>{let p=new te(new Mt(.015,.015,l),new Ee({color:8947848}));p.rotation.z=Math.PI/2,p.position.set(f,4.6,0),t.add(p);let g=new te(new Mt(.01,.01,.2),new Ee({color:3355443}));g.position.set(f+(f>0?l/2:-l/2),4.5,0),t.add(g);let v=new te(new Mn(.15,16,16),new Ee({color:16777164,emissive:16764040,emissiveIntensity:.9}));v.position.set(f+(f>0?l/2:-l/2),4.3,0),t.add(v);let m=new Wn(16764040,.6,6);m.position.copy(v.position),t.add(m)});let c=["Profil","Daten","Skills","SoftSkills","Projekte","Akademisch","Sprachen","Erfahrung"],h=[Math.PI/2,Math.PI/3,-Math.PI/2,-Math.PI/3,0,Math.PI/4,-Math.PI/4,Math.PI],u=(f,p=!1)=>{let g=document.createElement("canvas");g.width=512,g.height=128;let v=g.getContext("2d");v.fillStyle="#ffffff",v.fillRect(0,0,g.width,g.height),v.font="bold 48px sans-serif",v.textAlign="center",v.textBaseline="middle",v.fillStyle="#000000",p&&(v.translate(g.width,0),v.scale(-1,1)),v.fillText(f,g.width/2,g.height/2);let m=new An(g);return m.needsUpdate=!0,m};c.forEach((f,p)=>{let g=new Wt(1.4,.3),v=new Gt({map:u(f),side:cn}),m=new Gt({map:u(f,!0),side:cn}),d=new te(g,v);d.position.set(0,3.3-p*.4,0),d.rotation.y=h[p],d.translateX(.7),t.add(d);let E=new te(g,m);E.position.copy(d.position),E.rotation.copy(d.rotation),E.rotateY(Math.PI),t.add(E),this.signPanels.push({mesh:d,label:f})}),t.position.set(-5.5,0,5),this.scene.add(t)}static{this.\u0275fac=function(n){return new(n||i)(Ue(zi),Ue(Ts),Ue(Ct),Ue(pa))}}static{this.\u0275cmp=St({type:i,selectors:[["app-three-scene"]],viewQuery:function(n,r){if(n&1&&xc(B0,7),n&2){let s;yc(s=Mc())&&(r.canvasRef=s.first)}},standalone:!0,features:[wt],decls:2,vars:0,consts:[["canvas",""],[2,"cursor","grab"]],template:function(n,r){n&1&&_e(0,"canvas",1,0)},styles:["canvas[_ngcontent-%COMP%]{width:100%;height:100vh;display:block}"]})}}return i})();var qu=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(Ue(Ca),Ue(Ta))}}static{this.\u0275dir=Vi({type:i})}}return i})(),V0=(()=>{class i extends qu{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=_c(i)))(r||i)}})()}static{this.\u0275dir=Vi({type:i,features:[wr]})}}return i})(),Yu=new gi("");var z0={provide:Yu,useExisting:wa(()=>va),multi:!0};function H0(){let i=Ra()?Ra().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var G0=new gi(""),va=(()=>{class i extends qu{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!H0())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(Ue(Ca),Ue(Ta),Ue(G0,8))}}static{this.\u0275dir=Vi({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&st("input",function(o){return r._handleInput(o.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(o){return r._compositionEnd(o.target.value)})},features:[Aa([z0]),wr]})}}return i})();var W0=new gi(""),X0=new gi("");function ju(i){return i!=null}function Zu(i){return Cc(i)?uc(i):i}function $u(i){let e={};return i.forEach(t=>{e=t!=null?mn(mn({},e),t):e}),Object.keys(e).length===0?null:e}function Ju(i,e){return e.map(t=>t(i))}function q0(i){return!i.validate}function Ku(i){return i.map(e=>q0(e)?e:t=>e.validate(t))}function Y0(i){if(!i)return null;let e=i.filter(ju);return e.length==0?null:function(t){return $u(Ju(t,e))}}function Qu(i){return i!=null?Y0(Ku(i)):null}function j0(i){if(!i)return null;let e=i.filter(ju);return e.length==0?null:function(t){let n=Ju(t,e).map(Zu);return fc(n).pipe(xs($u))}}function ed(i){return i!=null?j0(Ku(i)):null}function Bu(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function Z0(i){return i._rawValidators}function $0(i){return i._rawAsyncValidators}function Jl(i){return i?Array.isArray(i)?i:[i]:[]}function ga(i,e){return Array.isArray(i)?i.includes(e):i===e}function Vu(i,e){let t=Jl(e);return Jl(i).forEach(r=>{ga(t,r)||t.push(r)}),t}function zu(i,e){return Jl(e).filter(t=>!ga(i,t))}var _a=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Qu(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ed(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},Kl=class extends _a{get formDirective(){return null}get path(){return null}},ms=class extends _a{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},Ql=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},J0={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},NM=jn(mn({},J0),{"[class.ng-submitted]":"isSubmitted"}),td=(()=>{class i extends Ql{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(Ue(ms,2))}}static{this.\u0275dir=Vi({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&Es("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[wr]})}}return i})();var fs="VALID",ma="INVALID",xr="PENDING",ps="DISABLED";function K0(i){return(xa(i)?i.validators:i)||null}function Q0(i){return Array.isArray(i)?Qu(i):i||null}function e_(i,e){return(xa(e)?e.asyncValidators:i)||null}function t_(i){return Array.isArray(i)?ed(i):i||null}function xa(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}var ec=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===fs}get invalid(){return this.status===ma}get pending(){return this.status==xr}get disabled(){return this.status===ps}get enabled(){return this.status!==ps}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Vu(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Vu(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(zu(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(zu(e,this._rawAsyncValidators))}hasValidator(e){return ga(this._rawValidators,e)}hasAsyncValidator(e){return ga(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=xr,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=ps,this.errors=null,this._forEachChild(n=>{n.disable(jn(mn({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(jn(mn({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(n=>n(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=fs,this._forEachChild(n=>{n.enable(jn(mn({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(jn(mn({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===fs||this.status===xr)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?ps:fs}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=xr,this._hasOwnPendingAsyncValidator=!0;let t=Zu(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new Ss,this.statusChanges=new Ss}_calculateStatus(){return this._allControlsDisabled()?ps:this.errors?ma:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(xr)?xr:this._anyControlsHaveStatus(ma)?ma:fs}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){xa(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Q0(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=t_(this._rawAsyncValidators)}};var tc=new gi("CallSetDisabledState",{providedIn:"root",factory:()=>ya}),ya="always";function n_(i,e){return[...e.path,i]}function i_(i,e,t=ya){s_(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),o_(i,e),l_(i,e),a_(i,e),r_(i,e)}function Hu(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function r_(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function s_(i,e){let t=Z0(i);e.validator!==null?i.setValidators(Bu(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=$0(i);e.asyncValidator!==null?i.setAsyncValidators(Bu(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();Hu(e._rawValidators,r),Hu(e._rawAsyncValidators,r)}function o_(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&nd(i,e)})}function a_(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&nd(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function nd(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function l_(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function c_(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function h_(i){return Object.getPrototypeOf(i.constructor)===V0}function u_(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(s=>{s.constructor===va?t=s:h_(s)?n=s:r=s}),r||n||t||null}function Gu(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function Wu(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var d_=class extends ec{constructor(e=null,t,n){super(K0(t),e_(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),xa(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Wu(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Gu(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Gu(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Wu(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var f_={provide:ms,useExisting:wa(()=>nc)},Xu=Promise.resolve(),nc=(()=>{class i extends ms{constructor(t,n,r,s,o,a){super(),this._changeDetectorRef=o,this.callSetDisabledState=a,this.control=new d_,this._registered=!1,this.name="",this.update=new Ss,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=u_(this,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),c_(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){i_(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Xu.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,r=n!==0&&Rc(n);Xu.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?n_(t,this._parent):[t]}static{this.\u0275fac=function(n){return new(n||i)(Ue(Kl,9),Ue(W0,10),Ue(X0,10),Ue(Yu,10),Ue(Ac,8),Ue(tc,8))}}static{this.\u0275dir=Vi({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[Ms.None,"disabled","isDisabled"],model:[Ms.None,"ngModel","model"],options:[Ms.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[Aa([f_]),wr,gc]})}}return i})();var p_=new gi("");var id=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=bs({type:i})}static{this.\u0275inj=ys({})}}return i})();var Ma=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:tc,useValue:t.callSetDisabledState??ya}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=bs({type:i})}static{this.\u0275inj=ys({imports:[id]})}}return i})(),rd=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:p_,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:tc,useValue:t.callSetDisabledState??ya}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=bs({type:i})}static{this.\u0275inj=ys({imports:[id]})}}return i})();var sd=(()=>{class i{constructor(t,n,r,s){this.languageService=t,this.sceneControlService=n,this.router=r,this.http=s,this.currentLanguage="de",this.platformId=Ea(zi),this.conversationHistory=[],this.qaRules=[{keywords:{de:["hallo","guten tag","hey","bonjour"],en:["hello","hi","hey"]},answer:{de:"Hallo! Ich bin der virtuelle Avatar von Danielou. Fragen Sie mich alles \xFCber sein Profil.",en:"Hello! I am Danielou's virtual avatar. Ask me anything about his profile."}},{keywords:{de:["verf\xFCgbarkeit","anfangen","starttermin","eintrittsdatum"],en:["availability","start date","when can you start"]},answer:{de:"Ich schlie\xDFe mein Studium in K\xFCrze ab und bin daher flexibel. F\xFCr eine Vollzeitstelle stehe ich ab dem 01.01.2026 zur Verf\xFCgung.",en:"I am finishing my studies soon and am therefore flexible. I will be available for a full-time position from January 1st, 2026."}},{keywords:{de:["warum sie","einstellen","nicht andere","vorteile","sollen wir sie","unterscheidet sie"],en:["why you","hire","advantages","what sets you apart"]},answer:{de:"Ich glaube, meine St\xE4rke liegt in der Kombination aus soliden technischen F\xE4higkeiten in C++ und Java, meiner praktischen Industrieerfahrung und meiner gro\xDFen Lernbereitschaft. Ich entwickle nicht nur Code, sondern robuste und durchdachte L\xF6sungen f\xFCr komplexe Probleme.",en:"I believe my strength lies in the combination of solid technical skills in C++ and Java, my practical industry experience, and my strong willingness to learn. I don't just write code; I develop robust and well-thought-out solutions for complex problems."}},{keywords:{de:["schw\xE4chen","nachteile"],en:["weakness","weaknesses"]},answer:{de:"Meine gr\xF6\xDFte Schw\xE4che ist wahrscheinlich meine Ungeduld, wenn es darum geht, Probleme zu l\xF6sen. Ich habe jedoch gelernt, dies in eine St\xE4rke umzuwandeln, indem ich diese Energie in eine gr\xFCndliche und strukturierte Analyse lenke, um die beste L\xF6sung zu finden, nicht nur die schnellste.",en:"My biggest weakness is probably my impatience when it comes to solving problems. However, I've learned to turn this into a strength by channeling that energy into thorough and structured analysis to find the best solution, not just the fastest one."}},{keywords:{de:["mensch","person","pers\xF6nlichkeit","\xFCber ihre person","\xFCber dich erz\xE4hlen","beschreiben sie sich"],en:["person","personality","describe yourself","tell me about yourself"]},answer:{de:"Als Mensch bin ich neugierig, aufgeschlossen und zielstrebig. Ich gehe gerne auf Leute zu und glaube, dass man durch Teamarbeit und offene Kommunikation die besten Ergebnisse erzielt. In meiner Freizeit lerne ich st\xE4ndig dazu, sei es durch Lesen oder kleine Programmierprojekte.",en:"As a person, I am curious, open-minded, and determined. I enjoy approaching people and believe that teamwork and open communication yield the best results. In my free time, I am constantly learning, whether through reading or small programming projects."}},{keywords:{de:["wo arbeiten sie","arbeitgeber","jetzige position"],en:["where do you work","current employer"]},answer:{de:"Derzeit unterst\xFCtze ich die Forschung und Entwicklung an der Technischen Hochschule Mittelhessen und arbeite als Dolmetscher f\xFCr das BAMF. Im Sommer 2025 ist zudem ein Praktikum bei der Schunk Group geplant. M\xF6chten Sie mehr \xFCber meine Berufserfahrung erfahren?",en:"I currently support research and development at the THM and work as an interpreter for the BAMF. An internship at the Schunk Group is also planned for summer 2025. Would you like to know more about my work experience?"},navigationTarget:"erfahrung"},{keywords:{de:["erfahrung","berufserfahrung","arbeit","werdegang","karriere","laufbahn"],en:["experience","experiences","work","career","background"]},answer:{de:"Ich habe praktische Erfahrungen in der Softwareentwicklung bei Continental und der THM sowie als Dolmetscher gesammelt. Diese diversen Rollen haben meine technischen F\xE4higkeiten und meine Kommunikationsst\xE4rke verbessert. Soll ich Sie zu diesem Abschnitt f\xFChren?",en:"I have gained practical experience in software development at Continental and THM, as well as an interpreter. These diverse roles have improved my technical abilities and communication skills. Shall I guide you to that section?"},navigationTarget:"erfahrung"},{keywords:{de:["studium","akademisch","bildung","hochschule","schulabschluss","ausbildung","qualifikationen"],en:["education","academic","university","college","degree","qualifications"]},answer:{de:"Ich absolviere derzeit meinen Bachelor in Ingenieur-Informatik an der Technischen Hochschule Mittelhessen. Mein Abitur mit Schwerpunkt Naturwissenschaften habe ich in Kamerun gemacht. Soll ich Ihnen meinen akademischen Werdegang zeigen?",en:"I am currently completing my Bachelor's in Engineering & Computer Science at the THM - University of Applied Sciences. I completed my high school diploma in Cameroon with a focus on science. Shall I show you my academic journey?"},navigationTarget:"akademisch"},{keywords:{de:["projekte","portfolio","eigene arbeiten"],en:["projects","portfolio","personal projects"]},answer:{de:"Ich habe an mehreren spannenden Projekten gearbeitet, darunter ein SmartLab System mit STM32 und MQTT und ein ExamBuilder in Java mit Gemini API. M\xF6chten Sie die Projektdetails sehen?",en:"I have worked on several exciting projects, including a SmartLab System with STM32 and MQTT, and an ExamBuilder in Java with Gemini API integration. Would you like to see the project details?"},navigationTarget:"projekte"},{keywords:{de:["kompetenzen","skills","f\xE4higkeiten","technologien","c++","java","python","kenntnisse","wissen"],en:["skills","competencies","technologies","c++","java","python","knowledge"]},answer:{de:"Meine Kernkompetenzen liegen in C++ und Java. Ich habe auch Erfahrung mit Python, SQL, Web-Technologien und Embedded-Protokollen wie I2C und SPI. Wollen Sie eine detaillierte \xDCbersicht?",en:"My core competencies are in C++ and Java. I also have experience with Python, SQL, web technologies, and embedded protocols like I2C and SPI. Would you like a detailed overview?"},navigationTarget:"skills"},{keywords:{de:["soft skills","st\xE4rken"],en:["soft skills","strengths"]},answer:{de:"Ich sehe meine St\xE4rken in meiner ausgepr\xE4gten Lernbereitschaft, meiner Teamf\xE4higkeit und meinem kritischen Denken. Ich \xFCbernehme gerne Verantwortung und kommuniziere effektiv.",en:"I see my strengths in my strong willingness to learn, my ability to work in a team, and my critical thinking. I like to take responsibility and communicate effectively."}},{keywords:{de:["f\xFChrerschein","mobil","auto"],en:["driving license","driver's license","mobile","car"]},answer:{de:"Ja, ich besitze einen F\xFChrerschein der Klasse B. Das macht mich mobil und flexibel f\xFCr berufliche Termine und Reisen.",en:"Yes, I have a Class B driver's license. This makes me mobile and flexible for work-related appointments and travel."}},{keywords:{de:["sprachen"],en:["languages"]},answer:{de:"Meine Muttersprache ist Franz\xF6sisch. Au\xDFerdem spreche ich flie\xDFend Deutsch (C1) und Englisch (B2).",en:"My native language is French. I also speak fluent German (C1) and English (B2)."},navigationTarget:"sprachen"},{keywords:{de:["hobbys","freizeit"],en:["hobbies","free time"]},answer:{de:"In meiner Freizeit lese ich gerne, spiele Fu\xDFball und nat\xFCrlich programmiere ich auch an eigenen kleinen Projekten.",en:"In my free time, I enjoy reading, playing soccer, and of course, programming my own small projects."}},{keywords:{de:["kinder","familie"],en:["children","family"]},answer:{de:"Ja, ich habe eine wundervolle kleine Tochter, die meine Tage erhellt.",en:"Yes, I have a wonderful little girl who brightens up my days."}},{keywords:{de:["email","telefon","kontakt"],en:["email","phone","contact"]},answer:{de:"Meine Kontaktdaten finden Sie im entsprechenden Bereich des Portfolios. Aus Datenschutzgr\xFCnden gebe ich sie hier im Chat nicht direkt weiter.",en:"You can find my contact details in the dedicated section of the portfolio. For privacy reasons, I do not provide them directly here in the chat."}}],this.defaultAnswers={de:"Entschuldigung, ich kann diese Frage im Moment nicht beantworten. F\xFCr weitere Unterst\xFCtzung k\xF6nnen Sie gerne auf das E-Mail-Symbol links neben dem Chat klicken, um mir direkt eine Nachricht zu senden.",en:"That is an interesting question. It would be best to discuss that with me directly. In the meantime, can I help you with another topic?"},this.langSub=this.languageService.language$.subscribe(o=>{this.currentLanguage=o})}ngOnDestroy(){this.langSub.unsubscribe()}triggerNavigation(t){this.router.navigate([`/${t.toLowerCase()}`]),this.sceneControlService.requestZoom("screen")}resetHistory(){this.conversationHistory=[]}normalizeQuestion(t){return t.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ").trim()}matchesKeyword(t,n){let r=n.replace(/[.*+?^${}()|[\\]/g,"\\$&");return new RegExp(`${r}`,"i").test(t)}getAnswerFromRules(t){let n=this.normalizeQuestion(t);console.log(`--- New Question ---
`),console.log(`Normalized Question: "${n}"
`),console.log(`Language: ${this.currentLanguage}
`);for(let r of this.qaRules){let o=(r.keywords[this.currentLanguage]||r.keywords.de).find(a=>this.matchesKeyword(n,a));if(o)return console.log(`SUCCESS: Matched keyword "${o}" for rule with answer: "${r.answer[this.currentLanguage].substring(0,20)}"...
`),{text:r.answer[this.currentLanguage]||r.answer.de,navigationTarget:r.navigationTarget}}return console.log(`FAILURE: No rule matched. Returning default answer.
`),{text:this.defaultAnswers[this.currentLanguage]||this.defaultAnswers.de}}getAnswer(t){let n="/.netlify/functions/chat";this.conversationHistory.push({role:"user",parts:[{text:t}]});let r={message:t,lang:this.currentLanguage,history:this.conversationHistory};return this.http.post(n,r).pipe(xs(s=>{let o={text:s.reply};return this.conversationHistory.push({role:"model",parts:[{text:s.reply}]}),o}),pc(s=>{console.error("API call to Netlify function failed, falling back to rule-based answers.",s);let o=this.getAnswerFromRules(t);return this.conversationHistory.push({role:"model",parts:[{text:o.text}]}),dc(o)}))}static{this.\u0275fac=function(n){return new(n||i)(br(Ot),br(Ct),br(Ts),br(Dc))}}static{this.\u0275prov=Fn({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var __=(i,e)=>({"user-message":i,"bot-message":e});function v_(i,e){if(i&1&&(U(0,"div",5),Re(1),Y()),i&2){let t=jt();se(),Lt(" ",t.currentPromptMessage," ")}}function x_(i,e){i&1&&(Fe(),U(0,"svg",6),_e(1,"path",7),Y())}function y_(i,e){i&1&&(Fe(),U(0,"svg",6),_e(1,"path",8),Y())}function M_(i,e){i&1&&(U(0,"div",30),_e(1,"img",31),Y())}function b_(i,e){if(i&1){let t=Er();U(0,"button",32),st("click",function(){Zn(t);let r=jt().$implicit,s=jt(2);return $n(s.handleNavigationClick(r.navigationTarget))}),Re(1," Zeigen Sie mir den Abschnitt "),Y()}}function S_(i,e){if(i&1&&(U(0,"div",25),dt(1,M_,2,0,"div",26),U(2,"div",27),_e(3,"span",28),dt(4,b_,2,0,"button",29),Y()()),i&2){let t=e.$implicit;Xe("ngClass",Tc(4,__,t.sender==="user",t.sender==="bot")),se(),Xe("ngIf",t.sender==="bot"),se(2),Xe("innerHTML",t.text,Sr),se(),Xe("ngIf",t.navigationTarget)}}function w_(i,e){i&1&&(U(0,"div",33)(1,"div",30),_e(2,"img",31),Y(),U(3,"div",27)(4,"span"),Re(5,"schreibt..."),Y()()())}function E_(i,e){if(i&1){let t=Er();U(0,"div",9)(1,"div",10)(2,"div",11),_e(3,"img",12)(4,"span",13),Y(),U(5,"div",14)(6,"h3",15),Re(7,"Danielou M."),Y(),U(8,"p",16),Re(9,"Online"),Y()()(),U(10,"div",17),dt(11,S_,5,7,"div",18)(12,w_,6,0,"div",19),Y(),U(13,"div",20)(14,"input",21),Ec("ngModelChange",function(r){Zn(t);let s=jt();return wc(s.userInput,r)||(s.userInput=r),$n(r)}),st("keyup.enter",function(){Zn(t);let r=jt();return $n(r.sendMessage())}),Y(),U(15,"button",22),st("click",function(){Zn(t);let r=jt();return $n(r.sendMessage())}),Fe(),U(16,"svg",23),_e(17,"path",24),Y()()()()}if(i&2){let t=jt();se(11),Xe("ngForOf",t.messages),se(),Xe("ngIf",t.showTypingIndicator),se(2),Sc("ngModel",t.userInput)}}var od=(()=>{class i{constructor(t,n){this.chatbotService=t,this.platformId=n,this.isOpen=!1,this.messages=[],this.userInput="",this.showTypingIndicator=!1,this.promptMessages=["Hier kannst du mit mir sprechen","Chat with me","Parlez-moi","Hier kannst du texten","Schreiben Sie mir"],this.currentPromptMessage=""}ngOnInit(){if(this.messages.push({sender:"bot",text:"Hallo! Ich bin der virtuelle Avatar von Danielou. Stellen Sie mir gerne Ihre Fragen."}),Tr(this.platformId)){let t=0;this.currentPromptMessage=this.promptMessages[t],this.promptInterval=setInterval(()=>{t=(t+1)%this.promptMessages.length,this.currentPromptMessage=this.promptMessages[t]},3e3)}}ngOnDestroy(){this.promptInterval&&clearInterval(this.promptInterval)}toggleChat(){this.isOpen=!this.isOpen}sendMessage(){if(this.userInput.trim()==="")return;let t=this.userInput;this.messages.push({sender:"user",text:t}),this.userInput="",this.showTypingIndicator=!0,this.chatbotService.getAnswer(t).subscribe(n=>{this.messages.push({sender:"bot",text:n.text,navigationTarget:n.navigationTarget}),this.showTypingIndicator=!1},n=>{console.error("Error getting bot response:",n),this.messages.push({sender:"bot",text:"D\xE9sol\xE9, une erreur est survenue lors de la communication avec l'IA."}),this.showTypingIndicator=!1})}handleNavigationClick(t){t&&(this.chatbotService.triggerNavigation(t),this.isOpen=!1)}static{this.\u0275fac=function(n){return new(n||i)(Ue(sd),Ue(zi))}}static{this.\u0275cmp=St({type:i,selectors:[["app-chatbot"]],standalone:!0,features:[wt],decls:6,vars:4,consts:[[1,"chatbot-container"],["class","prompt-message",4,"ngIf"],[1,"chat-toggle-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor","class","w-8 h-8",4,"ngIf"],["class","chat-window",4,"ngIf"],[1,"prompt-message"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"w-8","h-8"],["stroke-linecap","round","stroke-linejoin","round","d","M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"],["stroke-linecap","round","stroke-linejoin","round","d","M6 18L18 6M6 6l12 12"],[1,"chat-window"],[1,"chat-header"],[1,"avatar-container"],["src","assets/photo.png","alt","Avatar de Danielou",1,"avatar"],[1,"status-indicator"],[1,"header-info"],[1,"font-bold"],[1,"text-xs"],[1,"chat-body"],["class","message-container",3,"ngClass",4,"ngFor","ngForOf"],["class","message-container bot-message",4,"ngIf"],[1,"chat-footer"],["type","text","placeholder","Stellen Sie Ihre Frage...",1,"chat-input",3,"ngModelChange","keyup.enter","ngModel"],[1,"send-button",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"w-6","h-6"],["stroke-linecap","round","stroke-linejoin","round","d","M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"],[1,"message-container",3,"ngClass"],["class","avatar-container-small",4,"ngIf"],[1,"message"],[3,"innerHTML"],["class","navigation-button",3,"click",4,"ngIf"],[1,"avatar-container-small"],["src","assets/photo.png","alt","Avatar de Danielou",1,"avatar-small"],[1,"navigation-button",3,"click"],[1,"message-container","bot-message"]],template:function(n,r){n&1&&(U(0,"div",0),dt(1,v_,2,1,"div",1),U(2,"button",2),st("click",function(){return r.toggleChat()}),dt(3,x_,2,0,"svg",3)(4,y_,2,0,"svg",3),Y(),dt(5,E_,18,3,"div",4),Y()),n&2&&(se(),Xe("ngIf",!r.isOpen),se(2),Xe("ngIf",!r.isOpen),se(),Xe("ngIf",r.isOpen),se(),Xe("ngIf",r.isOpen))},dependencies:[Tt,Ic,Ft,Hi,Ma,va,td,nc],styles:[".chatbot-container[_ngcontent-%COMP%]{z-index:1000}.prompt-message[_ngcontent-%COMP%]{position:absolute;bottom:80px;right:0;background-color:#2d3748;color:#e2e8f0;padding:.5rem .75rem;border-radius:10px;font-size:.9rem;white-space:nowrap;opacity:0;transform:translateY(10px);animation:_ngcontent-%COMP%_fadeInOut 6s infinite}@keyframes _ngcontent-%COMP%_fadeInOut{0%{opacity:0;transform:translateY(10px)}10%{opacity:1;transform:translateY(0)}40%{opacity:1;transform:translateY(0)}50%{opacity:0;transform:translateY(10px)}to{opacity:0;transform:translateY(10px)}}.chat-toggle-button[_ngcontent-%COMP%]{background-color:#1a202c;color:#cbd5e0;border:1px solid #4a5568;border-radius:50%;width:60px;height:60px;display:flex;justify-content:center;align-items:center;cursor:pointer;box-shadow:0 4px 6px #0000001a;transition:all .3s ease;animation:_ngcontent-%COMP%_pulse 2s infinite ease-in-out}@keyframes _ngcontent-%COMP%_pulse{0%{transform:scale(1)}50%{transform:scale(1.05)}to{transform:scale(1)}}.chat-toggle-button[_ngcontent-%COMP%]:hover{background-color:#2d3748}.chat-window[_ngcontent-%COMP%]{width:800px;height:500px;max-width:95vw;max-height:80vh;background-color:#1a202c;border-radius:15px;box-shadow:0 10px 15px #0003;display:flex;flex-direction:column;overflow:hidden;border:1px solid #4a5568}@media (max-width: 850px){.chat-window[_ngcontent-%COMP%]{width:95vw;height:90vh;border-radius:10px}}.chat-header[_ngcontent-%COMP%]{padding:1rem;background-color:#2d3748;display:flex;align-items:center;gap:.75rem;color:#e2e8f0}.avatar-container[_ngcontent-%COMP%]{position:relative}.avatar[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;border:2px solid #718096}.status-indicator[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0;width:10px;height:10px;background-color:#48bb78;border-radius:50%;border:2px solid #2d3748}.header-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1rem}.header-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#a0aec0}.chat-body[_ngcontent-%COMP%]{flex-grow:1;padding:1rem;overflow-y:auto;display:flex;flex-direction:column;gap:.75rem;color:#e2e8f0}.message-container[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:.5rem}.bot-message[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{background-color:#2d3748;border-top-left-radius:0;max-width:85%}.user-message[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{background-color:#4a5568;color:#fff;border-top-right-radius:0;max-width:85%}.bot-message[_ngcontent-%COMP%]{align-self:flex-start}.user-message[_ngcontent-%COMP%]{align-self:flex-end}.message[_ngcontent-%COMP%]{padding:.75rem;border-radius:15px;line-height:1.4}.bot-message[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{background-color:#2d3748;border-top-left-radius:0}.navigation-button[_ngcontent-%COMP%]{display:block;margin-top:.75rem;padding:.5rem .75rem;background-color:#4a5568;color:#e2e8f0;border:none;border-radius:10px;cursor:pointer;font-size:.8rem;font-weight:700;transition:background-color .2s ease}.navigation-button[_ngcontent-%COMP%]:hover{background-color:#718096}.user-message[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{background-color:#4a5568;color:#fff;border-top-right-radius:0}.avatar-small[_ngcontent-%COMP%]{width:30px;height:30px;border-radius:50%;flex-shrink:0}.chat-footer[_ngcontent-%COMP%]{display:flex;padding:.75rem;background-color:#2d3748;border-top:1px solid #4a5568}.chat-input[_ngcontent-%COMP%]{flex-grow:1;background-color:#1a202c;border:1px solid #4a5568;border-radius:20px;padding:.5rem 1rem;color:#e2e8f0;outline:none}.chat-input[_ngcontent-%COMP%]::placeholder{color:#718096}.send-button[_ngcontent-%COMP%]{background:none;border:none;color:#a0aec0;cursor:pointer;padding:.5rem;margin-left:.5rem}.send-button[_ngcontent-%COMP%]:hover{color:#e2e8f0}.chat-body[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.chat-body[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#1a202c}.chat-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#4a5568;border-radius:4px}"]})}}return i})();var ad=(()=>{class i{constructor(t){this.syncService=t,this.title="danielou-portfolio",this.panelState={visible:!1,transform:""}}ngOnInit(){this.panelSub=this.syncService.panelState$.subscribe(t=>{this.panelState=t})}ngOnDestroy(){this.panelSub&&this.panelSub.unsubscribe()}static{this.\u0275fac=function(n){return new(n||i)(Ue(pa))}}static{this.\u0275cmp=St({type:i,selectors:[["app-root"]],standalone:!0,features:[wt],decls:18,vars:4,consts:[[1,"html-panel"],[1,"fixed","bottom-4","left-4","z-20","flex","space-x-4"],["href","https://github.com/Danielou1","target","_blank",1,"social-link","text-white","hover:text-gray-300"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-github"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.54 2.74c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["href","https://www.linkedin.com/in/danielou-mounsande/","target","_blank",1,"social-link","text-white","hover:text-gray-300"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-linkedin"],["d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"],["x","2","y","9","width","4","height","12"],["cx","4","cy","4","r","2"],[1,"fixed","bottom-4","right-4","z-20","flex","items-center","space-x-4"],["href","mailto:danielou.mounsande@gmail.com",1,"social-link","text-white","hover:text-gray-300"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-mail"],["d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"],["points","22,6 12,13 2,6"]],template:function(n,r){n&1&&(_e(0,"app-three-scene"),U(1,"div",0),_e(2,"router-outlet"),Y(),U(3,"div",1)(4,"a",2),Fe(),U(5,"svg",3),_e(6,"path",4),Y()(),je(),U(7,"a",5),Fe(),U(8,"svg",6),_e(9,"path",7)(10,"rect",8)(11,"circle",9),Y()()(),je(),U(12,"div",10)(13,"a",11),Fe(),U(14,"svg",12),_e(15,"path",13)(16,"polyline",14),Y()(),je(),_e(17,"app-chatbot"),Y()),n&2&&(se(),ws("transform",r.panelState.transform),Es("visible",r.panelState.visible))},dependencies:[Tt,Uc,ku,od],styles:[".html-panel[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:800px;height:500px;background-color:#1a202ce6;border-radius:12px;box-shadow:0 10px 30px #00000080;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.1);pointer-events:none;opacity:0;transition:opacity .4s ease,transform .4s ease;will-change:transform,opacity;z-index:10;overflow:hidden}.html-panel.visible[_ngcontent-%COMP%]{opacity:1;pointer-events:auto}@media (max-width: 850px){.html-panel[_ngcontent-%COMP%]{width:95vw;height:80vh}}"]})}}return i})();var ld=[{path:"",redirectTo:"profil",pathMatch:"full"},{path:"profil",component:Bc},{path:"daten",component:qc},{path:"skills",component:Vc},{path:"softskills",component:zc},{path:"sprachen",component:Hc},{path:"akademisch",component:Gc},{path:"projekte",component:Wc},{path:"erfahrung",component:Xc},{path:"screen",loadComponent:()=>import("./chunk-JUNPCKTL.mjs").then(i=>i.GiantScreenComponent)},{path:"**",redirectTo:"profil"}];var cd={providers:[kc(ld),Oc(),mc(Ma,rd),Lc()]};var T_={providers:[Nc()]},hd=Pc(cd,T_);var C_=()=>Fc(ad,hd),Hb=C_;export{Hb as a};
