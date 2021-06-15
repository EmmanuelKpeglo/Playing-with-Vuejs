let PlanPickerItemComponent = {
  props: {
  	plan: '',
  	selectedPlan: ''
  },
  template: '#plan-picker-item-template',
  computed: {
  	isSelected () {
  		return this.plan === this.selectedPlan
  	}
  },
  methods: {
  	select () {
  		this.$emit('select', this.plan)
  	}
  }
};


let plansContainerComponent = {
  components: {
		'plan-picker-item': PlanPickerItemComponent
	},
  template: '#plans-container-template',
  data () {
  	return {
  		nextPlanTitle: '',
  		plans: [
	      { id: 1, title: 'My journey with Vue' },
	      { id: 2, title: 'Blogging with Vue' },
	      { id: 3, title: 'Why Vue is so fun' }
	   ],
	   nextPlanId: 4,
	   selectedPlan: null
  	}
  },
  methods: {
    addNextPlan: function () {
      this.plans.push({
        id: this.nextPlanId++,
        title: this.nextPlanTitle
      })
      this.nextPlanTitle = '',
      console.log(this.plans)
    },
    selectPlan(plan) {
    	this.selectedPlan = plan
    }
  }
};


let TodoItemComponent = {
	props: ['plan'],
	template: '#todo-item-component-template',
	data () {
		return {
			completed: false
		}
	}
};

new Vue({
  el: '#app',
  components: {
  	'plans-container': plansContainerComponent,
  	'todo-item': TodoItemComponent
  },
  data: {
  	  	plans: [
	      { id: 1, title: 'My journey with Vue' },
	      { id: 2, title: 'Blogging with Vue' },
	      { id: 3, title: 'Why Vue is so fun' }
	   ],
	   toggler: "Hide",
	   state: true
  },
  methods: {
  	showHide: function () {
  		if (this.toggler != "Show") {
  			this.toggler = "Show";
  		}else{
  			this.toggler = "Hide";
  		}
  		this.state = !this.state;
  	}
  }
});

// .fade-enter-active, .fade-leave-active {
//   transition: opacity .5s;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
// }