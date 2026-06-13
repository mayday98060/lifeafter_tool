const recipes = [
    {
        name: "果醬",
        img: "images/果醬.png", 
        desc: "水果做的果醬，香甜可口。",
        formula: "4水果",
        effect: "充飢"
    },
    {
        name: "蜜糖",
        img: "images/蜜糖.png",
        desc: "蜂蜜熬製的糖塊，食用之後回復大量生命。",
        formula: "4蜂蜜",
        effect: "回復血量48\n持續5秒"
    },
    {
        name: "純椰汁",
        img: "images/純椰汁.png",
        desc: "自製的椰子汁，純天然不添加。",
        formula: "4椰子",
        effect: "充飢"
    } ,
    {
        name: "果味冰棒",
        img: "images/果味冰棒.png",
        desc: "水果味的冰棒，童年的味道。",
        formula: "1水果+3冰塊",
        effect: "體溫-10"
    },
    {
        name: "水果蜜餞",
        img: "images/水果蜜餞.png",
        desc: "在這個時代，零食已經是很奢侈的食物了。",
        formula: "3水果+1蜂蜜",
        effect: "充飢"
    },
        {
        name: "水果牛奶",
        img: "images/水果牛奶.png",
        desc: "水果味的牛奶，讓你開心得像孩子一樣。",
        formula: "3水果+1牛奶",
        effect: "充飢"
    },
        {
        name: "牛奶糖",
        img: "images/牛奶糖.png",
        desc: "表白神器，拿去送給心愛的人吧。",
        formula: "2蜂蜜+2牛奶",
        effect: "移動速度提升5%"
    },
        {
        name: "果汁",
        img: "images/果汁.png",
        desc: "純天然，無添加劑。",
        formula: "2水果+2冰塊",
        effect: "充飢"
    },
        {
        name: "蜂糖水",
        img: "images/蜂糖水.png",
        desc: "佛系飲品，養生神器。",
        formula: "1蜂蜜+3冰塊",
        effect: "體溫+10\n去除感冒"
    },
        {
        name: "蛋捲",
        img: "images/蛋捲.png",
        desc: "香脆的蛋捲，帶著小時候的味道。",
        formula: "3麵粉+1禽蛋",
        effect: "充飢"
    },
        {
        name: "椰子凍",
        img: "images/椰子凍.png",
        desc: "椰子凍，炎熱夏季裡的解暑神器。",
        formula: "3冰塊+1椰子",
        effect: "體溫-20"
    },
        {
        name: "椰汁水果撈",
        img: "images/椰汁水果撈.png",
        desc: "各種水果在椰汁的激發下，味道變得更有層次了。",
        formula: "3水果+1椰子",
        effect: "游泳速度提升9%"
    },
        {
        name: "奶香玉米布丁",
        img: "images/奶香玉米布丁.png",
        desc: "一碗散發著濃濃玉米香味的牛奶布丁，甜到心間。",
        formula: "2牛奶+2玉米",
        effect: "移動速度提升5%"
    },
        {
        name: "水果派",
        img: "images/水果派.png",
        desc: "香甜可口的水果派。",
        formula: "2水果+1麵粉+1蜂蜜",
        effect: "對人形怪傷害提升10%"
    },
        {
        name: "葡式蛋塔",
        img: "images/葡式蛋塔.png",
        desc: "散發著濃濃的奶香，奶油焦到恰到好處。",
        formula: "2麵粉+1蜂蜜+1牛奶",
        effect: "挖礦主資源暴擊率10%\n挖礦副資源暴擊率10%"
    },
        {
        name: "牛奶布丁",
        img: "images/牛奶布丁.png",
        desc: "夏日可口的甜品，解暑神器。",
        formula: "2蜂蜜+1牛奶+1冰塊",
        effect: "體溫-15"
    },
        {
        name: "奶油濃湯",
        img: "images/奶油濃湯.png",
        desc: "一碗散發著奶香味的濃湯。",
        formula: "2肉+1蔬菜+1牛奶",
        effect: "體溫+20"
    },
        {
        name: "椰奶雪花糕",
        img: "images/椰奶雪花糕.png",
        desc: "椰子和牛奶和所有味道濃縮在了這一小塊糕點上，濃郁的香味沁人心脾。",
        formula: "2麵粉+1牛奶+1椰子",
        effect: "勞動時採集熟練度提升10%"
    },
        {
        name: "水果椰奶",
        img: "images/水果椰奶.png",
        desc: "清甜的水果搭配上香醇的椰奶，一口下去心情瞬間變得舒暢。",
        formula: "2水果+1牛奶+1椰子",
        effect: "游泳速度提升10%"
    },
        {
        name: "蛋黃玉米酥",
        img: "images/蛋黃玉米酥.png",
        desc: "甜甜的玉米味、濃郁的蛋黃味，完美地融合在酥餅當中。",
        formula: "2麵粉+1禽蛋+1玉米",
        effect: "血量上限提升150"
    },
        {
        name: "水果蛋糕",
        img: "images/水果蛋糕.png",
        desc: "甜美的水果蛋糕，食用之後讓你腳步輕盈。",
        formula: "1水果+1麵粉+1蜂蜜+1牛奶",
        effect: "移動速度提升5%"
    },
        {
        name: "水果冰沙",
        img: "images/水果冰沙.png",
        desc: "清爽可口，適合在炎炎夏日食用。",
        formula: "2水果+1蜂蜜+1冰塊",
        effect: "體溫-20"
    },
        {
        name: "草莓果凍",
        img: "images/草莓果凍 .png",
        desc: "含有大顆草莓的果凍，食用後短時間內提高移動速度、暴擊率。",
        formula: "1牛奶+1冰塊+2草莓\n(營地金庫前找夏冬涼購買食譜)",
        effect: "暴擊率提升5%\n移動速度提升5%"
    },
        {
        name: "草莓優酪乳冰",
        img: "images/草莓優酪乳冰.png",
        desc: "草莓和優酪乳的完美融合，激發舌尖的每個味蕾。",
        formula: "1蜂蜜+1牛奶+1冰塊+1草莓",
        effect: "移動速度提升5%"
    },
        {
        name: "莓莓芝士蛋糕",
        img: "images/莓莓芝士蛋糕.png",
        desc: "一次草莓和藍莓的完美融合，激發你的全部味蕾。",
        formula: "1草莓+1藍莓+1麵粉+1牛奶",
        effect: "持續回復血量1.5"
    },
        {
        name: "太陽果燉牛奶蛋",
        img: "images/太陽果燉牛奶蛋.png",
        desc: "一道好看、好吃又有營養的料理。",
        formula: "1南瓜+1牛奶+2禽蛋",
        effect: "持續回復血量1.5"
    },
        {
        name: "藍莓椰絲脆",
        img: "images/藍莓椰絲脆.png",
        desc: "椰絲混上麵粉炸至酥脆，再配上藍莓的清甜，讓你欲罷不能。\n食用後提高勞動時採集熟練度的獲取，持續一段時間。",
        formula: "2藍莓+1麵粉+1椰子",
        effect: "伐木速度提升10%\n挖礦速度提升10%\n採麻速度提升10%\n勞動時採集熟練度提升10%"
    },
        {
        name: "黃金玉米盞",
        img: "images/黃金玉米盞.png",
        desc: "玉米粒和胡蘿蔔粒裹上蛋黃液炸至金黃，酥脆可口。",
        formula: "1胡蘿蔔+1禽蛋+2玉米",
        effect: "伐木速度提升10%\n挖礦速度提升10%\n採麻速度提升10%"
    },
        {
        name: "大神愛心慕斯",
        img: "images/大神愛心慕斯.png",
        desc: "大神訂製愛心幕斯，食用後長時間增加移動速度和暴擊率。",
        formula: "網易大神app贈送",
        effect: "暴擊率提升10%\n移動速度提升5%"
    },
        {
        name: "樹根蛋糕",
        img: "images/樹根蛋糕.png",
        desc: "科技會與第三商隊合作下產出的高科技食物樹根蛋糕，可大幅提升砍樹、挖掘、採麻暴擊率。",
        formula: "聯盟會員\n生存達人卡\n專屬寶箱自選",
        effect: "伐木主資源暴擊率20%\n挖礦主資源暴擊率20%\n採麻主資源暴擊率20%\n伐木副資源暴擊率10%\n挖礦副資源暴擊率10%\n採麻副資源暴擊率10%"
    },
        {
        name: "水果蜜餞",
        img: "images/水果蜜餞.png",
        desc: "在這個時代，零食已經是很奢侈的食物了。",
        formula: "3水果+1蜂蜜",
        effect: "充飢"
    },
        {
        name: "水果蜜餞",
        img: "images/水果蜜餞.png",
        desc: "在這個時代，零食已經是很奢侈的食物了。",
        formula: "3水果+1蜂蜜",
        effect: "充飢"
    },
        {
        name: "水果蜜餞",
        img: "images/水果蜜餞.png",
        desc: "在這個時代，零食已經是很奢侈的食物了。",
        formula: "3水果+1蜂蜜",
        effect: "充飢"
    },
        {
        name: "蟹黃鱸魚煲",
        img: "images/蟹黃鱸魚煲.png",
        desc: "暗港獨有的料理菜譜。近海漁人間流傳的家常做法，習得後可製作蟹黃鱸魚煲。",
        formula: "3水果+1蜂蜜\n(地下暗港找肥皂，前往暗港商店購買)",
        effect: "暴擊率提升7.5%\n對感染者傷害提升10%\n爆頭傷害提升5%"
    },
        {
        name: "帝皇鮪魚燒",
        img: "images/帝皇鮪魚燒.png",
        desc: "暗港獨有的料理菜譜。遠海老手們推崇的炙烤吃法，習得後可製作帝皇鮪魚燒。",
        formula: "3水果+1蜂蜜",
        effect: "充飢"
    },
        {
        name: "斑魚龍利卷",
        img: "images/斑魚龍利卷.png",
        desc: "暗港獨有的料理菜譜。一道講究刀工的礁石海域特色料理，習得後可製作斑魚龍利卷。",
        formula: "3水果+1蜂蜜\n(地下暗港找肥皂，前往暗港商店購買)",
        effect: "充飢"
    },
        {
        name: "熔岩龍蝦煮",
        img: "images/熔岩龍蝦煮.png",
        desc: "暗港獨有的料理菜譜。火山海域漁人偏愛的重口吃法，習得後可製作熔岩龍蝦煮。",
        formula: "3水果+1蜂蜜\n(地下暗港找肥皂，前往暗港商店購買)",
        effect: "充飢"
    },
        {
        name: "深淵薄造",
        img: "images/深淵薄造.png",
        desc: "暗港獨有的料理菜譜。記錄了一種處理魚王魚肉的薄切手法，習得後可製作深淵薄造。",
        formula: "3水果+1蜂蜜\n(地下暗港找肥皂，前往暗港商店購買)",
        effect: "充飢"
    },
        {
        name: "蟹王濃湯",
        img: "images/蟹王濃湯.png",
        desc: "暗港獨有的料理菜譜。記錄了一種熬製魚王蟹肉濃湯的方法，習得後可製作蟹王濃湯。",
        formula: "3水果+1蜂蜜\n(地下暗港找肥皂，前往暗港商店購買)",
        effect: "充飢"
    }
];
