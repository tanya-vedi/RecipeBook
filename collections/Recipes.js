import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
Recipes=new Mongo.Collection('recipes');

Recipes.allow({
	insert:function(userId,Doc){
		return !!userId;
	},
	update:function(userId,Doc){
		return !!userId;
	}
});


RecipeSchema=new SimpleSchema({
	name:{
		type:String,
		label:"NAME"
	},
	inMenu:{
		type:Boolean,
		defaultValue:false,
		optional:true,
		autoform:{type:"hidden"}
	},
	desc:{type:String,
		label:"Description"},

		ingredients:{
			type:Array
		},
		'ingredients.$': {    type: Object  },
		'ingredients.$.name': {    type: String  },
		'ingredients.$.quantity': {    type: String  },
	author:{type:String,
		label:"Author",
		autoValue:function(){
			return this.userId;
		},
		autoform:{type:"hidden"}



	},
	createdAt:{
type:Date,
label:"Created At",
autoValue:function(){
	return new Date();
},
autoform:{type:"hidden"}


}
});

Meteor.methods({
	toggleMenuItem:function(id,currentState){
		Recipes.update(id,{$set:{inMenu:!currentState}});
	},
	deleteRecipe:function(id){
		Recipes.remove(id);
	}
});
Recipes.attachSchema(RecipeSchema);
