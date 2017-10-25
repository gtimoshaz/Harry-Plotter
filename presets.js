{
	"Lines & Curves": {
		"Simple Lines": {
			"datas": [
				{"title":"joker","values":[59,21,30,86,5,75,24,92,80,11,22,83,19,91,99,74]},
				{"title":"batman","values":[51,52,47,6,5,86,95,93,96,22,55,49,21,21,6,49]}
			],
			"labels":{"color":"#fff","ypos":"left","x":3,"y":[50,100],"marks":2},
			"mode":"line",
			"fill":"none",
			"opacity":0.5,
			"linewidth":3,
			"background":"#666",
			"scale":{"top":"auto"},
			"grid":{"x":[0,100]},
			"mouseover":{"radius":4,"linewidth":2,"circle":"#fff","bullet":"#444","shadowbox":"1,1,0,#000","axis":"x"},
			"legends":{"color":"#fff","shadow":"1,1,0,#000"}
		},
		"Stacked Curves - Dark": {
			"datas": [
				{"values":[51,52,47,6,5,86,95,93,96,22,55,49,21,21,6,49],"color":"#fc0"},
				{"values":[59,21,30,86,5,75,24,92,80,11,22,83,19,91,99,74],"color":"#0cf"},
				{"values":[58,0,5,40,82,37,37,77,92,76,38,47,98,43,38,42]}
			],
			"labels":{"y":[25,50,75,100],"color":"#ddd","ypos":"right"},
			"mode":"curve:stack",
			"margins":[5,22,18,1],
			"fill":"solid",
			"anim":1,
			"linewidth":3,
			"scale":{"top":"auto"},
			"mouseover":{"radius":4,"linewidth":0,"circle":"#fff"},
			"legends":{"layout":"h","color":"#fff","x":1,"y":133},
			"bg":"black"
		},
		"Filled Lines" : {
			"datas":[{"values":[1,2,4,8,16,32,16,8,4,2,1]},{"values":[32,16,8,4,2,1,2,4,8,16,32]}],
			"labels":{"ypos":"left+right","y":[25,50,75,100]},
			"mode":"line",
			"opacity":0.5,
			"background":"#fff",
			"linewidth":2,
			"radiuspoint":3,
			"anim":1,
			"scale":{"top":"auto"},
			"mouseover":{"radius":4,"linewidth":2,"circle":"#666"},
			"legends":false
		}
	},
	"Charts": {
		"Simple Chart": {
			"datas": [
				{"title":"in","color":"#393","values":{"May 12":20,"May 13":32,"May 14":55,"May 15":11,"May 16":18}},
				{"title":"out","color":"#933","values":{"May 12":14,"May 13":21,"May 14":66,"May 15":33,"May 16":15}}
			],
			"labels":{"color":"#666","x":1,"y":[0,50,100],"ypos":"left+right"},
			"mode":"chart",
			"fill":"vertical",
			"scale":{"top":"auto"},
			"legends":false,
			"bg":"white",
			"anim":2,
			"barspace":10,
			"mouseover":{"radius":3,"linewidth":3,"circle":"#666","border":"#fff","border2":"#fff","bullet":"#666","header":{"text":"%l","font":"bold 10px \"Sans Serif\""},"text":"%t: %v"}
		},
		"Stacked Charts": {
			"datas": [
				{"title":"batman","values":[51,85,19,34,87,16,78,63,82,70,89,1,67,3,34,43]},
				{"title":"spiderman","values":[97,57,33,99,31,53,29,85,78,68,48,30,43,69,43,9]},
				{"title":"superman","values":[19,42,45,99,27,40,47,47,60,2,73,88,79,38,89,55]}
			],
			"labels":{"color":"#aaa","x":1,"y":[0,50,100]},
			"mode":"chart:stack",
			"fill":"solid",
			"scale":{"top":"auto"},
			"mouseover":{"radius":3,"linewidth":3,"circle":"#666","border":"#fff","border2":"#fff","bullet":"#666"},
			"legends":{"color":"#fff","layout":"h"}
		},
		"Vertical Chart": {
			"datas":[
				{"title":"in","color":"#fc0","values":{"May 12":20,"May 13":32,"May 14":55,"May 15":11,"May 16":18}},
				{"title":"out","color":"#779378","values":[14,21,66,33,15]}
			],
			"labels":{"color":"#333","ypos":"left+right","x":1,"y":[0,50,100]},
			"mode":"chart:vertical",
			"scale":{"top":"auto"},
			"mouseover":{"radius":3,"linewidth":3,"circle":"#666","border":"#fff","border2":"#fff","bullet":"#666"},
			"legends":{"x":240,"color":"#000"},
			"bg":"white"
		}
	},
	"Pies": {
		"Simple Pie": {
			"datas": [
				{"title":"yellow","color":"#fc0","values":[51,52,47,6,5,86,95,93,96,22,55,49,21,21,6,49]},
				{"title":"blue","color":"#0cf","values":[59,21,30,86,5,75,24,92,80,11,22,83,19,91,99,74]},
				{"title":"green","color":"#0f8","values":[58,0,5,40,82,4,37,8,92,1,38,0,98,1,3,3]}
			],
			"mode":"pie",
			"margins":[20,20,20,100],
			"mouseover":{"text":"%t: %p"},
			"legends":{"x":2,"y":2,"font":"normal 12px \"Sans Serif\""},
			"labels":{"x":1,"color":"#444"},
			"bg":"white"
		},
		"Simple Donut": {
			"datas": [
				{"title":"yellow","color":"#fc0","values":[51,52,47,6,5,86,95,93,96,22,55,49,21,21,6,49]},
				{"title":"blue","color":"#0cf","values":[59,21,30,86,5,75,24,92,80,11,22,83,19,91,99,74]},
				{"title":"green","color":"#0f8","values":[58,0,5,40,82,4,37,8,92,1,38,0,98,1,3,3]}
			],
			"mode":"pie:donut",
			"margins":[20,20,20,100],
			"mouseover":{"text":"%t: %p"},
			"legends":{"x":2,"y":2,"font":"normal 12px \"Sans Serif\""},
			"labels":{"x":1,"color":"#444"},
			"bg":"white"
		}
	}
}