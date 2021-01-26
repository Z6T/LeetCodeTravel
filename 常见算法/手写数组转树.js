     // 例如将 input 转成output的形式
     let input = [
        {
          id: 1,
          val: "学校",
          parentId: null,
        },
        {
          id: 2,
          val: "班级1",
          parentId: 1,
        },
        {
          id: 3,
          val: "班级2",
          parentId: 1,
        },
        {
          id: 4,
          val: "学生1",
          parentId: 2,
        },
        {
          id: 5,
          val: "学生2",
          parentId: 2,
        },
        {
          id: 6,
          val: "学生3",
          parentId: 3,
        },
      ];
  
      let output = {
        id: 1,
        val: "学校",
        children: [
          {
            id: 2,
            val: "班级1",
            children: [
              {
                id: 4,
                val: "学生1",
                children: [],
              },
              {
                id: 5,
                val: "学生2",
                children: [],
              },
            ],
          },
          {
            id: 3,
            val: "班级2",
            children: [
              {
                id: 6,
                val: "学生3",
                children: [],
              },
            ],
          },
        ],
      };
  

      function arrToTree(arr) {
          const map = {}; let res = {};
          for (let i = 0; i < arr.length; i++) {
              const ele = arr[i];
              if (!ele.parentId) {
                  map['root'] = ele;
              } else {
                   map[ele['parentId']] ?  map[ele['parentId']].push(ele):map[ele['parentId']] = [ele]
              }
          }
          res = map['root'];
  
          (function  setTreeChildren(obj) {
              if (!obj.children && map[obj.id]) {
                  obj.children = map[obj.id]
                  obj.children.forEach(function (item) {
                      setTreeChildren(item)
                  })
              }
          })(res)
          return res
      }


      console.log('arrToTree', arrToTree(input))