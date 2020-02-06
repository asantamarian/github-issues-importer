const labels ={
    type:{
        bug:{name:"- Bug :beetle:", color:"#d73a4a"},
        newFeature:{name:"- New Feature :new:", color:"#ADE74D"},
        enhancement:{name:"- Enhancement :arrow_upper_right:", color:"#eac09a"},
        documentation:{name:"- Documentation :page_facing_up:", color:"#FF9400"},
    },
    priority:{
        0:{name:":arrows_clockwise:Priority: Low :upside_down_face:", color:"#36ba25"},
        1:{name:":arrows_clockwise:Priority: Medium :flushed:", color:"#e2bf0d"},
        2:{name:":arrows_clockwise:Priority: High :fearful:", color:"#bc1200"},
        3:{name:":arrows_clockwise:Priority: OMG!! :scream::fire:", color:"#000000"}

    },
    issueCost:
        {
            1:{name:"1 BEER :beer:",color:"#160a70"},
            2:{name:"1 BEER :beer::beer:",color:"#160a70"},
            3:{name:"1 BEER :beer::beer::beer:",color:"#160a70"},
        },
    
    
}

module.exports = {
    groups:labels
}