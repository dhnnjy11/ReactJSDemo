class CommentList extends React.Component {
    //constructor calls exactly once during life cycle of component, 
    //It is use to set intial state of component
    constructor() {
        super();//use before using this keyword
        this.state = {data:[]}
    }
    componentWillMount() {
        const xhr = new XMLHttpRequest();
        xhr.open('get', this.props.url, 'true');
        xhr.onload = () => {
            const data = JSON.parse(xhr.responseText);
            this.setState({ data: data })
        };
        xhr.send();
    }
    render() {
        const commonNodes = this.state.data.map(c => (
            <CommentBox id={c.id}>{c.text}</CommentBox>
            ))
        return (
            <div className="commentList">
                {commonNodes}
            </div>
            );
    }
}

//This is parent Component
class CommentBox extends React.Component {
    editClick() {
        alert("edit clicked");
    }
    saveClick() {
        alert("save clicked")
    }
    render() {
        return (
            <div id={this.props.id} className="commentBox">
                <h1>Comments</h1>
                <div>
                    <textarea className="form-control col-md-6" rows="3">{this.props.children}</textarea>
                    <button className="btn btn-danger" type="button" onClick={this.editClick}>Edit</button>
                    <button className="btn btn-default" type="button" onClick={this.saveClick}>Save</button>
                </div>
                
            </div>
        );
    }
}

class Comment extends React.Component {
    render() {
        {
            return (
                <div className="comment">
                    <h2 className="commentAuthor">
                        {this.props.author}
                    </h2>
                    <span dangerouslySetInnerHTML={this.rawMarkup()} />
                </div>
            );
        };
    }
}



ReactDOM.render(
    //<CommentList data={data} />, //for getting data from using javascript script object
    <CommentList url="/comments"></CommentList>,//for getting data from url
    document.getElementById('content')
);


/*
 props are immutable, means it can't be changed once it is assigned
 state are mutable, means it can be changed and it uses to when component intract with each other
 state are private for component and can be changed by calling this.setState() and passing object that represent changes in state, when state changes component re-renderd itself

 */