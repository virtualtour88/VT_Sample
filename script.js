TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 120,
  "label": "Dining Area",
  "thumbnailUrl": "media/panorama_11D74645_173A_5B46_41B1_7B33F3BC0CEA_t.jpg",
  "class": "Panorama",
  "mapLocations": [
   {
    "y": 1518.08,
    "angle": 35.01,
    "class": "PanoramaMapLocation",
    "map": {
     "scaleMode": "fit_inside",
     "image": {
      "levels": [
       {
        "url": "media/map_1CEB0D02_1765_7CD3_41B0_4AC7AA8ACBDB.jpeg",
        "height": 952,
        "class": "ImageResourceLevel",
        "width": 1600
       },
       {
        "grayscale": true,
        "url": "media/map_1CEB0D02_1765_7CD3_41B0_4AC7AA8ACBDB_lq.jpeg",
        "height": 476,
        "class": "ImageResourceLevel",
        "width": 800
       }
      ],
      "class": "ImageResource"
     },
     "label": "Floor Plan",
     "thumbnailUrl": "media/map_1CEB0D02_1765_7CD3_41B0_4AC7AA8ACBDB_t.jpg",
     "fieldOfViewOverlayInsideColor": "#00FF66",
     "fieldOfViewOverlayInsideOpacity": 0.17,
     "fieldOfViewOverlayOutsideColor": "#339999",
     "class": "Map",
     "minimumZoomFactor": 1,
     "maximumZoomFactor": 2,
     "overlays": [
      {
       "image": {
        "image": {
         "levels": [
          {
           "url": "media/map_1CEB0D02_1765_7CD3_41B0_4AC7AA8ACBDB_HS_0.png",
           "height": 127,
           "class": "ImageResourceLevel",
           "width": 127
          }
         ],
         "class": "ImageResource"
        },
        "width": 250,
        "x": 168.93,
        "height": 250,
        "y": 1393.08,
        "class": "HotspotMapOverlayImage"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 0)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_1CE328C9_177B_2551_41B4_1F4039F8BD83",
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 250,
        "y": 1393.16,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "levels": [
          {
           "url": "media/map_1CEB0D02_1765_7CD3_41B0_4AC7AA8ACBDB_HS_0_map.gif",
           "height": 63,
           "class": "ImageResourceLevel",
           "width": 63
          }
         ],
         "class": "ImageResource"
        },
        "width": 250,
        "x": 169.01
       }
      },
      {
       "image": {
        "image": {
         "levels": [
          {
           "url": "media/map_1CEB0D02_1765_7CD3_41B0_4AC7AA8ACBDB_HS_1.png",
           "height": 127,
           "class": "ImageResourceLevel",
           "width": 127
          }
         ],
         "class": "ImageResource"
        },
        "width": 250,
        "x": 358.42,
        "height": 250,
        "y": 690.12,
        "class": "HotspotMapOverlayImage"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 1)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_1B55FD03_177D_5CD1_41B2_AEE24E887ADD",
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 250,
        "y": 690.2,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "levels": [
          {
           "url": "media/map_1CEB0D02_1765_7CD3_41B0_4AC7AA8ACBDB_HS_1_map.gif",
           "height": 63,
           "class": "ImageResourceLevel",
           "width": 63
          }
         ],
         "class": "ImageResource"
        },
        "width": 250,
        "x": 358.57
       }
      },
      {
       "image": {
        "image": {
         "levels": [
          {
           "url": "media/map_1CEB0D02_1765_7CD3_41B0_4AC7AA8ACBDB_HS_2.png",
           "height": 127,
           "class": "ImageResourceLevel",
           "width": 127
          }
         ],
         "class": "ImageResource"
        },
        "width": 250,
        "x": 961.11,
        "height": 250,
        "y": 761.64,
        "class": "HotspotMapOverlayImage"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 2)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_1BA37135_177D_6731_4186_4C8DF76E19EE",
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 250,
        "y": 761.72,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "levels": [
          {
           "url": "media/map_1CEB0D02_1765_7CD3_41B0_4AC7AA8ACBDB_HS_2_map.gif",
           "height": 63,
           "class": "ImageResourceLevel",
           "width": 63
          }
         ],
         "class": "ImageResource"
        },
        "width": 250,
        "x": 961.19
       }
      },
      {
       "image": {
        "image": {
         "levels": [
          {
           "url": "media/map_1CEB0D02_1765_7CD3_41B0_4AC7AA8ACBDB_HS_3.png",
           "height": 127,
           "class": "ImageResourceLevel",
           "width": 127
          }
         ],
         "class": "ImageResource"
        },
        "width": 250,
        "x": 851.24,
        "height": 250,
        "y": 1224.75,
        "class": "HotspotMapOverlayImage"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 3)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_1BECECD7_177F_5D71_41B1_E14001AE49AE",
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 250,
        "y": 1224.83,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "levels": [
          {
           "url": "media/map_1CEB0D02_1765_7CD3_41B0_4AC7AA8ACBDB_HS_3_map.gif",
           "height": 63,
           "class": "ImageResourceLevel",
           "width": 63
          }
         ],
         "class": "ImageResource"
        },
        "width": 250,
        "x": 851.31
       }
      },
      {
       "image": {
        "image": {
         "levels": [
          {
           "url": "media/map_1CEB0D02_1765_7CD3_41B0_4AC7AA8ACBDB_HS_4.png",
           "height": 127,
           "class": "ImageResourceLevel",
           "width": 127
          }
         ],
         "class": "ImageResource"
        },
        "width": 250,
        "x": 1622.63,
        "height": 250,
        "y": 758.81,
        "class": "HotspotMapOverlayImage"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 4)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_1B07D562_177D_2F53_41AE_71B44D3B26F4",
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 250,
        "y": 758.89,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "levels": [
          {
           "url": "media/map_1CEB0D02_1765_7CD3_41B0_4AC7AA8ACBDB_HS_4_map.gif",
           "height": 63,
           "class": "ImageResourceLevel",
           "width": 63
          }
         ],
         "class": "ImageResource"
        },
        "width": 250,
        "x": 1622.78
       }
      },
      {
       "image": {
        "image": {
         "levels": [
          {
           "url": "media/map_1CEB0D02_1765_7CD3_41B0_4AC7AA8ACBDB_HS_5.png",
           "height": 127,
           "class": "ImageResourceLevel",
           "width": 127
          }
         ],
         "class": "ImageResource"
        },
        "width": 250,
        "x": 2033.54,
        "height": 250,
        "y": 1083.63,
        "class": "HotspotMapOverlayImage"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 5)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_1A57CE92_177D_3DF3_41B5_8F3BF79CCE2B",
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 250,
        "y": 1083.7,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "levels": [
          {
           "url": "media/map_1CEB0D02_1765_7CD3_41B0_4AC7AA8ACBDB_HS_5_map.gif",
           "height": 63,
           "class": "ImageResourceLevel",
           "width": 63
          }
         ],
         "class": "ImageResource"
        },
        "width": 250,
        "x": 2033.62
       }
      },
      {
       "image": {
        "image": {
         "levels": [
          {
           "url": "media/map_1CEB0D02_1765_7CD3_41B0_4AC7AA8ACBDB_HS_6.png",
           "height": 127,
           "class": "ImageResourceLevel",
           "width": 127
          }
         ],
         "class": "ImageResource"
        },
        "width": 250,
        "x": 1489.91,
        "height": 250,
        "y": 1224.68,
        "class": "HotspotMapOverlayImage"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 6)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "id": "overlay_1B83FCEE_177B_7D53_417B_3B6294CCBDAD",
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true,
       "map": {
        "height": 250,
        "y": 1224.75,
        "offsetX": 0,
        "class": "HotspotMapOverlayMap",
        "offsetY": 0,
        "image": {
         "levels": [
          {
           "url": "media/map_1CEB0D02_1765_7CD3_41B0_4AC7AA8ACBDB_HS_6_map.gif",
           "height": 63,
           "class": "ImageResourceLevel",
           "width": 63
          }
         ],
         "class": "ImageResource"
        },
        "width": 250,
        "x": 1490.07
       }
      }
     ],
     "initialZoomFactor": 1,
     "fieldOfViewOverlayOutsideOpacity": 0.05,
     "fieldOfViewOverlayRadiusScale": 0.16,
     "width": 3125,
     "height": 1861,
     "id": "map_1CEB0D02_1765_7CD3_41B0_4AC7AA8ACBDB"
    },
    "x": 293.93
   }
  ],
  "vfov": 180,
  "hfov": 360,
  "frames": [
   {
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_11D73781_173A_59BE_41B4_4283502804A8, this.camera_0472CB4B_17B3_24E8_41A9_8A67CBCF22D6); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_1C022A97_1746_4BC2_41B5_54970AF36ADC",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_11D74645_173A_5B46_41B1_7B33F3BC0CEA_0_HS_2_0_0_map.gif",
           "height": 15,
           "class": "ImageResourceLevel",
           "width": 15
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.69,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -28.31,
        "hfov": 5.62
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_11D74645_173A_5B46_41B1_7B33F3BC0CEA_0_HS_2_0.png",
           "height": 30,
           "class": "ImageResourceLevel",
           "width": 30
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.69,
        "yaw": -28.31,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.62
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_1C9D4BB6_175E_C9C2_41B4_EB7AA4F93BA2, this.camera_0468EB55_17B3_24F8_41B6_C025DFAC2F5A); this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_1C9F2036_175A_76C2_41AC_F55CE1375D39",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_11D74645_173A_5B46_41B1_7B33F3BC0CEA_0_HS_3_0_0_map.gif",
           "height": 15,
           "class": "ImageResourceLevel",
           "width": 15
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.31,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 9,
        "hfov": 5.62
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_11D74645_173A_5B46_41B1_7B33F3BC0CEA_0_HS_3_0.png",
           "height": 30,
           "class": "ImageResourceLevel",
           "width": 30
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.31,
        "yaw": 9,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.62
       }
      ]
     }
    ],
    "right": {
     "levels": [
      {
       "url": "media/panorama_11D74645_173A_5B46_41B1_7B33F3BC0CEA_r_hq.jpeg",
       "height": 608,
       "class": "ImageResourceLevel",
       "width": 608
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_11D74645_173A_5B46_41B1_7B33F3BC0CEA_f_hq.jpeg",
       "height": 608,
       "class": "ImageResourceLevel",
       "width": 608
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "levels": [
      {
       "url": "media/panorama_11D74645_173A_5B46_41B1_7B33F3BC0CEA_b_hq.jpeg",
       "height": 608,
       "class": "ImageResourceLevel",
       "width": 608
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_11D74645_173A_5B46_41B1_7B33F3BC0CEA_u_hq.jpeg",
       "height": 608,
       "class": "ImageResourceLevel",
       "width": 608
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_11D74645_173A_5B46_41B1_7B33F3BC0CEA_d_hq.jpeg",
       "height": 608,
       "class": "ImageResourceLevel",
       "width": 608
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "url": "media/panorama_11D74645_173A_5B46_41B1_7B33F3BC0CEA_l_hq.jpeg",
       "height": 608,
       "class": "ImageResourceLevel",
       "width": 608
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_11D74645_173A_5B46_41B1_7B33F3BC0CEA_t.jpg"
   }
  ],
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfovMax": 120,
     "label": "Living Room ",
     "thumbnailUrl": "media/panorama_11D73781_173A_59BE_41B4_4283502804A8_t.jpg",
     "class": "Panorama",
     "mapLocations": [
      {
       "y": 815.12,
       "angle": 9.26,
       "class": "PanoramaMapLocation",
       "map": "this.map_1CEB0D02_1765_7CD3_41B0_4AC7AA8ACBDB",
       "x": 483.42
      }
     ],
     "vfov": 180,
     "hfov": 360,
     "frames": [
      {
       "overlays": [
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_11D74645_173A_5B46_41B1_7B33F3BC0CEA, this.camera_045A7B73_17B3_24B8_41A5_F8BC567EA91B); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_1C129E71_1746_4B5E_41B3_4D2C3CAB188E",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_11D73781_173A_59BE_41B4_4283502804A8_0_HS_1_0_0_map.gif",
              "height": 15,
              "class": "ImageResourceLevel",
              "width": 15
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -3.37,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -165.37,
           "hfov": 5.62
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_11D73781_173A_59BE_41B4_4283502804A8_0_HS_1_0.png",
              "height": 30,
              "class": "ImageResourceLevel",
              "width": 30
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -3.37,
           "yaw": -165.37,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.62
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 2)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_1CC5B18B_175A_39C2_41B6_290CC9BE0CCD",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_11D73781_173A_59BE_41B4_4283502804A8_0_HS_2_0_0_map.gif",
              "height": 15,
              "class": "ImageResourceLevel",
              "width": 15
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 0,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 124.88,
           "hfov": 5.63
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_11D73781_173A_59BE_41B4_4283502804A8_0_HS_2_0.png",
              "height": 30,
              "class": "ImageResourceLevel",
              "width": 30
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 0,
           "yaw": 124.88,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.63
          }
         ]
        }
       ],
       "right": {
        "levels": [
         {
          "url": "media/panorama_11D73781_173A_59BE_41B4_4283502804A8_r_hq.jpeg",
          "height": 608,
          "class": "ImageResourceLevel",
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "url": "media/panorama_11D73781_173A_59BE_41B4_4283502804A8_f_hq.jpeg",
          "height": 608,
          "class": "ImageResourceLevel",
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "class": "CubicPanoramaFrame",
       "back": {
        "levels": [
         {
          "url": "media/panorama_11D73781_173A_59BE_41B4_4283502804A8_b_hq.jpeg",
          "height": 608,
          "class": "ImageResourceLevel",
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "url": "media/panorama_11D73781_173A_59BE_41B4_4283502804A8_u_hq.jpeg",
          "height": 608,
          "class": "ImageResourceLevel",
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "bottom": {
        "levels": [
         {
          "url": "media/panorama_11D73781_173A_59BE_41B4_4283502804A8_d_hq.jpeg",
          "height": 608,
          "class": "ImageResourceLevel",
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "left": {
        "levels": [
         {
          "url": "media/panorama_11D73781_173A_59BE_41B4_4283502804A8_l_hq.jpeg",
          "height": 608,
          "class": "ImageResourceLevel",
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_11D73781_173A_59BE_41B4_4283502804A8_t.jpg"
      }
     ],
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_11D74645_173A_5B46_41B1_7B33F3BC0CEA",
       "backwardYaw": 145.62,
       "class": "AdjacentPanorama",
       "yaw": -165.37,
       "distance": 1
      }
     ],
     "id": "panorama_11D73781_173A_59BE_41B4_4283502804A8",
     "partial": false,
     "pitch": 0
    },
    "backwardYaw": -5.39,
    "class": "AdjacentPanorama",
    "yaw": -28.31,
    "distance": 1
   },
   {
    "panorama": {
     "hfovMax": 120,
     "label": "Kitchen",
     "thumbnailUrl": "media/panorama_1C9D4BB6_175E_C9C2_41B4_EB7AA4F93BA2_t.jpg",
     "class": "Panorama",
     "mapLocations": [
      {
       "y": 886.64,
       "angle": 0,
       "class": "PanoramaMapLocation",
       "map": "this.map_1CEB0D02_1765_7CD3_41B0_4AC7AA8ACBDB",
       "x": 1086.11
      }
     ],
     "vfov": 180,
     "hfov": 360,
     "frames": [
      {
       "overlays": [
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_11D74645_173A_5B46_41B1_7B33F3BC0CEA, this.camera_047C9B41_17B3_24D8_41B4_693B61409052); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_1CAD7081_174B_D7BE_41A9_92D92E04FD9E",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_1C9D4BB6_175E_C9C2_41B4_EB7AA4F93BA2_0_HS_1_0_0_map.gif",
              "height": 15,
              "class": "ImageResourceLevel",
              "width": 15
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 2.63,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -151.5,
           "hfov": 5.62
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_1C9D4BB6_175E_C9C2_41B4_EB7AA4F93BA2_0_HS_1_0.png",
              "height": 30,
              "class": "ImageResourceLevel",
              "width": 30
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 2.63,
           "yaw": -151.5,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.62
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_1E81D5ED_175B_6F51_41B5_3AB69F2F392A, this.camera_0478DB37_17B3_24B8_4195_EC16AAC8AC29); this.mainPlayList.set('selectedIndex', 3)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_18509951_1746_495E_418C_87BA747C335E",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_1C9D4BB6_175E_C9C2_41B4_EB7AA4F93BA2_0_HS_0_0_0_map.gif",
              "height": 15,
              "class": "ImageResourceLevel",
              "width": 15
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 3.19,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -172.69,
           "hfov": 5.62
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_1C9D4BB6_175E_C9C2_41B4_EB7AA4F93BA2_0_HS_0_0.png",
              "height": 30,
              "class": "ImageResourceLevel",
              "width": 30
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 3.19,
           "yaw": -172.69,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.62
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 4)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_1E257020_175F_24CF_41AD_B63FCA142D54",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_1C9D4BB6_175E_C9C2_41B4_EB7AA4F93BA2_0_HS_2_0_0_map.gif",
              "height": 15,
              "class": "ImageResourceLevel",
              "width": 15
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 2.63,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 165.19,
           "hfov": 5.62
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_1C9D4BB6_175E_C9C2_41B4_EB7AA4F93BA2_0_HS_2_0.png",
              "height": 30,
              "class": "ImageResourceLevel",
              "width": 30
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 2.63,
           "yaw": 165.19,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.62
          }
         ]
        }
       ],
       "right": {
        "levels": [
         {
          "url": "media/panorama_1C9D4BB6_175E_C9C2_41B4_EB7AA4F93BA2_r_hq.jpeg",
          "height": 608,
          "class": "ImageResourceLevel",
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "url": "media/panorama_1C9D4BB6_175E_C9C2_41B4_EB7AA4F93BA2_f_hq.jpeg",
          "height": 608,
          "class": "ImageResourceLevel",
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "class": "CubicPanoramaFrame",
       "back": {
        "levels": [
         {
          "url": "media/panorama_1C9D4BB6_175E_C9C2_41B4_EB7AA4F93BA2_b_hq.jpeg",
          "height": 608,
          "class": "ImageResourceLevel",
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "url": "media/panorama_1C9D4BB6_175E_C9C2_41B4_EB7AA4F93BA2_u_hq.jpeg",
          "height": 608,
          "class": "ImageResourceLevel",
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "bottom": {
        "levels": [
         {
          "url": "media/panorama_1C9D4BB6_175E_C9C2_41B4_EB7AA4F93BA2_d_hq.jpeg",
          "height": 608,
          "class": "ImageResourceLevel",
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "left": {
        "levels": [
         {
          "url": "media/panorama_1C9D4BB6_175E_C9C2_41B4_EB7AA4F93BA2_l_hq.jpeg",
          "height": 608,
          "class": "ImageResourceLevel",
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_1C9D4BB6_175E_C9C2_41B4_EB7AA4F93BA2_t.jpg"
      }
     ],
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "panorama": {
        "hfovMax": 120,
        "label": "Bathroom",
        "thumbnailUrl": "media/panorama_1E81D5ED_175B_6F51_41B5_3AB69F2F392A_t.jpg",
        "class": "Panorama",
        "mapLocations": [
         {
          "y": 1349.75,
          "angle": 179.16,
          "class": "PanoramaMapLocation",
          "map": "this.map_1CEB0D02_1765_7CD3_41B0_4AC7AA8ACBDB",
          "x": 976.24
         }
        ],
        "vfov": 180,
        "hfov": 360,
        "frames": [
         {
          "overlays": [
           {
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_1C9D4BB6_175E_C9C2_41B4_EB7AA4F93BA2, this.camera_0464BB69_17B3_24A8_41B3_5C71605124DF); this.mainPlayList.set('selectedIndex', 2)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_1E38D478_175D_2D3F_41B3_45E4F89E6514",
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_1E81D5ED_175B_6F51_41B5_3AB69F2F392A_0_HS_0_0_0_map.gif",
                 "height": 15,
                 "class": "ImageResourceLevel",
                 "width": 15
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -3,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 164.81,
              "hfov": 5.62
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_1E81D5ED_175B_6F51_41B5_3AB69F2F392A_0_HS_0_0.png",
                 "height": 30,
                 "class": "ImageResourceLevel",
                 "width": 30
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -3,
              "yaw": 164.81,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 5.62
             }
            ]
           }
          ],
          "right": {
           "levels": [
            {
             "url": "media/panorama_1E81D5ED_175B_6F51_41B5_3AB69F2F392A_r_hq.jpeg",
             "height": 608,
             "class": "ImageResourceLevel",
             "width": 608
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "url": "media/panorama_1E81D5ED_175B_6F51_41B5_3AB69F2F392A_f_hq.jpeg",
             "height": 608,
             "class": "ImageResourceLevel",
             "width": 608
            }
           ],
           "class": "ImageResource"
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "levels": [
            {
             "url": "media/panorama_1E81D5ED_175B_6F51_41B5_3AB69F2F392A_b_hq.jpeg",
             "height": 608,
             "class": "ImageResourceLevel",
             "width": 608
            }
           ],
           "class": "ImageResource"
          },
          "top": {
           "levels": [
            {
             "url": "media/panorama_1E81D5ED_175B_6F51_41B5_3AB69F2F392A_u_hq.jpeg",
             "height": 608,
             "class": "ImageResourceLevel",
             "width": 608
            }
           ],
           "class": "ImageResource"
          },
          "bottom": {
           "levels": [
            {
             "url": "media/panorama_1E81D5ED_175B_6F51_41B5_3AB69F2F392A_d_hq.jpeg",
             "height": 608,
             "class": "ImageResourceLevel",
             "width": 608
            }
           ],
           "class": "ImageResource"
          },
          "left": {
           "levels": [
            {
             "url": "media/panorama_1E81D5ED_175B_6F51_41B5_3AB69F2F392A_l_hq.jpeg",
             "height": 608,
             "class": "ImageResourceLevel",
             "width": 608
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_1E81D5ED_175B_6F51_41B5_3AB69F2F392A_t.jpg"
         }
        ],
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_1C9D4BB6_175E_C9C2_41B4_EB7AA4F93BA2",
          "backwardYaw": -180,
          "class": "AdjacentPanorama",
          "yaw": 164.81,
          "distance": 1
         }
        ],
        "id": "panorama_1E81D5ED_175B_6F51_41B5_3AB69F2F392A",
        "partial": false,
        "pitch": 0
       },
       "backwardYaw": -180,
       "class": "AdjacentPanorama",
       "yaw": -172.69,
       "distance": 1
      },
      {
       "panorama": "this.panorama_11D74645_173A_5B46_41B1_7B33F3BC0CEA",
       "backwardYaw": 145.62,
       "class": "AdjacentPanorama",
       "yaw": -151.5,
       "distance": 1
      }
     ],
     "id": "panorama_1C9D4BB6_175E_C9C2_41B4_EB7AA4F93BA2",
     "partial": false,
     "pitch": 0
    },
    "backwardYaw": -180,
    "class": "AdjacentPanorama",
    "yaw": 9,
    "distance": 1
   }
  ],
  "id": "panorama_11D74645_173A_5B46_41B1_7B33F3BC0CEA",
  "partial": false,
  "pitch": 0
 },
 {
  "touchControlMode": "drag_rotation",
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "buttonPlay": {
   "transparencyActive": false,
   "paddingRight": 0,
   "minHeight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_1872EFAD_17BE_FBA8_41B7_19AF20C57CD5.png",
   "rollOverIconURL": "skin/IconButton_1872EFAD_17BE_FBA8_41B7_19AF20C57CD5_rollover.png",
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_1872EFAD_17BE_FBA8_41B7_19AF20C57CD5_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "horizontalAlign": "center",
   "borderSize": 0,
   "height": 38,
   "id": "IconButton_1872EFAD_17BE_FBA8_41B7_19AF20C57CD5",
   "minWidth": 0,
   "width": 38
  },
  "preloadEnabled": false,
  "buttonZoomOut": [
   {
    "transparencyActive": true,
    "paddingRight": 0,
    "minHeight": 0,
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "mode": "push",
    "paddingTop": 0,
    "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB.png",
    "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_rollover.png",
    "class": "IconButton",
    "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_pressed.png",
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "cursor": "hand",
    "horizontalAlign": "center",
    "borderSize": 0,
    "height": 32,
    "id": "IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
    "minWidth": 0,
    "width": 32
   },
   {
    "transparencyActive": false,
    "paddingRight": 0,
    "minHeight": 0,
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "mode": "push",
    "paddingTop": 0,
    "iconURL": "skin/IconButton_18720FAD_17BE_FBA8_41B4_D14DD53F942B.png",
    "rollOverIconURL": "skin/IconButton_18720FAD_17BE_FBA8_41B4_D14DD53F942B_rollover.png",
    "class": "IconButton",
    "pressedIconURL": "skin/IconButton_18720FAD_17BE_FBA8_41B4_D14DD53F942B_pressed.png",
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "cursor": "hand",
    "horizontalAlign": "center",
    "borderSize": 0,
    "height": 30,
    "id": "IconButton_18720FAD_17BE_FBA8_41B4_D14DD53F942B",
    "minWidth": 0,
    "width": 30
   }
  ],
  "buttonPause": {
   "transparencyActive": true,
   "paddingRight": 0,
   "minHeight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "toggle",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1.png",
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "horizontalAlign": "center",
   "borderSize": 0,
   "height": 40,
   "id": "IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
   "minWidth": 0,
   "width": 40
  },
  "buttonMoveRight": [
   {
    "transparencyActive": true,
    "paddingRight": 0,
    "minHeight": 0,
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "mode": "push",
    "paddingTop": 0,
    "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C.png",
    "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_rollover.png",
    "class": "IconButton",
    "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_pressed.png",
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "cursor": "hand",
    "horizontalAlign": "center",
    "borderSize": 0,
    "height": 32,
    "id": "IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
    "minWidth": 0,
    "width": 32
   },
   {
    "transparencyActive": false,
    "paddingRight": 0,
    "minHeight": 0,
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "mode": "push",
    "paddingTop": 0,
    "iconURL": "skin/IconButton_18722FAD_17BE_FBA8_4183_A8121D032E58.png",
    "rollOverIconURL": "skin/IconButton_18722FAD_17BE_FBA8_4183_A8121D032E58_rollover.png",
    "class": "IconButton",
    "pressedIconURL": "skin/IconButton_18722FAD_17BE_FBA8_4183_A8121D032E58_pressed.png",
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "cursor": "hand",
    "horizontalAlign": "center",
    "borderSize": 0,
    "height": 30,
    "id": "IconButton_18722FAD_17BE_FBA8_4183_A8121D032E58",
    "minWidth": 0,
    "width": 30
   }
  ],
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonMoveUp": [
   {
    "transparencyActive": true,
    "paddingRight": 0,
    "minHeight": 0,
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "mode": "push",
    "paddingTop": 0,
    "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689.png",
    "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_rollover.png",
    "class": "IconButton",
    "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_pressed.png",
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "cursor": "hand",
    "horizontalAlign": "center",
    "borderSize": 0,
    "height": 32,
    "id": "IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
    "minWidth": 0,
    "width": 32
   },
   {
    "transparencyActive": false,
    "paddingRight": 0,
    "minHeight": 0,
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "mode": "push",
    "paddingTop": 0,
    "iconURL": "skin/IconButton_18727FAD_17BE_FBA8_41B3_1239C80D58E1.png",
    "rollOverIconURL": "skin/IconButton_18727FAD_17BE_FBA8_41B3_1239C80D58E1_rollover.png",
    "class": "IconButton",
    "pressedIconURL": "skin/IconButton_18727FAD_17BE_FBA8_41B3_1239C80D58E1_pressed.png",
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "cursor": "hand",
    "horizontalAlign": "center",
    "borderSize": 0,
    "height": 30,
    "id": "IconButton_18727FAD_17BE_FBA8_41B3_1239C80D58E1",
    "minWidth": 0,
    "width": 30
   }
  ],
  "buttonPlayLeft": {
   "transparencyActive": true,
   "paddingRight": 0,
   "minHeight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321.png",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_rollover.png",
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "horizontalAlign": "center",
   "borderSize": 0,
   "height": 40,
   "id": "IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
   "minWidth": 0,
   "width": 40
  },
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "buttonPlayRight": {
   "transparencyActive": true,
   "paddingRight": 0,
   "minHeight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingTop": 0,
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B.png",
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_rollover.png",
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "cursor": "hand",
   "horizontalAlign": "center",
   "borderSize": 0,
   "height": 40,
   "id": "IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
   "minWidth": 0,
   "width": 40
  },
  "buttonZoomIn": [
   {
    "transparencyActive": true,
    "paddingRight": 0,
    "minHeight": 0,
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "mode": "push",
    "paddingTop": 0,
    "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D.png",
    "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_rollover.png",
    "class": "IconButton",
    "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_pressed.png",
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "cursor": "hand",
    "horizontalAlign": "center",
    "borderSize": 0,
    "height": 32,
    "id": "IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D",
    "minWidth": 0,
    "width": 32
   },
   {
    "transparencyActive": false,
    "paddingRight": 0,
    "minHeight": 0,
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "mode": "push",
    "paddingTop": 0,
    "iconURL": "skin/IconButton_18721FAD_17BE_FBA8_4192_07BFD5E49DF4.png",
    "rollOverIconURL": "skin/IconButton_18721FAD_17BE_FBA8_4192_07BFD5E49DF4_rollover.png",
    "class": "IconButton",
    "pressedIconURL": "skin/IconButton_18721FAD_17BE_FBA8_4192_07BFD5E49DF4_pressed.png",
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "cursor": "hand",
    "horizontalAlign": "center",
    "borderSize": 0,
    "height": 30,
    "id": "IconButton_18721FAD_17BE_FBA8_4192_07BFD5E49DF4",
    "minWidth": 0,
    "width": 30
   }
  ],
  "buttonMoveDown": [
   {
    "transparencyActive": true,
    "paddingRight": 0,
    "minHeight": 0,
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "mode": "push",
    "paddingTop": 0,
    "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA.png",
    "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_rollover.png",
    "class": "IconButton",
    "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_pressed.png",
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "cursor": "hand",
    "horizontalAlign": "center",
    "borderSize": 0,
    "height": 32,
    "id": "IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA",
    "minWidth": 0,
    "width": 32
   },
   {
    "transparencyActive": false,
    "paddingRight": 0,
    "minHeight": 0,
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "mode": "push",
    "paddingTop": 0,
    "iconURL": "skin/IconButton_18724FAD_17BE_FBA8_41A7_80D7BA40CDB0.png",
    "rollOverIconURL": "skin/IconButton_18724FAD_17BE_FBA8_41A7_80D7BA40CDB0_rollover.png",
    "class": "IconButton",
    "pressedIconURL": "skin/IconButton_18724FAD_17BE_FBA8_41A7_80D7BA40CDB0_pressed.png",
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "cursor": "hand",
    "horizontalAlign": "center",
    "borderSize": 0,
    "height": 30,
    "id": "IconButton_18724FAD_17BE_FBA8_41A7_80D7BA40CDB0",
    "minWidth": 0,
    "width": 30
   }
  ],
  "buttonRestart": [
   {
    "transparencyActive": true,
    "paddingRight": 0,
    "minHeight": 0,
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "mode": "push",
    "paddingTop": 0,
    "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25.png",
    "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_rollover.png",
    "class": "IconButton",
    "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_pressed.png",
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "cursor": "hand",
    "horizontalAlign": "center",
    "borderSize": 0,
    "height": 40,
    "id": "IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
    "minWidth": 0,
    "width": 40
   },
   {
    "transparencyActive": false,
    "paddingRight": 0,
    "minHeight": 0,
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "mode": "push",
    "paddingTop": 0,
    "iconURL": "skin/IconButton_18750FAD_17BE_FBA8_41B0_5A6A982867EA.png",
    "rollOverIconURL": "skin/IconButton_18750FAD_17BE_FBA8_41B0_5A6A982867EA_rollover.png",
    "class": "IconButton",
    "pressedIconURL": "skin/IconButton_18750FAD_17BE_FBA8_41B0_5A6A982867EA_pressed.png",
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "cursor": "hand",
    "horizontalAlign": "center",
    "borderSize": 0,
    "height": 38,
    "id": "IconButton_18750FAD_17BE_FBA8_41B0_5A6A982867EA",
    "minWidth": 0,
    "width": 38
   }
  ],
  "buttonMoveLeft": [
   {
    "transparencyActive": true,
    "paddingRight": 0,
    "minHeight": 0,
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "mode": "push",
    "paddingTop": 0,
    "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08.png",
    "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_rollover.png",
    "class": "IconButton",
    "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_pressed.png",
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "cursor": "hand",
    "horizontalAlign": "center",
    "borderSize": 0,
    "height": 32,
    "id": "IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
    "minWidth": 0,
    "width": 32
   },
   {
    "transparencyActive": false,
    "paddingRight": 0,
    "minHeight": 0,
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "mode": "push",
    "paddingTop": 0,
    "iconURL": "skin/IconButton_1872BFAD_17BE_FBA8_4147_641ED401DA00.png",
    "rollOverIconURL": "skin/IconButton_1872BFAD_17BE_FBA8_4147_641ED401DA00_rollover.png",
    "class": "IconButton",
    "pressedIconURL": "skin/IconButton_1872BFAD_17BE_FBA8_4147_641ED401DA00_pressed.png",
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "cursor": "hand",
    "horizontalAlign": "center",
    "borderSize": 0,
    "height": 30,
    "id": "IconButton_1872BFAD_17BE_FBA8_4147_641ED401DA00",
    "minWidth": 0,
    "width": 30
   }
  ],
  "mouseControlMode": "drag_rotation"
 },
 {
  "viewerArea": "this.MapViewer",
  "buttonZoomOut": [
   "this.IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
   "this.IconButton_18720FAD_17BE_FBA8_41B4_D14DD53F942B"
  ],
  "id": "MapViewerMapPlayer",
  "class": "MapPlayer",
  "buttonZoomIn": [
   "this.IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D",
   "this.IconButton_18721FAD_17BE_FBA8_4192_07BFD5E49DF4"
  ],
  "movementMode": "constrained"
 },
 {
  "timeToIdle": 2000,
  "id": "panorama_11D74645_173A_5B46_41B1_7B33F3BC0CEA_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -0.47,
   "class": "PanoramaCameraPosition",
   "yaw": -34.38
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "id": "sequence_1CB2B06B_17B7_24A8_41B3_7D01F989FAA1"
  },
  "automaticZoomSpeed": 10,
  "idleSequence": "this.sequence_1CB2B06B_17B7_24A8_41B3_7D01F989FAA1"
 },
 "this.panorama_11D73781_173A_59BE_41B4_4283502804A8",
 {
  "timeToIdle": 2000,
  "id": "panorama_11D73781_173A_59BE_41B4_4283502804A8_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -2.23,
   "class": "PanoramaCameraPosition",
   "yaw": 174.61
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "id": "sequence_1C97E9E1_17B7_27D8_41B7_30C60582D18D"
  },
  "automaticZoomSpeed": 10,
  "idleSequence": "this.sequence_1C97E9E1_17B7_27D8_41B7_30C60582D18D"
 },
 "this.panorama_1C9D4BB6_175E_C9C2_41B4_EB7AA4F93BA2",
 {
  "timeToIdle": 2000,
  "id": "panorama_1C9D4BB6_175E_C9C2_41B4_EB7AA4F93BA2_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "id": "sequence_1DE4B017_17B7_6478_41A3_F2CA091478AB"
  },
  "automaticZoomSpeed": 10,
  "idleSequence": "this.sequence_1DE4B017_17B7_6478_41A3_F2CA091478AB"
 },
 "this.panorama_1E81D5ED_175B_6F51_41B5_3AB69F2F392A",
 {
  "timeToIdle": 2000,
  "id": "panorama_1E81D5ED_175B_6F51_41B5_3AB69F2F392A_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "id": "sequence_1DEC8F01_17B7_5C58_4197_122C7543ADFF"
  },
  "automaticZoomSpeed": 10,
  "idleSequence": "this.sequence_1DEC8F01_17B7_5C58_4197_122C7543ADFF"
 },
 {
  "hfovMax": 120,
  "vfov": 180,
  "mapLocations": [
   {
    "y": 883.81,
    "angle": 0,
    "class": "PanoramaMapLocation",
    "map": "this.map_1CEB0D02_1765_7CD3_41B0_4AC7AA8ACBDB",
    "x": 1747.63
   }
  ],
  "label": "Bedroom",
  "frames": [
   {
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 5)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_1EF46097_175B_25F1_419A_3B0780962EB1",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_1D7C78C9_175D_2551_4182_0A8838B00717_0_HS_0_0_0_map.gif",
           "height": 15,
           "class": "ImageResourceLevel",
           "width": 15
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.13,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -137.06,
        "hfov": 5.62
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_1D7C78C9_175D_2551_4182_0A8838B00717_0_HS_0_0.png",
           "height": 30,
           "class": "ImageResourceLevel",
           "width": 30
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.13,
        "yaw": -137.06,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.62
       }
      ]
     }
    ],
    "right": {
     "levels": [
      {
       "url": "media/panorama_1D7C78C9_175D_2551_4182_0A8838B00717_r_hq.jpeg",
       "height": 608,
       "class": "ImageResourceLevel",
       "width": 608
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_1D7C78C9_175D_2551_4182_0A8838B00717_f_hq.jpeg",
       "height": 608,
       "class": "ImageResourceLevel",
       "width": 608
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "levels": [
      {
       "url": "media/panorama_1D7C78C9_175D_2551_4182_0A8838B00717_b_hq.jpeg",
       "height": 608,
       "class": "ImageResourceLevel",
       "width": 608
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_1D7C78C9_175D_2551_4182_0A8838B00717_u_hq.jpeg",
       "height": 608,
       "class": "ImageResourceLevel",
       "width": 608
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_1D7C78C9_175D_2551_4182_0A8838B00717_d_hq.jpeg",
       "height": 608,
       "class": "ImageResourceLevel",
       "width": 608
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "url": "media/panorama_1D7C78C9_175D_2551_4182_0A8838B00717_l_hq.jpeg",
       "height": 608,
       "class": "ImageResourceLevel",
       "width": 608
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_1D7C78C9_175D_2551_4182_0A8838B00717_t.jpg"
   }
  ],
  "hfovMin": 60,
  "partial": false,
  "thumbnailUrl": "media/panorama_1D7C78C9_175D_2551_4182_0A8838B00717_t.jpg",
  "id": "panorama_1D7C78C9_175D_2551_4182_0A8838B00717",
  "class": "Panorama",
  "pitch": 0,
  "hfov": 360
 },
 {
  "timeToIdle": 2000,
  "id": "panorama_1D7C78C9_175D_2551_4182_0A8838B00717_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "id": "sequence_1DD59B52_17B7_24F8_41B6_9E02C688D799"
  },
  "automaticZoomSpeed": 10,
  "idleSequence": "this.sequence_1DD59B52_17B7_24F8_41B6_9E02C688D799"
 },
 {
  "hfovMax": 120,
  "label": "Master Bedroom",
  "thumbnailUrl": "media/panorama_1E89E787_1765_2BD1_4199_3C77B4368C94_t.jpg",
  "class": "Panorama",
  "mapLocations": [
   {
    "y": 1208.63,
    "angle": 88.3,
    "class": "PanoramaMapLocation",
    "map": "this.map_1CEB0D02_1765_7CD3_41B0_4AC7AA8ACBDB",
    "x": 2158.54
   }
  ],
  "vfov": 180,
  "hfov": 360,
  "frames": [
   {
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_1DEE45A3_176B_EFD1_41AE_81BC18922B3E, this.camera_046E9B5F_17B3_24E8_41B5_69FC4C73406A); this.mainPlayList.set('selectedIndex', 6)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_1E89B3B7_1765_6B31_41B6_A94BBD93013E",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_1E89E787_1765_2BD1_4199_3C77B4368C94_0_HS_1_0_0_map.gif",
           "height": 15,
           "class": "ImageResourceLevel",
           "width": 15
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 4.88,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -150,
        "hfov": 5.6
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_1E89E787_1765_2BD1_4199_3C77B4368C94_0_HS_1_0.png",
           "height": 30,
           "class": "ImageResourceLevel",
           "width": 30
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 4.88,
        "yaw": -150,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.6
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_1D5046E3_176D_6D51_4191_3C0106B1AC99",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_1E89E787_1765_2BD1_4199_3C77B4368C94_0_HS_0_0_0_map.gif",
           "height": 15,
           "class": "ImageResourceLevel",
           "width": 15
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 5.25,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -107.06,
        "hfov": 5.6
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_1E89E787_1765_2BD1_4199_3C77B4368C94_0_HS_0_0.png",
           "height": 30,
           "class": "ImageResourceLevel",
           "width": 30
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 5.25,
        "yaw": -107.06,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.6
       }
      ]
     }
    ],
    "right": {
     "levels": [
      {
       "url": "media/panorama_1E89E787_1765_2BD1_4199_3C77B4368C94_r_hq.jpeg",
       "height": 608,
       "class": "ImageResourceLevel",
       "width": 608
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_1E89E787_1765_2BD1_4199_3C77B4368C94_f_hq.jpeg",
       "height": 608,
       "class": "ImageResourceLevel",
       "width": 608
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "levels": [
      {
       "url": "media/panorama_1E89E787_1765_2BD1_4199_3C77B4368C94_b_hq.jpeg",
       "height": 608,
       "class": "ImageResourceLevel",
       "width": 608
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_1E89E787_1765_2BD1_4199_3C77B4368C94_u_hq.jpeg",
       "height": 608,
       "class": "ImageResourceLevel",
       "width": 608
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_1E89E787_1765_2BD1_4199_3C77B4368C94_d_hq.jpeg",
       "height": 608,
       "class": "ImageResourceLevel",
       "width": 608
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "url": "media/panorama_1E89E787_1765_2BD1_4199_3C77B4368C94_l_hq.jpeg",
       "height": 608,
       "class": "ImageResourceLevel",
       "width": 608
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_1E89E787_1765_2BD1_4199_3C77B4368C94_t.jpg"
   }
  ],
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "panorama": {
     "hfovMax": 120,
     "label": "Master Bathroom",
     "thumbnailUrl": "media/panorama_1DEE45A3_176B_EFD1_41AE_81BC18922B3E_t.jpg",
     "class": "Panorama",
     "mapLocations": [
      {
       "y": 1349.68,
       "angle": 181.03,
       "class": "PanoramaMapLocation",
       "map": "this.map_1CEB0D02_1765_7CD3_41B0_4AC7AA8ACBDB",
       "x": 1614.91
      }
     ],
     "vfov": 180,
     "hfov": 360,
     "frames": [
      {
       "overlays": [
        {
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_1E89E787_1765_2BD1_4199_3C77B4368C94, this.camera_0453FB7D_17B3_24A8_4189_3522328AC5A8); this.mainPlayList.set('selectedIndex', 5)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_1D6B27A8_176D_2BDF_41A2_74613D713576",
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_1DEE45A3_176B_EFD1_41AE_81BC18922B3E_0_HS_0_0_0_map.gif",
              "height": 15,
              "class": "ImageResourceLevel",
              "width": 15
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -4.5,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -161.81,
           "hfov": 5.61
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_1DEE45A3_176B_EFD1_41AE_81BC18922B3E_0_HS_0_0.png",
              "height": 30,
              "class": "ImageResourceLevel",
              "width": 30
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -4.5,
           "yaw": -161.81,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 5.61
          }
         ]
        }
       ],
       "right": {
        "levels": [
         {
          "url": "media/panorama_1DEE45A3_176B_EFD1_41AE_81BC18922B3E_r_hq.jpeg",
          "height": 608,
          "class": "ImageResourceLevel",
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "url": "media/panorama_1DEE45A3_176B_EFD1_41AE_81BC18922B3E_f_hq.jpeg",
          "height": 608,
          "class": "ImageResourceLevel",
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "class": "CubicPanoramaFrame",
       "back": {
        "levels": [
         {
          "url": "media/panorama_1DEE45A3_176B_EFD1_41AE_81BC18922B3E_b_hq.jpeg",
          "height": 608,
          "class": "ImageResourceLevel",
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "url": "media/panorama_1DEE45A3_176B_EFD1_41AE_81BC18922B3E_u_hq.jpeg",
          "height": 608,
          "class": "ImageResourceLevel",
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "bottom": {
        "levels": [
         {
          "url": "media/panorama_1DEE45A3_176B_EFD1_41AE_81BC18922B3E_d_hq.jpeg",
          "height": 608,
          "class": "ImageResourceLevel",
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "left": {
        "levels": [
         {
          "url": "media/panorama_1DEE45A3_176B_EFD1_41AE_81BC18922B3E_l_hq.jpeg",
          "height": 608,
          "class": "ImageResourceLevel",
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_1DEE45A3_176B_EFD1_41AE_81BC18922B3E_t.jpg"
      }
     ],
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_1E89E787_1765_2BD1_4199_3C77B4368C94",
       "backwardYaw": -180,
       "class": "AdjacentPanorama",
       "yaw": -161.81,
       "distance": 1
      }
     ],
     "id": "panorama_1DEE45A3_176B_EFD1_41AE_81BC18922B3E",
     "partial": false,
     "pitch": 0
    },
    "backwardYaw": -180,
    "class": "AdjacentPanorama",
    "yaw": -150,
    "distance": 1
   }
  ],
  "id": "panorama_1E89E787_1765_2BD1_4199_3C77B4368C94",
  "partial": false,
  "pitch": 0
 },
 {
  "timeToIdle": 2000,
  "id": "panorama_1E89E787_1765_2BD1_4199_3C77B4368C94_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "id": "sequence_1DDDC629_17B7_2CA8_41A4_C69C23D8E948"
  },
  "automaticZoomSpeed": 10,
  "idleSequence": "this.sequence_1DDDC629_17B7_2CA8_41A4_C69C23D8E948"
 },
 "this.panorama_1DEE45A3_176B_EFD1_41AE_81BC18922B3E",
 {
  "timeToIdle": 2000,
  "id": "panorama_1DEE45A3_176B_EFD1_41AE_81BC18922B3E_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "id": "sequence_1DC6925C_17B6_E4E8_41AC_2444600C5633"
  },
  "automaticZoomSpeed": 10,
  "idleSequence": "this.sequence_1DC6925C_17B6_E4E8_41AC_2444600C5633"
 },
 {
  "items": [
   {
    "media": "this.panorama_11D74645_173A_5B46_41B1_7B33F3BC0CEA",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_18C6815D_17D2_18BF_4195_2A7CD20D9BD7, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_18C6815D_17D2_18BF_4195_2A7CD20D9BD7",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_11D74645_173A_5B46_41B1_7B33F3BC0CEA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "media": "this.panorama_11D73781_173A_59BE_41B4_4283502804A8",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_18C5015D_17D2_18BF_4130_0DF09B00F02E, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_18C5015D_17D2_18BF_4130_0DF09B00F02E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_11D73781_173A_59BE_41B4_4283502804A8_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "media": "this.panorama_1C9D4BB6_175E_C9C2_41B4_EB7AA4F93BA2",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_18C5A15D_17D2_18BF_41B2_82E8B3AD8FFA, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_18C5A15D_17D2_18BF_41B2_82E8B3AD8FFA",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1C9D4BB6_175E_C9C2_41B4_EB7AA4F93BA2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "media": "this.panorama_1E81D5ED_175B_6F51_41B5_3AB69F2F392A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_18C5D15D_17D2_18BF_4194_638937678622, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_18C5D15D_17D2_18BF_4194_638937678622",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1E81D5ED_175B_6F51_41B5_3AB69F2F392A_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "media": "this.panorama_1D7C78C9_175D_2551_4182_0A8838B00717",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_18C4515E_17D2_18BD_41A6_F3448104A5B2, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_18C4515E_17D2_18BD_41A6_F3448104A5B2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1D7C78C9_175D_2551_4182_0A8838B00717_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "media": "this.panorama_1E89E787_1765_2BD1_4199_3C77B4368C94",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_18C4F15E_17D2_18BD_4194_E347A45436CE, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_18C4F15E_17D2_18BD_4194_E347A45436CE",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1E89E787_1765_2BD1_4199_3C77B4368C94_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "media": "this.panorama_1DEE45A3_176B_EFD1_41AE_81BC18922B3E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_18FB115E_17D2_18BD_4191_1CCE26DB6700, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_18FB115E_17D2_18BD_4191_1CCE26DB6700",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_1DEE45A3_176B_EFD1_41AE_81BC18922B3E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 "this.map_1CEB0D02_1765_7CD3_41B0_4AC7AA8ACBDB",
 {
  "items": [
   {
    "media": "this.map_1CEB0D02_1765_7CD3_41B0_4AC7AA8ACBDB",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ],
  "id": "playList_18C7D15C_17D2_18BD_4171_3288A83F45F4",
  "class": "PlayList"
 },
 {
  "id": "audio_1005B2CD_17AF_65E8_41B7_240EB23ECAAC",
  "class": "MediaAudio",
  "autoplay": true,
  "audio": {
   "mp3Url": "media/audio_1005B2CD_17AF_65E8_41B7_240EB23ECAAC.mp3",
   "class": "AudioResource",
   "oggUrl": "media/audio_1005B2CD_17AF_65E8_41B7_240EB23ECAAC.ogg"
  }
 }
], "children": [
 {
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderSize": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "transitionMode": "blending",
  "top": 0,
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipShadowColor": "#333333",
  "paddingLeft": 0,
  "borderRadius": 0,
  "shadow": false,
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontFamily": "Arial",
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBorderRadius": 4,
  "toolTipFontWeight": "normal",
  "toolTipBorderRadius": 3,
  "toolTipFontSize": 12,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadBorderRadius": 0,
  "class": "ViewerArea",
  "toolTipOpacity": 1,
  "playbackBarProgressOpacity": 1,
  "progressLeft": 10,
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarLeft": 0,
  "playbackBarBorderSize": 2,
  "paddingBottom": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipShadowSpread": 0,
  "height": "100%",
  "toolTipBackgroundColor": "#F6F6F6",
  "borderSize": 0,
  "playbackBarHeadHeight": 30,
  "toolTipPaddingRight": 6,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadBorderSize": 0,
  "id": "MainViewer",
  "minWidth": 100,
  "paddingRight": 0,
  "progressOpacity": 1,
  "toolTipPaddingLeft": 6,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBackgroundColorDirection": "vertical",
  "progressRight": 10,
  "playbackBarHeadShadow": true,
  "minHeight": 50,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowVerticalLength": 0,
  "toolTipFontColor": "#606060",
  "progressBackgroundOpacity": 1,
  "playbackBarHeadOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "width": "100%",
  "progressBarOpacity": 1,
  "playbackBarBottom": 10,
  "playbackBarHeadShadowColor": "#000000",
  "progressBorderColor": "#AAAAAA",
  "progressBottom": 1,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressHeight": 20,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressBorderSize": 2,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "toolTipFontStyle": "normal",
  "toolTipPaddingBottom": 4,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowOpacity": 0.7,
  "left": 0,
  "progressBorderRadius": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeight": 20,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadWidth": 6,
  "playbackBarRight": 0,
  "playbackBarBorderColor": "#AAAAAA",
  "toolTipTextShadowColor": "#000000",
  "progressBarBorderRadius": 4
 },
 {
  "scrollBarColor": "#000000",
  "width": "100%",
  "scrollBarOpacity": 0.5,
  "minHeight": 1,
  "bottom": "0%",
  "children": [
   {
    "scrollBarColor": "#000000",
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "minHeight": 20,
    "children": [
     "this.IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
     "this.IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
     "this.IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
     "this.IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
     {
      "scrollBarColor": "#000000",
      "paddingRight": 0,
      "scrollBarOpacity": 0.5,
      "minHeight": 20,
      "children": [
       "this.IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
       "this.IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
       "this.IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA"
      ],
      "paddingLeft": 0,
      "contentOpaque": false,
      "borderRadius": 0,
      "shadow": false,
      "height": "100%",
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver",
      "paddingTop": 0,
      "scrollBarWidth": 10,
      "class": "Container",
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "overflow": "hidden",
      "gap": 4,
      "horizontalAlign": "center",
      "borderSize": 0,
      "id": "Container_570E2E34_5EBE_63DE_41C3_223EC62DD869",
      "minWidth": 20,
      "layout": "vertical",
      "width": 40
     },
     "this.IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
     "this.IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
     {
      "transparencyActive": true,
      "paddingRight": 0,
      "minHeight": 0,
      "paddingLeft": 0,
      "borderRadius": 0,
      "shadow": false,
      "verticalAlign": "middle",
      "mode": "toggle",
      "paddingTop": 0,
      "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B.png",
      "class": "IconButton",
      "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B_pressed.png",
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "cursor": "hand",
      "horizontalAlign": "center",
      "borderSize": 0,
      "height": 40,
      "id": "IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
      "minWidth": 0,
      "width": 40
     },
     "this.IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D"
    ],
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "contentOpaque": false,
    "verticalAlign": "middle",
    "height": "95.07%",
    "scrollBarVisible": "rollOver",
    "paddingTop": 0,
    "scrollBarWidth": 10,
    "class": "Container",
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "overflow": "hidden",
    "gap": 4,
    "horizontalAlign": "center",
    "borderSize": 0,
    "visible": false,
    "id": "Container_570E2E34_5EBE_63DE_41C2_D3D9C61EAF1F",
    "minWidth": 360,
    "layout": "horizontal",
    "width": 360
   }
  ],
  "borderRadius": 0,
  "contentOpaque": false,
  "paddingLeft": 0,
  "shadow": false,
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver",
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "class": "Container",
  "left": "0%",
  "scrollBarMargin": 2,
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "overflow": "scroll",
  "gap": 10,
  "height": 142,
  "horizontalAlign": "center",
  "borderSize": 0,
  "minWidth": 1,
  "layout": "horizontal",
  "paddingRight": 0
 },
 {
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderSize": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "transitionMode": "blending",
  "toolTipShadowColor": "#333333",
  "bottom": "2.91%",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipTextShadowOpacity": 0,
  "borderRadius": 0,
  "paddingLeft": 0,
  "shadow": false,
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontFamily": "Arial",
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBorderRadius": 4,
  "toolTipFontWeight": "normal",
  "toolTipBorderRadius": 3,
  "toolTipFontSize": 12,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadBorderRadius": 0,
  "class": "ViewerArea",
  "toolTipOpacity": 1,
  "progressLeft": 10,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarLeft": 0,
  "playbackBarBorderSize": 2,
  "paddingBottom": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipPaddingRight": 6,
  "toolTipShadowSpread": 0,
  "height": "31.764%",
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "borderSize": 0,
  "playbackBarHeadHeight": 30,
  "playbackBarProgressOpacity": 1,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadBorderSize": 0,
  "id": "MapViewer",
  "minWidth": 1,
  "paddingRight": 0,
  "progressOpacity": 1,
  "toolTipPaddingLeft": 6,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBackgroundColorDirection": "vertical",
  "progressRight": 10,
  "playbackBarHeadShadow": true,
  "minHeight": 1,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowVerticalLength": 0,
  "toolTipFontColor": "#606060",
  "progressBackgroundOpacity": 1,
  "playbackBarHeadOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "width": "29.041%",
  "progressBarOpacity": 1,
  "playbackBarBottom": 0,
  "playbackBarHeadShadowColor": "#000000",
  "progressBorderColor": "#AAAAAA",
  "progressBottom": 2,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressHeight": 20,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressBorderSize": 2,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "toolTipFontStyle": "normal",
  "toolTipPaddingBottom": 4,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeight": 20,
  "right": "1.92%",
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarRight": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarBorderColor": "#AAAAAA",
  "progressBarBorderRadius": 4
 },
 {
  "scrollBarColor": "#000000",
  "paddingRight": 0,
  "minWidth": 20,
  "scrollBarOpacity": 0.5,
  "minHeight": 20,
  "top": "86.56%",
  "bottom": "2.83%",
  "children": [
   "this.IconButton_18750FAD_17BE_FBA8_41B0_5A6A982867EA",
   {
    "transparencyActive": false,
    "paddingRight": 0,
    "minHeight": 0,
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "mode": "push",
    "paddingTop": 0,
    "iconURL": "skin/IconButton_18751FAD_17BE_FBA8_41AF_6B9F9157F868.png",
    "rollOverIconURL": "skin/IconButton_18751FAD_17BE_FBA8_41AF_6B9F9157F868_rollover.png",
    "class": "IconButton",
    "pressedIconURL": "skin/IconButton_18751FAD_17BE_FBA8_41AF_6B9F9157F868_pressed.png",
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "cursor": "hand",
    "horizontalAlign": "center",
    "borderSize": 0,
    "height": 38,
    "id": "IconButton_18751FAD_17BE_FBA8_41AF_6B9F9157F868",
    "minWidth": 0,
    "width": 38
   },
   "this.IconButton_1872EFAD_17BE_FBA8_41B7_19AF20C57CD5",
   {
    "transparencyActive": false,
    "paddingRight": 0,
    "minHeight": 0,
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "mode": "push",
    "paddingTop": 0,
    "iconURL": "skin/IconButton_1872CFAD_17BE_FBA8_418E_17543C605418.png",
    "rollOverIconURL": "skin/IconButton_1872CFAD_17BE_FBA8_418E_17543C605418_rollover.png",
    "class": "IconButton",
    "pressedIconURL": "skin/IconButton_1872CFAD_17BE_FBA8_418E_17543C605418_pressed.png",
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "cursor": "hand",
    "horizontalAlign": "center",
    "borderSize": 0,
    "height": 38,
    "id": "IconButton_1872CFAD_17BE_FBA8_418E_17543C605418",
    "minWidth": 0,
    "width": 38
   },
   {
    "transparencyActive": false,
    "paddingRight": 0,
    "minHeight": 0,
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "mode": "toggle",
    "paddingTop": 0,
    "iconURL": "skin/IconButton_1872DFAD_17BE_FBA8_4159_7CCE365D626C.png",
    "class": "IconButton",
    "pressedIconURL": "skin/IconButton_1872DFAD_17BE_FBA8_4159_7CCE365D626C_pressed.png",
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "cursor": "hand",
    "horizontalAlign": "center",
    "borderSize": 0,
    "height": 38,
    "id": "IconButton_1872DFAD_17BE_FBA8_4159_7CCE365D626C",
    "minWidth": 0,
    "width": 38
   },
   {
    "scrollBarColor": "#000000",
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "minHeight": 20,
    "children": [
     "this.IconButton_1872BFAD_17BE_FBA8_4147_641ED401DA00",
     {
      "scrollBarColor": "#000000",
      "paddingRight": 0,
      "scrollBarOpacity": 0.5,
      "minHeight": 20,
      "children": [
       "this.IconButton_18727FAD_17BE_FBA8_41B3_1239C80D58E1",
       "this.IconButton_18724FAD_17BE_FBA8_41A7_80D7BA40CDB0"
      ],
      "paddingLeft": 0,
      "contentOpaque": false,
      "borderRadius": 0,
      "shadow": false,
      "height": "100%",
      "verticalAlign": "middle",
      "scrollBarVisible": "rollOver",
      "paddingTop": 0,
      "scrollBarWidth": 10,
      "class": "Container",
      "scrollBarMargin": 2,
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "overflow": "hidden",
      "gap": 10,
      "horizontalAlign": "center",
      "borderSize": 0,
      "id": "Container_18726FAD_17BE_FBA8_4179_3598942C974E",
      "minWidth": 20,
      "layout": "vertical",
      "width": 47
     },
     "this.IconButton_18722FAD_17BE_FBA8_4183_A8121D032E58"
    ],
    "paddingLeft": 0,
    "contentOpaque": false,
    "borderRadius": 0,
    "shadow": false,
    "height": "100%",
    "verticalAlign": "middle",
    "scrollBarVisible": "rollOver",
    "paddingTop": 0,
    "scrollBarWidth": 10,
    "class": "Container",
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "overflow": "hidden",
    "gap": 5,
    "horizontalAlign": "center",
    "borderSize": 0,
    "id": "Container_1872AFAD_17BE_FBA8_4192_8725D99A08E4",
    "minWidth": 20,
    "layout": "horizontal",
    "width": 133
   },
   {
    "scrollBarColor": "#000000",
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "minHeight": 20,
    "children": [
     "this.IconButton_18720FAD_17BE_FBA8_41B4_D14DD53F942B",
     "this.IconButton_18721FAD_17BE_FBA8_4192_07BFD5E49DF4"
    ],
    "paddingLeft": 0,
    "contentOpaque": false,
    "borderRadius": 0,
    "shadow": false,
    "height": "100%",
    "verticalAlign": "middle",
    "scrollBarVisible": "rollOver",
    "paddingTop": 0,
    "scrollBarWidth": 10,
    "class": "Container",
    "scrollBarMargin": 2,
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "overflow": "hidden",
    "gap": 10,
    "horizontalAlign": "center",
    "borderSize": 0,
    "id": "Container_18723FAD_17BE_FBA8_41B2_29040FB95F8D",
    "minWidth": 20,
    "layout": "horizontal",
    "width": 85
   }
  ],
  "paddingLeft": 0,
  "borderRadius": 0,
  "shadow": false,
  "contentOpaque": false,
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver",
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "class": "Container",
  "left": "28.17%",
  "scrollBarMargin": 2,
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "overflow": "hidden",
  "gap": 10,
  "horizontalAlign": "center",
  "borderSize": 0,
  "id": "Container_1873FFAD_17BE_FBA8_41A9_3CC94B402B63",
  "layout": "horizontal",
  "width": 487.1
 }
], 
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "buttonToggleMute": [
  "this.IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
  "this.IconButton_1872DFAD_17BE_FBA8_4159_7CCE365D626C"
 ],
 "paddingRight": 0,
 "width": "100%",
 "start": "this.playAudioList([this.audio_1005B2CD_17AF_65E8_41B7_240EB23ECAAC]); this.mainPlayList.set('selectedIndex', 0); this.playList_18C7D15C_17D2_18BD_4171_3288A83F45F4.set('selectedIndex', 0)",
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "minWidth": 20,
 "scripts": {
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "existsKey": function(key){    return key in window; },
  "unregisterKey": function(key){    delete window[key]; },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "registerKey": function(key, value){    window[key] = value; },
  "getKey": function(key){    return window[key]; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); }
 },
 "mouseWheelEnabled": true,
 "paddingLeft": 0,
 "contentOpaque": false,
 "borderRadius": 0,
 "shadow": false,
 "height": "100%",
 "verticalAlign": "top",
 "backgroundPreloadEnabled": true,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "class": "Player",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "overflow": "visible",
 "gap": 10,
 "borderSize": 0,
 "id": "rootPlayer",
 "layout": "absolute"
})