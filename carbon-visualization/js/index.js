$(function () {
    echart_1();
    echart_2();

    echart_3();
    echart_4();

    echart_map();
    echart_5();

    function echart_1(){
        //左上
        var dom = document.getElementById('chart_1');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

    option = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} :{d}%'
  },
  legend: {
    top: '10%',
    left: 'center',
    icon:'circle',
    textStyle:{
        fontSize: 8.5,//字体大小
        color: '#ffffff'//字体颜色
    },
  },
  series: [
    {
      name: '2018年全球温室气体排放来源',
      type: 'pie',
      radius: ['40%', '60%'],
      center:['50%','60%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center',
        //formatter: '{d}%'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
    //   type: 'category',
    //   boundaryGap:false,
    // //   改变x轴颜色
    // axisLine:{
    //     lineStyle:{
    //         color:'white',
    //     }
    // }

      data: [
        { value: 31.9, name: '电力和热力用能' },
        { value: 16.9, name: '交通用能' },
        { value: 12.6, name: '制造业/建筑业用能' },
        { value: 5.9, name: '燃料逃逸' },
        { value: 5.9, name: '建筑物用能' },
        { value: 3.0, name: '其他燃料'},
        { value: 11.9, name: '燃料逃逸' },
        { value: 5.9, name: '建筑物用能' },
        { value: 3.3, name: '其他燃料'},
        { value: 2.8, name: '土地利用和林业变化'},
      ]
    }
  ]
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
    }

    function echart_2(){
            //左下dom
            var dom = document.getElementById('chart_2');
            var myChart = echarts.init(dom, null, {
              renderer: 'canvas',
              useDirtyRect: false
            });
            var app = {};
            
            var option;
        
            option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          toolbox: {
            feature: {
              dataView: { show: true, readOnly: false },
              magicType: { show: true, type: ['line', 'bar'] },
              restore: { show: true },
              saveAsImage: { show: true }
            }
          },
          legend: {
            // data: ['Evaporation', 'Precipitation', 'Temperature']
            data: ['煤炭', '石油', '天然气', '新能源'],
            icon:'circle',
            top:30,
            textStyle:{
                fontSize: 10,//字体大小
                color: '#ffffff'//字体颜色
            },
          },
          grid:{
              bottom:25,
              height:160,

          },
          //横坐标
          xAxis: [
            {
              type: 'category',
              data: ['1990', '2000','2010', '2020'],
              axisPointer: {
                type: 'shadow'
              },
              axisLine:{
                  lineStyle:{
                      color:'#ffffff',
                  }
              },
            }
          ],
          yAxis: [
            {
              type: 'value',
            //   name: 'Precipitation',
              name: '能源消费量/10+8E(t)标煤',
              min: 0,
              max: 60,
              interval: 10,
            //   axisLine: {
            //     //formatter: '{value} 10<sub>8</sub>t标煤'
            //   }
            axisLine: {
                lineStyle:{
                    color:'#ffffff',
                }
            },
            },
            {
              type: 'value',
              name: '二氧化碳排放量/10+8E(t)',
              min: 0,
              max: 120,
              interval: 20,
              axisLine: {
                lineStyle:{
                    color:'#ffffff',
                }
            },
            }
          ],
          //数据
          series: [
            {
              name: '煤炭',
              type: 'bar',
              tooltip: {
                valueFormatter: function (value) {
                  return value + ' 10+8E(t)';
                }
              },
              data: [
                7.0, 8.1, 23.4, 25
              ]
            },
            
            {
              name: '石油',
              type: 'bar',
              tooltip: {
                valueFormatter: function (value) {
                  return value + ' 10+8E(t)';
                }
              },
              data: [
                8.7, 11.0, 28.7, 33.4
              ]
            },
            {
                name: '天然气',
                type: 'bar',
                tooltip: {
                  valueFormatter: function (value) {
                    return value + ' 10+8E(t)';
                  }
                },
                data: [
                  8.8, 11.1, 29.1, 16.4
                ]
              },
              {
                name: '新能源',
                type: 'bar',
                tooltip: {
                  valueFormatter: function (value) {
                    return value + ' 10+8E(t)';
                  }
                },
                data: [
                  8.7, 13.0, 34.9, 46.7
                ]
              },
              //线型图
            {
              name: 'CO<sup>2</sup>排放量',
              type: 'line',
              yAxisIndex: 1,
              tooltip: {
                valueFormatter: function (value) {
                  return value + ' 10+8E(t)';
                }
              },
              data: [11.7, 15.1, 40.2, 46.7]
            }
          ]
        };
       
        
            if (option && typeof option === 'object') {
              myChart.setOption(option);
            }
        
            window.addEventListener('resize', myChart.resize);
        }

    function echart_3() {
        // 基于准备好的dom，初始化echarts实例
        // 右上DOM
var myChart = echarts.init(document.getElementById('chart_3'));
        myChart.clear();
    option = {
  xAxis: {
    type: 'category',
    name: '年份',
    boundaryGap: false,
    data: ['2020', '2025', '2030', '2035', '2040', '2045', '2050','2055','2060'],
    axisLine: {
        lineStyle:{
            color:'#ffffff',
        }
    },
  },
  yAxis: {
    type: 'value',
    name: '二氧化碳排放/(Gt/a)',
    axisLine: {
        lineStyle:{
            color:'#ffffff',
        }
    },
  },
  series: [
    {
      data: [10.0, 11.2, 12.0, 11.6, 8.0, 4.0, 2.0, 1.0, 0],
      type: 'line',
      areaStyle: {}
    }
  ]
}

      myChart.setOption(option);
window.addEventListener('resize', myChart.resize);
}

    function echart_4() {
        // 基于准备好的dom，初始化echarts实例
        // 右下框
        var dom = document.getElementById('chart_4');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

    option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    icon:'circle',
    top:20,
    textStyle:{
        fontSize: 10,//字体大小
        color: '#ffffff'//字体颜色
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '1%',
    containLabel: true,
    height:200,
  },
  xAxis: [
    {
      type: 'category',
      data: ['2018', '2020', '2022', '2024', '2026', '2028', '2030', '2032', '2034', '2036', '2038', '2040', '2042', '2044', '2046', '2048', '2050', '2052', '2054', '2056', '2058', '2060'],
      axisLine: {
        lineStyle:{
            color:'#ffffff',
        }
    }
    },
    
  ],
  yAxis: [
    {
      type: 'value',
      axisLine: {
        lineStyle:{
            color:'#ffffff',
        }
    },
    }
  ],
  //数据
  series: [
    {
      name: '其他非二氧化碳温室气体排放',
      type: 'bar',
      emphasis: {
        focus: 'series'
      },
      data: [120,122,124,126,128,130,130,129,127,123,121.5,119.2,116.9,114.6,112.3,110,107.7,105.4,105,104,102,95,93,91,89,87,85,83,81,80,78,75,72,70,67,64.3,61.6,58.9,56.2,53.5,50.8,48.1,48]
    },
    {
      name: '工业过程等其他二氧化碳排放',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series'
      },
      data: [100,102,104,106,108,110,110,109,107,103,101.5,99.2,96.9,94.6,92.3,90,87.7,85.4,85,84,82,75,73,71,69,67,65,63,61,60,58,55,52,50,47,44.3,41.6,38.9,36.2,33.5,30.8,28.1,28]
    },
    {
      name: '能源二氧化碳排放',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series'
      },
      data: [90,92,94,96,98,100,100,99,97,93,91.5,89.2,86.9,84.6,82.3,80,77.7,75.4,75,74,72,70,68,66,64,62,60,58,56,55,55,52,49,47,44,41.3,38.6,35.9,33.2,30.5,27.8,25.1,25]
    },
    {
      name: '负排放',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series'
      },
      data: [-5,-5,-5,-5,-5,-5,-5,-5,-6,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16,-17,-18,-19,-20,-21,-22,-23,-24,-25,-26,-27,-28,-29,-30,-31,-32,-33,-34,-35,-36,-37,-38,-39]
    },
    {
      name: '净排放',
      type: 'bar',
      barWidth: 5,
      stack: 'Search Engine',
      emphasis: {
        focus: 'series'
      },
      data: [114,116,118,120,122,124,124,123,121,117,115.5,113.2,108.9,106.6,102.3,98,96.7,93.4,92,90,90,87,83,78,75,70.5,66.4,62.3,58.2,54.1,50,45.9,41.8,37.7,33.6,29.5,25.4,21.3,17.2,13.1,9,4.9,0]
    },
  ]
}
if (option && typeof option === 'object') {
    myChart.setOption(option);
  }

  window.addEventListener('resize', myChart.resize);
    };

    
