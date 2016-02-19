Template.Recipes.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('recipes');
	});
});

Template.Recipes.helpers({
	recipes: ()=>{
		return Recipes.find({});
	},
	showAddRecipe: function(){
		return Session.get('showAdd');
	}
});

Template.Recipes.events({
	'click .fab':function(){
		Session.set('showAdd', !Session.get('showAdd'));
		if(Session.get('showAdd')){
			$("html, body").animate({ scrollTop: 0 }, "slow");
		}
	},
});

Template.Recipe.events({
	'click .toggle-menu': function(){
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	},
	'click .fa-trash': function(){
		Meteor.call('deleteRecipe', this._id);
	}
});

Template.Recipe.helpers({
	updateRecipeId: function(){
		return this._id.toString();
	}
});