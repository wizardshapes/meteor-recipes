Template.RecipeFull.onCreated(function() {
	var self = this;
	self.autorun(function() {
		var id = FlowRouter.getParam('id');
		self.subscribe('singleRecipe', id.toString());
	});
});

Template.RecipeFull.helpers({
	recipe: ()=>{
		var id = FlowRouter.getParam('id');
		return Recipes.findOne({_id: id});
	}
});

Template.RecipeFull.events({
	'click .fa-trash': function(){
		var id = FlowRouter.getParam('id');
		Meteor.call('deleteRecipe', id);
		FlowRouter.go('recipes');
	},
	'click .fa-pencil': function(){
		Session.set('editMode', !Session.get('editMode'));
	}
});