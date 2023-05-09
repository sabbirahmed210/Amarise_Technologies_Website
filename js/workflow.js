const flightPath = {
    curviness: 1.25,
    autoRotate: 'true',
    values:[{x: 0, y: 0},{x: 100, y:0},{x: 150, y:0},{x:200, y:0},{x:250, y:0},{x:300, y:0},
        {x:350, y:0},{x:450, y:0},{x:655, y:-29},{x:665, y:-27},{x:675, y:-26},{x:685, y:-25},
        {x:695, y:-23},{x:705, y:-20},{x:715, y:-15},{x:725, y:-8},{x:735, y:0},{x:745, y:12},
        {x:755, y:30},{x:765, y:55},{x:775, y:85},{x:775, y:125},{x:770, y:140},{x:765, y:150},
        {x:760, y:160},{x:750,y:180},{x:740,y:197},{x:720,y:228},{x:700,y:257},{x:680, y:285},
        {x:660, y:311},{x:640, y:336},{x:620, y:360},{x:600, y:384},{x:580, y:407},{x:560, y:429},
        {x:540, y:450},{x:520, y:470},{x:500, y:495},{x:480, y:525},{x:460, y:555},{x:440, y:590},
        {x:415, y:637},{x:398, y:687},{x:395, y:717},{x:397, y:735},{x:399, y:752},{x:405, y:757},
        {x:410, y:759},{x:418, y:762},{x:428, y:770},{x:435, y:775},{x:440, y:780},{x:443, y:781},
        {x:447, y:783},{x:451, y:784},{x:458, y:785},{x:470, y:785},{x:500, y:785},{x:750, y:785},
        {x:770, y:786},{x:790, y:789},{x:810, y:791},{x:830, y:797},{x:850, y:803},{x:870, y:809},
        {x:890, y:817},{x:910, y:827},{x:930, y:840},{x:950, y:855},{x:965, y:873},{x:970, y:880},
        {x:977, y:890},{x:995, y:905},{x:1000,y:925},{x:1010,y:965},{x:1020,y:1005},{x:1025,y:1025},
        {x:1010,y:1043},{x:1000,y:1061},{x:976,y:1070},{x:965,y:1072},{x:950,y:1073},{x:900,y:1073},
        {x:850,y:1071},{x:800,y:1060},{x:750,y:1040},{x:700,y:1022},{x:650,y:1005},{x:600,y:990},{x:550,y:982},
        {x:500,y:978},{x:475, y:976},{x:450,y:975},{x:400,y:978},{x:350,y:985},{x:300,y:995},{x:250,y:1005},
        {x:225,y:1015},{x:200,y:1025},{x:175,y:1030},{x:150,y:1045},{x:125,y:1055},{x:150,y:1115},{x:160,y:1155},
        {x:175,y:1185},{x:180,y:1225},{x:175,y:1235},{x:170,y:1245},{x:165,y:1250},{x:155,y:1260},{x:130,y:1270},
        {x:120,y:1271},{x:90,y:1272},{x:-110,y:1273},{x:-130,y:1274},{x:-160,y:1276},{x:-190,y:1279},{x:-270,y:1287},
        {x:-290,y:1292},{x:-310,y:1298},{x:-330,y:1308},{x:-350,y:1318},{x:-370,y:1328},{x:-385,y:1348},{x:-390,y:1357},
        {x:-400,y:1377},{x:-410,y:1400},{x:-400,y:1407},{x:-390,y:1410},{x:-380,y:1415},{x:-370,y:1417},{x:-270,y:1427},
        {x:-70,y:1437},{x:150,y:1437},{x:180,y:1438},{x:220,y:1439},{x:250,y:1443},{x:255,y:1445},{x:260,y:1448},{x:265,y:1453},
        {x:273,y:1460},{x:278,y:1465},{x:287,y:1471},{x:298,y:1485},{x:316,y:1500},{x:326,y:1508},{x:335,y:1514},{x:345,y:1520},
        {x:355,y:1526},{x:370,y:1535},{x:455,y:1580},{x:505,y:1596},{x:510,y:1597},{x:515,y:1598},{x:525,y:1599},{x:535,y:1600},
        {x:545,y:1601},{x:575,y:1605},{x:595,y:1606},{x:655,y:1610},{x:685,y:1613},{x:695,y:1615},{x:705,y:1618},{x:715,y:1621},
        {x:735,y:1625},{x:755,y:1630},{x:765,y:1635},{x:785,y:1645},{x:795,y:1650},{x:805,y:1655},{x:815,y:1660},{x:825,y:1670},
        {x:830,y:1675},{x:835,y:1685},{x:840,y:1695},{x:845,y:1705},{x:855,y:1725},{x:856,y:1735},{x:856,y:1765},{x:853,y:1770},
        {x:852,y:1775},{x:851,y:1795},{x:850,y:1800},{x:849,y:1805},{x:845,y:1810},{x:680,y:1960},{x:630,y:2010},{x:620,y:2020},
        {x:610,y:2030},{x:600,y:2040},{x:590,y:2050},{x:580,y:2060},{x:575,y:2086},{x:580,y:2099},{x:585,y:2109},{x:590,y:2120},
        {x:595,y:2142},{x:605,y:2159},{x:606,y:2161},{x:607,y:2163},{x:608,y:2165},{x:609,y:2166.5},{x:610,y:2168},{x:611,y:2169.5},
        {x:615,y:2174.5},{x:620,y:2180},{x:625,y:2186},{x:630,y:2192},{x:635,y:2197.5},{x:640,y:2202.5},{x:645,y:2207.5},{x:650,y:2212.5},
        {x:690,y:2245.5},{x:700,y:2253.5},{x:710,y:2260.5},{x:720,y:2267.5},{x:730,y:2274.5},{x:750,y:2288},{x:770,y:2300},{x:790,y:2317},
        {x:810,y:2327},{x:830,y:2337},{x:850,y:2357},{x:870,y:2375},{x:885,y:2395},{x:885,y:2455},{x:880,y:2465},{x:870,y:2475},{x:860,y:2483},
        {x:810,y:2518.5},{x:710,y:2578.5},{x:610,y:2623.5},{x:490,y:2665},{x:350,y:2685},{x:0,y:2717.5},{x:-20,y:2719.37},{x:-60,y:2722.37},
        {x:-90,y:2725.37},{x:-120,y:2730.37},{x:-130,y:2732.37},{x:-140,y:2735.37},{x:-145,y:2736.8},{x:-150, y:2738},{x:-155, y:2740},{x:-160, y:2742},
        {x:-165, y:2744},{x:-170, y:2746},{x:-175, y:2748},{x:-180, y:2751},{x:-185, y:2754},{x:-195, y:2760},{x:-205, y:2765},{x:-215, y:2772},{x:-225, y:2780},
        {x:-235, y:2790},{x:-245, y:2804},{x:-255, y:2818},{x:-265, y:2835},{x:-275, y:2852},{x:-285, y:2875},{x:-295, y:2900},{x:-305, y:2925},{x:-305, y:2935},
        {x:-305, y:2965},{x:-300, y:2975},{x:-295, y:2985},{x:-290, y:2995},{x:-285, y:3005},{x:-280, y:3015},{x:-275, y:3020},{x:-270, y:3024},{x:-260, y:3030},
        {x:-250, y:3040},{x:-240, y:3050},{x:-235, y:3052.5},{x:-230, y:3054.5},{x:-225, y:3056},{x:-220, y:3057.5},{x:-215, y:3059},{x:-210, y:3060.5},
        {x:-205, y:3062},{x:-200, y:3063.1},{x:-190, y:3065.3},{x:-180, y:3067.5},{x:-150, y:3073.5},{x:-100, y:3083.5},{x:0, y:3110.5},{x:10, y:3114},{x:30, y:3124},
        {x:50, y:3134},{x:70, y:3144},{x:90, y:3160},{x:100, y:3170},{x:110, y:3180},{x:120, y:3190},{x:130, y:3220},{x:131, y:3230},{x:131, y:3300},{x:131, y:3350},
        {x:132, y:3365},{x:133, y:3368},{x:134, y:3375},{x:135, y:3380},{x:136, y:3383},{x:137, y:3385},{x:138, y:3388},{x:139, y:3390},{x:140, y:3392},{x:141, y:3393.5},
        {x:142, y:3395.5},{x:143, y:3397},{x:144, y:3398.5},{x:145, y:3400},{x:150, y:3410},{x:155, y:3420},{x:160, y:3430},{x:165, y:3440},{x:170, y:3450},{x:175, y:3460},
        {x:180, y:3465.5},{x:190, y:3475},{x:200, y:3479},{x:220, y:3486.5},{x:250, y:3497},{x:270, y:3504},{x:290, y:3510},{x:330, y:3521},{x:370, y:3530},{x:430, y:3539.5},
        {x:570, y:3553.5},{x:680, y:3563.5},{x:690, y:3564.5},{x:700, y:3566},{x:710, y:3568},{x:720, y:3570},{x:730, y:3573},{x:770, y:3585},{x:780, y:3590},{x:790, y:3595},
        {x:800, y:3600},{x:810, y:3610},{x:820, y:3620},{x:825, y:3630},{x:830, y:3640},{x:835, y:3660},{x:835, y:3760}
        
        

]
};
const tween = new TimelineLite();

tween.add(
    TweenLite.to(".rocket_ship", 1,{
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: "#workflow",
    triggerHook:'onEnter',
    duration: "515%"
})
.setTween(tween)
.addIndicators({
    name: 'fade scene',
    colorTrigger:'transparent',
    indent: 200,
    colorStart: 'transparent',
    colorEnd: 'transparent'
})
.addTo(controller);


/************************ Qoutes Section **********************/

var s8_1 = new TimelineLite();
            
s8_1.add(
    TweenLite.from(".textOverparallax",1,{
        x:150,
        opacity:0,
        delay:-4,
        ease: Power1.easeInOut
    })
);
s8_1.add(
    TweenLite.from(".astronaut",1,{
        y:-380,
        opacity:1,
        delay:-4,
        ease: Power1.easeInOut
    })
);


const controller_s8_1 = new ScrollMagic.Controller();

const scene_s8_1 = new ScrollMagic.Scene({
    triggerElement: "#section_8-1",
    triggerHook:"onEnter",
    duration:'100%'
})
.setTween(s8_1)
.addIndicators({
    name: 'scene_s8_1',
    colorTrigger:'transparent',
    colorStart: 'transparent',
    colorEnd: 'transparent'
})
.addTo(controller_s8_1);
