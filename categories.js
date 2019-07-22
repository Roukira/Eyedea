new Vue({
    el: ".categories",
    data: () => ({
      activeTab: 0,
      menuItems: [{
          title: "General"
        },
        {
          title: "Health"
        },
        {
          title: "Science"
        },
        {
          title: "Technology"
        }
        ,
        {
          title: "Scenario"
        }
        ,
        {
          title: "Video games"
        },
        {
          title: "More..."
        }
      ]
    }),
    mounted() {
      // set the initial stripe
      let strip = this.$el.querySelector(".categories-strip");
      let activeBtn = this.$el.querySelector('.category.active');
      strip.style.left = this.actualPos(activeBtn, "left") + 'px'
      strip.style.width = activeBtn.getBoundingClientRect().width.toFixed(2) + 'px'
  
    },
  
    methods: {
      actualPos(k, type) {
        let parent = this.$el.getBoundingClientRect()
        let child = k.getBoundingClientRect()
        return child[type] - parent[type]
      },
      onTabSelect(index, e) {
        let payload = {
          e,
          oldIndex: this.activeTab,
          newIndex: index
        };
        this.applyStrip(payload);
        this.activeTab = index;
      },
      applyStrip(data){
        let strip = this.$el.querySelector(".categories-strip");
        let {
          e,
          oldIndex,
          newIndex
        } = data;
        let targetUtils = {
            width: e.target.getBoundingClientRect().width,
            left: this.actualPos(e.target, "left")
        };
        let stripLeft = this.actualPos(e.target, "left")

        if (newIndex > oldIndex){
            setTimeout(() =>{
                strip.style.height = targetUtils.height +"px";
            }
            );
        }
        else if (oldIndex > newIndex){
            setTimeout(() =>{
                strip.style.height = targetUtils.height +"px";
            }
            );
        }
      },
    },
  });
  