function echart_map() {
    // 基于准备好的dom，初始化echarts实例
    // 按钮1
    var dom = document.getElementById('chart_map');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';
    var option;

    option = {
  backgroundColor: '#000',
  globe: {
    baseTexture: ROOT_PATH + '/data-gl/asset/world.topo.bathy.200401.jpg',
    heightTexture: ROOT_PATH + '/data-gl/asset/world.topo.bathy.200401.jpg',
    displacementScale: 0.04,
    shading: 'realistic',
    environment: ROOT_PATH + '/data-gl/asset/starfield.jpg',
    realisticMaterial: {
      roughness: 0.9
    },
    postEffect: {
      enable: true
    },
    light: {
      main: {
        intensity: 5,
        shadow: true
      },
      ambientCubemap: {
        texture: ROOT_PATH + '/data-gl/asset/pisa.hdr',
        diffuseIntensity: 0.2
      }
    }
  }
};
    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }
    window.addEventListener('resize', myChart.resize);
    }

    //点击跳转
    $('#chart_map').click(function(){
        window.location.href = './page/index.html';
    });
    // $('.t_btn2').click(function(){
    //     window.location.href = "./page/index.html?id=2";
    // });
    // $('.t_btn3').click(function(){
    //     window.location.href = "./page/index.html?id=3";
    // });
    $('.t_btn4').click(function(){
        window.location.href = "./page/index.html?id=4";
    });
    $('.t_btn5').click(function(){
        window.location.href = "./page/index.html?id=5";
    });
    $('.t_btn6').click(function(){
        window.location.href = "./page/index.html?id=6";
    });
    $('.t_btn7').click(function(){
        window.location.href = "./page/index.html?id=7";
    });
    $('.t_btn8').click(function(){
        window.location.href = "./page/index.html?id=8";
    });
    $('.t_btn9').click(function(){
        window.location.href = "./page/index.html?id=9";
    });
    //next new
    $('.t_btn3').click(function(){
      window.location.href = "./page/index.html?id=10";
    });
    $('.t_btn14').click(function(){
    window.location.href = "./page/index.html?id=11";
    });
    $('.t_btn2').click(function(){
    window.location.href = "./page/index.html?id=12";
    });
});
