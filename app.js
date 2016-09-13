var CommentList = React.createClass({
	render: function() {
		return (
				<div className="commentList">
					Hello, world! I am CommentList.
				</div>
			);
	}
});

var CommentForm = React.createClass({
	render: function() {
		return (
				<div className="commentForm"> 
					Hello, world! I am a CommentForm.
				</div>
			);
	}
});

var CommentBox = React.createClass({
	render: function(){
		return (
				<div>
				<h1> Comments </h1>
					<CommentList />
					<CommentForm />
				</div>
			);
	}
});

ReactDOM.render(
	<CommentBox />,
	document.getElementById('content')
	);