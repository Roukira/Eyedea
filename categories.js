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
      strip.style.top = this.actualPos(activeBtn, "top") + 'px'
      strip.style.height = activeBtn.getBoundingClientRect().height.toFixed(2) + 'px'
  
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
 /*       let strip = this.$el.querySelector(".categories-strip");
        let {
          e,
          oldIndex,
          newIndex
        } = data;
        let targetUtils = {
            height: e.target.getBoundingClientRect().height,
            top: this.actualPos(e.target, "top")
        };
        let striptop = this.actualPos(e.target, "top")

        if (newIndex > oldIndex){
            setTimeout(() =>{
                strip.style.top = targetUtils.top +"px";
            }
            );
        }
        else if (oldIndex > newIndex){
            setTimeout(() =>{
                strip.style.top = targetUtils.top +"px";
            }
            );
        }
      },
    },
  });*/
      let direction = null;
      let strip = this.$el.querySelector(".categories-strip");
      let {
        e,
        oldIndex,
        newIndex
      } = data;
      if (newIndex > oldIndex) direction = "bottom"
      else if (oldIndex > newIndex) direction = "top"
      let targetUtils = {
        height: e.target.getBoundingClientRect().height,
        top: this.actualPos(e.target, "top")
      };
      let striptop = this.actualPos(strip, "top")
      if (direction === "bottom") {
        strip.style.height =
          strip.getBoundingClientRect().height +
          (targetUtils.top +
            targetUtils.height -
            (striptop + strip.getBoundingClientRect().height)) +
          "px";
        setTimeout(() => {
          strip.style.top = targetUtils.top + "px";
          strip.style.height = targetUtils.height + "px";
        }, 300);
      } else if (direction === "top") {
        let hole;
        hole = striptop - targetUtils.top;
        strip.style.height = strip.getBoundingClientRect().height + hole + "px";
        strip.style.top = targetUtils.top + "px";
        setTimeout(() => {
          strip.style.height = targetUtils.height + "px";
        }, 300);
      }
    },
  },
});
  
