(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{391:function(t,r,a){"use strict";a.r(r);var e=a(46),s=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"lab-3-uniform-cost-search"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lab-3-uniform-cost-search"}},[t._v("#")]),t._v(" Lab 3: Uniform-Cost Search")]),t._v(" "),a("h2",{attrs:{id:"objective"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[t._v("#")]),t._v(" Objective")]),t._v(" "),a("p",[t._v("To create Python script to execute breadth first search algorithm.")]),t._v(" "),a("h2",{attrs:{id:"problem-to-be-solved"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#problem-to-be-solved"}},[t._v("#")]),t._v(" Problem to be solved")]),t._v(" "),a("p",[t._v("We will revisit Nick’s route-finding problem in Romania, starting in Arad to reach Bucharest, and implement uniform-cost search to solve the problem.")]),t._v(" "),a("svg",{attrs:{viewBox:"0 0 950 500"}},[a("path",{attrs:{d:"M 75 125 L 100 75",stroke:"black"}}),t._v(" "),a("text",{attrs:{x:87.5,y:100,"text-anchor":"end"}},[t._v("75")]),t._v(" "),a("path",{attrs:{d:"M 100 75 L 125 25",stroke:"black"}}),t._v(" "),a("text",{attrs:{x:112.5,y:50,"text-anchor":"end"}},[t._v("71")]),t._v(" "),a("path",{attrs:{d:"M 125 25 L 265 175",stroke:"black"}}),t._v(" "),a("text",{attrs:{x:195,y:90,"text-anchor":"start"}},[t._v("151")]),t._v(" "),a("path",{attrs:{d:"M 265 175 L 75 125",stroke:"black"}}),t._v(" "),a("text",{attrs:{x:170,y:165,"text-anchor":"end"}},[t._v("140")]),t._v(" "),a("path",{attrs:{d:"M 75 125 L 85 280",stroke:"black"}}),t._v(" "),a("text",{attrs:{x:75,y:202.5,"text-anchor":"end"}},[t._v("118")]),t._v(" "),a("path",{attrs:{d:"M 85 280 L 185 335",stroke:"black"}}),t._v(" "),a("text",{attrs:{x:140,y:302.5,"text-anchor":"start"}},[t._v("111")]),t._v(" "),a("path",{attrs:{d:"M 185 335 L 190 390",stroke:"black"}}),t._v(" "),a("text",{attrs:{x:197.5,y:362.5,"text-anchor":"start"}},[t._v("70")]),t._v(" "),a("path",{attrs:{d:"M 190 390 L 185 450",stroke:"black"}}),t._v(" "),a("text",{attrs:{x:197.5,y:420,"text-anchor":"start"}},[t._v("75")]),t._v(" "),a("path",{attrs:{d:"M 185 450 L 350 465",stroke:"black"}}),t._v(" "),a("text",{attrs:{x:267.5,y:447.5,"text-anchor":"end"}},[t._v("120")]),t._v(" "),a("path",{attrs:{d:"M 350 465 L 320 230",stroke:"black"}}),t._v(" "),a("text",{attrs:{x:325,y:347.5,"text-anchor":"end"}},[t._v("146")]),t._v(" "),a("path",{attrs:{d:"M 320 230 L 265 175",stroke:"black"}}),t._v(" "),a("text",{attrs:{x:297.5,y:202.5,"text-anchor":"start"}},[t._v("80")]),t._v(" "),a("path",{attrs:{d:"M 265 175 L 425 175",stroke:"black"}}),t._v(" "),a("text",{attrs:{x:345,y:170,"text-anchor":"middle"}},[t._v("99")]),t._v(" "),a("path",{attrs:{d:"M 320 230 L 475 310",stroke:"black"}}),t._v(" "),a("text",{attrs:{x:397.5,y:265,"text-anchor":"start"}},[t._v("97")]),t._v(" "),a("path",{attrs:{d:"M 475 310 L 350 465",stroke:"black"}}),t._v(" "),a("text",{attrs:{x:407.5,y:382.5,"text-anchor":"end"}},[t._v("138")]),t._v(" "),a("path",{attrs:{d:"M 475 310 L 640 390",stroke:"black"}}),t._v(" "),a("text",{attrs:{x:547.5,y:360,"text-anchor":"end"}},[t._v("101")]),t._v(" "),a("path",{attrs:{d:"M 425 175 L 640 390",stroke:"black"}}),t._v(" "),a("text",{attrs:{x:537.5,y:277.5,"text-anchor":"start"}},[t._v("211")]),t._v(" "),a("path",{attrs:{d:"M 640 390 L 575 485",stroke:"black"}}),t._v(" "),a("text",{attrs:{x:602.5,y:437.5,"text-anchor":"end"}},[t._v("90")]),t._v(" "),a("path",{attrs:{d:"M 640 390 L 745 340 ",stroke:"black"}}),t._v(" "),a("text",{attrs:{x:687.5,y:365,"text-anchor":"end"}},[t._v("85")]),t._v(" "),a("path",{attrs:{d:"M 745 340 L 875 340",stroke:"black"}}),t._v(" "),a("text",{attrs:{x:810,y:355,"text-anchor":"middle"}},[t._v("98")]),t._v(" "),a("path",{attrs:{d:"M 875 340 L 935 440",stroke:"black"}}),t._v(" "),a("text",{attrs:{x:895,y:395,"text-anchor":"end"}},[t._v("86")]),t._v(" "),a("path",{attrs:{d:"M 745 340 L 850 225",stroke:"black"}}),t._v(" "),a("text",{attrs:{x:792.5,y:277.5,"text-anchor":"end"}},[t._v("142")]),t._v(" "),a("path",{attrs:{d:"M 850 225 L 760 120",stroke:"black"}}),t._v(" "),a("text",{attrs:{x:810,y:172.5,"text-anchor":"start"}},[t._v("92")]),t._v(" "),a("path",{attrs:{d:"M 760 120 L 625 60",stroke:"black"}}),t._v(" "),a("text",{attrs:{x:697.5,y:85,"text-anchor":"start"}},[t._v("87")]),t._v(" "),a("circle",{attrs:{cx:"75",cy:"125",r:t.$page.frontmatter.circleradius,fill:"green"}}),t._v(" "),a("text",{attrs:{x:"60",y:"130","text-anchor":"end"}},[t._v("Arad")]),t._v(" "),a("circle",{attrs:{cx:"100",cy:"75",r:t.$page.frontmatter.circleradius,fill:"gray"}}),t._v(" "),a("text",{attrs:{x:"85",y:"75","text-anchor":"end"}},[t._v("Zerind")]),t._v(" "),a("circle",{attrs:{cx:"125",cy:"25",r:t.$page.frontmatter.circleradius,fill:"gray"}}),t._v(" "),a("text",{attrs:{x:"110",y:"20","text-anchor":"end"}},[t._v("Oradea")]),t._v(" "),a("circle",{attrs:{cx:"265",cy:"175",r:t.$page.frontmatter.circleradius,fill:"gray"}}),t._v(" "),a("text",{attrs:{x:"265",y:"160","text-anchor":"start"}},[t._v("Sibiu")]),t._v(" "),a("circle",{attrs:{cx:"425",cy:"175",r:t.$page.frontmatter.circleradius,fill:"gray"}}),t._v(" "),a("text",{attrs:{x:"440",y:"180","text-anchor":"start"}},[t._v("Fagaras")]),t._v(" "),a("circle",{attrs:{cx:"320",cy:"230",r:t.$page.frontmatter.circleradius,fill:"gray"}}),t._v(" "),a("text",{attrs:{x:"305",y:"235","text-anchor":"end"}},[t._v("Rimnicu Vilcea")]),t._v(" "),a("circle",{attrs:{cx:"475",cy:"310",r:t.$page.frontmatter.circleradius,fill:"gray"}}),t._v(" "),a("text",{attrs:{x:"460",y:"320","text-anchor":"end"}},[t._v("Pitesti")]),t._v(" "),a("circle",{attrs:{cx:"350",cy:"465",r:t.$page.frontmatter.circleradius,fill:"gray"}}),t._v(" "),a("text",{attrs:{x:"340",y:"480","text-anchor":"end"}},[t._v("Craiova")]),t._v(" "),a("circle",{attrs:{cx:"185",cy:"450",r:t.$page.frontmatter.circleradius,fill:"gray"}}),t._v(" "),a("text",{attrs:{x:"170",y:"455","text-anchor":"end"}},[t._v("Drobeta")]),t._v(" "),a("circle",{attrs:{cx:"190",cy:"390",r:t.$page.frontmatter.circleradius,fill:"gray"}}),t._v(" "),a("text",{attrs:{x:"175",y:"395","text-anchor":"end"}},[t._v("Mehadia")]),t._v(" "),a("circle",{attrs:{cx:"185",cy:"335",r:t.$page.frontmatter.circleradius,fill:"gray"}}),t._v(" "),a("text",{attrs:{x:"170",y:"345","text-anchor":"end"}},[t._v("Lugoj")]),t._v(" "),a("circle",{attrs:{cx:"85",cy:"280",r:t.$page.frontmatter.circleradius,fill:"gray"}}),t._v(" "),a("text",{attrs:{x:"70",y:"285","text-anchor":"end"}},[t._v("Timisoara")]),t._v(" "),a("circle",{attrs:{cx:"640",cy:"390",r:t.$page.frontmatter.circleradius,fill:"red"}}),t._v(" "),a("text",{attrs:{x:"625",y:"400","text-anchor":"end"}},[t._v("Bucharest")]),t._v(" "),a("circle",{attrs:{cx:"575",cy:"485",r:t.$page.frontmatter.circleradius,fill:"gray"}}),t._v(" "),a("text",{attrs:{x:"560",y:"490","text-anchor":"end"}},[t._v("Giurgiu")]),t._v(" "),a("circle",{attrs:{cx:"745",cy:"340",r:t.$page.frontmatter.circleradius,fill:"gray"}}),t._v(" "),a("text",{attrs:{x:"730",y:"335","text-anchor":"end"}},[t._v("Urziceni")]),t._v(" "),a("circle",{attrs:{cx:"875",cy:"340",r:t.$page.frontmatter.circleradius,fill:"gray"}}),t._v(" "),a("text",{attrs:{x:"875",y:"325","text-anchor":"end"}},[t._v("Hirsova")]),t._v(" "),a("circle",{attrs:{cx:"935",cy:"440",r:t.$page.frontmatter.circleradius,fill:"gray"}}),t._v(" "),a("text",{attrs:{x:"920",y:"445","text-anchor":"end"}},[t._v("Eforie")]),t._v(" "),a("circle",{attrs:{cx:"850",cy:"225",r:t.$page.frontmatter.circleradius,fill:"gray"}}),t._v(" "),a("text",{attrs:{x:"835",y:"230","text-anchor":"end"}},[t._v("Vaslui")]),t._v(" "),a("circle",{attrs:{cx:"760",cy:"120",r:t.$page.frontmatter.circleradius,fill:"gray"}}),t._v(" "),a("text",{attrs:{x:"745",y:"135","text-anchor":"end"}},[t._v("Iasi")]),t._v(" "),a("circle",{attrs:{cx:"625",cy:"60",r:t.$page.frontmatter.circleradius,fill:"gray"}}),t._v(" "),a("text",{attrs:{x:"610",y:"65","text-anchor":"end"}},[t._v("Neamt")])]),t._v(" "),a("p",[t._v("Uniform cost search changes the sorting of the frontier by ordering it with its path cost up to the leaf node and expanding the leaf node with the lowest cost.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Based on the code from previous lab, add the code to sort the frontier following the path cost up to the leaf node.")])]),t._v(" "),a("li",[a("p",[t._v("If a latter-found node has the same state as a previous node and the previous node has been expanded, what should be done?")])]),t._v(" "),a("li",[a("p",[t._v("What happens when a latter-found node has the same state as a previous node and have a shorter path cost? How do we implement this in our code?")])]),t._v(" "),a("li",[a("p",[t._v("Note also, the goal test should be applied during expansion, not generation.")])])]),t._v(" "),a("p",[t._v("Execute the program and investigate if the program is working correctly.")]),t._v(" "),a("h2",{attrs:{id:"submission"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#submission"}},[t._v("#")]),t._v(" Submission")]),t._v(" "),a("p",[t._v("Submit the working code to MS Teams.")])])}),[],!1,null,null,null);r.default=s.exports}}]);